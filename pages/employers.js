export default function Employers() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Hire Top Talent</h1>
          <p className="text-lg mt-2">
            Post your job openings and connect with skilled candidates.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Why Recruit-ease?</h2>
          <p className="text-gray-600 mb-6">
            Our platform offers advanced recruitment tools to streamline your
            hiring process.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Post a Job
          </button>
        </section>
      </main>
    </div>
  );
}
