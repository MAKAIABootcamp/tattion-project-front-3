import React from "react";
import Image from "next/image";
import Layout from "@/layouts/MainLayout";

// Assets
import check from "@/public/appointment/check.svg";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import { useSelector } from "react-redux";

const PaymentSummary = () => {
  const { quotation } = useSelector((state) => state.quote);

  return (
    <Layout>
      <div className="w-[620px] h-[630px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-4 items-center py-10 px-8 ">
        <div className="flex flex-col items-center gap-4">
          <h1 className=" text-white font-montserrat font-medium">
            Payment Info
          </h1>
          <Image alt="check" src={check} />
        </div>
        <h2 className="uppercase text-base font-montserrat text-white tracking-wide">
          Payment Summary
        </h2>
        <div className="bg-[#363536] w-[350px] rounded-sm flex flex-col items-center mb-3 py-4 relative">
          <p className="text-base text-white font-montserrat font-medium mb-4">
            Product
          </p>
          <div className="h-8 w-full bg-main-red absolute top-[90px]"></div>
          <img
            className="w-[150px] h-[150px] object-cover mb-5 z-10"
            src={quotation.img}
          />
          <div className="flex flex-col px-6 pb-4 gap-2 items-center w-full relative">
            <div className="flex items-center w-full text-white font-montserrat border-b-[1px] border-white pb-1">
              <p className="leftWho">Name</p>
              <p className="leftWho text-sm font-light">
                Minimalist{" "}
                {quotation.characteristics.color ? "Colored" : "Black & White"}
              </p>
            </div>
            <div className="flex items-center w-full text-white font-montserrat border-b-[1px] border-white pb-1">
              <p className="leftWho">Size</p>
              <p className="leftWho text-sm font-light">{`${quotation.characteristics.size.width}x${quotation.characteristics.size.height}`}</p>
            </div>
            <p className="flex items-center justify-center text-white bg-main-red w-full h-11 absolute -bottom-11 rounded-total">
              TOTAL = USD $150.85
            </p>
          </div>
        </div>
        <Link
          className="w-40 py-2 h-16 bg-red-600 drop-shadow-xl hover:bg-red-400 transition-all rounded-md text-white flex items-center justify-center mt-4"
          href="/welcome"
        >
          Home
        </Link>
        <Link href={"/payment"}>
          <FaArrowLeft className="text-2xl absolute text-white top-6 left-10  hover:text-red-600   " />
        </Link>
      </div>
    </Layout>
  );
};

export default PaymentSummary;
