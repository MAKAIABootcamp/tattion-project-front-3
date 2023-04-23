import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import Layout from "@/layouts/MainLayout";

//assets
import logo from "@/public/landingPage/logo.svg";
import file from "@/public/welcome/file-icon.svg";
import list from "@/public/welcome/list-icon.svg";

const Welcome = () => {
  return (
    <Layout>
      <article className="w-[360px] h-[600px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-8 items-center py-12">
        <Image src={logo} alt="Logo" width={250} height={250} />

        <article className="flex flex-col items-center gap-6 mt-10">
          <NextLink href="/designs">
            <button className="w-full flex items-center justify-center gap-2 h-10 bg-red-600 hover:bg-red-400 transition-all drop-shadow-xl rounded-md text-white px-6">
              <Image src={file} alt="file icon" /> Quote Tattoo
            </button>
          </NextLink>
          <button className="w-full flex items-center justify-center gap-2 h-10 bg-red-600 drop-shadow-xl hover:bg-red-400 transition-all rounded-md text-white px-6">
            <Image src={list} alt="file icon" /> See Quotes
          </button>
        </article>
      </article>
    </Layout>
  );
};

export default Welcome;
