'use client'

import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import { SignInButton, useAuth } from '@clerk/nextjs';
import { CheckCircle } from 'lucide-react';

export default function HomePage() {
  const { isSignedIn } = useAuth();
  // const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // useEffect(() => {
  //   if (isMounted && isSignedIn) {
  //     router.push('/dashboard');
  //   }
  // }, [isMounted, isSignedIn, router]);

  // if (!isMounted) {
  //   return null; // Prevent rendering on the server side
  // }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-center items-center h-screen">
        {isSignedIn ? (
          <p>Redirecting to your dashboard...</p>
        ) : (
          <div className="text-center mt-[-40vh]"> {/* Adjust the margin-top to raise the header */}
            <h1 className="text-4xl font-bold mb-6">Bizwise AI - Optimizing hiring operations with AI and business insights</h1>
            <p className="text-xl text-gray-600 mb-8">
              Efficiently manage and track applicants for your job postings
            </p>
              <SignInButton>
              <button className="transition-colors hover:text-foreground/80 bg-blue-500 text-white px-4 py-2 rounded">
                Get Started Free
              </button>
            </SignInButton>
              <p className="text-sm text-gray-500">No credit card required</p>

              <div className="pt-8 flex items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-blue-500 h-5 w-5" />
                  <span className="text-gray-600">AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-blue-500 h-5 w-5" />
                  <span className="text-gray-600">Instant Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-blue-500 h-5 w-5" />
                  <span className="text-gray-600">Free to Try</span>
                </div>
              </div>
          </div>
        )}
      </div>
    </main>
  );
}