"""remove multiple foreign keys

Revision ID: 003006983ee8
Revises: 8b38707badd7
Create Date: 2024-11-19 08:41:23.809030

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel.sql.sqltypes


# revision identifiers, used by Alembic.
revision = '003006983ee8'
down_revision = '8b38707badd7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('task_created_by_fkey', 'task', type_='foreignkey')
    op.drop_column('task', 'created_by')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('task', sa.Column('created_by', sa.UUID(), autoincrement=False, nullable=False))
    op.create_foreign_key('task_created_by_fkey', 'task', 'user', ['created_by'], ['id'])
    # ### end Alembic commands ###