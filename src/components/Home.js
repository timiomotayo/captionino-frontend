"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ImageIcon, Sparkles, MessageSquare } from "lucide-react"
import Footer from "./Footer";
import Navbar from "./NavBar";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-arial tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white">
                  Generate Perfect Captions for Your Images
                </h1>
                <p className="max-w-[600px] font-mono text-gray-800 dark:text-gray-400 md:text-xl">
                  Captionino uses AI to create engaging, personalized captions for your social media posts, product
                  descriptions, and more.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="sm" className="w-full gap-1 rounded-xl transition-transform transform hover:scale-97">
                    Get Started For Free <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button size="sm" variant="outline" className="w-full rounded-xl transition-transform transform hover:scale-97">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button size="sm" variant="outline" className="w-full rounded-xl transition-transform transform hover:scale-97">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto w-full max-w-[500px] lg:ml-auto"
            >
              <div className="aspect-video overflow-hidden rounded-xl bg-gray-100 border border-gray-200 shadow-xl transition-transform transform hover:scale-97">
                <img
                  src="/placeholder.svg?height=500&width=800"
                  alt="Captionino dashboard preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 border-t border-gray-100 dark:border-gray-900 dark:bg-muted/30">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900 dark:text-white">Features</h2>
              <p className="max-w-[900px] text-gray-800 dark:text-gray-400 md:text-xl/relaxed">
                Everything you need to create perfect captions for your content
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <div className="flex flex-col items-center space-y-2 p-4 border border-gray-100 dark:border-gray-900 shadow-sm rounded-xl transition-transform transform hover:scale-97">
              <div className="rounded-full bg-primary/10 p-4">
                <ImageIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Easy Upload</h3>
              <p className="text-center text-gray-800 dark:text-gray-400">Drag and drop your images or select from your device</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 border border-gray-100 dark:border-gray-900 shadow-sm rounded-xl transition-transform transform hover:scale-97">
              <div className="rounded-full bg-primary/10 p-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI-Powered</h3>
              <p className="text-center text-gray-800 dark:text-gray-400">
                Advanced AI generates captions tailored to your content
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 border border-gray-100 dark:border-gray-900 shadow-sm rounded-xl transition-transform transform hover:scale-97">
              <div className="rounded-full bg-primary/10 p-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Multiple Styles</h3>
              <p className="text-center text-gray-800 dark:text-gray-400">
                Choose from social media, product description, travel, and food caption styles {/* and extract text from receipt*/}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-background">
        <div className="px-4 md:px-6"> {/**container  */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900 dark:text-white">What Our Users Say</h2>
              <p className="max-w-[900px] text-gray-800 dark:text-gray-400 md:text-xl/relaxed">
                Join thousands of content creators who trust Captionino
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-200 dark:border-gray-900 p-6 shadow-sm bg-white dark:bg-background">
              <div className="space-y-2">
                <p className="text-gray-800 dark:text-gray-400">
                  {"\"Captionino has saved me so much time creating content for my social media. The captions are creative and engaging!\""}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/default-avatar.jpg" alt="User avatar" className="rounded-full bg-gray-200 h-10 w-10"></img>
                <div>
                  <p className="text-sm font-medium text-text">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Social Media Influencer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-200 dark:border-gray-900 p-6 shadow-sm bg-white dark:bg-background">
              <div className="space-y-2">
                <p className="text-gray-800 dark:text-gray-400">
                  {"\"As an e-commerce store owner, the product descriptions generated by Captionino have helped increase our conversion rates.\""}
                </p>
              </div>
              <div className="flex items-center space-x-4">
              <img src="/default-avatar.jpg" alt="User avatar" className="rounded-full bg-gray-200 h-10 w-10"></img>
                <div>
                  <p className="text-sm font-medium text-text">Michael Chen</p>
                  <p className="text-sm text-gray-500">E-commerce Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 border-t border-gray-100 dark:border-gray-900 dark:bg-muted/30">
        <div className="px-4 md:px-6"> {/**container  */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-text">Ready to Get Started?</h2>
              <p className="max-w-[900px] text-gray-800 dark:text-gray-400 md:text-xl/relaxed">
                Create engaging captions for your content in seconds
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href="/dashboard">
                <Button size="sm" className="w-full rounded-xl transition-transform transform hover:scale-97">
                  Try Captionino Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
