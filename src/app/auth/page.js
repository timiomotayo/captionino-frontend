"use client";
import { useAuth } from "@/context/AuthContext";
import AuthPage from "@/components/Auth";
import DashboardPage from "../dashboard/page";

export const metadata = {
  title: "Sign In to Captionino - AI Caption Generator",
  description: "Sign in to your Captionino account to generate AI-powered captions for your images. Access your dashboard and start creating engaging content instantly.",
  keywords: "captionino sign in, AI caption generator login, captionino account, social media caption tool",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Sign In to Captionino - AI Caption Generator",
    description: "Sign in to your Captionino account to generate AI-powered captions for your images.",
    url: "https://captionino.com/auth",
    siteName: "Captionino",
    images: [
      {
        url: "https://captionino.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Captionino Sign In",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign In to Captionino",
    description: "Sign in to your Captionino account to generate AI-powered captions for your images.",
    images: ["https://captionino.com/og-image.jpg"],
    creator: "@captionino",
  },
  alternates: {
    canonical: "https://captionino.com/auth",
  },
};

export default function Auth() {
  const { user } = useAuth();
  
  return (
    <>
    {user ? (
      <DashboardPage />
    ): (
      <AuthPage />
    )}
    </>
  )
}
