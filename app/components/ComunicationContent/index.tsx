"use client";
import { useRouter } from "next/navigation";
import ContactForm from "../HomeContent/ContactForm";
import TitleDescription from "../HomeContent/TitleDescription";
import InfoColumnsSection from "../OrganizationContent/InfoColumnsSection";
import CustomList from "./CustomList";

const ComunicationContent = () => {
    const router = useRouter();
  const points = [
    {
      title: "Mapa de ubicaciones",
      description:
        "Mudepo dispone de  mapa interactivo que muestra la ubicación de los campos de juego y otros lugares importantes relacionados con el torneo o competición.",
    },
    {
      title: "Mensajes, Chat privado(entre equipos/jugadores) y foro",
      description:
        "Dispones de un espacio de chat o un foro dentro de la aplicación donde los usuarios puedan interactuar y discutir sobre el torneo. posibilidad de mandar mensajes entre equipos. Todos conectados.",
    },
    {
      title: "Información sobre patrocinadores",
      description:
        "Permite mostrar información sobre los patrocinadores del torneo, incluyendo logotipos, enlaces y promociones especiales.",
    },
    {
      title: "Reglamento del torneo",
      description:
        "El reglamento oficial del torneo está disponible  para que los participantes y espectadores puedan consultarlo en cualquier momento.",
    },
    {
      title: "Mensajes push",
      description:
        "Permite activar  notificaciones de equipos o partidos. Además podrás  enviar alertas en caso de cambios o mensajes push de los partidos si sigues a un equipo. Te mantendrás informado e informará a los  usuarios sobre cambios en los horarios de los partidos, resultados, y otra información relevante del torneo.",
    },
    {
      title: "Transmisión en vivo",
      description:
        "Ofrecer la posibilidad de conectar alguna plataforma de streaming para transmitir partidos en vivo , a través de la aplicación o fuera de ella (youtube) para aquellos que no puedan asistir personalmente.",
    },
  ];

  return (
    <div className="container mx-auto">
      <TitleDescription title="Comunicación del club" />
      <CustomList
        points={points}
        title="Eleva la competición o torneo  de tu equipo al máximo nivel y conecta a todos para que no pierdan detalle. Vive la emoción."
      />
      <TitleDescription title="Área deportiva" description="Desde MUDEPO controlaras toda el área deportiva con diferentes accesos y funcionalidades para organizadores, delegados, entrenadores y jugadores"/>
      <div className="flex flex-col justify-center md:flex-row gap-4 mb-10 md:mx-0">
              <button
                className="bg-primary hover-bg-primary-dark text-white font-bold py-2 px-4 rounded-full"
                onClick={() => router.push("/comunication/#contactForm")}
              >
                Solicitar una demo
              </button>
            </div>
      <InfoColumnsSection
        title="Gestiona tu calendario de competiciones"
        points={[
          "El calendario te permite abordar tus competiciones de manera ordenada y estructurada, brindando mayor flexibilidad y un control óptimo sobre tus horarios.",
          "Este sistema es capaz de organizar una liga de 32 equipos en apenas 8 segundos, y permite modificar cualquier partido en cualquier momento sin interrumpir el desarrollo del evento.",
          "Los calendarios se generan de forma automática, con opciones para importar datos desde Excel, siendo adaptable a cualquier tipo de deporte.",
          "Diseñado para ahorrar más del 40% de tu tiempo, puedes conectarlo a una aplicación para árbitros y publicar los resultados automáticamente.",
        ]}
        imageUrl="/images/categories/liga5.jpg"
        reverse={false}
      />
      <InfoColumnsSection
        title="Competiciones de cualquier deporte"
        points={[
          "Transforma tus competiciones con la gestión más avanzada y ofrece una experiencia única a los participantes a través de sus smartphones.",
          "Las competiciones deportivas han evolucionado gracias a una aplicación móvil líder que permite seguir todas las novedades y mantenerse en contacto con el entorno del torneo.",
          "Disponible para todos los deportes y modalidades, esta herramienta ofrece visualización de enfrentamientos en tiempo real y clasificaciones automáticas con estadísticas detalladas. ¿Qué estás esperando?",
        ]}
        imageUrl="/images/categories/liga4.jpg"
        reverse={true}
      />
      <InfoColumnsSection
        title="Gestión de partidos/liga/torneo"
        points={[
          "Los encuentros ahora no se limitan a información y estadísticas; son pura emoción, son competición, y la mejor motivación para prepararte con dedicación para obtener los mejores resultados.",
          "Incluye actas digitales automáticas, control de estadísticas, gestión de convocatorias y conexión con la aplicación para árbitros, entre muchas otras funcionalidades.",
        ]}
        imageUrl="/images/categories/liga5.jpg"
        reverse={false}
      />
      <ContactForm />
    </div>
  );
};

export default ComunicationContent;
