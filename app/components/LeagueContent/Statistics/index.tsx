"use client";
import { useEffect, useState } from "react";
import CustomTable from "../CustomTable";
import { axiosAdapter } from "@/app/config/axios.adapter";

interface StatisticsProps {
  leagueId: string;
}

const Statistics = ({ leagueId }: StatisticsProps) => {
  const [dataStatistics, setDataStatistics] = useState<any>(null);
  const [dataDeportividad, setDataDeportividad] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [loadingDeportividad, setLoadingDeportividad] = useState(true);

  useEffect(() => {
    {
      /**
       * Acualmente se obtienen las estadísticas en objetos separados, se puede mejorar la estructura de los datos
       * para que se obtengan en un solo objeto con las siguientes propiedades:
       * Estadísticas de los equipos más goleadores y menos goleados
       * - Escudo
       * - Nombre
       * - Goles a favor
       * - Goles en contra
       * 
       * Estadísticas de los jugadores más goleadores
       * - Código
       * - Nombre
       * - Equipo
       * - Goles
       * 
       * Estadísticas de los jugadores con más tarjetas rojas y amarillas
       * - Código
       * - Nombre
       * - Equipo
       * - Tarjetas rojas
       * - Tarjetas amarillas
       */
    }
    const getStatistics = async () => {
      const response = await axiosAdapter.fetchData(
        `/get-estadisticas-by-league?id=${leagueId}`
      );
      setDataStatistics(response?.data);
      setLoading(false);
    };
    {
      /**
       * Puntos de deportividad de los equipos
       * - Escudo
       * - Nombre
       * - Sanciones
       * - Puntos de deportividad
       */
    }
    const getDeportividad = async () => {
      const response = await axiosAdapter.fetchData(
        `/get-deportividad?id=${leagueId}`
      );
      // let sanciones =
      //   response?.data.length > 0
      //     ? response?.data.map((sancion: any) => {
      //         return {
      //           id: sancion?.equipoId || "",
      //           escudo: sancion?.posterEquipo || "",
      //           equipo: sancion?.equipoNombre || "",
      //           sanciones: sancion?.sancionesTotales || 0,
      //           puntos: sancion?.puntosDeportividadTotales || 0,
      //         };
      //       })
      //     : [];
      setDataDeportividad(response?.data);
      setLoadingDeportividad(false);
    };
    getStatistics();
    getDeportividad();
  }, []);

  return (
    <div>
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        EQUIPOS MÁS GOLEADORES
      </h3>
      {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {!loading && (
        <CustomTable
          data={dataStatistics?.TeamMasGoleadores}
          type="statistics-2"
        />
      )}
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        EQUIPOS MENOS GOLEADOS
      </h3>
      {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {!loading && (
        <CustomTable
          data={dataStatistics?.TeamsMenosGoleadores}
          type="statistics-3"
        />
      )}
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES MÁS GOLEADORES
      </h3>
      {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {!loading && (
        <CustomTable
          data={dataStatistics?.JugadorMasGoleadores}
          type="statistics-4"
        />
      )}
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES CON MÁS TARJETAS ROJAS
      </h3>
      {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {!loading && (
        <CustomTable
          data={dataStatistics?.JugadoresConMasTarjetasRojas}
          type="statistics-5"
        />
      )}
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES CON MÁS TARJETAS AMARILLAS
      </h3>
      {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {!loading && (
        <CustomTable
          data={dataStatistics?.JugadoresConTarjetasAmarillas}
          type="statistics-6"
        />
      )}
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        PUNTOS DEPORTIVIDAD
      </h3>
      {loadingDeportividad && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {!loadingDeportividad && (
        <CustomTable data={dataDeportividad} type="deportividad" />
      )}
    </div>
  );
};
export default Statistics;
