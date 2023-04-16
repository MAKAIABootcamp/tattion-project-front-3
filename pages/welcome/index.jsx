import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Link from "next/link";
import Image from "next/image";

//assets
import logo from "@/public/landingPage/logo.svg";
import file from "@/public/welcome/file-icon.svg";
import list from "@/public/welcome/list-icon.svg";

const Welcome = () => {
    return (
        <main className="homepage-container">
            <section className="h-screen w-screen relative">
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
                <article className="w-[360px] h-[600px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-8 items-center py-12">
                    <Image src={logo} alt="Logo" width={250} height={250} />

                    <article className="flex flex-col items-center gap-6 mt-10">
                        <Link href="/designs">
                            <button className="w-full flex items-center justify-center gap-2 h-10 bg-red-600 drop-shadow-xl rounded-md text-white px-6">
                                <Image src={file} alt="file icon" /> Quote
                                Tattoo
                            </button>
                        </Link>
                        <button className="w-full flex items-center justify-center gap-2 h-10 bg-red-600 drop-shadow-xl rounded-md text-white px-6">
                            <Image src={list} alt="file icon" /> See Quotes
                        </button>
                    </article>
                </article>
            </section>
        </main>
    );
};

export default Welcome;