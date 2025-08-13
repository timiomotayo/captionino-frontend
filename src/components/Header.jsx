"use client";

import Link from "next/link";
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from "@headlessui/react";
import clsx from "clsx";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { NavLink } from "@/components/NavLink";
import { Logo } from "./Logo";
import { Moon, Sun, Menu, Crown } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

function MobileNavLink({ href, children }) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  );
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-background p-4 text-lg tracking-tight text-text shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        <MobileNavLink href="/">Home</MobileNavLink>
        <MobileNavLink href="/about">About</MobileNavLink>
        <MobileNavLink href="/contact">Contact Support</MobileNavLink>
        <MobileNavLink href="/auth">Sign in</MobileNavLink>

        {/* Theme Toggle Button - Always visible */}
        <Button
          className="self-center"
          variant="ghost"
          size="icon"
          // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 fill-white" />
          ) : (
            <Moon className="h-5 w-5 fill-black" />
          )}
        </Button>
      </PopoverPanel>
    </Popover>
  );
}

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between dark:bg-background">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact Support</NavLink>
            </div>
          </div>

          <div className="flex items-center gap-x-1 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/auth">Sign in</NavLink>
            </div>
            <Button href="/auth" color="pink">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>

            {/* Theme Toggle Button - Always visible */}
            <Button
              variant="ghost"
              size="icon"
              // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="hidden md:inline cursor-pointer transition-transform transform hover:scale-90"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
