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
"""Skypilot orchestrator Kubernetes flavor."""

from typing import TYPE_CHECKING, Optional, Type

from zenml.constants import KUBERNETES_CLUSTER_RESOURCE_TYPE
from zenml.integrations.skypilot.flavors.skypilot_orchestrator_base_vm_config import (
    SkypilotBaseOrchestratorConfig,
    SkypilotBaseOrchestratorSettings,
)
from zenml.integrations.skypilot_kubernetes import (
    SKYPILOT_KUBERNETES_ORCHESTRATOR_FLAVOR,
)
from zenml.logger import get_logger
from zenml.models import ServiceConnectorRequirements
from zenml.orchestrators import BaseOrchestratorConfig, BaseOrchestratorFlavor

if TYPE_CHECKING:
    from zenml.integrations.skypilot_kubernetes.orchestrators import (
        SkypilotKubernetesOrchestrator,
    )


logger = get_logger(__name__)


class SkypilotKubernetesOrchestratorSettings(SkypilotBaseOrchestratorSettings):
    """Skypilot orchestrator settings."""


class SkypilotKubernetesOrchestratorConfig(
    SkypilotBaseOrchestratorConfig, SkypilotKubernetesOrchestratorSettings
):
    """Skypilot orchestrator config."""


class SkypilotKubernetesOrchestratorFlavor(BaseOrchestratorFlavor):
    """Flavor for the Skypilot Kubernetes orchestrator."""

    @property
    def name(self) -> str:
        """Name of the orchestrator flavor.

        Returns:
            Name of the orchestrator flavor.
        """
        return SKYPILOT_KUBERNETES_ORCHESTRATOR_FLAVOR

    @property
    def service_connector_requirements(
        self,
    ) -> Optional[ServiceConnectorRequirements]:
        """Service connector resource requirements for service connectors.

        Specifies resource requirements that are used to filter the available
        service connector types that are compatible with this flavor.

        Returns:
            Requirements for compatible service connectors, if a service
            connector is required for this flavor.
        """
        return ServiceConnectorRequirements(
            resource_type=KUBERNETES_CLUSTER_RESOURCE_TYPE,
        )

    @property
    def docs_url(self) -> Optional[str]:
        """A url to point at docs explaining this flavor.

        Returns:
            A flavor docs url.
        """
        return self.generate_default_docs_url()

    @property
    def sdk_docs_url(self) -> Optional[str]:
        """A url to point at SDK docs explaining this flavor.

        Returns:
            A flavor SDK docs url.
        """
        return self.generate_default_sdk_docs_url()

    @property
    def logo_url(self) -> str:
        """A url to represent the flavor in the dashboard.

        Returns:
            The flavor logo.
        """
        return "https://public-flavor-logos.s3.eu-central-1.amazonaws.com/orchestrator/kubernetes-skypilot.png"

    @property
    def config_class(self) -> Type[BaseOrchestratorConfig]:
        """Config class for the base orchestrator flavor.

        Returns:
            The config class.
        """
        return SkypilotKubernetesOrchestratorConfig

    @property
    def implementation_class(self) -> Type["SkypilotKubernetesOrchestrator"]:
        """Implementation class for this flavor.

        Returns:
            Implementation class for this flavor.
        """
        from zenml.integrations.skypilot_kubernetes.orchestrators import (
            SkypilotKubernetesOrchestrator,
        )

        return SkypilotKubernetesOrchestrator
