"use client";

import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Menu from "./menu";
import SmallMenu from "./small-menu";
import UseCustomCategoriesPage from "@/app/hooks/useCustomCategoriesPage";

const NavCategories = () => {
  const { categoriesPage,  updateCurrentCategoriesPage, currentCategoriesPage } = UseCustomCategoriesPage();

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }: any) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              {/* Main menu */}
              <Menu updateCurrentCategoriesPage={updateCurrentCategoriesPage} categoriesPage={categoriesPage} currentCategoriesPage={currentCategoriesPage}/>
            </div>
          </div>
          {/* Small menu */}
          <SmallMenu updateCurrentCategoriesPage={updateCurrentCategoriesPage} categoriesPage={categoriesPage} currentCategoriesPage={currentCategoriesPage}/>
        </>
      )}
    </Disclosure>
  );
};

export default NavCategories;
