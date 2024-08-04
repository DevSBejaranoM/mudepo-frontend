import AudienceSection from "./AudienceSection";
import ContactForm from "./ContactForm";
import FeatureSection from "./FeatureSection";
import InfoImagesSection from "./InfoImagesSection";
import TitleDescription from "./TitleDescription";

const HomeContent = () => {
  return (
    <div>
      <TitleDescription
        title="Gestiona como un profesional"
        description="Todos los tipos de organización tienen su sitio en Mudepo"
      />
      <InfoImagesSection
        image1="/images/home/clubes.png"
        image2="/images/home/torneos.png"
        image3="/images/home/federaciones.png"
      />
      <TitleDescription
        title="Lleva a tu organización al máximo nivel con Mudepo"
        description="Te presentamos nuestras funcionalidades"
      />
      <FeatureSection
        title="1. Organización y administración del torneo o liga"
        description="La administración de MUDEPO es extremadamente poderosa . Te permite gestionar todos los aspectos de tu organización de manera eficiente."
        features={[
          "Digitaliza las inscripciones.",
          "Administra tus pagos y cobros de manera eficiente.",
          "Gestión de usuarios.",
          "Administración y asignación de árbitros.",
        ]}
        imageUrl="/images/home/feature.png"
        buttonLink="/organization"
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
        imageUrl="/images/home/feature.png"
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
        imageUrl="/images/home/feature.png"
      />
      <TitleDescription title="¡Descubre el potencial de Mudepo para llevar a su liga deportiva al siguiente nivel de manera eficiente y sencilla!" />
      <InfoImagesSection
        image1="/images/home/clubes.png"
        image2="/images/home/torneos.png"
        image3="/images/home/federaciones.png"
        title1="Forma parte de MUDEPO"
        description1="Nuestro equipo te acompañará en cada etapa del proceso. Desde el registro hasta que MUDEPO opere a su máxima capacidad en tu club."
        title2="Entrenamiento"
        description2="Te instruimos a ti y a tu equipo para que obtengan el mayor provecho de nuestro excelente programa de gestión, la web y la app. A pesar de su simplicidad, que permite un aprendizaje autónomo. :)"
        title3="Asistencia técnica en tiempo real"
        description3="Ponte en contacto con nosotros en cualquier momento a través de nuestros canales de chat y WhatsApp. Siempre estarás respaldado y acompañado"
      />
      <TitleDescription
        title="Unifica a toda tu comunidad"
        description="Integra a todos los integrantes y grupos de tu club: Directores, Técnicos, Deportistas, Familias, Socios, Aficionados, y más.Crear algo así similar visual"
      />
       <AudienceSection
        items={[
          { icon: '/images/audience/directores.svg', label: 'Directores' },
          { icon: '/images/audience/entrenadores.svg', label: 'Entrenadores' },
          { icon: '/images/audience/deportistas.svg', label: 'Deportistas' },
          { icon: '/images/audience/familias.svg', label: 'Familias' },
          { icon: '/images/audience/aficionados.svg', label: 'Aficionados' },
        ]}
        managementTool={{
          label: 'Herramienta de gestión',
          imageUrl: '/images/audience/audience-one.png',
        }}
        webTool={{
          label: 'Web personalizada',
          imageUrl: '/images/audience/audience-two.png',
        }}
        appTool={{
          label: 'App personalizada',
          imageUrl: '/images/audience/audience-three.png',
        }}
      />
      <ContactForm />
    </div>
  );
};
export default HomeContent;
