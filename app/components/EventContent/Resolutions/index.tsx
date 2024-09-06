"use client";

import { axiosAdapter } from "@/app/config/axios.adapter";
import { useEffect, useState } from "react";
import CustomTable from "../CustomTable";

interface ResolutionProps {
  id: string;
}

const Resolutions = ({ id }: ResolutionProps) => {
  const [resolutions, setResolutions] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedResolution, setSelectedResolution] = useState<any>(null);

  useEffect(() => {
    const getResolutions = async () => {
      const response = await axiosAdapter.fetchData(
        `/get-aresoluciones?id=${id}`
      );
      if (response?.data === null) {
        setLoading(false);
        setResolutions([]);
        return;
      }
      setResolutions(response?.data);
      setLoading(false);
    };
    getResolutions();
  }, []);

  return (
    <div>
      {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {resolutions && resolutions.length === 0 && (
        <div className="flex justify-center">
          <p>No hay resoluciones disponibles</p>
        </div>
      )}
      {!loading && resolutions && resolutions.length > 0 && (
        <CustomTable data={resolutions} type="resolutions" setSelectedInfo={setSelectedResolution}/>
      )}
      {selectedResolution && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedResolution(null);
            }
          }}
        >
          <div className="bg-white p-6 rounded-md min-w-[20%] max-w-[80%]">
            <h3 className="text-xl font-bold mb-4 text-center">DETALLE: {selectedResolution.name}</h3>
            <div className="border-t border-gray-300 my-1" />
            <div className="my-5 mx-10">
              <p>{selectedResolution.description}</p>
            </div>
            <div className="border-t border-gray-300 my-1" />
            <button
              onClick={() => setSelectedResolution(null)}
              className="mt-4 bg-primary text-white py-2 px-4 rounded float-end"
            >
              CERRAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resolutions;
