import React, { useState } from "react";
import Layout from "@/layouts/MainLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Input from "./Input";

// Assets
import { FaArrowLeft } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import { updateProfile } from "firebase/auth";
import { useSelector } from "react-redux";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const CreditCard = () => {
  const VISA_MASK = "#### #### #### ####";
  const [cardNr, setCardNr] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const maskOutput = (cardNr) => {
    const cardNrSplit = cardNr.split(" ");

    if (cardNrSplit.length > 1)
      cardNrSplit[1] = "*".repeat(cardNrSplit[1].length);
    if (cardNrSplit.length > 2)
      cardNrSplit[2] = "*".repeat(cardNrSplit[2].length);
    return cardNrSplit.join(" ");
  };

  const handleCardNr = (text) => {
    if (text.match(/^\s/g)) return;
    if (!text.match(/^[0-9\s]*$/g)) return;
    if (text.length < cardNr.length) {
      setCardNr(text);
      return;
    }
    if (text.length > 19) return;
    setCardNr(
      text.replace(/\s/g, "").length % 4 === 0 && text.length !== 19
        ? text + " "
        : text
    );
  };

  const router = useRouter();

  const { quotation } = useSelector((state) => state.quote);
  const { currentUser } = useAuth();

  const updateUserInfo = async () => {
    const userDocRef = doc(collection(db, "users"), currentUser.uid);

    await setDoc(userDocRef, quotation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUserInfo();

    router.push("/payment-summary");
  };

  return (
    <Layout>
      <div className="w-[670px] h-[650px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-2 items-center py-6">
        <Link href={"/payment"}>
          <FaArrowLeft className="text-2xl absolute text-white top-8 left-10  " />
        </Link>
        <h1 className=" text-white font-montserrat mb-3 font-semibold">
          Payment Info
        </h1>
        <div className="w-[350px] max-w-[90%] bg-gradient-to-r from-slate-600 via-slate-900 to-slate-950 rounded-xl shadow-xl p-6 text-white flex flex-col justify-between">
          <div className="flex justify-between mb-6">
            <div className="bg-gradient-to-bl from-gray-400 to-gray-300 w-12 h-8 rounded-lg" />
            <span className="text-right font-bold text-xl">VISA</span>
          </div>
          <label
            htmlFor="cardNr"
            className="text-md md:text-2xl cursor-pointer w-full drop-shadow-md font-source-code"
          >
            {(
              maskOutput(cardNr) +
              VISA_MASK.slice(cardNr.length, VISA_MASK.length)
            )
              .split("")
              .map((c, i) => (
                <motion.span
                  className={(i + 1) % 5 !== 0 && "inline-block"}
                  key={c + "-" + i}
                  initial={{ y: "25%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {c}
                </motion.span>
              ))}
          </label>
          <div className="info flex justify-between mt-5">
            <div>
              <p className="text-slate-300 text-xs">Card Holder</p>
              <label
                htmlFor="cardHolder"
                className="uppercase font-bold text-sm w-24 cursor-pointer drop-shadow-md font-source-code"
              >
                {cardHolder !== "" ? cardHolder : "Full name"}
              </label>
            </div>
            <div>
              <p className="text-slate-300 text-xs">Expires</p>
              <span className="uppercase font-bold text-sm drop-shadow-md font-source-code">
                {expiryDate !== "" ? expiryDate : "MM/YY"}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[350px] max-w-full shadow-2xl rounded-xl p-6 flex flex-col relative">
          <Input
            label="Card number"
            value={cardNr}
            cb={handleCardNr}
            id="cardNr"
          />
          <Input
            label="Card holder"
            value={cardHolder}
            cb={setCardHolder}
            id="cardHolder"
          />
          {/* <Input
            label="Good Thru"
            value={expiryDate}
            cb={setExpiryDate}
            id="goodThru"
          /> */}
          <button
            className=" h-10 bg-red-600 drop-shadow-xl w-full mt-5 rounded-md text-white px-6"
            onClick={handleSubmit}
          >
            Pay
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CreditCard;
