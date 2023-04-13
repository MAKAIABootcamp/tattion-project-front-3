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

  console.log("Hola");

  return (
    <div className={`${styles.section} flex justify-center`}>
      <div className="w-[1000px] flex justify-between">
        <div className="leftWorks flex items-center">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li
                className={`text-7xl font-lato uppercase cursor-pointer text-stroke${link.id}`}
                onClick={() => setWork(link.name)}
              >
                {link.name}
              </li>
            ))}
            <li className="text-7xl font-lato uppercase cursor-pointer text-stroke3">
              Our Game
            </li>
          </ul>
        </div>
        <div className="rightWorks relative">
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
