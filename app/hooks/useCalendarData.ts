import { useState, useEffect } from 'react';
import useCachedSWR from './useCachedSWR';
import { axiosAdapter } from "@/app/config/axios.adapter";

interface Group {
  id: string;
  name: string;
}

interface Phase {
  id: string;
  name: string;
  Groups: Group[];
}

interface Match {
  date: string;
  homeTeam: string;
  visitingTeam: string;
  homeTeamPoster: string | null;
  visitingTeamPoster: string | null;
  localGoals: number | null;
  visitingGoals: number | null;
  status: string;
  playingfieldName: string;
}

const useCalendarData = (phases: Phase[]) => {
  const [selectedPhase, setSelectedPhase] = useState<string>('');
  const [selectedGroup, setSelectedGroup] = useState<string>('');

  useEffect(() => {
    if (phases.length > 0) {
      setSelectedPhase(phases[0].id);
      if (phases[0].Groups.length > 0) {
        setSelectedGroup(phases[0].Groups[0].id);
      }
    }
  }, [phases]);

  const fetchGroupData = async (groupId: string): Promise<{ data: any; error: string | null }> => {
    try {
      const response = await axiosAdapter.fetchData(`/matches/${groupId}`);
      return { data: response, error: null };
    } catch (error) {
      console.error("Error fetching group data:", error);
      return { data: null, error: "Error fetching group data" };
    }
  };

  const { data: groupData, error: groupError } = useCachedSWR(
    selectedGroup ? `group-${selectedGroup}` : `group-${selectedPhase}-empty`,
    () => selectedGroup ? fetchGroupData(selectedGroup) : Promise.resolve(null),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const loading = selectedGroup ? (!groupData && !groupError) : false;

  return {
    phases,
    selectedPhase,
    setSelectedPhase,
    selectedGroup,
    setSelectedGroup,
    groupData: groupData?.data,
    loading,
    error: groupError,
  };
};

export default useCalendarData;