
interface MainSectionProps {
    title: string;
    image: string;
}

const MainSection = ({title, image}: MainSectionProps) => {
  return (
    <section
      className="bg-cover bg-center h-96"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container mx-auto text-white text-center py-20">
        <h1 className="text-2xl md:text-5xl font-bold my-40">{title}</h1>
      </div>
    </section>
  );
};

export default MainSection;
