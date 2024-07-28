import { Player } from "@/app/types/teamContent";

const PlayerCard = ({ image, number, name, position }: Player) => {
  return (
    <div className="player-card text-center p-4 bg-gradient-to-t from-[#4C7D2F] to-[#75AB4D] mx-4">
      <img src={image} alt={name} className="player-image rounded-xl w-full mb-4" />
      <div className="player-info">
        <p className="player-number font-bold text-xl">{number}</p>
        <p className="player-name mt-2 text-lg">{name}</p>
        <p className="player-position">{position}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
