import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

//forms
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

//cloudinary
import { fileUpload } from "@/context/clodinaryConfig";

//firebase
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

//assets
import { FiUpload } from "react-icons/fi";

const SignUpArtist = () => {
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

  const onSubmitArtist = async (data) => {
    const imageUrl = await handleFileUpload({
      target: { files: [data.photo[0]] },
    });
    const artistData = {
      name: data.name,
      styles: data.styles,
      photoURL: imageUrl,
    };
    await addDoc(collection(db, "tattooartists"), artistData);
    await signUp(data.email, data.password, data.name);
    router.push("/welcome-artists");
  };
  return (
    <form
      className="w-[350px] p-5 flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmitArtist)}
    >
      <div className="flex flex-col gap-8">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl shadow-lg shadow-[#3b0478] text-white px-6"
          {...register("name")}
        />
        {errors.name && (
          <p className="absolute top-[100px] right-44 text-red-500">
            {errors.name.message}
          </p>
        )}
        <label
          className="w-full flex gap-1 h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl shadow-lg shadow-[#3b0478] text-white px-6 items-center justify-center"
          htmlFor="photo"
        >
          Profile Photo <FiUpload />
        </label>
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={handleFileUpload}
          {...register("photo", { required: true })}
        />
        {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
        <input
          type="text"
          placeholder="Styles (comma-separated)"
          className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl shadow-lg shadow-[#3b0478] text-white px-6"
          {...register("styles")}
        />
        {errors.styles && (
          <p className="text-red-500 absolute top-[245px] right-28">
            {errors.styles.message}
          </p>
        )}
        <input
          type="email"
          autoComplete="current-email"
          placeholder="Email"
          className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl shadow-lg shadow-[#3b0478] text-white px-6"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-red-500 absolute top-[320px] right-44">
            {errors.email.message}
          </p>
        )}
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl shadow-lg shadow-[#3b0478] text-white px-6"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="text-red-500 absolute top-[385px]  right-44">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex flex-col items-center gap-4">
        <button
          className="w-[300px] h-10 bg-red-600 drop-shadow-xl rounded-md shadow-lg shadow-red-600/70 text-white px-6 hover:bg-red-500 hover:scale-y-105 duration-100"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};
export default SignUpArtist;
