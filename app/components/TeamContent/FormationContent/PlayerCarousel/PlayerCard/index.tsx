import { Player } from "@/app/types/teamContent";

const PlayerCard = ({ image, number, name, position }: Player) => {
  return (
    <div className="text-center p-4 bg-gradient-to-t from-[#4C7D2F] to-[#75AB4D] mx-4  rounded-xl shadow-xl">
      <img
        src={image}
        alt={name}
        className="rounded-xl w-full mb-4"
      />
      <div className="flex justify-center">
        <div className="flex items-center ">
          <h3 className="font-bold text-5xl">{number}</h3>
        </div>
        <div className="mx-4">
          <p className="mt-2 text-xl font-semibold">{name}</p>
          <p className="text-white">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
