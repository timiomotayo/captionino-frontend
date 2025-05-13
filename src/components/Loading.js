"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [ isDark, setIsDark ] = useState(false);
  const [ load, setLoad ] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDark(theme === "dark");

    setTimeout(() => {
      setLoad(true)
    }, 1000);
    
  }, []);

  // Get theme from localStorage BEFORE render
//   if (typeof window !== "undefined") {
//     const theme = localStorage.getItem("theme");
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }


  return (
    <>
    {load ? (
      <div className={`flex h-screen w-full items-center justify-center bg-background ${isDark ? "dark" : "light"}`}>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 animate-pulse rounded-full bg-primary/70"></div>
          <h1 className="text-2xl font-bold text-primary">Captionino</h1>
        </div>
    </div>
    ) : (
      <div className="bg-background"></div>
    )}
    </>
  )
}