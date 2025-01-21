import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  const userName = auth.currentUser?.displayName;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div
        className="relative bg-cover bg-center h-[400px]"
        style={{ backgroundImage: "url(/images/pix3.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Welcome, {userName || "Guest"}!
          </h1>
          <p className="text-lg mb-6">
            Your journey to find a dream job or the ideal candidate starts here.
          </p>
          <Link
            href="/jobs/post"
            className="bg-blue-500 text-white px-6 py-3 rounded shadow-md font-semibold hover:bg-blue-600"
          >
            Post a Job
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/create-profile"
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <Image
                src="/images/profile-icon.png"
                width={50}
                height={50}
                alt="Profile"
                className="w-16 h-16 mb-4"
              />
              <p className="text-lg font-semibold text-gray-800">
                Create Profile
              </p>
            </Link>
            <Link
              href="/jobs"
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <Image
                src="/images/jobs-icon.png"
                width={50}
                height={50}
                alt="Jobs"
                className="w-16 h-16 mb-4"
              />
              <p className="text-lg font-semibold text-gray-800">View Jobs</p>
            </Link>
            <Link
              href="/jobs/saved"
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <Image
                src="/images/saved-icon.png"
                width={50}
                height={50}
                alt="Saved Jobs"
                className="w-16 h-16 mb-4"
              />
              <p className="text-lg font-semibold text-gray-800">Saved Jobs</p>
            </Link>
            <Link
              href="/settings"
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <Image
                src="/images/settings-icon.png"
                width={50}
                height={50}
                alt="Settings"
                className="w-16 h-16 mb-4"
              />
              <p className="text-lg font-semibold text-gray-800">Settings</p>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Job Listings</h2>
            <Link
              href="/jobs"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((job) => (
              <div
                key={job}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-800">
                  Frontend Developer
                </h3>
                <p className="text-gray-600 mb-4">Remote | Full-time</p>
                <p className="text-gray-600">
                  Build modern web applications with React and Tailwind CSS.
                </p>
                <Link
                  href={`/jobs/${job}`}
                  className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Recommended for You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((rec) => (
              <div
                key={rec}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-800">
                  Backend Engineer
                </h3>
                <p className="text-gray-600 mb-4">Onsite | Part-time</p>
                <p className="text-gray-600">
                  Develop robust server-side logic with Node.js and Express.
                </p>
                <Link
                  href={`/jobs/${rec}`}
                  className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
