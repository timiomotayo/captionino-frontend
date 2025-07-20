"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"

export default function AuthPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { user, signInWithGoogle } = useAuth();

  const handleGoogleSignIn = async () => {
    setIsLoading(true)

    try {
        await signInWithGoogle()

    } catch (error) {
      toast({
        title: "Authentication failed",
        description: "There was an error signing in with Google. Please try again.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-background flex flex-col bg-[url('/background_auth_dark.png')] dark:bg-[url('/background_auth.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-gray-200 dark:bg-gray-900 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="p-6 pb-0">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg text-primary-foreground">
                      {/* <span className="text-lg font-bold">C</span> */}
                      <img src="/favicon-pink.png" alt="App logo pink"></img>
                    </div>
                    {/* <span className="text-xl font-bold text-gray-900">Captionino</span> */}
                  </div>

                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome to Captionino</h1>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Sign in to generate perfect captions for your images</p>

                  <Button
                    className="w-full mb-4 flex items-center justify-center gap-2"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Signing in...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 186.69 190.5">
                          <g transform="translate(1184.583 765.171)">
                            <path
                              clipPath="none"
                              mask="none"
                              d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                              fill="#4285f4"
                            />
                            <path
                              clipPath="none"
                              mask="none"
                              d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                              fill="#34a853"
                            />
                            <path
                              clipPath="none"
                              mask="none"
                              d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                              fill="#fbbc05"
                            />
                            <path
                              d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                              fill="#ea4335"
                              clipPath="none"
                              mask="none"
                            />
                          </g>
                        </svg>
                        Continue with Google
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-800 dark:text-gray-300 text-center mb-6">
                    By signing in, you agree to our{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 dark:bg-gray-800/30 p-6 border-t border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src="/default-avatar.jpg"
                        alt="User avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-gray-300 text-sm italic">
                        {"\"Captionino has completely transformed how I create content. The captions are so engaging and save me hours of work.\""}
                      </p>
                      <p className="text-primary dark:text-primary text-sm font-medium mt-2">Hannah Omotayo</p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">Health Content Creator</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

