"use client";
import useEventData from "@/app/hooks/useEventData";
import { useMemo } from "react";
import Loader from "../Loader";
import MainSection from "../MainSection";
import LeagueList from "../LeagueList";
import BannerPartner from "../BannerPartner";

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
          memoizedEvent?.coverPhoto
            ? memoizedEvent?.coverPhoto?.key
            : "/images/header-background.jpg"
        }
        bgSize="content"
      />
      <section className="mx-auto my-20 p-4 lg:h-auto items-center justify-center">
        <div className="flex-col">
          {memoizedEvent.Leagues && (
            <LeagueList
              leagues={memoizedEvent.Leagues}
              eventName={memoizedEvent.name}
              slug={slug}
            />
          )}
          {memoizedEvent?.PartnerEvent && (
            <div className="mt-56">
              <BannerPartner partners={memoizedEvent.PartnerEvent} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default EventsContent;
