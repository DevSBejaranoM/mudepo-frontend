"use client";
import { useCategoryStore } from "@/app/store/useCategoryStore";
import Teams from "./Teams";
import Classification from "./Classification";
import Statistics from "./Statistics";

interface CategoryContentProps {
  categoryId: string;
}

const CategoryContent = ({ categoryId }: CategoryContentProps) => {
  const category = useCategoryStore((state) => state.category);

  return (
    <div className="flex-col">
      <div>
        <h1 className="text-5xl font-bold text-center">{category}</h1>
        <h2 className="text-2xl text-center mt-4 text-gray-700">
          {categoryId}
        </h2>
      </div>
      {category === "EQUIPOS" && <Teams />}
      {category === "CLASIFICACIÓN" && <Classification />}
      {category === "CALENDARIO" && <></>}
      {category === "ESTADÍSTICAS" && <Statistics />}
    </div>
  );
};

export default CategoryContent;
