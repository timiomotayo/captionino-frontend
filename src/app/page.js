"use client";
import Auth from './auth/page';
import { useAuth } from "@/context/AuthContext";
import Dashboard from './dashboard/page';
import Home from './home/page';


export default function LandingPage() {

  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <Dashboard />
        </>
      ) : (
        <Home />
      )}
    </>
  );
}
