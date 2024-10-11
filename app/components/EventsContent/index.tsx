"use client";
import { useEffect, useState } from "react";
import ListEvents from "../ListEvents";
import { axiosAdapter } from "@/app/config/axios.adapter";
import MainSection from "../MainSection";
import Loader from "../Loader";

const EventsContent = (slug: any) => {
  const [events, setEvents] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    try {
      const data = await axiosAdapter.fetchData(
        `/get-events?slug=${slug.slug}`
      );
      if (data?.data[0].length === 0) {
        setEvents(null);
        setLoading(false);
        return;
      }
      {
        if (data.data[0].tabOne.portada.url) {
          data.data[0].tabOne.portada.url =
            data.data[0].tabOne.portada.url.replaceAll(" ", "%20");
        }
        setEvents(data.data[0]);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error retrieving events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (events === null && loading === false) {
      setLoading(true);
      fetchEvents();
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && !events && (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl text-gray-900">No hay eventos disponibles</h1>
        </div>
      )}
      {!loading && events && (
        <>
          <MainSection
            title={events?.name ? events.name : "Eventos"}
            image={
              events?.tabOne?.portada?.url
                ? `${process.env.NEXT_PUBLIC_MAIN_URL}${events?.tabOne?.portada?.url}`
                : "/images/header-background.jpg"
            }
            bgSize="content"
          />
          <section className="mx-auto my-20 p-4 lg:h-auto flex items-center justify-center">
            {!loading && events?.tabTwo?.leagues && (
              <ListEvents
                events={events?.tabTwo?.leagues}
                slug={slug}
                eventName={events?.name}
              />
            )}
          </section>
        </>
      )}
    </>
  );
};

export default EventsContent;
