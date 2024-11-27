"use client";
import { useEffect, useState } from "react";
import { axiosAdapter } from "@/app/config/axios.adapter";

const MatchResult = ({ id }: any) => {
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getResults = async () => {
      setLoading(true);
      try{
        const data = await axiosAdapter.fetchData(
          `/get-resultado?idpartido=${id}`
        );
        setResults(data?.data?.tabOne?.resultado);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getResults();
  }, []);

  return (
    <>
      {results && !loading && (
        <>
          <td className="py-2 px-4 border-b text-center bg-gray-800 text-white border-r-2">
            {results.split("-")[0]}
          </td>
          <td className="py-2 px-4 border-b text-center bg-gray-800 text-white">
            {results.split("-")[1]}
          </td>
        </>
      )}
      {
        !results && !loading && (
          <>
            <td className="py-2 px-4 border-b text-center bg-gray-800 text-white border-r-2">
              -
            </td>
            <td className="py-2 px-4 border-b text-center bg-gray-800 text-white">
              -
            </td>
          </>
        )
      }
      {
        loading && (
          <>
            <td className="py-2 px-4 border-b text-center bg-gray-800 text-white border-r-2">
              <div className="animate-pulse h-4 bg-gray-400 rounded"></div>
            </td>
            <td className="py-2 px-4 border-b text-center bg-gray-800 text-white">
              <div className="animate-pulse h-4 bg-gray-400 rounded"></div>
            </td>
          </>
        )
      }
    </>
  );
};

export default MatchResult;
