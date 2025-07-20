'use client'

import { Button } from '@/components/Button'
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from '@/context/ThemeContext'

export default function NotFound() {

  const {theme} = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-background flex flex-col bg-[url('/background_auth_dark.png')] dark:bg-[url('/background_auth.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
            <Card className="border-gray-200 dark:bg-gray-900 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="p-6 flex flex-col items-center justify-center text-center">
                  <h1 className="text-7xl mt-3 mb-3 font-mono font-bold text-gray-700 dark:text-text">404</h1>
                  <h1 className="text-2xl mt-3 mb-3 font-mono font-semibold text-gray-900 dark:text-blue-200">
                    Page not found
                  </h1>
                  <p className="mt-3 mb-3 text-md font-mono text-gray-700 dark:text-text">
                    {`Sorry, we couldn’t find the page you’re looking for.`}
                  </p>
                  <Button href="/" className="m-3" color={theme === 'dark' ? 'white' : 'slate'}>
                    Go back home
                  </Button>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
