"use client"

import { useState } from "react"
import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-background">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-text">Contact & Support</h1>
              <p className="mx-auto max-w-[700px] text-gray-800 dark:text-gray-400 md:text-xl">
                {"Have questions or need assistance? We're here to help."}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text">Get in Touch</h2>
                <p className="text-gray-800 dark:text-gray-400">
                  {"We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions."}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium text-text">Email</h3>
                      <p className="text-gray-800 dark:text-gray-400">captionino@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-800 dark:text-gray-400">+234 (915) 755-1049</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MessageSquare className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium text-text">Live Chat</h3>
                      <p className="text-gray-800 dark:text-gray-400">Available Monday-Friday, 9am-5pm UTC+1</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border border-gray-200 dark:border-gray-900">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription className="text-gray-800 dark:text-gray-400">
                    {"Fill out the form below and we'll get back to you as soon as possible."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 text-green-600 dark:text-green-400">
                      <p>{"Thank you for your message! We'll get back to you soon."}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input className="border border-gray-200 dark:border-gray-900" id="name" name="name" value={formData.name} onChange={handleChange} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          className="border border-gray-200 dark:border-gray-900"
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input className="border border-gray-200 dark:border-gray-900" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          className="border border-gray-200 dark:border-gray-900"
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </form>
                  )}
                </CardContent>
                <CardFooter>
                  {!submitted && (
                    <Button size="sm" type="submit" onClick={handleSubmit} disabled={isSubmitting} className="w-full rounded-xl transition-transform transform hover:scale-97">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="mr-2 h-4 w-4 animate-spin"
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
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-gray-900 p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4 text-text">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-text">How does Captionino work?</h3>
                  <p className="text-gray-800 dark:text-gray-400">
                    Captionino uses advanced AI to analyze your images and generate relevant, engaging captions based on
                    the content and your selected style.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-text">Is my data secure?</h3>
                  <p className="text-gray-800 dark:text-gray-400">
                    Yes, we take data security seriously. Your images are processed securely and not shared with third
                    parties. See our Privacy Policy for more details.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-text">Can I customize the captions?</h3>
                  <p className="text-gray-800 dark:text-gray-400">
                    You can add custom instructions to guide the AI in generating captions that match your specific
                    needs and tone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

