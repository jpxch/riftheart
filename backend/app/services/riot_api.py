import requests
from app.config import RIOT_API_KEY

def get_region_from_tagline(tagline: str) -> str:
    americas = {"NA1", "BR1", "LA1", "LA2"}
    europe = {"EUW1", "EUN1", "TR1", "RU"}
    asia = {"KR", "JP1", "OC1"}

    tagline = tagline.upper()

    if tagline in americas:
        return "americas"
    elif tagline in europe:
        return "europe"
    elif tagline in asia:
        return "asia"
    else:
        return "americas"

def get_puuid_by_riot_id(name:str, tagline:str) -> dict:
    url = f"https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{name}/{tagline}"
    headers = {"X-Riot-Token": RIOT_API_KEY}

    print("[DEBUG] Calling Riot API with:", url)
    print("[DEBUG] API Key Present:", bool(RIOT_API_KEY))

    response = requests.get(url, headers=headers)

    print("[DEBUG] Response Status:", response.status_code)
    print("[DEBUG] Response Body:", response.text)

    if response.status_code != 200:
        raise Exception(f"Riot API error: {response.status_code} - {response.text}")

    return {
        "puuid": response.json()["puuid"],
        "gameName": response.json()["gameName"],
        "tagLine": response.json()["tagLine"],
        "region": get_region_from_tagline(response.json()["tagLine"])
    }

def get_match_ids_by_puuid(puuid:str, region:str, count: int = 5):
    url = f"https://{region}.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids"
    headers = {"X-Riot-Token": RIOT_API_KEY}
    params = {"start": 0, "count":count}

    print("[DEBUG] Calling Match History API:", url)
    response = requests.get(url, headers=headers, params=params)

    if response.status_code != 200:
        raise Exception(F"Riot API error: {response.status_code} - {response.text}")

    return response.json()
