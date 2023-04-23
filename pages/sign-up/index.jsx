import Link from "next/link";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/layouts/MainLayout";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signUp } = useAuth();

  const onSubmit = async (data) => {
    return await signUp(data.email, data.password, data.name);
  };

  return (
    <Layout>
      <div className="w-[360px] h-[600px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-8 items-center py-12">
        <h1 className=" m-auto text-white font-montserrat font-semibold">
          {" "}
          Create an Account
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
              {...register("name", { required: true })}
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
              {...register("email", { required: true })}
            />
            <input
              type="text"
              placeholder="Password"
              className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <button
              className="w-full h-10 bg-red-600 drop-shadow-xl rounded-md text-white px-6"
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
