"use client";
// import NavBar from '@/components/NavBar';
import CaptionDashboard from '@/components/CaptionDashboard';
import { useAuth } from '@/context/AuthContext';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

export default function Dashboard() {

  const { user } = useAuth();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  
    setTimeout(() => {
      setLoading(false)
    }, 200)
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
          <div className="min-h-screen bg-background">
            <CaptionDashboard />
          </div>
        </>
      ) : (
        <div className="min-h-screen bg-background">
          <CaptionDashboard />
        </div>
      )}
    </>
  );
}
