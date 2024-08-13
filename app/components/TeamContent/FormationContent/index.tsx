"use client";
import { useEffect, useState } from "react";
import PlayerCarousel from "./PlayerCarousel";

const FormationContent = ({ dataPlayers }: any) => {
  console.log("dataPlayers", dataPlayers);
  const [players, setPlayers] = useState<any>(null);

  useEffect(() => {
    if (dataPlayers) {
      setPlayers(
        dataPlayers.map((player: any) => ({
          id: player.id,
          image: "/images/team/jugador.webp",
          number: player.dorsal,
          name: `${player.name} ${player.lastname || ""}`,
          position: player.roles.map((role: any) => role).join(", "),
        }))
      );
    }
  }, []);

  // const goalkeepers = players.filter((player) => player.position === "Portero");
  // const defenders = players.filter((player) => player.position === "Defensa");
  // const midfielders = players.filter(
  //   (player) => player.position === "Centrocampista"
  // );
  // const forwards = players.filter((player) => player.position === "Delantero");

  return (
    <div className="mx-auto p-4">
      {!players && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      {players && (
        <>
          <PlayerCarousel title="Portero" players={players} />
          <PlayerCarousel title="Defensa" players={players} />
          <PlayerCarousel title="Centrocampista" players={players} />
          <PlayerCarousel title="Delantero" players={players} />
        </>
      )}
    </div>
  );
};

export default FormationContent;
