"use client";
import { useEffect, useState } from "react";
import PlayerCarousel from "./PlayerCarousel";
import Loader from "../../Loader";

const FormationContent = ({ dataPlayers }: any) => {
  const [players, setPlayers] = useState<any>(null);

  useEffect(() => {
    if (dataPlayers) {
      setPlayers(
        dataPlayers.map((player: any) => ({
          id: player.id,
          image: player.image ? player.image : "",
          number: player.dorsal,
          name: player.name,
          lastname: player.lastname,
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
        <Loader />
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
