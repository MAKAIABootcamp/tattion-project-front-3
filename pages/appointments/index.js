import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase";
import { collection, doc, getDoc, limit } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Assets
import { FaArrowLeft } from "react-icons/fa";

const Appointments = () => {
  const router = useRouter();

  const { currentUser } = useAuth();

  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    const userDocRef = doc(collection(db, "users"), currentUser.uid);

    await getDoc(userDocRef).then((res) => {
      setAppointments(res.data().appointments);
    });
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <section className="homepage-container flex items-center justify-center">
      <div className="bg-gray-black h-[600px] w-[700px] p-6 rounded-sm flex flex-col gap-5">
        <div className="text-white flex justify-between items-center">
          <FaArrowLeft
            className="cursor-pointer font-bold text-2xl hover:text-red-600 "
            onClick={() => router.push("/welcome")}
          />
          <h1 className="right text-xl font-montserrat text-center tracking-wide">
            Your Appointments
          </h1>
        </div>
        <ul className="flex flex-col gap-3 w-full px-8 overflow-y-scroll overflow-x-hidden">
          {appointments.length > 0 &&
            appointments.map((appointment, i) => (
              <li
                key={i}
                className="text-white z-50 flex justify-around items-center px-6 py-8 appointment"
              >
                <div className="flex flex-col items-center gap-3">
                  <p className="text-gray-400">Artist</p>
                  <div className="flex items-center gap-3">
                    <p>{appointment.artist.name}</p>
                    <Image
                      width={30}
                      height={30}
                      priority
                      src={appointment.artist.img}
                      alt={appointment.artist.name}
                      className="rounded-xl w-12 h-12 object-cover"
                    />
                  </div>
                </div>
                <Image
                  width={120}
                  height={120}
                  src={appointment.img}
                  alt="tattoo"
                  priority
                  className="w-auto h-auto"
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Appointments;
