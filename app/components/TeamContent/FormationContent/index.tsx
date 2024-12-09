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
    | "NO_POSITION_ASSIGNED";
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
      NO_POSITION_ASSIGNED: [],
    };

    dataPlayers.forEach((player) => {
      const position = player.position || "NO_POSITION_ASSIGNED";
      if (position in groups) {
        groups[position].push(player);
      } else {
        groups["NO_POSITION_ASSIGNED"].push(player);
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
                | "NO_POSITION_ASSIGNED"
            }
            players={players as Player[]}
          />
        ))
      )}
    </div>
  );
};

export default FormationContent;
