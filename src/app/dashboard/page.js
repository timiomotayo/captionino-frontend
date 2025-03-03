"use client";
import NavBar from '@/components/NavBar';
import CaptionGenerator from '@/components/CaptionGenerator';
import { useAuth } from '@/context/AuthContext';

export default function Dashboard() {

  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <div>
            <NavBar />
            <CaptionGenerator />
          </div>
        </>
      ) : (
        <div>
          <NavBar />
          <CaptionGenerator />
        </div>
      )}
    </>
  );
}
