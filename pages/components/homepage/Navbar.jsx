import Image from "next/image";
import React from "react";

// Assets
import logo from "@/public/landingPage/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-screen h-20">
      <nav className="flex justify-between items-center w-[1000px]">
        <div className="flex items-center gap-12">
          <Image src={logo} height={50} />
          <ul className="flex gap-5">
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
