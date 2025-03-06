"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Check, Copy, ImagePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ResultTab({ image, caption, onNewImage }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(caption)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-lg border border-border">
          {image && <Image src={image.url || "/placeholder.svg"} alt="Uploaded image" fill className="object-cover" />}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative">
          <Card className="border-border/50">
            <CardContent className="p-4">
              <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
              <p className="mt-4 whitespace-pre-line text-sm">{caption}</p>
            </CardContent>
          </Card>
        </div>

        <motion.div className="mt-4" whileTap={{ scale: 0.97 }}>
          <Button onClick={onNewImage} className="w-full">
            <ImagePlus className="mr-2 h-4 w-4" />
            Create New Caption
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

