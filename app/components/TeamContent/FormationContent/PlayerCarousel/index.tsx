import Slider from "react-slick";
import PlayerCard from "./PlayerCard";

interface Player {
  dorsal: number;
  position: string;
  name: string;
  lastname: string;
  avatar: any;
}

interface PlayerCarouselProps {
  title:
    | "GOALKEEPER"
    | "DEFENDER"
    | "MIDFIELD"
    | "FORWARD"
    | "Sin posición asignada";
  players: Player[];
}
const PlayerCarousel = ({ title, players }: PlayerCarouselProps) => {
  const postions = {
    GOALKEEPER: "Portero",
    DEFENDER: "Defensa",
    MIDFIELD: "Centrocampista",
    FORWARD: "Delantero",
    "Sin posición asignada": "Sin posición asignada",
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (players.length === 0) {
    return null;
  }

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{postions[title] || title}</h2>
      <Slider {...settings}>
        {players.map((player, index) => (
          <PlayerCard key={`${player.name} ${index}`} {...player} />
        ))}
      </Slider>
    </div>
  );
};

export default PlayerCarousel;
