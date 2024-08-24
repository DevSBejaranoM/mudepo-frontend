import Slider from 'react-slick';
import PlayerCard from './PlayerCard';
import { Player } from '@/app/types/teamContent';

interface PlayerCarouselProps {
  title: string;
  players: Player[];
}

const PlayerCarousel = ({ title, players }: PlayerCarouselProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
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

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <Slider {...settings}>
        {players.map(player => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </Slider>
    </div>
  );
};

export default PlayerCarousel;
