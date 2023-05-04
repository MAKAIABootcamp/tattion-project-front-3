import React from "react";
import Experience from "@/components/experience/Experience";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { useSelector } from "react-redux";
import Overlay from "../components/experience/Overlay";

const App = () => {
    const { play } = useSelector((state) => state.experience);

    return (
        <div className="w-screen h-screen">
            <Canvas>
                <color attach="background" />
                <ScrollControls
                    pages={play ? 40 : 0}
                    damping={0.8}
                    style={{
                        top: "10px",
                        left: "0px",
                        bottom: "10px",
                        right: "10px",
                        width: "auto",
                        height: "auto",
                        animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
                        opacity: 0,
                    }}
                >
                    <Experience />
                </ScrollControls>
                <EffectComposer>
                    <Noise opacity={0.1} />
                </EffectComposer>
            </Canvas>
            <Overlay />
        </div>
    );
};

export default App;
