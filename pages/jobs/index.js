import Link from "next/link";

export default function Jobs() {
  const featuredJobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "TechCorp",
      location: "Remote",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description:
        "Join a leading tech company to develop cutting-edge software solutions.",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateX",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$100,000 - $150,000",
      description: "Lead product strategy and execution for a growing startup.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "DesignPro",
      location: "Remote",
      type: "Part-time",
      salary: "$40,000 - $60,000",
      description: "Craft seamless user experiences for global clients.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Job Opportunities</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover your next career move with thousands of job listings
            tailored for you.
          </p>
          <div className="mt-6">
            <Link
              href="/dashboard"
              className="bg-white text-blue-600 px-6 py-2 rounded shadow-md font-semibold hover:bg-gray-100"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Featured Jobs
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {job.title}
                </h3>
                <p className="text-gray-600">
                  {job.company} | {job.location}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  {job.type} | {job.salary}
                </p>
                <p className="text-gray-700 text-sm mt-4">{job.description}</p>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Ready to find your dream job?
          </h2>
          <p className="text-gray-600 mt-2">
            Sign up now to start applying and take the next step in your career.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded shadow-md font-semibold hover:bg-blue-700"
          >
            Get Started
          </Link>
        </section>
      </main>
    </div>
  );
}
