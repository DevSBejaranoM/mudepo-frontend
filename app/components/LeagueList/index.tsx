import LeagueCard from "./LeagueCard";

interface LeagueListProps {
  leagues: any;
  eventName: string;
}

const LeagueList = ({ leagues, eventName }: LeagueListProps) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {leagues.map((league: any, index: number) => (
        <LeagueCard league={league} key={index} index={index} eventName={eventName}/>
      ))}
    </div>
  );
};

export default LeagueList;
