"use client";
import { useEffect, useState } from "react";
import LeagueList from "../LeagueList";
import { axiosAdapter } from "@/app/config/axios.adapter";
import MainSection from "../MainSection";
import Loader from "../Loader";

const EventsContent = (slug: any) => {
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  {
    /**
     * Obtener información del evento y las ligas por slug del evento
     * Parámetros necesarios:
     * - nombre
     * - portada
     * - ligas:
     *  - id
     *  - portada
     *  - nombre
     *  - formato (Fútbol 5, Fútbol 7, Fútbol 11)
     */
  }
  const fetchEvents = async () => {
    try {
      const data = await axiosAdapter.fetchData(
        `/get-event?slug=${slug.slug}`
      );
      if (data?.length === 0) {
        setEvent(null);
        setLoading(false);
        return;
      }
      if (data.portada) {
        data.portada = data.portada.replaceAll(" ", "%20");
      }
      setEvent(data);
      setLoading(false);
    } catch (error) {
      console.error("Error retrieving events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (event === null && loading === false) {
      setLoading(true);
      fetchEvents();
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && !event && (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl text-gray-900">No hay eventos disponibles</h1>
        </div>
      )}
      {!loading && event && (
        <>
          <MainSection
            title={event?.name ? event.name : "Eventos"}
            image={
              event?.portada
                ? `${process.env.NEXT_PUBLIC_MAIN_URL}${event?.portada}`
                : "/images/header-background.jpg"
            }
            bgSize="content"
          />
          <section className="mx-auto my-20 p-4 lg:h-auto flex items-center justify-center">
            {!loading && event?.leagues && (
              <LeagueList
                leagues={event?.leagues}
                eventName={event?.name}
              />
            )}
          </section>
        </>
      )}
    </>
  );
};

export default EventsContent;
