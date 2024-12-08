import { useFetchFile } from "@/app/hooks/useFetchFile";

interface TeamInfoProps {
  name: string;
  poster: any;
  President: any;
  Playingfield: any;
  League: any;
}

const TeamInfo = ({
  name,
  poster,
  President,
  Playingfield,
  League,
}: TeamInfoProps) => {
  const { data } = useFetchFile(poster?.key);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-4">
        <img
          src={data || ""}
          alt="Team Logo"
          className="w-16 h-16 mr-4"
          style={{ objectFit: "contain" }}
        />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
      </div>
      <p>
        <strong className="mr-2">Presidente:</strong> {President ? `${President?.name} ${President?.lastName}` : "Sin presidente asignado"}
      </p>
      <p>
        <strong className="mr-2">Estadio:</strong> {Playingfield?.name || "Sin estadio asignado"}
      </p>
      <p>
        <strong className="mr-2">Ligas:</strong> {League?.name || "Sin liga asignada"}
      </p>
      <p>
        <strong className="mr-2">Ubicación:</strong> {Playingfield?.location || "Sin estadio asignado"}
      </p>
    </div>
  );
};

export default TeamInfo;
