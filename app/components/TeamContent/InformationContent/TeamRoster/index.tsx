const players = [
  { number: 1, name: 'Thibaut Courtois', position: 'ARQ', age: 32 },
  { number: 13, name: 'Andriy Lunin', position: 'ARQ', age: 25},
  { number: 4, name: 'David Alaba', position: 'D(C)', age: 32 },
  // Añade más jugadores según sea necesario
];

const TeamRoster = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Tamaraceite Veteranos Plantilla</h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">#</th>
            <th className="border-b p-2">Jugador</th>
            <th className="border-b p-2">Posición</th>
            <th className="border-b p-2">Edad</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.number}>
              <td className="border-b p-2">{player.number}</td>
              <td className="border-b p-2">{player.name}</td>
              <td className="border-b p-2">{player.position}</td>
              <td className="border-b p-2">{player.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamRoster;
