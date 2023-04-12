import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

// Assets
import line from "@/public/landingPage/line.png";
import moon from "@/public/landingPage/moon.png";

const Hero = () => {
  const styles = {
    section: "h-screen snap-center",
  };

  return (
    <div
      className={`${styles.section} flex flex-col items-center justify-between`}
    >
      <Navbar />
      <div className="flex gap-5 justify-between items-center w-[1000px] h-screen">
        <div className="left flex flex-col justify-center gap-5">
          <h1 className="text-7xl font-montserrat">
            Tattoos. Centralized. In Just One Touch.
          </h1>
          <div className="flex items-center gap-2">
            <Image height={5} src={line} />
            <h2 className="text-red-500 font-montserrat font-bold text-lg">
              What we Do
            </h2>
          </div>
          <p className="text-lg text-light-gray font-montserrat">
            We enjoy creating delightful, human-centered digital experiences.
          </p>
          <button className="bg-red-500 w-28 p-2 rounded-xs">Learn More</button>
        </div>
        <div className="right relative w-full h-full">
          {/* 3D MODEL */}
          <Image
            className="w-[800px] h-[600px] object-contain absolute bottom-0 right-0 left-0 top-16 heroImg"
            src={moon}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
