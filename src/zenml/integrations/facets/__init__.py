#  Copyright (c) ZenML GmbH 2023. All Rights Reserved.
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
"""Facets integration for ZenML."""
from typing import Optional, List
from zenml.integrations.constants import FACETS, PANDAS
from zenml.integrations.integration import Integration


class FacetsIntegration(Integration):
    """Definition of Facets integration for ZenML."""

    NAME = FACETS
    REQUIREMENTS = ["facets-overview>=1.0.0"]

    REQUIREMENTS_IGNORED_ON_UNINSTALL = ["pandas"]

    @classmethod
    def activate(cls) -> None:
        """Activate the Facets integration."""
        from zenml.integrations.facets import materializers  # noqa

    @classmethod
    def get_requirements(
        cls, target_os: Optional[str] = None, python_version: Optional[str] = None
    ) -> List[str]:
        """Method to get the requirements for the integration.

        Args:
            target_os: The target operating system to get the requirements for.
            python_version: The Python version to use for the requirements.

        Returns:
            A list of requirements.
        """
        from zenml.integrations.pandas import PandasIntegration

        return cls.REQUIREMENTS + \
            PandasIntegration.get_requirements(target_os=target_os, python_version=python_version)

