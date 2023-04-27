import React from "react";
import Image from "next/image";
import Layout from "@/layouts/MainLayout";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

//assets
import logo from "@/public/landingPage/logo.png";
import { CgProfile } from "react-icons/cg";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";

const WelcomeArtists = () => {
    const { currentUser } = useAuth();

    return (
        <Layout>
            <article className="w-[670px] h-[400px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex justify-around gap-8 items-center">
                <Image src={logo} alt="Logo" width={300} height={280} />

                <article className="flex flex-col items-center gap-6 mr-4">
                    <Link
                        href="/profile-artist"
                        className="w-full flex items-center justify-center gap-2 h-10 bg-red-600 drop-shadow-xl hover:bg-red-400 transition-all rounded-md text-white px-12"
                    >
                        <CgProfile /> View profile
                    </Link>
                    <Link
                        href="/appointments"
                        className="w-full flex items-center justify-center gap-2 h-10 bg-red-600 drop-shadow-xl hover:bg-red-400 transition-all rounded-md text-white px-12"
                    >
                        <AiOutlineUnorderedList /> See quotes
                    </Link>
                    <Link href="/designs">
                        <button className="w-full flex items-center justify-center gap-2 h-10 bg-red-600 hover:bg-red-400 transition-all drop-shadow-xl rounded-md text-white px-12">
                            <AiOutlineCloudUpload /> Upload designs
                        </button>
                    </Link>
                    <Link
                        href="/appointments"
                        className="w-full flex items-center justify-center gap-2 h-10 bg-red-600 drop-shadow-xl hover:bg-red-400 transition-all rounded-md text-white px-12"
                    >
                        <AiOutlineCloudUpload /> Upload works
                    </Link>
                </article>
            </article>
        </Layout>
    );
};

export default WelcomeArtists;
