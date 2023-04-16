import React from "react";
import Experience from "@/components/experience/Experience";
import { Canvas } from "@react-three/fiber";
import Particles from "../components/experience/Particles";
import { ScrollControls } from "@react-three/drei";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <color attach="background" />
        <ScrollControls pages={100} damping={0.8}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
