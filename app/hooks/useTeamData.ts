import useCachedSWR from "./useCachedSWR";
import { axiosAdapter } from "../config/axios.adapter";

const useTeamData = (teamId: string) => {
  const fetchTeam = async () => {
    return await axiosAdapter.fetchData(`/team/${teamId}`);
  };

  const { data: dataTeam, error } = useCachedSWR(`team-${teamId}`, fetchTeam, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const loading = !dataTeam && !error;
  const errorMessage = error ? "Error al cargar los datos del equipo" : null;

  return { dataTeam, loading, error: errorMessage };
};

export default useTeamData;
