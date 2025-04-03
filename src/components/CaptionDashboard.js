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
import { useAuth } from "@/context/AuthContext"
import { useToast } from "@/components/ui/use-toast"

export default function CaptionDashboard() {
  const [activeTab, setActiveTab] = useState("upload")
  const [uploadedImage, setUploadedImage] = useState(null)
  const [generatedCaption, setGeneratedCaption] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const { token, user } = useAuth();
  const { toast } = useToast();

  const handleImageUpload = (file) => {
    const imageUrl = URL.createObjectURL(file)
    setUploadedImage({
      file,
      url: imageUrl,
    })
    setActiveTab("generate")
  }

  const handleGenerate = async (captionType, customInstructions) => {
    
    try {
      // Get streaming url and image key (if for streaming) from generate-caption endpoint. 
      const formData = new FormData();
      formData.append('c_image', uploadedImage.file);
      formData.append('c_type', captionType);
      formData.append('c_instruction', customInstructions);
      setIsGenerating(true);
      const res = await fetch("https://dev-captionino-api.onrender.com/caption/generate-caption", {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!user) {
        toast({
          title: "Error!",
          description: "Could not generate caption, please sign in to continue.",
          variant: "destructive",
        })
      } else {
        if (res.status === 401) {
          toast({
            title: "Information!",
            description: "You do not have an active subscription or credits, please subscribe to continue generating captions!",
            variant: "info",
          })
        }
  
        if (res.ok) {

                              // OUTPUT
          // const data = await res.json();
          // setGeneratedCaption(data.caption.c_text || "");
          // setActiveTab("result");
          
                              // STREAMING
          setActiveTab("result");
          const { url, image_key, c_type, has_credits } = await res.json();
          let fullCaption = "";
  
          const source = new EventSource(url);
          source.addEventListener("output", (evt) => {
            setGeneratedCaption((prev) => {
              const updated = prev + evt.data;
              fullCaption = updated;
              return updated;
            });
          });
          source.addEventListener("done", async (evt) => {
            console.log("stream is complete");
            source.close();

            await fetch("https://dev-captionino-api.onrender.com/caption/save-caption", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify({
                image_key: image_key,
                c_text: fullCaption,
                c_type: c_type,
                has_credits: has_credits
              })
            });
          });
        }
      }

    } catch (error) {
      toast({
        title: "Error!",
        description: "Oops, something went wrong!",
        variant: "destructive",
      })
      // console.error('Error generating caption:', error);
    } finally {
      setIsGenerating(false);
    }
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
      <main className="min-h-screen mx-auto px-4 py-8">
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
