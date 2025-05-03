import { getChampionIcon, getItemIcon, getSpellIcon } from "./mappings";
import { getRuneIcon } from "./runePathMap";

export function buildPlayerCardProps(participant: any) {
  const primaryRunes = participant.perks.styles[0]?.selections || [];
  const secondaryRunes = participant.perks.styles[1]?.selections || [];

  return {
    championIcon: getChampionIcon(participant.championName),
    championName: participant.championName,
    summonerName: participant.summonerName,
    level: participant.championLevel,

    summonerSpells: [
      getSpellIcon(participant.summoner1Id),
      getSpellIcon(participant.summoner2Id),
    ],
    runes: [
      ...primaryRunes.map((p: any) => getRuneIcon(p.perk)),
      ...secondaryRunes.map((p: any) => getRuneIcon(p.perk)),
    ],
    items: [
      getItemIcon(participant.item0),
      getItemIcon(participant.item1),
      getItemIcon(participant.item2),
      getItemIcon(participant.item3),
      getItemIcon(participant.item4),
      getItemIcon(participant.item5),
      getItemIcon(participant.item6),
    ],
    kda: {
      kills: participant.kills,
      deaths: participant.deaths,
      assists: participant.assists,
    },
    cs: participant.totalMinionsKilled + participant.neutralMinionsKilled,
    gold: participant.goldEarned,
  };
}
