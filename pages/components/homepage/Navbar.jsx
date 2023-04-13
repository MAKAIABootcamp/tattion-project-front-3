import Image from "next/image";
import React from "react";

// Assets
import logo from "@/public/landingPage/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-screen h-20 max-md:w-full">
      <nav className="flex justify-between items-center w-[1000px] max-md:w-full max-md:p-3">
        <div className="flex items-center gap-12">
          <Image src={logo} height={50} alt='Logo' />
          <ul className="flex gap-5 max-sm:hidden">
            <li>Home</li>
            <li>Artists</li>
            <li>Galery</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <button className="bg-red-500 w-24 p-2 rounded-xs">Sign Up</button>
          <button className="bg-red-500 w-24 p-2 rounded-xs">Sign In</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
