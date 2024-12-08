"use client";
import { useMemo } from "react";
import PlayerCarousel from "./PlayerCarousel";

interface Player {
  dorsal: number;
  position:
    | "GOALKEEPER"
    | "DEFENDER"
    | "MIDFIELD"
    | "FORWARD"
    | "Sin posición asignada";
  name: string;
  lastname: string;
  avatar: string;
}

interface Groups {
  [key: string]: Player[];
}

interface FormationContentProps {
  dataPlayers: Player[];
}

const FormationContent = ({ dataPlayers }: FormationContentProps) => {
  const groupedPlayers = useMemo(() => {
    const groups: Groups = {
      GOALKEEPER: [],
      DEFENDER: [],
      MIDFIELD: [],
      FORWARD: [],
      "Sin posición asignada": [],
    };

    dataPlayers.forEach((player) => {
      const position = player.position || "Sin posición asignada";
      if (position in groups) {
        groups[position].push(player);
      } else {
        groups["Sin posición asignada"].push(player);
      }
    });

    return groups;
  }, [dataPlayers]);

  const allGroupsEmpty = Object.values(groupedPlayers).every(
    (group) => group.length === 0
  );

  return (
    <div className="container mx-auto p-4">
      {allGroupsEmpty ? (
        <div className="text-center text-2xl font-bold h-[50vh] flex items-center justify-center">
          Aún no se han asignado jugadores
        </div>
      ) : (
        Object.entries(groupedPlayers).map(([position, players]) => (
          <PlayerCarousel
            key={position}
            title={
              position as
                | "GOALKEEPER"
                | "DEFENDER"
                | "MIDFIELD"
                | "FORWARD"
                | "Sin posición asignada"
            }
            players={players as Player[]}
          />
        ))
      )}
    </div>
  );
};

export default FormationContent;
