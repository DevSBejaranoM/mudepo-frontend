interface TeamInfoProps {
  name: string;
  logo: string;
  foundation: string;
  coach: string;
  stadium: string;
  league: string;
  location: string;
}

const TeamInfo = ({
  name,
  logo,
  foundation,
  coach,
  stadium,
  league,
  location,
}: TeamInfoProps) => {
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-4">
        <img src={logo} alt="Team Logo" className="w-16 h-16 mr-4" />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600">Fundado en {foundation}</p>
        </div>
      </div>
      <p>
        <strong>Director Técnico:</strong> {coach}
      </p>
      <p>
        <strong>Estadio:</strong> {stadium}
      </p>
      <p>
        <strong>Liga:</strong> {league}
      </p>
      <p>
        <strong>Ubicación:</strong> {location}
      </p>
    </div>
  );
};

export default TeamInfo;
