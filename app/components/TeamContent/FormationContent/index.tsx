"use client";
import { useMemo } from "react";
import PlayerCarousel from "./PlayerCarousel";

interface Player {
  playerData: {
    dorsal: number;
    position: string;
  };
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
  // const mockPlayers = [
  //   // Porteros
  //   ...Array(8).fill(null).map((_, i) => ({
  //     playerData: { dorsal: i + 1, position: "Portero" },
  //     name: `Nombre${i + 1}`,
  //     lastname: `ApellidoPortero${i + 1}`,
  //     avatar: `/placeholder.svg?height=100&width=100&text=P${i + 1}`
  //   })),
  //   // Defensas
  //   ...Array(8).fill(null).map((_, i) => ({
  //     playerData: { dorsal: i + 11, position: "Defensa" },
  //     name: `Nombre${i + 11}`,
  //     lastname: `ApellidoDefensa${i + 1}`,
  //     avatar: `/placeholder.svg?height=100&width=100&text=D${i + 1}`
  //   })),
  //   // Centrocampistas
  //   ...Array(8).fill(null).map((_, i) => ({
  //     playerData: { dorsal: i + 21, position: "Centrocampista" },
  //     name: `Nombre${i + 21}`,
  //     lastname: `ApellidoCentro${i + 1}`,
  //     avatar: `/placeholder.svg?height=100&width=100&text=C${i + 1}`
  //   })),
  //   // Delanteros
  //   ...Array(8).fill(null).map((_, i) => ({
  //     playerData: { dorsal: i + 31, position: "Delantero" },
  //     name: `Nombre${i + 31}`,
  //     lastname: `ApellidoDelantero${i + 1}`,
  //     avatar: `/placeholder.svg?height=100&width=100&text=F${i + 1}`
  //   }))
  // ];

  // const groupedPlayers = useMemo(() => {
  //   const groups: Groups = {
  //     Portero: [],
  //     Defensa: [],
  //     Centrocampista: [],
  //     Delantero: [],
  //     "Sin posición asignada": [],
  //   };

  //   mockPlayers.forEach((player) => {
  //     const position = player.playerData.position || "Sin posición asignada";
  //     if (position in groups) {
  //       groups[position].push(player);
  //     } else {
  //       groups["Sin posición asignada"].push(player);
  //     }
  //   });

  //   return groups;
  // }, [mockPlayers]);

  const groupedPlayers = useMemo(() => {
    const groups: Groups = {
      Portero: [],
      Defensa: [],
      Centrocampista: [],
      Delantero: [],
      "Sin posición asignada": [],
    };

    dataPlayers.forEach((player) => {
      const position = player.playerData.position || "Sin posición asignada";
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
            title={position}
            players={players as Player[]}
          />
        ))
      )}
    </div>
  );
};

export default FormationContent;
