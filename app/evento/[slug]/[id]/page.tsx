import EventContent from "@/app/components/EventContent";

interface Event {
  id: string;
}

const fetchEvent = async (slug: string, id: string): Promise<Event | null> => {
  return { id: id };
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

  return (
    <div>
      <EventContent eventId={event.id}/>
    </div>
  );
};
export default EventPage;
