import EventContent from "@/app/components/EventContent";

interface Event {
  id: string;
  slug: string;
}

const fetchEvent = async (slug: string, id: string): Promise<Event | null> => {
  return { id: id, slug };
};

const EventPage = async ({
  params,
}: {
  params: { slug: string; id: string };
}) => {
  const event = await fetchEvent(params.slug, params.id);

  if (!event) {
    return <div className="text-center mt-10">Liga no encontrado</div>;
  }

  function quitarTildes(str: any) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  }

  let str = decodeURIComponent(event.slug);;
  const eventSlug = quitarTildes(str)

  return (
    <div>
      <EventContent eventId={event.id} slug={eventSlug}/>
    </div>
  );
};
export default EventPage;
