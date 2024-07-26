import { useState } from "react";

const UseCustomCategoriesPage = () => {
  const initialCategoriesPage: string[] = [
    "EQUIPOS",
    "CLASIFICACIÓN",
    "CALENDARIO",
    "ESTADÍSTICAS",
  ];

  const [categoriesPage, setCategoriesPage] = useState<string[]>(
    initialCategoriesPage
  );
  const [currentCategoriesPage, setCurrentCategoriesPage] =
    useState<string>("EQUIPOS");

  return { categoriesPage, setCurrentCategoriesPage, currentCategoriesPage };
};

export default UseCustomCategoriesPage;
