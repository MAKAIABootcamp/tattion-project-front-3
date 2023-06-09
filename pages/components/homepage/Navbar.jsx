import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Assets
import logo from "@/public/landingPage/logo.png";

const Navbar = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/sign-up");
  };

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <div className="flex justify-center items-center w-screen h-20 max-md:w-full">
      <nav className="flex justify-between items-center w-[1100px] max-md:w-full max-md:p-3 mt-11">
        <div className="flex items-center gap-2">
          <Image src={logo} height={180} alt="Logo" />
        </div>
        <div className="flex gap-5">
          <button
            className="bg-red-500 w-24 p-2 rounded-xs hover:scale-105 duration-75"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <button
            className="bg-red-500 w-24 p-2 rounded-xs hover:scale-105 duration-75"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
