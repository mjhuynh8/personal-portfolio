"use client";

import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="flex gap-8 p-4 text-3xl">
      {links.map(({ href, label }) => {
        return (
          <Link key={href} href={href}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
