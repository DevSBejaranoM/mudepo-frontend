import CustomList from "../ComunicationContent/CustomList";
import AudienceSection from "./AudienceSection";
import ContactForm from "./ContactForm";
import FeatureSection from "./FeatureSection";
import InfoImagesSection from "./InfoImagesSection";
import TitleDescription from "./TitleDescription";

const HomeContent = () => {
  const points = [
    {
      title: "Ahorro de tiempo",
      description:
        "Permite realizar las inscripciones de los equipos de forma sencilla. Olvídate de la gestión de los torneos en excel y automatiza la administración de las competiciones.",
    },
    {
      title: "Resultados en tiempo real",
      description:
        "Seguir cada partido, encuentro y competición al instante, con actualizaciones automáticas que te mantienen al tanto de los últimos resultados, goles marcados, tarjetas y mucho más.",
    },
    {
      title: "Mantente conectado",
      description:
        "Conecta tu organización y saca el máximo partido a todas nuestras funcionalidades.",
    },
    {
      title: "Mejor comunicación para los aficionados",
      description:
        "Ofrece una App para mantener tus equipos y aficionados informados en cualquier momento y lugar.",
    },
    {
      title: "Interactúa con el resto de deportistas",
      description:
        "Aporta una experiencia inolvidable para todos los participantes de los torneos, permitiéndoles seguir los eventos, categorías, equipos y recibir notificaciones en tiempo real.",
    },
    {
      title: "Destaca los mejores momentos de los eventos",
      description: "con noticias, fotos, videos…",
    },
  ];

  return (
    <div className="container mx-auto">
      <TitleDescription textColor="color-primary" title="Bienvenido a MUDEPO" />
      {/* <TitleDescription
        title="¿Por qué elegir MUDEPO para tu club?"/> */}
      <CustomList
        points={points}
        title="¿Por qué elegir MUDEPO para tu club?"
        center={true}
      />
      <TitleDescription
        title="Lleva a tu organización al máximo nivel con Mudepo"
        description="Te presentamos nuestras funcionalidades"
      />
      <FeatureSection
        title="1. Organización y administración del torneo o liga"
        description="La administración de MUDEPO es extremadamente poderosa . Te permite gestionar todos los aspectos de tu organización de manera eficiente."
        features={[
          "Base de datos consolidada y digital.",
          "Digitaliza las inscripciones.",
          "Administra tus pagos y cobros de manera eficiente.",
          "Gestión de usuarios.",
          "Administración y asignación de árbitros.",
        ]}
        imageUrl="/images/home/organizacion-y-administracion.jpg"
        buttonLink="/functionalities"
      />
      <FeatureSection
        title="2. Comunicación del club"
        description="Mantén una comunicación directa y eficaz con todos los miembros del club. Asegúrate de que todos estén conectados con MUDEPO"
        features={[
          "Conocer información a medida que se está disputando la competición.",
          "Transmisión en vivo.",
          "Registro de asistencias.",
          "Automatización de los resultados.",
        ]}
        imageUrl="/images/home/comunicacion-del-club.jpg"
        buttonLink="/comunication"
        reverse
      />
      <FeatureSection
        title="3. Área deportiva"
        description="Desde MUDEPO controlaras toda el área deportiva con diferentes accesos y funcionalidades para organizadores, delegados, entrenadores y jugadores"
        features={[
          "Gestiona tu calendario de competiciones.",
          "Competiciones de cualquier deporte.",
          "Gestión de partidos/liga/torneo.",
        ]}
        imageUrl="/images/home/area-deportiva.jpg"
      />
      <TitleDescription title="¡Descubre el potencial de Mudepo para llevar a su liga deportiva al siguiente nivel de manera eficiente y sencilla!" />
      <InfoImagesSection
        image1="/images/home/forma-parte-de-mudepo.jpg"
        image2="/images/home/entrenamiento.jpg"
        image3="/images/home/asistencia-tecnica.jpg"
        title1="Forma parte de MUDEPO"
        description1="Nuestro equipo te acompañará en cada etapa del proceso. Desde el registro hasta que MUDEPO opere a su máxima capacidad en tu club."
        title2="Entrenamiento"
        description2="Te instruimos a ti y a tu equipo para que obtengan el mayor provecho de nuestro excelente programa de gestión, la web y la app. A pesar de su simplicidad, que permite un aprendizaje autónomo. :)"
        title3="Asistencia técnica en tiempo real"
        description3="Ponte en contacto con nosotros en cualquier momento a través de nuestros canales de chat y WhatsApp. Siempre estarás respaldado y acompañado"
      />
      <TitleDescription
        title="Unifica a toda tu comunidad"
        description="Integra a todos los integrantes y grupos de tu club: Directores, Técnicos, Deportistas, Familias, Socios, Aficionados, y más."
      />
      <AudienceSection
        items={[
          { icon: "/images/audience/directores.svg", label: "Directores" },
          { icon: "/images/audience/entrenadores.svg", label: "Entrenadores" },
          { icon: "/images/audience/deportistas.svg", label: "Deportistas" },
          { icon: "/images/audience/familias.svg", label: "Familias" },
          { icon: "/images/audience/aficionados.svg", label: "Aficionados" },
        ]}
        managementTool={{
          label: "Herramienta de gestión",
          imageUrl: "/images/home/unifica-toda-tu-comunidad.jpg",
        }}
        webTool={{
          label: "Web personalizada",
          imageUrl: "/images/audience/audience-two.png",
        }}
        appTool={{
          label: "App personalizada",
          imageUrl: "/images/audience/audience-three.png",
        }}
      />
      <ContactForm />
    </div>
  );
};
export default HomeContent;
