"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./NavBar"
import UploadTab from "@/components/UploadTab"
import GenerateTab from "@/components/GenerateTab"
import ResultTab from "@/components/ResultTab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/Footer"

export default function CaptionDashboard() {
  const [activeTab, setActiveTab] = useState("upload")
  const [uploadedImage, setUploadedImage] = useState(null)
  const [generatedCaption, setGeneratedCaption] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleImageUpload = (file) => {
    const imageUrl = URL.createObjectURL(file)
    setUploadedImage({
      file,
      url: imageUrl,
    })
    setActiveTab("generate")
  }

  const handleGenerate = async (captionType, customInstructions) => {
    setIsGenerating(true)

    // Simulate API call
    setTimeout(() => {
      const captions = {
        social:
          "✨ Living my best life one adventure at a time! This moment was pure magic. #blessed #adventure #livinglife",
        product:
          "Introducing our premium product, designed with quality and style in mind. Elevate your everyday experience with this must-have item.",
        travel:
          "Discovered this hidden gem today! The perfect blend of beauty and tranquility. Can't wait to return! #travel #wanderlust",
        food: "Indulged in this culinary masterpiece today. Every bite was a symphony of flavors! #foodie #delicious #yummy",
      }

      const generatedText = captions[captionType] || captions.social
      const customText = customInstructions ? `\n\nCustom touch: ${customInstructions}` : ""

      setGeneratedCaption(generatedText + customText)
      setIsGenerating(false)
      setActiveTab("result")
    }, 2000)
  }

  const resetProcess = () => {
    setUploadedImage(null)
    setGeneratedCaption("")
    setActiveTab("upload")
  }

  const handleBack = () => {
    if (activeTab === "generate") {
      setActiveTab("upload")
    } else if (activeTab === "result") {
      setActiveTab("generate")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-3xl"
        >
          <Card className="border border-gray-200 dark:border-gray-900 bg-card shadow-lg">
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full bg-white dark:bg-background">
                <TabsList className="grid w-full grid-cols-3 bg-muted-foreground/30 dark:bg-muted/60">
                  <TabsTrigger value="upload" className="relative">
                    <span className="flex items-center">
                      <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/30 text-xs font-medium text-text">
                        1
                      </span>
                      Upload
                    </span>
                  </TabsTrigger>
                  <TabsTrigger value="generate" disabled={!uploadedImage} className="relative">
                    <span className="flex items-center">
                      <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/30 text-xs font-medium text-text">
                        2
                      </span>
                      Generate
                    </span>
                  </TabsTrigger>
                  <TabsTrigger value="result" disabled={!generatedCaption} className="relative">
                    <span className="flex items-center">
                      <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/30 text-xs font-medium text-text">
                        3
                      </span>
                      Result
                    </span>
                  </TabsTrigger>
                </TabsList>
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="h-[400px] overflow-auto"
                    >
                      <TabsContent value="upload" className="mt-0">
                        <UploadTab onImageUpload={handleImageUpload} />
                      </TabsContent>
                      <TabsContent value="generate" className="mt-0">
                        <GenerateTab
                          image={uploadedImage}
                          onGenerate={handleGenerate}
                          isGenerating={isGenerating}
                          onBack={handleBack}
                        />
                      </TabsContent>
                      <TabsContent value="result" className="mt-0">
                        <ResultTab
                          image={uploadedImage}
                          caption={generatedCaption}
                          onNewImage={resetProcess}
                          onBack={handleBack}
                        />
                      </TabsContent>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
