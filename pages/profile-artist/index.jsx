import React, { useEffect, useState } from "react";
import Layout from "@/layouts/MainLayout";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

//assets
import { RxInstagramLogo } from "react-icons/rx";
import { CiFacebook } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";

const ProfileArtists = () => {
    const { currentUser } = useAuth();
    const [design, setDesign] = useState(true);
    const [isActive, setIsActive] = useState(true);
    const arrayStyles = [
        {
            title: "Mike Taylor",
            img: "https://i.ibb.co/KK4Gz9V/tatuador1.jpg",
            style: "Neo-traditional",
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
            designs: [
                "https://i.ibb.co/HzBdWHn/dise-o1.jpg",
                "https://i.ibb.co/HzBdWHn/dise-o1.jpg",
                "https://i.ibb.co/HzBdWHn/dise-o1.jpg",
                "https://i.ibb.co/HzBdWHn/dise-o1.jpg",
                "https://i.ibb.co/HzBdWHn/dise-o1.jpg",
                "https://i.ibb.co/HzBdWHn/dise-o1.jpg",
                "https://i.ibb.co/HzBdWHn/dise-o1.jpg",
                "https://i.ibb.co/HzBdWHn/dise-o1.jpg",
                "https://i.ibb.co/HzBdWHn/dise-o1.jpg",
                "https://i.ibb.co/HzBdWHn/dise-o1.jpg",
            ],
        },
    ];

    return (
        <Layout>
            <article className="w-[670px] h-[600px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex justify-around gap-8 items-center">
                <Link href={"/welcome-artists"}>
                    <FaArrowLeft className="text-2xl absolute text-white top-4 left-10 hover:text-red-600   " />
                </Link>
                <article className="flex flex-col items-center gap-6 mr-4  px-8 justify-center  text-center">
                    <div className="flex flex-col items-center gap-2 justify-center  ">
                        <img
                            src={arrayStyles[0].img}
                            alt={arrayStyles[0].title}
                            className="h-40 w-36 rounded-full shadow-lg shadow-black "
                        />
                        <h2 className="font-montserrat font-semibold text-white text-xl ">
                            {arrayStyles[0].title}
                        </h2>
                        <span className="text-white text-s ">
                            {arrayStyles[0].style}
                        </span>
                        <div className="flex  gap-4 text-white text-2xl  ">
                            <RxInstagramLogo className="cursor-pointer hover:text-red-600 " />
                            <CiFacebook className="cursor-pointer hover:text-red-600 " />
                        </div>
                    </div>
                    <div className="flex justify-around mb-2 w-full">
                        <div className="w-full flex flex-col items-center">
                            <p
                                className={`cursor-pointer text-white mb-1 border-b-2 w-3/4 ${
                                    isActive ? "border-red-600" : ""
                                }`}
                                onClick={() => {
                                    setIsActive(true);
                                    setDesign(true);
                                }}
                            >
                                Works
                            </p>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <p
                                className={`cursor-pointer text-white mb-1 border-b-2 w-3/4 ${
                                    !isActive ? "border-red-600" : ""
                                }`}
                                onClick={() => {
                                    setIsActive(false);
                                    setDesign(false);
                                }}
                            >
                                Designs
                            </p>
                        </div>
                    </div>
                    {design ? (
                        <div className="flex flex-wrap justify-center gap-4">
                            {arrayStyles[0].images.map((item, index) => (
                                <img
                                    src={item}
                                    className="h-[75px] w-[75px]  rounded-lg"
                                    alt=""
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-wrap justify-center gap-4">
                            {arrayStyles[0].designs.map((item, index) => (
                                <img
                                    src={item}
                                    className="h-[75px] w-[75px]  rounded-lg"
                                    alt=""
                                />
                            ))}
                        </div>
                    )}
                </article>
            </article>
        </Layout>
    );
};

export default ProfileArtists;
