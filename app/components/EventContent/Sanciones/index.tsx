import { axiosAdapter } from "@/app/config/axios.adapter";
import { useState, useEffect } from "react";
import CustomTable from "../CustomTable";

interface SancionesProps {
  id: string;
}

const Sanciones = ({ id }: SancionesProps) => {
  const [dataSancionados, setDataSancionados] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [amarillas, setAmarillas] = useState<any>(null);
  const [rojas, setRojas] = useState<any>(null);
  const [doblesAmarillas, setDoblesAmarillas] = useState<any>(null);

  useEffect(() => {
    const getSanciones = async () => {
      const response = await axiosAdapter.fetchData(
        `/get-sanciones-estadisticas?id=${id}`
      );
      console.log("sanciones", response.data);
      setDataSancionados(response?.data?.partidosSuspendidos || []);
      setAmarillas(response?.data?.tarjetaAmarilla || []);
      setRojas(response?.data?.tarjetaRoja || []);
      setDoblesAmarillas(response?.data?.dobleAmarilla || []);
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
      {!loading && <CustomTable data={dataSancionados} type="sancionados" />}
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        TARJETAS ROJAS
      </h3>
      {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {!loading && <CustomTable data={rojas} type="tarjetas-rojas" />}
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        TARJETAS AMARILLAS
      </h3>
      {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {!loading && <CustomTable data={amarillas} type="tarjetas-amarillas" />}
      <h3 className="text-center text-2xl font-semibold text-red-700 mt-5 mb-5">
        TARJETAS DOBLES AMARILLAS
      </h3>
      {loading && (
        <div className="flex justify-center">
          <p>Cargando...</p>
        </div>
      )}
      {!loading && <CustomTable data={doblesAmarillas} type="tarjetas-amarillas" />}
    </div>
  );
};

export default Sanciones;
