import { useEffect } from "react";

interface MenuProps {
  updateCurrentCategoriesPage: any;
  categoriesPage: string[];
  currentCategoriesPage: string;
}

const Menu = ({ updateCurrentCategoriesPage, categoriesPage, currentCategoriesPage }: MenuProps) => {
  useEffect(() => {
    console.log("categoriesPage", currentCategoriesPage);
  }, [currentCategoriesPage]);
  
  return (
    <div className="flex flex-1 items-center justify-center sm:justify-start">
      <div className="hidden sm:block w-full">
        <div className="flex space-x-4 justify-center">
          {categoriesPage.map((item, index) => (
            <span
              key={index}
              onClick={() => updateCurrentCategoriesPage(item)}
              className={`${
                item === currentCategoriesPage
                  ? "text-black"
                  : "text-gray-300 hover:bg-gray-200 hover:text-black"
              } rounded-md px-3 py-2 text-sm font-medium cursor-pointer`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
