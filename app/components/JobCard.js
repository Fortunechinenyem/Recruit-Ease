const JobCard = ({ job }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-gray-600">{job.location}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        View Details
      </button>
    </div>
  );
};

export default JobCard;
