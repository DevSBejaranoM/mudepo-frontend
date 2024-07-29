const history = [
  { competition: 'La Liga', titles: 36 },
  { competition: 'UEFA Champions League', titles: 15 },
  { competition: 'Supercopa de España', titles: 11 },
  // Añade más competiciones según sea necesario
];

const TeamHistory = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold mb-4">Tamaraceite Veteranos Historia del Equipo</h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">Competición</th>
            <th className="border-b p-2">Títulos</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td className="border-b p-2">{item.competition}</td>
              <td className="border-b p-2">{item.titles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamHistory;
