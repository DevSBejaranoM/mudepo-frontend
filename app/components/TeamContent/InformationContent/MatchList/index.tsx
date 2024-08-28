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

const MatchList = ({ matches }: MatchListProps) => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleYearChange = (event: any) => {
    setSelectedYear(event.target.value);
  };

  const filteredMatches = matches.filter((match) =>
    match.date.startsWith(selectedYear)
  );

  const openListAndClose = (id: string) => {
    const list = document.getElementById(id);
    const lists = document.querySelectorAll("[role='listbox']");
    lists.forEach((list) => {
      if (list.id !== id) {
        list.classList.replace("block", "hidden");
      }
    });
    if (list && list.classList.contains("hidden")) {
      list.classList.replace("hidden", "block");
    } else if (list && list.classList.contains("block")) {
      list.classList.replace("block", "hidden");
    }
  };

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
        <div className="w-full">
          <div className="relative mt-2">
            <button
              type="button"
              className="relative w-52 rounded-md py-2 pl-3 pr-10 color-primary shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6 border-primary hover-border-primary-dark px-4 text-center"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-fase-label"
              onClick={() => openListAndClose(`listbox-fase-option`)}
            >
              <span className="flex items-center justify-center">
                <span className="ml-3 block truncate">{selectedYear}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <ul
              className="absolute z-10 mt-1 max-h-56 w-52 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm hidden"
              role="listbox"
              id={`listbox-fase-option`}
              aria-labelledby="listbox-fase-label"
              aria-activedescendant="listbox-fase-option-3"
            >
              {matches.map((match: any, index: number) => {
                const year = match.date.split("-")[0];
                return (
                  <li
                    key={index}
                    className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300 text-center"
                    role="option"
                    onClick={() =>
                      setSelectedYear(year)
                    }
                  >
                    {year}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className={`overflow-x-auto`}>
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
