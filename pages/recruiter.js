import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Recruiter() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePostJob = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!jobTitle || !location || !description) {
      setErrorMessage("Please fill out all fields before submitting.");
      return;
    }

    try {
      setLoading(true);

      const docRef = await addDoc(collection(db, "jobs"), {
        jobTitle,
        location,
        description,
        postedAt: new Date().toISOString(),
      });

      setSuccessMessage("Job successfully posted!");
      setJobTitle("");
      setLocation("");
      setDescription("");
      console.log("Job posted with ID: ", docRef.id);
    } catch (error) {
      console.error("Error posting job: ", error);
      setErrorMessage(
        "An error occurred while posting the job. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
          Recruiter Dashboard
        </h1>

        <form onSubmit={handlePostJob}>
          {successMessage && (
            <p className="text-green-600 mb-4 text-sm font-medium text-center">
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p className="text-red-600 mb-4 text-sm font-medium text-center">
              {errorMessage}
            </p>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Enter job title"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Enter location"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Enter job description"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full p-3 font-semibold text-white rounded-md ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            } transition duration-300`}
            disabled={loading}
          >
            {loading ? "Posting Job..." : "Post Job"}
          </button>
        </form>
      </div>
    </div>
  );
}
