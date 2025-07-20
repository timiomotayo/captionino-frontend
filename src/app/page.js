"use client";
import { useAuth } from "@/context/AuthContext";
import DashboardPage from './dashboard/page';
// import Home from '../components/Home';
import HomePage from "@/components/HomePage";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";


export default function LandingPage() {

  const { user } = useAuth();

  const [loading, setLoading] = useState(true)
    
      useEffect(() => {
      
        setTimeout(() => {
          setLoading(false)
        }, 2500)
      }, [])
      
      if (loading) {
        return (
          <Loading />
        )
      }

  return (
    <>
      {user ? (
        <>
          <DashboardPage />
        </>
      ) : (
        // <Home />
        <HomePage />
      )}
    </>
  );
}
