import { axiosAdapter } from "@/app/config/axios.adapter";
import { useState, useEffect } from "react";
import CustomTable from "../CustomTable";

interface SancionesProps {
  id: string;
}

const Sanciones = ({ id }: SancionesProps) => {
  const [dataSancionados, setDataSancionados] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSanciones = async () => {
      //   const response = await axiosAdapter.fetchData(
      //     `/get-estadisticas?ligaid=${id}`
      //   );
      //   setDataSancionados(response?.data);
      setDataSancionados([
        {
          id: 1,
          escudo: "https://www.lig",
          equipo: "Equipo 1",
          player: "Jugador 1",
          sanciones: 5,
          puntos: 10,
          partidosSuspension: 2,
        },
        {
          id: 2,
          escudo: "https://www.lig",
          equipo: "Equipo 2",
          player: "Jugador 2",
          sanciones: 5,
          puntos: 9,
          partidosSuspension: 2,
        },
        {
          id: 3,
          escudo: "https://www.lig",
          equipo: "Equipo 3",
          player: "Jugador 3",
          sanciones: 5,
          puntos: 8,
          partidosSuspension: 2,
        },
        {
          id: 4,
          escudo: "https://www.lig",
          equipo: "Equipo 4",
          player: "Jugador 4",
          sanciones: 5,
          puntos: 7,
          partidosSuspension: 2,
        },
        {
          id: 5,
          escudo: "https://www.lig",
          equipo: "Equipo 5",
          player: "Jugador 5",
          sanciones: 5,
          puntos: 6,
          partidosSuspension: 2,
        },
      ]);
      setLoading(false);
    };
    getSanciones();
  }, []);

  return (
    <div>
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        JUGADORES SANCIONADOS
      </h3>
      {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {!loading && (
        <CustomTable
          data={dataSancionados}
          type="sancionados"
        />
      )}
    </div>
  );
};

export default Sanciones;
