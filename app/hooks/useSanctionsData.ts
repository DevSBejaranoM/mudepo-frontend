import useCachedSWR from './useCachedSWR';
import { axiosAdapter } from "../config/axios.adapter";

const useSanctionsData = (leagueId: string) => {
  const fetchRanking = async () => {
    return await axiosAdapter.fetchData(`/player-sanctions/${leagueId}`);
  };

  const { data: sanctionsData, error } = useCachedSWR(
    `sanctions-${leagueId}`,
    fetchRanking,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const loading = !sanctionsData && !error;
  const errorMessage = error ? "Error al cargar los datos de las sanciones" : null;

  return { sanctionsData, loading, error: errorMessage };
};

export default useSanctionsData;