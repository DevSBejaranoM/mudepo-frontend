import { useEffect, useState } from "react";
import { axiosAdapter } from "../config/axios.adapter";

const useEventData = (slug: string) => {
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await axiosAdapter.fetchData(`/event/${slug}`);
        if (data?.length === 0) {
          setEvent(null);
        } else {
          if (data.coverPhoto) {
            data.coverPhoto = data.coverPhoto.replaceAll(" ", "%20");
          }
          setEvent(data);
        }
      } catch (error) {
        console.error("Error retrieving events:", error);
        setError("Error al cargar los eventos");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [slug]);

  return { event, loading, error };
};

export default useEventData;