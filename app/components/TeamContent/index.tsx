"use client";
import { useTeamStore } from "@/app/store/useTeamStore";
import FormationContent from "./FormationContent";
import InformationContent from "./InformationContent";
import { useMemo } from "react";
import Loader from "../Loader";
import useTeamData from "@/app/hooks/useTeamData";
import CustomTab from "../CustomTab";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";
import BannerPartner from "../BannerPartner";

interface TeamContentProps {
  teamId: string;
}

const TeamContent = ({ teamId }: TeamContentProps) => {
  const { team } = useTeamStore();
  const { dataTeam, loading, error } = useTeamData(teamId);
  const router = useRouter();

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
    <>
      <div className="mx-32 mt-10 flex items-center justify-between">
        <CustomTab options={["Inicio", "Formación"]} />
        <Button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md"
        >
          Volver a la liga
        </Button>
      </div>
      <section className="mx-auto mb-20 p-4 lg:h-auto items-center justify-center">
        <div className="flex-col">
          {team === "Inicio" && (
            <InformationContent dataTeam={memoizedDataTeam} />
          )}
          {team === "Formación" && (
            <FormationContent dataPlayers={memoizedDataTeam?.Players || []} />
          )}
          {memoizedDataTeam.PartnerTeam && (
            <div className="mt-56">
              <BannerPartner partners={memoizedDataTeam.PartnerTeam} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TeamContent;
