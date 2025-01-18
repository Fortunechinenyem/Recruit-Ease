import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-gradient-to-r from-purple-700 to-purple-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Recruit-ease</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering businesses to find top talent and enabling individuals
              to achieve their career aspirations.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 space-y-16">
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              At Recruit-ease, we are on a mission to **redefine the recruitment
              experience**. We aim to seamlessly connect job seekers with their
              dream opportunities while equipping employers with the tools to
              find and hire exceptional talent.
            </p>
          </section>

          <section className="text-center bg-purple-100 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">
              Our Vision
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              To become the **most trusted and innovative recruitment platform
              globally**—one that shapes the future of work by leveraging
              technology, data, and human-centered design.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Why Choose Recruit-ease?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-purple-800">
                  Advanced Job Matching
                </h3>
                <p className="text-gray-600 mt-2">
                  We use cutting-edge algorithms to match candidates with roles
                  that align with their skills, experience, and goals.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-purple-800">
                  Empowering Employers
                </h3>
                <p className="text-gray-600 mt-2">
                  Our platform streamlines the hiring process with tools for
                  posting jobs, screening candidates, and managing applications
                  effortlessly.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-purple-800">
                  Personalized Support
                </h3>
                <p className="text-gray-600 mt-2">
                  Whether you're a job seeker or an employer, our support team
                  is here to guide you every step of the way.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-purple-600 text-white py-12 text-center rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Join Us in Shaping the Future of Recruitment
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Be a part of a platform that’s revolutionizing the way talent
              meets opportunity. Whether you're looking for your next hire or
              your next career move, Recruit-ease is your partner.
            </p>
            <button className="bg-white text-purple-700 px-6 py-3 rounded shadow-md font-semibold hover:bg-purple-100">
              Get Started Today
            </button>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
