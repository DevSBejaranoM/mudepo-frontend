"use client";

import React, { useState, useEffect, useMemo } from "react";
import CustomTable from "../CustomTable";
import Loader from "../../Loader";
import useRankingData from "@/app/hooks/useRangkingData";

interface Phase {
  id: string;
  name: string;
}

interface RankingItem {
  groupName: string;
  phaseName: string;
  ranking: any[]; // Puedes definir una interfaz más específica para el ranking si lo deseas
}

interface ClassificationProps {
  phases: Phase[];
}

const Classification: React.FC<ClassificationProps> = ({ phases }) => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>(phases[0]?.id);
  const [selectedGroup, setSelectedGroup] = useState<string>("all");
  const { rankingData, loading, message } = useRankingData(selectedPhaseId);

  useEffect(() => {
    if (phases.length > 0 && !selectedPhaseId) {
      setSelectedPhaseId(phases[0].id);
    }
  }, [phases, selectedPhaseId]);

  const groups = useMemo(() => {
    if (!rankingData) return [];
    return Array.from(
      new Set(rankingData.map((item: RankingItem) => item.groupName))
    );
  }, [rankingData]);

  const handleChangePhase = (phaseId: string) => {
    setSelectedPhaseId(phaseId);
    setSelectedGroup("all");
    openListAndClose("listbox-fase-option");
  };

  const handleChangeGroup = (group: string) => {
    setSelectedGroup(group);
    openListAndClose("listbox-grupo-option");
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

  const filteredRankings = useMemo(() => {
    if (!rankingData) return [];
    return selectedGroup === "all"
      ? rankingData
      : rankingData.filter(
          (item: RankingItem) => item.groupName === selectedGroup
        );
  }, [rankingData, selectedGroup]);

  const selectedPhase = phases.find((phase) => phase.id === selectedPhaseId);

  if (loading) return <Loader />;

  return (
    <div className="mt-10">
      <div className="flex space-x-2 md:mx-96 justify-center">
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
                  {selectedPhase?.name || "No hay fases disponibles"}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                {/* SVG icon */}
              </span>
            </button>
            <ul
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm hidden"
              role="listbox"
              id={`listbox-fase-option`}
              aria-labelledby="listbox-fase-label"
            >
              {phases.map((phase) => (
                <li
                  key={phase.id}
                  className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                  role="option"
                  onClick={() => handleChangePhase(phase.id)}
                >
                  {phase.name}
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
                  {selectedGroup === "all" ? "Todos los grupos" : selectedGroup}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                {/* SVG icon */}
              </span>
            </button>
            <ul
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm hidden"
              role="listbox"
              id={`listbox-grupo-option`}
              aria-labelledby="listbox-grupo-label"
            >
              <li
                key="all"
                className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                role="option"
                onClick={() => handleChangeGroup("all")}
              >
                Todos los grupos
              </li>
              {groups.map((group: any) => (
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
      {message && <p className="text-center mt-4">{message}</p>}
      {!message && filteredRankings.length > 0 ? (
        <CustomTable
          data={filteredRankings}
          type="classification"
          allRanking={selectedGroup === "all"}
        />
      ) : null}
    </div>
  );
};

export default Classification;
