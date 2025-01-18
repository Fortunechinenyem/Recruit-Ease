import { Logo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">
            {" "}
            <Image src={Logo} alt="logo" width={50} height={50} />
          </Link>
        </h1>
        <div className="space-x-4">
          <Link href="/login" className="hover:underline">
            Login
          </Link>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
