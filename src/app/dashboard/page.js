"use client";

import CaptionDashboard from '@/components/CaptionDashboard';
import { useAuth } from '@/context/AuthContext';

export default function DashboardPage() {

  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <CaptionDashboard />
        </>
      ) : (
        <CaptionDashboard />
      )}
    </>
  );
}
