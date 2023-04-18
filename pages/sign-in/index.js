import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";

// Assets
import logo from "@/public/landingPage/logo.svg";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signIn, currentUser } = useAuth();
  console.log(currentUser);

  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password);
    } catch (err) {
      console.log("Incorrect email or password");
    }
  };

  return (
    <div className="homepage-container flex items-center justify-center w-screen">
      <div className="z-10">
        <div className="w-[360px] h-[600px] bg-gray-black rounded-md heroImg flex flex-col gap-10 items-center py-12 right">
          <Image src={logo} alt="Logo" width={250} height={250} />
          <form
            className="w-full p-5 flex flex-col gap-9"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Email"
                className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
                {...register("email", { required: "Email Required" })}
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
              <input
                type="text"
                placeholder="Password"
                className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
                {...register("password", { required: "Password Required" })}
              />
              {errors.password && (
                <p className="text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-center gap-4">
              <button
                className="w-full h-10 bg-red-600 drop-shadow-xl rounded-md text-white px-6"
                type="submit"
              >
                Sign In
              </button>
              <Link
                href="/sign-up"
                className="text-white font-montserrat font-medium text-sm"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[500px] z-10">
        <Spline scene="https://prod.spline.design/iDr-Fa8bUAlisSKp/scene.splinecode" />
      </div>
    </div>
  );
};

export default SignIn;
