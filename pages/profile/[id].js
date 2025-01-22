import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Authenticated UID:", user.uid);
        console.log("Profile ID from URL:", id);
      } else {
        console.log("User not authenticated");
      }
    });

    return () => unsubscribe();
  }, [id]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) return;

      try {
        console.log("Fetching profile for ID:", id);
        const docRef = doc(db, "profiles", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Profile data:", docSnap.data());
          setProfile(docSnap.data());
        } else {
          console.error("No profile found for ID:", id);
          setError("Profile not found.");
        }
      } catch (err) {
        console.error("Error fetching profile:", err.message);
        setError("Error fetching profile: " + err.message);
      }
    };

    fetchProfile();
  }, [id]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center text-red-500">
          <p className="text-lg font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center text-gray-500">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 h-40"></div>
        <div className="relative -mt-20 flex justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt={profile.name}
            className="w-36 h-36 rounded-full border-4 border-white object-cover"
          />
        </div>
        <div className="px-6 py-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
          <p className="text-gray-600">{profile.email}</p>
        </div>
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-700">Skills</h2>
          <p className="text-gray-600">{profile.skills || "Not provided"}</p>
          <h2 className="text-lg font-semibold text-gray-700 mt-4">
            Experience
          </h2>
          <p className="text-gray-600">
            {profile.experience
              ? `${profile.experience} years`
              : "Not provided"}
          </p>
          <h2 className="text-lg font-semibold text-gray-700 mt-4">Bio</h2>
          <p className="text-gray-600">{profile.bio || "Not provided"}</p>
        </div>
      </div>
    </div>
  );
}
