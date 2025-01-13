'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const mainNav = [
  { name: 'AI Hiring Manager', href: '/' },
]

const secondaryNav = [
  { name: 'Jobs', href: '/jobs' },
  { name: 'Applicants', href: '/applicants' },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Left side - AI Hiring Manager */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">
              AI Hiring Manager
            </span>
          </Link>
        </div>

        {/* Right side - Jobs and Applicants */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}