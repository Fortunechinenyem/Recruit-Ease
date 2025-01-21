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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5c0 1.794-1.456 3.25-3.25 3.25s-3.25-1.456-3.25-3.25 1.456-3.25 3.25-3.25 3.25 1.456 3.25 3.25zM12 14.75c-2.071 0-6.25 1.062-6.25 3.25V19c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25v-1c0-2.188-4.179-3.25-6.25-3.25z"
                />
              </svg>

              <p className="text-lg font-semibold text-gray-800">
                Create Profile
              </p>
            </Link>
            <Link
              href="/jobs"
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 7.5h16.5M3.75 7.5l1.5 10.5c.162 1.143 1.08 2 2.25 2h9c1.17 0 2.088-.857 2.25-2l1.5-10.5M3.75 7.5h16.5M7.5 4.5h9M7.5 4.5a2.25 2.25 0 114.5 0m4.5 0h-9"
                />
              </svg>
              <p className="text-lg font-semibold text-gray-800">View Jobs</p>
            </Link>
            <Link
              href="/jobs/saved"
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 7.5v13.125c0 .469.392.875.875.875.19 0 .38-.062.53-.18L12 17.625l5.345 3.696c.15.118.34.18.53.18.483 0 .875-.406.875-.875V7.5M5.25 7.5h13.5M5.25 7.5l1.5-4.5h10.5l1.5 4.5"
                />
              </svg>
              <p className="text-lg font-semibold text-gray-800">Saved Jobs</p>
            </Link>
            <Link
              href="/settings"
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15.75A3.75 3.75 0 1012 8.25a3.75 3.75 0 000 7.5zM19.812 15.04a9.033 9.033 0 00.423-2.54 9.03 9.03 0 00-.423-2.54m-15.624 5.08a9.033 9.033 0 01-.423-2.54c0-.893.148-1.755.423-2.54m13.202 8.307a9.032 9.032 0 01-4.39 1.166 9.032 9.032 0 01-4.39-1.166m8.78-13.554a9.032 9.032 0 00-4.39-1.166 9.032 9.032 0 00-4.39 1.166"
                />
              </svg>

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
