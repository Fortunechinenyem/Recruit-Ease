import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              About Recruit-Ease
            </h3>
            <p className="text-sm">
              Recruit-ease is a platform dedicated to connecting top talent with
              leading companies. Our mission is to simplify recruitment for both
              employers and candidates.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-blue-500">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/employers" className="hover:text-blue-500">
                  Employers
                </Link>
              </li>
              <li>
                <Link href="/candidates" className="hover:text-blue-500">
                  Candidates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Subscribe</h3>
            <p className="text-sm mb-4">
              Stay updated with the latest job postings and recruitment news.
            </p>
            <form>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Recruit-ease. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-blue-500">
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.497V14.706H9.34v-3.62h3.482V8.342c0-3.448 2.1-5.333 5.167-5.333 1.47 0 2.734.11 3.1.158v3.6h-2.126c-1.664 0-1.985.791-1.985 1.949v2.553h3.978l-.519 3.62h-3.459V24h6.788C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-blue-500">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.965 9.965 0 01-2.828.775A4.932 4.932 0 0023.337 3.3a9.868 9.868 0 01-3.127 1.184A4.917 4.917 0 0016.616 3c-2.71 0-4.917 2.2-4.917 4.917 0 .385.044.76.127 1.122C7.691 8.874 4.066 7.148 1.64 4.238a4.92 4.92 0 00-.666 2.475c0 1.708.87 3.217 2.188 4.097a4.902 4.902 0 01-2.228-.615v.062c0 2.386 1.693 4.374 3.946 4.83a4.902 4.902 0 01-2.223.085c.627 1.956 2.445 3.381 4.6 3.422a9.867 9.867 0 01-6.102 2.105c-.395 0-.786-.023-1.17-.068A13.94 13.94 0 007.56 21c9.056 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.014-.637A9.993 9.993 0 0024 4.557z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-blue-500">
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452H16.98v-4.905c0-1.17-.022-2.676-1.631-2.676-1.632 0-1.883 1.276-1.883 2.59v4.99H10.5V9.829h3.32v1.453h.048c.461-.87 1.586-1.788 3.267-1.788 3.496 0 4.14 2.3 4.14 5.29v5.668zM5.337 8.235a1.93 1.93 0 11.001-3.861 1.93 1.93 0 01-.001 3.861zM6.95 20.452H3.72V9.829h3.23v10.623zM22.225 0H1.771C.79 0 0 .771 0 1.726v20.548C0 23.229.79 24 1.771 24h20.451c.978 0 1.778-.771 1.778-1.726V1.726C24 .771 23.203 0 22.225 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
