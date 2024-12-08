import { useState } from "react";
import CustomTable from "../CustomTable";
import useSanctionsData from "@/app/hooks/useSanctionsData";

interface SancionesProps {
  leagueId: string;
}

const Sanciones = ({ leagueId }: SancionesProps) => {
  const {
    sanctionsData,
    loading: sanctionsLoading,
    error,
  } = useSanctionsData(leagueId);
  //* Obtener jugadores suspendidos
  if(error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-gray-900">{error}</h1>
      </div>
    );
  }
  
  return (
    <div>
      {/* <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES SUSPENDIDOS
      </h3> */}
      {/* {sanctionsLoading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )} */}
      {/* {!sanctionsLoading && <CustomTable data={sanctionsData?.yellowCards || []} type="sancionados" />} */}
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        TARJETAS ROJAS
      </h3>
      {sanctionsLoading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {!sanctionsLoading && (
        <CustomTable
          data={sanctionsData?.redCards || []}
          type="tarjetas-rojas"
        />
      )}
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        TARJETAS AMARILLAS
      </h3>
      {sanctionsLoading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {!sanctionsLoading && (
        <CustomTable
          data={sanctionsData?.yellowCards || []}
          type="tarjetas-amarillas"
        />
      )}
    </div>
  );
};

export default Sanciones;
