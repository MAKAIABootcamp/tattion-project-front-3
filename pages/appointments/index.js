import { useRouter } from "next/router";

// Assets
import { SlArrowLeft } from "react-icons/sl";

const Appointments = () => {
  const router = useRouter();

  return (
    <section className="homepage-container flex items-center justify-center">
      <div className="bg-gray-black w-[700px] p-6 rounded-sm flex flex-col gap-5">
        <div className="text-white flex justify-between items-center">
          <SlArrowLeft
            className="cursor-pointer left font-bold text-2xl"
            onClick={() => router.push("/welcome")}
          />
          <h1 className="right text-xl font-montserrat tracking-wide">
            Your Appointments
          </h1>
        </div>
        <ul className="flex flex-col gap-3"></ul>
      </div>
    </section>
  );
};

export default Appointments;
