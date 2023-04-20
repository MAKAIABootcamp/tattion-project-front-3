import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { ImArrowUpRight2 } from "react-icons/im";

const QuotesForm = () => {
    const router = useRouter();
    const { image } = router.query;
    const imageUrl = router.query.imageUrl;

    const [bodyPart, setBodyPart] = useState("");
    const [skinTone, setSkinTone] = useState("");
    const [allergies, setAllergies] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const [selectedTone, setSelectedTone] = useState(null);

    const skinTones = [
        { id: 1, color: "#e8caa8" },
        { id: 2, color: "#ecc083" },
        { id: 3, color: "#9d583b" },
    ];

    const handleToneClick = (id) => {
        setSelectedTone(id);
    };

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
                <article className="w-[360px] h-[650px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-5 items-center py-12">
                    <h2 className="font-montserrat font-semibold text-white">
                        chosen design
                    </h2>
                    <Link href={"/designs"}>
                        <FaArrowLeft className="text-2xl absolute text-white top-4 left-10  " />
                    </Link>
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            className="h-[200px] w-[200px]  rounded"
                        />
                    )}
                    {image && (
                        <img
                            src={image}
                            alt="selected design"
                            className="h-[200px] rounded "
                        />
                    )}
                    <span className="font-montserrat font-semibold text-white">
                        share with us more details
                    </span>

                    <button
                        onClick={() => {
                            setModalOpen(true);
                        }}
                        className="flex gap-2 items-center justify-center bg-red-600 hover:bg-red-700 text-white font-montserrat font-semibold py-2 px-4 rounded mt-4 transition-all"
                    >
                        Continue <ImArrowUpRight2 />
                    </button>

                    <AnimatePresence>
                        {modalOpen && (
                            <div className="fixed top-0 left-0 bottom-0 right-0  flex flex-col items-center justify-center ">
                                <motion.div
                                    key="modal2"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.5,
                                        transition: 0.4,
                                    }}
                                    className="flex flex-col bg-gray-black rounded-md p-4 w-[360px] h-[650px]  items-center justify-center text-center"
                                >
                                    <form className="flex flex-col gap-5  items-center">
                                        <div className="flex gap-2 bg-black shadow-lg shadow-black p-2 h-12 items-center   justify-between rounded-full w-[160px]">
                                            <span className="font-montserrat  text-white">
                                                Color Tattoo
                                            </span>
                                            <label className="toggler-wrapper style-1">
                                                <input type="checkbox" />
                                                <div className="toggler-slider">
                                                    <div className="toggler-knob"></div>
                                                </div>
                                            </label>
                                        </div>

                                        <div className="flex gap-2 justify-between  bg-black shadow-lg h-12 items-center  shadow-black p-2 rounded-full w-[160px]">
                                            <span className="font-montserrat  text-white">
                                                Cover Tattoo
                                            </span>
                                            <label className="toggler-wrapper style-1">
                                                <input type="checkbox" />
                                                <div className="toggler-slider">
                                                    <div className="toggler-knob"></div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex gap-5 bg-black justify-between  shadow-lg h-12 items-center  shadow-black p-2 rounded-full w-[160px]">
                                            <span className="font-montserrat  text-white">
                                                first time?
                                            </span>
                                            <label className="toggler-wrapper style-1">
                                                <input type="checkbox" />
                                                <div className="toggler-slider">
                                                    <div className="toggler-knob"></div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex gap-5 bg-black shadow-lg justify-between px-5 h-12 items-center  shadow-black p-2 rounded-full w-[300px]">
                                            <span className="font-montserrat  text-white">
                                                Pathologies or allergies
                                            </span>
                                            <label className="toggler-wrapper style-1">
                                                <input type="checkbox" />
                                                <div className="toggler-slider">
                                                    <div className="toggler-knob"></div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex ">
                                            <span className="flex items-center justify-between px-5 w-[300px]  font-montserrat h-12  text-white bg-black shadow-lg shadow-black p-2 rounded-full">
                                                Area of the body
                                                <select
                                                    value={bodyPart}
                                                    onChange={
                                                        handleBodyPartChange
                                                    }
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
                                            </span>
                                        </div>
                                        <div className="flex  items-center">
                                            <span className="flex items-center justify-between px-5 w-[300px]  font-montserrat h-12  text-white bg-black shadow-lg shadow-black p-2 rounded-full">
                                                Skin tone
                                                <div className="flex items-center justify-center">
                                                    {skinTones.map((tone) => (
                                                        <div
                                                            key={tone.id}
                                                            className={`w-5 h-5 rounded-full mx-2 cursor-pointer ${
                                                                tone.id ===
                                                                selectedTone
                                                                    ? "border-2 border-black"
                                                                    : "border-2 border-transparent"
                                                            }`}
                                                            style={{
                                                                backgroundColor:
                                                                    tone.color,
                                                            }}
                                                            onClick={() =>
                                                                handleToneClick(
                                                                    tone.id
                                                                )
                                                            }
                                                        />
                                                    ))}
                                                </div>
                                                <div className=" flex items-center justify-center">
                                                    {selectedTone && (
                                                        <div
                                                            className="w-8 h-8 rounded-full border-2 border-black"
                                                            style={{
                                                                backgroundColor:
                                                                    skinTones.find(
                                                                        (
                                                                            tone
                                                                        ) =>
                                                                            tone.id ===
                                                                            selectedTone
                                                                    ).color,
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between w-[300px] px-5  font-montserrat h-12  text-white bg-black shadow-lg shadow-black p-2 rounded-full">
                                            <span>Size in CM</span>
                                            <div className="flex gap-2">
                                                <label className="bg-dark-gray flex justify-around w-20 rounded-full   p-1 items-center">
                                                    W:
                                                    <input
                                                        type="number"
                                                        className=" bg-transparent text-white w-10"
                                                    />
                                                </label>
                                                <label className="bg-dark-gray flex justify-evenly w-20 rounded-full p-1 ">
                                                    H:
                                                    <input
                                                        type="number"
                                                        className="bg-transparent text-white w-8  "
                                                    />
                                                </label>
                                            </div>
                                        </div>

                                        <Link href={"/artists"}>
                                            <button
                                                type="submit"
                                                className="w-full flex items-center justify-center gap-2 h-10 bg-red-600  hover:bg-red-400 transition-all drop-shadow-xl rounded-md text-white px-6 "
                                            >
                                                Explore Artists
                                                <BsFillSendFill />
                                            </button>
                                        </Link>
                                    </form>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-montserrat font-semibold transition-all  py-2 px-4 rounded mt-4"
                                        onClick={() => setModalOpen(false)}
                                    >
                                        Close
                                    </button>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </article>
            </section>
        </main>
    );
};

export default QuotesForm;
