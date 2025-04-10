"""make artifacts workspace scoped [41b28cae31ce].

Revision ID: 41b28cae31ce
Revises: 3b1776345020
Create Date: 2025-02-19 23:23:08.133826

"""

import os

import sqlalchemy as sa
import sqlmodel
from alembic import op
from sqlalchemy.orm import Session
from sqlalchemy.sql import column, table

from zenml.constants import (
    DEFAULT_PROJECT_NAME,
    ENV_ZENML_DEFAULT_PROJECT_NAME,
)

# revision identifiers, used by Alembic.
revision = "41b28cae31ce"
down_revision = "3b1776345020"
branch_labels = None
depends_on = None


def upgrade() -> None:
    """Upgrade database schema and/or data, creating a new revision.

    Raises:
        Exception: If the default workspace is not found.
    """
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("artifact", schema=None) as batch_op:
        # First add columns as nullable
        batch_op.add_column(
            sa.Column(
                "workspace_id", sqlmodel.sql.sqltypes.GUID(), nullable=True
            )
        )
        batch_op.add_column(
            sa.Column("user_id", sqlmodel.sql.sqltypes.GUID(), nullable=True)
        )

    # Create a temp table object for the update
    artifact_table = table(
        "artifact",
        column("id", sqlmodel.sql.sqltypes.GUID()),
        column("workspace_id", sqlmodel.sql.sqltypes.GUID()),
    )

    default_workspace_name = os.getenv(
        ENV_ZENML_DEFAULT_PROJECT_NAME, DEFAULT_PROJECT_NAME
    )

    default_workspace_query = sa.text(
        "SELECT id FROM workspace WHERE name = :default_workspace_name LIMIT 1"
    )
    connection = op.get_bind()
    default_workspace_id = connection.execute(
        default_workspace_query,
        {"default_workspace_name": default_workspace_name},
    ).scalar()

    if default_workspace_id is None:
        raise Exception(
            "Default workspace not found. Cannot proceed with migration."
        )

    # Update existing records with the default workspace
    op.execute(
        artifact_table.update().values(workspace_id=default_workspace_id)
    )

    bind = op.get_bind()
    session = Session(bind=bind)

    # Set the artifact owner to the owner of the latest artifact version.
    # NOTE: we skip this for SQLite because the subquery will fail.
    if bind.dialect.name != "sqlite":
        session.execute(
            sa.text(
                """
                UPDATE artifact a
                SET user_id = (
                    SELECT v.user_id
                    FROM `artifact_version` v
                    WHERE v.artifact_id = a.id
                    ORDER BY v.created DESC
                    LIMIT 1
                )
            """
            ),
        )

    # Now make workspace_id non-nullable
    with op.batch_alter_table("artifact", schema=None) as batch_op:
        batch_op.alter_column(
            "workspace_id",
            existing_type=sqlmodel.sql.sqltypes.GUID(),
            nullable=False,
        )

        # Add foreign key constraints
        batch_op.create_foreign_key(
            "fk_artifact_workspace_id_workspace",
            "workspace",
            ["workspace_id"],
            ["id"],
            ondelete="CASCADE",
        )
        batch_op.create_foreign_key(
            "fk_artifact_user_id_user",
            "user",
            ["user_id"],
            ["id"],
            ondelete="SET NULL",
        )


def downgrade() -> None:
    """Downgrade database schema and/or data back to the previous revision."""
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("artifact", schema=None) as batch_op:
        batch_op.drop_constraint(
            "fk_artifact_user_id_user", type_="foreignkey"
        )
        batch_op.drop_constraint(
            "fk_artifact_workspace_id_workspace", type_="foreignkey"
        )
        batch_op.drop_column("user_id")
        batch_op.drop_column("workspace_id")

    # ### end Alembic commands ###
