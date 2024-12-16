import useCachedSWR from './useCachedSWR';
import { axiosAdapter } from "../config/axios.adapter";

const useRankingData = (phaseId: string) => {
  const fetchRanking = async () => {
    try {
      const response = await axiosAdapter.fetchData(`/ranking/${phaseId}`);
      if (response && Array.isArray(response) && response.length === 0) {
        return { data: [], message: "No hay datos de ranking disponibles para esta fase." };
      }
      return { data: response, message: null };
    } catch (error) {
      return { data: [], message: "No hay datos de ranking disponibles para esta fase." };
    }
  };

  const { data, error } = useCachedSWR(
    `ranking-${phaseId}`,
    fetchRanking,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const loading = !data && !error;
  const rankingData = data?.data || [];
  const message = data?.message || error?.message || null;

  return { rankingData, loading, message };
};

export default useRankingData;