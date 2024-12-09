import LeagueCard from "./LeagueCard";

interface LeagueListProps {
  leagues: any;
  eventName: string;
  slug: string;
}

const LeagueList = ({ leagues, eventName, slug }: LeagueListProps) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {leagues.map((league: any, index: number) => (
        <LeagueCard league={league} key={index} index={index} eventName={eventName} slug={slug}/>
      ))}
    </div>
  );
};

export default LeagueList;
