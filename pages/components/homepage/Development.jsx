import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactModel from "./React";

const Development = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} />
      <ReactModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Development;
