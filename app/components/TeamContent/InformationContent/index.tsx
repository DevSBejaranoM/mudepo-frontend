import TitleDescription from "../../HomeContent/TitleDescription";
import MatchList from "./MatchList";
import NextMatchList from "./NextMatchList";
import TeamHistory from "./TeamHistory";
import TeamInfo from "./TeamInfo";
import TeamRoster from "./TeamRoster";

const InformationContent = () => {

  const team = {
    name: "Tamaraceite Veteranos",
    logo: "/images/team/tamaraceite.png",
    foundation: "1902",
    coach: "Carlo Ancelotti",
    stadium: "Santiago Bernabéu",
    league: "La Liga",
    location: "Madrid, España",
  };

  const playersTeam = [
    { number: 1, name: 'Thibaut Courtois', position: 'ARQ', age: 32 },
    { number: 13, name: 'Andriy Lunin', position: 'ARQ', age: 25},
    { number: 4, name: 'David Alaba', position: 'D(C)', age: 32 },
  ];

  const historyTeam = [
    { competition: 'La Liga', titles: 36 },
    { competition: 'UEFA Champions League', titles: 15 },
    { competition: 'Supercopa de España', titles: 11 },
  ];

  const matches = [
    { date: "2024-01-15", opponent: "FC Barcelona", result: "3-1", isHome: true },
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
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TeamInfo {...team} />
          <TeamRoster players={playersTeam} team={team.name} />
        </div>
        <div>
          <TeamHistory history={historyTeam} team={team.name}/>
          <NextMatchList matches={nextMatches} />
        </div>
        <div className="lg:col-span-2">
          <MatchList matches={matches} />
        </div>
      </div>
    </div>
  );
};

export default InformationContent;