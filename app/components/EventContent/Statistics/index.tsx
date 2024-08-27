import CustomTable from "../CustomTable";

const Statistics = () => {
  const dataTeams = [
    {
      position: 1,
      logo: "/images/team/tamaraceite.png",
      name: "Tamaraceite Veteranos",
      points: 79,
      played: 28,
      won: 26,
      draw: 1,
      lost: 1,
      goalsFor: 105,
      goalsAgainst: 34,
      modifier: 0,
      ta: 24,
      tr: 1,
      np: 0,
      ps: 4,
      hj7: 0,
      hj8: 0,
      hj9: 0,
      hj10: 1,
      me: 2,
      eb: 0,
      mf: 2,
      nr: 0,
      om: 0,
      total: 138,
    },
    {
      position: 2,
      logo: "/images/team/veterano-tejeda.jpg",
      name: "Veteranos Tejeda C.F.",
      points: 70,
      played: 28,
      won: 23,
      draw: 1,
      lost: 4,
      goalsFor: 102,
      goalsAgainst: 31,
      modifier: 0,
      ta: 14,
      tr: 2,
      np: 0,
      ps: 2,
      hj7: 0,
      hj8: 0,
      hj9: 0,
      hj10: 0,
      me: 0,
      eb: 0,
      mf: 0,
      nr: 0,
      om: 0,
      total: 82,
    },
    {
      position: 3,
      logo: "/images/team/veterano-led-bee.jpg",
      name: "Veterano Led Bee Happy",
      points: 62,
      played: 28,
      won: 20,
      draw: 2,
      lost: 6,
      goalsFor: 110,
      goalsAgainst: 50,
      modifier: 0,
      ta: 16,
      tr: 2,
      np: 0,
      ps: 2,
      hj7: 0,
      hj8: 0,
      hj9: 0,
      hj10: 0,
      me: 0,
      eb: 0,
      mf: 0,
      nr: 0,
      om: 0,
      total: 138,
    },
  ];

  const dataPlayers = [
    {
      code: 29,
      position: 1,
      name: "Juan Carlos",
      team: "Tamaraceite Veteranos",
      goals: 23,
      assists: 10,
      ta: 3,
      tr: 0,
      total: 36,
    },
    {
      code: 372,
      position: 2,
      name: "Pedro",
      team: "Veteranos Tejeda C.F.",
      goals: 20,
      assists: 12,
      ta: 2,
      tr: 0,
      total: 34,
    },
    {
      code: 1198,
      position: 3,
      name: "Manolo",
      team: "Veterano Led Bee Happy",
      goals: 18,
      assists: 8,
      ta: 1,
      tr: 0,
      total: 27,
    },
  ];

  return (
    <div>
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        EQUIPO MÁS DEPORTIVO DE LA CATEGORÍA
      </h3>
      <CustomTable data={dataTeams} type="statistics-1" />
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        EQUIPOS MÁS GOLEADORES
      </h3>
      <CustomTable data={dataTeams} type="statistics-2" />
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        EQUIPOS MENOS GOLEADOS
      </h3>
      <CustomTable data={dataTeams} type="statistics-3" />
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES MÁS GOLEADORES
      </h3>
      <CustomTable data={dataPlayers} type="statistics-4" />
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES CON MÁS TARJETAS ROJAS
      </h3>
      <CustomTable data={dataPlayers} type="statistics-5" />
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES CON MÁS TARJETAS AMARILLAS
      </h3>
      <CustomTable data={dataPlayers} type="statistics-6" />
    </div>
  );
};
export default Statistics;
