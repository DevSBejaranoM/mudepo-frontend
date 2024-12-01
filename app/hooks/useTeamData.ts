import { useEffect, useState } from "react";
import { axiosAdapter } from "../config/axios.adapter";

const useTeamData = (teamId: string) => {
  const [dataTeam, setDataTeam] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await axiosAdapter.fetchData(`/team/${teamId}`);
        setDataTeam(data);
      } catch (error) {
        console.error("Error retrieving team data:", error);
        setError("Error al cargar los datos del equipo");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, [teamId]);

  return { dataTeam, loading, error };
};

export default useTeamData;
