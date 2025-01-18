import Button from "@/app/components/Button";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-[400px]"
        style={{ backgroundImage: "url(/images/pix2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Welcome to RecruitEase</h1>
          <p className="mt-4">
            Find your next career opportunity or hire top talent with ease.
          </p>

          <Button className="mt-6 px-4 py-2">Get Started</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
