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

  const deportividad = [
    {
      id: 1,
      escudo: "https://www.ligamx.net/images/escudos/1/1/1.png",
      equipo: "Equipo 1",
      sanciones: 5,
      puntos: 10
    },
    {
      id: 2,
      escudo: "https://www.ligamx.net/images/escudos/1/1/1.png",
      equipo: "Equipo 2",
      sanciones: 5,
      puntos: 9
    },
    {
      id: 3,
      escudo: "https://www.ligamx.net/images/escudos/1/1/1.png",
      equipo: "Equipo 3",
      sanciones: 5,
      puntos: 8
    },
    {
      id: 4,
      escudo: "https://www.ligamx.net/images/escudos/1/1/1.png",
      equipo: "Equipo 4",
      sanciones: 5,
      puntos: 7
    },
    {
      id: 5,
      escudo: "https://www.ligamx.net/images/escudos/1/1/1.png",
      equipo: "Equipo 5",
      sanciones: 5,
      puntos: 6
    }
  ];

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
       {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
       {!loading && (
        <CustomTable
          data={deportividad}
          type="deportividad"
        />
      )}
    </div>
  );
};
export default Statistics;
