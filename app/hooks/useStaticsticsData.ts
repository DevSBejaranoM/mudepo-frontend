import { useState, useEffect } from 'react';
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
  mostScoringTeam: TeamStats;
  leastConcedingTeam: TeamStats;
  topScorers: PlayerStats[];
  yellowCards: PlayerStats[];
  redCards: PlayerStats[];
  fairPlayTeams: FairPlayTeam[];
}

export const useStatisticsData = (leagueId: string) => {
  const [statistics, setStatistics] = useState<LeagueStatistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        setLoading(true);
        const response = await axiosAdapter.fetchData(`/statistics/${leagueId}`);
        setStatistics(response.data);
        setError(null);
      } catch (err) {
        setError('Error fetching statistics');
        console.error('Error fetching statistics:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, [leagueId]);

  return { statistics, loading, error };
};