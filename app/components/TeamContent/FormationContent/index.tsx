import TitleDescription from "../../HomeContent/TitleDescription";
import PlayerCarousel from "./PlayerCarousel";

const FormationContent = () => {
  const players = [
    {
      id: "1",
      image: "/images/team/jugador.webp",
      number: 1,
      name: "Courtois",
      position: "Portero",
    },
    {
      id: "2",
      image: "/images/team/jugador.webp",
      number: 2,
      name: "Carvajal",
      position: "Defensa",
    },
    {
      id: "3",
      image: "/images/team/jugador.webp",
      number: 3,
      name: "Militao",
      position: "Defensa",
    },
    {
      id: "4",
      image: "/images/team/jugador.webp",
      number: 4,
      name: "Alaba",
      position: "Defensa",
    },
    {
      id: "5",
      image: "/images/team/jugador.webp",
      number: 5,
      name: "Valverde",
      position: "Centrocampista",
    },
    {
      id: "6",
      image: "/images/team/jugador.webp",
      number: 6,
      name: "Modric",
      position: "Centrocampista",
    },
    {
      id: "7",
      image: "/images/team/jugador.webp",
      number: 7,
      name: "Benzema",
      position: "Delantero",
    },
    {
      id: "8",
      image: "/images/team/jugador.webp",
      number: 8,
      name: "Vinicius",
      position: "Delantero",
    },
  ];

  const goalkeepers = players.filter((player) => player.position === "Portero");
  const defenders = players.filter((player) => player.position === "Defensa");
  const midfielders = players.filter(
    (player) => player.position === "Centrocampista"
  );
  const forwards = players.filter((player) => player.position === "Delantero");

  return (
    <div className="container mx-auto p-4">
      <PlayerCarousel title="Portero" players={goalkeepers} />
      <PlayerCarousel title="Defensa" players={defenders} />
      <PlayerCarousel title="Centrocampista" players={midfielders} />
      <PlayerCarousel title="Delantero" players={forwards} />
    </div>
  );
};

export default FormationContent;
