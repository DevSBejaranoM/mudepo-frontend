import { useMemo } from "react";
import MatchList from "./MatchList";
import TeamInfo from "./TeamInfo";
import TeamRoster from "./TeamRoster";

const InformationContent = ({ dataTeam }: any) => {
  const sortedMatches = useMemo(() => {
    const allMatches = dataTeam?.Matches?.sort((a: any, b: any) => {
      return new Date(b?.date).getTime() - new Date(a?.date).getTime();
    });

    return allMatches;
  }, [dataTeam?.Matches]);

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
          <TeamInfo {...dataTeam} />
          <TeamRoster players={dataTeam?.Players} />
        </div>
        {/* <div>
          <TeamHistory history={historyTeam} team={dataTeam?.name} />
          <NextMatchList matches={nextMatches} />
        </div> */}
        <div className="lg:col-span-2">
          <MatchList matchList={sortedMatches || []} />
        </div>
      </div>
    </div>
  );
};

export default InformationContent;
