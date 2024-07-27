const HomeMainSection = () => {
  return (
    <header
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/images/home/home-header-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-16">
          <div className="md:ml-20 mb-80 md:mb-0">
            <h1 className="text-4xl md:text-6xl md:text-start font-bold">
              Lleva la gestión de tu entidad deportiva al máximo nivel
            </h1>
            <p className="mt-4 text-lg md:text-2xl md:text-start">
              A través de una herramienta de gestión, una web profesional y tu
              propia app
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4 mx-10 md:mx-0">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
                Empieza tu prueba gratuita
              </button>
              <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full">
                ¿Hablamos?
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end absolute place-self-center bottom-40 md:place-self-end md:bottom-96 lg:bottom-64 lg:right-0">
            <img src="/images/home/home-section.png" alt="Logo" className="w-[50%]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeMainSection;
