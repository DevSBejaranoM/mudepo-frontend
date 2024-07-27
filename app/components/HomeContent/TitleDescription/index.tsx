interface TitleDescriptionProps {
  title: string;
  description: string;
}

const TitleDescription = ({ title, description }: TitleDescriptionProps) => (
  <header className="text-center mx-auto mt-16 mb-16 md:mb-24 lg:mb-28">
    <h2 className="text-4xl leading-normal mb-2 font-bold text-gray-700">
      Gestiona como un profesional
    </h2>
    <span className="font-light">
      Todos los tipos de organización tienen su sitio en Mudepo
    </span>
  </header>
);

export default TitleDescription;
