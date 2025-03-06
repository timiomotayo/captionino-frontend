"use client";
import React from 'react';
import NavBar from '@/components/NavBar';
import { useAuth } from '@/context/AuthContext';
import Auth from '../auth/page';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';


export default function Profile() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true)
  
    useEffect(() => {
    
        setTimeout(() => {
          setLoading(false)
        }, 1500)
      }, [])
    
      if (loading) {
        return (
          <Loading />
        )
      }
  
  
  const formatTime = (utcTime) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return new Date(utcTime).toLocaleString("en-US", { timeZone: userTimeZone });
  };
  
  return (
    <>
      {user ? (
        <>
        <div>
          <NavBar />
          <div className='profile-container'>
            <h2>Profile:</h2>
            <li>Email: {user?.email}</li>
            <li>Joined: {formatTime(user?.created_at)}</li>
          </div>
      </div>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}
