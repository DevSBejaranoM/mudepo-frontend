"use client";

import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Menu from "./menu";
import SmallMenu from "./small-menu";
import Link from "next/link";
import UseCustomNavigation from "@/app/hooks/useCustomNavigation";

const Navbar = () => {
  const { navigation, setCurrentNavigation } = UseCustomNavigation();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }:any) => (
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
              <Menu
                navigation={navigation}
                setCurrentNavigation={setCurrentNavigation}
              />
              <Link
                href={"/login"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
          {/* Small menu */}
          <SmallMenu
            navigation={navigation}
            setCurrentNavigation={setCurrentNavigation}
          />
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
