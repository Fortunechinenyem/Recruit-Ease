import JobCard from "@/app/components/JobCard";
import Navbar from "@/app/components/Navbar";
import { auth } from "@/lib/firebase";

export default function Dashboard() {
  const userName = auth.currentUser?.displayName;
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      description: "Join a fast-paced team building next-gen web apps.",
      salary: "₦200,000/month",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Lagos, Nigeria",
      description: "Work on cutting-edge server technologies.",
      salary: "₦300,000/month",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote",
      description: "Design seamless user experiences for our clients.",
      salary: "₦180,000/month",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div
        className="relative bg-cover bg-center h-[400px]"
        style={{ backgroundImage: "url(/images/pix3.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <div className="">
            <h1 className="text-2xl">Welcome, {userName || "Guest"}!</h1>
          </div>
          <p className="text-lg">
            Find your dream job or the perfect candidate today!
          </p>
        </div>
      </div>

      <main className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Job Listings</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Post a Job
          </button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Recruit-ease. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
