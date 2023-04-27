import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/layouts/MainLayout";
import { useDispatch } from "react-redux";
import { setQuote } from "@/slices/quoteSlice";

//assets
import upload from "@/public/designs/upload-icon.svg";
import { useGetStylestattoosCollection } from "@/hooks/useGetStylesTattoosCollection";
import { fileUpload } from "@/context/clodinaryConfig";
import { FaArrowLeft } from "react-icons/fa";

const Designs = () => {
    const router = useRouter();
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const dispatch = useDispatch();

    const { stylestattoos } = useGetStylestattoosCollection();

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const url = await fileUpload(file);
        setImageUrl(url);
        dispatch({ type: setQuote, payload: { prop: "img", data: url } });
        router.push({
            pathname: "/quotes-fom",
            query: { imageUrl: url },
        });
    };

    const handleImageSelect = (image) => {
        setImage(image);
        setModalOpen(true);
    };

    return (
        <Layout>
            <article className="w-[670px] h-[650px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col justify-center gap-3 items-center p-5">
                <span className="font-montserrat text-2xl font-bold text-white">
                    Do you have a design in mind?
                </span>
                <Link href={"/welcome"}>
                    <FaArrowLeft className="text-2xl absolute text-white top-6 left-10 hover:text-red-600 " />
                </Link>

                <div className="bg-red-600 h-[110px] w-[250px] flex flex-col items-center rounded-xl gap-3 p-2 hover:scale-105 duration-150">
                    <span className="font-montserrat font-semibold text-white">
                        Upload design
                    </span>

                    <input
                        type="file"
                        id="upload-button"
                        onChange={handleFileUpload}
                        accept="image/*"
                    />
                    <label htmlFor="upload-button">
                        <Image src={upload} alt="upload icon" height={50} />
                    </label>
                    {/* <span className="font-montserrat text-white">
            acceptable formats .jpg .png
          </span> */}
                </div>
                <span className="font-montserrat text-xl font-semibold text-white">
                    Still haven't chosen a design?
                </span>
                <span className="font-montserrat text-sm font-semibold mb-3   text-white">
                    LOOK FOR ONE IN OUR GALLERY
                </span>
                <section className="grid grid-cols-4  gap-x-12 gap-y-4 justify-center items-center ">
                    {stylestattoos?.map((item, index) => (
                        <article
                            className="flex flex-col rounded-sm  w-24"
                            key={index}
                        >
                            <figure
                                className="flex flex-col  items-center py-3  gap-1 justify-center  cursor-pointer  bg-black rounded-sm hover:bg-red-600  transition ease-in-out delay-1 hover:scale-110 w-[8rem]"
                                onClick={() => {
                                    setModalOpen(true);
                                    setSelectedItemIndex(index);
                                }}
                            >
                                <img
                                    src={item.images[0]}
                                    alt=""
                                    className="h-24 w-24  rounded"
                                />
                                <span className="font-montserrat text-center text-white  flex justify-center text-sm font-semibold ">
                                    {item.title}
                                </span>
                            </figure>
                        </article>
                    ))}
                </section>
                <AnimatePresence>
                    {modalOpen && (
                        <div className="fixed top-0 left-0 bottom-0 right-0  flex flex-col items-center justify-center ">
                            <motion.div
                                key="modal"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.5,
                                    transition: 0.1,
                                }}
                                className="bg-gray-black rounded-md p-4 w-[670px] h-[650px]  items-center text-center"
                            >
                                <h2 className="font-montserrat font-semibold text-white text-2xl mb-2">
                                    {stylestattoos[selectedItemIndex].title}
                                </h2>
                                <div className="flex flex-wrap gap-2 items-center justify-center">
                                    {stylestattoos[
                                        selectedItemIndex
                                    ].images.map((item, index) => (
                                        <Link
                                            href={{
                                                pathname: "/quotes-fom",
                                                query: { image: item },
                                            }}
                                            key={index}
                                        >
                                            <img
                                                src={item}
                                                className="h-[150px] w-[150px] cursor-pointer rounded-lg hover:opacity-60 transition ease-in-out delay-10"
                                                alt=""
                                                onClick={() =>
                                                    handleImageSelect(item)
                                                }
                                            />
                                        </Link>
                                    ))}
                                </div>
                                <button
                                    className="w-40 h-10 bg-red-600  hover:bg-red-400 transition-all  drop-shadow-xl rounded-full font-semibold text-white text-lg px-6 mt-4"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Close
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </article>
        </Layout>
    );
};

export default Designs;
