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
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>Email: {profile.email}</p>
      <p>Skills: {profile.skills}</p>
      <p>Experience: {profile.experience} years</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );
}
