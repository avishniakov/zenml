"""Add hidden option for templates [6611d4bcc95b].

Revision ID: 6611d4bcc95b
Revises: 0.80.1
Create Date: 2025-04-07 10:29:26.130057

"""

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "6611d4bcc95b"
down_revision = "0.80.1"
branch_labels = None
depends_on = None


def upgrade() -> None:
    """Upgrade database schema and/or data, creating a new revision."""
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("run_template", schema=None) as batch_op:
        batch_op.add_column(sa.Column("hidden", sa.Boolean(), nullable=True))

    op.execute(
        """
        UPDATE `run_template` 
        SET hidden = 0
        """
    )

    with op.batch_alter_table("run_template", schema=None) as batch_op:
        batch_op.alter_column(
            "hidden",
            existing_type=sa.Boolean(),
            nullable=False,
        )
    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade database schema and/or data back to the previous revision."""
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("run_template", schema=None) as batch_op:
        batch_op.drop_column("hidden")

    # ### end Alembic commands ###
