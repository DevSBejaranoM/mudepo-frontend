"use client";
import { useRouter } from "next/navigation";

interface LeagueCardProps {
  league: any;
  index: number | string;
  eventName: string;
}

const LeagueCard = ({ league, index, eventName }: LeagueCardProps) => {
  const router = useRouter();

  const handleNavigate = (id: string) => {
    if (id) {
      router.push(
        `/evento/${eventName.toLowerCase().replaceAll(" ", "-")}/${league?.name.toLowerCase().replaceAll(" ", "-")}`
      );
    }
  };

  return (
    <div key={index} className="max-w-sm mx-auto relative shadow-md rounded-lg">
      <img
        src={
          league?.portada
            ? `${process.env.NEXT_PUBLIC_MAIN_URL}${league?.portada}`
            : "/images/placeholder-liga.png"
        }
        alt="category-image"
        className="w-full max-h-80 rounded-lg min-w-80 md:min-w-96 object-scale-down"
      />
      <div className="absolute z-10 bottom-0 left-0 right-0 h-28 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg text-center">
        <h1 className="text-2xl font-semibold">
          FÚTBOL {league?.formato}
        </h1>
        <div className="border-t border-gray-300 my-1" />
        <p className="text-xl font-semibold">{league?.name}</p>
        <div className="flex">
          {league?.name && (
            <button
              onClick={() => handleNavigate(league.id)}
              className="bg-primary hover-bg-primary-dark text-white px-4 py-2 rounded-md mt-2 w-full cursor-pointer"
            >
              Ir a la liga
            </button>
          )}
          {!league.name && (
            <button
              onClick={() => handleNavigate(league.id)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md mt-2 w-full cursor-default"
            >
              SIN LIGAS
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;