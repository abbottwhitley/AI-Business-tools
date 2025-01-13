'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  postedDate: Date
  status: 'Open' | 'Closed' | 'Draft'
}

// Temporary mock data - replace with actual data fetching later
const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    postedDate: new Date(),
    status: 'Open',
  },
  // Add more mock jobs as needed
]

export function JobListView() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Active Postings</h2>
          <p className="text-sm text-muted-foreground">
            Manage and track your job postings
          </p>
        </div>
        <Button>
          Create New Posting
        </Button>
      </div>

      <div className="grid gap-4">
        {mockJobs.map((job) => (
          <Card key={job.id} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <div className="space-x-2 mt-1 text-sm text-muted-foreground">
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  View Applicants
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
