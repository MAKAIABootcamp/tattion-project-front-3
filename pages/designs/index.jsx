import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

//assets
import upload from "@/public/designs/upload-icon.svg";

const Designs = () => {
    const router = useRouter();
    const [image, setImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const arrayStyles = [
        {
            title: "Neo-traditional",
            img: "https://i.ibb.co/2FjchK1/imagen-1-calavera.jpg",
            images: [
                "https://i.ibb.co/qW7PMNt/imagen-2-tigre.jpg",
                "https://i.ibb.co/f1XNC3y/imagen-3-monito.jpg",
                "https://i.ibb.co/2FjchK1/imagen-1-calavera.jpg",
                "https://i.ibb.co/n1smg6h/imange-9-minion.jpg",
                "https://i.ibb.co/zVpVRWc/imagen-10-mosaico.jpg",
                "https://i.ibb.co/vZj1vtt/imagen-8-lupa.jpg",
                "https://i.ibb.co/fkHLhBb/imagen-6-manga-tigre.jpg",
                "https://i.ibb.co/t38fHsJ/imagen-7-serpiente.jpg",
                "https://i.ibb.co/WVDcHq5/imagen-4-chica.jpg",
                "https://i.ibb.co/RBjzKjy/imagen-5-perritu.jpg",
            ],
        },
        {
            title: "FullColor",
            img: "https://i.ibb.co/cLHLMWB/imagen-8-wizard.jpg",
            images: [
                "https://i.ibb.co/cLHLMWB/imagen-8-wizard.jpg",
                "https://i.ibb.co/s25xR7H/imagen-7-escultura.jpg",
                "https://i.ibb.co/6n30qVK/imagen-6-leon.jpg",
                "https://i.ibb.co/3W3sTym/imagen-4-manga-pantera.jpg",
                "https://i.ibb.co/Zcp7z9H/imagen-5-calavera.jpg",
                "https://i.ibb.co/26MH2SD/imagen-3-manga-color.jpg",
                "https://i.ibb.co/T2ncLDd/imagen-2-leon.jpg",
                "https://i.ibb.co/d73bnRC/imagen-1-art.jpg",
                "https://i.ibb.co/chwN535/imagen-9-monito.jpg",
                "https://i.ibb.co/T2SbGcH/imagen-10-mario.jpg",
            ],
        },
        {
            title: "Realism",
            img: "https://i.ibb.co/KbbHPRq/imagen-1-perrito.jpg",
            images: [
                "https://i.ibb.co/5jm3QQ8/imagen-10-messi.jpg",
                "https://i.ibb.co/0f7NMYp/imagen-9-mujer-lobo.jpg",
                "https://i.ibb.co/Mc6Hnsn/imagen-8-jon-snow.jpg",
                "https://i.ibb.co/hFk6WYN/imagen-7-ronaldino.jpg",
                "https://i.ibb.co/GswwzKk/imagen-6-catrina.jpg",
                "https://i.ibb.co/cQTrDw0/imagen-5-batman.jpg",
                "https://i.ibb.co/vwGk6Rh/imagen-4-jordan.jpg",
                "https://i.ibb.co/dBSTVRX/imagen-3-leon.jpg",
                "https://i.ibb.co/KbbHPRq/imagen-1-perrito.jpg",
                "https://i.ibb.co/tXs10jZ/imagen-2-reloj-brazo.jpg",
            ],
        },
        {
            title: "Watercolor",
            img: "https://i.ibb.co/DK78wT0/imagen-1-pandita.jpg",
            images: [
                "https://i.ibb.co/JByqqxY/imagen-4-lobo.jpg",
                "https://i.ibb.co/Jtb2cGs/imagen-3-mariposa.jpg",
                "https://i.ibb.co/Kwy6v1X/imagen-2-rosa.jpg",
                "https://i.ibb.co/DK78wT0/imagen-1-pandita.jpg",
                "https://i.ibb.co/7K671xb/imagen-10-gato.jpg",
                "https://i.ibb.co/s2ws9kW/imagen-9-yin-yan.jpg",
                "https://i.ibb.co/WvKV2Fd/imagen-8-harry-potter.jpg",
                "https://i.ibb.co/NN8sNNh/imagen-7-ancla.jpg",
                "https://i.ibb.co/7SQvJpn/imagen-5-leon.jpg",
                "https://i.ibb.co/K9Gfxqf/imagen-6-ojo.jpg",
            ],
        },
        {
            title: "Anime",
            img: "https://i.ibb.co/W24jwDf/imagen-2-demon-slayer.jpg",
            images: [
                "https://i.ibb.co/FwvzRdq/imagen-1-naruto.jpg",
                "https://i.ibb.co/MVwpd4m/imagen-10-chica-con-cuernos.jpg",
                "https://i.ibb.co/W24jwDf/imagen-2-demon-slayer.jpg",
                "https://i.ibb.co/BqH6GM7/imagen-3-pokemon.jpg",
                "https://i.ibb.co/wKBydtJ/imagen-4-anime.jpg",
                "https://i.ibb.co/zbSp2kR/imagen-5-hermanos.jpg",
                "https://i.ibb.co/wwSYkFC/imagen-6-kakashi.jpg",
                "https://i.ibb.co/qpRczCm/imagen-7-zoro.jpg",
                "https://i.ibb.co/ChmJ9w5/imagen-8-deku.jpg",
                "https://i.ibb.co/B22Fp57/imagen-9-charizard.jpg",
            ],
        },
        {
            title: "LineWork",
            img: "https://i.ibb.co/p0RX5NC/imagen-1-escultura.jpg",
            images: [
                "https://i.ibb.co/wy3Lv4P/imagen-8-manos.jpg",
                "https://i.ibb.co/gMDx7Mw/imagen-7-pi-a.jpg",
                "https://i.ibb.co/1TBGq5g/imagen-6-gato.jpg",
                "https://i.ibb.co/5LLb25Y/imagen-5-lobo.jpg",
                "https://i.ibb.co/GFvhytc/imagen-4-lego.jpg",
                "https://i.ibb.co/m8bF79T/imagen-3-la-casa-de-papel.jpg",
                "https://i.ibb.co/p0RX5NC/imagen-1-escultura.jpg",
                "https://i.ibb.co/C7RPnnj/imagen-2-mirada.jpg",
                "https://i.ibb.co/cwtbsZR/imagen-9-astronauta.jpg",
                "https://i.ibb.co/12xRhFY/imagen-10-planetas.jpg",
            ],
        },
        {
            title: "Dotwork",
            img: "https://i.ibb.co/GQqrNBk/imagen-10-ojo.jpg",
            images: [
                "https://i.ibb.co/Zdy79kH/imagen-2-buda.jpg",
                "https://i.ibb.co/RpZnHDx/imagen-1-escultura-calavera.jpg",
                "https://i.ibb.co/1n57s15/imagen-9-lobo.jpg",
                "https://i.ibb.co/GQqrNBk/imagen-10-ojo.jpg",
                "https://i.ibb.co/PGcZnwL/imagen-8-aliens.jpg",
                "https://i.ibb.co/C7kXFLr/imagen-7-calavera-con-cuernos.jpg",
                "https://i.ibb.co/51dqPcX/imagen-5-cigarrete.jpg",
                "https://i.ibb.co/6v9B254/imagen-6-espiral.jpg",
                "https://i.ibb.co/9tX0Rdq/imagen-3-venado.jpg",
                "https://i.ibb.co/hgvMWpn/imagen-4-face.jpg",
            ],
        },
        {
            title: "Traditional",
            img: "https://i.ibb.co/f9hT9Tb/imagen-10-gatito.jpg",
            images: [
                "https://i.ibb.co/2FnykBZ/imagen-4-cuervo.jpg",
                "https://i.ibb.co/6HB6ky9/imagen-3-princess.jpg",
                "https://i.ibb.co/jffTM5Q/imagen-2-rayos.jpg",
                "https://i.ibb.co/t3KcVBB/imagen-1-la-muerte.jpg",
                "https://i.ibb.co/f9hT9Tb/imagen-10-gatito.jpg",
                "https://i.ibb.co/HPcw6Xx/imagen-9-rosa-con-serpiente.jpg",
                "https://i.ibb.co/V9tczn5/imagen-7-barquito.jpg",
                "https://i.ibb.co/q7P6TQK/imagen-8-aguila.jpg",
                "https://i.ibb.co/7rP7rCQ/imagen-5-antorcha.jpg",
                "https://i.ibb.co/p4JbgMk/imagen-6-hacha.jpg",
            ],
        },
    ];

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (upload) => {
            setImage(upload.target.result);
            router.push("/quotes-fom");
        };

        reader.readAsDataURL(file);
    };

    const handleImageSelect = (image) => {
        setImage(image);
        setModalOpen(true);
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
                <article className="w-[360px] h-[650px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-6 items-center py-12">
                    <span className="font-montserrat text-xl font-bold text-white">
                        Do you have a design in mind?
                    </span>
                    <div className="bg-red-600 h-[130px] w-[260px] flex flex-col items-center rounded-xl gap-2 p-2">
                        <span className="font-montserrat font-semibold text-white">
                            upload design
                        </span>

                        <input
                            type="file"
                            id="upload-button"
                            onChange={handleImageUpload}
                            accept="image/*"
                        />
                        <label for="upload-button">
                            <Image src={upload} alt="upload icon" height={50} />
                        </label>
                        <span className="font-montserrat text-white">
                            acceptable formats .jpg .png
                        </span>
                    </div>
                    <span className="font-montserrat font-semibold text-white">
                        Still haven't chosen a design?
                    </span>
                    <span className="font-montserrat font-semibold text-white">
                        LOOK FOR ONE IN OUR GALLERY
                    </span>
                    <section className="grid grid-cols-3 gap-2  w-[80%] text-center">
                        {arrayStyles.map((item, index) => (
                            <article
                                className="flex flex-col items-center justify-center rounded-sm  w-24"
                                key={index}
                            >
                                <span className="font-montserrat text-center text-white flex justify-center text-xs font-semibold ">
                                    {item.title}
                                </span>
                                <figure
                                    className="flex flex-col items-center p-1 gap-1 cursor-pointer  bg-black rounded-sm  w-24"
                                    onClick={() => {
                                        setModalOpen(true);
                                        setSelectedItemIndex(index);
                                    }}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-16 w-20 rounded-xs"
                                    />
                                </figure>
                            </article>
                        ))}
                    </section>
                </article>
            </section>
            {modalOpen && (
                <div className="fixed top-0 left-0 bottom-0 right-0  bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center ">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-black rounded-lg p-4  items-center text-center"
                    >
                        <h2 className="font-montserrat font-semibold text-white text-xl mb-2">
                            {arrayStyles[selectedItemIndex].title}
                        </h2>
                        <div className="grid grid-cols-5 gap-2">
                            {arrayStyles[selectedItemIndex].images.map(
                                (item, index) => (
                                    <Link
                                        href={{
                                            pathname: "/quotes-fom",
                                            query: { image: item },
                                        }}
                                        key={index}
                                    >
                                        <img
                                            src={item}
                                            className="h-[150px] w-[150px] cursor-pointer rounded-lg"
                                            alt=""
                                            onClick={() =>
                                                handleImageSelect(item)
                                            }
                                        />
                                    </Link>
                                )
                            )}
                        </div>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-montserrat font-semibold py-2 px-4 rounded mt-4"
                            onClick={() => setModalOpen(false)}
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </main>
    );
};

export default Designs;
