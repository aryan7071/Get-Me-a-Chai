"use client"
import React from 'react'
import { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation'



const Dashboard = () => {
   const { data: session, status } = useSession();
  const router = useRouter();

  // ✅ Redirect to login if not logged in
  useEffect(() => {
    if (status === "loading") return; // Wait until session status resolves
    if (!session) {
      router.push("/login");
    }
  }, [session, status, router]);

  // ✅ Show loading state until session is fetched
  if (status === "loading") {
    return <p className="text-center mt-10 text-lg">Loading...</p>;
  }

  // ✅ Prevent dashboard from flashing before redirect
  if (!session) {
    return null;
  }
  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard
