import useSWR, { SWRConfiguration } from 'swr';

const CACHE_TIME = 1000 * 60 * 2; // 2 minutes

function useCachedSWR<Data>(
  key: string,
  fetcher: () => Promise<Data>,
  config?: SWRConfiguration
) {
  return useSWR(key, async () => {
    const cachedData = localStorage.getItem(key);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_TIME) {
        return data;
      }
    }

    const freshData = await fetcher();
    localStorage.setItem(
      key,
      JSON.stringify({ data: freshData, timestamp: Date.now() })
    );
    return freshData;
  }, config);
}

export default useCachedSWR;