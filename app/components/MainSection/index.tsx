
interface MainSectionProps {
    title: string;
    image: string;
    bgSize?: string;
}

const MainSection = ({title, image, bgSize = "cover"}: MainSectionProps) => {
  return (
    <section
      className="bg-cover bg-center background"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`, backgroundSize: bgSize, backgroundRepeat: 'no-repeat' }}
    >
      <div className="container mx-auto text-white text-center py-20">
        <h1 className="text-2xl md:text-5xl font-bold my-40">{title}</h1>
      </div>
    </section>
  );
};

export default MainSection;
