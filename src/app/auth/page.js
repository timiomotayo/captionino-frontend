"use client";
import { useAuth } from "@/context/AuthContext";
import Dashboard from "../dashboard/page";
import AuthPage from "@/components/Auth";

export default function Auth() {
  const { user } = useAuth();
  
  return (
    <>
    {user? (
      <Dashboard />
    ): (
      <AuthPage />
    )}
    </>
  )
}
