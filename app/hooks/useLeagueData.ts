import useCachedSWR from "./useCachedSWR";
import { axiosAdapter } from "../config/axios.adapter";

const useLeagueData = (leagueName: string) => {
  const fetchLeague = async () => {
    return await axiosAdapter.fetchData(`/league/${leagueName}`);
  };

  const { data: leagueData, error: leagueError } = useCachedSWR(
    `league-${leagueName}`,
    fetchLeague,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const loading = !leagueData && !leagueError;
  const error = leagueError ? "Error al cargar los datos de la liga" : null;

  return { leagueData, loading, error };
};

export default useLeagueData;
