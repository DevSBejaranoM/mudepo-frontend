import TitleDescription from "../../HomeContent/TitleDescription";
import MatchList from "./MatchList";
import NextMatchList from "./NextMatchList";
import TeamHistory from "./TeamHistory";
import TeamInfo from "./TeamInfo";
import TeamRoster from "./TeamRoster";

const InformationContent = () => {
  return (
    <div>
      <header className={`text-center mx-auto mt-8 mb-8 md:mb-16 lg:mb-20`}>
        <h2 className="text-4xl leading-normal mb-2 font-bold text-gray-700">
          Información del equipo
        </h2>
      </header>
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TeamInfo />
          <TeamRoster />
        </div>
        <div>
          <TeamHistory />
          <NextMatchList />
        </div>
        <div className="lg:col-span-2">
          <MatchList />
        </div>
      </div>
    </div>
  );
};

export default InformationContent;
