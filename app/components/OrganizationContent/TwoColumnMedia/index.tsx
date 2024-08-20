import React from "react";

interface TwoColumnMediaProps {
  imageUrl: string;
  videoUrl: string;
}

const TwoColumnMedia: React.FC<TwoColumnMediaProps> = ({
  imageUrl,
  videoUrl,
}) => {
  const isYouTubeUrl = (url: string) => {
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return youtubeRegex.test(url);
  };

  return (
    <div className="flex flex-col md:flex-row mb-10">
      <div className="w-full md:w-1/2 p-4 hidden md:block">
        <img
          src={imageUrl}
          alt="Media Image"
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 mt-10">
        {isYouTubeUrl(videoUrl) ? (
          <iframe
            width="100%"
            height="315"
            src={videoUrl.replace("watch?v=", "embed/")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        ) : (
          <video controls className="w-full h-auto">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default TwoColumnMedia;
