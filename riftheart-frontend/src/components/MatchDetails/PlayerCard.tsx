import React from "react";
import "./PlayerCard.css";

interface PlayerCardProps {
  championIcon: string;
  championName: string;
  summonerName: string;
  level: number;
  summonerSpells: string[];
  runes: string[];
  items: string[];
  kda: { kills: number; deaths: number; assists: number };
  cs: number;
  gold: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  championIcon,
  championName,
  summonerName,
  level,
  summonerSpells,
  runes,
  items,
  kda,
  cs,
  gold,
}) => {
  return (
    <div className="player-card">
      <div className="top-row">
        <img src={championIcon} alt="Chmapion" className="champion-icon" />
        <div className="champion-info">
          <div className="champion-name">
            {championName} <span className="champion-level">Lv. {level}</span>
          </div>
          <div className="summoner-name">{summonerName}</div>
        </div>
      </div>

      <div className="summoner-spells">
        {summonerSpells.map((spell, i) => (
          <img
            key={i}
            src={spell}
            alt={`Spell ${i + 1}`}
            className="spell-icon"
          />
        ))}
      </div>

      <div className="runes">
        {runes.map((rune, i) => (
          <img key={i} src={rune} alt={`Rune ${i + 1}`} className="rune-icon" />
        ))}
      </div>

      <div className="items">
        {items.map((item, i) => (
          <img key={i} src={item} alt={`Item $i + 1}`} className="item-icon" />
        ))}
      </div>

      <div className="stats">
        <span>
          KDA: {kda.kills} / {kda.deaths} / {kda.assists}
        </span>
        <span>CS: {cs}</span>
        <span>Gold: {gold.toLocaleString()}g</span>
      </div>
    </div>
  );
};

export default PlayerCard;
