"use client";
import { useTeamStore } from "@/app/store/useTeamStore";
import FormationContent from "./FormationContent";
import InformationContent from "./InformationContent";
import { useMemo } from "react";
import Loader from "../Loader";
import useTeamData from "@/app/hooks/useTeamData";

interface TeamContentProps {
  teamId: string;
}

const TeamContent = ({ teamId }: TeamContentProps) => {
  const { team } = useTeamStore();
  const { dataTeam, loading, error } = useTeamData(teamId);

  const memoizedDataTeam = useMemo(() => dataTeam, [dataTeam]);

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-gray-900">{error}</h1>
      </div>
    );
  if (!memoizedDataTeam)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-gray-900">
          No se encontraron datos del equipo
        </h1>
      </div>
    );

  return (
    <div>
      {team === "Inicio" && <InformationContent dataTeam={memoizedDataTeam} />}
      {team === "Formación" && (
        <FormationContent dataPlayers={memoizedDataTeam?.Players || []} />
      )}
    </div>
  );
};

export default TeamContent;
