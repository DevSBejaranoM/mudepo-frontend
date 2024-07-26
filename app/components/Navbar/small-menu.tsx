import { NavigationItem } from "@/app/types/navigation";
import { DisclosureButton, DisclosurePanel } from "@headlessui/react";

interface SmallMenuProps {
  navigation: NavigationItem[];
  setCurrentNavigation: (href: string) => void;
}

const SmallMenu = ({navigation, setCurrentNavigation}: SmallMenuProps) => {

  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            onClick={() => setCurrentNavigation(item.href)}
            className={`${
              item.current
                ? "text-black"
                : "text-gray-300 hover:bg-gray-200 hover:text-black"
            } block rounded-md px-3 py-2 text-base font-medium`}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  );
};

export default SmallMenu;
