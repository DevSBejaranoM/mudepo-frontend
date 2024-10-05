import { useEffect, useState } from "react";
import CustomTable from "../CustomTable";
import { axiosAdapter } from "@/app/config/axios.adapter";
import Loader from "../../Loader";

interface ClassificationProps {
  ranking: any;
  loading: boolean;
  logos: any;
}

const Classification = ({ ranking, loading, logos }: ClassificationProps) => {
  const [phases, setPhases] = useState<any>(null);
  const [dataRanking, setDataRanking] = useState<any>(
    ranking ? ranking : [null]
  );
  const [phaseSelected, setPhaseSelected] = useState<any>(null);
  const [groupsInPhase, setGroupsInPhase] = useState<any>(null);
  const [groupSelected, setGroupSelected] = useState<any>(-1);
  const [dataFiltered, setDataFiltered] = useState<any>(null);

  useEffect(() => {
    if (!phases && ranking) {
      let newDataRanking: any = [];
      let newPhases: any = [];
      ranking.map((rank: any, index: number) => {
        if (!newPhases.some((phase: any) => phase.label === rank?.faseName)) {
          newPhases.push({
            value: index,
            label: rank?.faseName,
          });
        }
        newDataRanking.push({
          ...rank,
          logo: logos.find((logo: any) => logo?.name === rank?.teamName)?.logo,
        });
      });

      setDataRanking(newDataRanking);
      setPhases(newPhases);
      setPhaseSelected(newPhases[0] ? newPhases[0] : []);
      handleChangeGroup(
        -1,
        `listbox-grupo-option`,
        true,
        newPhases[0],
        newDataRanking
      );
    }
  }, []);

  const handleChangePhase = async (
    phase: any,
    idSelect: string,
    firstLoad: boolean = false
  ) => {
    setPhaseSelected(phase);
    setGroupSelected(-1);
    handleChangeGroup(-1, `listbox-grupo-option`, true, phase);
    if (!firstLoad) openListAndClose(idSelect);
  };

  const handleChangeGroup = async (
    group: any,
    idSelect: string,
    firstLoad: boolean = false,
    phase: any = phaseSelected,
    rankingData: any = dataRanking
  ) => {
    setGroupSelected(group);
    if (group === -1) {
      let dataGroup: any = [];
      dataGroup = rankingData.filter(
        (rank: any) => rank?.faseName === phase.label
      );
      let newGroupsInPhase: any = [];
      dataGroup.map((rank: any) => {
        if (!newGroupsInPhase.some((grupo: any) => grupo === rank?.groupName)) {
          newGroupsInPhase.push(rank?.groupName);
        }
      });
      newGroupsInPhase.sort((a: any, b: any) => {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      });
      setGroupsInPhase(newGroupsInPhase);
      setDataFiltered(dataGroup);
      if (!firstLoad) openListAndClose(idSelect);
    } else {
      let dataGroup: any = [];
      dataGroup = rankingData.filter(
        (rank: any) =>
          rank?.faseName === phase.label && rank?.groupName === group
      );
      setDataFiltered(dataGroup);
      openListAndClose(idSelect);
    }
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
    <div className="mt-10">
      {loading && <Loader />}
      {!loading && dataRanking && dataRanking.length === 0 && (
        <h2 className="text-2xl text-center font-semibold">
          Aún no hay clasificación disponible
        </h2>
      )}
      {!loading && dataRanking && dataRanking.length > 0 && (
        <>
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
                      {phaseSelected?.label
                        ? phaseSelected?.label
                        : "No hay fases disponibles"}
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
                  {phases &&
                    phases.map((phase: any, index: number) => (
                      <li
                        key={index}
                        className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                        role="option"
                        onClick={() =>
                          handleChangePhase(phase, `listbox-fase-option`)
                        }
                      >
                        {phase.label}
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
                      {groupSelected === -1
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
                    key={-1}
                    className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                    role="option"
                    onClick={() =>
                      handleChangeGroup(
                        -1,
                        `listbox-grupo-option`,
                        false,
                        phaseSelected,
                        dataRanking
                      )
                    }
                  >
                    Todos los grupos
                  </li>
                  {groupsInPhase &&
                    groupsInPhase.map((grupo: any, index: number) => (
                      <li
                        key={index}
                        className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                        role="option"
                        onClick={() =>
                          handleChangeGroup(
                            grupo,
                            `listbox-grupo-option`,
                            false,
                            phaseSelected,
                            dataRanking
                          )
                        }
                      >
                        {grupo}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          {dataFiltered && dataFiltered.length > 0 && (
            <CustomTable
              data={dataFiltered}
              type="classification"
              allRanking={groupSelected === -1 ? true : false}
            />
          )}
        </>
      )}
    </div>
  );
};
export default Classification;
