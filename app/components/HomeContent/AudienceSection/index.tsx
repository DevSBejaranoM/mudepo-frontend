import React from "react";

interface AudienceSectionProps {
  items: {
    icon: string;
    label: string;
  }[];
  managementTool: {
    label: string;
    imageUrl: string;
  };
  webTool: {
    label: string;
    imageUrl: string;
  };
  appTool: {
    label: string;
    imageUrl: string;
  };
}

const AudienceSection: React.FC<AudienceSectionProps> = ({
  items,
  managementTool,
  webTool,
  appTool,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center py-6 md:px-48">
      <div className="w-full p-3 relative md:w-1/3">
        <div className="md:hidden flex justify-center relative w-full">
          <div className="absolute top-1/2 transform -translate-y-1/2 h-0.5 w-9/12 border-t-2 border-dotted border-gray-300"></div>
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative z-10 bg-white mb-2">
                <img src={item.icon} alt={item.label} className="h-10 w-10" />
              </div>
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>
        <ul className="md:flex flex-col space-y-12 hidden relative">
          <div className="absolute left-6 top-0 h-full border-l-2 border-dotted border-gray-300"></div>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-4">
              <div className="relative z-10 bg-white">
                <img src={item.icon} alt={item.label} className="h-10 w-10" />
              </div>
              <span className="text-xl">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full p-3 flex flex-col space-y-6 items-center md:w-2/3">
        <div className="flex items-center space-x-2">
          <img
            src={managementTool.imageUrl}
            alt={managementTool.label}
            className="h-full w-auto shadow-lg rounded-lg"
          />
        </div>
        {/* <div className="flex items-center space-x-2">
          <img src={managementTool.imageUrl} alt={managementTool.label} className="h-40 w-auto" />
          <span className="bg-black text-white p-1 rounded-lg">{managementTool.label}</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={webTool.imageUrl} alt={webTool.label} className="h-40 w-auto" />
          <span className="bg-black text-white p-1 rounded-lg">{webTool.label}</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={appTool.imageUrl} alt={appTool.label} className="h-40 w-auto" />
          <span className="bg-black text-white p-1 rounded-lg">{appTool.label}</span>
        </div> */}
      </div>
    </div>
  );
};

export default AudienceSection;
