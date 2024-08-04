import React from "react";

interface InfoColumnsSectionProps {
  title: string;
  points: string[];
  imageUrl: string;
  reverse?: boolean;
}

const InfoColumnsSection = ({
  title,
  points,
  imageUrl,
  reverse = false,
}: InfoColumnsSectionProps) => {
  return (
    <div
      className={`flex flex-col mb-10 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center p-6 bg-white`}
    >
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <ul className="list-none list-inside text-gray-600 space-y-2">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 p-4 flex justify-center">
        <img
          src={imageUrl}
          alt="Feature image"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default InfoColumnsSection;
