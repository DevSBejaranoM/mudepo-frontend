"use client";
import { useEffect, useState } from "react";
import CustomTable from "../CustomTable";
import Loader from "../../Loader";
import { axiosAdapter } from "@/app/config/axios.adapter";

const CalendarTwo = ({ data }: any) => {
  const [selectedInfo, setSelectedInfo] = useState<any>(null);
  const [phases, setPhases] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [phaseSelected, setPaheSelected] = useState<number>(0);
  const [dataPhaseSelected, setDataPhaseSelected] = useState<any>(null);
  const [groupSelected, setGroupSelected] = useState<number>(-1);
  const [firstLoad,setFirstLoad] = useState<boolean>(true);
  const [dataFiltered, setDataFiltered] = useState<any>(null);

  useEffect(() => {
    if (data) {
      setPhases(data);
      handleChangePhase(0, `listbox-fase-option`, true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const orderData = (data: any) => {
    if (data.length > 0) {
      return data.sort((a: any, b: any) => {
        if (a?.info?.fecha! > b?.info?.fecha!) return -1;
        else if (a?.info?.fecha! < b?.info?.fecha!) return 1;
        else return 0;
      });
    } else {
      return data;
    }
  };

  const handleChangePhase = async (
    index: any,
    idSelect: string,
    firstLoad: boolean = false
  ) => {
    const dataPhase = await axiosAdapter.fetchData(
      `/fases/${firstLoad ? data[index].value : phases[index]?.value}`
    );
    setDataPhaseSelected(dataPhase);
    setPaheSelected(index);
    setGroupSelected(-1);
    handleChangeGroup(-1, `listbox-grupo-option`, dataPhase);
    // let newData = phases[index]?.grupos[groupSelected]?.partidos;
    // newData = orderData(newData);
    // setDataFiltered(newData);
    openListAndClose(idSelect);
  };

  const handleAllGroups = () => {

};

  const handleChangeGroup = (value: any, idSelect: string, data: any = []) => {
    setGroupSelected(value);
    if (value === -1) {
        console.log("TODOS LOS GRUPOS", data?.tabTwo?.grupos);
        // const allJourney = [];
        // if(data?.tabTwo?.grupos){
        //     data?.tabTwo?.forEach((grupo: any) => {
        //         console.log("GRUPO", grupo.tabTwo.jornadas);
        //         grupo?.tabTwo?.jornadas.forEach((jornada: any) => {

        //         });
        //     });
        // }

      // se recogen todos los partidos de todos los gruposs
    } else {
    //   let newData = phases[phaseSelected]?.grupos[value]?.partidos;
    //   newData = orderData(newData);
    //   setDataFiltered(newData);
    //   openListAndClose(idSelect);
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

  const numberToLetter = (num: number) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[num] || "";
  };

  return (
    <>
      {!phases && loading && <Loader />}
      {!phases && !loading && (
        <div className="flex justify-center my-5 text-center w-full">
          <h3 className="text-4xl font-bold">No hay partidos disponibles</h3>
        </div>
      )}
      {phases && phases.length === 0 && !loading && (
        <div className="flex justify-center my-5 text-center w-full">
          <h3 className="text-4xl font-bold">No hay partidos disponibles</h3>
        </div>
      )}
      {phases && phases.length > 0 && !loading && (
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
                      Fase {phaseSelected + 1}
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
                  {phases.map((phase: any, index: number) => (
                    <li
                      key={index}
                      className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                      role="option"
                      onClick={() =>
                        handleChangePhase(index, `listbox-fase-option`)
                      }
                    >
                      Fase {index + 1}
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
                        : `Grupo ${numberToLetter(groupSelected)}`}
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
                      handleChangeGroup(-1, `listbox-grupo-option`)
                    }
                  >
                    Todos los grupos
                  </li>
                  {/* {phases[phaseSelected]?.grupos.map(
                    (grupo: any, index: number) => (
                      <li
                        key={index}
                        className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                        role="option"
                        onClick={() =>
                          handleChangeGroup(index, `listbox-grupo-option`)
                        }
                      >
                        Grupo {numberToLetter(index)}
                      </li>
                    )
                  )} */}
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`mt-10 grid grid-cols-1 ${
              phases.length === 2
                ? "lg:grid-cols-2 2xl:grid-cols-2"
                : phases.length > 2
                ? "lg:grid-cols-2 2xl:grid-cols-3"
                : ""
            }`}
          >
            {/* {phases.map((phase: any, index: number) => (
            <CustomTable
              key={index}
              data={phase}
              type="calendar-2"
              journey={phase.name}
              setSelectedInfo={setSelectedInfo}
            />
          ))} */}
          </div>
        </>
      )}
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
                {selectedInfo.fecha}
              </p>
              <p>
                <span className="text-red-500">Hora:</span> {selectedInfo.hora}
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
export default CalendarTwo;