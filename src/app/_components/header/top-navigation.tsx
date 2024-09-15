"use client";

import { NavigationMenuItem } from "@/types/navigation-menu-item.type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropDown } from "./dropdown";

const menuItems: NavigationMenuItem[] = [
  {
    title: "درباره ما",
    href: "/aboutus",
  },
  {
    title: "تماس با ما",
    href: "/contactus",
  },
  {
    title: "سئوالات متداول",
    href: "/faq",
  },
];

export const TopNavigation: React.FC = () => {
  const pathName = usePathname();

  return (
    <>
      <div className="flex justify-center items-center mr-12">
        <DropDown />
        <ul className="flex gap-x-8 mr-4">
          {menuItems.map((item) => {
            const isActive = pathName === item.href;
            return (
              <li
                key={`navigation-${item.href}`}
                className="text-primary font-bold hover:pointer-events-auto"
              >
                <Link
                  className={`hover:text-secondary transition-colors pb-2 ${
                    isActive && " border-primary/30"
                  } `}
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
