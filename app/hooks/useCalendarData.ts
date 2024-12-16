import { useState, useEffect } from "react";
import useCachedSWR from "./useCachedSWR";
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

const useCalendarData = (phases: Phase[]) => {
  const [selectedPhase, setSelectedPhase] = useState<string>("");
  const [selectedGroup, setSelectedGroup] = useState<string>("all");

  useEffect(() => {
    if (phases.length > 0) {
      setSelectedPhase(phases[0].id);
    }
  }, [phases]);

  const fetchPhaseData = async (): Promise<{
    data: any;
    error: string | null;
  }> => {
    try {
      const response = await axiosAdapter.fetchData(
        `/matches/${selectedPhase}`
      );
      return { data: response, error: null };
    } catch (error) {
      console.error("Error fetching group data:", error);
      return { data: null, error: "Error fetching group data" };
    }
  };

  const { data: groupData, error: groupError } = useCachedSWR(
    selectedPhase ? `group-${selectedPhase}` : `group-${selectedPhase}-empty`,
    () => (selectedPhase ? fetchPhaseData() : Promise.resolve(null)),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const loading = selectedPhase ? !groupData && !groupError : false;

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
