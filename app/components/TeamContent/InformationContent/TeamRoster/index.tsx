interface Player {
  number: number;
  name: string;
  position: string;
  age: number;
}

interface TeamRosterProps {
  players: Player[];
  team: string;
}

const TeamRoster = ({players, team}: TeamRosterProps) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">{team} - Plantilla</h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">#</th>
            <th className="border-b p-2">Jugador</th>
            <th className="border-b p-2">Posición</th>
          </tr>
        </thead>
        <tbody>
          {players?.map(player => (
            <tr key={player.number}>
              <td className="border-b p-2">{player.number}</td>
              <td className="border-b p-2">{player.name}</td>
              <td className="border-b p-2">{player.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamRoster;
