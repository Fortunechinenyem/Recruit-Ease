import Button from "@/app/components/Button";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-[400px]"
        style={{ backgroundImage: "url(/images/pix2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <div>
            <h1 className="text-4xl">Welcome to Recruit-Ease</h1>
          </div>
          <p className="mt-4">
            Find your next career opportunity or hire top talent with ease.
          </p>

          <Button className="mt-5">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
