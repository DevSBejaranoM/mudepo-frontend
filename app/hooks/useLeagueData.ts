import { useEffect, useState } from "react";
import { axiosAdapter } from "../config/axios.adapter";

const useLeagueData = (leagueName: string) => {
    const [leagueData, setLeagueData] = useState<any>(null);
    const [ranking, setRanking] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchLeagueData = async () => {
        try {
          const data = await axiosAdapter.fetchData(`/league/${leagueName}`);
          if (data) {
            setLeagueData(data);
            // Uncomment the following lines when the ranking endpoint is ready
            // const rankingData = await axiosAdapter.fetchData(`/get-ranking?leagueId=${data.id}`);
            // setRanking(rankingData);
          }
        } catch (error) {
          console.error("Error retrieving league data:", error);
          setError("Error al cargar los datos de la liga");
        } finally {
          setLoading(false);
        }
      };
  
      fetchLeagueData();
    }, [leagueName]);
  
    return { leagueData, ranking, loading, error };
  };

export default useLeagueData;