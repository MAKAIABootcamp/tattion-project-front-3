import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Assets
import { BsCalendar3 } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import profileImg from "@/public/appointment/profileImg.svg";
import check from "@/public/appointment/check.svg";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";

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

const SecondPage = ({ setPage }) => {
  const handleBack = () => {
    setPage(1);
  };

  return (
    <motion.div>
      <motion.div
        variants={divVariants}
        initial="hidden"
        animate="visible"
        className="w-[400px] h-[600px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-8 items-center py-12"
      >
        <HiArrowLeft
          onClick={handleBack}
          className="text-white absolute left-7 cursor-pointer"
          size={20}
        />
        <div className="flex flex-col gap-8 items-center mt-12">
          <h1 className=" m-auto text-white font-montserrat font-semibold">
            {" "}
            Your Appintment
          </h1>
          <Image src={check} />
        </div>

        <form className="w-full p-5 flex flex-col gap-9">
          <div className="flex flex-col gap-6">
            <div className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex items-center gap-3">
              <BsCalendar3 size={14} />
              <p>Date</p>
            </div>
            <div className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex items-center gap-3">
              <HiLocationMarker size={14} />
              <p>Location</p>
            </div>
            <div className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex justify-between items-center gap-3">
              <p>Artist</p>
              <Image src={profileImg} />
            </div>
          </div>
          <Link href="/payment">
            <button className="w-full h-10 bg-red-600 drop-shadow-xl rounded-md text-white px-6">
              Pay
            </button>
          </Link>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default SecondPage;
