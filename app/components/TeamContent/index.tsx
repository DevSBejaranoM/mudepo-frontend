"use client"
import { useTeamStore } from "@/app/store/useTeamStore";
import FormationContent from "./FormationContent";
import InformationContent from "./InformationContent";
import BannerPartner from "../BannerPartner";

const TeamContent = () => {
  const { team } = useTeamStore();
  
  return (
    <div>
      {team === "Inicio" && <InformationContent />}
      {team === "Formación" && <FormationContent />}
      <BannerPartner imageUrl="/images/header-background.jpg" altText="Banner Sponsor"/>
    </div>
  );
};

export default TeamContent;
