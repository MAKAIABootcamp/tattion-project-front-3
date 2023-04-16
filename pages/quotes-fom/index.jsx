import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const QuotesForm = () => {
    const router = useRouter();
    const { image } = router.query;
    const [bodyPart, setBodyPart] = useState("");
    const [skinTone, setSkinTone] = useState("");
    const [allergies, setAllergies] = useState("");

    const options = [
        { value: "arm", label: "arm" },
        { value: "leg", label: "leg" },
        { value: "back", label: "back" },
        { value: "chest", label: "chest" },
    ];

    const optionsSkin = [
        { value: "light", label: "light" },
        { value: "dark", label: "dark" },
    ];

    const handleBodyPartChange = (event) => {
        setBodyPart(event.target.value);
    };
    const handleSkinToneChange = (event) => {
        setSkinTone(event.target.value);
    };

    const handleAllergiesChange = (event) => {
        setAllergies(event.target.value);
    };

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
                <article className="w-[700px] h-[600px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-5 items-center py-12">
                    <h2 className="font-montserrat font-semibold text-white">
                        chosen design
                    </h2>

                    {image && (
                        <img
                            src={image}
                            alt="selected design"
                            className="h-[200px] rounded"
                        />
                    )}
                    <span className="font-montserrat font-semibold text-white">
                        share with us more details
                    </span>

                    <form className="grid grid-cols-2 gap-5  place-items-center w-[90%] ">
                        <div className="flex gap-2 bg-gray-950 shadow-lg shadow-black p-2  justify-between rounded-full w-[160px]">
                            <span className="font-montserrat  text-white">
                                Color Tattoo
                            </span>
                            <label class="toggler-wrapper style-1">
                                <input type="checkbox" />
                                <div class="toggler-slider">
                                    <div class="toggler-knob"></div>
                                </div>
                            </label>
                        </div>
                        <div className="flex ">
                            <label className="flex items-center justify-between px-5 w-[350px]  font-montserrat  text-white bg-gray-950 shadow-lg shadow-black p-2 rounded-full">
                                Area of the body
                                <select
                                    value={bodyPart}
                                    onChange={handleBodyPartChange}
                                    className="text-black h-7 rounded"
                                >
                                    <option
                                        value=""
                                        className="rounded font-montserrat  "
                                    >
                                        Select an option
                                    </option>
                                    {options.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                            className="capitalize"
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="flex gap-2 justify-between  bg-gray-950 shadow-lg shadow-black p-2 rounded-full w-[160px]">
                            <span className="font-montserrat  text-white">
                                Cover Tattoo
                            </span>
                            <label class="toggler-wrapper style-1">
                                <input type="checkbox" />
                                <div class="toggler-slider">
                                    <div class="toggler-knob"></div>
                                </div>
                            </label>
                        </div>
                        <div className="flex ">
                            <label className="flex items-center justify-between w-[350px] px-5  font-montserrat  text-white bg-gray-950 shadow-lg shadow-black p-2 rounded-full">
                                Skin Tone
                                <select
                                    value={skinTone}
                                    onChange={handleSkinToneChange}
                                    className="text-black h-7 rounded"
                                >
                                    <option
                                        value=""
                                        className="rounded font-montserrat  "
                                    >
                                        Select an option
                                    </option>
                                    {optionsSkin.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                            className="capitalize"
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="flex gap-5 bg-gray-950 justify-between  shadow-lg shadow-black p-2 rounded-full w-[160px]">
                            <span className="font-montserrat  text-white">
                                first time?
                            </span>
                            <label class="toggler-wrapper style-1">
                                <input type="checkbox" />
                                <div class="toggler-slider">
                                    <div class="toggler-knob"></div>
                                </div>
                            </label>
                        </div>

                        <div className="flex gap-5 bg-gray-950 shadow-lg justify-between px-5   shadow-black p-2 rounded-full w-[350px]">
                            <span className="font-montserrat  text-white">
                                Pathologies or allergies
                            </span>
                            <label class="toggler-wrapper style-1">
                                <input type="checkbox" />
                                <div class="toggler-slider">
                                    <div class="toggler-knob"></div>
                                </div>
                            </label>
                        </div>
                        <Link href={"/welcome"}>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 h-10 bg-red-600 drop-shadow-xl rounded-md text-white px-6 relative left-44"
                            >
                                Enviar
                            </button>
                        </Link>
                    </form>
                </article>
            </section>
        </main>
    );
};

export default QuotesForm;
