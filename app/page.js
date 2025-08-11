"use client";

import { useEffect, useState } from "react";
import NavbarHome from "./components/NavbarHome";
import LoadingBar from "./components/LoadingBar";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2250);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <h1 className="text-4xl font-bold">Marcus Huynh</h1>
      {loading ? (
        <LoadingBar />
      ) : (
        <>
          <NavbarHome />
        </>
      )}
    </div>
  );
}
