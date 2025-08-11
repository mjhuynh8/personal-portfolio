"use client";

// this is purely a utility component to check if the user is on the home page
// if they are, we don't want to show the navbar or footer

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function CheckHome({ children }) {
  const pathname = usePathname();
  const showFootNav = pathname !== "/";

  return (
    <>
      {showFootNav && <Navbar />}
      <main>{children}</main>
      {showFootNav && <Footer />}
    </>
  );
}
