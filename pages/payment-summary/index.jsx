import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Image from "next/image";

// Assets
import check from "@/public/appointment/check.svg";
import Guard from "@/components/payment/Guard";
import tattooExample from "@/public/payment/tattoo-example.png";
import Link from "next/link";

const PaymentSummary = () => {
  return (
    <div className="homepage-container flex justify-center gap-14 items-center">
      <div className="w-[360px] h-[600px] bg-gray-black rounded-md heroImg flex flex-col  gap-5 items-center py-6 px-7">
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
        >
          Home
        </Link>
      </div>
      <div className="h-screen heroImg">
        <Canvas className="leftWho">
          <OrbitControls reverseOrbit />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Guard />
        </Canvas>
      </div>
    </div>
  );
};

export default PaymentSummary;
