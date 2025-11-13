import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { IoLogoDesignernews } from "react-icons/io5";
import { SiTestcafe } from "react-icons/si";
import { IoPlayCircleOutline } from "react-icons/io5";


export default function MainHero() {
    return (
        <>
            <div className="bg-[#E3EFFD] flex flex-col items-center justify-around min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 py-16 sm:py-20">
                <div className="mt-8 md:mt-0 w-full   flex justify-center ">
                    <img src="/images/haris.jpg" alt="Haris Ahmad"
                        className="w-36 h-36 border-2 border-[#3676FF] hover:-translate-y-1 rounded-full object-cover shadow-lg hover:shadow-xl transition-transform duration-300 "
                    />
                </div>
                <div className="flex flex-col gap-6 w-full ">
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold text-gray-900 leading-tight">
                            Hi, I’m <span className="text-[#64A1FD]">Haris Ahmad</span> — a <span className="font-medium">Front-End Developer</span>
                        </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center  gap-4 sm:gap-6">
                        <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
                            <CgWebsite size={22} className="text-[#64A1FD]" />
                            <p className="text-sm sm:text-base font-semibold text-gray-800">Web Development</p>
                        </div>
                        <span className="text-[#78848E] hidden sm:flex">•</span>
                        <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
                            <IoLogoDesignernews size={22} className="text-[#64A1FD]" />
                            <p className="text-sm sm:text-base font-semibold text-gray-800">Web Design</p>
                        </div>
                        <span className="text-[#78848E] hidden sm:flex">•</span>
                        <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
                            <SiTestcafe size={22} className="text-[#64A1FD]" />
                            <p className="text-sm sm:text-base font-semibold text-gray-800">Web Testing</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-center text-[#99A2AF] text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto ">
                            Lorem ipsum dolor sit amet consectetur adipisicing evetr rest elit. Beatae ratione mollitia eum. Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className="flex flex-row justify-center gap-8">
                        <a href="#work" className="bg-black text-white text-xs sm:text-sm font-normal px-6 py-2 hover:bg-orange-400 transition-transform duration-300 border-b-4 border-r-4 border-orange-400 ">
                            View My Work
                        </a>
                        <a href="#video" className="flex items-center text-xs sm:text-sm font-normal gap-1">
                            View Video
                            <IoPlayCircleOutline size={24} />
                        </a>
                    </div>
                </div>
            </div>




        </>
    )
}
