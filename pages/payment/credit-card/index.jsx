import Image from "next/image";
import React from "react";
import Layout from "@/layouts/MainLayout";

// Assets
import card from "@/public/payment/card.png";
import { AiFillCreditCard } from "react-icons/ai";
import { BsCalendarWeekFill } from "react-icons/bs";
import { Tb123 } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/router";

const CreditCard = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push("/payment-summary");
  };

  return (
    <Layout>
      <div className="w-[360px] h-[600px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-2 items-center py-6">
        <h1 className=" text-white font-montserrat font-semibold">
          {" "}
          Payment Info
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-white text-sm font-montserrat tracking-wide m-2">
            Credit/Debit Card
          </p>
          <Image src={card} />
        </div>
        <form
          className="w-full p-5 flex flex-col gap-11"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-8">
            <div className="h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex items-center gap-3">
              <AiFillCreditCard />
              <input
                type="text"
                placeholder="Card Number"
                className="w-full bg-inherit text-inherit"
              />
            </div>
            <div className="h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex items-center gap-3">
              <BsCalendarWeekFill />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-inherit text-inherit"
              />
            </div>
            <div className="h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex items-center gap-3">
              <Tb123 />
              <input
                type="text"
                placeholder="cvc"
                className="w-full bg-inherit text-inherit"
              />
            </div>
            <div className="h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex items-center gap-3">
              <FaUserAlt />
              <input
                type="text"
                placeholder="Name on Card"
                className="w-full bg-inherit text-inherit"
              />
            </div>
          </div>
          <button className="w-full h-10 bg-red-600 drop-shadow-xl rounded-md text-white px-6">
            Pay
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreditCard;
