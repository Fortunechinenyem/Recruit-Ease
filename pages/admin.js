export default function Admin() {
  const users = [
    { id: 1, name: "John Doe", role: "Job Seeker" },
    { id: 2, name: "Jane Smith", role: "Recruiter" },
  ];

  const jobs = [
    { id: 1, title: "Frontend Developer", status: "Active" },
    { id: 2, title: "Backend Developer", status: "Inactive" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Manage Users</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Manage Jobs</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="border px-4 py-2">{job.id}</td>
                <td className="border px-4 py-2">{job.title}</td>
                <td className="border px-4 py-2">{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
