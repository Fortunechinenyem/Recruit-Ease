import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/public/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={120}
              height={40}
              className="cursor-pointer"
            />
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Home
          </Link>
          <Link
            href="/jobs"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Jobs
          </Link>
          <Link
            href="/employers"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Employers
          </Link>
          <Link
            href="/candidates"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Candidates
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="space-y-4 px-6 py-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-500 font-medium"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="block text-gray-700 hover:text-blue-500 font-medium"
            >
              Jobs
            </Link>
            <Link
              href="/employers"
              className="block text-gray-700 hover:text-blue-500 font-medium"
            >
              Employers
            </Link>
            <Link
              href="/candidates"
              className="block text-gray-700 hover:text-blue-500 font-medium"
            >
              Candidates
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-500 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-500 font-medium"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="block text-gray-700 hover:text-blue-500 font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-medium text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
