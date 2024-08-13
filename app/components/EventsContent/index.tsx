"use client";
import { useEffect, useState } from "react";
import ListEvents from "../ListEvents";
import { axiosAdapter } from "@/app/config/axios.adapter";
import MainSection from "../MainSection";

const EventsContent = (slug: any) => {
  const [events, setEvents] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const data = await axiosAdapter.fetchData(`/events/${slug.slug}`);
      setEvents(data);

      setLoading(false);
    } catch (error) {
      console.error("Error retrieving events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (events === null) {
      fetchEvents();
    }
  }, []);

  return (
    <>
    {
      loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )
    }
    {
      !loading && !events && (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl text-gray-900">No hay eventos disponibles</h1>
        </div>
      )
    }
    {
      !loading && events && (
        <>
      <MainSection
        title={events?.name ? events.name : "Eventos"}
        image={
          events?.tabOne?.portada?.url
            ? `${process.env.NEXT_PUBLIC_MAIN_URL}${events?.tabOne?.portada?.url}`
            : "/images/header-background.jpg"
        }
      />
      <section className="mx-auto my-20 p-4 lg:h-auto flex items-center justify-center">
        {
          !loading && events?.tabTwo?.leagues && (
            <ListEvents events={events?.tabTwo?.leagues} slug={slug} eventName={events?.name} />
          )
        }
      </section>
      </>
      )
    }
    </>
  );
};

export default EventsContent;
