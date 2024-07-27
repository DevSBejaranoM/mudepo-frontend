import CategoryContent from "@/app/components/CategoryContent";
import MainSection from "@/app/components/MainSection";
import NavCategories from "@/app/components/NavCategories";

interface Category {
  id: string;
}

const fetchCategory = async (id: string): Promise<Category | null> => {
  return { id };
};

const CategoryPage = async ({ params }: { params: { id: string } }) => {
  const category = await fetchCategory(params.id);

  if (!category) {
    return <div className="text-center mt-10">Categoría no encontrada</div>;
  }

  const renderSubtitle = () => {
    let title = "FÚTBOL";
    const catSplit = category.id.split("_");
    title += catSplit[0] === "once" ? " 11 -" : " 7 -";
    title += " " + catSplit[1].toUpperCase();
    title += " " + catSplit[2];
    title += " " + catSplit[3];
    return title;
  }

  return (
    <div>
      <MainSection image={"/images/header-background.jpg"} title={renderSubtitle()} />
      <NavCategories />
      <section className="mx-auto my-20 p-4 lg:h-auto items-center justify-center">
        <CategoryContent categoryId={category.id} />
      </section>
    </div>
  );
};
export default CategoryPage;
