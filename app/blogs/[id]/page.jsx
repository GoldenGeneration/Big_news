"use client";
import React from "react";
import { blog_data, assets } from "@/assets/assets";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function page({ params }) {
  const { id } = React.use(params);
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };
  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={`/`}>
            <Image
              src={assets.brobishlogo}
                          width={180}
                          height={50}
              alt=""
              className="w-32.5 sm:w-auto rounded-2xl"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000]">
            Get Started
          </button>
        </div>
        <div className="text-center my-24 ">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-175 mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-[50%] object-cover"
            src={data.author_img}
            width={60}
            height={60}
            alt=""
          />
          <h2 className=" mt-2 pb-2 text-lg max-w-175 mx-auto font-bold">
            {data.author}
          </h2>
        </div>
      </div>
      <div className="mx-5 max-w-200 md:mx-auto -mt-25 mb-10">
              <Image className="border-3 border-white" src={data.image} width={1280} height={720} alt="" />
              <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
              <p>{data.description}</p>
      </div>
    </>
  ) : (
    <></>
  );
}

export default page;
