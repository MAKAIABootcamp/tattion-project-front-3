import Image from "next/image";

// Assets
import { BsCalendar3 } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import map from "@/public/appointment/map.png";
import profileImg from "@/public/appointment/profileImg.svg";

const FirstPage = ({ setPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setPage(2);
  };

  return (
    <div>
      <div className="w-[360px] h-[600px] bg-gray-black absolute top-0 left-0 bottom-0 right-0 m-auto rounded-md heroImg flex flex-col gap-8 items-center py-12">
        <h1 className=" m-auto text-white font-montserrat font-semibold">
          {" "}
          Make an Appintment
        </h1>

        <form className="w-full p-5 flex flex-col gap-9">
          <div className="flex flex-col gap-6">
            <label className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex items-center gap-3">
              <BsCalendar3 size={14} />
              <input
                type="text"
                placeholder="Date"
                className="bg-[#2b2c2c] w-full text-white"
              />
            </label>
            <Image className="w-full" src={map} />
            <label className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex items-center gap-3">
              <HiLocationMarker size={14} />
              <input
                type="text"
                placeholder="Location"
                className="bg-[#2b2c2c] w-full text-white"
              />
            </label>
            <label className="w-full h-10 rounded-md bg-[#2b2c2c] drop-shadow-xl text-white px-6 flex justify-between items-center gap-3">
              <input
                type="text"
                placeholder="Artist"
                className="bg-[#2b2c2c] w-full text-white"
              />
              <Image src={profileImg} />
            </label>
          </div>
          <div className="flex flex-col items-center">
            <button
              onClick={handleSubmit}
              className="w-full h-10 bg-red-600 drop-shadow-xl rounded-md text-white px-6"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FirstPage;