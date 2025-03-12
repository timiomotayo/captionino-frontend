"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Wand2, Instagram, ShoppingBag, Plane, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function GenerateTab({ image, onGenerate, isGenerating, onBack }) {
  const [captionType, setCaptionType] = useState("social")
  const [customInstructions, setCustomInstructions] = useState("")

  const handleGenerate = () => {
    onGenerate(captionType, customInstructions)
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
          <div className="space-y-2">
            <Label htmlFor="caption-type">What would you like to generate?</Label>
            <Select value={captionType} onValueChange={setCaptionType}>
              <SelectTrigger id="caption-type">
                <SelectValue placeholder="Select caption type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="social">
                  <div className="flex items-center">
                    <Instagram className="mr-2 h-4 w-4" />
                    <span>Social Media</span>
                  </div>
                </SelectItem>
                <SelectItem value="product">
                  <div className="flex items-center">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    <span>Product Description</span>
                  </div>
                </SelectItem>
                <SelectItem value="travel">
                  <div className="flex items-center">
                    <Plane className="mr-2 h-4 w-4" />
                    <span>Travel</span>
                  </div>
                </SelectItem>
                <SelectItem value="food">
                  <div className="flex items-center">
                    <Utensils className="mr-2 h-4 w-4" />
                    <span>Food</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-instructions">Custom Instructions (Optional)</Label>
            <Textarea
              id="custom-instructions"
              placeholder="Add any specific details or tone you'd like for your caption..."
              value={customInstructions}
              onChange={(e) => setCustomInstructions(e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-between">
        <Button size="sm" variant="outline" onClick={onBack}>
          Back
        </Button>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Button size="sm" onClick={handleGenerate} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <svg
                  className="mr-2 h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Caption
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
