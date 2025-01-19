import { useState } from "react";

export default function Admin() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Job Seeker" },
    { id: 2, name: "Jane Smith", role: "Recruiter" },
    { id: 3, name: "Alice Johnson", role: "Job Seeker" },
    { id: 4, name: "Bob Brown", role: "Recruiter" },
    { id: 5, name: "Charlie White", role: "Job Seeker" },
    { id: 6, name: "Diana Prince", role: "Recruiter" },
    { id: 7, name: "Eve Black", role: "Job Seeker" },
  ]);

  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", status: "Active" },
    { id: 2, title: "Backend Developer", status: "Inactive" },
    { id: 3, title: "UI/UX Designer", status: "Active" },
    { id: 4, title: "Data Scientist", status: "Active" },
    { id: 5, title: "DevOps Engineer", status: "Inactive" },
    { id: 6, title: "Mobile Developer", status: "Active" },
    { id: 7, title: "Software Engineer", status: "Inactive" },
  ]);

  const [currentUserPage, setCurrentUserPage] = useState(1);
  const usersPerPage = 3;
  const totalUserPages = Math.ceil(users.length / usersPerPage);

  const paginatedUsers = users.slice(
    (currentUserPage - 1) * usersPerPage,
    currentUserPage * usersPerPage
  );

  const [currentJobPage, setCurrentJobPage] = useState(1);
  const jobsPerPage = 3;
  const totalJobPages = Math.ceil(jobs.length / jobsPerPage);

  const paginatedJobs = jobs.slice(
    (currentJobPage - 1) * jobsPerPage,
    currentJobPage * jobsPerPage
  );

  const changePage = (type, direction) => {
    if (type === "users") {
      if (direction === "next" && currentUserPage < totalUserPages) {
        setCurrentUserPage(currentUserPage + 1);
      } else if (direction === "prev" && currentUserPage > 1) {
        setCurrentUserPage(currentUserPage - 1);
      }
    } else if (type === "jobs") {
      if (direction === "next" && currentJobPage < totalJobPages) {
        setCurrentJobPage(currentJobPage + 1);
      } else if (direction === "prev" && currentJobPage > 1) {
        setCurrentJobPage(currentJobPage - 1);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        <table className="w-full border-collapse border bg-white shadow-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => changePage("users", "prev")}
            disabled={currentUserPage === 1}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
          >
            Previous
          </button>
          <p>
            Page {currentUserPage} of {totalUserPages}
          </p>
          <button
            onClick={() => changePage("users", "next")}
            disabled={currentUserPage === totalUserPages}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
          >
            Next
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Manage Jobs</h2>
        <table className="w-full border-collapse border bg-white shadow-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedJobs.map((job) => (
              <tr key={job.id}>
                <td className="border px-4 py-2">{job.id}</td>
                <td className="border px-4 py-2">{job.title}</td>
                <td className="border px-4 py-2">{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => changePage("jobs", "prev")}
            disabled={currentJobPage === 1}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
          >
            Previous
          </button>
          <p>
            Page {currentJobPage} of {totalJobPages}
          </p>
          <button
            onClick={() => changePage("jobs", "next")}
            disabled={currentJobPage === totalJobPages}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
