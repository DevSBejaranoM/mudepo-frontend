import ListCategories from "../components/ListCategories";
import MainSection from "../components/MainSection";

export const CategoriesPage = () => {
  const categories = [
    {
      title: "FÚTBOL 11",
      subtitle: "Veteranos 36",
      image: "/images/categories/liga1.jpg",
      competitions: [
        {
          title: "FÚTBOl 11 - VETERANOS 36 - 2023",
          slug: "once_veteranos_36_2023",
        },
        {
          title: "FÚTBOl 11 - VETERANOS 36 - 2022",
          slug: "once_veteranos_36_2022",
        },
        {
          title: "FÚTBOl 11 - VETERANOS 36 - 2021",
          slug: "once_veteranos_36_2021",
        },
      ],
    },
    {
      title: "FÚTBOL 11",
      subtitle: "Veteranos 45",
      image: "/images/categories/liga2.jpg",
      competitions: [
        {
          title: "FÚTBOl 11 - VETERANOS 45 - 2023",
          slug: "once_veteranos_45_2023",
        }
      ],
    },
    {
      title: "FÚTBOL 11",
      subtitle: "Veteranos 27",
      image: "/images/categories/liga3.jpg",
      competitions: [],
    },
    {
      title: "FÚTBOL 7",
      subtitle: "18 años",
      image: "/images/categories/liga4.jpg",
      competitions: [
        {
          title: "FÚTBOl 7 - 18 AÑOS - 2023",
          slug: "siete_18_2023",
        },
        {
          title: "FÚTBOl 7 - 18 AÑOS - 2022",
          slug: "siete_18_2022",
        },
      ],
    },
    {
      title: "FÚTBOL 7",
      subtitle: "30 años",
      image: "/images/categories/liga5.jpg",
      competitions: [
        {
          title: "FÚTBOl 7 - 30 AÑOS - 2023",
          slug: "siete_30_2023",
        },
        {
          title: "FÚTBOl 7 - 30 AÑOS - 2022",
          slug: "siete_30_2022",
        },
        {
          title: "FÚTBOl 7 - 30 AÑOS - 2021",
          slug: "siete_30_2021",
        },
      ],
    },
  ];

  return (
    <div>
      <MainSection title="CATEGORÍAS" image={"/images/header-background.jpg"} />
      <section className="mx-auto my-20 p-4 lg:h-auto flex items-center justify-center">
        <ListCategories categories={categories} />
      </section>
    </div>
  );
};

export default CategoriesPage;
