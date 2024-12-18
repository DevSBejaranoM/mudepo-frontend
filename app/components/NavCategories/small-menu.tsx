import { DisclosureButton, DisclosurePanel } from "@headlessui/react";

interface SmallMenuProps {
  setCurrentCategoriesPage: any;
  categoriesPage: string[];
  currentCategoriesPage: string;
  eventName: string;
}

const SmallMenu = ({
  setCurrentCategoriesPage,
  categoriesPage,
  currentCategoriesPage,
  eventName,
}: SmallMenuProps) => {

  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {categoriesPage.map((item, index) =>
          index === 0 ? (
            <DisclosureButton
              key={index}
              as="a"
              href={`/eventos/${eventName}`}
              className={`${
                item === currentCategoriesPage
                  ? "color-primary"
                  : "text-gray-300"
              } block rounded-md px-3 py-2 text-base font-medium cursor-pointer`}
            >
              {item}
            </DisclosureButton>
          ) : (
            <DisclosureButton
              key={index}
              as="span"
              onClick={() => setCurrentCategoriesPage(item)}
              className={`${
                item === currentCategoriesPage
                  ? "color-primary"
                  : "text-gray-300"
              } block rounded-md px-3 py-2 text-base font-medium cursor-pointer`}
            >
              {item}
            </DisclosureButton>
          )
        )}
      </div>
    </DisclosurePanel>
  );
};

export default SmallMenu;
