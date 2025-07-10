import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Users, Globe, Shield, Lightbulb, Target, Award, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 pt-20">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {/* <Sparkles className="h-6 w-6 text-primary" /> */}
                    <img src="/favicon-pink.png" alt="App logo pink" className="h-6 w-6 text-primary"></img>
                  </div>
                  <span className="text-2xl font-bold text-primary">NinoApps</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-text">
                  Building AI-Driven, Intuitive Digital Products
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-800 dark:text-gray-400 md:text-xl">
                  NinoApps is an independent software company focused on building intuitive digital products 
                  that solve real-world problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Captionino Section */}
        <section className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-muted/30">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-text">About Captionino</h2>
                <p className="text-gray-800 dark:text-gray-400 max-w-3xl mx-auto">
                  {"Captionino is NinoApps' flagship AI-powered caption generation platform, designed to revolutionize how content creators approach social media engagement and content marketing."}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text">Our Product Vision</h3>
                  <p className="text-gray-800 dark:text-gray-400">
                    We believe that everyone deserves engaging, high-quality captions for their content without spending
                    hours crafting the perfect words. Captionino empowers content creators, businesses, and individuals
                    with AI-powered caption generation that saves time and enhances engagement.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text">Advanced Technology</h3>
                  <p className="text-gray-800 dark:text-gray-400">
                    Built on cutting-edge natural language processing and machine learning algorithms, Captionino
                    analyzes your images and generates contextually relevant, engaging captions trained on millions of
                    high-performing social media posts, product descriptions and creative contents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Mission & Values */}
        <section className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-900">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-text">Our Mission & Values</h2>
                <p className="text-gray-800 dark:text-gray-400 max-w-3xl mx-auto">
                  {"At NinoApps, we're driven by a commitment to innovation, accessibility, and excellence in AI technology."}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="text-center space-y-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
                      <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-text">Innovation</h3>
                  <p className="text-sm text-gray-800 dark:text-gray-400">
                    We continuously push the boundaries of AI technology to deliver cutting-edge solutions that
                    transform how people create and engage with content.
                  </p>
                </div>

                <div className="text-center space-y-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
                      <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-text">Accessibility</h3>
                  <p className="text-sm text-gray-800 dark:text-gray-400">
                    We believe powerful AI tools should be accessible to everyone, from individual creators to large
                    enterprises, democratizing advanced technology.
                  </p>
                </div>

                <div className="text-center space-y-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20">
                      <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-text">Excellence</h3>
                  <p className="text-sm text-gray-800 dark:text-gray-400">
                    {"We're committed to delivering high-quality, reliable AI solutions that exceed expectations and drive real results for our users."}
                  </p>
                </div>

                <div className="text-center space-y-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
                      <Shield className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-text">Privacy & Security</h3>
                  <p className="text-sm text-gray-800 dark:text-gray-400">
                    We prioritize user privacy and data security, ensuring that your content and information are
                    protected with industry-leading security measures.
                  </p>
                </div>

                <div className="text-center space-y-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/20">
                      <Users className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-text">User-Centric</h3>
                  <p className="text-sm text-gray-800 dark:text-gray-400">
                    Every product we build is designed with our users in mind, focusing on intuitive experiences that
                    solve real-world problems.
                  </p>
                </div>

                <div className="text-center space-y-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20">
                      <Target className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-text">Impact</h3>
                  <p className="text-sm text-gray-800 dark:text-gray-400">
                    {"We measure our success by the positive impact our technology has on our users' productivity, creativity, and business outcomes."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Background */}
        <section className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-muted/30">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-text">Our Story</h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-800 dark:text-gray-400 text-lg">
                  Founded with a vision to democratize artificial intelligence, NinoApps emerged from the recognition
                  that powerful AI tools were often limited to large corporations with extensive resources. We set out
                  to change that narrative.
                </p>

                <p className="text-gray-800 dark:text-gray-400">
                  Our journey began with a simple observation: content creators, marketers, and businesses were spending
                  countless hours on tasks that could be automated with intelligent AI. This insight led to the
                  development of Captionino, our first product designed to revolutionize caption generation for social
                  media and marketing content.
                </p>

                <p className="text-gray-800 dark:text-gray-400">
                  Today, NinoApps continues to expand its portfolio of AI-powered solutions, each designed to solve
                  specific challenges faced by modern digital creators and businesses. We remain committed to our
                  founding principles: making advanced AI accessible, reliable, and genuinely useful for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Innovation */}
        <section className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-900">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-text">Technology & Innovation</h2>
                <p className="text-gray-800 dark:text-gray-400 max-w-3xl mx-auto">
                  Our products are built on state-of-the-art AI technologies, combining machine learning, natural
                  language processing, and computer vision to deliver exceptional results.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4 p-6 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                  <h3 className="text-xl font-semibold text-text">Advanced AI Models</h3>
                  <p className="text-gray-800 dark:text-gray-400">
                    Our AI models are trained on diverse, high-quality datasets and continuously refined to ensure
                    accuracy, relevance, and creativity in every output.
                  </p>
                </div>

                <div className="space-y-4 p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/10 dark:to-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-semibold text-text">Scalable Infrastructure</h3>
                  <p className="text-gray-800 dark:text-gray-400">
                    Built on cloud-native architecture, our platform scales seamlessly to handle millions of requests
                    while maintaining fast response times and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-muted/30">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-text">
                Ready to Experience the Future of Content Creation?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-800 dark:text-gray-400 md:text-xl">
                Join thousands of creators and businesses who trust Captionino to enhance their content strategy with
                AI-powered caption generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button size="sm" className="rounded-xl gap-2 transition-transform transform hover:scale-97">
                    Try Captionino Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent border-gray text-muted-foreground-500 hover:bg-gray-300 hover:text-primary dark:hover:text-secondary"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
