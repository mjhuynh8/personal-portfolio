"use client";

import { useEffect, useState } from "react";
import NavbarHome from "./components/NavbarHome";
import SplashScreen from "./components/SplashScreen";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 container-background">
      <SplashScreen />
      <NavbarHome />
    </div>
  );
}
