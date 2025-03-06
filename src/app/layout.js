import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../styles/styles.css';
import { AuthProvider } from "@/context/AuthContext";

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Captionino",
  description: "Generate engaging captions for your images with AI Caption Generator by Timi Omotayo",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}