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
  const [notAssigned, setNotAssigned] = useState<any>(null);

  useEffect(() => {
    if (dataPlayers) {
      setPlayers(
        dataPlayers.map((player: any) => ({
          id: player.id,
          image: player.image
            ? player.image
            : "/images/team/avatar-player.jpeg",
          number: player.dorsal,
          name: player.name,
          lastname: player.lastname,
          // position: player.roles.map((role: any) => role).join(", "),
          position: player.position ? player.position : "Sin posición asignada",
        }))
      );
    }
  }, []);

  useEffect(() => {
    if (players) {
      setGoalkeepers(
        players.filter((player: any) => player.position === "Portero")
      );
      setDefenders(
        players.filter((player: any) => player.position === "Defensa")
      );
      setMidfielders(
        players.filter((player: any) => player.position === "Centrocampista")
      );
      setForwards(
        players.filter((player: any) => player.position === "Delantero")
      );
      setNotAssigned(
        players.filter(
          (player: any) => player.position === "Sin posición asignada"
        )
      );
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
          {notAssigned.length && (
            <PlayerCarousel
              title="Sin posición asignada"
              players={notAssigned}
            />
          )}
          {!goalkeepers.length && (
            <div className="text-center">
              <h2 className="text-3xl">No hay porteros asignados</h2>
            </div>
          )}
          {goalkeepers.length && (
            <PlayerCarousel title="Portero" players={goalkeepers} />
          )}
          {!defenders.length && (
            <div className="text-center">
              <h2 className="text-3xl">No hay defensas asignados</h2>
            </div>
          )}
          {defenders.length && (
            <PlayerCarousel title="Defensa" players={defenders} />
          )}
          {!midfielders.length && (
            <div className="text-center">
              <h2 className="text-3xl">No hay centrocampistas asignados</h2>
            </div>
          )}
          {midfielders.length && (
            <PlayerCarousel title="Centrocampista" players={midfielders} />
          )}
          {!forwards.length && (
            <div className="text-center">
              <h2 className="text-3xl">No hay delanteros asignados</h2>
            </div>
          )}
          {forwards.length && (
            <PlayerCarousel title="Delantero" players={forwards} />
          )}
        </>
      )}
    </div>
  );
};

export default FormationContent;
