let cachedPatch: string | null = null;

export async function getCurrentPatch(): Promise<string> {
  if (cachedPatch) return cachedPatch;

  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data = await res.json();
  cachedPatch = data[0];
  return cachedPatch;
}
