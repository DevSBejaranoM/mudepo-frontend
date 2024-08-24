"use client";
import { useRouter } from "next/navigation";

const HomeMainSection = () => {
  const router = useRouter();

  return (
    <header
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/images/home/home-header-bg.jpg')" }}
    >
      <div className="inset-0 bg-black opacity-20 absolute"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="col-span-1 lg:col-span-2 md:ml-20 mb-10 lg:mb-0 content-center">
            <h1 className="text-4xl lg:text-5xl 2xl:text-6xl md:text-start font-bold">
              Gestión integral de tu campeonato, liga y torneos
            </h1>
            <p className="mt-4 text-lg md:text-xl 2xl:text-2xl md:text-start">
              Personaliza tus torneos y ligas con un software en formato app o
              versión web para la gestión de calendarios y resultados en tiempo
              real
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4 mx-10 md:mx-0">
              <button
                className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full"
                onClick={() => router.push("/#contactForm")}
              >
                Empieza tu prueba gratuita
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center lg:justify-end items-center">
            <img
              src="/images/home/mobil.png"
              alt="Logo"
              className="max-w-[80%] h-auto lg:max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeMainSection;
