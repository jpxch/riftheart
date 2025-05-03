export const runePathMap: Record<number, string> = {
  //Domination
  8112: "perk-images/Styles/Domination/Electrocute/Electrocute.png",
  8126: "perk-images/Styles/Domination/CheapShot/CheapShot.png",
  8138: "perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png",
  8135: "perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png",
  8100: "perk-images/Styles/Domination/Domination.png",

  //Precision
  8005: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png",
  8008: "perk-images/Styles/Precision/LethalTempo/LethalTempo.png",
  8014: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png",
  9101: "perk-images/Styles/Precision/Overheal/Overheal.png",
  8000: "perk-images/Styles/Precision/Precision.png",

  //Sorcery
  8214: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png",
  8229: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png",
  8230: "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png",
  8200: "perk-images/Styles/Sorcery/Sorcery.png",

  //Resolve
  8437: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png",
  8465: "perk-images/Styles/Resolve/Guardian/Guardian.png",
  8439: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png",
  8400: "perk-images/Styles/Resolve/Resolve.png",

  //Inspiration
  8351: "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png",
  8360: "perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png",
  8300: "perk-images/Styles/Inspiration/Inspiration.png",

  //Stat Shards
  5005: "perk-images/StatMods/StatModsAttackSpeedIcon.png",
  5008: "perk-images/StatMods/StatModsAdaptiveForceIcon.png",
  5002: "perk-images/StatMods/StatModsArmorIcon.png",
  5003: "perk-images/StatMods/StatModsMagicResistIcon.png",
  5001: "perk-images/StatMods/StatModsHealthIcon.png",
};

export function getRuneIcon(perkId: number): string {
  const relativePath = runePathMap[perkId];
  return `https://ddragon.leagueoflegends.com/cdm/img/${relativePath}`;
}
