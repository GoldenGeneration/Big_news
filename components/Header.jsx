import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";
import { MoveRight } from "lucide-react";

function Header() {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.brobish}
          width={120}
          alt="brobish"
          className="w-20.5 sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000] cursor-pointer hover:shadow-[-10px_10px_0px_#000]">
          Get Started
          <MoveRight />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl">Latest Blogs </h1>
        <p className="mt-10 max-w-187.5 m-auto text-xs sm:text-base">
          {" "}
          Lorem Ipsum is simply dummy text of the printing
        </p>
        <form className="flex justify-between max-w-125 scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-5px_5px_0px_#000]">
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none w-auto"
          />
          <button type="submit" className="border-l py-4 px-4 sm:px-8 hover:cursor-pointer hover:bg-gray-200">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
