'use server'

import { z } from 'zod'

const jobPostingSchema = z.object({
  jobTitle: z.string().min(2),
  jobId: z.string().min(2),
  description: z.string().optional(),
  payRate: z.number().positive(),
  jobType: z.enum(["Full-time", "Part-time", "Contract", "Temporary"]),
  basicQualifications: z.string().min(10),
  desiredSkills: z.string().min(10),
  workSchedule: z.string().min(2),
  physicalDemand: z.enum(["Light", "Moderate", "Heavy"]),
})

export async function createJobPosting(data: z.infer<typeof jobPostingSchema>) {
  const validatedData = jobPostingSchema.parse(data)
  
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock database insertion
  const result = {
    id: Math.random().toString(36).substr(2, 9),
    ...validatedData,
    publishedAt: new Date().toISOString(),
  }

  console.log('Job posting created:', result)
  return result
}

