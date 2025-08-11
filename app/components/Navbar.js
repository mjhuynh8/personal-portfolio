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
    <nav className="flex gap-255 p-5 justify-center bg-secondary">
      <div className="flex align-left">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">marcushuynh</span>
        </Link>
      </div>
      <div className="flex align-left gap-8 text-lg">
        {links.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
