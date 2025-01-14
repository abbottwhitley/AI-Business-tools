'use client'

import { useState } from 'react'
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock job listings data
const mockJobListings = [
  {
    id: '1',
    jobTitle: 'Software Engineer',
    jobId: 'SE-001',
    department: 'Engineering',
    jobType: 'Full-time',
    payRate: 100000,
  },
  {
    id: '2',
    jobTitle: 'Product Manager',
    jobId: 'PM-001',
    department: 'Product',
    jobType: 'Full-time',
    payRate: 110000,
  },
  {
    id: '3',
    jobTitle: 'UX Designer',
    jobId: 'UX-001',
    department: 'Design',
    jobType: 'Contract',
    payRate: 90000,
  },
]

export default function JobListingsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [jobListings, setJobListings] = useState(mockJobListings)

  const handleNewJobPosting = () => {
    setIsDialogOpen(false)
    // In a real application, you would fetch the updated job listings here
    // For now, we'll just close the dialog
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Job Listings</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Create New Posting</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] w-11/12">
            <DialogHeader>
              <DialogTitle>Create New Job Posting</DialogTitle>
              <DialogDescription>
                Fill out the form below to create a new job posting.
              </DialogDescription>
            </DialogHeader>
            <JobPostingForm onSuccess={handleNewJobPosting} />
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Job Title</TableHead>
            <TableHead>Job ID</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Job Type</TableHead>
            <TableHead>Pay Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobListings.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.jobTitle}</TableCell>
              <TableCell>{job.jobId}</TableCell>
              <TableCell>{job.department}</TableCell>
              <TableCell>{job.jobType}</TableCell>
              <TableCell>${job.payRate.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

