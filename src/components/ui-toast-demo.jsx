"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

// This is a demo component to show how to use the Toast component
export function ToastDemo() {
  const { toast } = useToast()

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => {
          toast({
            title: "Success",
            description: "Your action was completed successfully.",
            variant: "success",
          })
        }}
      >
        Show Success Toast
      </Button>

      <Button
        variant="destructive"
        onClick={() => {
          toast({
            title: "Error",
            description: "There was a problem with your request.",
            variant: "destructive",
          })
        }}
      >
        Show Error Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Information",
            description: "Here's some information you might find useful.",
            variant: "info",
          })
        }}
      >
        Show Info Toast
      </Button>

      <Button
        variant="secondary"
        onClick={() => {
          toast({
            title: "Warning",
            description: "Please be careful with this action.",
            variant: "warning",
          })
        }}
      >
        Show Warning Toast
      </Button>
    </div>
  )
}

