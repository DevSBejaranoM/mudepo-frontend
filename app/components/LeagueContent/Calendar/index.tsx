"use client";

import { useState, useEffect } from "react";
import CustomTable from "../CustomTable";
import Loader from "../../Loader";
import useCalendarData from "@/app/hooks/useCalendarData";

interface Phase {
  id: string;
  name: string;
  Groups: { id: string; name: string }[];
}

interface CalendarProps {
  Phases: Phase[];
}

const Calendar: React.FC<CalendarProps> = ({ Phases }) => {
  const {
    phases,
    selectedPhase,
    setSelectedPhase,
    groupData,
    loading,
    error,
  } = useCalendarData(Phases);

  const [selectedGroup, setSelectedGroup] = useState<string>("all");
  const [selectedDay, setSelectedDay] = useState<string>("all");
  const [selectedInfo, setSelectedInfo] = useState<any | null>(null);

  const filteredPhases = phases.filter((phase) => phase.Groups.length > 0);
  const currentPhase = filteredPhases.find((p) => p.id === selectedPhase);
  const currentDay = selectedDay === "all"
    ? null
    : groupData?.flatMap((group: any) => group.days).find((day: any) => day.name.startsWith(selectedDay));
  const currentGroup = groupData?.find((group: any) => group.id === selectedGroup);


  useEffect(() => {
    if (filteredPhases.length > 0 && (!selectedPhase || !currentPhase)) {
      setSelectedPhase(filteredPhases[0].id);
    }
  }, [filteredPhases, selectedPhase, currentPhase]);

  useEffect(() => {
    if (
      currentPhase &&
      currentPhase.Groups.length > 0 &&
      (!selectedGroup || (selectedGroup !== "all" && !currentPhase.Groups.find((g) => g.id === selectedGroup)))
    ) {
      setSelectedGroup("all");
    }
  }, [currentPhase, selectedGroup]);

  const handlePhaseChange = (phaseId: string) => {
    setSelectedPhase(phaseId);
    const phase = filteredPhases.find((p) => p.id === phaseId);
    if (phase && phase.Groups.length > 0) {
      setSelectedGroup(phase.Groups[0].id);
    } else {
      setSelectedGroup("");
    }
    setSelectedDay("all");
    closeSelector("listbox-phase-option");
  };

  const handleGroupChange = (groupId: string) => {
    setSelectedGroup(groupId);
    setSelectedDay("all");
    closeSelector("listbox-group-option");
  };

  const handleDayChange = (dayName: string) => {
    setSelectedDay(dayName);
    closeSelector("listbox-day-option");
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

  const closeSelector = (id: string) => {
    const list = document.getElementById(id);
    if (list) {
      list.classList.replace("block", "hidden");
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const matchesByRound = groupData?.reduce((acc: any, group: any) => {
    if (selectedGroup === 'all' || group.id === selectedGroup) {
      group.days.forEach((day: any) => {
        if (selectedDay === 'all' || (day.name.startsWith(selectedDay+" "))) {
          if (!acc[day.name]) {
            acc[day.name] = [];
          }
          acc[day.name] = [...acc[day.name], ...day.matches];
        }
      });
    }
    return acc;
  }, {}) || {};

  console.log(matchesByRound);

  const matchesToDisplay = selectedDay === "all"
    ? matchesByRound
    : Object.entries(matchesByRound).reduce((acc: any, [roundName, matches]: any) => {
        if (roundName.startsWith(selectedDay) && matches.length > 0) {
          acc[roundName] = matches;
        }
        return acc;
      }, {});

  return (
    <>
      <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:mx-4 lg:mx-96 justify-center mt-5">
        <div className="w-full sm:w-1/3">
          <div className="relative mt-2">
            <button
              type="button"
              className="relative w-full rounded-md py-2 pl-3 pr-10 color-primary shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 text-sm leading-6 border-primary hover:border-primary-dark px-4 text-center"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-phase-label"
              onClick={() => openListAndClose(`listbox-phase-option`)}
            >
              <span className="flex items-center justify-center">
                <span className="block truncate">
                  {currentPhase ? currentPhase.name : "Selecciona una fase"}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
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
              id={`listbox-phase-option`}
              aria-labelledby="listbox-phase-label"
            >
              {filteredPhases.map((phase) => (
                <li
                  key={phase.id}
                  className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                  role="option"
                  onClick={() => handlePhaseChange(phase.id)}
                >
                  {phase.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/3">
          <div className="relative mt-2">
            <button
              type="button"
              className="relative w-full rounded-md py-2 pl-3 pr-10 color-primary shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 text-sm leading-6 border-primary hover:border-primary-dark px-4 text-center"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-group-label"
              onClick={() => openListAndClose(`listbox-group-option`)}
            >
              <span className="flex items-center justify-center">
                <span className="block truncate">
                  {selectedGroup === "all"
                    ? "Todos los grupos"
                    : currentPhase?.Groups.find((g) => g.id === selectedGroup)
                        ?.name || "Selecciona un grupo"}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
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
              id={`listbox-group-option`}
              aria-labelledby="listbox-group-label"
            >
              <li
                key="all"
                className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                role="option"
                onClick={() => handleGroupChange("all")}
              >
                Todos los grupos
              </li>
              {currentPhase?.Groups.map((group) => (
                <li
                  key={group.id}
                  className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                  role="option"
                  onClick={() => handleGroupChange(group.id)}
                >
                  {group.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/3">
          <div className="relative mt-2">
            <button
              type="button"
              className="relative w-full rounded-md py-2 pl-3 pr-10 color-primary shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 text-sm leading-6 border-primary hover:border-primary-dark px-4 text-center"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-day-label"
              onClick={() => openListAndClose(`listbox-day-option`)}
            >
              <span className="flex items-center justify-center">
                <span className="block truncate">
                  {selectedDay === "all"
                    ? "Todas las jornadas"
                    : selectedDay || "Selecciona una jornada"}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
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
              id={`listbox-day-option`}
              aria-labelledby="listbox-day-label"
            >
              <li
                key="all"
                className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                role="option"
                onClick={() => handleDayChange("all")}
              >
                Todas las jornadas
              </li>
              {groupData?.flatMap((group: any) => group.days)
                .sort((a: any, b: any) => a.order - b.order)
                .filter((day: any, index: any, self: any) =>
                  index === self.findIndex((t: any) => t.name.split(' ')[1] === day.name.split(' ')[1])
                )
                .map((day: any) => {
                  const journeyNumber = day.name.split(' ')[1];
                  return (
                    <li
                      key={day.id}
                      className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                      role="option"
                      onClick={() => handleDayChange(`JORNADA ${journeyNumber}`)}
                    >
                      JORNADA {journeyNumber}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`mt-10 grid grid-cols-1 ${
          Object.entries(matchesToDisplay).length > 1 ? "lg:grid-cols-2" : ""
        } ${
          Object.entries(matchesToDisplay).length > 2 ? "2xl:grid-cols-2" : ""
        } gap-4`}
      >
        {Object.entries(matchesToDisplay).map(([round, matches]: any) => {
          if (matches.length === 0) {
            return null;
          }
          return (
            <div key={round} className="mb-8">
              <CustomTable
                data={matches.map((match: any) => ({
                  escudoLocal: match.homeTeam.poster,
                  nombreLocal: match.homeTeam.name,
                  golesLocal: match.localGoals || "-",
                  golesVisitante: match.visitingGoals || "-",
                  nombreVisitante: match.visitingTeam.name,
                  escudoVisitante: match.visitingTeam.poster,
                  lugar: match.playingfield.name,
                  fecha: match.date,
                  status: match.status,
                }))}
                round={round}
                type="calendar-2"
                setSelectedInfo={setSelectedInfo}
              />
            </div>
          );
        })}
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
            <h3 className="text-xl font-bold mb-4">INFORMACIÓN DEL PARTIDO</h3>
            <div className="border-t border-gray-300 my-1" />
            <div className="my-5">
              <p>
                <span className="text-red-500">Lugar:</span>{" "}
                {selectedInfo.lugar}
              </p>
              <p className="my-3">
                <span className="text-red-500">Fecha:</span>{" "}
                {selectedInfo.fecha} - {selectedInfo.hora}
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
  );
};

export default Calendar;