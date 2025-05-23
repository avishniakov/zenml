#  Copyright (c) ZenML GmbH 2024. All Rights Reserved.
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
"""Initialization of the Numpy integration."""

from zenml.integrations.constants import NUMPY
from zenml.integrations.integration import Integration


class NumpyIntegration(Integration):
    """Definition of Numpy integration for ZenML."""

    NAME = NUMPY
    # Support both NumPy 1.x and 2.x
    # Note: Some other integrations (like evidently) may require NumPy <2.0
    # until they are updated for NumPy 2.0 compatibility
    REQUIREMENTS = ["numpy<3.0"]

    @classmethod
    def activate(cls) -> None:
        """Activates the integration."""
        from zenml.integrations.numpy import materializers  # noqa

