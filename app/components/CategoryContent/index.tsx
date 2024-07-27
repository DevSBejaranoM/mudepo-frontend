"use client";
import { useCategoryStore } from "@/app/store/useCategoryStore";
import Teams from "./Teams";
import Classification from "./Classification";
import Statistics from "./Statistics";
import Calendar from "./Calendar";

interface CategoryContentProps {
  categoryId: string;
}

const CategoryContent = ({ categoryId }: CategoryContentProps) => {
  const category = useCategoryStore((state) => state.category);

  return (
    <div className="flex-col">
      <div>
        <h1 className="text-5xl font-bold text-center">{category}</h1>
        <h2 className="text-2xl md:text-3xl text-center mt-4 text-gray-400 font-semibold">
          {categoryId}
        </h2>
      </div>
      {category === "EQUIPOS" && <Teams />}
      {category === "CLASIFICACIÓN" && <Classification />}
      {category === "CALENDARIO" && <Calendar />}
      {category === "ESTADÍSTICAS" && <Statistics />}
    </div>
  );
};

export default CategoryContent;
