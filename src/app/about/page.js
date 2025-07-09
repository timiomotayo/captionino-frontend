import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User, Mail, MapPin, ExternalLink } from "lucide-react"

export const metadata = {
  title: "About Captionino - AI Caption Generator | Meet the Developer",
  description: "Learn about Captionino's mission to revolutionize content creation with AI. Meet Timi Omotayo, the developer behind the AI-powered caption generation platform.",
  keywords: "about captionino, AI caption generator developer, Timi Omotayo, AI content creation, caption generator team",
  openGraph: {
    title: "About Captionino - AI Caption Generator | Meet the Developer",
    description: "Learn about Captionino's mission to revolutionize content creation with AI. Meet Timi Omotayo, the developer behind the AI-powered caption generation platform.",
    url: "https://captionino.com/about",
    siteName: "Captionino",
    images: [
      {
        url: "https://captionino.com/developer-image.jpg",
        width: 1200,
        height: 630,
        alt: "Timi Omotayo - Captionino Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Captionino - AI Caption Generator",
    description: "Learn about Captionino's mission to revolutionize content creation with AI. Meet the developer behind the platform.",
    images: ["https://captionino.com/developer-image.jpg"],
    creator: "@captionino",
  },
  alternates: {
    canonical: "https://captionino.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="py-12 md:py-20 pt-20">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-text">
                  About Captionino
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-800 dark:text-gray-400 md:text-xl">
                  The story behind our AI-powered caption generation platform
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text">Our Mission</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  At Captionino, we believe that everyone deserves engaging, high-quality captions for their content
                  without spending hours crafting the perfect words. Our mission is to empower content creators,
                  businesses, and individuals with AI-powered caption generation that saves time and enhances
                  engagement.
                </p>

                <h2 className="text-2xl font-bold text-text">The Technology</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  Captionino uses advanced natural language processing and machine learning algorithms to analyze your
                  images and generate contextually relevant, engaging captions. Our AI has been trained on millions of
                  high-performing social media posts, product descriptions, and creative content to ensure quality and
                  relevance.
                </p>

                <h2 className="text-2xl font-bold text-text">Meet the Developer</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-50 h-40 rounded-full overflow-hidden bg-gray-200">
                    <img
                        src="/developer-image.jpg"
                        alt="Timi Omotayo - Captionino Developer and AI Engineer"
                        className="w-full h-full object-cover"
                        width="160"
                        height="160"
                      />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Timi Omotayo</h3>
                    <p className="text-gray-800 dark:text-gray-400">
                      Timi is a passionate software developer with expertise in AI and web technologies. With a
                      background in Financial Accounting and a love for creative solutions, Timi developed Captionino to
                      solve the common challenge of caption creation that many content creators face.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                        <User className="mr-2 h-4 w-4" />
                        <span>Software Developer</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>Lagos, Nigeria</span>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <Link href="https://github.com/timiomotayo" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </Link>
                      <Link href="https://www.linkedin.com/in/timiomotayo" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </Link>
                      <Link href="mailto:timiomotayo@yahoo.com">
                        <Button variant="ghost" size="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                          <span className="sr-only">Email</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-text">Our Values</h2>
                <ul className="list-circle dark:marker:text-white pl-6 space-y-2">
                  <li>
                    <strong className="inline text-gray-800 dark:text-gray-400">Innovation:</strong> <p className="inline text-gray-800 dark:text-gray-400 font-normal">{"The AI models are continuously improved to provide the best caption generation experience."}</p>
                  </li>
                  <li>
                    <strong className="inline text-gray-800 dark:text-gray-400">Accessibility:</strong> <p className="inline text-gray-800 dark:text-gray-400 font-normal">{"We believe powerful AI tools should be accessible to everyone, not just large corporations."}</p>
                  </li>
                  <li>
                    <strong className="inline text-gray-800 dark:text-gray-400">Quality:</strong> <p className="inline text-gray-800 dark:text-gray-400 font-normal">{"We're committed to generating high-quality, engaging captions that enhance your content."}</p>
                  </li>
                  <li>
                    <strong className="inline text-gray-800 dark:text-gray-400">Privacy:</strong> <p className="inline text-gray-800 dark:text-gray-400 font-normal">{"We respect your data and privacy, ensuring your uploads are secure and protected."}</p>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <Link href="/contact">
                  <Button size="sm" className="rounded-xl transition-transform transform hover:scale-97">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Captionino",
            "description": "Learn about Captionino's mission to revolutionize content creation with AI",
            "url": "https://captionino.com/about",
            "mainEntity": {
              "@type": "Person",
              "name": "Timi Omotayo",
              "jobTitle": "Software Developer",
              "description": "Passionate software developer with expertise in AI and web technologies",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lagos",
                "addressCountry": "Nigeria"
              },
              "sameAs": [
                "https://github.com/timiomotayo",
                "https://www.linkedin.com/in/timiomotayo"
              ]
            }
          })}
        </script>
      </main>

      <Footer />
    </div>
  )
}