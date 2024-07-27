import { useState } from "react";
import CustomTable from "../CustomTable";

interface CalendarInfo {
  lugar: string;
  fecha: string;
  hora: string;
}

const Calendar = () => {
  const [selectedInfo, setSelectedInfo] = useState<null | CalendarInfo>(null);

  const journeyList = [
    [
      {
        id: 1,
        local: "Tamaraceite Veteranos",
        visitante: "Veteranos Tejeda C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 4,
        info: {
          lugar: "Juan Guedes",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 2,
        local: "Veterano Led Bee Happy",
        visitante: "Los Cernícalos C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 0,
        info: {
          lugar: "Pedro Hidalgo",
          fecha: "11/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 3,
        local: "F.C. Guanarteme Veterano",
        visitante: "PLAYA DEL HOMBRE	",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 5,
        visitanteGoals: 1,
        info: {
          lugar: " Las Torres",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
    ],
    [
      {
        id: 1,
        local: "Tamaraceite Veteranos",
        visitante: "Veteranos Tejeda C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 4,
        info: {
          lugar: "Juan Guedes",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 2,
        local: "Veterano Led Bee Happy",
        visitante: "Los Cernícalos C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 0,
        info: {
          lugar: "Pedro Hidalgo",
          fecha: "11/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 3,
        local: "F.C. Guanarteme Veterano",
        visitante: "PLAYA DEL HOMBRE	",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 5,
        visitanteGoals: 1,
        info: {
          lugar: " Las Torres",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
    ],
    [
      {
        id: 1,
        local: "Tamaraceite Veteranos",
        visitante: "Veteranos Tejeda C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 4,
        info: {
          lugar: "Juan Guedes",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 2,
        local: "Veterano Led Bee Happy",
        visitante: "Los Cernícalos C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 0,
        info: {
          lugar: "Pedro Hidalgo",
          fecha: "11/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 3,
        local: "F.C. Guanarteme Veterano",
        visitante: "PLAYA DEL HOMBRE	",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 5,
        visitanteGoals: 1,
        info: {
          lugar: " Las Torres",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
    ],
    [
      {
        id: 1,
        local: "Tamaraceite Veteranos",
        visitante: "Veteranos Tejeda C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 4,
        info: {
          lugar: "Juan Guedes",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 2,
        local: "Veterano Led Bee Happy",
        visitante: "Los Cernícalos C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 0,
        info: {
          lugar: "Pedro Hidalgo",
          fecha: "11/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 3,
        local: "F.C. Guanarteme Veterano",
        visitante: "PLAYA DEL HOMBRE	",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 5,
        visitanteGoals: 1,
        info: {
          lugar: " Las Torres",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
    ],
    [
      {
        id: 1,
        local: "Tamaraceite Veteranos",
        visitante: "Veteranos Tejeda C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 4,
        info: {
          lugar: "Juan Guedes",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 2,
        local: "Veterano Led Bee Happy",
        visitante: "Los Cernícalos C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 0,
        info: {
          lugar: "Pedro Hidalgo",
          fecha: "11/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 3,
        local: "F.C. Guanarteme Veterano",
        visitante: "PLAYA DEL HOMBRE	",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 5,
        visitanteGoals: 1,
        info: {
          lugar: " Las Torres",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
    ],
    [
      {
        id: 1,
        local: "Tamaraceite Veteranos",
        visitante: "Veteranos Tejeda C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 4,
        info: {
          lugar: "Juan Guedes",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 2,
        local: "Veterano Led Bee Happy",
        visitante: "Los Cernícalos C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 0,
        info: {
          lugar: "Pedro Hidalgo",
          fecha: "11/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 3,
        local: "F.C. Guanarteme Veterano",
        visitante: "PLAYA DEL HOMBRE	",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 5,
        visitanteGoals: 1,
        info: {
          lugar: " Las Torres",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
    ],
    [
      {
        id: 1,
        local: "Tamaraceite Veteranos",
        visitante: "Veteranos Tejeda C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 4,
        info: {
          lugar: "Juan Guedes",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 2,
        local: "Veterano Led Bee Happy",
        visitante: "Los Cernícalos C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 0,
        info: {
          lugar: "Pedro Hidalgo",
          fecha: "11/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 3,
        local: "F.C. Guanarteme Veterano",
        visitante: "PLAYA DEL HOMBRE	",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 5,
        visitanteGoals: 1,
        info: {
          lugar: " Las Torres",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
    ],
    [
      {
        id: 1,
        local: "Tamaraceite Veteranos",
        visitante: "Veteranos Tejeda C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 4,
        info: {
          lugar: "Juan Guedes",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 2,
        local: "Veterano Led Bee Happy",
        visitante: "Los Cernícalos C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 0,
        info: {
          lugar: "Pedro Hidalgo",
          fecha: "11/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 3,
        local: "F.C. Guanarteme Veterano",
        visitante: "PLAYA DEL HOMBRE	",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 5,
        visitanteGoals: 1,
        info: {
          lugar: " Las Torres",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
    ],
    [
      {
        id: 1,
        local: "Tamaraceite Veteranos",
        visitante: "Veteranos Tejeda C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 4,
        info: {
          lugar: "Juan Guedes",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 2,
        local: "Veterano Led Bee Happy",
        visitante: "Los Cernícalos C.F.",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 6,
        visitanteGoals: 0,
        info: {
          lugar: "Pedro Hidalgo",
          fecha: "11/10/2023",
          hora: "21:30",
        },
      },
      {
        id: 3,
        local: "F.C. Guanarteme Veterano",
        visitante: "PLAYA DEL HOMBRE	",
        logoLocal: "/images/team/tamaraceite.png",
        logoVisitante: "/images/team/veterano-tejeda.jpg",
        localGoals: 5,
        visitanteGoals: 1,
        info: {
          lugar: " Las Torres",
          fecha: "13/10/2023",
          hora: "21:30",
        },
      },
    ],
  ];
  const dataCalendar = [
    {
      id: 1,
      local: "Tamaraceite Veteranos",
      visitante: "Veteranos Tejeda C.F.",
      logoLocal: "/images/team/tamaraceite.png",
      logoVisitante: "/images/team/veterano-tejeda.jpg",
      localGoals: 6,
      visitanteGoals: 4,
      info: {
        lugar: "Juan Guedes",
        fecha: "13/10/2023",
        hora: "21:30",
      },
    },
    {
      id: 2,
      local: "Veterano Led Bee Happy",
      visitante: "Los Cernícalos C.F.",
      logoLocal: "/images/team/tamaraceite.png",
      logoVisitante: "/images/team/veterano-tejeda.jpg",
      localGoals: 6,
      visitanteGoals: 0,
      info: {
        lugar: "Pedro Hidalgo",
        fecha: "11/10/2023",
        hora: "21:30",
      },
    },
    {
      id: 3,
      local: "F.C. Guanarteme Veterano",
      visitante: "PLAYA DEL HOMBRE	",
      logoLocal: "/images/team/tamaraceite.png",
      logoVisitante: "/images/team/veterano-tejeda.jpg",
      localGoals: 5,
      visitanteGoals: 1,
      info: {
        lugar: " Las Torres",
        fecha: "13/10/2023",
        hora: "21:30",
      },
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3">
      {journeyList.map((journey, index) => (
        <CustomTable
          key={index}
          data={journey}
          type="calendar"
          journey={index + 1}
          setSelectedInfo={setSelectedInfo}
        />
      ))}
      {selectedInfo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-md min-w-[20%]">
            <h3 className="text-xl font-bold mb-4">INFORMACIÓN DEL PARTIDO</h3>
            <div className="border-t border-gray-300 my-1" />
            <div className="my-5">
              <p>
                <span className="text-red-500">Lugar:</span>{" "}
                {selectedInfo.lugar}
              </p>
              <p className="my-3">
                <span className="text-red-500">Fecha:</span>{" "}
                {selectedInfo.fecha}
              </p>
              <p>
                <span className="text-red-500">Hora:</span> {selectedInfo.hora}
              </p>
            </div>
            <div className="border-t border-gray-300 my-1" />
            <button
              onClick={() => setSelectedInfo(null)}
              className="mt-4 bg-orange-500 text-white py-2 px-4 rounded float-end"
            >
              CERRAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Calendar;
