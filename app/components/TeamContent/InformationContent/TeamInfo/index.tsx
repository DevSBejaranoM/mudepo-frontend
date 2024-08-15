interface TeamInfoProps {
  name: string;
  logo: string;
  foundation: string;
  president: string;
  stadium: string;
  league: string;
  location: string;
}

const TeamInfo = ({
  name,
  logo,
  foundation,
  president,
  stadium,
  league,
  location,
}: TeamInfoProps) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-4">
        <img
          src={`${process.env.NEXT_PUBLIC_MAIN_URL}${logo}`}
          alt="Team Logo"
          className="w-16 h-16 mr-4"
          style={{ objectFit: "contain" }}
        />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          {/* <p className="text-gray-600">Fundado en {foundation}</p> */}
        </div>
      </div>
      <p>
        <strong className="mr-2">Presidente:</strong> {president}
      </p>
      <p>
        <strong className="mr-2">Estadio:</strong> {stadium}
      </p>
      <p>
        <strong className="mr-2">Ligas:</strong> {league}
      </p>
      <p>
        <strong className="mr-2">Ubicación:</strong> {location}
      </p>
    </div>
  );
};

export default TeamInfo;
