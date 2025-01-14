'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useAuth, SignInButton, UserButton } from "@clerk/nextjs";
import { SiAirtel } from "react-icons/si";
import { SettingsModal } from "@/components/SettingsModal"; // Import the SettingsModal component

const secondaryNav = [
  { name: 'Job Listings', href: '/job-listings' },
  { name: 'Applicants', href: '/applicants' },
]

export function Navbar() {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Left side - AI Hiring Manager */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <SiAirtel className="text-blue-500 w-6 h-6" /> 
            <span className="font-bold text-blue-500">
              Bizwise AI
            </span>
          </Link>
        </div>

        {/* Right side - Jobs, Applicants, and Settings or Log In */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {isSignedIn ? (
            <>
              {secondaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === item.href ? "text-foreground" : "text-muted-foreground"
                  )}>
                  {item.name}
                </Link>
              ))}
              <SettingsModal /> {/* Include the SettingsModal component */}
              <UserButton />
            </>
          ) : (
            <SignInButton>
              <button className="transition-colors hover:text-foreground/80 bg-blue-500 text-white px-4 py-2 rounded">
                Log In
              </button>
            </SignInButton>
          )}
        </nav>
      </div>
    </header>
  );
}