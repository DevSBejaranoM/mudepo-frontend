import Image from "next/image";

const PlayerCard = (player: any) => {
  return (
    <div className="text-center p-4 bg-gradient-to-t from-[#4C7D2F] to-[#75AB4D] mx-4 rounded-xl shadow-xl max-w-96">
      <div className="flex justify-center">
        {!player?.avatar?.signedUrl ? (
          <Image
            src="/images/team/avatar-player.png"
            alt={"avatar"}
            width={200}
            height={200}
            className="rounded-xl mb-4"
          />
        ) : (
          <img
            src={player?.avatar?.signedUrl || ""}
            alt={"avatar"}
            className="rounded-xl mb-4 h-52 object-cover"
          />
        )}
      </div>
      <div className="flex justify-center">
        <div className="flex items-center ">
          <h3 className="font-bold text-5xl">{player?.playerData?.dorsal}</h3>
        </div>
        <div className="mx-4">
          <p className={`mt-2 font-semibold`}>{player?.name?.toUpperCase()}</p>
          <p className={`font-semibold`}>{player?.lastName?.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
