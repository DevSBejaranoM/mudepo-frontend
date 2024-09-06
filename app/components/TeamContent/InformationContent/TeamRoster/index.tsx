interface Player {
  number: number;
  name: string;
  position: string;
  age: number;
  sancion: boolean;
  yellowCards: number;
  redCards: number;
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
            <th className="border-b p-2">Dorsal</th>
            <th className="border-b p-2">Jugador</th>
            <th className="border-b p-2">Posición</th>
            <th className="border-b p-2 text-center">Tarjetas amarillas</th>
            <th className="border-b p-2 text-center">Tarjetas rojas</th>
            <th className="border-b p-2 text-center">Estado</th>
          </tr>
        </thead>
        <tbody>
          {players?.map((player, index) => (
            <tr key={index}>
              <td className="border-b p-2 pl-7">{player.number}</td>
              <td className="border-b p-2">{player.name}</td>
              <td className="border-b p-2">{player.position}</td>
              <td className="border-b p-2 text-center">{player.yellowCards}</td>
              <td className="border-b p-2 text-center">{player.redCards}</td>
              <td className="border-b p-2 text-center">{player.sancion ? "Sancionado" : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamRoster;
