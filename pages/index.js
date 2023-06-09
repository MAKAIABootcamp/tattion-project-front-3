import React, { useEffect } from "react";
import { Lato, Montserrat } from "next/font/google";
import Hero from "@/components/homepage/Hero";
import Who from "@/components/homepage/Who";
import Works from "@/components/homepage/Works";
import Contact from "@/pages/components/homepage/Contact";
import { useDispatch } from "react-redux";
import { setEnd } from "@/slices/experienceSlice";

const LatoFont = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400"],
});

const MontserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "700"],
});

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "setEnd", payload: { value: false } });
  }, []);

  return (
    <main className={`${LatoFont.variable} ${MontserratFont.variable}`}>
      <div className="homepage-container text-white">
        <Hero />
        <Who />
        <Works />
        <Contact />
      </div>
    </main>
  );
}
