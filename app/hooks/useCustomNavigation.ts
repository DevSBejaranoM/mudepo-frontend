import { useState } from "react";
import { usePathname } from "next/navigation";
import { NavigationItem } from "../types/navigation";

const UseCustomNavigation = () => {
  const pathname = usePathname();

  const initialNavigation: NavigationItem[] = [
    { name: "Inicio", href: "/", current: pathname === "/" },
    // {
    //   name: "Categorías",
    //   href: "/categories",
    //   current: pathname === "/categories",
    // }
  ];

  const [navigation, setNavigation] = useState<NavigationItem[]>(initialNavigation);

  const setCurrentNavigation = (href: string) => {
    setNavigation((prev) =>
      prev.map((item) => ({
        ...item,
        current: item.href === href,
      }))
    );
  };

  return { navigation, setCurrentNavigation };
};

export default UseCustomNavigation;
