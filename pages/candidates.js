export default function Candidates() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Discover Your Next Role</h1>
          <p className="text-lg mt-2">
            Join Recruit-ease and get hired by top companies.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Benefits for Candidates
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Personalized job recommendations</li>
            <li>Resume-building tools</li>
            <li>Direct communication with employers</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
