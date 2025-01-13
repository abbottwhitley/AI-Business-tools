import { ApplicantListView } from "@/components/applicant-list-view"

export default function ApplicantsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <main className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Manage Applicants</h1>
        <ApplicantListView />
      </main>
    </div>
  )
}

