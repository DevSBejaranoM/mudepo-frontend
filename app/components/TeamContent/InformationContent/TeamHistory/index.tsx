interface History {
  competition: string;
  titles: number;
}

interface TeamHistoryProps {
  history: History[];
  team: string;
}

const TeamHistory = ({history, team}: TeamHistoryProps) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold mb-4">{team} - Historia del Equipo</h3>
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
