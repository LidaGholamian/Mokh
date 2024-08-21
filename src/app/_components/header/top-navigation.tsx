"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <ul className="flex gap-x-8 mr-24">
        <li className="text-primary font-bold">موضوعات</li>
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
    </>
  );
};
