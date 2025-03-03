"use client";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Dashboard from "../dashboard/page";

export default function Home() {

  const { user } = useAuth();
  
  return (

    <>
    { user? (
      <Dashboard />
    ) : (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/my_logo-bg.ico"
            alt="app logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started and start generating captions for your images
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                
              </code>
            </li>
            <li>Signup to keep track of your caption history</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/my_logo-bg.ico"
                alt="app logo"
                width={20}
                height={20}
              />
              Get started for free
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/auth"
              target="_blank"
              rel="noopener noreferrer"
            >
              Signup
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            About the Developer
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/terms_of_service"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Terms of Service 
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:timiomotayo@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Contact support →
          </a>
        </footer>
      </div>
    )};
      </>
  );
}
