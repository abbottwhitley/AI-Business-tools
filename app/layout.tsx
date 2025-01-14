// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'
// import { Lato } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { Navbar } from '@/components/Navbar'
import './globals.css'

// const lato = Lato({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-roboto",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
          )}
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}