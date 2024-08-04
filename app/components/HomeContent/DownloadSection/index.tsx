const DownloadSection = () => {
  return (
    <div className="relative bg-gradient-to-t from-black to-[#75AB4D] text-white py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="md:w-1/2 flex justify-center md:justify-center">
          <img
            src="/images/home/home-section.png"
            alt="Mudepo App"
            className="w-80 h-auto"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Descárgate nuestra app</h2>
          <p className="mb-8">
            Descárgate la app de Mudepo para estar siempre conectado a tu
            organización deportiva con las últimas publicaciones, notificaciones,
            comentarios, vídeos, fotos, resultados, horarios, noticias, clasificaciones,
            equipos, plantillas ¡y mucho más!
          </p>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/home/google-play-badge.png"
                alt="Disponible en Google Play"
                className="w-44 h-auto"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/home/app-store-badge.png"
                alt="Consíguelo en App Store"
                className="w-40 h-auto"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-primary h-2/3 transform -skew-y-3 -z-10"></div>
    </div>
  );
};

export default DownloadSection;
