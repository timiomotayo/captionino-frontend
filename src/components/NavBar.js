"use client"

import { useState, useEffect } from "react"
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
import { LogOut, User, Moon, Sun } from "lucide-react"
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
      // Load theme from localStorage on mount
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "dark") {
          document.documentElement.classList.add("dark")
          setIsDarkMode(true)
        } else {
          document.documentElement.classList.remove("dark")
          setIsDarkMode(false)
        }
      }

    }, [])

    // Toggle theme and save to localStorage
    const toggleDarkMode = () => {
      const newTheme = isDarkMode ? "light" : "dark"
      localStorage.setItem("theme", newTheme) // Save theme preference
      document.documentElement.classList.toggle("dark", newTheme === "dark")
      setIsDarkMode(newTheme === "dark")
    }
  
  return (
    <header className="border-b border-border/40 bg-card/90 backdrop-blur-md outline outline-pink-800">
      <div className="container mx-auto flex h-11 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div initial={{ rotate: -40 }} animate={{ rotate: 0 }} transition={{ duration: 2.5 }}>
            <div className="flex h-8 w-8 items-end justify-center rounded-lg text-primary-foreground">{/** bg-primary */}
              {/* <span className="text-4xl font-bold text-center">n</span> */}
              <img src="/favicon-pink.png"></img>
            </div>
          </motion.div>
          {/* <span className="text-xl font-bold text-foreground">Captionino</span> */}
        </Link>

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
            <DropdownMenuItem onClick={toggleDarkMode} className="flex cursor-pointer items-center">
              {isDarkMode ? (
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
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

