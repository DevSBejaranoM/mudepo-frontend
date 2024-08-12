import EventContent from "@/app/components/EventContent";

interface Event {
  id: string;
}

const fetchEvent = async (id: string): Promise<Event | null> => {
  return { id };
};

const EventPage = async ({ params }: { params: { id: string } }) => {
  const category = await fetchEvent(params.id);

  if (!category) {
    return <div className="text-center mt-10">Evento no encontrado</div>;
  }

  return (
    <div>
      <EventContent eventId={category.id} />
    </div>
  );
};
export default EventPage;
