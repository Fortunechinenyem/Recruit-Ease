import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { auth } from "@/lib/firebase";

export default function Home() {
  const userName = auth.currentUser?.displayName;
  return (
    <div>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-[400px]"
        style={{ backgroundImage: "url(/images/pix2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <div>
            <h1>Welcome, {userName || "Guest"}!</h1>
          </div>
          <p className="mt-4">
            Find your next career opportunity or hire top talent with ease.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
