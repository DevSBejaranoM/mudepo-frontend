import { useState, useEffect } from "react";

export const useFetchFile = (url: string) => {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_MAIN_URL}/api/files/${url}`
        );
        const text = await response.text();
        setData(text);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("An error occurred while fetching the file")
        );
      }
    };
    if (url) fetchData();
  }, [url]);

  return { data, error };
};
