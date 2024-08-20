interface InfoImagesSectionProps {
  image1: string;
  image2: string;
  image3: string;
  title1?: string;
  title2?: string;
  title3?: string;
  description1?: string;
  description2?: string;
  description3?: string;
}

const InfoImagesSection = ({
  image1,
  image2,
  image3,
  title1,
  title2,
  title3,
  description1,
  description2,
  description3,
}: InfoImagesSectionProps) => {
  return (
    <div id="team" className="section relative pt-5 pb-8 bg-white">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap flex-row -mx-4 justify-center">
          <div className="flex-shrink max-w-full px-4 w-3/3 sm:w-1/2 md:w-8/12 lg:w-3/4">
            <div
              className="relative overflow-hidden bg-white mb-12 hover-grayscale-0 wow fadeInUpr"
              data-wow-duration="1s"
            >
              <div className="relative overflow-hidden rounded-full h-72 min-w-72 max-w-72 mx-auto shadow-lg">
                <img src={image1} alt="title image" className="h-72 min-w-72 max-w-72" />
              </div>
              {
                title1 && (
                  <div className="pt-6 text-center">
                    <p className="text-lg leading-normal font-bold mb-1">
                      {title1}
                    </p>
                    {
                      description1 && (
                        <p className="text-gray-500 leading-relaxed font-light">
                          {description1}
                        </p>
                      )
                    }
                  </div>
                )
              }
            </div>
          </div>
          <div className="flex-shrink max-w-full px-4 w-3/3 sm:w-1/2 md:w-8/12 lg:w-3/4">
            <div
              className="relative overflow-hidden bg-white mb-12 hover-grayscale-0 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div className="relative overflow-hidden rounded-full h-72 min-w-72 max-w-72 mx-auto shadow-lg">
                <img src={image2} alt="title image" className="h-72 min-w-72 max-w-72"/>
              </div>
              {
                title2 && (
                  <div className="pt-6 text-center">
                    <p className="text-lg leading-normal font-bold mb-1">
                      {title2}
                    </p>
                    {
                      description2 && (
                        <p className="text-gray-500 leading-relaxed font-light">
                          {description2}
                        </p>
                      )
                    }
                  </div>
                )
              }
            </div>
          </div>
          <div className="flex-shrink max-w-full px-4 w-3/3 sm:w-1/2 md:w-8/12 lg:w-3/4">
            <div
              className="relative overflow-hidden bg-white mb-12 hover-grayscale-0 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="relative overflow-hidden rounded-full h-72 min-w-72 max-w-72 mx-auto shadow-lg">
                <img src={image3} alt="title image" className="h-72 min-w-72 max-w-72" />
              </div>
              {
                title3 && (
                  <div className="pt-6 text-center">
                    <p className="text-lg leading-normal font-bold mb-1">
                      {title3}
                    </p>
                    {
                      description3 && (
                        <p className="text-gray-500 leading-relaxed font-light">
                          {description3}
                        </p>
                      )
                    }
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoImagesSection;
