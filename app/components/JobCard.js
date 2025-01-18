export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-2">{job.location}</p>
      <p className="text-gray-700 mb-4">{job.description}</p>
      <p className="text-blue-600 font-bold">{job.salary}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
        View Details
      </button>
    </div>
  );
}
