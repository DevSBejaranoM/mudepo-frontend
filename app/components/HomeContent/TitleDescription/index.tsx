interface TitleDescriptionProps {
  title: string;
  description?: string;
  textColor?: string;
}

const TitleDescription = ({ title, description, textColor = `text-gray-700`}: TitleDescriptionProps) => (
  <header className={`text-center mx-auto mb-8 md:mt-16 md:mb-16 pl-2 pr-2`}>
    <h2 className={`text-3xl md:text-4xl leading-normal mb-2 font-bold ${textColor}`}>
      {title}
    </h2>
    {description && (
      <span className=" text-md font-light md:text-xl">
        {description}
      </span>
    )}
  </header>
);

export default TitleDescription;
