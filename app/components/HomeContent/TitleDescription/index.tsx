interface TitleDescriptionProps {
  title: string;
  description?: string;
}

const TitleDescription = ({ title, description}: TitleDescriptionProps) => (
  <header className={`text-center mx-auto mt-16 mb-16 md:mb-24 lg:mb-28`}>
    <h2 className="text-4xl leading-normal mb-2 font-bold text-gray-700">
      {title}
    </h2>
    {description && (
      <span className="font-light">
        {description}
      </span>
    )}
  </header>
);

export default TitleDescription;
