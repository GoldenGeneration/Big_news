import React from "react";

import Header from "@/components/Header"; 
import Image from "next/image";
import { blog_data } from '@/assets/assets'
import { MoveRight } from "lucide-react";

function BlogItem() {
    return (
        <div className=" max-w-82.5 sm:max-w-75 bg-white border border-black black shadow-[-7px_7px_0px_#000] hover:shadow-[-10px_10px_0px_#000] hover:cursor-pointer"> 
            <Image src={blog_data[0].image} alt='' width={400} height={400} className='border-b border-black' />
            <p className="mt-5 ml-5 px-1 inline-block bg-black text-white text-sm">{blog_data[0].category}</p>
            <div className="p-5">
                <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{blog_data[0].title}</h5>
                <p className="mb-3 text-sm tracking-tight text-gray-700">{blog_data[0].description}</p>
                <div className="flex justify-between py-2">Read more <MoveRight/> </div>
            </div>

        </div>
    )
}

export default BlogItem;