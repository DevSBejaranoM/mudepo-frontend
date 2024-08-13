
interface MainSectionProps {
    title: string;
    image: string;
    bgSize?: string;
}

const MainSection = ({title, image, bgSize = "cover"}: MainSectionProps) => {
  return (
    <section
      className="bg-cover bg-center background h-96"
      style={{ backgroundImage: `url(${image})`, backgroundSize: bgSize, backgroundRepeat: 'no-repeat' }}
    >
      <div className="container mx-auto text-black text-center py-20">
        <h1 className="text-2xl md:text-5xl font-bold my-40">{title}</h1>
      </div>
    </section>
  );
};

export default MainSection;
