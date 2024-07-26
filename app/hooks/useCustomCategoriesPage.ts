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

  const updateCurrentCategoriesPage = (data: string) => {
    switch (data) {
      case "ESTADÍSTICAS":
        setCurrentCategoriesPage("ESTADÍSTICAS");
      case "CLASIFICACIÓN":
        setCurrentCategoriesPage("CLASIFICACIÓN");
      case "CALENDARIO":
        setCurrentCategoriesPage("CALENDARIO");
      case "EQUIPOS":
        setCurrentCategoriesPage("EQUIPOS");
    }
  };

  return { categoriesPage, updateCurrentCategoriesPage, currentCategoriesPage };
};

export default UseCustomCategoriesPage;
