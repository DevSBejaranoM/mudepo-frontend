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

  const isValidURL = (str: string) => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // Protocolo
        '((([a-zA-Z0-9-]+)\\.)+[a-zA-Z]{2,})' + // Dominio
        '(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?' + // Puerto y ruta
        '(\\?[;&a-zA-Z0-9%_+.~#?&=/-]*)?' + // Cadena de consulta
        '(\\#[-a-zA-Z0-9_]*)?$',
      'i',
    ); // Fragmento de ancla
    return !!pattern.test(str);
  };

  useEffect(() => {
    if (dataPlayers) {
      setPlayers(
        dataPlayers.map((player: any) => ({
          id: player.id,
          image: isValidURL(player?.avatar)
            ? player.avatar
            : "/images/team/avatar-player.png",
          number: player.dorsal,
          name: player.name,
          lastname: player.lastname,
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
          {notAssigned && notAssigned?.length > 0 && (
            <PlayerCarousel
              title="Sin posición asignada"
              players={notAssigned}
            />
          )}
          {goalkeepers && goalkeepers.length > 0 && (
            <PlayerCarousel title="Portero" players={goalkeepers} />
          )}
          {defenders && defenders.length > 0 && (
            <PlayerCarousel title="Defensa" players={defenders} />
          )}
          {midfielders && midfielders.length > 0 && (
            <PlayerCarousel title="Centrocampista" players={midfielders} />
          )}
          {forwards && forwards.length > 0 && (
            <PlayerCarousel title="Delantero" players={forwards} />
          )}
        </>
      )}
    </div>
  );
};

export default FormationContent;
