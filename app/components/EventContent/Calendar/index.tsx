"use client";
import { useEffect, useState } from "react";
import CustomTable from "../CustomTable";
import Loader from "../../Loader";

const Calendar = ({ data }: any) => {
  const [selectedInfo, setSelectedInfo] = useState<any>(null);
  const [days, setDays] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (data) {
      const jornadas = [
        {
          name: "1",
          startDate: "13/10/2023",
          endDate: "13/10/2023",
          id: "jornada1",
          fases: [
            {
              name: "Fase 1",
              id: "fase1Jornada1",
              grupos: [
                {
                  name: "Grupo A",
                  id: "grupoAJornada1",
                  partidos: [
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P1 GA",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P1 GA",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido1Jornada1Fase1GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/11/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P1 GA",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P1 GA",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido2Jornada1Fase1GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/15/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P1 GA",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P1 GA",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido3Jornada1Fase1GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/12/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P1 GA",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P1 GA",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido4Jornada1Fase1GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                  ],
                },
                {
                  name: "Grupo B",
                  id: "grupoBJornada1",
                  partidos: [
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P1 GB",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P1 GB",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido1Jornada1Fase1GrupoB",
                      localGoals: 1,
                      visitanteGoals: 1,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P1 GB",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P1 GB",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido2Jornada1Fase1GrupoB",
                      localGoals: 2,
                      visitanteGoals: 2,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P1 GB",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P1 GB",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido3Jornada1Fase1GrupoB",
                      localGoals: 3,
                      visitanteGoals: 3,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P1 GB",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P1 GB",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido4Jornada1Fase1GrupoB",
                      localGoals: 4,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                  ],
                },
                {
                  name: "Grupo C",
                  id: "grupoCJornada1",
                  partidos: [
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido1Jornada1Fase1GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido2Jornada1Fase1GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido3Jornada1Fase1GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido4Jornada1Fase1GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "Fase 2",
              id: "fase2Jornada1",
              grupos: [
                {
                  name: "Grupo A",
                  id: "grupoAJornada1Fase2",
                  partidos: [
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P2 GA",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P2 GA",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido1Jornada1Fase2GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veterano J1 P2 GAs",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P2 GA",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido2Jornada1Fase2GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P2 GA",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P2 GA",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido3Jornada1Fase2GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P2 GA",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P2 GA",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido4Jornada1Fase2GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                  ],
                },
                {
                  name: "Grupo B",
                  id: "grupoBJornada1",
                  partidos: [
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P2 GB",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P2 GB",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido1Jornada1Fase2GrupoB",
                      localGoals: 1,
                      visitanteGoals: 1,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P2 GB",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P2 GB",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido2Jornada1Fase2GrupoB",
                      localGoals: 2,
                      visitanteGoals: 2,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P2 GB",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P2 GB",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido3Jornada1Fase2GrupoB",
                      localGoals: 3,
                      visitanteGoals: 3,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos J1 P2 GB",
                      teamVisitante: "Veteranos Tejeda C.F. J1 P2 GB",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido4Jornada1Fase2GrupoB",
                      localGoals: 4,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                  ],
                },
                {
                  name: "Grupo C",
                  id: "grupoCJornada1",
                  partidos: [
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido1Jornada1Fase2GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido2Jornada1Fase2GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido3Jornada1Fase2GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido4Jornada1Fase2GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "2",
          startDate: "13/10/2023",
          endDate: "13/10/2023",
          id: "jornada2",
          fases: [
            {
              name: "Fase 1",
              id: "fase1Jornada2",
              grupos: [
                {
                  name: "Grupo A",
                  id: "grupoAJornada2",
                  partidos: [
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido1Jornada2Fase1GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido2Jornada2Fase1GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido3Jornada2Fase1GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido4Jornada2Fase1GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                  ],
                },
                {
                  name: "Grupo B",
                  id: "grupoBJornada2",
                  partidos: [
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido1Jornada2Fase1GrupoB",
                      localGoals: 1,
                      visitanteGoals: 1,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido2Jornada2Fase1GrupoB",
                      localGoals: 2,
                      visitanteGoals: 2,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido3Jornada2Fase1GrupoB",
                      localGoals: 3,
                      visitanteGoals: 3,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido4Jornada2Fase1GrupoB",
                      localGoals: 4,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                  ],
                },
                {
                  name: "Grupo C",
                  id: "grupoCJornada2",
                  partidos: [
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido1Jornada2Fase1GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido2Jornada2Fase1GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido3Jornada2Fase1GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido4Jornada2Fase1GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "Fase 2",
              id: "fase2Jornada2",
              grupos: [
                {
                  name: "Grupo A",
                  id: "grupoAJornada2Fase2",
                  partidos: [
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido1Jornada2Fase2GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido2Jornada2Fase2GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido3Jornada2Fase2GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido4Jornada2Fase2GrupoA",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                  ],
                },
                {
                  name: "Grupo B",
                  id: "grupoBJornada2",
                  partidos: [
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido1Jornada2Fase2GrupoB",
                      localGoals: 1,
                      visitanteGoals: 1,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido2Jornada2Fase2GrupoB",
                      localGoals: 2,
                      visitanteGoals: 2,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido3Jornada2Fase2GrupoB",
                      localGoals: 3,
                      visitanteGoals: 3,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido4Jornada2Fase2GrupoB",
                      localGoals: 4,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                  ],
                },
                {
                  name: "Grupo C",
                  id: "grupoCJornada2",
                  partidos: [
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido1Jornada2Fase2GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido2Jornada2Fase2GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido3Jornada2Fase2GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                    {
                      teamLocal: "Tamaraceite Veteranos",
                      teamVisitante: "Veteranos Tejeda C.F.",
                      logoLocal: "/images/team/tamaraceite.png",
                      logoVisitante: "/images/team/veterano-tejeda.jpg",
                      id: "partido4Jornada2Fase2GrupoC",
                      localGoals: 6,
                      visitanteGoals: 4,
                      info: {
                        lugar: "Juan Guedes",
                        fecha: "13/10/2023",
                        hora: "21:30",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
      setDays(jornadas);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {!days && loading && <Loader />}
      {!days && !loading && (
        <div className="flex justify-center my-5 text-center w-full">
          <h3 className="text-4xl font-bold">No hay partidos disponibles</h3>
        </div>
      )}
      {days && days.length === 0 && !loading && (
        <div className="flex justify-center my-5 text-center w-full">
          <h3 className="text-4xl font-bold">No hay partidos disponibles</h3>
        </div>
      )}
      {days && days.length > 0 && !loading && (
        <div className={`mt-10 grid grid-cols-1 ${days.length === 2 ? 'lg:grid-cols-2 2xl:grid-cols-2' : days.length > 2 ? 'lg:grid-cols-2 2xl:grid-cols-3' : ''}`}>
          {days.map((day: any, index: number) => (
            <CustomTable
              key={index}
              data={day}
              type="calendar"
              journey={day.name}
              setSelectedInfo={setSelectedInfo}
            />
          ))}
        </div>
      )}
      {selectedInfo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedInfo(null);
            }
          }}
        >
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
              className="mt-4 bg-primary text-white py-2 px-4 rounded float-end"
            >
              CERRAR
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Calendar;
