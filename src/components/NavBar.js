"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, Crown } from "lucide-react"
// import { useTheme } from "next-themes"
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import NavBarSkeleton from "@/components/NavBarSkeleton"

export default function Navbar() {
  // const { theme, setTheme } = useTheme()
  const { user, signOut, backendUser, isLoading } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [sheetOpen, setSheetOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // If not client-side yet or auth is loading, show skeleton
  if (!isClient || isLoading) {
    return <NavBarSkeleton />
  }

  // User subscription
  const subscriptionData = {
    subscriptionStatus: backendUser?.subscription_status,
    freeTrialsRemaining: backendUser?.trials_left,
    totalFreeTrials: process.env.NEXT_PUBLIC_TOTAL_FREE_TRIALS,
  }

  return (
    <header className="border-b border-gray-200 dark:border-gray-900 bg-white dark:bg-background shadow-sm">
      <div className="container mx-auto flex h-12 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div initial={{ rotate: -10 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg text-primary-foreground transition-transform transform hover:scale-97">
              {/* <span className="text-4xl font-bold text-center">n</span> */}
              <img src="/favicon-pink.png" alt="App logo pink"></img>
            </div>
          </motion.div>
          {/* <span className="text-xl font-bold text-foreground">Captionino</span> */}
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
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="px-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[180px] sm:w-[150px] bg-white dark:bg-background">
            <SheetTitle></SheetTitle>
            <nav className="flex flex-col items-center gap-4 mt-8">
              {user ? (
                <>
                  <Link className="h-9 w-9" href="/profile">
                    <Avatar className="h-9 w-9 cursor-pointer border-2 border-primary transition-all hover:border-opacity-100">
                      <AvatarImage src={user?.user_metadata.avatar_url} alt="User Avatar" />
                      <AvatarFallback><img src="/default-avatar.jpg" alt="User Avatar"></img></AvatarFallback>
                    </Avatar>
                  </Link>
                </>
              ) : (
                <></>
              )}
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

              {/* Mobile auth buttons */}
              <div className="flex flex-col gap-2 mt-4 border-t border-gray-100 pt-4">
                {user ? (
                  <>
                    {/* Subscription Button - Mobile */}

                    <Link href="/subscription" className="md:flex">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5 border-amber-200 hover:border-amber-300 hover:bg-amber-50 dark:hover:bg-secondary"
                      >
                        <Crown className="h-4 w-4 text-amber-500" />
                        {subscriptionData.subscriptionStatus === "ACTIVE" || subscriptionData.subscriptionStatus === "CANCELLED"  ? <span>Pro</span> : <span>Upgrade</span>}
                        {subscriptionData.subscriptionStatus !== "ACTIVE" && subscriptionData.freeTrialsRemaining > 0 && (
                          <Badge variant="outline" className="ml-1 text-xs">
                            {subscriptionData.freeTrialsRemaining}/{subscriptionData.totalFreeTrials}
                          </Badge>
                        )}
                      </Button>
                    </Link>

                    {/* Profile */}
                    
                    {/* <Link
                      href="/profile"
                      className="text-sm font-medium text-text hover:text-primary px-2 py-1 rounded-md hover:bg-accent"
                      onClick={() => setSheetOpen(false)}
                    >
                      Profile
                    </Link> */}
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-xl h-8.5 transition-transform transform hover:scale-97"
                      onClick={signOut}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/auth">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="rounded-xl transition-transform transform hover:scale-97"
                        onClick={() => {
                          setSheetOpen(false)
                        }}
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/auth">
                      <Button size="sm" className="h-8.5 px-2 rounded-xl transition-transform transform hover:scale-97" onClick={() => setSheetOpen(false)}>
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
                {/* Theme Toggle Button - Always visible */}
                <Button
                  className="self-center"
                  variant="ghost"
                  size="icon"
                  // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5 fill-white" /> : <Moon className="h-5 w-5 fill-black" />}
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          {user ? (
            <>
              {/* Subscription Button - Desktop */}

              <Link href="/subscription" className="hidden md:flex">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5 border-amber-200 hover:border-amber-300 hover:bg-amber-50 dark:hover:bg-secondary"
                >
                  <Crown className="h-4 w-4 text-amber-500" />
                  {subscriptionData.subscriptionStatus === "ACTIVE" || subscriptionData.subscriptionStatus === "CANCELLED" ? <span>Pro</span> : <span>Upgrade</span>}
                  {subscriptionData.subscriptionStatus !== "ACTIVE" && subscriptionData.freeTrialsRemaining > 0 && (
                    <Badge variant="outline" className="ml-1 text-xs">
                      {subscriptionData.freeTrialsRemaining}/{subscriptionData.totalFreeTrials}
                    </Badge>
                  )}
                </Button>
              </Link>
              <Button size="sm" variant="outline" onClick={signOut} className="rounded-xl transition-transform transform hover:scale-97">
                Logout
              </Button>
              <Link href="/profile">
                <Avatar className="h-9 w-9 cursor-pointer border-2 border-primary transition-all hover:border-opacity-100">
                  <AvatarImage src={user?.user_metadata.avatar_url} alt="User Avatar" />
                  <AvatarFallback><img src="/default-avatar.jpg" alt="User Avatar"></img></AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth">
                <Button size="sm" variant="ghost" className="rounded-xl rounded-xl transition-transform transform hover:scale-97">
                  Login
                </Button>
              </Link>
              <Link href="/auth"><Button size="sm" className=" h-8.5 px-2 rounded-xl transition-transform transform hover:scale-97">Sign Up</Button></Link>
            </>
          )}

          {/* Theme Toggle Button - Always visible */}
          <Button
            variant="ghost"
            size="icon"
            // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
