interface MenuProps {
  setCurrentCategoriesPage: any;
  categoriesPage: string[];
  currentCategoriesPage: string;
}

const Menu = ({ setCurrentCategoriesPage, categoriesPage, currentCategoriesPage }: MenuProps) => {
  
  return (
    <div className="flex flex-1 items-center justify-center sm:justify-start">
      <div className="hidden sm:block w-full">
        <div className="flex space-x-4 justify-center">
          {categoriesPage.map((item, index) => (
            <span
              key={index}
              onClick={() => setCurrentCategoriesPage(item)}
              className={`${
                item === currentCategoriesPage
                  ? "color-primary"
                  : "text-gray-300"
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
