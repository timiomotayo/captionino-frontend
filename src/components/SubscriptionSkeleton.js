"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Crown, Zap, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { formatCurrency } from "@/utils/formatCurrency";

export default function SubscriptionSkeleton() {

  let SUBSCRIPTION_PRICE = process.env.NEXT_PUBLIC_SUBSCRIPTION_PRICE



  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-text">Subscription</h1>
        <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl">
          Unlock unlimited caption generation with Captionino Pro
        </p>
      </div>

      {/* Current Subscription Status */}
      <Card className="border-2 dark:border border-amber-100">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle className="flex items-center gap-2 text-text">Your Subscription Status</CardTitle>
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
          <CardDescription className="text-gray-600 dark:text-gray-400">
          </CardDescription>
          <Skeleton className="h-4 w-3/4 rounded-md" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Free trials remaining</span>
                <Skeleton className="h-4 w-16 rounded-md" />
              </div>
              <Skeleton className="h-2 w-full rounded-md" />
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <div className="text-amber-800 dark:text-amber-200 text-sm flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                <Skeleton className="h-4 w-full rounded-md" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Plan */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="overflow-hidden border-2 dark:border border-amber-100">
          <div className="bg-gradient-to-r from-amber-100 to-amber-50 px-6 py-3">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-amber-600" />
              <h3 className="font-bold text-amber-900">Captionino Pro</h3>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="mb-4">
              <p className="text-3xl font-bold">
                {formatCurrency(SUBSCRIPTION_PRICE)}<span className="text-base font-normal text-gray-600 dark:text-gray-400">/month</span>
              </p>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">Billed monthly</p>
            </div>

            <ul className="space-y-3 mb-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <Skeleton className="h-4 w-full rounded-md" />
                </li>
              ))}
            </ul>

            <Button className="w-full gap-2" disabled>
              <CreditCard className="mr-1 h-5 w-5" />
              Subscribe Now
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* FAQ Section */}
      <div className="space-y-6 mt-12">
        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="border border-gray-200 dark:border-gray-900">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Skeleton className="h-5 w-3/4 rounded-md" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full rounded-md mb-2" />
                <Skeleton className="h-4 w-full rounded-md mb-2" />
                <Skeleton className="h-4 w-3/4 rounded-md" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
