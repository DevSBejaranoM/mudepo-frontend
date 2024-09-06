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
}

const EventContent = ({ eventId }: EventContentProps) => {
  const category = useCategoryStore((state) => state.category);
  const [event, setEvent] = useState<any>(null);
  const [teamLogos, setTeamLogos] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState<any>(null);

  const fetchEvents = async () => {
    try {
      const data = await axiosAdapter.fetchData(`/leagues/${eventId}`);
      setBanner(data?.tabSeven?.patrocinadores);
      data?.tabTree?.teams?.forEach((item: any) => {
        const logo = {
          // id: item?.value?.id, // no tienen el mismo id
          name: item?.value?.name,
          logo: item?.value?.tabOne?.poster?.url
        }
        setTeamLogos((prev: any) => [...prev, logo]);
      })
      setEvent(data);
      setLoading(false);
    } catch (error) {
      console.error("Error retrieving events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (event === null) {
      fetchEvents();
    }
  }, []);

  return (
    <>
      {loading && (
        <Loader />
      )}
      {!loading && (
        <>
          <MainSection
            image={event?.tabOne?.poster?.url
              ? `${process.env.NEXT_PUBLIC_MAIN_URL}${event?.tabOne?.poster?.url}`
              : "/images/header-background.jpg"}
            title={event?.name ? event.name : "Evento"}
            // bgSize="auto"
          />
          <NavCategories />
          <section className="mx-auto my-20 p-4 lg:h-auto items-center justify-center">
            <div className="flex-col">
              <div>
                <h1 className="text-5xl font-bold text-center">{category}</h1>
                <h2 className="text-2xl md:text-3xl text-center mt-4 text-gray-400 font-semibold">
                  {event?.name ? event.name : "Evento"}
                </h2>
              </div>
              {category === "EQUIPOS" && <Teams data={event?.tabTree?.teams}/>}
              {category === "CLASIFICACIÓN" && <Classification data={event?.tabTree?.teams} logos={teamLogos}/>}
              {/* {category === "CALENDARIO" && <Calendar data={event?.tabFive?.jornadas}/>} */}
              {category === "CALENDARIO" && <CalendarTwo data={event?.tabFive?.fases} logos={teamLogos}/>}
              {category === "ESTADÍSTICAS" && <Statistics id={eventId} />}
              {category === "RESOLUCIONES" && <Resolutions id={eventId} />}
              {
                banner && (
                  <div className="mt-56">
                  <BannerPartner
                    sponsors={banner}
                  />
                  </div>
                )
              }
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default EventContent;
