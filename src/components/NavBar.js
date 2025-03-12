"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, User, Moon, Sun, Menu } from "lucide-react"
import { useAuth } from "@/context/AuthContext";
// import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/context/ThemeContext";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export default function Navbar() {
  const { user, signOut } = useAuth();
  // const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme();
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 dark:border-gray-900 shadow-sm backdrop-blur-md bg-white dark:bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div initial={{ rotate: -10 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg text-primary-foreground">
            {/* <span className="text-4xl font-bold text-center">n</span> */}
            <img src="/favicon-pink.png"></img>
            </div>
          </motion.div>
          {/* <span className="text-xl font-bold text-foreground">Captionino</span> */}
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-sm text-text font-sans font-medium hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-text font-sans font-medium hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-text font-sans font-medium hover:text-primary">
                Contact/Support
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
       <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="px-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="w-[180px] sm:w-[200px]">
            <SheetTitle></SheetTitle>
            {/* <SheetDescription></SheetDescription> */}
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className="text-sm font-medium text-text hover:text-primary px-2 py-1 rounded-md hover:bg-accent"
                onClick={() => setSheetOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-text hover:text-primary px-2 py-1 rounded-md hover:bg-accent"
                onClick={() => setSheetOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-text hover:text-primary px-2 py-1 rounded-md hover:bg-accent"
                onClick={() => setSheetOpen(false)}
              >
                Contact/Support
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <Avatar className="h-9 w-9 cursor-pointer border-2 border-primary transition-all hover:border-opacity-100">
                <AvatarImage src={user?.user_metadata.avatar_url || "/default-avatar.jpg"} alt="User" />
                {/* <AvatarFallback></AvatarFallback> */}
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem style={{ display:  user?.email ? "flex" : "none"}} asChild>
              <Link href="/profile" className="flex cursor-pointer items-center">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer">
              {theme === "dark" ? (
                <>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark Mode</span>
                </>
              )}
            </DropdownMenuItem> */}
            <DropdownMenuItem onClick={toggleTheme} className="flex cursor-pointer items-center">
              {theme === "dark" ? (
                <>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark Mode</span>
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem style={{ display:  user?.email ? "flex" : "none"}} onClick={signOut} className="flex cursor-pointer items-center text-destructive focus:text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
