import { useState } from "react";

export default function Admin() {
  // Mock data for users and jobs
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Job Seeker" },
    { id: 2, name: "Jane Smith", role: "Recruiter" },
    { id: 3, name: "Alice Johnson", role: "Job Seeker" },
  ]);

  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", status: "Active" },
    { id: 2, title: "Backend Developer", status: "Inactive" },
    { id: 3, title: "UI/UX Designer", status: "Active" },
  ]);

  const [searchUsers, setSearchUsers] = useState("");
  const [searchJobs, setSearchJobs] = useState("");

  // Filtered data based on search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchUsers.toLowerCase())
  );

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchJobs.toLowerCase())
  );

  // Handle actions
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>

      {/* Manage Users Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchUsers}
            onChange={(e) => setSearchUsers(e.target.value)}
          />
        </div>
        <table className="w-full border-collapse border bg-white shadow-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-gray-600 italic"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* Manage Jobs Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Manage Jobs</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchJobs}
            onChange={(e) => setSearchJobs(e.target.value)}
          />
        </div>
        <table className="w-full border-collapse border bg-white shadow-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id}>
                <td className="border px-4 py-2">{job.id}</td>
                <td className="border px-4 py-2">{job.title}</td>
                <td className="border px-4 py-2">{job.status}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => deleteJob(job.id)}
                    className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredJobs.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-gray-600 italic"
                >
                  No jobs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}
