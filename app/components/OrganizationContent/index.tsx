import TitleDescription from "../HomeContent/TitleDescription";
import InfoColumnsSection from "./InfoColumnsSection";
import TwoColumnMedia from "./TwoColumnMedia";

const OrganizationContent = () => {

  return (
    <div className="container mx-auto">
      <TitleDescription title="¿Cómo funciona MUDEPO?" />
      <TwoColumnMedia
        imageUrl="/images/home/feature.png"
        videoUrl="https://www.youtube.com/watch?v=DMfaAGQ6e2o"
      />
      <InfoColumnsSection
        title="Consolida toda la información en una sola base de datos"
        points={[
          "Siempre actualizada y al alcance de todos.",
          "Deportistas, socios, entrenadores, aficionados, jugadores, árbitros, coordinadores, contables, community managers… toda la información en un solo lugar.",
          "Visualiza los datos en tiempo real, ya que todos los usuarios utilizan la misma herramienta conectada.",
          "Para facilitar el acceso, utiliza buscadores y filtros y consulta la información de manera rápida con vistas personalizables.",
        ]}
        imageUrl="/images/categories/liga5.jpg"
        reverse={false}
      />
      <InfoColumnsSection
        title="Digitaliza todas tus inscripciones"
        points={[
          "Gestiona todas tus inscripciones desde un solo lugar, ya sean nuevas altas, eventos o gestiones de la competición o torneo.",
          "Personaliza las inscripciones según tus necesidades: ajusta fechas, precios y añade campos personalizados a medida.",
          "Supervisa la disponibilidad de plazas para cada inscripción. La información está sincronizada para usuarios y administradores, lo que simplifica el proceso de inscripción y su posterior gestión.",
          "Recibe notificaciones para revisar y validar las inscripciones. Accede a toda la información desde la web y la app móvil para administrar en cualquier momento.",
        ]}
        imageUrl="/images/categories/liga4.jpg"
        reverse={true}
      />
      <InfoColumnsSection
        title="Administra tus pagos y cobros de manera eficiente"
        points={[
          "Gestiona todas tus inscripciones desde un solo lugar, ya sean nuevas altas, eventos o gestiones de la competición o torneo.",
          "Personaliza las inscripciones según tus necesidades: ajusta fechas, precios y añade campos personalizados a medida.",
          "Supervisa la disponibilidad de plazas para cada inscripción. La información está sincronizada para usuarios y administradores, lo que simplifica el proceso de inscripción y su posterior gestión.",
          "Recibe notificaciones para revisar y validar las inscripciones. Accede a toda la información desde la web y la app móvil para administrar en cualquier momento.",
        ]}
        imageUrl="/images/categories/liga4.jpg"
        reverse={false}
      />
      <TitleDescription title="Mudepo/ Administración y gestión / Gestión de usuarios" />

      <InfoColumnsSection
        title="Administra los roles de usuario"
        points={[
          "Dispondrás de diversos roles que podrás asignar a cada miembro de tu equipo.",
          "Estos roles definen el nivel de acceso que cada usuario tiene.",
          "Un usuario puede tener múltiples roles, y también puedes designar un tutor para representar a los usuarios menores de edad.",
        ]}
        imageUrl="/images/categories/liga5.jpg"
        reverse={true}
      />
      <InfoColumnsSection
        title="Importa usuarios masivamente."
        points={[
          "Si ya tienes una base de datos con la información de tus usuarios, puedes importar un archivo Excel para cargar toda la información en tu plataforma de MUDEPO en cuestión de segundos.",
          "Asigna equipos o grupos directamente durante la importación para ahorrar tiempo de manera significativa.",
          "Si no tienes una base de datos o deseas actualizar la información existente, puedes crear formularios de inscripción para que los usuarios ingresen los datos que necesitas almacenar.",
        ]}
        imageUrl="/images/categories/liga4.jpg"
        reverse={false}
      />
      <InfoColumnsSection
        title="Gestión arbitral"
        points={[
          "Frecuentemente, las organizaciones asignan árbitros sin conocer su disponibilidad exacta, lo que resulta en múltiples correos electrónicos y llamadas telefónicas. Además, a menudo no se confirma si el árbitro realmente puede arbitrar el partido asignado.",
          "Calcular el coste de los arbitrajes para cada partido puede ser complicado, especialmente cuando se juegan numerosos partidos con diferentes árbitros en un solo fin de semana.",
          "Tras los partidos, los árbitros completan el acta en papel y la envían al organizador, lo cual puede tomar uno o dos días. Esto genera un desfase en la publicación de resultados para los aficionados. El uso de actas en papel dificulta el control sobre cuándo se han firmado, lo que puede generar problemas de seguridad o confianza en la validez de la información.",
          "Además, el control de las sanciones puede no estar actualizado, lo que podría llevar a alineaciones indebidas y sanciones más severas para los clubes en futuros partidos.",
          "Por ello MUDEPO da la posibilidad de digitalizar y obtener en tiempo real la cumplimentación de las actas y documentación arbitral. "
        ]}
        imageUrl="/images/categories/liga5.jpg"
        reverse={true}
      />
    </div>
  );
};

export default OrganizationContent;
