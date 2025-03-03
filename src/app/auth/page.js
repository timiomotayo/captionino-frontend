"use client";
import { useAuth } from "@/context/AuthContext";
import Dashboard from "../dashboard/page";
import { MailOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Auth() {
  const { user, signInWithGoogle } = useAuth();
  
  return (
    <>
    {user? (
      <Dashboard />
    ): (
      <div className="auth-container">
      <Button variant="outline" onClick={signInWithGoogle} className="google-btn">
        <MailOpen /> Continue with Google
      </Button>
    </div>
    )}
    </>
  )
}
