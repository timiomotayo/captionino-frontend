import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../styles/styles.css';
import { AuthProvider } from "@/context/AuthContext";
import { Inter } from "next/font/google";
import ThemeProvider from "@/context/ThemeContext";


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
      <html lang="en" suppressHydrationWarning>
        <head>
        <script>
          {`{(function() {
            const theme = localStorage.getItem('theme') || 'light';
            document.documentElement.classList.toggle("dark", theme === "dark");
          })();}`}
        </script>
        </head>
        <body
          className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}