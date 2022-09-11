#  Copyright (c) ZenML GmbH 2022. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at:
#
#       https://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
#  or implied. See the License for the specific language governing
#  permissions and limitations under the License.
"""Functionality to support ZenML GlobalConfiguration."""

import json
import os
import uuid
from pathlib import PurePath
from typing import TYPE_CHECKING, Any, Dict, Optional, cast

from packaging import version
from pydantic import BaseModel, Field, ValidationError, validator
from pydantic.main import ModelMetaclass

from zenml import __version__
from zenml.config.store_config import StoreConfiguration
from zenml.exceptions import StackExistsError
from zenml.io import fileio
from zenml.logger import get_logger
from zenml.utils import io_utils, yaml_utils
from zenml.utils.analytics_utils import AnalyticsEvent, track_event

if TYPE_CHECKING:
    from zenml.zen_stores.base_zen_store import BaseZenStore

logger = get_logger(__name__)


LEGACY_CONFIG_FILE_NAME = ".zenglobal.json"
CONFIG_ENV_VAR_PREFIX = "ZENML_"
DEFAULT_STACK_NAME = "default"
# TODO: [server] this is defined in the BaseZenStore already, unsure if that
#  should be imported here


class GlobalConfigMetaClass(ModelMetaclass):
    """Global configuration metaclass.

    This metaclass is used to enforce a singleton instance of the
    GlobalConfiguration class with the following additional properties:

    * the GlobalConfiguration is initialized automatically on import with the
    default configuration, if no config file exists yet.
    * the GlobalConfiguration undergoes a schema migration if the version of the
    config file is older than the current version of the ZenML package.
    * a default store is set if no store is configured yet.
    """

    def __init__(cls, *args: Any, **kwargs: Any) -> None:
        """Initialize a singleton class.

        Args:
            *args: positional arguments
            **kwargs: keyword arguments
        """
        super().__init__(*args, **kwargs)
        cls._global_config: Optional["GlobalConfiguration"] = None

    def __call__(cls, *args: Any, **kwargs: Any) -> "GlobalConfiguration":
        """Create or return the default global config instance.

        If the GlobalConfiguration constructor is called with custom arguments,
        the singleton functionality of the metaclass is bypassed: a new
        GlobalConfiguration instance is created and returned immediately and
        without saving it as the global GlobalConfiguration singleton.

        Args:
            *args: positional arguments
            **kwargs: keyword arguments

        Returns:
            The global GlobalConfiguration instance.
        """
        if args or kwargs:
            return cast(
                "GlobalConfiguration", super().__call__(*args, **kwargs)
            )

        if not cls._global_config:
            cls._global_config = cast(
                "GlobalConfiguration", super().__call__(*args, **kwargs)
            )
            cls._global_config._migrate_config()
            if not cls._global_config.store:
                cls._global_config.set_default_store()
        return cls._global_config


