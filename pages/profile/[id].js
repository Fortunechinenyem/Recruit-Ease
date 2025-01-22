import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchProfile = async () => {
      setLoading(true); // Start loading
      try {
        const docRef = doc(db, "profiles", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfile(docSnap.data());
        } else {
          setError("Profile not found");
        }
      } catch (err) {
        console.error("Error fetching profile:", err.message);
        setError("Error fetching profile. Check the console for details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-500 text-lg">Profile not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
        <div className="flex flex-col items-center mb-6">
          <img
            src={profile.avatar || "/default-avatar.png"}
            alt={`${profile.name}'s Avatar`}
            className="w-24 h-24 rounded-full shadow-md mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
          <p className="text-gray-500">{profile.role || "Job Seeker"}</p>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Profile Details
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Email:</strong> {profile.email}
            </li>
            <li>
              <strong>Skills:</strong>{" "}
              <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm">
                {profile.skills}
              </span>
            </li>
            <li>
              <strong>Experience:</strong> {profile.experience} years
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">About Me</h2>
          <p className="text-gray-600">{profile.bio}</p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/")}
            className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
