import Footer from "@/app/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            We’d Love to Hear From You
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Whether you have a question, feedback, or just want to say hello,
            we're here to listen. Let’s connect!
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        <section className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="5"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Other Ways to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600">support@recruit-ease.com</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600">+1 (234) 567-8901</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600">
                123 Recruit-ease Ave, <br />
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
