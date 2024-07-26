import ListCategories from "./components/ListCategories";
import MainSection from "./components/MainSection";

export default function Home() {

  return (
    <div>
      <MainSection image={"/images/header-background.jpg"} title="LANDING POR DESARROLLAR" />
      <section className="mx-auto my-20 p-4 lg:h-auto flex items-center justify-center">
        Landing
      </section>
    </div>
  );
}
