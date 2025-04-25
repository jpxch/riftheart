from fastapi import APIRouter, HTTPException
from app.services.riot_api import get_puuid_by_riot_id

router = APIRouter()

@router.get("/riotid/{riot_id}")
def lookup_account(riot_id: str):
    if "#" not in riot_id:
        raise HTTPException(status_code=400, detail="Invalid Riot ID. Use format name#tagline")

    name, tagline = riot_id.split("#")
    try:
        account_info = get_puuid_by_riot_id(name, tagline)
        return {"account": account_info}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
