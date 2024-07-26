import { NavigationItem } from "@/app/types/navigation";
import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  navigation: NavigationItem[];
  setCurrentNavigation: (href: string) => void;
}

const Menu = ({ navigation, setCurrentNavigation }: MenuProps) => {
  return (
    <div className="flex flex-1 items-center justify-center sm:justify-start">
      <div className="flex flex-shrink-0 items-center">
        <Link
          href="/"
          onClick={() => setCurrentNavigation("/")}
        >
          <Image width={50} height={50} src={"/images/logo.png"} alt="Our Company" />
        </Link>
      </div>
      <div className="hidden sm:block w-full">
        <div className="flex space-x-4 justify-center">
          {navigation.map((item) => (
            <Link
              aria-current={item.current ? "page" : undefined}
              href={item.href}
              key={item.name}
              onClick={() => setCurrentNavigation(item.href)}
              className={`${
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } rounded-md px-3 py-2 text-sm font-medium`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
