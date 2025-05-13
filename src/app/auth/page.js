"use client";
import { useAuth } from "@/context/AuthContext";
import AuthPage from "@/components/Auth";
import DashboardPage from "../dashboard/page";

export default function Auth() {
  const { user } = useAuth();
  
  return (
    <>
    {user ? (
      <DashboardPage />
    ): (
      <AuthPage />
    )}
    </>
  )
}
