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

interface EventContentProps {
  eventId: string;
  slug: string;
}

const EventContent = ({ eventId, slug }: EventContentProps) => {
  const category = useCategoryStore((state) => state.category);
  const [banner, setBanner] = useState<any>(null);
  const [event, setEvent] = useState<any>(null);
  const [teamLogos, setTeamLogos] = useState<any>([]);
  const [ranking, setRanking] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [loadingRanking, setLoadingRanking] = useState(false);

  const fetchEvents = async () => {
    try {
      const data = await axiosAdapter.fetchData(
        `/get-event-fill?league_id=${eventId}`
      );
      setEvent(data.data);
      if (data.data?.sponsors) {
        setBanner(data.data.sponsors);
      }
      if (data.data?.teams) {
        const logos = data.data.teams.map((team: any) => {
          return {
            id: team.id,
            logo: team.logo,
          };
        });
        setTeamLogos(logos);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error retrieving events:", error);
      setLoading(false);
    }
  };

  const fetchRanking = async () => {
    try {
      const data = await axiosAdapter.fetchData(
        `/get-ranking?league_id=${eventId}`
      );
      setRanking(data.data);
      setLoadingRanking(false);
    } catch (error) {
      console.error("Error retrieving events:", error);
      setLoadingRanking(false);
    }
  };

  useEffect(() => {
    if (event === null && !loading) {
      setLoading(true);
      fetchEvents();
    }
    if (ranking === null && !loadingRanking) {
      setLoadingRanking(true);
      fetchRanking();
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <MainSection
            image={
              event?.poster_url
                ? `${process.env.NEXT_PUBLIC_MAIN_URL}${event?.poster_url}`
                : "/images/header-background.jpg"
            }
            title={event?.name ? event.name : "Evento"}
            // bgSize="auto"
          />
          <NavCategories eventName={slug}  />
          <section className="mx-auto my-20 p-4 lg:h-auto items-center justify-center">
            <div className="flex-col">
              <div>
                <h1 className="text-5xl font-bold text-center">{category}</h1>
                <h2 className="text-2xl md:text-3xl text-center mt-4 text-gray-400 font-semibold">
                  {event?.name ? event.name : "Evento"}
                </h2>
              </div>
              {category === "EQUIPOS" && <Teams data={event?.teams} />}
              {category === "CLASIFICACIÓN" && (
                <Classification
                  ranking={ranking}
                  loading={loadingRanking}
                  logos={teamLogos}
                />
              )}
              {/* {category === "CALENDARIO" && <Calendar data={event?.jornadas}/>} */}
              {category === "CALENDARIO" && (
                <CalendarTwo data={event?.fases} logos={teamLogos} eventId={eventId}/>
              )}
              {category === "ESTADÍSTICAS" && <Statistics id={eventId} />}
              {category === "RESOLUCIONES" && <Resolutions id={eventId} />}
              {banner && (
                <div className="mt-56">
                  <BannerPartner sponsors={banner} />
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default EventContent;
