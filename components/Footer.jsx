import { assets } from "@/assets/assets";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

function Footer() {
    return (
        <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
            <Image src={assets.favicon} alt="" width={120} />
            <p className="text-sm text-white">All rights reserved. Copyright @brobish</p>
            <div>
                
            </div>
        </div>
    )
}

export default Footer;