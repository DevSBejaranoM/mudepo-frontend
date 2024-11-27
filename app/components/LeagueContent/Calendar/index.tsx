"use client";
import { useEffect, useState } from "react";
import CustomTable from "../CustomTable";
import Loader from "../../Loader";
import { axiosAdapter } from "@/app/config/axios.adapter";

interface Match {
  escudoLocal: string;
  nombreLocal: string;
  golesLocal: number;
  golesVisitante: number;
  nombreVisitante: string;
  escudoVisitante: string;
  lugar: string;
  fecha: string;
  jornada: number;
  fase: string;
  grupo: string;
}

const Calendar = ({ leagueId }: { leagueId: string }) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [journeySelected, setJourneySelected] = useState<number>(-1);
  const [phaseSelected, setPhaseSelected] = useState<string>("");
  const [groupSelected, setGroupSelected] = useState<string>("");
  const [filteredMatches, setFilteredMatches] = useState<Match[]>([]);
  const [journeys, setJourneys] = useState<number[]>([]);
  const [phases, setPhases] = useState<string[]>([]);
  const [groups, setGroups] = useState<string[]>([]);
  const [selectedInfo, setSelectedInfo] = useState<Match | null>(null);

  {
    /**
     * Se obtienen las jornadas de la liga por id de la liga
     * Se muestran 3 selectores: Jornada, Fase y Grupo
     * Se obtienen los partidos de la jornada seleccionada
     * Parámetros necesarios:
     * - Escudo local
     * - Nombre local
     * - Goles local
     * - Goles visitante
     * - Nombre visitante
     * - Escudo visitante
     * - Lugar
     * - Fecha
     * - Jornada
     * - Fase
     * - Grupo
     */
  }

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await axiosAdapter.fetchData(
          `/leagues/${leagueId}/matches`
        );
        setMatches(data);

        // Extract unique journeys, phases, and groups
        const uniqueJourneys: any = Array.from(
          new Set(data.map((match: Match) => match.jornada))
        ).sort((a:any, b:any) => a - b);
        const uniquePhases: any = Array.from(
          new Set(data.map((match: Match) => match.fase))
        );
        const uniqueGroups: any = Array.from(
          new Set(data.map((match: Match) => match.grupo))
        );

        setJourneys(uniqueJourneys);
        setPhases(uniquePhases);
        setGroups(uniqueGroups);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching matches:", error);
        setLoading(false);
      }
    };

    fetchMatches();
  }, [leagueId]);

  useEffect(() => {
    const filtered = matches.filter((match) => {
      const journeyMatch =
        journeySelected === -1 || match.jornada === journeySelected;
      const phaseMatch = phaseSelected === "" || match.fase === phaseSelected;
      const groupMatch = groupSelected === "" || match.grupo === groupSelected;
      return journeyMatch && phaseMatch && groupMatch;
    });
    setFilteredMatches(filtered);
  }, [matches, journeySelected, phaseSelected, groupSelected]);

  const handleChangeJourney = (journey: number) => {
    setJourneySelected(journey);
  };

  const handleChangePhase = (phase: string) => {
    setPhaseSelected(phase);
  };

  const handleChangeGroup = (group: string) => {
    setGroupSelected(group);
  };

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
    <>
      {loading ? (
        <Loader />
      ) : matches.length === 0 ? (
        <div className="flex justify-center my-5 text-center w-full">
          <h3 className="text-4xl font-bold">No hay partidos disponibles</h3>
        </div>
      ) : (
        <>
          <div className="flex space-x-2 md:mx-96 justify-center">
            <div className="w-full">
              <div className="relative mt-2">
                <button
                  type="button"
                  className="relative w-full rounded-md py-2 pl-3 pr-10 color-primary shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6 border-primary hover-border-primary-dark px-4 text-center"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-jornada-label"
                  onClick={() => openListAndClose(`listbox-jornada-option`)}
                >
                  <span className="flex items-center justify-center">
                    <span className="ml-3 block truncate">
                      {journeySelected === -1
                        ? "Todas las jornadas"
                        : `Jornada ${journeySelected}`}
                    </span>
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
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm hidden"
                  role="listbox"
                  id={`listbox-jornada-option`}
                  aria-labelledby="listbox-jornada-label"
                  aria-activedescendant="listbox-jornada-option-3"
                >
                  <li
                    key={-1}
                    className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                    role="option"
                    onClick={() => handleChangeJourney(-1)}
                  >
                    Todas las jornadas
                  </li>
                  {journeys.map((journey) => (
                    <li
                      key={journey}
                      className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                      role="option"
                      onClick={() => handleChangeJourney(journey)}
                    >
                      Jornada {journey}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full">
              <div className="relative mt-2">
                <button
                  type="button"
                  className="relative w-full rounded-md py-2 pl-3 pr-10 color-primary shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6 border-primary hover-border-primary-dark px-4 text-center"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-fase-label"
                  onClick={() => openListAndClose(`listbox-fase-option`)}
                >
                  <span className="flex items-center justify-center">
                    <span className="ml-3 block truncate">
                      {phaseSelected === "" ? "Todas las fases" : phaseSelected}
                    </span>
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
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm hidden"
                  role="listbox"
                  id={`listbox-fase-option`}
                  aria-labelledby="listbox-fase-label"
                  aria-activedescendant="listbox-fase-option-3"
                >
                  <li
                    key=""
                    className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                    role="option"
                    onClick={() => handleChangePhase("")}
                  >
                    Todas las fases
                  </li>
                  {phases.map((phase) => (
                    <li
                      key={phase}
                      className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                      role="option"
                      onClick={() => handleChangePhase(phase)}
                    >
                      {phase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full">
              <div className="relative mt-2">
                <button
                  type="button"
                  className="relative w-full rounded-md py-2 pl-3 pr-10 color-primary shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6 border-primary hover-border-primary-dark px-4 text-center"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-grupo-label"
                  onClick={() => openListAndClose(`listbox-grupo-option`)}
                >
                  <span className="flex items-center justify-center">
                    <span className="ml-3 block truncate">
                      {groupSelected === ""
                        ? "Todos los grupos"
                        : groupSelected}
                    </span>
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
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm hidden"
                  role="listbox"
                  id={`listbox-grupo-option`}
                  aria-labelledby="listbox-grupo-label"
                  aria-activedescendant="listbox-grupo-option-3"
                >
                  <li
                    key=""
                    className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                    role="option"
                    onClick={() => handleChangeGroup("")}
                  >
                    Todos los grupos
                  </li>
                  {groups.map((group) => (
                    <li
                      key={group}
                      className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                      role="option"
                      onClick={() => handleChangeGroup(group)}
                    >
                      {group}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            {filteredMatches.map((match, index) => (
              <CustomTable
                key={index}
                data={{
                  tabOne: {
                    partidos: [
                      {
                        escudoLocal: match.escudoLocal,
                        nombreLocal: match.nombreLocal,
                        golesLocal: match.golesLocal,
                        golesVisitante: match.golesVisitante,
                        nombreVisitante: match.nombreVisitante,
                        escudoVisitante: match.escudoVisitante,
                        lugar: match.lugar,
                        fecha: match.fecha,
                      },
                    ],
                  },
                }}
                type="calendar-2"
                setSelectedInfo={(info) => {
                  setSelectedInfo(info);
                }}
              />
            ))}
          </div>
          {selectedInfo && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setSelectedInfo(null);
                }
              }}
            >
              <div className="bg-white p-6 rounded-md min-w-[20%]">
                <h3 className="text-xl font-bold mb-4">
                  INFORMACIÓN DEL PARTIDO
                </h3>
                <div className="border-t border-gray-300 my-1" />
                <div className="my-5">
                  <p>
                    <span className="text-red-500">Lugar:</span>{" "}
                    {selectedInfo.lugar}
                  </p>
                  <p className="my-3">
                    <span className="text-red-500">Fecha:</span>{" "}
                    {selectedInfo.fecha}
                  </p>
                </div>
                <div className="border-t border-gray-300 my-1" />
                <button
                  onClick={() => setSelectedInfo(null)}
                  className="mt-4 bg-primary text-white py-2 px-4 rounded float-end"
                >
                  CERRAR
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Calendar;
