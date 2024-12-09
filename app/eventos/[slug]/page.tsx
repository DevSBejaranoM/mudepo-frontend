import RedirectComponent from "@/app/components/redirect";
import { useEffect } from "react";

interface Event {
  slug: string;
}

const fetchEvent = async (slug: string): Promise<Event | null> => {
  return { slug };
};

const EventsPage = async ({ params }: { params: { slug: any } }) => {
  const slug = await fetchEvent(params.slug);

  if (!slug) {
    return <div className="text-center mt-10">Evento no encontrado</div>;
  }

  return <RedirectComponent slug={slug.slug} />;
};

export default EventsPage;
