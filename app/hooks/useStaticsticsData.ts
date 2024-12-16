import useCachedSWR from './useCachedSWR';
import { axiosAdapter } from "@/app/config/axios.adapter";

interface TeamStats {
  id: string;
  name: string;
  poster: string | null;
  goalsFor: number;
  goalsAgainst: number;
}

interface PlayerStats {
  id: string;
  name: string;
  teamName: string;
  teamPoster: string;
  goals?: number;
  yellowCards?: number;
  redCards?: number;
}

interface FairPlayTeam {
  id: string;
  name: string;
  poster: string | null;
  totalSanctions: number;
  sportsmanshipPoints: number;
}

interface LeagueStatistics {
  mostScoringTeam: TeamStats[];
  leastConcedingTeam: TeamStats[];
  topScorers: PlayerStats[];
  yellowCards: PlayerStats[];
  redCards: PlayerStats[];
  fairPlayTeams: FairPlayTeam[];
}

const useStatisticsData = (leagueId: string) => {
  const fetchStatistics = async () => {
    try {
      const response = await axiosAdapter.fetchData(`/statistics/${leagueId}`);
      if (!response || Object.keys(response).length === 0) {
        return { data: null, message: "No hay datos de estadísticas disponibles para esta liga." };
      }
      return { data: response, message: null };
    } catch (error) {
      return { data: null, message: "Error al obtener las estadísticas de la liga." };
    }
  };

  const { data, error } = useCachedSWR(
    `statistics-${leagueId}`,
    fetchStatistics,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const loading = !data && !error;
  const statistics: LeagueStatistics | null = data?.data || null;
  const message = data?.message || error?.message || null;

  return { statistics, loading, error: message };
};

export default useStatisticsData;