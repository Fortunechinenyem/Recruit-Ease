import Link from "next/link";

export default function Employers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Hire Top Talent Effortlessly
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Access a pool of skilled candidates and streamline your hiring
            process with Recruit-ease. Simplify recruitment and build your dream
            team today.
          </p>
          <Link
            href="/jobs/post"
            className="mt-6 inline-block bg-blue-500 text-white px-8 py-3 rounded-lg shadow-md font-semibold hover:bg-blue-600 transition-all"
          >
            Post a Job Now
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Why Choose Recruit-ease?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Discover how our platform helps employers connect with top talent
            faster and more efficiently. From job posting to hiring, we've got
            you covered.
          </p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Advanced Search Tools
              </h3>
              <p className="text-gray-600">
                Easily filter and sort candidates by experience, skills, and
                location to find your perfect hire.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Streamlined Job Posting
              </h3>
              <p className="text-gray-600">
                Quickly post job openings and reach a vast network of job
                seekers in minutes.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Powerful Analytics
              </h3>
              <p className="text-gray-600">
                Get detailed insights into candidate engagement and optimize
                your recruitment strategies.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Mobile-Friendly Platform
              </h3>
              <p className="text-gray-600">
                Manage job postings and candidates on the go with our
                mobile-responsive design.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Secure and Reliable
              </h3>
              <p className="text-gray-600">
                Our platform ensures data security and reliability, giving you
                peace of mind.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Dedicated Support
              </h3>
              <p className="text-gray-600">
                Receive 24/7 support to ensure a seamless hiring experience
                every step of the way.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-blue-100 py-12 text-center rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Join thousands of employers who trust Recruit-ease for their hiring
            needs. Start posting jobs, discover top talent, and hire with
            confidence.
          </p>
          <Link
            href="/signup/employers"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg shadow-md font-semibold hover:bg-blue-600 transition-all"
          >
            Get Started for Free
          </Link>
        </section>

        <section className="mt-16 py-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            What Employers Are Saying
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 italic mb-4">
                "Recruit-ease has transformed the way we hire. We’ve found
                top-quality talent effortlessly!"
              </p>
              <h3 className="text-sm font-bold text-gray-800">
                - John Doe, HR Manager
              </h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 italic mb-4">
                "The analytics feature helped us understand our hiring pipeline
                better and make smarter decisions."
              </p>
              <h3 className="text-sm font-bold text-gray-800">
                - Sarah Smith, Recruitment Specialist
              </h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 italic mb-4">
                "Posting jobs is quick and easy, and we’ve seen an incredible
                response from candidates."
              </p>
              <h3 className="text-sm font-bold text-gray-800">
                - Michael Brown, CEO
              </h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
