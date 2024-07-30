interface Match {
  date: string;
  opponent: string;
  isHome: boolean;
}

interface NextMatchListProps {
  matches: Match[];
}

const NextMatchList = ({matches}: NextMatchListProps) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Próximos partidos</h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">Fecha</th>
            <th className="border-b p-2">Rival</th>
            <th className="border-b p-2">Lugar</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((item, index) => (
            <tr key={index}>
              <td className="border-b p-2">{item.date}</td>
              <td className="border-b p-2">{item.opponent}</td>
              <td className="border-b p-2">{item.isHome ? "Casa" : "Fuera"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NextMatchList;
