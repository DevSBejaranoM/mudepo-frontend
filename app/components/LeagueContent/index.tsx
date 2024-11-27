"use client";
import { useCategoryStore } from "@/app/store/useCategoryStore";
import Teams from "./Teams";
import Classification from "./Classification";
import Statistics from "./Statistics";
import Calendar from "./Calendar";
import BannerPartner from "../BannerPartner";
import MainSection from "../MainSection";
import NavCategories from "../NavCategories";
import { useEffect, useState } from "react";
import { axiosAdapter } from "@/app/config/axios.adapter";
import Loader from "../Loader";
import CalendarTwo from "./CalendarTwo";
import Resolutions from "./Resolutions";
import Sanciones from "./Sanciones";

interface LeagueContentProps {
  league: string;
  slug: string;
}

const LeagueContent = ({ league, slug }: LeagueContentProps) => {
  const category = useCategoryStore((state) => state.category);
  const [banner, setBanner] = useState<any>(null);
  const [leagueData, setLeagueData] = useState<any>(null);
  const [teamLogos, setTeamLogos] = useState<any>([]);
  const [ranking, setRanking] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  {
    /**
     * Obtener información de la liga por nombre de liga sin acentos, minúsculas y sustituyendo espacios por guiones
     * Parámetros necesarios:
     * - id
     * - name
     * - portada
     * - teams:
     *  - id
     *  - logo
     *  - name
     * - partners:
     *  - url
     *  - logo
     *  - name
     *  - description
     */
  }
  const fetchLeague = async () => {
    try {
      const data = await axiosAdapter.fetchData(`/get-league?name=${league}`);
      if (data) {
        setLeagueData(data);
        if (data.Partners) {
          setBanner(data.Partners);
        }
        if (ranking === null) {
          {
            /**
             * Obtener el ranking de la liga por nombre de liga sin acentos, minúsculas y sustituyendo espacios por guiones
             * Parámetros necesarios por equipo:
             * - id
             * - position
             * - name
             * - logo
             * - points
             * - played
             * - won
             * - drawn
             * - lost
             * - goalsFor
             * - goalsAgainst
             * - phaseName
             * - groupName
             */
          }
        
          const ranking = await axiosAdapter.fetchData(
            `/get-ranking?leagueId=${data.id}`
          );
          setRanking(ranking);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error("Error retrieving events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (leagueData === null && !loading) {
      setLoading(true);
      fetchLeague();
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <MainSection
            image={
              leagueData?.poster
                ? `${process.env.NEXT_PUBLIC_MAIN_URL}${leagueData?.poster}`
                : "/images/header-background.jpg"
            }
            title={leagueData?.name ? leagueData.name : "Evento"}
            // bgSize="auto"
          />
          <NavCategories eventName={slug} />
          <section className="mx-auto my-20 p-4 lg:h-auto items-center justify-center">
            <div className="flex-col">
              <div>
                <h1 className="text-5xl font-bold text-center">{category}</h1>
                <h2 className="text-2xl md:text-3xl text-center mt-4 text-gray-400 font-semibold">
                  {leagueData?.name ? leagueData.name : "Liga"}
                </h2>
              </div>
              {category === "EQUIPOS" && <Teams data={leagueData?.teams} />}
              {category === "CLASIFICACIÓN" && (
                <Classification
                  ranking={ranking}
                />
              )}
              {/* {category === "CALENDARIO" && (
                <CalendarTwo data={event?.fases} logos={teamLogos} eventId={leagueId}/>
              )} */}
              {/* {category === "ESTADÍSTICAS" && <Statistics id={leagueId} />}
              {category === "RESOLUCIONES" && <Resolutions id={leagueId} />}
              {category === "SANCIONES" && <Sanciones id={leagueId} />}
              {banner && (
                <div className="mt-56">
                  <BannerPartner sponsors={banner} />
                </div>
              )} */}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default LeagueContent;
