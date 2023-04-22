import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

// Assets
import { Sphere } from "@react-three/drei";
import SignUp from "@/pages/sign-up";

const MainLayout = () => {
  return (
    <main className="homepage-container h-screen w-screen">
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
      <SignUp />
    </main>
  );
};

export default MainLayout;
