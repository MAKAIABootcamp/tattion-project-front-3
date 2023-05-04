import { useLoader } from "@react-three/fiber";
import React, { useMemo } from "react";
import circleImg from "@/public/experience/circle.png";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

const Particles = () => {
  //   const imgText = useLoader(THREE.TextureLoader, circleImg);

  const count = 500;

  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      sizes[i] = Math.random() < 0.03 ? 15 : 6;
    }

    return [positions, sizes];
  });

  return (
    <div className="bg-black h-screen">
      <Canvas>
        {/* <points>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attachObject={["attributes", "position"]}
              count={positions.length / 3}
              itemSize={3}
              array={positions}
            />
          </bufferGeometry>
          <pointsMaterial attach="material" color={0x000000} size={0.5} />
        </points> */}
        <Sparkles />
      </Canvas>
    </div>
  );
};

export default Particles;
