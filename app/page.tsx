import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to AI Hiring Manager</h1>
        <p className="text-xl text-gray-600 mb-8">
          Efficiently manage and track applicants for your job postings
        </p>
        <Link href="/applicants">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            View Applicants
          </Button>
        </Link>
      </main>
    </div>
  )
}

