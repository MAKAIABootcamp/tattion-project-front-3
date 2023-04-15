import { Sphere } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

const AppointmentInfo = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="homepage-container">
      <div className="h-screen w-screen relative">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.8}>
            <MeshDistortMaterial
              color="#3d1c56"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
        {page === 1 ? <FirstPage setPage={setPage} /> : <SecondPage setPage={setPage} />}
      </div>
    </div>
  );
};

export default AppointmentInfo;
