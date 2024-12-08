import { useFetchFile } from "@/app/hooks/useFetchFile";
import Image from "next/image";

interface Player {
  dorsal: number;
  position: string;
  name: string;
  lastname: string;
  avatar: any;
}

const PlayerCard = ({ dorsal, position, name, lastname, avatar }: Player) => {
  const { data } = useFetchFile(avatar?.key);
  return (
    <div className="text-center p-4 bg-gradient-to-t from-[#4C7D2F] to-[#75AB4D] mx-4 rounded-xl shadow-xl max-w-96">
      <div className="flex justify-center">
        {avatar === null ? (
          <Image
            src="/images/team/avatar-player.png"
            alt={name}
            width={200}
            height={200}
            className="rounded-xl mb-4"
          />
        ) : (
          <img
            src={data || ""}
            alt={name}
            className="rounded-xl mb-4 h-52 object-cover"
          />
        )}
      </div>
      <div className="flex justify-center">
        <div className="flex items-center ">
          <h3 className="font-bold text-5xl">{dorsal}</h3>
        </div>
        <div className="mx-4">
          <p className={`mt-2 font-semibold`}>{name}</p>
          <p className={`font-semibold`}>{lastname}</p>
          <p className="text-white">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