class GlobalConfiguration(BaseModel, metaclass=GlobalConfigMetaClass):
    """Stores global configuration options.

    Configuration options are read from a config file, but can be overwritten
    by environment variables. See `GlobalConfiguration.__getattribute__` for
    more details.

    Attributes:
        user_id: Unique user id.
        analytics_opt_in: If a user agreed to sending analytics or not.
        version: Version of ZenML that was last used to create or update the
            global config.
        store: Store configuration.
        active_stack_name: The name of the active stack.
        active_project_name: The name of the active project.
        _config_path: Directory where the global config file is stored.
    """

    user_id: uuid.UUID = Field(default_factory=uuid.uuid4, allow_mutation=False)
    user_metadata: Optional[Dict[str, str]]
    analytics_opt_in: bool = True
    version: Optional[str]
    store: Optional[StoreConfiguration]
    active_stack_id: Optional[uuid.UUID]
    active_project_name: Optional[str]

    _config_path: str
    _zen_store: Optional["BaseZenStore"] = None

    def __init__(
        self, config_path: Optional[str] = None, **kwargs: Any
    ) -> None:
        """Initializes a GlobalConfiguration object using values from the config file.

        GlobalConfiguration is a singleton class: only one instance can exist.
        Calling this constructor multiple times will always yield the same
        instance (see the exception below).

        The `config_path` argument is only meant for internal use and testing
        purposes. User code must never pass it to the constructor. When a custom
        `config_path` value is passed, an anonymous GlobalConfiguration instance
        is created and returned independently of the GlobalConfiguration
        singleton and that will have no effect as far as the rest of the ZenML
        core code is concerned.

        If the config file doesn't exist yet, we try to read values from the
        legacy (ZenML version < 0.6) config file.

        Args:
            config_path: (internal use) custom config file path. When not
                specified, the default global configuration path is used and the
                global configuration singleton instance is returned. Only used
                to create configuration copies for transfer to different
                runtime environments.
            **kwargs: keyword arguments
        """
        self._config_path = config_path or self.default_config_directory()
        config_values = self._read_config()
        config_values.update(**kwargs)
        super().__init__(**config_values)

        if not fileio.exists(self._config_file(config_path)):
            self._write_config()

    @classmethod
    def get_instance(cls) -> Optional["GlobalConfiguration"]:
        """Return the GlobalConfiguration singleton instance.

        Returns:
            The GlobalConfiguration singleton instance or None, if the
            GlobalConfiguration hasn't been initialized yet.
        """
        return cls._global_config

    @classmethod
    def _reset_instance(
        cls, config: Optional["GlobalConfiguration"] = None
    ) -> None:
        """Reset the GlobalConfiguration singleton instance.

        This method is only meant for internal use and testing purposes.

        Args:
            config: The GlobalConfiguration instance to set as the global
                singleton. If None, the global GlobalConfiguration singleton is
                reset to an empty value.
        """
        cls._global_config = config

    @validator("version")
    def _validate_version(cls, v: Optional[str]) -> Optional[str]:
        """Validate the version attribute.

        Args:
            v: The version attribute value.

        Returns:
            The version attribute value.

        Raises:
            RuntimeError: If the version parsing fails.
        """
        if v is None:
            return v

        if not isinstance(version.parse(v), version.Version):
            # If the version parsing fails, it returns a `LegacyVersion` instead.
            # Check to make sure it's an actual `Version` object which represents
            # a valid version.
            raise RuntimeError(f"Invalid version in global configuration: {v}.")

        return v

    def __setattr__(self, key: str, value: Any) -> None:
        """Sets an attribute on the config and persists the new value in the global configuration.

        Args:
            key: The attribute name.
            value: The attribute value.
        """
        super().__setattr__(key, value)
        if key.startswith("_"):
            return
        self._write_config()

    def __custom_getattribute__(self, key: str) -> Any:
        """Gets an attribute value for a specific key.

        If a value for this attribute was specified using an environment
        variable called `$(CONFIG_ENV_VAR_PREFIX)$(ATTRIBUTE_NAME)` and its
        value can be parsed to the attribute type, the value from this
        environment variable is returned instead.

        Args:
            key: The attribute name.

        Returns:
            The attribute value.
        """
        value = super().__getattribute__(key)
        if key.startswith("_"):
            return value

        environment_variable_name = f"{CONFIG_ENV_VAR_PREFIX}{key.upper()}"
        try:
            environment_variable_value = os.environ[environment_variable_name]
            # set the environment variable value to leverage Pydantic's type
            # conversion and validation
            super().__setattr__(key, environment_variable_value)
            return_value = super().__getattribute__(key)
            # set back the old value as we don't want to permanently store
            # the environment variable value here
            super().__setattr__(key, value)
            return return_value
        except (ValidationError, KeyError, TypeError):
            return value

    if not TYPE_CHECKING:
        # When defining __getattribute__, mypy allows accessing non-existent
        # attributes without failing
        # (see https://github.com/python/mypy/issues/13319).
        __getattribute__ = __custom_getattribute__

    def _migrate_config(self) -> None:
        """Migrates the global config to the latest version."""
        curr_version = version.parse(__version__)
        if self.version is None:
            logger.info(
                "Initializing the ZenML global configuration version to %s",
                curr_version,
            )
        else:
            config_version = version.parse(self.version)
            if config_version > curr_version:
                logger.error(
                    "The ZenML global configuration version (%s) is higher "
                    "than the version of ZenML currently being used (%s). "
                    "This may happen if you recently downgraded ZenML to an "
                    "earlier version, or if you have already used a more "
                    "recent ZenML version on the same machine. "
                    "It is highly recommended that you update ZenML to at "
                    "least match the global configuration version, otherwise "
                    "you may run into unexpected issues such as model schema "
                    "validation failures or even loss of information.",
                    config_version,
                    curr_version,
                )
                # TODO [ENG-899]: Give more detailed instruction on how to resolve
                #  version mismatch.
                return

            if config_version == curr_version:
                return

            logger.info(
                "Migrating the ZenML global configuration from version %s "
                "to version %s...",
                config_version,
                curr_version,
            )

        # this will also trigger rewriting the config file to disk
        # to ensure the schema migration results are persisted
        self.version = __version__

    def _read_config(self) -> Dict[str, Any]:
        """Reads configuration options from disk.

        If the config file doesn't exist yet, this method returns an empty
        dictionary.

        Returns:
            A dictionary containing the configuration options.
        """
        config_values = {}
        if fileio.exists(self._config_file()):
            config_values = cast(
                Dict[str, Any],
                yaml_utils.read_yaml(self._config_file()),
            )

        return config_values

    def _write_config(self, config_path: Optional[str] = None) -> None:
        """Writes the global configuration options to disk.

        Args:
            config_path: custom config file path. When not specified, the default
                global configuration path is used.
        """
        config_file = self._config_file(config_path)
        yaml_dict = json.loads(self.json())
        logger.debug(f"Writing config to {config_file}")

        if not fileio.exists(config_file):
            io_utils.create_dir_recursive_if_not_exists(
                config_path or self.config_directory
            )

        yaml_utils.write_yaml(config_file, yaml_dict)

    def _configure_store(
        self,
        config: StoreConfiguration,
        skip_default_registrations: bool = False,
        **kwargs: Any,
    ) -> None:
        """Configure the global zen store.

        This method creates and initializes the global store according to the
        the supplied configuration.

        Args:
            config: The new store configuration to use.
            skip_default_registrations: If `True`, the creation of the default
                stack and user in the store will be skipped.
            **kwargs: Additional keyword arguments to pass to the store
                constructor.
        """
        from zenml.zen_stores.base_zen_store import BaseZenStore

        store = BaseZenStore.create_store(
            config, skip_default_registrations, **kwargs
        )
        if self.store != store.config or not self._zen_store:
            logger.debug(f"Configuring the global store to {store.config}")
            self.store = store.config
            self._zen_store = store

            # Sanitize the global configuration to reflect the new store
            self._sanitize_config()
            self._write_config()

    def _sanitize_config(self) -> None:
        """Sanitize and save the global configuration.

        This method is called to ensure that the global configuration
        doesn't contain outdated information, such as an active stack or project
        that no longer exists.
        """
        from zenml.zen_stores.base_zen_store import DEFAULT_PROJECT_NAME

        # Ensure that the current active project is still valid
        if self.active_project_name:
            try:
                self.zen_store.get_project(self.active_project_name)
            except KeyError:
                logger.warning(
                    "Project '%s' not found. Resetting the global active "
                    "project to the default.",
                    self.active_project_name,
                )
                self.active_project_name = None
        else:
            logger.warning(
                "Global active project not set. Resetting it to the default."
            )

        if self.active_project_name is None:
            self.active_project_name = DEFAULT_PROJECT_NAME

        # Sanitize the active stack
        if self.active_stack_id:
            # Ensure that the active stack is still valid
            try:
                active_stack = self.zen_store.get_stack(
                    stack_id=self.active_stack_id
                )
            except KeyError:
                logger.warning(
                    "Stack with id '%s' not found. Switching the global active "
                    "stack to the default project stack.",
                    self.active_stack_id,
                )
                self.active_stack_id = None
            else:
                if active_stack.project != self.active_project_name:
                    logger.warning(
                        "The stack with id '%s' is not in the '%s' project. "
                        "Switching the global active stack to the default "
                        "project stack.",
                        self.active_stack_id,
                        self.active_project_name,
                    )
                    self.active_stack_id = None
        else:
            logger.warning(
                "The global active stack is not set. Switching the global "
                "active stack to the default stack."
            )

        if not self.active_stack_id and self.active_project_name:
            # If no active stack is set, use the default stack in the project
            # (create one if one is not yet created).
            try:
                default_stack = self.zen_store.get_default_stack(
                    project_name_or_id=self.active_project_name,
                    user_name_or_id=self.zen_store.default_user_id,
                )
            except KeyError:
                default_stack = self.zen_store.register_default_stack(
                    project_name_or_id=self.active_project_name,
                    user_name_or_id=self.zen_store.default_user_id,
                )
            self.active_stack_id = default_stack.id

    @staticmethod
    def default_config_directory() -> str:
        """Path to the default global configuration directory.

        Returns:
            The default global configuration directory.
        """
        return io_utils.get_global_config_directory()

    def _config_file(self, config_path: Optional[str] = None) -> str:
        """Path to the file where global configuration options are stored.

        Args:
            config_path: custom config file path. When not specified, the
                default global configuration path is used.

        Returns:
            The path to the global configuration file.
        """
        return os.path.join(config_path or self._config_path, "config.yaml")

    def copy_configuration(
        self,
        config_path: str,
        load_config_path: Optional[PurePath] = None,
        store_config: Optional[StoreConfiguration] = None,
    ) -> "GlobalConfiguration":
        """Create a copy of the global config using a different configuration path.

        This method is used to copy the global configuration and store it in a
        different configuration path, where it can be loaded in the context of a
        new environment, such as a container image.

        If the global store configuration uses a local database, the database is
        also copied to the new location.

        Args:
            config_path: path where the active configuration copy should be saved
            load_config_path: path that will be used to load the configuration
                copy. This can be set to a value different from `config_path`
                if the configuration copy will be loaded from a different
                path, e.g. when the global config copy is copied to a
                container image. This will be reflected in the paths and URLs
                encoded in the copied store configuration.
            store_config: custom store configuration to use for the copied
                global configuration. If not specified, the current global store
                configuration is used.

        Returns:
            A new global configuration object copied to the specified path.
        """
        from zenml.zen_stores.base_zen_store import BaseZenStore

        self._write_config(config_path)

        config_copy = GlobalConfiguration(config_path=config_path)
        if store_config:
            config_copy.store = store_config
        elif self.store:
            store_class = BaseZenStore.get_store_class(self.store.type)

            store_config_copy = store_class.copy_local_store(
                self.store, config_path, load_config_path
            )
            config_copy.store = store_config_copy

        return config_copy

    @property
    def config_directory(self) -> str:
        """Directory where the global configuration file is located.

        Returns:
            The directory where the global configuration file is located.
        """
        return self._config_path

    def get_default_store(self) -> StoreConfiguration:
        """Get the default store configuration.

        Returns:
            The default store configuration.
        """
        from zenml.zen_stores.base_zen_store import BaseZenStore

        return BaseZenStore.get_default_store_config(path=self.config_directory)

    def set_default_store(self) -> None:
        """Creates and sets the default store configuration.

        Call this method to initialize or revert the store configuration to the
        default store.
        """
        default_store_cfg = self.get_default_store()
        self._configure_store(default_store_cfg)
        logger.info("Using the default store for the global config.")
        track_event(
            AnalyticsEvent.INITIALIZED_STORE,
            {"store_type": default_store_cfg.type.value},
        )

    def set_store(
        self,
        config: StoreConfiguration,
        skip_default_registrations: bool = False,
        **kwargs: Any,
    ) -> None:
        """Update the active store configuration.

        Call this method to validate and update the active store configuration.

        Args:
            config: The new store configuration to use.
            skip_default_registrations: If `True`, the creation of the default
                stack and user in the store will be skipped.
            **kwargs: Additional keyword arguments to pass to the store
                constructor.
        """
        self._configure_store(config, skip_default_registrations, **kwargs)
        logger.info("Updated the global store configuration.")
        track_event(
            AnalyticsEvent.INITIALIZED_STORE,
            {"store_type": config.type.value},
        )

    @property
    def zen_store(self) -> "BaseZenStore":
        """Initialize and/or return the global zen store.

        If the store hasn't been initialized yet, it is initialized when this
        property is first accessed according to the global store configuration.

        Returns:
            The current zen store.
        """
        if not self.store:
            self.set_default_store()
        elif self._zen_store is None:
            self._configure_store(self.store)

        assert self._zen_store is not None

        return self._zen_store

    class Config:
        """Pydantic configuration class."""

        # Validate attributes when assigning them. We need to set this in order
        # to have a mix of mutable and immutable attributes
        validate_assignment = True
        # Ignore extra attributes from configs of previous ZenML versions
        extra = "ignore"
        # all attributes with leading underscore are private and therefore
        # are mutable and not included in serialization
        underscore_attrs_are_private = True
