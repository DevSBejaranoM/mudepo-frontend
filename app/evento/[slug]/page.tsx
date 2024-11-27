import EventContent from "@/app/components/EventContent";

interface Event {
  slug: string;
}

const fetchEvent = async (slug: string): Promise<Event | null> => {
  return { slug };
};

const EventPage = async ({ params }: { params: { slug: any } }) => {
  const slug = await fetchEvent(params.slug);

  if (!slug) {
    return <div className="text-center mt-10">Evento no encontrado</div>;
  }

  return (
    <div>
      <EventContent slug={slug.slug} />
    </div>
  );
};

export default EventPage;
