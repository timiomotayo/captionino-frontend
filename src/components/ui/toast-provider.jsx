"use client"

import { createContext, useContext, useState } from "react"
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider as Provider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

const ToastContext = createContext({
  toast: () => {},
  dismiss: () => {},
  dismissAll: () => {},
})

export const useToast = () => {
  return useContext(ToastContext)
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description, variant = "default", duration = 5000, action }) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = {
      id,
      title,
      description,
      variant,
      action,
    }

    setToasts((prevToasts) => [...prevToasts, newToast])

    if (duration) {
      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
      }, duration)
    }

    return id
  }

  const dismiss = (toastId) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId))
  }

  const dismissAll = () => {
    setToasts([])
  }

  return (
    <ToastContext.Provider value={{ toast, dismiss, dismissAll }}>
      <Provider>
        {children}
        {toasts.map(({ id, title, description, variant, action }) => (
          <Toast key={id} variant={variant} onOpenChange={() => dismiss(id)}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action && <ToastAction altText="Action">{action}</ToastAction>}
            <ToastClose />
          </Toast>
        ))}
        <ToastViewport />
      </Provider>
    </ToastContext.Provider>
  )
}

