import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Logos from "./Logos2";

const Development = () => {
  return (
    <>
      {/* <Canvas className="w-1/2 absolute left-0">
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <OrbitControls enableZoom={false} />
        <ReactModel />
      </Canvas> */}
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <OrbitControls />
        <Logos />
      </Canvas>
      <p className="bg-white w-[200px] h-[80px] p-5 rounded-lg text-dark-gray font-light text-sm absolute top-48 -right-16 max-md:m-auto max-md:-top-[10px] max-md:-left-52 ">
        Technologies we used to develop this project.
      </p>
    </>
  );
};

export default Development;
