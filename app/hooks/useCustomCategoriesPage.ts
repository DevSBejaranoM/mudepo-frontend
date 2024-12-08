import { useEffect, useState } from "react";
import { useCategoryStore } from "../store/useCategoryStore";

const UseCustomCategoriesPage = () => {
  const setCategory = useCategoryStore((state) => state.setCategory);
  const initialCategoriesPage: string[] = [
    "INCIO",
    "EQUIPOS",
    "CLASIFICACIÓN",
    "CALENDARIO",
    "ESTADÍSTICAS",
    // "RESOLUCIONES",
    "SANCIONES"
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
