import React from "react";
import Image from "next/image";
import Layout from "@/layouts/MainLayout";
import Link from "next/link";
import Cookies from "js-cookie";

//assets
import logo from "@/public/landingPage/logo.png";
import file from "@/public/welcome/file-icon.svg";
import list from "@/public/welcome/list-icon.svg";
import { BiLogOut } from "react-icons/bi";

const Welcome = () => {
  return (
    <Layout>
      <article className="w-[670px] h-[400px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex justify-around gap-8 items-center">
        <Image
          src={logo}
          alt="Logo"
          className="w-auto h-auto"
          priority
          width={300}
          height={280}
        />

        <article className="flex flex-col items-center gap-6 mr-4">
          <Link href="/designs" className="w-full">
            <button className="w-full flex items-center justify-between gap-2 h-10 bg-red-600 hover:bg-red-400 transition-all drop-shadow-xl rounded-md text-white px-12">
              <Image src={file} alt="file icon" />{" "}
              <span className="right">Quote Tattoo</span>
            </button>
          </Link>
          <Link
            href="/appointments"
            className="w-full flex items-center justify-between gap-2 h-10 bg-red-600 drop-shadow-xl hover:bg-red-400 transition-all rounded-md text-white px-12"
          >
            <Image src={list} alt="file icon" /> See Appointments
          </Link>
          <Link
            href="/"
            onClick={() => Cookies.remove("loggedin")}
            className="w-full flex items-center justify-between gap-2 h-10 bg-red-600 drop-shadow-xl hover:bg-red-400 transition-all rounded-md text-white px-12"
          >
            <BiLogOut className="text-xl font-bold " />{" "}
            <span className="right text-center">Log Out</span>
          </Link>
        </article>
      </article>
    </Layout>
  );
};

export default Welcome;
