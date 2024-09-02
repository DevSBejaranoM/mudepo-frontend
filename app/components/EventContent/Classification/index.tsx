import { useEffect, useState } from "react";
import CustomTable from "../CustomTable";

interface ClassificationProps {
  data: any;
  logos: any;
}

const Classification = ({ data, logos }: ClassificationProps) => {
  const [dataClassification, setDataClassification] = useState<any>(null);

  useEffect(() => {
    if (data) {
      const classification = data.map((team: any) => {
        return {
          name: team?.value?.name,
          logo:
            team?.value?.tabOne?.poster?.url ||
            logos.find((logo: any) => logo.name === team?.name)?.logo,
          points: team?.value?.tabSix?.puntos,
          played: team?.value?.tabSix?.partidos_jugados,
          won: team?.value?.tabSix?.partidos_ganados,
          draw: team?.value?.tabSix?.partidos_empatados,
          lost: team?.value?.tabSix?.partidos_perdidos,
          goalsFor: team?.value?.tabSix?.goles_favor,
          goalsAgainst: team?.value?.tabSix?.goles_contra,
        };
      });
      setDataClassification(classification);
    }
  }, []);

  return (
    <div className="mt-10">
      {dataClassification && dataClassification.length > 0 && (
        <CustomTable data={dataClassification} type="classification" />
      )}
      {dataClassification && dataClassification.length === 0 && (
        <h2 className="text-2xl text-center font-semibold">
          Aún no hay clasificación disponible
        </h2>
      )}
    </div>
  );
};
export default Classification;
