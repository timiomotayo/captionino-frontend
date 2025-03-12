"use client";
import React from 'react';
import NavBar from '@/components/NavBar';
import { useAuth } from '@/context/AuthContext';
import Auth from '../auth/page';
import Profile from '@/components/Profile';

export default function ProfilePage() {
  const { user } = useAuth();
  
  return (
    <>
      {user ? (
        <>
        <div>
          <Profile />
      </div>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}
