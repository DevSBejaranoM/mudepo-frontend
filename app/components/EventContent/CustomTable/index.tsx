import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Team {
  id?: number;
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

interface CalendarInfo {
  lugar: string;
  fecha: string;
  hora: string;
}

interface Calendar {
  id?: number;
  local?: string;
  visitante?: string;
  logoLocal?: string;
  logoVisitante?: string;
  localGoals?: number;
  visitanteGoals?: number;
  info?: CalendarInfo;
}

interface TableProps {
  data: Team[] | Player[] | Calendar[];
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
    | "statistics-7"
    | "statistics-8";
  journey?: number;
  setSelectedInfo?: (info: CalendarInfo) => void;
}

const CustomTable = ({ data, type, journey, setSelectedInfo = ()=>{} }: TableProps) => {
  const router = useRouter();

  const renderTable = () => {
    switch (type) {
      case "teams":
        data = data.sort((a: Team, b: Team) => {
          if (a.position! > b.position!) return 1;
          else if (a.position! < b.position!) return -1;
          else return 0;
        });
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
                      className="w-8 h-8 mx-auto cursor-pointer"
                      onClick={()=> router.push(`/team/${team.id}`)}
                    />
                  </td>
                  <td className=" text-center py-2 pr-5">{team.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "classification":
        data = data.sort((a: Team, b: Team) => {
          if (a.points! > b.points!) return -1;
          else if (a.points! < b.points!) return 1;
          else return 0;
        });
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
        data = data.sort((a: Calendar, b: Calendar) => {
          if (a.info!.fecha! > b.info!.fecha!) return -1;
          else if (a.info!.fecha! < b.info!.fecha!) return 1;
          else return 0;
        });
        return (
          <div className="relative">
            <h2 className="text-xl font-bold mb-4 text-red-600">
              Jornada {journey}
            </h2>
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
                {data.map((calendar: Calendar, index) => (
                  <tr
                    key={calendar.id}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="py-2 px-4 border-b text-center bg-primary">
                      <button onClick={() => setSelectedInfo(calendar.info!)}>
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
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                    <td className="py-2 px-4 border-b">{calendar.local}</td>
                    <td className="py-2 px-4 border-b text-center bg-gray-800 text-white border-r-2">
                      {calendar.localGoals}
                    </td>
                    <td className="py-2 px-4 border-b text-center bg-gray-800 text-white">
                      {calendar.visitanteGoals}
                    </td>
                    <td className="py-2 px-4 border-b">{calendar.visitante}</td>
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
        );
      case "statistics-1":
        data = data.sort((a: Team, b: Team) => {
          if (a.total! > b.total!) return 1;
          else if (a.total! < b.total!) return -1;
          else return 0;
        });
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
        data = data.sort((a: Team, b: Team) => {
          if (a.goalsFor! > b.goalsFor!) return -1;
          else if (a.goalsFor! < b.goalsFor!) return 1;
          else return 0;
        });
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
        data = data.sort((a: Team, b: Team) => {
          if (a.goalsAgainst! > b.goalsAgainst!) return 1;
          else if (a.goalsAgainst! < b.goalsAgainst!) return -1;
          else return 0;
        });
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
        data = data.sort((a: Player, b: Player) => {
          if (a.goals! > b.goals!) return -1;
          else if (a.goals! < b.goals!) return 1;
          else return 0;
        });
        return (
          <table className="min-w-[60%] bg-white border-b-2">
            <thead className="bg-gray-300">
              <tr>
                <th className="w-16 py-2 pl-5">CÓDIGO</th>
                <th className="w-80 py-2 px-5">JUGADOR</th>
                <th className="w-80 py-2 px-5">EQUIPO</th>
                <th className="w-16 py-2 pr-5">GOLES</th>
              </tr>
            </thead>
            <tbody>
              {data.map((player: Player, index) => (
                <tr key={index} className="border-t even:bg-gray-100">
                  <td className="text-center py-2 pl-5">{player.code}</td>
                  <td className=" text-center py-2 px-5">{player.name}</td>
                  <td className="text-center py-2 px-5">{player.team}</td>
                  <td className="text-center py-2 pr-5">{player.goals}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "statistics-5":
        data = data.sort((a: Player, b: Player) => {
          if (a.tr! > b.tr!) return -1;
          else if (a.tr! < b.tr!) return 1;
          else return 0;
        });
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
      case "statistics-6":
        data = data.sort((a: Player, b: Player) => {
          if (a.ta! > b.ta!) return -1;
          else if (a.ta! < b.ta!) return 1;
          else return 0;
        });
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
      case "statistics-7":
        data = data.sort((a: Player, b: Player) => {
          if (a.assists! > b.assists!) return -1;
          else if (a.assists! < b.assists!) return 1;
          else return 0;
        });
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
      case "statistics-8":
        data = data.sort((a: Player, b: Player) => {
          if (a.total! > b.total!) return -1;
          else if (a.total! < b.total!) return 1;
          else return 0;
        });
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
      <div
        className={`overflow-x-auto ${
          type !== "statistics-1" && `md:flex md:justify-center`
        }`}
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