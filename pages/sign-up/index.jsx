import Link from "next/link";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/layouts/MainLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignUpArtist from "../components/sign-up-artists";
const SignUp = () => {
  const [isTattooistForm, setIsTattooistForm] = useState(true);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { signUp } = useAuth();
  const onSubmit = async (data) => {
    await signUp(data.email, data.password, data.name);
    router.push("/welcome");
  };
  return (
    <Layout>
      <div className="w-[650px] h-[450px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex gap-4 items-center px-8">
        <h1 className=" m-auto text-white font-montserrat font-semibold text-5xl text-center leading-[3.5rem]">
          Create <span className="text-red-400">an</span> Account
        </h1>
        {isTattooistForm ? (
          <motion.form
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            exit={{
              opacity: 0,
              scale: 0.5,
              transition: 0.1,
            }}
            className="w-full p-5 flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl  shadow-lg text-white px-6 input"
                {...register("name", { required: true })}
              />
              <input
                type="text"
                placeholder="Email"
                autoComplete="current-email"
                className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl shadow-lg text-white px-6 input"
                {...register("email", { required: true })}
              />
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl shadow-lg text-white px-6 input"
                {...register("password", { required: true })}
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <button
                className="w-full h-10 bg-red-600 drop-shadow-md rounded-md font-montserrat shadow-md shadow-red-600/70  text-white px-6 hover:bg-red-500 hover:scale-y-105 duration-100"
                type="submit"
              >
                Sign Up
              </button>
              <button
                className="w-full h-10 bg-gray-600 drop-shadow-md rounded-md font-montserrat  shadow-md shadow-gray-500/40  text-white px-6 hover:bg-gray-500 hover:scale-y-105 duration-100"
                type="button"
                onClick={() => setIsTattooistForm(false)}
              >
                Sign up as Artist
              </button>
              <Link
                href="/sign-in"
                className=" flex w-full h-10 bg-black drop-shadow-xl rounded-md font-montserrat shadow-lg shadow-black/90  text-white px-6 hover:bg-black/50 hover:scale-y-105 duration-100 items-center justify-center"
              >
                Already have an account? sign-in
              </Link>
            </div>
          </motion.form>
        ) : (
          <section className="w-[650px] h-[600px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex gap-4 items-center px-8">
            <h1 className=" m-auto text-white font-montserrat font-semibold text-5xl text-center">
              Create <span className="text-red-400">an</span> Account
            </h1>
            <motion.article
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{
                opacity: 0,
                scale: 0.5,
                transition: 0.1,
              }}
            >
              <SignUpArtist />
              <button
                className=" w-[300px]  h-10 bg-gray-600 drop-shadow-xl rounded-md  shadow-lg shadow-gray-500/40 text-white px-6 hover:bg-gray-500 hover:scale-y-105 duration-100"
                type="button"
                onClick={() => setIsTattooistForm(true)}
              >
                Sign up as User
              </button>
              <Link
                href="/sign-in"
                className="flex w-[300px] mt-4 bg-black shadow-lg shadow-black hover:bg-black/50  px-6 h-10 items-center justify-center rounded-full  font-montserrat  text-white hover:scale-y-105 duration-100"
              >
                Already have an account? sign-in
              </Link>
            </motion.article>
          </section>
        )}
      </div>
    </Layout>
  );
};
export default SignUp;
