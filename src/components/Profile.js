"use client"

import { useState } from "react"
import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Camera, Save, User, Lock, Bell, History, Image } from "lucide-react"
import { useAuth } from "@/context/AuthContext"

export default function ProfilePage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("general")
  const [saving, setSaving] = useState(false)

  function splitFullName(fullName) {
    if (!fullName) {
      return { firstName: null, lastName: null };
    }
  
    const [firstName, ...lastName] = fullName.split(' ');
    return {
      firstName,
      lastName: lastName.join(' ')
    };
  }
  const fullName = user?.user_metadata?.name || "";
  const { firstName, lastName } = splitFullName(fullName);
  
  const [profileData, setProfileData] = useState({
    fullname: fullName,
    username: `${firstName}${lastName}${firstName?.length}${lastName?.length}`,
    firstname: firstName,
    lastname: lastName,
    email: user?.email || "",
    bio: "Software developer who has an aptitude for technology and loves solving problems.",
    // website: "https://timiomotayo.dev",
    location: "Lagos, Nigeria",
    created: user?.created_at,
  })
  
  const formatTime = (utcTime) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return utcTime ? new Date(utcTime).toLocaleString("en-US", { timeZone: userTimeZone }) : null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    setSaving(true)

    setTimeout(() => {
      setSaving(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <Card className="p-6 border border-gray-200 dark:border-gray-900">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative">
                <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage src={user?.user_metadata?.avatar_url ? `${user.user_metadata.avatar_url}?height=96&width=96` : "/default-avatar.jpg?height=96&width=96"} alt="Profile" />

                  {/* <AvatarFallback>TO</AvatarFallback> */}
                </Avatar>
                  <Button size="icon" variant="secondary" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full cursor-default">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2 text-center md:text-left">
                  <h1 className="text-2xl font-bold text-text">{profileData.fullname}</h1>
                  <p className="text-gray-800 dark:text-gray-400">@{profileData.username}</p>
                  <p className="text-sm text-text">{profileData.bio}</p>
                  <p className="text-sm text-gray-800 dark:text-gray-400">{formatTime(profileData.created)}</p>
                </div>
              </div>
            </Card>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="border border-gray-200 dark:border-gray-900 grid w-full grid-cols-4 md:w-auto md:inline-flex bg-secondary">
                <TabsTrigger value="general" className="data-[state=active]:bg-profile cursor">
                  <User className="mr-2 h-4 w-4 md:inline-block hidden" />
                  General
                </TabsTrigger>
                <TabsTrigger value="security" className="data-[state=active]:bg-profile">
                  <Lock className="mr-2 h-4 w-4 md:inline-block hidden" />
                  Security
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
                    <CardDescription className="text-gray-800 dark:text-gray-400">Update your profile information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label className="text-text" htmlFor="name">First Name</Label>
                          <Input className="border border-gray-200 dark:border-gray-900" id="name" name="name" value={profileData.firstname} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-text" htmlFor="username">Last Name</Label>
                          <Input className="border border-gray-200 dark:border-gray-900" id="username" name="username" value={profileData.lastname} onChange={handleChange} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-text" htmlFor="email">Email</Label>
                        <Input className="border border-gray-200 dark:border-gray-900" id="email" name="email" type="email" value={profileData.email} onChange={handleChange} />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-text" htmlFor="bio">Bio</Label>
                        <Textarea className="border border-gray-200 dark:border-gray-900" id="bio" name="bio" value={profileData.bio} onChange={handleChange} rows={3} />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        {/* <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input id="website" name="website" value={profileData.website} onChange={handleChange} />
                        </div> */}
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input className="border border-gray-200 dark:border-gray-900" id="location" name="location" value={profileData.location} onChange={handleChange} />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button size="sm" onClick={handleSave} disabled={saving} className="rounded-xl transition-transform transform hover:scale-97">
                      {saving ? (
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
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="mt-6">
                <Card className="border border-gray-200 dark:border-gray-900">
                  <CardHeader>
                    <CardTitle className="text-text">Security Settings</CardTitle>
                    <CardDescription className="text-gray-800 dark:text-gray-400">Manage your account security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-text" htmlFor="current-password">Current Password</Label>
                      <Input className="border border-gray-200 dark:border-gray-900" id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-text" htmlFor="new-password">New Password</Label>
                      <Input className="border border-gray-200 dark:border-gray-900" id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-text" htmlFor="confirm-password">Confirm New Password</Label>
                      <Input className="border border-gray-200 dark:border-gray-900" id="confirm-password" type="password" />
                    </div>

                    {/* <Separator className="my-4" /> */}

                    {/* <div>
                      <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Add an extra layer of security to your account
                      </p>
                      <Button size="sm" variant="outline" className="mt-4">
                        Enable 2FA
                      </Button>
                    </div> */}
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button size="sm" className="rounded-xl transition-transform transform hover:scale-97">
                      <Save className="mr-2 h-4 w-4" />
                      Update Password
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="mt-6">
                <Card className="border border-gray-200 dark:border-gray-900">
                  <CardHeader>
                    <CardTitle className="text-text">Notification Preferences</CardTitle>
                    <CardDescription className="text-gray-800 dark:text-gray-400">Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-text">Email Notifications</h3>
                          <p className="text-sm text-gray-800 dark:text-gray-400">Receive notifications via email</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" className="peer sr-only" defaultChecked />
                            <div className="h-6 w-11 rounded-full bg-muted peer-checked:bg-primary after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full"></div>
                          </label>
                        </div>
                      </div>

                      <Separator className="bg-gray-200 dark:bg-gray-900" />

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-text">Caption Generation Notifications</h3>
                          <p className="text-sm text-gray-800 dark:text-gray-400">Get notified when your captions are ready</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" className="peer sr-only" defaultChecked />
                            <div className="h-6 w-11 rounded-full bg-muted peer-checked:bg-primary after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full"></div>
                          </label>
                        </div>
                      </div>

                      <Separator className="bg-gray-200 dark:bg-gray-900" />

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-text">Marketing Emails</h3>
                          <p className="text-sm text-gray-800 dark:text-gray-400">Receive updates about new features</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" className="peer sr-only" />
                            <div className="h-6 w-11 rounded-full bg-muted peer-checked:bg-primary after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button size="sm" className="rounded-xl transition-transform transform hover:scale-97">
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
                    <CardDescription className="text-gray-800 dark:text-gray-400">Your recent caption generation history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex items-start space-x-4">
                          <div className="relative h-12 w-12 overflow-hidden rounded-md border border-gray-200 dark:border-gray-900">
                            <Image alt="Caption image" className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="font-medium text-text">Caption Generated</p>
                            <p className="text-sm text-gray-800 dark:text-gray-400">
                              {new Date(Date.now() - item * 24 * 60 * 60 * 1000).toLocaleDateString()} at{" "}
                              {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>
                            <p className="text-sm text-text">Type: {["Social Media", "Product", "Travel", "Food"][item % 4]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button className="border border-gray-200 dark:border-gray-900 rounded-xl transition-transform transform hover:scale-97" size="sm" variant="outline">View All Activity</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
