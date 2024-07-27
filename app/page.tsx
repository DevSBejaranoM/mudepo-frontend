import HomeContent from "./components/HomeContent";
import DownloadSection from "./components/HomeContent/DownloadSection";
import HomeMainSection from "./components/HomeMainSection";

export default function Home() {

  return (
    <div>
      <HomeMainSection />
      <section className="mx-auto mt-10 lg:h-auto flex items-center justify-center">
        <HomeContent  />
      </section>
      <DownloadSection />
    </div>
  );
}
