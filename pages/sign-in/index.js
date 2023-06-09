// import { useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Layout from "@/layouts/MainLayout";
import Link from "next/link";

// Assets
import logo from "@/public/landingPage/logo.png";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const { signIn, error } = useAuth();

  // useEffect(() => {

  // }, []);

  const onSubmit = (data) => {
    signIn(data.email, data.password);
  };

  return (
    <Layout>
      <div className="w-[650px] h-[400px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex gap-4 items-center px-8">
        <Image
          src={logo}
          alt="Logo"
          priority
          className="w-auto h-auto"
          width={300}
          height={250}
        />
        <form
          className="w-full p-5 flex flex-col gap-9"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-5">
            <input
              type="text"
              autoComplete="current-email"
              placeholder="Email"
              className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
              {...register("email", {
                required: "Email Required",
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
            <input
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
              {...register("password", {
                required: "Password Required",
              })}
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col items-center gap-4">
            <button
              className="w-full h-10 bg-red-600 drop-shadow-xl rounded-md text-white px-6 hover:bg-red-500 hover:scale-y-105 duration-100"
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
          {error && (
            <p className="bg-red-500 text-white text-lg p-3">{error}</p>
          )}
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
