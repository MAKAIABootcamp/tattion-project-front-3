import Image from "next/image";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Assets
import { BsCalendar3 } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("../components/payment/MapView"), {
    ssr: false,
});

const divVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 30,
        },
    },
};

const FirstPage = ({ setPage }) => {
    const [state, setState] = useState({
        lat: null,
        lng: null,
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        setPage(2);
    };

    const dispatch = useDispatch();

    const { quotation } = useSelector((state) => state.quote);

    const handleSelectDate = (e) => {
        dispatch({
            type: "setQuote",
            payload: {
                prop: "date",
                data: e.target.value,
            },
        });
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setState({
                    lat: position.coords.longitude,
                    lng: position.coords.latitude,
                });
            },
            (error) => {
                console.log(error);
            },
            {
                enableHighAccuracy: true,
            }
        );
    }, []);

    return (
        <motion.div>
            <motion.div
                variants={divVariants}
                initial="hidden"
                animate="visible"
                className="w-[400px] h-[600px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-8 items-center py-12"
            >
                <h1 className=" m-auto text-white font-montserrat font-semibold">
                    {" "}
                    Make an Appintment
                </h1>

                <form className="w-full p-5 flex flex-col gap-9">
                    <div className="flex flex-col gap-6">
                        <label className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex items-center gap-3">
                            <BsCalendar3 size={14} />
                            <select
                                onChange={handleSelectDate}
                                className="bg-transparent w-full flex justify-between cursor-pointer outline-none"
                            >
                                <option value="">Select a Date</option>
                                <option value="Thu 4 - 9:00am">
                                    Thu 4 - 9:00am
                                </option>
                                <option value="Fri 5 10:00am">
                                    Fri 5 10:00am
                                </option>
                                <option value="Sat 6 - 2:00pm">
                                    Sat 6 - 2:00pm
                                </option>
                                <option value="Sun 7 - 12m">Sun 7 - 12m</option>
                                <option value="Mon 8 - 3:15pm">
                                    Mon 8 - 3:15pm
                                </option>
                                <option value="Tue 9 - 6:40pm">
                                    Tue 9 - 6:40pm
                                </option>
                                <option value="Wed 10 - 7:30pm">
                                    Wed 10 - 7:30pm
                                </option>
                            </select>
                        </label>
                        <MapView data={state} />
                        <label className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex items-center gap-3">
                            <HiLocationMarker size={14} />
                            <input
                                type="text"
                                disabled
                                placeholder="Llano Grande, Rionegro, Antioquia"
                                className="bg-[#2b2c2c] w-full text-white cursor-default"
                            />
                        </label>
                        <label className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex justify-between items-center gap-3">
                            <input
                                type="text"
                                placeholder={quotation.artist.name}
                                disabled
                                className="bg-[#2b2c2c] w-full text-white cursor-default"
                            />
                            <Image
                                src={quotation.artist.img}
                                alt={quotation.artist.name}
                                width={32}
                                height={32}
                                className="rounded-sm object-cover h-8 pointer-events-none"
                            />
                        </label>
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            onClick={handleSubmit}
                            className="w-full h-10 bg-red-600 drop-shadow-xl rounded-md text-white px-6"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default FirstPage;
