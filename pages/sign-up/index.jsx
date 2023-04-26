import Link from "next/link";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/layouts/MainLayout";
import { useRouter } from "next/router";

const SignUp = () => {
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
            <div className="w-[650px] h-[400px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex gap-4 items-center px-8">
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
