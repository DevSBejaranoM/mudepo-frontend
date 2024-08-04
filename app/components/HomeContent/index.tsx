import ContactForm from "./ContactForm";
import FeatureSection from "./FeatureSection";
import OurTeamSection from "./OurTeamSection";
import TitleDescription from "./TitleDescription";

const HomeContent = () => {
  return (
    <div>
      <TitleDescription
        title="Gestiona como un profesional"
        description="Todos los tipos de organización tienen su sitio en Mudepo"
      />
      <OurTeamSection />
      <TitleDescription
        title="¿Qué puedes hacer con Mudepo?"
        description="Administración, comunicación, competición, entrenamientos y tienda online."
      />
      <FeatureSection
        title="Administración, comunicación, competición, entrenamientos y tienda online."
        description="El módulo de administración es uno de los más potentes de Mudepo. Con él, puedes gestionar todo lo relativo a tu organización."
        features={[
          "Digitalización de inscripciones y bases de datos",
          "Control y automatización de pagos y cobros",
          "Acceso propio por roles y jerarquías",
          "Gestión de licencias",
        ]}
        imageUrl="/images/home/feature.png"
      />
      <FeatureSection
        title="Entrenamientos, competiciones y más."
        description="Este módulo te permite gestionar tus entrenamientos y competiciones de una manera eficiente."
        features={[
          "Planificación de entrenamientos",
          "Control de asistencia",
          "Análisis de rendimiento",
          "Gestión de competiciones",
        ]}
        imageUrl="/images/home/feature.png"
        reverse
      />
      <FeatureSection
        title="Administración, comunicación, competición, entrenamientos y tienda online."
        description="El módulo de administración es uno de los más potentes de Mudepo. Con él, puedes gestionar todo lo relativo a tu organización."
        features={[
          "Digitalización de inscripciones y bases de datos",
          "Control y automatización de pagos y cobros",
          "Acceso propio por roles y jerarquías",
          "Gestión de licencias",
        ]}
        imageUrl="/images/home/feature.png"
      />
      <FeatureSection
        title="Entrenamientos, competiciones y más."
        description="Este módulo te permite gestionar tus entrenamientos y competiciones de una manera eficiente."
        features={[
          "Planificación de entrenamientos",
          "Control de asistencia",
          "Análisis de rendimiento",
          "Gestión de competiciones",
        ]}
        imageUrl="/images/home/feature.png"
        reverse
      />
      <ContactForm />
    </div>
  );
};
export default HomeContent;
