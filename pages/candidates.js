import { useRouter } from "next/router";

export default function Candidates() {
  const router = useRouter();

  const handleProfileCreation = () => {
    router.push("/create-profile");
  };

  const handleGetStarted = () => {
    router.push("/signup");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Discover Your Next Role</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Unlock career opportunities with Recruit-ease and connect with top
            companies hiring now.
          </p>
          <button
            className="mt-6 bg-white text-green-700 px-6 py-3 rounded shadow-md font-semibold hover:bg-green-100 focus:outline-none focus:ring focus:ring-green-300"
            onClick={handleProfileCreation}
          >
            Create Your Profile
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Recruit-ease?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            We provide tools and resources to help you achieve your career goals
            and stand out to potential employers.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Personalized Job Recommendations",
                description:
                  "Get tailored suggestions based on your skills, experience, and preferences.",
              },
              {
                title: "Resume-Building Tools",
                description:
                  "Craft a professional resume that highlights your strengths and attracts recruiters.",
              },
              {
                title: "Direct Communication",
                description:
                  "Chat with employers directly to discuss opportunities and get hired faster.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-green-100 py-12 text-center rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of successful candidates who found their roles
            through Recruit-ease.
          </p>
          <button
            className="inline-block bg-green-600 text-white px-6 py-3 rounded shadow-md font-semibold hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            onClick={handleGetStarted}
          >
            Get Started Today
          </button>
        </section>
      </main>
    </div>
  );
}
