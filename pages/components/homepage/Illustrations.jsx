import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Book from "./Book";

const Illustrations = () => {
  return (
    <>
      <Canvas camera={{ fov: 85, position: [5, 0, 12] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <Book />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <p className="bg-white w-[200px] h-[80px] p-3 rounded-lg text-dark-gray font-light text-sm absolute top-48 -right-16 max-md:-top-72 max-md:-left-52 bottom-0 max-md:m-auto">
        We have a large galery of illustrations that you can use to create your
        tattoo.
      </p>
    </>
  );
};

export default Illustrations;
