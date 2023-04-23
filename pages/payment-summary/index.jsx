import React from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import Layout from "@/layouts/MainLayout";

// Assets
import check from "@/public/appointment/check.svg";
import Guard from "@/components/payment/Guard";
import tattooExample from "@/public/payment/tattoo-example.png";
import Link from "next/link";

const PaymentSummary = () => {
  return (
    <Layout>
      <div className="w-[360px] h-[650px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-4 items-center py-10 px-8 ">
        <div className="flex flex-col items-center gap-4">
          <h1 className=" text-white font-montserrat font-medium">
            {" "}
            Payment Info
          </h1>
          <Image src={check} />
        </div>
        <h2 className="uppercase text-base font-montserrat text-white tracking-wide">
          Payment Summary
        </h2>
        <div className="bg-[#363536] w-full rounded-sm flex flex-col items-center mb-3 py-4 relative">
          <p className="text-base text-white font-montserrat font-medium mb-4">
            Product
          </p>
          <div className="h-8 w-full bg-main-red absolute top-[80px]"></div>
          <Image className="w-[100px] mb-8 z-10" src={tattooExample} />
          <div className="flex flex-col px-6 pb-4 gap-2 items-center w-full relative">
            <div className="flex items-center w-full text-white font-montserrat border-b-[1px] border-white pb-1">
              <p className="leftWho">Name</p>
              <p className="leftWho text-sm font-light">
                Minimalist Blanco y negro
              </p>
            </div>
            <div className="flex items-center w-full text-white font-montserrat border-b-[1px] border-white pb-1">
              <p className="leftWho">Size</p>
              <p className="leftWho text-sm font-light">15x15</p>
            </div>
            <p className="flex items-center justify-center text-white bg-main-red w-full h-11 absolute -bottom-11 rounded-total">
              TOTAL = USD $150.85
            </p>
          </div>
        </div>
        <Link
          className="w-full h-11 bg-red-600 drop-shadow-xl rounded-md text-white flex items-center justify-center mt-6"
          href="/"
          onClick={() => Cookies.remove("loggedin")}
        >
          Home
        </Link>
      </div>
    </Layout>
  );
};

export default PaymentSummary;
