let patchVersion: string = "25.9.1";

export function setPatchVersion(newPatch: string) {
  patchVersion = newPatch;
}

export function getChampionIcon(championName: string) {
  return `https://ddragon.leagueoflegends.com/cdn/${patchVersion}/img/champion/${championName}.png`;
}

export const spellMap: Record<number, string> = {
  4: "SummonerFlash",
  14: "SummonerDot",
  7: "SummonerHeal",
  11: "SummonerSmite",
  6: "SummonerHaste",
  3: "SummonerExhaust",
  12: "SummonerTeleport",
  21: "SummonerBarrier",
  13: "SummonerMana",
  1: "SummonerBoost",
  32: "SummonerSnowball",
};

export function getSpellIcon(id: number) {
  const fileName = spellMap[id];
    return fileName
        ? `https://ddragon.leagueoflegends.com/cdn/${patchVersion}/img/spell/${fileName}.png`
        : `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-spells/${id}.png`;
}

export function getItemIcon(itemId: number) {
  return `https://ddragon.leagueoflegends.com/cdn/${patchVersion}/img/item/${itemId}.png`;
}
