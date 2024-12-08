"use client";

import CustomTable from "../CustomTable";
import { useStatisticsData } from "@/app/hooks/useStaticsticsData";

interface StatisticsProps {
  leagueId: string;
}

const Statistics = ({ leagueId }: StatisticsProps) => {
  const { statistics, loading, error } = useStatisticsData(leagueId);

  if (loading) {
    return (
      <div className="flex justify-center">
        <p className="mt-20">Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center text-red-600">
        <p className="mt-20">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        EQUIPO MÁS GOLEADOR
      </h3>
      <CustomTable data={statistics?.mostScoringTeam || []} type="statistics-2" />

      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        EQUIPO MENOS GOLEADO
      </h3>
      <CustomTable data={statistics?.leastConcedingTeam || []} type="statistics-3" />

      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES MÁS GOLEADORES
      </h3>
      <CustomTable data={statistics?.topScorers || []} type="statistics-4" />

      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES CON MÁS TARJETAS ROJAS
      </h3>
      <CustomTable data={statistics?.redCards || []} type="statistics-5" />

      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES CON MÁS TARJETAS AMARILLAS
      </h3>
      <CustomTable data={statistics?.yellowCards || []} type="statistics-6" />

      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        PUNTOS DEPORTIVIDAD
      </h3>
      <CustomTable data={statistics?.fairPlayTeams || []} type="deportividad" />
    </div>
  );
};

export default Statistics;
