import { JobListView } from "@/components/job-list-view"

export default function JobsPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Job Postings</h1>
      <JobListView />
    </div>
  )
}
