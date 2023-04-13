import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { Sphere } from "@react-three/drei";
import Link from "next/link";

const SignUp = () => {
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
        <div className="w-[360px] h-[600px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-8 items-center py-12">
          <h1 className=" m-auto text-white font-montserrat font-semibold">
            {" "}
            Create an Account
          </h1>

          <form className="w-full p-5 flex flex-col gap-11">
            <div className="flex flex-col gap-8">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
              />
              <input
                type="text"
                placeholder="Password"
                className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <button className="w-full h-10 bg-red-600 drop-shadow-xl rounded-md text-white px-6">
                Sign Up
              </button>
              <Link
                href="/sign-in"
                className="text-white font-montserrat font-medium text-sm"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
