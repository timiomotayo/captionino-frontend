"use client";
import React from 'react';
import NavBar from '@/components/NavBar';
import { useAuth } from '@/context/AuthContext';
import Auth from '../auth/page';


export default function Profile() {
  const { user } = useAuth();
  
  
  const formatTime = (utcTime) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return new Date(utcTime).toLocaleString("en-US", { timeZone: userTimeZone });
  };
  
  return (
    <>
      {user ? (
        <>
        <div className='profile-container'>
          <NavBar />
          <div className='profile-div1'>
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
