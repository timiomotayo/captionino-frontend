"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { useTheme } from "@/context/ThemeContext"

export default function NavbarSkeleton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="border-b border-gray-200 dark:border-gray-900 bg-white dark:bg-background shadow-sm shadow-sm fixed top-0 left-0 w-full z-50 bg-white dark:bg-background">
      <div className="container mx-auto flex h-12 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div initial={{ rotate: -10 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg text-primary-foreground transition-transform transform hover:scale-97">
              <img src="/favicon-pink.png" alt="App logo pink" />
            </div>
          </motion.div>
        </Link>

        {/* Center Navigation - Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-sm font-medium text-text hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm font-medium text-text hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm font-medium text-text hover:text-primary">
                Contact/Support
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        {/* <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="px-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[180px] sm:w-[150px] bg-white dark:bg-background">
            Mobile menu content would be here, but we don't need it for the skeleton
          </SheetContent>
        </Sheet> */}

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Subscription button skeleton */}
          <Skeleton className="h-9 w-24 rounded-md" />

          {/* Login/Logout button skeleton */}
          <Skeleton className="h-9 w-20 rounded-md" />

          {/* Avatar skeleton */}
          <Skeleton className="h-9 w-9 rounded-full" />

          {/* Theme Toggle Button - Always visible and functional */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile-only skeleton */}
        <div className="flex md:hidden items-center">
          <Skeleton className="h-9 w-9 rounded-md mr-2" />
        </div>
      </div>
    </header>
  )
}
