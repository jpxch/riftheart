import { useState } from "react";

function App() {
  const [riotId, setRiotId] = useState("");
  const [playerData, setPlayerData] = useState<any>(null);

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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          fetchPlayer()
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
      <button onClick={fetchPlayer} style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}>
        Search
      </button>

      {playerData && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Player Info</h2>
          <p><strong>Name:</strong> {playerData.gameName}</p>
          <p><strong>Tagline:</strong> {playerData.tagLine}</p>
          <p><strong>PUUID:</strong> {playerData.puuid}</p>
          <p><strong>Region:</strong> {playerData.region}</p>
        </div>
      )}
    </div>
  );
}

export default App;
