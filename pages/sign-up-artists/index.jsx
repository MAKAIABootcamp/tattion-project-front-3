import Link from "next/link";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/layouts/MainLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { fileUpload } from "@/context/clodinaryConfig";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/router";

const SignUp = () => {
    const [imageURL, setImageURL] = useState("");
    const router = useRouter();
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const imageUrl = await fileUpload(file);
        setImageURL(imageUrl);
        return imageUrl;
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                name: Yup.string().required("Required"),
                photo: Yup.mixed().required("Required"),
                styles: Yup.string(Yup.string()).min(
                    1,
                    "At least one style is required"
                ),
                email: Yup.string().required("Required").email("Invalid email"),
                password: Yup.string()
                    .required("Required")
                    .min(8, "Password must be at least 8 characters"),
            })
        ),
    });

    const { signUp } = useAuth();

    const onSubmit = async (data) => {
        const imageUrl = await handleFileUpload({
            target: { files: [data.photo[0]] },
        });

        const artistData = {
            name: data.name,
            styles: data.styles,
            photoURL: imageUrl,
        };
        console.log(artistData);
        await addDoc(collection(db, "tattooartists"), artistData);
        await signUp(data.email, data.password, data.name);

        router.push("/welcome");
    };

    return (
        <Layout>
            <div className="w-[650px] h-[500px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex gap-4 items-center px-8">
                <h1 className=" m-auto text-white font-montserrat font-semibold text-5xl text-center">
                    {" "}
                    Create <span className="text-red-400">an</span> Account
                </h1>

                <form
                    className="w-full p-5 flex flex-col gap-11"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col gap-8">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                        <label
                            className="w-full flex h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 items-center justify-center"
                            htmlFor="photo"
                        >
                            photo{" "}
                        </label>
                        <input
                            type="file"
                            id="photo"
                            accept="image/*"
                            onChange={handleFileUpload}
                            {...register("photo", { required: true })}
                        />
                        {errors.photo && (
                            <p className="text-red-500">
                                {errors.photo.message}
                            </p>
                        )}
                        <input
                            type="text"
                            placeholder="Styles (comma-separated)"
                            className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
                            {...register("styles")}
                        />
                        {errors.styles && (
                            <p className="text-red-500">
                                {errors.styles.message}
                            </p>
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <p className="text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <button
                            className="w-full h-10 bg-red-600 drop-shadow-xl rounded-md text-white px-6 hover:bg-red-500 hover:scale-y-105 duration-100"
                            type="submit"
                        >
                            Sign Up
                        </button>
                        <Link
                            href="/sign-in"
                            className="text-white font-montserrat font-medium text-sm"
                        >
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default SignUp;
