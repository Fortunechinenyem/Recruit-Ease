import JobCard from "@/app/components/JobCard";
import Navbar from "@/app/components/Navbar";

export default function Dashboard() {
  const jobs = [
    { id: 1, title: "Frontend Developer", location: "Remote" },
    { id: 2, title: "Backend Developer", location: "Lagos, Nigeria" },
  ];

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
}
