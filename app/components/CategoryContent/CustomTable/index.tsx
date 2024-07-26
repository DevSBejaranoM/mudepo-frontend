import React from "react";

interface Team {
  position?: number;
  logo?: string;
  name?: string;
  points?: number;
  played?: number;
  won?: number;
  drawn?: number;
  lost?: number;
  goalsFor?: number;
  goalsAgainst?: number;
  modifier?: number;
  ta?: number;
  tr?: number;
  np?: number;
  ps?: number;
  hj7?: number;
  hj8?: number;
  hj9?: number;
  hj10?: number;
  me?: number;
  eb?: number;
  mf?: number;
  nr?: number;
  om?: number;
  total?: number;
}

interface Player {
  code?: number;
  position?: number;
  name?: string;
  team?: string;
  goals?: number;
  assists?: number;
  ta?: number;
  tr?: number;
  total?: number;
}

interface TableProps {
  data: Team[] | Player[];
  type:
    | "teams"
    | "classification"
    | "calendar"
    | "statistics-1"
    | "statistics-2"
    | "statistics-3"
    | "statistics-4"
    | "statistics-5"
    | "statistics-6"
    | "statistics-7";
}

const CustomTable = ({ data, type }: TableProps) => {
  const renderTable = () => {
    switch (type) {
      case "teams":
        return (
          <table className="min-w-full bg-white">
            <thead className="bg-gray-300">
              <tr>
                <th className="w-16 py-2 pl-5">POS</th>
                <th className="w-16 py-2 px-5">ESC</th>
                <th className="w-80 py-2 pr-5">EQUIPO</th>
              </tr>
            </thead>
            <tbody>
              {data.map((team: Team, index) => (
                <tr key={index} className="border-t even:bg-gray-100">
                  <td className="text-center py-2 pl-5">{team.position}</td>
                  <td className="text-center py-2 px-5">
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="w-8 h-8 mx-auto"
                    />
                  </td>
                  <td className=" text-center py-2 pr-5">{team.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "classification":
        return (
          <table className="min-w-full bg-white">
            <thead className="bg-gray-300">
              <tr>
                <th className="w-16 py-2 pl-5">POS</th>
                <th className="w-16 py-2 px-5">ESC</th>
                <th className="w-80 py-2 px-5">EQUIPO</th>
                <th className="w-16 py-2 px-5">PTS</th>
                <th className="w-16 py-2 px-5">PJ</th>
                <th className="w-16 py-2 px-5">PG</th>
                <th className="w-16 py-2 px-5">PE</th>
                <th className="w-16 py-2 px-5">PP</th>
                <th className="w-16 py-2 px-5">GF</th>
                <th className="w-16 py-2 px-5">GC</th>
                <th className="w-16 py-2 pr-5">Mod</th>
              </tr>
            </thead>
            <tbody>
              {data.map((team: Team, index) => (
                <tr key={index} className="border-t even:bg-gray-100">
                  <td className="text-center py-2 pl-5">{team.position}</td>
                  <td className="text-center py-2 px-5">
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="w-8 h-8 mx-auto"
                    />
                  </td>
                  <td className="text-center py-2 px-5">{team.name}</td>
                  <td className="text-center py-2 px-5">{team.points}</td>
                  <td className="text-center py-2 px-5">{team.played}</td>
                  <td className="text-center py-2 px-5">{team.won}</td>
                  <td className="text-center py-2 px-5">{team.drawn}</td>
                  <td className="text-center py-2 px-5">{team.lost}</td>
                  <td className="text-center py-2 px-5">{team.goalsFor}</td>
                  <td className="text-center py-2 px-5">{team.goalsAgainst}</td>
                  <td className="text-center py-2 pr-5">{team.modifier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "calendar":
        return <></>;
      case "statistics-1":
        return (
          <table className="min-w-full bg-white border-b-2">
            <thead className="bg-gray-300">
              <tr>
                <th className="w-80 py-2 pl-5">EQUIPO</th>
                <th className="w-16 py-2 px-5">TA</th>
                <th className="w-16 py-2 px-5">TR</th>
                <th className="w-16 py-2 px-5">NP</th>
                <th className="w-16 py-2 px-5">PS</th>
                <th className="w-16 py-2">HJ-7</th>
                <th className="w-16 py-2">HJ-8</th>
                <th className="w-16 py-2">HJ-9</th>
                <th className="w-16 py-2">HJ-10</th>
                <th className="w-16 py-2 px-5">ME</th>
                <th className="w-16 py-2 px-5">EB</th>
                <th className="w-16 py-2 px-5">MF</th>
                <th className="w-16 py-2 px-5">NR</th>
                <th className="w-16 py-2 px-5">OM</th>
                <th className="w-16 py-2 pr-5">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {data.map((team: Team, index) => (
                <tr key={index} className="border-t even:bg-gray-100">
                  <td className=" text-center py-2 pl-5">{team.name}</td>
                  <td className="text-center py-2 px-5">{team.ta}</td>
                  <td className="text-center py-2 px-5">{team.tr}</td>
                  <td className="text-center py-2 px-5">{team.np}</td>
                  <td className="text-center py-2 px-5">{team.ps}</td>
                  <td className="text-center py-2 px-5">{team.hj7}</td>
                  <td className="text-center py-2 px-5">{team.hj8}</td>
                  <td className="text-center py-2 px-5">{team.hj9}</td>
                  <td className="text-center py-2 px-5">{team.hj10}</td>
                  <td className="text-center py-2 px-5">{team.me}</td>
                  <td className="text-center py-2 px-5">{team.eb}</td>
                  <td className="text-center py-2 px-5">{team.mf}</td>
                  <td className="text-center py-2 px-5">{team.nr}</td>
                  <td className="text-center py-2 px-5">{team.om}</td>
                  <td className="text-center py-2 pr-5">{team.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "statistics-2":
        return (
          <table className="min-w-[60%] bg-white border-b-2">
            <thead className="bg-gray-300">
              <tr>
                <th className="w-16 py-2 pl-5">ESC</th>
                <th className="w-80 py-2 px-5">EQUIPO</th>
                <th className="w-16 py-2 pr-5">GOLES MARCADOS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((team: Team, index) => (
                <tr key={index} className="border-t even:bg-gray-100">
                  <td className="text-center py-2 pl-5">
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="w-8 h-8 mx-auto"
                    />
                  </td>
                  <td className=" text-center py-2 px-5">{team.name}</td>
                  <td className="text-center py-2 pr-5">{team.goalsFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "statistics-3":
        return (
          <table className="min-w-[60%] bg-white border-b-2">
            <thead className="bg-gray-300">
              <tr>
                <th className="w-16 py-2 pl-5">ESC</th>
                <th className="w-80 py-2 px-5">EQUIPO</th>
                <th className="w-16 py-2 pr-5">GOLES ENCAJADOS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((team: Team, index) => (
                <tr key={index} className="border-t even:bg-gray-100">
                  <td className="text-center py-2 pl-5">
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="w-8 h-8 mx-auto"
                    />
                  </td>
                  <td className=" text-center py-2 px-5">{team.name}</td>
                  <td className="text-center py-2 pr-5">{team.goalsAgainst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "statistics-4":
        return (
          <table className="min-w-[60%] bg-white border-b-2">
            <thead className="bg-gray-300">
              <tr>
                <th className="w-16 py-2 pl-5">CÓDIGO</th>
                <th className="w-80 py-2 px-5">JUGADOR</th>
                <th className="w-80 py-2 px-5">EQUIPO</th>
                <th className="w-16 py-2 pr-5">T.R.</th>
              </tr>
            </thead>
            <tbody>
              {data.map((player: Player, index) => (
                <tr key={index} className="border-t even:bg-gray-100">
                  <td className="text-center py-2 pl-5">{player.code}</td>
                  <td className=" text-center py-2 px-5">-- Oculto --</td>
                  <td className="text-center py-2 px-5">{player.team}</td>
                  <td className="text-center py-2 pr-5">{player.tr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "statistics-5":
        return (
          <table className="min-w-[60%] bg-white border-b-2">
            <thead className="bg-gray-300">
              <tr>
                <th className="w-16 py-2 pl-5">CÓDIGO</th>
                <th className="w-80 py-2 px-5">JUGADOR</th>
                <th className="w-80 py-2 px-5">EQUIPO</th>
                <th className="w-16 py-2 pr-5">T.A.</th>
              </tr>
            </thead>
            <tbody>
              {data.map((player: Player, index) => (
                <tr key={index} className="border-t even:bg-gray-100">
                  <td className="text-center py-2 pl-5">{player.code}</td>
                  <td className=" text-center py-2 px-5">-- Oculto --</td>
                  <td className="text-center py-2 px-5">{player.team}</td>
                  <td className="text-center py-2 pr-5">{player.ta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "statistics-6":
        return (
          <table className="min-w-[60%] bg-white border-b-2">
            <thead className="bg-gray-300">
              <tr>
                <th className="w-16 py-2 pl-5">CÓDIGO</th>
                <th className="w-80 py-2 px-5">JUGADOR</th>
                <th className="w-80 py-2 px-5">EQUIPO</th>
                <th className="w-16 py-2 pr-5">PUNTOS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((player: Player, index) => (
                <tr key={index} className="border-t even:bg-gray-100">
                  <td className="text-center py-2 pl-5">{player.code}</td>
                  <td className=" text-center py-2 px-5">{player.name}</td>
                  <td className="text-center py-2 px-5">{player.team}</td>
                  <td className="text-center py-2 pr-5">{player.assists}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "statistics-7":
        return (
          <table className="min-w-[60%] bg-white border-b-2">
            <thead className="bg-gray-300">
              <tr>
                <th className="w-16 py-2 pl-5">CÓDIGO</th>
                <th className="w-80 py-2 px-5">JUGADOR</th>
                <th className="w-80 py-2 px-5">EQUIPO</th>
                <th className="w-16 py-2 pr-5">PUNTOS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((player: Player, index) => (
                <tr key={index} className="border-t even:bg-gray-100">
                  <td className="text-center py-2 pl-5">{player.code}</td>
                  <td className=" text-center py-2 px-5">{player.name}</td>
                  <td className="text-center py-2 px-5">{player.team}</td>
                  <td className="text-center py-2 pr-5">{player.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className={`overflow-x-auto ${type !== "statistics-1" &&`md:flex md:justify-center`}`}>{renderTable()}</div>
      {type === "statistics-1" && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-4 mt-5">
          <span className="flex mb-1">
            <b className="pr-2">TA:</b> Tarjetas Amarillas
          </span>
          <span className="flex mb-1">
            <b className="pr-2">TR:</b> Tarjetas Rojas
          </span>
          <span className="flex mb-1">
            <b className="pr-2">NP:</b> No Presentado
          </span>
          <span className="flex mb-1">
            <b className="pr-2">PS:</b> Partidos Sanción
          </span>
          <span className="flex mb-1">
            <b className="pr-2">HJ-7/8/9/10:</b> Jugó con 7/8/9/10
          </span>
          <span className="flex mb-1">
            <b className="pr-2">ME:</b> Mal Equipado
          </span>
          <span className="flex mb-1">
            <b className="pr-2">EB:</b> Estado Balones
          </span>
          <span className="flex mb-1">
            <b className="pr-2">MF:</b> Manipulación Fichas
          </span>
          <span className="flex mb-1">
            <b className="pr-2">NR:</b> No asiste Reunión
          </span>
          <span className="flex mb-1">
            <b className="pr-2">OM:</b> Otros Motivos
          </span>
        </div>
      )}
    </div>
  );
};

export default CustomTable;
