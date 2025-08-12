"use client";
import { useEffect, useState, useMemo } from "react";

export default function SplashScreen() {
  const [spanStates, setSpanStates] = useState([
    { active: false, fade: false },
    { active: false, fade: false },
  ]);
  const [introHidden, setIntroHidden] = useState(false);

  const spans = useMemo(() => ["Marcus", "Huynh"], []);

  useEffect(() => {
    spans.forEach((_, idx) => {
      setTimeout(() => {
        setSpanStates((prev) =>
          prev.map((span, i) => (i === idx ? { ...span, active: true } : span))
        );
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      spans.forEach((_, idx) => {
        setTimeout(() => {
          setSpanStates((prev) =>
            prev.map((span, i) =>
              i === idx ? { active: false, fade: true } : span
            )
          );
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      setIntroHidden(true);
    }, 2300);
  }, [spans]);

  return (
    <div
      className={`intro fixed z-100 left-0 text-8xl font-bold w-full h-full bg-text transition-all duration-1000 flex items-center justify-center ${
        introHidden ? "top-[-100vh]" : "top-0"
      }`}
    >
      <h1 className="logo-header absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-primary">
        {spans.map((text, idx) => (
          <span key={idx}>
            <span
              className={`logo splash-span ${
                spanStates[idx]?.active ? "active" : ""
              } ${spanStates[idx]?.fade ? "fade" : ""}`}
            >
              {text}
            </span>
            {idx < spans.length - 1 && " "}
          </span>
        ))}
      </h1>
    </div>
  );
}
