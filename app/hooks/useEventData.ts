import useCachedSWR from "./useCachedSWR";
import { axiosAdapter } from "../config/axios.adapter";

const useEventData = (slug: string) => {
  const fetcher = async () => {
    const data = await axiosAdapter.fetchData(`/event/${slug}`);
    return data;
  };

  const { data: event, error } = useCachedSWR(`event-${slug}`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    event ,
    loading: !error && !event,
    error: error ? "Error al cargar los eventos" : null,
  };
};

export default useEventData;
