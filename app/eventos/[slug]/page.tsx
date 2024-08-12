import EventsContent from "@/app/components/EventsContent";

interface Event {
  slug: string;
}

const fetchEvent = async (slug: string): Promise<Event | null> => {
  return { slug };
};

const EventsPage = async ({ params }: { params: { slug: string } }) => {
  const slug = await fetchEvent(params.slug);

  if (!slug) {
    return <div className="text-center mt-10">Eventos no encontrados</div>;
  }

  return (
    <div>
      <EventsContent slug={slug} />
    </div>
  );
};

export default EventsPage;
