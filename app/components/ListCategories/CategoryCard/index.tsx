"use client";
import { useRouter } from "next/navigation";

interface CategoryCardProps {
  category: any;
  index: number | string;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  const router = useRouter();

  const handleNavigate = (slug: string) => {
    if (slug) {
      router.push(`/category/${slug}`);
    }
  };

  return (
    <div
      key={index}
      className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"
    >
      <img
        src={category.image}
        alt="category-image"
        className="w-full h-80 object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg text-center">
        <h1 className="text-2xl font-semibold">{category.title}</h1>
        <div className="border-t border-gray-300 my-1" />
        <p className="text-xl font-semibold">{category.subtitle}</p>
        <div className="flex">
          <button
            onClick={() => handleNavigate(category.competitions[0].slug)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-l-md mt-4 w-[90%]"
          >
            {category.competitions[0].title}
          </button>
          {/**
           * Revisar el select, no se ve bien en mobile, el desplegable se sale del contenedor
           */}
          <select
            className="mt-4 w-[10%] py-2 border cursor-pointer rounded-r-md focus:outline-none focus:ring-2 bg-orange-500 hover:bg-orange-600 border-r-8 border-orange-500 hover:border-orange-600"
            value={""}
            content=""
            onChange={(e) => handleNavigate(e.target.value)}
          >
            <option value="" disabled className="hidden"></option>
            {category.competitions.map((competition: any, index: number) => (
              <option key={index} value={competition.slug}>
                {competition.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
