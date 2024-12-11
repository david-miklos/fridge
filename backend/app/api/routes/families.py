from typing import Any

from fastapi import APIRouter, HTTPException

from app.api.deps import CurrentUserDep, SessionDep
from app.config import settings
from app.core import crud
from app.core.models import FamilyPublic, ListCreate

router = APIRouter()


@router.post("/", response_model=FamilyPublic)
def create_family(session: SessionDep, current_user: CurrentUserDep, name: str) -> Any:
    """
    Create new family.
    """

    if current_user.family_id:
        raise HTTPException(status_code=403, detail="User is already part of a family")

    family = crud.create_family(session=session, name=name)
    crud.join_family(session=session, db_user=current_user, family_id=family.id)
    crud.promote_user_to_admin(session=session, db_user=current_user)

    crud.create_list(
        session=session,
        list_in=ListCreate(name=settings.DEFAULT_LIST, is_family_list=True),
        relationship_data={"family_id": current_user.family_id},
    )
    crud.create_list(
        session=session,
        list_in=ListCreate(name=settings.DEFAULT_LIST),
        relationship_data={"user_id": current_user.id},
    )

    return family


@router.post("/join", response_model=FamilyPublic)
def join_family(
    session: SessionDep, current_user: CurrentUserDep, invite_code: str
) -> Any:
    """
    Join a family.
    """
    if current_user.family_id:
        raise HTTPException(status_code=403, detail="User is already part of a family")

    family = crud.read_family_by_invite_code(session=session, invite_code=invite_code)
    crud.join_family(session=session, db_user=current_user, family_id=family.id)

    crud.create_list(
        session=session,
        list_in=ListCreate(name=settings.DEFAULT_LIST),
        relationship_data={"user_id": current_user.id},
    )

    return family
