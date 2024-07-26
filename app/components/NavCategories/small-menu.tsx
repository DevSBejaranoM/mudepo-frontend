import { DisclosureButton, DisclosurePanel } from "@headlessui/react";

interface SmallMenuProps {
  updateCurrentCategoriesPage: any;
  categoriesPage: string[];
  currentCategoriesPage: string;
}

const SmallMenu = ({updateCurrentCategoriesPage, categoriesPage, currentCategoriesPage}: SmallMenuProps) => {

  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {categoriesPage.map((item, index) => (
          <DisclosureButton
            key={index}
            as="span"
            onClick={() => updateCurrentCategoriesPage(item)}
            className={`${
              item === currentCategoriesPage
                ? "text-black"
                : "text-gray-300 hover:bg-gray-200 hover:text-black"
            } block rounded-md px-3 py-2 text-base font-medium cursor-pointer`}
          >
            {item}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  );
};

export default SmallMenu;
