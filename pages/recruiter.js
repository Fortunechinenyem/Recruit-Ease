import { useState } from "react";

export default function Recruiter() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handlePostJob = (e) => {
    e.preventDefault();
    console.log({ jobTitle, location, description });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Recruiter Dashboard</h1>
      <form onSubmit={handlePostJob} className="bg-white p-6 rounded shadow-md">
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
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}
