import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// Assets
import line from "@/public/landingPage/line.png";
import moon from "@/public/landingPage/moon.png";
import { Sphere } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";

const Hero = () => {
  const styles = {
    section: "h-screen snap-center",
  };

  return (
    <div
      className={`${styles.section} flex flex-col items-center justify-between max-md:h-[200vh]`}
    >
      <Navbar />
      <div className="flex gap-5 justify-between items-center w-[1000px] h-full max-md:flex-col max-md:w-full max-md:items-center max-md:justify-center">
        <div className="left flex flex-col justify-center gap-5">
          <h1 className="text-7xl font-montserrat max-md:text-center max-md:text-6xl">
            Tattoos. Centralized. In Just One Touch.
          </h1>
          <div className="flex items-center gap-2">
            <Image height={5} src={line} alt="line" />
            <h2 className="text-red-500 font-montserrat font-bold text-lg">
              What we Do
            </h2>
          </div>
          <p className="text-lg text-light-gray font-montserrat max-md:p-5 max-md:text-center">
            We enjoy creating delightful, human-centered digital experiences.
          </p>
          <button className="bg-red-500 w-28 p-2 rounded-xs">Learn More</button>
        </div>
        <div className="right relative w-full h-full">
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Image
            alt="moon"
            className="w-[700px] h-[500px] object-contain absolute bottom-0 right-0 left-0 top-16 heroImg max-md:w-80 max-md:h-80 max-md:left-14 max-md:top-20"
            src={moon}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
