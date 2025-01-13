'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { PlusIcon } from 'lucide-react'

// This will be replaced with real data later
const mockApplicants = [
  { id: 1, name: "John Smith", position: "Software Engineer", status: "New" },
  { id: 2, name: "Jane Doe", position: "Product Manager", status: "Interviewing" },
  { id: 3, name: "Robert Johnson", position: "UX Designer", status: "Reviewed" },
  { id: 4, name: "Sarah Williams", position: "Data Analyst", status: "New" },
]

export function ApplicantListView() {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Applicant Tracking</h2>
          <p className="text-sm text-muted-foreground">
            Manage and track applicants for your job postings
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <PlusIcon className="mr-2 h-4 w-4" />
          New Applicant
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockApplicants.map((applicant) => (
            <button
              key={applicant.id}
              className="w-full group transition-colors hover:bg-blue-50 p-4 rounded-lg text-left"
            >
              <div className="flex flex-col space-y-1">
                <span className="font-medium text-gray-900 group-hover:text-blue-600">
                  {applicant.name}
                </span>
                <span className="text-sm text-gray-500">{applicant.position}</span>
                <span className="text-xs text-blue-600 font-semibold">{applicant.status}</span>
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

