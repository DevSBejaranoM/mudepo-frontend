"use client";
import { useEffect, useState } from "react";
import PlayerCarousel from "./PlayerCarousel";
import Loader from "../../Loader";

const FormationContent = ({ dataPlayers }: any) => {
  const [players, setPlayers] = useState<any>(null);
  const [goalkeepers, setGoalkeepers] = useState<any>(null);
  const [defenders, setDefenders] = useState<any>(null);
  const [midfielders, setMidfielders] = useState<any>(null);
  const [forwards, setForwards] = useState<any>(null);

  useEffect(() => {
    if (dataPlayers) {
      console.log("DP",dataPlayers);
      setPlayers(
        dataPlayers.map((player: any) => ({
          id: player.id,
          image: player.image ? player.image : "",
          number: player.dorsal,
          name: player.name,
          lastname: player.lastname,
          // position: player.roles.map((role: any) => role).join(", "),
          position: player.position,
        }))
      );
    }
  }, []);

  useEffect(() => {
    if (players) {
      setGoalkeepers(players.filter((player: any) => player.position === "Portero"));
      setDefenders(players.filter((player: any) => player.position === "Defensa"));
      setMidfielders(players.filter((player: any) => player.position === "Centrocampista"));
      setForwards(players.filter((player: any) => player.position === "Delantero"));
    }
  }, [players]);

  return (
    <div className="mx-auto p-4">
      {!players && (
        <div className="text-center">
        <h2 className="text-3xl">No hay jugadores</h2>
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
