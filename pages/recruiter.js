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
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Recruiter Dashboard</h1>

      <form onSubmit={handlePostJob} className="bg-white p-6 rounded shadow-md">
        {successMessage && (
          <p className="text-green-600 mb-4 text-sm font-medium">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-600 mb-4 text-sm font-medium">
            {errorMessage}
          </p>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter job title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter location"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter job description"
          ></textarea>
        </div>

        <button
          type="submit"
          className={`px-4 py-2 font-bold rounded ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "Posting Job..." : "Post Job"}
        </button>
      </form>
    </div>
  );
}
