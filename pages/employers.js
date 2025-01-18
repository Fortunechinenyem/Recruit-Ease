import Link from "next/link";

export default function Employers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Hire Top Talent Effortlessly
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Access a pool of skilled candidates and streamline your hiring
            process with Recruit-ease.
          </p>
          <Link
            href="/jobs/post"
            className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded shadow-md font-semibold hover:bg-blue-600"
          >
            Post a Job Now
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Why Choose Recruit-ease?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our platform is designed to help you discover, engage, and hire the
            best talent quickly and efficiently.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">
                Advanced Search Tools
              </h3>
              <p className="text-gray-600 mt-2">
                Filter and sort candidates based on experience, location, and
                skills to find the perfect match.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">
                Streamlined Job Posting
              </h3>
              <p className="text-gray-600 mt-2">
                Post job openings in minutes and reach a vast network of job
                seekers.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">
                Powerful Analytics
              </h3>
              <p className="text-gray-600 mt-2">
                Get insights into candidate engagement and optimize your
                recruitment strategy.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-blue-100 py-12 text-center rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of employers who trust Recruit-ease for their hiring
            needs.
          </p>
          <Link
            href="/signup/employers"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded shadow-md font-semibold hover:bg-blue-600"
          >
            Get Started for Free
          </Link>
        </section>
      </main>
    </div>
  );
}
