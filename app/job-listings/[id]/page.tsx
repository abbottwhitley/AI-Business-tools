'use client'

import { useState, useEffect } from 'react'
import { useRouter, notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { JobPostingForm } from '@/components/job-posting-form'
import { updateJobPosting } from '@/server/job-posting-actions'

const mockJobListings = [
  {
    id: '1',
    jobTitle: 'Software Engineer',
    jobId: 'SE-001',
    department: 'Engineering',
    description: 'We are seeking a talented Software Engineer to join our team...',
    payRate: 100000,
    jobType: 'Full-time',
    basicQualifications: 'Bachelor\'s degree in Computer Science or related field...',
    desiredSkills: 'Experience with React, Node.js, and cloud technologies...',
    workSchedule: 'Monday-Friday, 9AM-5PM',
    physicalDemand: 'Light',
    publishedAt: '2023-05-15T10:00:00Z',
  },
  // Add more mock job listings here...
]

const fetchJobDetails = async (id: string) => {
  // In a real application, this would be an API call
  await new Promise(resolve => setTimeout(resolve, 500)) // Simulate API delay
  const job = mockJobListings.find(job => job.id === id)
  if (!job) {
    throw new Error('Job not found')
  }
  return job
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [job, setJob] = useState<any>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  useEffect(() => {
    fetchJobDetails(params.id)
      .then(setJob)
      .catch(error => {
        console.error('Failed to fetch job details:', error)
        notFound()
      })
  }, [params.id])

  const handleEditSuccess = async (updatedJob: any) => {
    await updateJobPosting(params.id, updatedJob);
    setJob(updatedJob)
    setIsEditDialogOpen(false)
  }

  if (!job) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-10">
      <Button variant="outline" onClick={() => router.back()} className="mb-6">
        Back to Listings
      </Button>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold">{job.jobTitle}</h1>
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogTrigger asChild>
              <Button>Edit Job</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] w-11/12">
              <DialogHeader>
                <DialogTitle>Edit Job Posting</DialogTitle>
                <DialogDescription>
                  Make changes to the job posting below.
                </DialogDescription>
              </DialogHeader>
              <JobPostingForm initialData={job} onSuccess={handleEditSuccess} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Job ID: {job.jobId}</p>
            <p className="text-sm text-gray-500">Department: {job.department}</p>
            <p className="text-sm text-gray-500">Published: {new Date(job.publishedAt).toLocaleDateString()}</p>
            <p className="mt-4"><strong>Pay Rate:</strong> ${job.payRate.toLocaleString()} per year</p>
            <p><strong>Job Type:</strong> {job.jobType}</p>
            <p><strong>Work Schedule:</strong> {job.workSchedule}</p>
            <p><strong>Physical Demand:</strong> {job.physicalDemand}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p className="text-gray-700">{job.description}</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Basic Qualifications</h2>
          <p className="text-gray-700">{job.basicQualifications}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Desired Skills</h2>
          <p className="text-gray-700">{job.desiredSkills}</p>
        </div>
      </div>
    </div>
  )
}

