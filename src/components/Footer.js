"use client";

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-900 bg-white dark:bg-background py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Captionino. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-foreground">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

