"use client";

import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function NavbarHome() {
  return (
    <nav className="flex flex-col items-center gap-10 p-4 text-2xl">
      {links.map(({ href, label }) => {
        return (
          <Link key={href} href={href}>
            <button className="nav-button">{label}</button>
          </Link>
        );
      })}
    </nav>
  );
}
