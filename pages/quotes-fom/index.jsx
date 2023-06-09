import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/layouts/MainLayout";
import { useDispatch } from "react-redux";

//assets
import { BsFillSendFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { ImArrowUpRight2 } from "react-icons/im";

const QuotesForm = () => {
    const router = useRouter();
    const { image } = router.query;
    const imageUrl = router.query.imageUrl;

    const dispatch = useDispatch();

    const [toneTattoo, setToneTattoo] = useState(false);
    const [coverTattoo, setCoverTattoo] = useState(false);
    const [firstTime, setFirstTime] = useState(false);
    const [allergies, setAllergies] = useState(false);
    const [bodyPart, setBodyPart] = useState("");
    const [selectedTone, setSelectedTone] = useState(null);
    const [tattooSize, setTattooSize] = useState({
        width: 0,
        height: 0,
    });
    const [modalOpen, setModalOpen] = useState(false);

    const [selectedToneId, setSelectedToneId] = useState(null);

    const skinTones = [
        { id: 1, color: "#e8caa8" },
        { id: 2, color: "#ecc083" },
        { id: 3, color: "#9d583b" },
    ];

    useEffect(() => {
        if (image) {
            dispatch({
                type: "setQuote",
                payload: { prop: "img", data: image },
            });
        } else if (imageUrl) {
            dispatch({
                type: "setQuote",
                payload: { prop: "img", data: imageUrl },
            });
        }
    }, []);

    const handleToneTattoo = (e) => {
        setToneTattoo(e.target.checked);
    };

    const handleCoverTattoo = (e) => {
        setCoverTattoo(e.target.checked);
    };

    const handleFirstTime = (e) => {
        setFirstTime(e.target.checked);
    };

    const handleAllergies = (e) => {
        setAllergies(e.target.checked);
    };

    const handleToneClick = (id) => {
        const color = skinTones.find((tone) => tone.id === id).color;
        setSelectedToneId(id);
        setSelectedTone(color);
    };

    const options = [
        { value: "arm", label: "arm" },
        { value: "leg", label: "leg" },
        { value: "back", label: "back" },
        { value: "chest", label: "chest" },
    ];

    const handleBodyPartChange = (event) => {
        setBodyPart(event.target.value);
    };

    const handleTattooWidth = (e) => {
        setTattooSize({
            ...tattooSize,
            width: Number(e.target.value),
        });
    };

    const handleTattooHeight = (e) => {
        setTattooSize({
            ...tattooSize,
            height: Number(e.target.value),
        });
    };

    const handleSubmit = (e) => {
        const currentCharacteristics = {
            color: toneTattoo,
            cover: coverTattoo,
            firstTatto: firstTime,
            allergies,
            area: bodyPart,
            skinTone: selectedTone,
            size: {
                width: tattooSize.width,
                height: tattooSize.height,
            },
        };

        dispatch({
            type: "setQuote",
            payload: { prop: "characteristics", data: currentCharacteristics },
        });

        e.preventDefault();
        router.push("/artists");
    };
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 50}`;
    };

    return (
        <Layout>
            <article className="w-[670px] h-[600px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-5 items-center py-12">
                <h2 className="font-montserrat font-semibold text-2xl text-white">
                    Chosen design
                </h2>
                <Link href={"/designs"}>
                    <FaArrowLeft className="text-2xl absolute text-white top-6 left-10 hover:text-red-600 " />
                </Link>
                {imageUrl && (
                    <Image
                        loader={myLoader}
                        width={300}
                        height={300}
                        src={imageUrl}
                        priority
                        alt="selected design"
                        className="h-[300px] w-[300px] object-cover rounded"
                    />
                )}
                {image && (
                    <Image
                        loader={myLoader}
                        src={image}
                        width={300}
                        height={300}
                        priority
                        alt="selected design"
                        className="h-[300px] w-[300px] rounded shadow-lg shadow-black"
                    />
                )}
                <span className="font-montserrat font-semibold text-xl text-white">
                    Share with us more details
                </span>

                <button
                    onClick={() => {
                        setModalOpen(true);
                    }}
                    className="flex gap-2 items-center justify-center bg-red-600 hover:bg-red-700 text-white font-montserrat font-semibold py-2 px-4 rounded-md mt-4 transition-all"
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
                                transition={{ duration: 0.3 }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.5,
                                    transition: 0.1,
                                }}
                                className="flex flex-col bg-gray-black rounded-md p-4 w-[670px] h-[600px]  items-center justify-center text-center"
                            >
                                <form
                                    className="flex flex-col gap-5  items-center"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="flex gap-2 bg-black shadow-lg shadow-black p-2 px-5 h-12 items-center  justify-between rounded-full w-full">
                                        <span className="font-montserrat  text-white">
                                            Colored Tattoo
                                        </span>
                                        <label className="toggler-wrapper style-1">
                                            <input
                                                type="checkbox"
                                                onChange={handleToneTattoo}
                                                value={toneTattoo}
                                            />
                                            <div className="toggler-slider">
                                                <div className="toggler-knob"></div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="flex gap-2 justify-between  bg-black shadow-lg h-12 px-5 items-center  shadow-black p-2 rounded-full w-full">
                                        <span className="font-montserrat  text-white">
                                            Tattoo to cover
                                        </span>
                                        <label className="toggler-wrapper style-1">
                                            <input
                                                type="checkbox"
                                                onChange={handleCoverTattoo}
                                                value={coverTattoo}
                                            />
                                            <div className="toggler-slider">
                                                <div className="toggler-knob"></div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="flex gap-5 bg-black justify-between  shadow-lg h-12 items-center px-5 shadow-black p-2 rounded-full w-full">
                                        <span className="font-montserrat  text-white">
                                            First tattoo?
                                        </span>
                                        <label className="toggler-wrapper style-1">
                                            <input
                                                type="checkbox"
                                                onChange={handleFirstTime}
                                                value={firstTime}
                                            />
                                            <div className="toggler-slider">
                                                <div className="toggler-knob"></div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="flex gap-5 bg-black shadow-lg justify-between w-[350px]  px-5 h-12 items-center  shadow-black p-2 rounded-full ">
                                        <span className="font-montserrat  text-white">
                                            Pathologies or allergies
                                        </span>
                                        <label className="toggler-wrapper style-1">
                                            <input
                                                type="checkbox"
                                                onChange={handleAllergies}
                                                value={allergies}
                                            />
                                            <div className="toggler-slider">
                                                <div className="toggler-knob"></div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="flex ">
                                        <span className="flex items-center justify-between px-5 w-[350px]  font-montserrat h-12  text-white bg-black shadow-lg shadow-black py-2 rounded-full">
                                            Area of the body
                                            <select
                                                data-te-select-init
                                                value={bodyPart}
                                                onChange={handleBodyPartChange}
                                                className="bg-gray-50 border h-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 cursor-pointer dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                        <span className="flex items-center justify-between px-5 w-[350px]  font-montserrat h-12  text-white bg-black shadow-lg shadow-black p-2 rounded-full">
                                            Skin tone
                                            <div className="flex items-center justify-center">
                                                {skinTones.map((tone) => (
                                                    <div
                                                        key={tone.id}
                                                        className={`w-5 h-5 rounded-full mx-2 cursor-pointer ${
                                                            tone.id ===
                                                            selectedToneId
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
                                                {selectedToneId && (
                                                    <div
                                                        className="w-8 h-8 rounded-full border-2 border-black"
                                                        style={{
                                                            backgroundColor:
                                                                skinTones.find(
                                                                    (tone) =>
                                                                        tone.id ===
                                                                        selectedToneId
                                                                ).color,
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between w-[350px] px-5  font-montserrat h-12  text-white bg-black shadow-lg shadow-black p-2 rounded-full">
                                        <span>Size in CM</span>
                                        <div className="flex gap-2">
                                            <label className="bg-dark-gray flex justify-around w-20 rounded-full   p-1 items-center">
                                                W:
                                                <input
                                                    type="number"
                                                    className=" bg-transparent text-white w-10"
                                                    onChange={handleTattooWidth}
                                                />
                                            </label>
                                            <label className="bg-dark-gray flex justify-evenly w-20 rounded-full p-1 ">
                                                H:
                                                <input
                                                    type="number"
                                                    className="bg-transparent text-white w-8"
                                                    onChange={
                                                        handleTattooHeight
                                                    }
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 h-10 bg-red-600  hover:bg-red-400 transition-all drop-shadow-xl rounded-md text-white px-6 "
                                    >
                                        Explore Artists
                                        <BsFillSendFill />
                                    </button>
                                </form>
                                <button
                                    type="button"
                                    className="bg-red-500 hover:bg-red-700 absolute top-6 right-10  text-white font-montserrat font-semibold transition-all p-1 rounded-full mt-4"
                                    onClick={() => setModalOpen(false)}
                                >
                                    <IoClose className="text-3xl" />
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </article>
        </Layout>
    );
};

export default QuotesForm;
