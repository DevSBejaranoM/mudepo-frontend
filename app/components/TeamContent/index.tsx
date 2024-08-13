"use client";
import { useTeamStore } from "@/app/store/useTeamStore";
import FormationContent from "./FormationContent";
import InformationContent from "./InformationContent";
import BannerPartner from "../BannerPartner";
import { useEffect, useState } from "react";
import { axiosAdapter } from "@/app/config/axios.adapter";

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
          {loading && (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          )}
          {!loading && <InformationContent dataTeam={dataTeam} />}
        </>
      )}
      {team === "Formación" && <FormationContent dataPlayers={dataTeam?.tabTwo?.players}/>}
      <BannerPartner
        imageUrl="/images/header-background.jpg"
        altText="Banner Sponsor"
      />
    </div>
  );
};

export default TeamContent;
