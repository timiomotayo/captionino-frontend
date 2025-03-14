"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Check, Copy, ImagePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ResultTab({ image, caption, onNewImage, onBack }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(caption)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col h-[400px] overflow-auto short-scrollbar">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <div className="relative aspect-square w-70 max-w-xs overflow-hidden rounded-lg border border-border">
            {image && (
              <Image src={image.url || "/placeholder.svg"} alt="Uploaded image" fill className="object-cover" />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative">
            <Card className="border-border/50">
              <CardContent className="p-4">
                <Button variant="ghost" size="icon" className="absolute right-2 top-2 transition-transform transform hover:scale-97" onClick={handleCopy}>
                  {copied ? <Check className="h-4 w-4 text-foreground" /> : <Copy className="h-4 w-4" />}
                </Button>
                <p className="break-all overflow-hidden mt-4 whitespace-pre-line text-sm font-mono bg-gray-100 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
                  {caption}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between">
        <Button size="sm" variant="outline" onClick={onBack} className="transition-transform transform hover:scale-97">
          Back
        </Button>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Button size="sm" onClick={onNewImage} className="transition-transform transform hover:scale-97">
            <ImagePlus className="mr-2 h-4 w-4" />
            Create New Caption
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
