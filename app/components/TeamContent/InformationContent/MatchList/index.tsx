import { useState } from "react";

interface Match {
  date: string;
  opponent: string;
  result: string;
  isHome: boolean;
}

interface MatchListProps {
  matches: Match[];
}

const MatchList = ({matches}: MatchListProps) => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleYearChange = (event: any) => {
    setSelectedYear(event.target.value);
  };

  const filteredMatches = matches.filter((match) =>
    match.date.startsWith(selectedYear)
  );

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Partidos del Equipo</h3>

      <div className="mb-4">
        <label
          htmlFor="year"
          className="block text-lg font-medium text-gray-700"
        >
          Seleccione el Año:
        </label>
        <select
          id="year"
          value={selectedYear}
          onChange={handleYearChange}
          className="mt-1 block w-52 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-md"
        >
          {
            matches.map((match, index) => {
              const year = match.date.split('-')[0];
              return <option key={index} value={year}>{year}</option>
            })
          }
        </select>
      </div>
      <div className="container mx-auto p-4">
        <div
          className={`overflow-x-auto`}
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Oponente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Resultado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Local/Visitante
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMatches.map((match, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {match.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {match.opponent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {match.result}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {match.isHome ? "Local" : "Visitante"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MatchList;
