import Image from "next/image";
import React from "react";
import Layout from "@/layouts/MainLayout";

// Assets
import tattooExample from "@/public/payment/tattoo-example.png";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const PayScreen = () => {
    return (
        <Layout>
            <div className="w-[670px] h-[650px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-4 items-center py-10 px-8 ">
                <Link href={"/appointment-info"}>
                    <FaArrowLeft className="text-2xl absolute text-white top-6 left-10  " />
                </Link>
                <h1 className=" text-white font-montserrat font-semibold">
                    Payment
                </h1>
                <div className="w-[400px] flex flex-col gap-1">
                    <div className="w-full px-8 py-6 bg-black flex items-center gap-3 rounded-xs">
                        <Image src={tattooExample} />
                        <p className="font-montserrat font-medium text-sm text-white text-start w-2/4">
                            ref. minimalist tamaño 15x15 blanco y negro - brazo
                            izquierdo
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
                <div className="flex flex-col gap-4 w-[400px] items-center">
                    <h2 className="uppercase font-montserrat text-base font-medium text-white tracking-wide ">
                        ¿Your Payment Method?
                    </h2>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="px-6 py-3 flex cursor-pointer hover:scale-105 duration-75 justify-between items-center text-white w-full drop-shadow-xl h-10 rounded-md bg-[#2b2c2c]">
                            <p className="font-medium text-sm">Wire Transfer</p>
                            <SlArrowRight />
                        </div>
                        <Link
                            href="/payment/credit-card"
                            className="px-6 py-3 flex cursor-pointer hover:scale-105 duration-75 justify-between items-center text-white w-full drop-shadow-xl h-10 rounded-md bg-[#2b2c2c]"
                        >
                            <p className="font-medium text-sm">
                                Credit/Debit Card
                            </p>
                            <SlArrowRight />
                        </Link>
                        <div className="px-6 py-3 flex cursor-pointer hover:scale-105 duration-75 justify-between items-center text-white w-full drop-shadow-xl h-10 rounded-md bg-[#2b2c2c]">
                            <p className="font-medium text-sm">Cash</p>
                            <SlArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PayScreen;
