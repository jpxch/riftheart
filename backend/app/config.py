from dotenv import load_dotenv
import os

load_dotenv()

env_path = os.path.join(os.path.dirname(__file__), "..", ".env")
load_dotenv(dotenv_path=env_path)

RIOT_API_KEY = os.getenv("RIOT_API_KEY")

if not RIOT_API_KEY:
    raise ValueError("Missing RIOT_API_KEY in .env")
