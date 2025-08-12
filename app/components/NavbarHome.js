"use client";

import Link from "next/link";

const links = [
  { href: "/about", label: "about" },
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export default function NavbarHome() {
  return (
    <nav className="flex flex-col items-center gap-12 p-4 text-2xl">
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
