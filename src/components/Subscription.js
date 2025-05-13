"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, AlertCircle, Zap, CreditCard, X, Delete, Sparkles, ImageIcon } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Progress } from "@/components/ui/progress"
import { ToastAction } from "@/components/ui/toast"
import { formatCurrency } from "@/utils/formatCurrency";

export default function SubscriptionContent({ subscriptionData }) {
  const { toast } = useToast()
  const [isCancelLoading, setIsCancelLoading] = useState(false)
  const [isSubscribeLoading, setIsSubscribeLoading] = useState(false)
  const subscribeRef = useRef(null);

  const scrollToSubscribe = () => {
    const subscribeButton = document.getElementById('subscribeButton');
    window.scrollTo({
      top: subscribeButton.offsetTop - 0,
      behavior: 'smooth'
    });
  };

  let SUBSCRIPTION_PRICE = process.env.NEXT_PUBLIC_SUBSCRIPTION_PRICE

  const handleSubscribe = () => {
    setIsSubscribeLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubscribeLoading(false)
      toast({
        title: "Success",
        description: "Subscription was Successful.",
        variant: "success",
      })
    }, 1500)
  }

  const handleCancelSubscription = () => {
    toast({
      title: "Cancel Subscription?",
      description: "Are you sure you want to cancel your subscription?",
      action: (
        <div className="flex gap-2 mt-3">
          <ToastAction
            altText="Confirm cancel"
            onClick={() => {
              proceedCancel()
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
          >
            Yes
          </ToastAction>
          <ToastAction
            altText="Dismiss"
            onClick={() => {
              // No action needed — will dismiss automatically
            }}
            className="bg-gray-200 hover:bg-gray-300 text-black px-3 py-1 rounded"
          >
            No
          </ToastAction>
        </div>
      ),
      // duration: Infinity,
      duration: Number.POSITIVE_INFINITY,
      className: "bg-secondary dark:bg-slate-900 text-text", // Customize toast background here
    })
  }

  const proceedCancel = () => {
    setIsCancelLoading(true)

    setTimeout(() => {
      setIsCancelLoading(false)
      toast({
        title: "Done",
        description: "Subscription canceled successfully.",
        variant: "info",
      })
    }, 1500)
  }

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
          <CardTitle className="flex items-center gap-2 text-text">
            Your Subscription Status
            {/* {subscriptionData.subscriptionStatus && (
                  <Badge variant="premium" className="ml-2 border-2 border-amber-100">
                    <Crown className="mr-1 h-3 w-3 text-amber-600" /> Pro
                  </Badge>
                )} */}
            {subscriptionData.subscriptionStatus === "ACTIVE" ? (
              <Badge
                variant="success"
                className="ml-2 border-2 border-amber-100 bg-green-600 dark:bg-green-900 text-white pointer-events-none"
              >
                Active
              </Badge>
            ) : subscriptionData.subscriptionStatus === "FREE" ? (
              <Badge variant="secondary" className="ml-2 border-2 border-amber-100 pointer-events-none">
                Free Plan
              </Badge>
            ) : subscriptionData.subscriptionStatus === "PENDING" ? (
              <Badge
                variant="warning"
                className="ml-2 border-2 border-amber-100 bg-yellow-500 text-white pointer-events-none"
              >
                Pending
              </Badge>
            ) : (
              <Badge
                variant="destructive"
                className="ml-2 border-2 border-amber-100 bg-red-600 text-white pointer-events-none"
              >
                Expired
              </Badge>
            )}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            {subscriptionData.subscriptionStatus === "ACTIVE"
              ? `Your subscription is active until ${new Date(subscriptionData.subscriptionEndsAt).toLocaleDateString()}`
              : "You are currently on free plan"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {subscriptionData.subscriptionStatus === "ACTIVE" ? (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Captions used today</span>
                  <span className="font-medium">
                    {subscriptionData.captionsToday}/{subscriptionData.captionsLimit}
                  </span>
                </div>
                <Progress
                  value={(subscriptionData.captionsToday / subscriptionData.captionsLimit) * 100}
                  className="h-2"
                />
              </div>
              <p className="text-sm">
                Your Pro subscription includes up to {subscriptionData.captionsLimit} captions per day.
              </p>
              {/* Cancel */}
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="bg-primary mx-auto text-white hover:text-gray-900 dark:hover:text-text :hover:bg-background"
                  onClick={handleCancelSubscription}
                  disabled={isCancelLoading}
                >
                  {isCancelLoading ? (
                    <>
                      <svg
                        className="mr-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      {/* <Delete className="mr-2 h-5 w-5" />   */}
                      <X className="mr-2 w-5 h-5" />
                      Cancel Subscription
                    </>
                  )}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                <p className="text-sm font-medium">
                  You have {subscriptionData?.freeTrialsRemaining} out of {subscriptionData.totalFreeTrials} free
                  captions remaining
                </p>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Free trials remaining</span>
                  <span className="font-medium">
                    {subscriptionData.freeTrialsRemaining}/{subscriptionData.totalFreeTrials}
                  </span>
                </div>
                <Progress
                  value={(subscriptionData.freeTrialsRemaining / subscriptionData.totalFreeTrials) * 100}
                  className="h-2"
                />
              </div>

              {/* Advert */}
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <p className="text-amber-800 dark:text-amber-200 text-sm flex items-center">
                  <Zap className="h-4 w-4 mr-2" />
                  You have {subscriptionData.freeTrialsRemaining} free caption generations left. <a id="subscribeButton" onClick={scrollToSubscribe} className="cursor-pointer hover:text-primary dark:hover:text-foreground underline-offset-2 hover:underline ml-1 px-1"> Subscribe </a> to get
                  unlimited access!
                </p>
              </div>
            </div>
          )}
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
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Unlimited caption generation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Up to {subscriptionData.captionsLimit} captions per day</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Multiple caption styles</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Custom instructions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Cancel anytime</span>
              </li>
            </ul>

            <Button
              className="w-full gap-2"
              onClick={handleSubscribe}
              disabled={isSubscribeLoading || subscriptionData.subscriptionStatus === "ACTIVE"}
            >
              {isSubscribeLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : subscriptionData.subscriptionStatus === "ACTIVE" ? (
                <>
                  <Check className="h-4 w-4" />
                  Currently Subscribed
                </>
              ) : (
                <>
                  {/* <Zap className="h-4 w-4" /> */}
                  <CreditCard ref={subscribeRef} className="mr-1 h-5 w-5" />
                  Subscribe Now
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* FAQ Section */}
      <div className="space-y-6 mt-12">
        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border border-gray-200 dark:border-gray-900">
            <CardHeader>
              <CardTitle className="text-lg">What happens after my free trials?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                After using your {subscriptionData.totalFreeTrials} free captions, you'll need to subscribe to continue generating captions. Your
                generated captions will remain accessible.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-200 dark:border-gray-900">
            <CardHeader>
              <CardTitle className="text-lg">Can I cancel my subscription?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your
                billing period.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-200 dark:border-gray-900">
            <CardHeader>
              <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                We accept all major credit cards, PayPal, and Apple Pay for subscription payments.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-200 dark:border-gray-900">
            <CardHeader>
              <CardTitle className="text-lg">What's the daily caption limit?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Pro subscribers can generate up to {subscriptionData.captionsLimit} captions per day. This limit resets
                at midnight UTC.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
