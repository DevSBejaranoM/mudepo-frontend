"use client";
import { useTeamStore } from "@/app/store/useTeamStore";
import FormationContent from "./FormationContent";
import InformationContent from "./InformationContent";
import BannerPartner from "../BannerPartner";
import { useEffect, useState } from "react";
import { axiosAdapter } from "@/app/config/axios.adapter";
import Loader from "../Loader";

interface TeamContentProps {
  teamId: string;
}

const TeamContent = ({ teamId }: TeamContentProps) => {
  const { team } = useTeamStore();
  const [dataTeam, setDataTeam] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const data = await axiosAdapter.fetchData(`/teams/${teamId}`);
      setDataTeam(data);
      setLoading(false);
    } catch (error) {
      console.error("Error retrieving events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dataTeam === null) {
      fetchEvents();
    }
  }, []);

  return (
    <div>
      {team === "Inicio" && (
        <>
          {loading && <Loader />}
          {!loading && <InformationContent dataTeam={dataTeam} />}
        </>
      )}
      {team === "Formación" && (
        <>
          {loading && <Loader />}
          {!loading && (
            <FormationContent dataPlayers={dataTeam?.tabTwo?.players} />
          )}
        </>
      )}
    </div>
  );
};

export default TeamContent;
