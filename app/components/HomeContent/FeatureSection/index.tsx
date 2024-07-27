interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  reverse?: boolean;
}

const FeatureSection = ({
  title,
  description,
  features,
  imageUrl,
  reverse,
}: FeatureSectionProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-start md:mx-16 ${
        reverse ? "md:flex-row-reverse" : ""
      } py-12`}
    >
      <div className="md:w-1/2 p-6">
        <h3 className="text-3xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-8 text-lg">{description}</p>
        <ul className="list-disc list-inside mb-8">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
        <a href="#" className="text-orange-500 hover:text-orange-600 font-bold">
          Descubre más →
        </a>
      </div>
      <div className="md:w-1/2 p-6 md:flex md:justify-center">
        <img
          src={imageUrl}
          alt="Feature image"
          className="md:max-h-96"
          // className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
