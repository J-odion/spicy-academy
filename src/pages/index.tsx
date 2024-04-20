import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { NavigationMenus } from "@/components/parts/Menus";
import Headers from "@/components/parts/Headers";
import { SPGCarousel } from "@/components/parts/Carousel";
import { Youtube } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <Headers />
      <div
        className=" w-full h-[80vh] mb-10 bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url('/bghe.svg')" }}
      >
        <div className="bg-cover bg-[rgba(0,0,0,0.8)] flex flex-col w-full items-center justify-center gap-20 align-middle h-[100%]">
          <h1 className="text-white text-bold text-center text-2xl font-extrabold tracking-wide leading-6 lg:text-4xl ">
            <span className="text-brown">Learn</span> Guitar With <br />
            Spicy Guitar Academy
          </h1>
          <Button className="bg-brown h-[35px] w-[auto] rounded-2xl p-[15px] text-[14px] items-center justify-center">
            Your Guitar Journey Starts Here!
          </Button>
        </div>
      </div>
      <section className="flex my-[30px] flex-col w-full items-center justify-center gap-12 align-middle h-[100%]">
        <h1 className="text-black text-bold text-center text-2xl font-extrabold tracking-wide leading-6 lg:text-4xl">
          JOIN US FOR FREE
        </h1>
        <div className="flex w-full items-center justify-center gap-20 align-middle h-[100%]">
          <div className="flex flex-col items-center justify-center  align-middle">
            <h2 className="text-black text-bold text-center font-extrabold tracking-wide leading-6 text-md">
              Registered Students
            </h2>
            <h2 className="text-black text-bold text-center font-extrabold tracking-wide leading-6 text-md">
              10,000+
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center  align-middle">
            <h2 className="text-black text-bold text-center font-extrabold tracking-wide leading-6 text-md">
              Courses
            </h2>
            <h2 className="text-black text-bold text-center font-extrabold tracking-wide leading-6 text-md">
              101,000+
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center  align-middle">
            <h2 className="text-black text-bold text-center font-extrabold tracking-wide leading-6 text-md">
              Lessons
            </h2>
            <h2 className="text-black text-bold text-center font-extrabold tracking-wide leading-6 text-md">
              70,000+
            </h2>
          </div>
        </div>

        <SPGCarousel />

        <div className="flex pl-4 justify-center items-center gap-5 rounded-3xl border-2 border-solid border-[#D1831F]">
          
          <FaYoutube fill="red" className="text-white" />
          <p>15K subscribers on YOUTUBE</p>
          <Button className="bg-brown h-[35px] w-[auto] rounded-2xl p-[15px] text-[14px] items-center justify-center">
            FREE Guitar Lessons
          </Button>
        </div>
      </section>

      <section className="flex my-[30px] flex-col w-full items-center justify-center gap-12 align-middle h-[100%]">
        <h1 className="text-black text-bold text-center text-2xl font-extrabold tracking-wide leading-6 lg:text-4xl">OUR MISSION</h1>

        <div className="bg-[#2B1108] flex flex-col w-full py-[50px] px-[100px]">
          <div className="">
            <p className=" capitalize text-sm font-bold text-white">Spicy Guitar Academy Is Aimed At Guiding <br/> Beginners To Fulfill Their Dream Of <br/>Becoming Professional Guitar Players.</p> 
            <p className="text-[#D1831F] text-[10px] font-semibold ">- Guitarism, Igniting Creativity.</p>
            <Button className="bg-brown h-[35px] w-[auto] rounded-2xl p-[15px] text-[14px] items-center justify-center">
            Create Account
          </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
