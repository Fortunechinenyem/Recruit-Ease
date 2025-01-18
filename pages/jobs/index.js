export default function Jobs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Explore Job Opportunities</h1>
          <p className="text-lg mt-2">
            Find your dream job from thousands of listings.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded p-4">
              <h3 className="font-bold text-lg">Software Engineer</h3>
              <p className="text-gray-600">TechCorp | Remote</p>
              <p className="text-sm text-gray-500 mt-2">
                Full-time | $80,000 - $120,000
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Apply Now
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
