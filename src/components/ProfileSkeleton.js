import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { Camera, User, Bell, History, Save } from "lucide-react"

export default function ProfileSkeleton() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <Card className="p-6 border border-gray-200 dark:border-gray-900">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="relative">
            <Skeleton className="h-24 w-24 rounded-full" />
            <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
              <Camera className="h-4 w-4" />
            </div>
          </div>

          <div className="space-y-2 text-center md:text-left">
            <Skeleton className="h-8 w-48 rounded-md" />
            <Skeleton className="h-4 w-32 rounded-md" />
            <Skeleton className="h-4 w-64 rounded-md" />
            <Skeleton className="h-3 w-40 rounded-md" />
          </div>
        </div>
      </Card>

      <Tabs defaultValue="general">
        <TabsList className="border border-gray-200 dark:border-gray-900 grid w-full grid-cols-4 md:w-auto md:inline-flex bg-secondary">
          <TabsTrigger value="general" className="data-[state=active]:bg-profile">
            <User className="mr-2 h-4 w-4 md:inline-block hidden" />
            General
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-profile">
            <Bell className="mr-2 h-4 w-4 md:inline-block hidden" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-profile">
            <History className="mr-2 h-4 w-4 md:inline-block hidden" />
            Activity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <Card className="border border-gray-200 dark:border-gray-900">
            <CardHeader>
              <CardTitle className="text-text">General Information</CardTitle>
              <CardDescription className="text-gray-800 dark:text-gray-400">
                Update your profile information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-text" htmlFor="name">
                      First Name
                    </Label>
                    <Skeleton className="h-10 w-full rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-text" htmlFor="username">
                      Last Name
                    </Label>
                    <Skeleton className="h-10 w-full rounded-md" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-text" htmlFor="email">
                    Email
                  </Label>
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button size="sm" disabled className="rounded-xl">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card className="border border-gray-200 dark:border-gray-900">
            <CardHeader>
              <CardTitle className="text-text">Notification Preferences</CardTitle>
              <CardDescription className="text-gray-800 dark:text-gray-400">
                Manage how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item}>
                    <div className="flex items-center justify-between">
                      <div>
                        <Skeleton className="h-5 w-40 rounded-md mb-1" />
                        <Skeleton className="h-4 w-60 rounded-md" />
                      </div>
                      <Skeleton className="h-6 w-11 rounded-full" />
                    </div>
                    {item < 3 && <Separator className="my-4 bg-gray-200 dark:bg-gray-900" />}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button size="sm" disabled className="rounded-xl">
                <Save className="mr-2 h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <Card className="border border-gray-200 dark:border-gray-900">
            <CardHeader>
              <CardTitle className="text-text">Recent Activity</CardTitle>
              <CardDescription className="text-gray-800 dark:text-gray-400">
                Your recent caption generation history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-start space-x-4">
                    <Skeleton className="h-12 w-12 rounded-md" />
                    <div className="flex-1 space-y-1">
                      <Skeleton className="h-5 w-40 rounded-md" />
                      <Skeleton className="h-4 w-60 rounded-md" />
                      <Skeleton className="h-4 w-24 rounded-md" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                className="border border-gray-200 dark:border-gray-900 rounded-xl"
                size="sm"
                variant="outline"
                disabled
              >
                View All Activity
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
