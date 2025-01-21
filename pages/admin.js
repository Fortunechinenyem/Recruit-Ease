import Analytics from "@/app/components/Analytics";
import { useState, useEffect } from "react";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Admin() {
  const [users, setUsers] = useState([]);

  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", status: "Active" },
    { id: 2, title: "Backend Developer", status: "Inactive" },
    { id: 3, title: "UI/UX Designer", status: "Active" },
    { id: 4, title: "Data Scientist", status: "Active" },
    { id: 5, title: "DevOps Engineer", status: "Inactive" },
    { id: 6, title: "Mobile Developer", status: "Active" },
    { id: 7, title: "Software Engineer", status: "Inactive" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState("");
  const [formMode, setFormMode] = useState("");
  const [currentData, setCurrentData] = useState(null);

  const handleDelete = async (type, id) => {
    if (
      type === "user" &&
      window.confirm("Are you sure you want to delete this user?")
    ) {
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc);
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleAddEdit = (type, mode, data = null) => {
    setFormType(type);
    setFormMode(mode);
    setCurrentData(data);
    setIsModalOpen(true);
  };

  const handleSave = async (formData) => {
    if (formType === "user") {
      const usersCollection = collection(db, "users");
      if (formMode === "add") {
        const docRef = await addDoc(usersCollection, formData);
        setUsers([...users, { id: docRef.id, ...formData }]);
      } else if (formMode === "edit") {
        const userDoc = doc(db, "users", currentData.id);
        await updateDoc(userDoc, formData);
        setUsers(
          users.map((user) =>
            user.id === currentData.id ? { ...user, ...formData } : user
          )
        );
      }
    }
    setIsModalOpen(false);
    setCurrentData(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentData(null);
  };

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
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const userSnapshot = await getDocs(usersCollection);
      const userList = userSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        <button
          onClick={() => handleAddEdit("user", "add")}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add User
        </button>
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
            {paginatedUsers.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleAddEdit("user", "edit", user)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete("user", user.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
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
        <button
          onClick={() => handleAddEdit("job", "add")}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Job
        </button>
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
            {paginatedJobs.map((job) => (
              <tr key={job.id}>
                <td className="border px-4 py-2">{job.id}</td>
                <td className="border px-4 py-2">{job.title}</td>
                <td className="border px-4 py-2">{job.status}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleAddEdit("job", "edit", job)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete("job", job.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {formMode === "add" ? "Add" : "Edit"}{" "}
              {formType === "user" ? "User" : "Job"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = Object.fromEntries(new FormData(e.target));
                handleSave(formData);
              }}
            >
              {formType === "user" ? (
                <>
                  <label className="block mb-2">
                    Name:
                    <input
                      name="name"
                      defaultValue={currentData?.name || ""}
                      className="border w-full p-2 rounded mt-1"
                      required
                    />
                  </label>
                  <label className="block mb-2">
                    Role:
                    <select
                      name="role"
                      defaultValue={currentData?.role || "Job Seeker"}
                      className="border w-full p-2 rounded mt-1"
                    >
                      <option>Job Seeker</option>
                      <option>Recruiter</option>
                    </select>
                  </label>
                </>
              ) : (
                <>
                  <label className="block mb-2">
                    Title:
                    <input
                      name="title"
                      defaultValue={currentData?.title || ""}
                      className="border w-full p-2 rounded mt-1"
                      required
                    />
                  </label>
                  <label className="block mb-2">
                    Status:
                    <select
                      name="status"
                      defaultValue={currentData?.status || "Active"}
                      className="border w-full p-2 rounded mt-1"
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </label>
                </>
              )}
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-300 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <section>
        <Analytics />
      </section>
    </div>
  );
}
