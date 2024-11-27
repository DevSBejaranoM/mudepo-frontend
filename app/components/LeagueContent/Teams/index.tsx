import CustomTable from "../CustomTable";

interface TeamsProps {
  data: any;
}

const Teams = ({ data }: TeamsProps) => {

  return (
    <div className="mt-10">
      {data && data?.length > 0 && (
        <CustomTable data={data} type="teams" />
      )}
      {data && data?.length === 0 && (
        <h2 className="text-2xl text-center font-semibold">No hay equipos</h2>
      )}
    </div>
  );
};
export default Teams;
