interface BannerPartnerProps {
  imageUrl: string;
  altText: string;
}

const BannerPartner = ({ imageUrl, altText }: BannerPartnerProps) => {
  return (
    <div className="w-full p-4 flex items-center justify-center">
        <h1 className="absolute text-white">BANNER SPONSOR</h1>
      <img src={imageUrl} alt={altText} className="max-w-full md:max-h-60 h-auto rounded-lg" />
    </div>
  );
};

export default BannerPartner;
