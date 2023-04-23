import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Layout from "@/layouts/MainLayout";

//assets
import upload from "@/public/designs/upload-icon.svg";
import { useGetStylestattoosCollection } from "@/hooks/useGetStylesTattoosCollection";
import { fileUpload } from "@/context/clodinaryConfig";

const Designs = () => {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const { stylestattoos } = useGetStylestattoosCollection();

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const url = await fileUpload(file);
    setImageUrl(url);
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
      <article className="w-[380px] h-[700px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-3 items-center p-5 pt-14">
        <span className="font-montserrat text-xl font-bold text-white">
          Do you have a design in mind?
        </span>
        <Link href={"/welcome"}>
          <FaArrowLeft className="text-2xl absolute text-white top-6 left-10  " />
        </Link>

        <div className="bg-red-600 h-[130px] w-[260px] flex flex-col items-center rounded-xl gap-2 p-2">
          <span className="font-montserrat font-semibold text-white">
            upload design
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
        <section className="flex flex-wrap  gap-4 justify-center items-center ">
          {stylestattoos?.map((item, index) => (
            <article className="flex flex-col rounded-sm  w-24" key={index}>
              <figure
                className="flex flex-col  items-center py-2 gap-2  cursor-pointer  bg-black rounded-sm hover:bg-red-600  transition ease-in-out delay-10 hover:scale-110 w-24"
                onClick={() => {
                  setModalOpen(true);
                  setSelectedItemIndex(index);
                }}
              >
                <img
                  src={item.images[0]}
                  alt=""
                  className="h-16 w-20 rounded-full"
                />
                <span className="font-montserrat text-center text-white  flex justify-center text-xs font-semibold ">
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
                transition={{ duration: 0.5 }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  transition: 0.4,
                }}
                className="bg-gray-black rounded-md p-4 w-[360px] h-[650px]  items-center text-center"
              >
                <h2 className="font-montserrat font-semibold text-white text-xl mb-2">
                  {stylestattoos[selectedItemIndex].title}
                </h2>
                <div className="grid grid-cols-3 gap-2">
                  {stylestattoos[selectedItemIndex].images.map(
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
                          className="h-[120px] w-[120px] cursor-pointer rounded-lg hover:opacity-60 transition ease-in-out delay-10"
                          alt=""
                          onClick={() => handleImageSelect(item)}
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
        </AnimatePresence>
      </article>
    </Layout>
  );
};

export default Designs;
