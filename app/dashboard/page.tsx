'use client'

import { useUser } from '@clerk/nextjs';

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold">Welcome, {user?.firstName}!</h1>
      <p className="mt-4">This is your dashboard where you can manage your job postings and applications.</p>
    </main>
  );
}