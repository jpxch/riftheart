import requests
from app.config import RIOT_API_KEY

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

    return response.json()
