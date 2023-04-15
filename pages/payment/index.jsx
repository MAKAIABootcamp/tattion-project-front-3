import Image from "next/image";
import React from "react";

// Assets
import tattooExample from "@/public/payment/tattoo-example.png";
import { SlArrowRight } from "react-icons/sl";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

const PayScreen = () => {
  return (
    <div className="homepage-container flex items-center justify-center w-screen">
      <div className="h-screen w-screen relative">
        <div className="w-[360px] h-[650px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-4 items-center py-10 px-8 ">
          <h1 className=" text-white font-montserrat font-semibold">
            {" "}
            Payment
          </h1>
          <div className="w-full flex flex-col gap-1">
            <div className="w-full px-8 py-6 bg-black flex items-center gap-3 rounded-xs">
              <Image src={tattooExample} />
              <p className="font-montserrat font-medium text-sm text-white text-start w-2/4">
                ref. minimalist tamaño 15x15 blanco y negro - brazo izquierdo
              </p>
            </div>
            <div className="p-3 bg-black rounded-xs flex items-center justify-between">
              <p className="font-montserrat text-sm text-white font-medium">
                Precio
              </p>
              <p className="font-montserrat text-sm text-white font-bold">
                US$ 150.85
              </p>
            </div>
            <div className="p-3 bg-black rounded-xs flex items-center justify-between">
              <p className="font-montserrat text-sm text-white font-medium">
                Quantity:
              </p>
              <p className="font-montserrat text-sm text-white font-bold py-1 px-4 border-[1px] border-red-600 rounded-xs">
                1
              </p>
            </div>
            <div className="p-3 bg-black rounded-xs flex items-center justify-between">
              <p className="font-montserrat text-sm text-white font-medium">
                Sessions Quantity :
              </p>
              <p className="font-montserrat text-sm text-white font-bold py-1 px-4 border-[1px] border-red-600 rounded-xs">
                1
              </p>
            </div>
            <div className="p-3 bg-black rounded-xs flex items-center justify-between">
              <p className="font-montserrat text-base text-white font-medium">
                Total
              </p>
              <p className="font-montserrat text-base text-white font-bold">
                US$ 150.85
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h2 className="uppercase font-montserrat text-base font-medium text-white tracking-wide pl-6">
              ¿como quieres pagar?{" "}
            </h2>
            <div className="flex flex-col gap-2 w-full">
              <div className="px-6 py-3 flex cursor-pointer hover:scale-105 duration-75 justify-between items-center text-white w-full drop-shadow-xl h-10 rounded-md bg-[#2b2c2c]">
                <p className="font-medium text-sm">Transferencia bancaria</p>
                <SlArrowRight />
              </div>
              <Link
                href="/payment/credit-card"
                className="px-6 py-3 flex cursor-pointer hover:scale-105 duration-75 justify-between items-center text-white w-full drop-shadow-xl h-10 rounded-md bg-[#2b2c2c]"
              >
                <p className="font-medium text-sm">Credit/Debit Card</p>
                <SlArrowRight />
              </Link>
              <div className="px-6 py-3 flex cursor-pointer hover:scale-105 duration-75 justify-between items-center text-white w-full drop-shadow-xl h-10 rounded-md bg-[#2b2c2c]">
                <p className="font-medium text-sm">Efectivo</p>
                <SlArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[900px] z-10">
        <Spline scene="https://prod.spline.design/iDr-Fa8bUAlisSKp/scene.splinecode" />
      </div>
    </div>
  );
};

export default PayScreen;
