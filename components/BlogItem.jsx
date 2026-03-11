import React from "react";

import Header from "@/components/Header";
import Image from "next/image";
import { blog_data } from "@/assets/assets";
import { MoveRight } from "lucide-react";
import Link from "next/link";

function BlogItem({ title, description, category, image, id }) {
  return (
    <div className=" max-w-82.5 sm:max-w-75 bg-white border border-black black shadow-[-7px_7px_0px_#000] hover:shadow-[-10px_10px_0px_#000] hover:cursor-pointer">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="border-b border-black"
        />
      </Link>
      <p className="mt-5 ml-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <div className="flex justify-between py-2">
                  <Link href={`/blogs/${id}`}>
          Read more <MoveRight />{" "}
                  </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
