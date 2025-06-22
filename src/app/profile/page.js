"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { useAuth } from "@/context/AuthContext"
import ProfileSkeleton from "@/components/ProfileSkeleton"
import ProfileContent from "@/components/Profile"

export default function ProfilePage() {
  const { user, backendUser } = useAuth()
  const [profileData, setProfileData] = useState(null)

  function splitFullName(fullName) {
    if (!fullName) {
      return { firstName: null, lastName: null }
    }

    const [firstName, ...lastName] = fullName.split(" ")
    return {
      firstName,
      lastName: lastName.join(" "),
    }
  }

  useEffect(() => {
    if (user && backendUser) {
      const fullName = user.user_metadata?.name ?? ""
      const { firstName, lastName } = splitFullName(fullName)

      setProfileData({
        fullname: fullName,
        username: `${firstName}${lastName}${firstName?.length}${lastName?.length}`,
        firstname: firstName,
        lastname: lastName,
        email: backendUser.email,
        created: backendUser.created,
        captions: backendUser?.captions ?? [],
        // bio: "Software developer who has an aptitude for technology and loves solving problems.",
        // website: "https://captionino.dev",
        // location: "Lagos, Nigeria",
      })
    }
  }, [user, backendUser])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 py-8 pt-20">
        <div className="px-4 md:px-6">
          {profileData ? <ProfileContent profileData={profileData} /> : <ProfileSkeleton />}
        </div>
      </main>

      <Footer />
    </div>
  )
}
