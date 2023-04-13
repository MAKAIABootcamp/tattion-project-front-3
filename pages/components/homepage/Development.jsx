import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactModel from "./React";

const Development = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <ReactModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <p className="bg-white w-[200px] h-[80px] p-5 rounded-lg text-dark-gray font-light text-sm absolute bottom-48 -right-16">
        Technologies we used to develop this project.
      </p>
    </>
  );
};

export default Development;
