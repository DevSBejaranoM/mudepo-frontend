import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "../../Loader";
import MatchResult from "./MatchResult";
import { useFetchFile } from "@/app/hooks/useFetchFile";

interface TableProps {
  data: any;
  type:
    | "teams"
    | "classification"
    | "calendar"
    | "calendar-2"
    | "statistics-1"
    | "statistics-2"
    | "statistics-3"
    | "statistics-4"
    | "statistics-5"
    | "statistics-6"
    | "statistics-7"
    | "statistics-8"
    | "deportividad"
    | "sancionados"
    | "tarjetas-rojas"
    | "tarjetas-amarillas"
    | "resolutions";
  slug?: string;
  league?: string;
  journey?: string;
  round?: string;
  logos?: any;
  allRanking?: boolean;
  setSelectedInfo?: (info: any) => void;
}

const CustomTable = ({
  data,
  type,
  journey,
  setSelectedInfo = () => {},
  logos,
  slug,
  round,
  league,
  allRanking = false,
}: TableProps) => {
  const router = useRouter();

  const renderTable = () => {
    switch (type) {
      case "teams":
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-300">
                <tr>
                  <th className="w-16 py-2 px-5">ESC</th>
                  <th className="w-80 py-2 pr-5">EQUIPO</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 && (
                  <tr>
                    <td colSpan={2} className="text-center py-2">
                      No hay equipos
                    </td>
                  </tr>
                )}
                {data.length > 0 &&
                  data.map((team: any, index: number) => {
                    const { data: image } = useFetchFile(team?.poster?.key);

                    return (
                      <tr
                        key={index}
                        className="border-t even:bg-gray-100 cursor-pointer hover:bg-black hover:bg-opacity-20"
                        onClick={() =>
                          router.push(
                            `/eventos/${slug}/${league}/team/${team.id}`
                          )
                        }
                      >
                        <td className="text-center py-2 px-5">
                          <img
                            src={image ? image : ""}
                            alt={team.name}
                            className="w-8 h-8 mx-auto"
                            style={{ objectFit: "contain" }}
                          />
                        </td>
                        <td className=" text-center py-2 pr-5">{team.name}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        );
      case "classification":
        const sortTeams = (teams: any) => {
          return teams.sort((a: any, b: any) => {
            if (a.points !== b.points) return b.points - a.points;
            const goalDiffA = a.goalsFor - a.goalsAgainst;
            const goalDiffB = b.goalsFor - b.goalsAgainst;
            if (goalDiffA !== goalDiffB) return goalDiffB - goalDiffA;
            if (a.won !== b.won) return b.won - a.won;
            if (a.draw !== b.draw) return b.draw - a.draw;
            return 0;
          });
        };

        const renderTable = (teams: any, groupName?: string) => (
          <div className={groupName ? "mb-10 mt-5" : ""}>
            {groupName && (
              <h2 className="text-2xl font-bold mb-4">{groupName}</h2>
            )}
            <div className="overflow-x-auto">
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
                  </tr>
                </thead>
                <tbody>
                  {teams &&
                    teams.map((team: any, index: number) => {
                      const { data: image } = useFetchFile(team?.poster?.key);
                      return (
                        <tr key={team.id} className="border-t even:bg-gray-100">
                          <td className="text-center py-2 pl-5">
                            {team.points === 0 ? index + 1 : index + 1}
                          </td>
                          <td className="text-center py-2 px-5">
                            <img
                              src={image ? image : ""}
                              alt={team.name}
                              className="w-8 h-8 mx-auto"
                              style={{ objectFit: "contain" }}
                            />
                          </td>
                          <td className="text-center py-2 px-5">{team.name}</td>
                          <td className="text-center py-2 px-5">
                            {team.points}
                          </td>
                          <td className="text-center py-2 px-5">
                            {team.played}
                          </td>
                          <td className="text-center py-2 px-5">{team.won}</td>
                          <td className="text-center py-2 px-5">{team.draw}</td>
                          <td className="text-center py-2 px-5">{team.lost}</td>
                          <td className="text-center py-2 px-5">
                            {team.goalsFor}
                          </td>
                          <td className="text-center py-2 px-5">
                            {team.goalsAgainst}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        );

        if (allRanking) {
          return (
            <div>
              {data &&
                data.map((group: any, index: number) => (
                  <React.Fragment key={index}>
                    {renderTable(sortTeams(group.ranking), group.groupName)}
                  </React.Fragment>
                ))}
            </div>
          );
        } else {
          return renderTable(sortTeams(data[0].ranking));
        }
      case "calendar":
        const [phaseSelected, setPaheSelected] = useState<any>(0);
        const [groupSelected, setGroupSelected] = useState<any>(0);
        const [dataFiltered, setDataFiltered] = useState<any>(null);

        useEffect(() => {
          let newData =
            data?.fases[phaseSelected]?.grupos[groupSelected]?.partidos;
          newData = orderData(newData);

          setDataFiltered(newData || []);
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

        const handleChangePhase = (value: any, idSelect: string) => {
          setPaheSelected(value);
          let newData = data?.fases[value]?.grupos[groupSelected]?.partidos;
          newData = orderData(newData);
          setDataFiltered(newData);
          openListAndClose(idSelect);
        };

        const handleChangeGroup = (value: any, idSelect: string) => {
          setGroupSelected(value);
          let newData = data?.fases[phaseSelected]?.grupos[value]?.partidos;
          newData = orderData(newData);
          setDataFiltered(newData);
          openListAndClose(idSelect);
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
            {!dataFiltered && <Loader />}
            {dataFiltered && dataFiltered.length === 0 && (
              <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl text-gray-900">No hay partidos</h1>
              </div>
            )}
            {dataFiltered && dataFiltered.length > 0 && (
              <div className="relative">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                  <h2 className="text-xl font-bold mb-4 md:mb-0 text-red-600">
                    Jornada {journey}
                  </h2>
                  <div className="flex space-x-2 w-full sm:w-auto">
                    <div className="w-full">
                      <div className="relative mt-2">
                        <button
                          type="button"
                          className="relative w-full rounded-md py-2 pl-3 pr-10 color-primary shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6 border-primary hover-border-primary-dark px-4 text-center"
                          aria-haspopup="listbox"
                          aria-expanded="true"
                          aria-labelledby="listbox-fase-label"
                          onClick={() =>
                            openListAndClose(`listbox-fase-option-${journey}`)
                          }
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
                          id={`listbox-fase-option-${journey}`}
                          aria-labelledby="listbox-fase-label"
                          aria-activedescendant="listbox-fase-option-3"
                        >
                          {data?.fases.map((fase: any, index: number) => (
                            <li
                              key={index}
                              className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                              role="option"
                              onClick={() =>
                                handleChangePhase(
                                  index,
                                  `listbox-fase-option-${journey}`
                                )
                              }
                            >
                              {fase.name}
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
                          onClick={() =>
                            openListAndClose(`listbox-grupo-option-${journey}`)
                          }
                        >
                          <span className="flex items-center justify-center">
                            <span className="ml-3 block truncate">
                              Grupo {numberToLetter(groupSelected)}
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
                          id={`listbox-grupo-option-${journey}`}
                          aria-labelledby="listbox-grupo-label"
                          aria-activedescendant="listbox-grupo-option-3"
                        >
                          {data?.fases[phaseSelected]?.grupos.map(
                            (grupo: any, index: number) => (
                              <li
                                key={index}
                                className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                                role="option"
                                onClick={() =>
                                  handleChangeGroup(
                                    index,
                                    `listbox-grupo-option-${journey}`
                                  )
                                }
                              >
                                Grupo {numberToLetter(index)}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gray-300">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b">INFO</th>
                        <th className="py-2 px-4 border-b">ESC</th>
                        <th className="py-2 px-4 border-b">LOCAL</th>
                        <th className="py-2 px-4 border-b">G</th>
                        <th className="py-2 px-4 border-b">G</th>
                        <th className="py-2 px-4 border-b">VISITANTE</th>
                        <th className="py-2 px-4 border-b">ESC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataFiltered.map((calendar: any, index: number) => (
                        <tr
                          key={calendar.id}
                          className={index % 2 === 0 ? "bg-gray-100" : ""}
                        >
                          <td className="py-2 px-4 border-b text-center bg-primary">
                            <button
                              onClick={() => setSelectedInfo(calendar.info!)}
                            >
                              <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 490 490"
                                xmlSpace="preserve"
                                height={25}
                                width={25}
                                fill="#000000"
                              >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  {" "}
                                  <g>
                                    {" "}
                                    <g id="XMLID_25_">
                                      {" "}
                                      <g>
                                        {" "}
                                        <rect
                                          x="390"
                                          y="300"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="390"
                                          y="390"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="305"
                                          y="390"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="305"
                                          y="300"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="220"
                                          y="300"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="220"
                                          y="390"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="50"
                                          y="390"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="135"
                                          y="390"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="135"
                                          y="300"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="50"
                                          y="300"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="50"
                                          y="210"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="135"
                                          y="210"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="220"
                                          y="210"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="305"
                                          y="210"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <rect
                                          x="390"
                                          y="210"
                                          style={{ fill: "#AFB6BB" }}
                                          width="50"
                                          height="50"
                                        ></rect>{" "}
                                        <path
                                          style={{ fill: "#FFFFFF" }}
                                          d="M480,170v300c0,5.498-4.502,10-10,10H20c-5.498,0-10-4.502-10-10V170H480z M440,440v-50h-50v50 H440z M440,350v-50h-50v50H440z M440,260v-50h-50v50H440z M355,440v-50h-50v50H355z M355,350v-50h-50v50H355z M355,260v-50h-50 v50H355z M270,440v-50h-50v50H270z M270,350v-50h-50v50H270z M270,260v-50h-50v50H270z M185,440v-50h-50v50H185z M185,350v-50 h-50v50H185z M185,260v-50h-50v50H185z M100,440v-50H50v50H100z M100,350v-50H50v50H100z M100,260v-50H50v50H100z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#DD352E" }}
                                          d="M220,80c0,5.498,4.502,10,10,10h30c5.498,0,10-4.502,10-10V50h80v30c0,5.498,4.502,10,10,10h30 c5.498,0,10-4.502,10-10V50h70c5.498,0,10,4.502,10,10v110H10V60c0-5.498,4.502-10,10-10h70v30c0,5.498,4.502,10,10,10h30 c5.498,0,10-4.502,10-10V50h80V80z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#AFB6BB" }}
                                          d="M140,50v30c0,5.498-4.502,10-10,10h-30c-5.498,0-10-4.502-10-10V50V20c0-5.498,4.502-10,10-10h30 c5.498,0,10,4.502,10,10V50z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#AFB6BB" }}
                                          d="M270,50v30c0,5.498-4.502,10-10,10h-30c-5.498,0-10-4.502-10-10V50V20c0-5.498,4.502-10,10-10h30 c5.498,0,10,4.502,10,10V50z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#AFB6BB" }}
                                          d="M400,50v30c0,5.498-4.502,10-10,10h-30c-5.498,0-10-4.502-10-10V50V20c0-5.498,4.502-10,10-10h30 c5.498,0,10,4.502,10,10V50z"
                                        ></path>{" "}
                                      </g>{" "}
                                      <g>
                                        {" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M470,40h-60V20c0-11.028-8.972-20-20-20h-30c-11.028,0-20,8.972-20,20v20h-60V20 c0-11.028-8.972-20-20-20h-30c-11.028,0-20,8.972-20,20v20h-60V20c0-11.028-8.972-20-20-20h-30C88.972,0,80,8.972,80,20v20H20 C8.972,40,0,48.972,0,60v410c0,11.028,8.972,20,20,20h450c11.028,0,20-8.972,20-20V60C490,48.972,481.028,40,470,40z M360,20h30 l0.001,60H360V20z M230,20h30l0.001,60H230V20z M100,20h30l0.001,60H100V20z M80,60v20c0,11.028,8.972,20,20,20h30 c11.028,0,20-8.972,20-20V60h60v20c0,11.028,8.972,20,20,20h30c11.028,0,20-8.972,20-20V60h60v20c0,11.028,8.972,20,20,20h30 c11.028,0,20-8.972,20-20V60h60v100h-20v-55h-20v55H60v-55H40v55H20V60H80z M20,470V180h450v290H20z"
                                        ></path>{" "}
                                        <rect
                                          x="230"
                                          y="120"
                                          style={{ fill: "#231F20" }}
                                          width="30"
                                          height="20"
                                        ></rect>{" "}
                                        <rect
                                          x="280"
                                          y="120"
                                          style={{ fill: "#231F20" }}
                                          width="30"
                                          height="20"
                                        ></rect>{" "}
                                        <rect
                                          x="330"
                                          y="120"
                                          style={{ fill: "#231F20" }}
                                          width="30"
                                          height="20"
                                        ></rect>{" "}
                                        <rect
                                          x="180"
                                          y="120"
                                          style={{ fill: "#231F20" }}
                                          width="30"
                                          height="20"
                                        ></rect>{" "}
                                        <rect
                                          x="130"
                                          y="120"
                                          style={{ fill: "#231F20" }}
                                          width="30"
                                          height="20"
                                        ></rect>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M270,200h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C280,204.477,275.523,200,270,200z M260,250h-30v-30h30V250z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M355,200h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C365,204.477,360.523,200,355,200z M345,250h-30v-30h30V250z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M440,200h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C450,204.477,445.523,200,440,200z M430,250h-30v-30h30V250z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M100,200H50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C110,204.477,105.523,200,100,200z M90,250H60v-30h30V250z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M185,200h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C195,204.477,190.523,200,185,200z M175,250h-30v-30h30V250z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M270,290h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C280,294.477,275.523,290,270,290z M260,340h-30v-30h30V340z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M355,290h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C365,294.477,360.523,290,355,290z M345,340h-30v-30h30V340z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M440,290h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C450,294.477,445.523,290,440,290z M430,340h-30v-30h30V340z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M100,290H50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C110,294.477,105.523,290,100,290z M90,340H60v-30h30V340z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M185,290h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C195,294.477,190.523,290,185,290z M175,340h-30v-30h30V340z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M270,380h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C280,384.477,275.523,380,270,380z M260,430h-30v-30h30V430z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M355,380h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C365,384.477,360.523,380,355,380z M345,430h-30v-30h30V430z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M440,380h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C450,384.477,445.523,380,440,380z M430,430h-30v-30h30V430z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M100,380H50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C110,384.477,105.523,380,100,380z M90,430H60v-30h30V430z"
                                        ></path>{" "}
                                        <path
                                          style={{ fill: "#231F20" }}
                                          d="M185,380h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C195,384.477,190.523,380,185,380z M175,430h-30v-30h30V430z"
                                        ></path>{" "}
                                      </g>{" "}
                                    </g>{" "}
                                  </g>{" "}
                                </g>
                              </svg>
                            </button>
                          </td>
                          <td className="py-2 px-4 border-b text-center">
                            <img
                              src={calendar.logoLocal}
                              alt="local"
                              className="w-8 h-8 mx-auto"
                            />
                          </td>
                          <td className="py-2 px-4 border-b">
                            {calendar.teamLocal}
                          </td>
                          <td className="py-2 px-4 border-b text-center bg-gray-800 text-white border-r-2">
                            {calendar.localGoals}
                          </td>
                          <td className="py-2 px-4 border-b text-center bg-gray-800 text-white">
                            {calendar.visitanteGoals}
                          </td>
                          <td className="py-2 px-4 border-b">
                            {calendar.teamVisitante}
                          </td>
                          <td className="py-2 px-4 border-b text-center">
                            <img
                              src={calendar.logoVisitante}
                              alt="visitante"
                              className="w-8 h-8 mx-auto"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        );
      case "calendar-2":
        return (
          <>
            {data && data?.length === 0 && (
              <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl text-gray-900">No hay partidos</h1>
              </div>
            )}
            {data && data?.length > 0 && (
              <div className="relative">
                <div className="overflow-x-auto">
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                    <h1 className="text-xl font-bold mb-4 md:mb-0 text-red-600">
                      {round}
                    </h1>
                  </div>
                  <table className="min-w-full bg-gray-300">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b">INFO</th>
                        <th className="py-2 px-4 border-b">ESC</th>
                        <th className="py-2 px-4 border-b">LOCAL</th>
                        <th className="py-2 px-4 border-b">G</th>
                        <th className="py-2 px-4 border-b">G</th>
                        <th className="py-2 px-4 border-b">VISITANTE</th>
                        <th className="py-2 px-4 border-b">ESC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((calendar: any, index: number) => {
                        const { data: imageLocal } = useFetchFile(
                          calendar?.escudoLocal?.key
                        );
                        const { data: imageVisitante } = useFetchFile(
                          calendar?.escudoVisitante?.key
                        );

                        return (
                          <tr
                            key={`${calendar.nombreLocal} - ${calendar.nombreVisitante} - ${calendar.fecha}`}
                            className={index % 2 === 0 ? "bg-gray-100" : ""}
                          >
                            <td className="py-2 px-4 border-b text-center bg-primary">
                              <button
                                onClick={() =>
                                  setSelectedInfo({
                                    lugar: calendar?.lugar,
                                    fecha: new Date(
                                      calendar?.fecha
                                    ).toLocaleDateString(),
                                    hora:
                                      (new Date(calendar?.fecha).getHours() ===
                                      0
                                        ? new Date(calendar?.fecha).getHours() +
                                          "0"
                                        : new Date(
                                            calendar?.fecha
                                          ).getHours()) +
                                      ":" +
                                      (new Date(
                                        calendar?.fecha
                                      ).getMinutes() === 0
                                        ? new Date(
                                            calendar?.fecha
                                          ).getMinutes() + "0"
                                        : new Date(
                                            calendar?.fecha
                                          ).getMinutes()),
                                  })
                                }
                              >
                                <svg
                                  version="1.1"
                                  id="Layer_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  viewBox="0 0 490 490"
                                  xmlSpace="preserve"
                                  height={25}
                                  width={25}
                                  fill="#000000"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <g>
                                      {" "}
                                      <g id="XMLID_25_">
                                        {" "}
                                        <g>
                                          {" "}
                                          <rect
                                            x="390"
                                            y="300"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="390"
                                            y="390"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="305"
                                            y="390"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="305"
                                            y="300"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="220"
                                            y="300"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="220"
                                            y="390"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="50"
                                            y="390"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="135"
                                            y="390"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="135"
                                            y="300"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="50"
                                            y="300"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="50"
                                            y="210"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="135"
                                            y="210"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="220"
                                            y="210"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="305"
                                            y="210"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <rect
                                            x="390"
                                            y="210"
                                            style={{ fill: "#AFB6BB" }}
                                            width="50"
                                            height="50"
                                          ></rect>{" "}
                                          <path
                                            style={{ fill: "#FFFFFF" }}
                                            d="M480,170v300c0,5.498-4.502,10-10,10H20c-5.498,0-10-4.502-10-10V170H480z M440,440v-50h-50v50 H440z M440,350v-50h-50v50H440z M440,260v-50h-50v50H440z M355,440v-50h-50v50H355z M355,350v-50h-50v50H355z M355,260v-50h-50 v50H355z M270,440v-50h-50v50H270z M270,350v-50h-50v50H270z M270,260v-50h-50v50H270z M185,440v-50h-50v50H185z M185,350v-50 h-50v50H185z M185,260v-50h-50v50H185z M100,440v-50H50v50H100z M100,350v-50H50v50H100z M100,260v-50H50v50H100z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#DD352E" }}
                                            d="M220,80c0,5.498,4.502,10,10,10h30c5.498,0,10-4.502,10-10V50h80v30c0,5.498,4.502,10,10,10h30 c5.498,0,10-4.502,10-10V50h70c5.498,0,10,4.502,10,10v110H10V60c0-5.498,4.502-10,10-10h70v30c0,5.498,4.502,10,10,10h30 c5.498,0,10-4.502,10-10V50h80V80z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#AFB6BB" }}
                                            d="M140,50v30c0,5.498-4.502,10-10,10h-30c-5.498,0-10-4.502-10-10V50V20c0-5.498,4.502-10,10-10h30 c5.498,0,10,4.502,10,10V50z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#AFB6BB" }}
                                            d="M270,50v30c0,5.498-4.502,10-10,10h-30c-5.498,0-10-4.502-10-10V50V20c0-5.498,4.502-10,10-10h30 c5.498,0,10,4.502,10,10V50z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#AFB6BB" }}
                                            d="M400,50v30c0,5.498-4.502,10-10,10h-30c-5.498,0-10-4.502-10-10V50V20c0-5.498,4.502-10,10-10h30 c5.498,0,10,4.502,10,10V50z"
                                          ></path>{" "}
                                        </g>{" "}
                                        <g>
                                          {" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M470,40h-60V20c0-11.028-8.972-20-20-20h-30c-11.028,0-20,8.972-20,20v20h-60V20 c0-11.028-8.972-20-20-20h-30c-11.028,0-20,8.972-20,20v20h-60V20c0-11.028-8.972-20-20-20h-30C88.972,0,80,8.972,80,20v20H20 C8.972,40,0,48.972,0,60v410c0,11.028,8.972,20,20,20h450c11.028,0,20-8.972,20-20V60C490,48.972,481.028,40,470,40z M360,20h30 l0.001,60H360V20z M230,20h30l0.001,60H230V20z M100,20h30l0.001,60H100V20z M80,60v20c0,11.028,8.972,20,20,20h30 c11.028,0,20-8.972,20-20V60h60v20c0,11.028,8.972,20,20,20h30c11.028,0,20-8.972,20-20V60h60v20c0,11.028,8.972,20,20,20h30 c11.028,0,20-8.972,20-20V60h60v100h-20v-55h-20v55H60v-55H40v55H20V60H80z M20,470V180h450v290H20z"
                                          ></path>{" "}
                                          <rect
                                            x="230"
                                            y="120"
                                            style={{ fill: "#231F20" }}
                                            width="30"
                                            height="20"
                                          ></rect>{" "}
                                          <rect
                                            x="280"
                                            y="120"
                                            style={{ fill: "#231F20" }}
                                            width="30"
                                            height="20"
                                          ></rect>{" "}
                                          <rect
                                            x="330"
                                            y="120"
                                            style={{ fill: "#231F20" }}
                                            width="30"
                                            height="20"
                                          ></rect>{" "}
                                          <rect
                                            x="180"
                                            y="120"
                                            style={{ fill: "#231F20" }}
                                            width="30"
                                            height="20"
                                          ></rect>{" "}
                                          <rect
                                            x="130"
                                            y="120"
                                            style={{ fill: "#231F20" }}
                                            width="30"
                                            height="20"
                                          ></rect>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M270,200h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C280,204.477,275.523,200,270,200z M260,250h-30v-30h30V250z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M355,200h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C365,204.477,360.523,200,355,200z M345,250h-30v-30h30V250z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M440,200h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C450,204.477,445.523,200,440,200z M430,250h-30v-30h30V250z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M100,200H50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C110,204.477,105.523,200,100,200z M90,250H60v-30h30V250z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M185,200h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C195,204.477,190.523,200,185,200z M175,250h-30v-30h30V250z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M270,290h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C280,294.477,275.523,290,270,290z M260,340h-30v-30h30V340z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M355,290h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C365,294.477,360.523,290,355,290z M345,340h-30v-30h30V340z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M440,290h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C450,294.477,445.523,290,440,290z M430,340h-30v-30h30V340z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M100,290H50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C110,294.477,105.523,290,100,290z M90,340H60v-30h30V340z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M185,290h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C195,294.477,190.523,290,185,290z M175,340h-30v-30h30V340z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M270,380h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C280,384.477,275.523,380,270,380z M260,430h-30v-30h30V430z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M355,380h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C365,384.477,360.523,380,355,380z M345,430h-30v-30h30V430z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M440,380h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C450,384.477,445.523,380,440,380z M430,430h-30v-30h30V430z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M100,380H50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C110,384.477,105.523,380,100,380z M90,430H60v-30h30V430z"
                                          ></path>{" "}
                                          <path
                                            style={{ fill: "#231F20" }}
                                            d="M185,380h-50c-5.523,0-10,4.477-10,10v50c0,5.523,4.477,10,10,10h50c5.523,0,10-4.477,10-10v-50 C195,384.477,190.523,380,185,380z M175,430h-30v-30h30V430z"
                                          ></path>{" "}
                                        </g>{" "}
                                      </g>{" "}
                                    </g>{" "}
                                  </g>
                                </svg>
                              </button>
                            </td>
                            <td className="py-2 px-4 border-b text-center">
                              <img
                                src={imageLocal || ""}
                                alt="local"
                                className="w-8 h-8 mx-auto"
                              />
                            </td>
                            <td className="py-2 px-4 border-b">
                              {calendar?.nombreLocal}
                            </td>
                            <MatchResult
                              date={calendar.fecha}
                              status={calendar.status}
                              localGoals={calendar.golesLocal}
                              visitingGoals={calendar.golesVisitante}
                            />
                            <td className="py-2 px-4 border-b">
                              {calendar?.nombreVisitante}
                            </td>
                            <td className="py-2 px-4 border-b text-center">
                              <img
                                src={imageVisitante || ""}
                                alt="visitante"
                                className="w-8 h-8 mx-auto"
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        );
      case "statistics-1":
        data = data.sort((a: any, b: any) => {
          if (a.total! > b.total!) return 1;
          else if (a.total! < b.total!) return -1;
          else return 0;
        });
        return (
          <div className="overflow-x-auto">
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
                {data.map((team: any, index: number) => (
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
          </div>
        );
      case "statistics-2":
        return (
          <div className="overflow-x-auto">
            <table className="min-w-[60%] bg-white border-b-2">
              <thead className="bg-gray-300">
                <tr>
                  <th className="w-16 py-2 pl-5">ESC</th>
                  <th className="w-80 py-2 px-5">EQUIPO</th>
                  <th className="w-16 py-2 pr-5">GOLES</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length === 0 && (
                  <tr className="border-t even:bg-gray-100">
                    <td colSpan={3} className="text-center py-2">
                      No hay datos
                    </td>
                  </tr>
                )}
                {data &&
                  data.length > 0 &&
                  data.map((team: any, index: number) => {
                    const { data: imagen } = useFetchFile(team?.poster?.key);

                    return (
                      index < 5 && (
                        <tr key={index} className="border-t even:bg-gray-100">
                          <td className="text-center py-2 pl-5">
                            <img
                              src={imagen || ""}
                              alt={team.name}
                              className="w-8 h-8 mx-auto"
                            />
                          </td>
                          <td className=" text-center py-2 px-5">
                            {team.name}
                          </td>
                          <td className="text-center py-2 pr-5">
                            {team.goalsFor}
                          </td>
                        </tr>
                      )
                    );
                  })}
              </tbody>
            </table>
          </div>
        );
      case "statistics-3":
        return (
          <div className="overflow-x-auto">
            <table className="min-w-[60%] bg-white border-b-2">
              <thead className="bg-gray-300">
                <tr>
                  <th className="w-16 py-2 pl-5">ESC</th>
                  <th className="w-80 py-2 px-5">EQUIPO</th>
                  <th className="w-16 py-2 pr-5">GOLES</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length === 0 && (
                  <tr className="border-t even:bg-gray-100">
                    <td colSpan={3} className="text-center py-2">
                      No hay datos
                    </td>
                  </tr>
                )}
                {data &&
                  data.length > 0 &&
                  data.map((team: any, index: number) => {
                    const { data: imagen } = useFetchFile(team?.poster?.key);
                    return (
                      index < 5 && (
                        <tr key={index} className="border-t even:bg-gray-100">
                          <td className="text-center py-2 pl-5">
                            <img
                              src={imagen || ""}
                              alt={team.name}
                              className="w-8 h-8 mx-auto"
                            />
                          </td>
                          <td className=" text-center py-2 px-5">
                            {team.name}
                          </td>
                          <td className="text-center py-2 pr-5">
                            {team.goalsAgainst}
                          </td>
                        </tr>
                      )
                    );
                  })}
              </tbody>
            </table>
          </div>
        );
      case "statistics-4":
        data = data?.sort((a: any, b: any) => {
          if (a.goals! > b.goals!) return -1;
          else if (a.goals! < b.goals!) return 1;
          else return 0;
        });
        return (
          <div className="overflow-x-auto">
            <table className="min-w-[60%] bg-white border-b-2">
              <thead className="bg-gray-300">
                <tr>
                  <th className="w-16 py-2 pl-5">ESC</th>
                  <th className="w-16 py-2 px-5">DORSAL</th>
                  <th className="w-80 py-2 px-5">JUGADOR</th>
                  <th className="w-80 py-2 px-5">EQUIPO</th>
                  <th className="w-16 py-2 pr-5">GOLES</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length === 0 && (
                  <tr className="border-t even:bg-gray-100">
                    <td colSpan={5} className="text-center py-2">
                      No hay datos
                    </td>
                  </tr>
                )}
                {data &&
                  data.length > 0 &&
                  data.map((player: any, index: number) => {
                    const { data: imagen } = useFetchFile(
                      player?.teamPoster?.key
                    );
                    return (
                      index < 5 && (
                        <tr key={index} className="border-t even:bg-gray-100">
                          <td className="text-center py-2 pl-5">
                            <img
                              src={imagen || ""}
                              alt={player.name}
                              className="w-8 h-8 mx-auto"
                            />
                          </td>
                          <td className="text-center py-2 pr-5">
                            {player.dorsal}
                          </td>
                          <td className=" text-center py-2 px-5">
                            {player.name}
                          </td>
                          <td className="text-center py-2 px-5">
                            {player.teamName}
                          </td>
                          <td className="text-center py-2 pr-5">
                            {player.goals}
                          </td>
                        </tr>
                      )
                    );
                  })}
              </tbody>
            </table>
          </div>
        );
      case "statistics-5":
        data = data?.sort((a: any, b: any) => {
          if (a.redCards! > b.redCards!) return -1;
          else if (a.redCards! < b.redCards!) return 1;
          else return 0;
        });
        return (
          <div className="overflow-x-auto">
            <table className="min-w-[60%] bg-white border-b-2">
              <thead className="bg-gray-300">
                <tr>
                  <th className="w-16 py-2 pl-5">ESC</th>
                  <th className="w-16 py-2 px-5">DORSAL</th>
                  <th className="w-80 py-2 px-5">JUGADOR</th>
                  <th className="w-80 py-2 px-5">EQUIPO</th>
                  <th className="w-16 py-2 pr-5">T.R.</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length === 0 && (
                  <tr className="border-t even:bg-gray-100">
                    <td colSpan={5} className="text-center py-2">
                      No hay datos
                    </td>
                  </tr>
                )}
                {data &&
                  data.length > 0 &&
                  data.map((player: any, index: number) => {
                    const { data: imagen } = useFetchFile(
                      player?.teamPoster?.key
                    );

                    return (
                      index < 5 && (
                        <tr key={index} className="border-t even:bg-gray-100">
                          <td className="text-center py-2 pl-5">
                            <img
                              src={imagen || ""}
                              alt={player.name}
                              className="w-8 h-8 mx-auto"
                            />
                          </td>
                          <td className="text-center py-2 px-5">
                            {player.dorsal}
                          </td>
                          <td className=" text-center py-2 px-5">
                            {player.name}
                          </td>
                          <td className="text-center py-2 px-5">
                            {player.teamName}
                          </td>
                          <td className="text-center py-2 pr-5">
                            {player.redCards}
                          </td>
                        </tr>
                      )
                    );
                  })}
              </tbody>
            </table>
          </div>
        );
      case "statistics-6":
        data = data?.sort((a: any, b: any) => {
          if (a.yellowCards! > b.yellowCards!) return -1;
          else if (a.yellowCards! < b.yellowCards!) return 1;
          else return 0;
        });
        return (
          <div className="overflow-x-auto">
            <table className="min-w-[60%] bg-white border-b-2">
              <thead className="bg-gray-300">
                <tr>
                  <th className="w-16 py-2 pl-5">ESC</th>
                  <th className="w-16 py-2 px-5">DORSAL</th>
                  <th className="w-80 py-2 px-5">JUGADOR</th>
                  <th className="w-80 py-2 px-5">EQUIPO</th>
                  <th className="w-16 py-2 pr-5">T.A.</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length === 0 && (
                  <tr className="border-t even:bg-gray-100">
                    <td colSpan={5} className="text-center py-2">
                      No hay datos
                    </td>
                  </tr>
                )}
                {data &&
                  data.length > 0 &&
                  data.map((player: any, index: number) => {
                    const { data: imagen } = useFetchFile(
                      player?.teamPoster?.key
                    );

                    return (
                      index < 5 && (
                        <tr key={index} className="border-t even:bg-gray-100">
                          <td className="text-center py-2 pl-5">
                            <img
                              src={imagen || ""}
                              alt={player.name}
                              className="w-8 h-8 mx-auto"
                            />
                          </td>
                          <td className="text-center py-2 px-5">
                            {player.dorsal}
                          </td>
                          <td className=" text-center py-2 px-5">
                            {player.name}
                          </td>
                          <td className="text-center py-2 px-5">
                            {player.teamName}
                          </td>
                          <td className="text-center py-2 pr-5">
                            {player.yellowCards}
                          </td>
                        </tr>
                      )
                    );
                  })}
              </tbody>
            </table>
          </div>
        );
      case "statistics-7":
        data = data?.sort((a: any, b: any) => {
          if (a.assists! > b.assists!) return -1;
          else if (a.assists! < b.assists!) return 1;
          else return 0;
        });
        return (
          <div className="overflow-x-auto">
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
                {data &&
                  data.length > 0 &&
                  data.map((player: any, index: number) => (
                    <tr key={index} className="border-t even:bg-gray-100">
                      <td className="text-center py-2 pl-5">{player.code}</td>
                      <td className=" text-center py-2 px-5">{player.name}</td>
                      <td className="text-center py-2 px-5">{player.team}</td>
                      <td className="text-center py-2 pr-5">
                        {player.assists}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        );
      case "statistics-8":
        data = data.sort((a: any, b: any) => {
          if (a.total! > b.total!) return -1;
          else if (a.total! < b.total!) return 1;
          else return 0;
        });
        return (
          <div className="overflow-x-auto">
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
                {data.map((player: any, index: number) => (
                  <tr key={index} className="border-t even:bg-gray-100">
                    <td className="text-center py-2 pl-5">{player.code}</td>
                    <td className=" text-center py-2 px-5">{player.name}</td>
                    <td className="text-center py-2 px-5">{player.team}</td>
                    <td className="text-center py-2 pr-5">{player.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "deportividad":
        return (
          <div className="overflow-x-auto">
            <table className="min-w-[60%] bg-white border-b-2">
              <thead className="bg-gray-300">
                <tr>
                  <th className="w-16 py-2 pl-5">ESC</th>
                  <th className="w-80 py-2 px-5">EQUIPO</th>
                  <th className="w-16 py-2 px-5">SANCIONES</th>
                  <th className="w-16 py-2 pr-5">PUNTOS</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 && (
                  <tr className="border-t even:bg-gray-100">
                    <td colSpan={4} className="text-center py-2">
                      No hay datos
                    </td>
                  </tr>
                )}
                {data &&
                  data.map((team: any, index: number) => {
                    const { data: image } = useFetchFile(team?.poster?.key);
                    return (
                      index < 5 && (
                        <tr key={index} className="border-t even:bg-gray-100">
                          <td className="text-center py-2 pl-5">
                            <img
                              src={image || ""}
                              alt={team.name}
                              className="w-8 h-8 mx-auto"
                            />
                          </td>
                          <td className=" text-center py-2 px-5">
                            {team.name}
                          </td>
                          <td className=" text-center py-2 px-5">
                            {team.totalSanctions}
                          </td>
                          <td className="text-center py-2 pr-5">
                            {team.sportsmanshipPoints}
                          </td>
                        </tr>
                      )
                    );
                  })}
              </tbody>
            </table>
          </div>
        );
      case "sancionados":
        data = data.sort((a: any, b: any) => {
          if (a?.suspendedMatches > b?.suspendedMatches) return -1;
          else if (a?.suspendedMatches < b?.suspendedMatches) return 1;
        });

        return (
          <div className="overflow-x-auto">
            <table className="min-w-[60%] bg-white border-b-2">
              <thead className="bg-gray-300">
                <tr>
                  <th className="w-16 py-2 pl-5">ESC</th>
                  <th className="w-80 py-2 px-5">DORSAL</th>
                  <th className="w-80 py-2 px-5">JUGADOR</th>
                  <th className="w-80 py-2 px-5">EQUIPO</th>
                  <th className="w-16 py-2 px-5">PARTIDOS PENDIENTES</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 && (
                  <tr className="border-t even:bg-gray-100">
                    <td colSpan={6} className="text-center py-2">
                      No hay datos
                    </td>
                  </tr>
                )}
                {data.map((player: any, index: number) => {
                  const { data: image } = useFetchFile(player?.teamPoster?.key);
                  if (player?.suspendedMatches === 0) return null;
                  return (
                    <tr key={index} className="border-t even:bg-gray-100">
                      <td className="text-center py-2 pl-5">
                        <img
                          src={image || ""}
                          alt={player.name}
                          className="w-8 h-8 mx-auto"
                        />
                      </td>
                      <td className=" text-center py-2 px-5">
                        {player.dorsal}
                      </td>
                      <td className=" text-center py-2 px-5">
                        {player.teamName}
                      </td>
                      <td className=" text-center py-2 px-5">
                        {player.playerName}
                      </td>
                      <td className="text-center py-2 px-5">
                        {player.suspendedMatches}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      case "tarjetas-rojas":
        data = data.sort((a: any, b: any) => {
          if (a?.numberOfCards > b?.numberOfCards) return -1;
          else if (a?.numberOfCards < b?.numberOfCards) return 1;
        });

        return (
          <div className="overflow-x-auto">
            <table className="min-w-[60%] bg-white border-b-2">
              <thead className="bg-gray-300">
                <tr>
                  <th className="w-16 py-2 pl-5">ESC</th>
                  <th className="w-80 py-2 px-5">DORSAL</th>
                  <th className="w-80 py-2 px-5">JUGADOR</th>
                  <th className="w-80 py-2 px-5">EQUIPO</th>
                  <th className="w-16 py-2 px-5">TARJETAS</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 && (
                  <tr className="border-t even:bg-gray-100">
                    <td colSpan={5} className="text-center py-2">
                      No hay datos
                    </td>
                  </tr>
                )}

                {data.map((team: any, index: number) => {
                  const { data: image } = useFetchFile(team?.teamPoster?.key);

                  return (
                    <tr key={index} className="border-t even:bg-gray-100">
                      <td className="text-center py-2 pl-5">
                        <img
                          src={image || ""}
                          alt={team.team}
                          className="w-8 h-8 mx-auto"
                        />
                      </td>
                      <td className=" text-center py-2 px-5">{team.dorsal}</td>
                      <td className=" text-center py-2 px-5">
                        {team.teamName}
                      </td>
                      <td className=" text-center py-2 px-5">
                        {team.playerName}
                      </td>
                      <td className="text-center py-2 px-5">
                        {team.numberOfCards}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      case "tarjetas-amarillas":
        data = data.sort((a: any, b: any) => {
          if (a?.numberOfCards > b?.numberOfCards) return -1;
          else if (a?.numberOfCards < b?.numberOfCards) return 1;
        });

        return (
          <div className="overflow-x-auto">
            <table className="min-w-[60%] bg-white border-b-2">
              <thead className="bg-gray-300">
                <tr>
                  <th className="w-16 py-2 pl-5">ESC</th>
                  <th className="w-80 py-2 px-5">DORSAL</th>
                  <th className="w-80 py-2 px-5">JUGADOR</th>
                  <th className="w-80 py-2 px-5">EQUIPO</th>
                  <th className="w-16 py-2 px-5">TARJETAS</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 && (
                  <tr className="border-t even:bg-gray-100">
                    <td colSpan={5} className="text-center py-2">
                      No hay datos
                    </td>
                  </tr>
                )}

                {data.map((team: any, index: number) => {
                  const { data: image } = useFetchFile(team?.teamPoster?.key);

                  return (
                    <tr key={index} className="border-t even:bg-gray-100">
                      <td className="text-center py-2 pl-5">
                        <img
                          src={image || ""}
                          alt={team.team}
                          className="w-8 h-8 mx-auto"
                        />
                      </td>
                      <td className=" text-center py-2 px-5">{team.dorsal}</td>
                      <td className=" text-center py-2 px-5">
                        {team.teamName}
                      </td>
                      <td className=" text-center py-2 px-5">
                        {team.playerName}
                      </td>
                      <td className="text-center py-2 px-5">
                        {team.numberOfCards}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      case "resolutions":
        data = data.sort((a: any, b: any) => {
          if (a.dateTime! > b.dateTime!) return -1;
          else if (a.dateTime! < b.dateTime!) return 1;
          else return 0;
        });

        return (
          <div className="overflow-x-auto">
            <table className="bg-white border-b-2">
              <thead className="bg-gray-300">
                <tr>
                  <th className="w-48 py-2 pl-5">FECHA</th>
                  <th className="w-64 py-2 px-5">TÍTULO</th>
                  <th className="w-auto py-2 px-5">OBSERVACIONES</th>
                </tr>
              </thead>
              <tbody>
                {data.map((resolution: any, index: number) => (
                  <tr key={index} className="border-t even:bg-gray-100">
                    <td className="text-center py-3 pl-5">
                      {new Date(resolution.dateTime).toLocaleString()}
                    </td>
                    <td className=" text-center py-3 px-5">
                      {resolution?.name}
                    </td>
                    <td
                      className="text-center py-3 px-5 cursor-pointer underline underline-offset-4"
                      onClick={() => setSelectedInfo(resolution)}
                    >
                      Detalle
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div
        className={`${type !== "statistics-1" && `md:flex md:justify-center`}`}
      >
        {renderTable()}
      </div>
      {type === "statistics-1" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4 mt-5">
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
