"use client";
import { useEffect, useState } from "react";
import CustomTable from "../CustomTable";
import { axiosAdapter } from "@/app/config/axios.adapter";

interface StatisticsProps {
  id: string;
}

const Statistics = ({ id }: StatisticsProps) => {
  const [dataStatistics, setDataStatistics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStatistics = async () => {
      const response = await axiosAdapter.fetchData(
        `/get-estadisticas?ligaid=${id}`
      );
      setDataStatistics(response?.data);
      setLoading(false);
    };
    getStatistics();
  }, []);

  return (
    <div>
      {/* <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        EQUIPO MÁS DEPORTIVO DE LA CATEGORÍA
      </h3>
      <CustomTable data={dataTeams} type="statistics-1" /> */}
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
        EQUIPOS MENOS GOLEADORES
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
      {
        !loading && (
          <CustomTable
            data={dataStatistics?.JugadorMasGoleadores}
            type="statistics-4"
          />
        )
      }
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES CON MÁS TARJETAS ROJAS
      </h3>
      {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {
        !loading && (
          <CustomTable
            data={dataStatistics?.JugadoresConMasTarjetasRojas}
            type="statistics-5"
          />
        )
      }
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES CON MÁS TARJETAS AMARILLAS
      </h3>
      {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {
        !loading && (
          <CustomTable
            data={dataStatistics?.JugadoresConTarjetasAmarillas}
            type="statistics-6"
          />
        )
      }
    </div>
  );
};
export default Statistics;
