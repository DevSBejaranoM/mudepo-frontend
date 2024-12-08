import useCachedSWR from './useCachedSWR';
import { axiosAdapter } from "../config/axios.adapter";

const useRankingData = (phaseId: string) => {
  const fetchRanking = async () => {
    return await axiosAdapter.fetchData(`/ranking/${phaseId}`);
  };

  const { data: rankingData, error } = useCachedSWR(
    `ranking-${phaseId}`,
    fetchRanking,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const loading = !rankingData && !error;
  const errorMessage = error ? "Error al cargar los datos del ranking" : null;

  return { rankingData, loading, error: errorMessage };
};

export default useRankingData;