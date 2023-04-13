import React, { useState } from "react";
import Development from "./Development";
import Illustrations from "./Illustrations";

const Works = () => {
  const [work, setWork] = useState("Illustrations");

  const links = [
    {
      id: 1,
      name: "Illustrations",
    },
    {
      id: 2,
      name: "Development",
    },
  ];

  const styles = {
    section: "h-screen snap-center",
  };

  return (
    <div className={`${styles.section} flex justify-center`}>
      <div className="w-[1000px] flex justify-between max-md:w-full max-md:flex-col">
        <div className="leftWorks flex items-center max-md:p-5 max-md:justify-center">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li
                key={link.id}
                className={`text-7xl font-lato uppercase cursor-pointer text-stroke${link.id} max-md:text-5xl`}
                onClick={() => setWork(link.name)}
              >
                {link.name}
              </li>
            ))}
            <li className="text-7xl font-lato uppercase cursor-pointer text-stroke3 max-md:text-5xl">
              Our Game
            </li>
          </ul>
        </div>
        <div className="rightWorks relative max-md:w-full">
          {work === "Illustrations" ? (
            <Illustrations />
          ) : work === "Development" ? (
            <Development />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Works;
