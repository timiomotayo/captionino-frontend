"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Upload, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UploadTab({ onImageUpload }) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onImageUpload(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onImageUpload(e.target.files[0])
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="flex flex-col items-center gap-4 justify-center h-[400px] overflow-auto short-scrollbar">
      <h2 className="text-xl font-semibold text-text">Upload an Image</h2>
      <p className="text-center text-gray-800 dark:text-gray-400 text-sm">Upload an image to generate a caption</p>

      <motion.div
        className={`flex h-52 w-80 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-900 p-4 transition-colors ${
          isDragging ? "border-primary bg-primary/5" : "border-border"
        }`}
        whileHover={{ scale: 1.01 }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleButtonClick}
      >
        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <ImageIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-foreground">Drag and drop your image here</p>
            <p className="mt-1 text-xs text-muted-foreground">or click to browse files</p>
          </div>
          <Button variant="outline" size="sm" className="mt-1">
            <Upload className="mr-2 h-4 w-4" />
            Select Image
          </Button>
        </div>
      </motion.div>

      <p className="text-xs text-muted-foreground">Supported formats: JPG, PNG, GIF (max 5MB)</p>
    </div>
  )
}
