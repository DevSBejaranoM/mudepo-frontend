interface BannerPartnerProps {
  sponsors: any[];
}

const BannerPartner = ({ sponsors }: BannerPartnerProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {sponsors.map((sponsor, index) => (
        <a
          key={index}
          href={sponsor?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            src={`${process.env.NEXT_PUBLIC_MAIN_URL}${sponsor?.photo?.url}`}
            alt={sponsor?.name}
            className="w-full h-32 object-cover"
          />
          <div className="p-4 bg-gray-900 text-white">
            <h3 className="text-lg font-bold">{sponsor?.name}</h3>
            <p className="text-sm">{sponsor?.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default BannerPartner;
