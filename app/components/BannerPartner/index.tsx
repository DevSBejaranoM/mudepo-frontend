import { useFetchFile } from "@/app/hooks/useFetchFile";

interface BannerPartnerProps {
  partners: any[];
}

const BannerPartner = ({ partners }: BannerPartnerProps) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {partners.map((partner, index) => {
        return (
          <a
            key={index}
            href={partner?.Partner?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          >
            <img
              src={partner?.Partner?.photo?.signedUrl}
              alt={partner?.Partner?.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4 bg-gray-900 text-white">
              <h3 className="text-lg font-bold">{partner?.Partner?.name}</h3>
              <p className="text-sm">{partner?.Partner?.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default BannerPartner;
