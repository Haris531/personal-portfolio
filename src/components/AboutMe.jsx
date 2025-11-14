import React from 'react'
import { LuBadgeCheck } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";

export const AboutMe = () => {
    return (
        <>
            <div id="about" className="bg-[#E3EFFD] min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 py-12 space-y-8 lg:space-y-0 lg:space-x-10">
                <div className="bg-white w-full sm:w-3/4 md:w-2/3 lg:w-1/3 h-auto lg:h-[500px] flex flex-col justify-center items-center rounded-2xl shadow-lg p-8">
                    <img src="/images/harry.jpg" alt="Profile" className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full mb-6 shadow-md"/>
                    <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">Haris Ahmad</p>
                    <p className="text-gray-500 mb-6 text-sm sm:text-base">sharisahmad8811@gmail.com</p>
                    <button type="button" className="bg-blue-500 text-gray-800 font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300 text-sm sm:text-base">
                        Download CV
                    </button>
                </div>
                <div className="flex flex-col justify-between w-full sm:w-3/4 md:w-2/3 lg:w-1/3 h-auto lg:h-[500px] space-y-2">
                    <div className="bg-white rounded-2xl shadow-lg p-2 sm:p-4 flex flex-col justify-start">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">About Me</h1>
                        <div className="flex items-center gap-2 text-green-600 mb-4">
                            <LuBadgeCheck size={20} />
                            <p className="font-medium text-gray-700 text-sm sm:text-base">Open to work</p>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                             I am Haris Ahmad, a passionate software engineering student with a strong
                            interest in web development and artificial intelligence. I enjoy creating
                            user-friendly, modern web applications and continuously learning new
                            technologies.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col justify-start">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Latest Roles</h2>
                        <div className="flex items-center gap-3 mb-4">
                            <CgWebsite size={26} className="text-blue-600" />
                            <div>
                                <h1 className="font-semibold text-gray-700 text-sm sm:text-base">Web Design</h1>
                                <p className="text-gray-500 text-xs sm:text-sm">Specialization in it</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <CgWebsite size={26} className="text-blue-600" />
                            <div>
                                <h1 className="font-semibold text-gray-700 text-sm sm:text-base">Frontend Development</h1>
                                <p className="text-gray-500 text-xs sm:text-sm">React & Tailwind Focused</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
