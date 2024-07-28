"use client"
import { useTeamStore } from "@/app/store/useTeamStore";
import FormationContent from "./FormationContent";
import InformationContent from "./InformationContent";

const TeamContent = () => {
  const { team } = useTeamStore();
  
  return (
    <div>
      {team === "Inicio" && <InformationContent />}
      {team === "Formación" && <FormationContent />}
    </div>
  );
};

export default TeamContent;
