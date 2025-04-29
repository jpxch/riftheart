import { useState } from "react";

function App() {
  const [riotId, setRiotId] = useState("");
  const [playerData, setPlayerData] = useState<any>(null);
  const [matchIds, setMatchIds] = useState<string[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<any>(null);

  const fetchPlayer = async () => {
    if (!riotId.trim()) {
      console.log("No Riot ID entered!");
      return;
    }
    const encoded = encodeURIComponent(riotId.trim());
    const res = await fetch(`http://127.0.0.1:8000/player/${encoded}`);
    const data = await res.json();

    if (data.success) {
      setPlayerData(data.data);
      console.log("Fetched Player Data:", data.data);
    } else {
      setPlayerData(null);
      console.log("Fetch failed, data");
    }
  };

  const fetchMatchHistory = async () => {
    if (!playerData?.puuid || !playerData?.region) {
      console.log("No PUUID or region available to fetch matches.");
      return;
    }

    const res = await fetch(
      `http://127.0.0.1:8000/matches/${playerData.puuid}/${playerData.region}`
    );
    const data = await res.json();

    if (data.success) {
      setMatchIds(data.data);
    } else {
      setMatchIds([]);
      console.log("Failed to fetch match history.");
    }
  };

  const fetchMatchDetails = async (matchId: string) => {
    const res = await fetch(`http://127.0.0.1:8000/match-details/${matchId}`);
    const data = await res.json();

    if (data.success) {
      setSelectedMatch(data.data);
    } else {
      setSelectedMatch(null);
      console.log("Failed to fetch match details.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchPlayer();
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Riftheart Companion</h1>

      <input
        type="text"
        value={riotId}
        onChange={(e) => setRiotId(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter Riot ID (e.g., Summoner#NA1)"
        style={{ padding: "0.5rem", fontSize: "1rem", width: "300px" }}
      />
      <button
        onClick={fetchPlayer}
        style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}
      >
        Search
      </button>

      {playerData && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Player Info</h2>
          <p>
            <strong>Name:</strong> {playerData.gameName}
          </p>
          <p>
            <strong>Tagline:</strong> {playerData.tagLine}
          </p>
          <p>
            <strong>PUUID:</strong> {playerData.puuid}
          </p>
          <p>
            <strong>Region:</strong> {playerData.region}
          </p>

          <button
            onClick={fetchMatchHistory}
            style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
          >
            Load Match History
          </button>

          {matchIds.length > 0 && (
            <div style={{ marginTop: "2rem" }}>
              <h2>Recent Matches</h2>
              <ul>
                {matchIds.map((matchId) => (
                  <li key={matchId}>
                    <button
                      onClick={() => fetchMatchDetails(matchId)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#82aaff",
                        cursor: "pointer",
                      }}
                    >
                      {matchId}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {selectedMatch && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Match Details</h2>
          <pre
            style={{
              background: "#1e2130",
              padding: "1rem",
              borderRadius: "8px",
              color: "#c3e88d",
            }}
          >
            {JSON.stringify(selectedMatch, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
