"use client";
import { useCategoryStore } from "@/app/store/useCategoryStore";
import Teams from "./Teams";
import Classification from "./Classification";
import Statistics from "./Statistics";
import Calendar from "./Calendar";
import BannerPartner from "../BannerPartner";
import MainSection from "../MainSection";
import NavCategories from "../NavCategories";
import { useMemo } from "react";
import Loader from "../Loader";
import Resolutions from "./Resolutions";
import Sanciones from "./Sanciones";
import useLeagueData from "@/app/hooks/useLeagueData";
import { useFetchFile } from "@/app/hooks/useFetchFile";

interface LeagueContentProps {
  league: string;
  slug: string;
}

const LeagueContent = ({ league, slug }: LeagueContentProps) => {
  const category = useCategoryStore((state) => state.category);
  // ranking
  const { leagueData, loading, error } = useLeagueData(league);
  const memoizedLeagueData = useMemo(() => leagueData, [leagueData]);

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-gray-900">{error}</h1>
      </div>
    );
  if (!memoizedLeagueData)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-gray-900">
          No se encontraron datos de la liga
        </h1>
      </div>
    );

  return (
    <>
      <MainSection
        image={memoizedLeagueData.poster.key ? memoizedLeagueData.poster.key : "/images/header-background.jpg"}
        title={memoizedLeagueData.name || "Evento"}
      />
      <NavCategories eventName={slug} />
      <section className="mx-auto my-20 p-4 lg:h-auto items-center justify-center">
        <div className="flex-col">
          <div>
            <h1 className="text-5xl font-bold text-center">{category}</h1>
            <h2 className="text-2xl md:text-3xl text-center mt-4 text-gray-400 font-semibold">
              {memoizedLeagueData.name || "Liga"}
            </h2>
          </div>
          {category === "EQUIPOS" && (
            <Teams
              data={memoizedLeagueData.Teams}
              slug={slug}
              league={league}
            />
          )}
          {/* {category === "CLASIFICACIÓN" && <Classification ranking={ranking} />} */}
          {/* {category === "CALENDARIO" && (
            <Calendar leagueId={memoizedLeagueData.id} />
          )} */}
          {/* {category === "ESTADÍSTICAS" && (
            <Statistics leagueId={memoizedLeagueData.id} />
          )} */}
          {/* {category === "RESOLUCIONES" && (
            <Resolutions leagueId={memoizedLeagueData.id} />
          )} */}
          {/* {category === "SANCIONES" && (
            <Sanciones leagueId={memoizedLeagueData.id} />
          )} */}
          {memoizedLeagueData.Partners && (
            <div className="mt-56">
              <BannerPartner partners={memoizedLeagueData.Partners} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default LeagueContent;
