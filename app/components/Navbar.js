"use client";

import Link from "next/link";

const links = [
  { href: "/about", label: "about" },
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  return (
    <nav className="flex gap-215 p-5 justify-center items-center bg-primary border-b border-secondary">
      <div className="flex align-left">
        <Link href="/" className="logo-link">
          <span>marcus huynh</span>
        </Link>
      </div>
      <div className="flex align-left gap-8 text-lg">
        {links.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <span className="navbar-link">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
