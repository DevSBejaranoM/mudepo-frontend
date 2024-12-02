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

  const fetchRanking = async () => {
    if (leagueData?.id) {
      return await axiosAdapter.fetchData(
        `/get-ranking?leagueId=${leagueData.id}`
      );
    }
    return null;
  };

  // const { data: ranking, error: rankingError } =
  //   useCachedSWR(
  //     `ranking-${leagueData?.id}`,
  //     fetchRanking,
  //     {
  //       revalidateOnFocus: false,
  //       revalidateOnReconnect: false,
  //     }
  //   );

  const loading = !leagueData && !leagueError;
  const error =
    // leagueError || rankingError ? "Error al cargar los datos de la liga" : null;
    leagueError ? "Error al cargar los datos de la liga" : null;


  // return { leagueData, ranking, loading, error };
  return { leagueData, loading, error };

};

export default useLeagueData;
