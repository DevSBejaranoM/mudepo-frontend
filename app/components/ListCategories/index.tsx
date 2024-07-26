import CategoryCard from "./CategoryCard";

interface ListCategoriesProps {
  categories: any;
}

const ListCategories = ({ categories }: ListCategoriesProps) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category: any, index: number) => (
        <CategoryCard category={category} key={index} index={index}/>
      ))}
    </div>
  );
};

export default ListCategories;
