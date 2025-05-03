import { buildPlayerCardProps } from "../../utils/buildPlayerCardProps";
import PlayerCard from "./PlayerCard";

type Props = {
  matchData: any;
};

const MatchDetailsView: React.FC<Props> = ({ matchData }) => {
  if (!matchData) return <div>Loading match data...</div>;

  const participants = matchData.info.participants;
  const blueTeam = participants.filter((p: any) => p.teamId === 100);
  const redTeam = participants.filter((p: any) => p.teamId === 200);

  return (
    <div className="match-details-view">
      <h2 className="team-label blue-label">Blue Side</h2>
      <div className="team-container">
        {blueTeam.map((p: any, i: number) => (
          <PlayerCard key={`blue-${i}`} {...buildPlayerCardProps(p)} />
        ))}
      </div>

      <h2 className="team=label red-label">Red Side</h2>
      <div className="team-container">
        {redTeam.map((p: any, i: number) => (
          <PlayerCard key={`red-${i}`} {...buildPlayerCardProps(p)} />
        ))}
      </div>
    </div>
  );
};

export default MatchDetailsView;
