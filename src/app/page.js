"use client";
import { useAuth } from "@/context/AuthContext";
import DashboardPage from './dashboard/page';
import Home from '../components/Home';


export default function LandingPage() {

  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <DashboardPage />
        </>
      ) : (
        <Home />
      )}
    </>
  );
}
