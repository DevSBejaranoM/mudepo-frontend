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

interface EventContentProps {
  eventId: string;
}

const EventContent = ({ eventId }: EventContentProps) => {
  const category = useCategoryStore((state) => state.category);
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const data = await axiosAdapter.fetchData(`/leagues/${eventId}`);
      console.log("Events", data);
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
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      {!loading && (
        <>
          <MainSection
            image={event?.tabOne?.poster?.url
              ? `${process.env.NEXT_PUBLIC_MAIN_URL}${event?.tabOne?.poster?.url}`
              : "/images/header-background.jpg"}
            title={event?.name ? event.name : "Evento"}
            bgSize="auto"
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
              {category === "EQUIPOS" && <Teams />}
              {category === "CLASIFICACIÓN" && <Classification />}
              {category === "CALENDARIO" && <Calendar />}
              {category === "ESTADÍSTICAS" && <Statistics />}
              <BannerPartner
                imageUrl="/images/header-background.jpg"
                altText="Banner Sponsor"
              />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default EventContent;
