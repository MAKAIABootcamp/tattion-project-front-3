import React from "react";
import Experience from "@/components/experience/Experience";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <color attach="background" />
        <ScrollControls pages={20} damping={0.5}>
          <Experience />
        </ScrollControls>
        <EffectComposer>
          <Noise opacity={0.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default App;
