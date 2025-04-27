from fastapi import APIRouter, HTTPException
from app.services.riot_api import (
    get_puuid_by_riot_id,
    get_match_ids_by_puuid,
    get_match_details_by_id,
    get_region_from_tagline,

)


router = APIRouter()

@router.get("/player/{riot_id}")
def lookup_account(riot_id: str):
    if "#" not in riot_id:
        raise HTTPException(status_code=400, detail="Invalid Riot ID. Use format name#tagline")

    name, tagline = riot_id.split("#")

    try:
        account_info = get_puuid_by_riot_id(name, tagline)
        return {
            "success": True,
            "data": {
                "puuid": account_info["puuid"],
                "gameName": account_info["gameName"],
                "tagLine": account_info["tagLine"],
                "region": account_info["region"]
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/matches/{puuid}/{platform}")
def get_matches_by_puuid(puuid: str, platform: str):
    try:
        region = get_region_from_tagline(platform)
        match_ids = get_match_ids_by_puuid(puuid, region)

        return {
            "success": True,
            "data": match_ids
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/match/{region}/{match_id}")
def get_match_details(region: str, match_id: str):
    try:
        match_data = get_match_details_by_id(match_id, region)
        return {
            "success": True,
            "data": match_data
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


