import CustomTable from "../CustomTable";

interface TeamsProps {
  data: any;
  slug: string;
  league: string;
}

const Teams = ({ data, slug, league }: TeamsProps) => {

  return (
    <div className="mt-10">
      {data && data?.length > 0 && (
        <CustomTable data={data} type="teams" slug={slug} league={league} />
      )}
      {data && data?.length === 0 && (
        <h2 className="text-2xl text-center font-semibold">No hay equipos</h2>
      )}
    </div>
  );
};
export default Teams;
