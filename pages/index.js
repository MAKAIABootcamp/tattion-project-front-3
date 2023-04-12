import { Lato, Montserrat } from "next/font/google";

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
  return (
    <main className={`${LatoFont.variable} ${MontserratFont.variable}`}></main>
  );
}
