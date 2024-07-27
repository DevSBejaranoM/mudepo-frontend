const OurTeamSection = () => {
  return (
    <div id="team" className="section relative pt-5 pb-8 bg-white">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap flex-row -mx-4 justify-center">
          <div className="flex-shrink max-w-full px-4 w-3/3 sm:w-1/2 md:w-8/12 lg:w-3/4">
            <div
              className="relative overflow-hidden bg-white mb-12 hover-grayscale-0 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="relative overflow-hidden">
                <img src="/images/home/clubes.png" alt="title image" />
              </div>
              {/* <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">
                  Joe Antonio
                </p>
                <p className="text-gray-500 leading-relaxed font-light">
                  Founder CEO
                </p>
              </div> */}
            </div>
          </div>
          <div className="flex-shrink max-w-full px-4 w-3/3 sm:w-1/2 md:w-8/12 lg:w-3/4">
            <div
              className="relative overflow-hidden bg-white mb-12 hover-grayscale-0 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div className="relative overflow-hidden">
                <img src="/images/home/torneos.png" alt="title image" />
              </div>
              {/* <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">
                  Sarah Daeva
                </p>
                <p className="text-gray-500 leading-relaxed font-light">
                  Marketing
                </p>
              </div> */}
            </div>
          </div>
          <div className="flex-shrink max-w-full px-4 w-3/3 sm:w-1/2 md:w-8/12 lg:w-3/4">
            <div
              className="relative overflow-hidden bg-white mb-12 hover-grayscale-0 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="relative overflow-hidden">
                <img src="/images/home/federaciones.png" alt="title image" />
              </div>
              {/* <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">
                  Daniel Emo
                </p>
                <p className="text-gray-500 leading-relaxed font-light">
                  Sales manager
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
