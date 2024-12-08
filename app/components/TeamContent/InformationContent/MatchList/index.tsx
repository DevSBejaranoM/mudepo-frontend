"use client";
import React from "react";

interface Match {
  id: string;
  date: string;
  name: string;
  homeGoals: number;
  visitingGoals: number;
}

interface MatchListProps {
  matchList: Match[];
}

const MatchList: React.FC<MatchListProps> = ({ matchList }) => {

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Partidos del Equipo</h3>

      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider">
                  Equipos
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider">
                  Resultado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {matchList.length > 0 ? (
                matchList.map((match) => (
                  <tr key={match.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      {new Date(match.date).toLocaleDateString()}
                      {" - "}
                      {new Date(match.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      {match.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      {`${match.homeGoals} - ${match.visitingGoals}`}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-4 whitespace-nowrap text-sm text-center"
                  >
                    No hay partidos
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MatchList;