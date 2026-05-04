"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors } from "@/utils/colors";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Achievements", href: "/achievements" },
  { label: "Awards", href: "/awards" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
];

const NavList = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation">
      <ul className="flex min-w-max items-center gap-4 sm:gap-6 lg:gap-10">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex items-center whitespace-nowrap px-1 py-2 text-sm font-semibold transition-colors sm:text-base"
                style={{
                  color: isActive ? colors.primaryColor : "#0f172a",
                }}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavList;
