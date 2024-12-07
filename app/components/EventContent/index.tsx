"use client";
import useEventData from "@/app/hooks/useEventData";
import { useMemo } from "react";
import Loader from "../Loader";
import MainSection from "../MainSection";
import LeagueList from "../LeagueList";

const EventsContent = ({ slug }: { slug: string }) => {
  const { event, loading, error } = useEventData(slug);

  const memoizedEvent = useMemo(() => event, [event]);

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-gray-900">{error}</h1>
      </div>
    );
  if (!memoizedEvent)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-gray-900">No hay eventos disponibles</h1>
      </div>
    );

  return (
    <>
      <MainSection
        title={memoizedEvent.name || "Eventos"}
        image={
          memoizedEvent.coverPhoto
            ? memoizedEvent.coverPhoto.key
            : "/images/header-background.jpg"
        }
        bgSize="content"
      />
      <section className="mx-auto my-20 p-4 lg:h-auto flex items-center justify-center">
        {memoizedEvent.Leagues && (
          <LeagueList
            leagues={memoizedEvent.Leagues}
            eventName={memoizedEvent.name}
          />
        )}
      </section>
    </>
  );
};

export default EventsContent;
