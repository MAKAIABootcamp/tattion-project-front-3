import Image from "next/image";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

// Assets
import line from "@/public/landingPage/line.png";

const Hero = () => {
  const styles = {
    section: "h-screen snap-center",
  };

  return (
    <div
      className={`${styles.section} flex flex-col items-center justify-between`}
    >
      <div className="flex gap-5 justify-between items-center w-[1000px] h-screen">
        <div className="rightWho relative flex justify-center w-full h-full">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </div>
        <div className="leftWho flex flex-col gap-5">
          <h1 className="text-7xl font-montserrat">
            Think outside the square space
          </h1>
          <div className="flex items-center gap-2">
            <Image height={5} src={line} />
            <h2 className="text-red-500 font-montserrat font-bold text-lg">
              Who we Are
            </h2>
          </div>
          <p className="text-xl text-light-gray font-montserrat">
            a creative group of designers with a passion for the arts.
          </p>
          <button className="bg-red-500 w-36 p-2 rounded-xs">
            See our Galery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
