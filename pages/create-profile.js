import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function CreateProfile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    bio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user:", currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      if (!user) {
        throw new Error("User is not authenticated.");
      }

      await addDoc(collection(db, "profiles"), {
        ...formData,
        userId: user.uid,
      });

      router.push("/profile/success");
    } catch (error) {
      console.error("Error details:", error.message);
      setErrorMessage(
        "Failed to create profile. Check the console for details."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Your Profile
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="skills"
              className="block text-gray-700 font-medium mb-2"
            >
              Skills
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="E.g., JavaScript, React, Python"
              required
            />
          </div>
          <div>
            <label
              htmlFor="experience"
              className="block text-gray-700 font-medium mb-2"
            >
              Experience (Years)
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter years of experience"
              required
              min="0"
            />
          </div>
          <div>
            <label
              htmlFor="bio"
              className="block text-gray-700 font-medium mb-2"
            >
              Short Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Tell us about yourself"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Create Profile"}
          </button>
        </form>
        {errorMessage && (
          <div className="mt-4 text-center text-red-600 font-medium">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}
