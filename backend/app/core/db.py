from sqlmodel import Session, create_engine, select

from app.config import settings
from app.core import crud
from app.core.models import User, UserCreate

engine = create_engine(str(settings.SQLALCHEMY_DATABASE_URI))


# make sure all SQLModel models are imported (app.models) before initializing DB
# otherwise, SQLModel might fail to initialize relationships properly
# for more details: https://github.com/fastapi/full-stack-fastapi-template/issues/28


def init_db(session: Session) -> None:
    # Tables should be created with Alembic migrations
    # But if you don't want to use migrations, create
    # the tables un-commenting the next lines
    # from sqlmodel import SQLModel

    # This works because the models are already imported and registered from app.models
    # SQLModel.metadata.create_all(engine)

    admin_user = session.exec(
        select(User).where(User.email == settings.ADMIN_USER)
    ).first()
    if not admin_user:
        user_in = UserCreate(
            email=settings.ADMIN_USER,
            password=settings.ADMIN_USER_PASSWORD,
            is_admin=True,
        )
        _ = crud.create_user(session=session, user_create=user_in)

    test_user = session.exec(
        select(User).where(User.email == settings.TEST_USER)
    ).first()
    if not test_user:
        user_in = UserCreate(
            email=settings.TEST_USER,
            password=settings.TEST_USER_PASSWORD,
        )
        _ = crud.create_user(session=session, user_create=user_in)
