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
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-2xl cursor-pointer hover:shadow-[-7px_7px_0px_#000]">
          Get Started
          <MoveRight />
        </button>
      </div>
          <div className="text-center my-8">
              <h1 className="text-3xl sm:text-5xl">Latest Blogs </h1>
              <p> Lorem Ipsum is simply dummy text of the printing</p>
      </div>
      <h1>Header</h1>
    </div>
  );
}

export default Header;
