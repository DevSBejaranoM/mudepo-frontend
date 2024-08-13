import { useEffect, useState } from "react";
import CustomTable from "../CustomTable";

interface TeamsProps {
  data: any;
}

const Teams = ({ data }: TeamsProps) => {
  const [dataTeam, setDataTeam] = useState<any>(null);

  useEffect(() => {
    if (data) {
      const teams = data.map((team: any, index: number) => {

        return {
          id: team?.value?.id,
          name: team?.value?.name,
          logo: team?.value?.tabOne?.poster?.url,
          position: index + 1,
        };
      });
      setDataTeam(teams);
    }
  }, []);

  return (
    <div className="mt-10">
      {dataTeam && dataTeam.length > 0 && (
        <CustomTable data={dataTeam} type="teams" />
      )}
      {dataTeam && dataTeam.length === 0 && (
        <h2 className="text-2xl text-center font-semibold">No hay equipos</h2>
      )}
    </div>
  );
};
export default Teams;
