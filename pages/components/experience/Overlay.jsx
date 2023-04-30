import { useProgress } from "@react-three/drei";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setPlay } from "@/slices/experienceSlice";
import { useRouter } from "next/router";

export const Overlay = () => {
  const { progress } = useProgress();

  const { play, end, hasScroll } = useSelector((state) => state.experience);

  const dispatch = useDispatch();

  const router = useRouter();

  return (
    <div
      className={`absolute top-0 left-0 bottom-0 right-0 ${
        play ? "hidden" : ""
      } ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div
          className={`flex justify-center items-center flex-col h-full ${
            play ? "intro--disappear" : ""
          }`}
        >
          <h1 className="font-montserrat text-5xl tracking-widest p-0 m-0 -translate-y-1/2 absolute top-[50vh] text-white logo">
            {end ? "THANK YOU!" : "OUR TEAM"}
          </h1>
          {end ? (
            <button
              onClick={() => router.push("/")}
              className="py-4 px-8 font-montserrat text-xl tracking-widest text-white bg-red-400 rounded-sm cursor-pointer inline-block mt-[320px] explore"
            >
              Go Back
            </button>
          ) : (
            <button
              onClick={() => dispatch(setPlay())}
              className="py-4 px-8 font-montserrat text-xl tracking-widest text-white bg-red-400 rounded-sm cursor-pointer inline-block mt-[320px] explore"
            >
              Explore
            </button>
          )}
        </div>
      )}
    </div>
  );
};
