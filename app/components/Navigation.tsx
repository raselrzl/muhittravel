"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Sweden",
    href: "/sweden",
  },
  {
    name: "Russia",
    href: "/russia",
  },
  {
    name: "Cyprus",
    href: "/cyprus",
  },
   {
    name: "Umrah",
    href: "/Umrah",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

type NavigationProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export default function Navigation({
  mobile = false,
  onNavigate,
}: NavigationProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  if (mobile) {
    return (
      <nav className="flex flex-col gap-1">
        {navigationItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center justify-between px-4 py-3.5 text-sm font-medium transition ${
                active
                  ? "bg-blue-500/10 text-blue-400"
                  : "text-zinc-400 hover:bg-white/[0.03] hover:text-white"
              }`}
            >
              <span>{item.name}</span>

              {active && (
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              )}
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="hidden items-center gap-1 md:flex">
      {navigationItems.map((item) => {
        const active = isActive(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative px-4 py-2.5 text-sm font-medium transition ${
              active
                ? "text-blue-400"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {item.name}

            {active && (
              <span className="absolute bottom-0 left-4 right-4 h-px bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}