import Image from "next/image";
import { motion } from "framer-motion";
import MapView from "../components/payment/MapView";

// Assets
import { BsCalendar3 } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import profileImg from "@/public/appointment/profileImg.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

  const { quotation } = useSelector((state) => state.quote);
  console.log(quotation);

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
              <input
                type="text"
                placeholder="Date"
                className="bg-[#2b2c2c] w-full text-white"
              />
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
                width={32}
                height={32}
                className="rounded-sm object-cover pointer-events-none"
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
