import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../styles/styles.css';
import { AuthProvider } from "@/context/AuthContext";
import { Inter } from "next/font/google";
import ThemeProvider from "@/context/ThemeContext";
// import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

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
  title: "Captionino - AI Caption Generator | Create Perfect Captions for Images",
  description: "Generate engaging, AI-powered captions for your social media posts, product descriptions, and images in seconds. Free AI caption generator tool by Timi Omotayo.",
  keywords: "AI caption generator, social media captions, image captions, caption creator, AI writing tool, content creation, social media marketing",
  robots: "index, follow",
  authors: [{ name: "Timi Omotayo", url: "https://captionino.com" }],
  creator: "Timi Omotayo",
  publisher: "Captionino",
  openGraph: {
    title: "Captionino - AI Caption Generator | Create Perfect Captions for Images",
    description: "Generate engaging, AI-powered captions for your social media posts, product descriptions, and images in seconds. Free AI caption generator tool.",
    url: "https://captionino.com",
    siteName: "Captionino",
    images: [
      {
        url: "https://captionino.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Captionino AI Caption Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Captionino - AI Caption Generator",
    description: "Generate engaging, AI-powered captions for your social media posts and images in seconds.",
    images: ["https://captionino.com/og-image.jpg"],
    creator: "@captionino",
  },
  alternates: {
    canonical: "https://captionino.com",
  },
  verification: {
    google: "hbfAsKdNQKfe52ZSKPH_io-VfJaeRXJ2osvfRGad760",
  },
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
        <link rel="canonical" href="https://captionino.com" />
        <meta name="google-site-verification" content="hbfAsKdNQKfe52ZSKPH_io-VfJaeRXJ2osvfRGad760" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-pink.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon-pink.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Captionino",
            "description": "AI-powered caption generator for social media posts, product descriptions, and images",
            "url": "https://captionino.com",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "author": {
              "@type": "Person",
              "name": "Timi Omotayo",
              "url": "https://captionino.com/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Captionino",
              "url": "https://captionino.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://captionino.com/favicon-pink.png"
              }
            },
            "featureList": [
              "AI-powered caption generation",
              "Multiple caption styles",
              "Social media optimization",
              "Product description generation",
              "Image analysis",
              "Real-time streaming"
            ]
          })}
        </script>
        </head>
        <body
          className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}