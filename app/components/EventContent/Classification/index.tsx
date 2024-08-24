import { useEffect, useState } from "react";
import CustomTable from "../CustomTable";

interface ClassificationProps {
  data: any;
}

const Classification = ({ data }: ClassificationProps) => {
  const [dataClassification, setDataClassification] = useState<any>(null);

  useEffect(() => {
    if (data) {
      const classification = data.map((team: any) => {
        return {
          position: team?.value?.position,
          name: team?.value?.team?.name,
          logo: team?.value?.team?.tabOne?.poster?.url || "",
          points: team?.value?.puntos,
          played: team?.value?.partidos_jugados,
          won: team?.value?.partidos_ganados,
          draw: team?.value?.partidos_empatados,
          lost: team?.value?.partidos_perdidos,
          goalsFor: team?.value?.goles_favor,
          goalsAgainst: team?.value?.goles_contra,
        };
      });
      setDataClassification(classification);
    }
  }, []);

  return (
    <div className="mt-10">
      {
        dataClassification && dataClassification.length > 0 && (
          <CustomTable data={dataClassification} type="classification" />
        )
      }
      {
        dataClassification && dataClassification.length === 0 && (
          <h2 className="text-2xl text-center font-semibold">Aún no hay clasificación disponible</h2>
        )
      }
    </div>
  );
};
export default Classification;
