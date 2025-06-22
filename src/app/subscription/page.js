"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { useAuth } from "@/context/AuthContext"
import SubscriptionSkeleton from "@/components/SubscriptionSkeleton"
import SubscriptionContent from "@/components/Subscription"


export default function SubscriptionPage() {
  const { user, backendUser } = useAuth()
  const [subscriptionData, setSubscriptionData] = useState(null)

  useEffect(() => {
    if (user && backendUser) {
      setSubscriptionData({
        name: user?.user_metadata?.name,
        email: user?.email,
        subscriptionId: backendUser?.lemonsqueezy_subscription_id,
        subscriptionStatus: backendUser?.subscription_status,
        subscriptionEndsAt: backendUser?.subscription_ends_at,
        freeTrialsRemaining: backendUser?.trials_left ?? "...",
        totalFreeTrials: process.env.NEXT_PUBLIC_TOTAL_FREE_TRIALS,
        captionsToday: backendUser?.daily_usage ?? "...",
        captionsLimit: process.env.NEXT_PUBLIC_CAPTIONS_LIMIT,
      })
    }
  }, [user, backendUser])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 py-12 pt-20">
        <div className="container px-4 md:px-6">
          {subscriptionData ? <SubscriptionContent subscriptionData={subscriptionData} /> : <SubscriptionSkeleton />}
        </div>
      </main>

      <Footer />
    </div>
  )
}
