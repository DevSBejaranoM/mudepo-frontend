import { use, useEffect } from "react";
import TitleDescription from "../../HomeContent/TitleDescription";
import MatchList from "./MatchList";
import NextMatchList from "./NextMatchList";
import TeamHistory from "./TeamHistory";
import TeamInfo from "./TeamInfo";
import TeamRoster from "./TeamRoster";

const InformationContent = ({ dataTeam }: any) => {

  const getEdad = (date: string) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  // TeamInfo
  const team = {
    name: dataTeam?.name,
    logo: dataTeam?.tabOne?.poster?.url,
    foundation: "1902",
    president: dataTeam?.tabOne?.presidente?.name,
    stadium: dataTeam?.tabFive?.terrenodejuego?.name,
    league: dataTeam?.tabOne?.leagues
      .map((league: any) => league.name)
      .join(", "),
    location: dataTeam?.tabFive?.terrenodejuego?.location,
  };

  // TeamRoster
  const playersTeam = dataTeam?.tabTwo?.players?.map((player: any) => ({
    number: player.dorsal,
    name: `${player.name} ${player.lastname || ""}`,
    // position: player.roles.map((role: any) => role).join(", "),
    position: player?.position,
    age: getEdad(player.birthdate) || "",
  }));

  // const historyTeam = [
  //   { competition: "La Liga", titles: 36 },
  //   { competition: "UEFA Champions League", titles: 15 },
  //   { competition: "Supercopa de España", titles: 11 },
  // ];

  const matches = [
    {
      date: "2024-01-15",
      opponent: "FC Barcelona",
      result: "3-1",
      isHome: true,
    },
    {
      date: "2024-01-22",
      opponent: "Atlético Madrid",
      result: "2-2",
      isHome: false,
    },
  ];

  const nextMatches = [
    { date: "2024-01-15", opponent: "FC Barcelona", isHome: true },
    {
      date: "2024-01-22",
      opponent: "Atlético Madrid",
      isHome: false,
    },
  ];

  return (
    <div>
      <header className={`text-center mx-auto mt-8 mb-8 md:mb-16 lg:mb-20`}>
        <h2 className="text-4xl leading-normal mb-2 font-bold text-gray-700">
          Información del equipo
        </h2>
      </header>
      <div className="container mx-auto p-4 grid grid-cols-1 gap-4">
      {/* <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4"> */}
        {/* <div className="lg:col-span-2"> */}
        <div>
          <TeamInfo {...team} />
          <TeamRoster players={playersTeam} team={dataTeam?.name} />
        </div>
        {/* <div>
          <TeamHistory history={historyTeam} team={dataTeam?.name} />
          <NextMatchList matches={nextMatches} />
        </div>
        <div className="lg:col-span-2">
          <MatchList matches={matches} />
        </div> */}
      </div>
    </div>
  );
};

export default InformationContent;
