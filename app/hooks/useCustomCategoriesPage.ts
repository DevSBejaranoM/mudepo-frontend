import { useEffect, useState } from "react";
import { useCategoryStore } from "../store/useCategoryStore";

const UseCustomCategoriesPage = () => {
  const setCategory = useCategoryStore((state) => state.setCategory);
  const initialCategoriesPage: string[] = [
    "EQUIPOS",
    "CLASIFICACIÓN",
    "CALENDARIO",
    "ESTADÍSTICAS",
    "RESOLUCIONES"
  ];

  const [categoriesPage, setCategoriesPage] = useState<string[]>(
    initialCategoriesPage
  );
  const [currentCategoriesPage, setCurrentCategoriesPage] =
    useState<string>("EQUIPOS");

    useEffect(() => {
      setCategory(currentCategoriesPage);
    }, [currentCategoriesPage]);

  return { categoriesPage, setCurrentCategoriesPage, currentCategoriesPage };
};

export default UseCustomCategoriesPage;
