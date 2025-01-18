export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-200">
      <header className="bg-purple-700 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">About Recruit-ease</h1>
          <p className="text-lg mt-2">
            Learn about our mission, vision, and values.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At Recruit-ease, we aim to bridge the gap between employers and job
            seekers by providing a seamless recruitment experience.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become the most trusted recruitment platform worldwide.
          </p>
        </section>
      </main>
    </div>
  );
}
