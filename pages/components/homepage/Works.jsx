import React from "react";

const Works = () => {
  const styles = {
    section: "h-screen snap-center",
  };

  return (
    <div className={`${styles.section} flex justify-center`}>
      <div className="w-[1000px] flex justify-between">
        <div className="leftWorks flex items-center">
          <ul className="flex flex-col gap-5">
            <li className="text-7xl font-lato uppercase cursor-pointer text-stroke1">
              Illustrations
            </li>
            <li className="text-7xl font-lato uppercase cursor-pointer text-stroke2">
              Social Media
            </li>
            <li className="text-7xl font-lato uppercase cursor-pointer text-stroke3">
              Our Game
            </li>
          </ul>
        </div>
        <div className="rightWorks"></div>
      </div>
    </div>
  );
};

export default Works;
