import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { FiFacebook } from "react-icons/fi";


export default function Footer() {
    return (
        <>
            <div className='flex flex-col bg-white px-6 sm:px-10 md:px-16 lg:px-20 w-full  py-12 border-t border-gray-300 mt-12'>
                <div className='flex flex-col sm:flex-row justify-between gap-8'>
                    <div className='flex flex-col gap-2 w-full sm:w-[30%]'>
                        <h1 className='text-base sm:text-lg md:text-sm font-bold text-gray-950'>HarisAhmad</h1>
                        <p className='text-gray-600 text-xs sm:text-sm font-medium mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, nemo.</p>
                        <div className='flex flex-row justify-start gap-x-5'>
                            <h2 className=""><FaXTwitter size={22} className="text-gray-600 hover:text-orange-500 transition-colors duration-200" /></h2>
                            <h2 className=""><IoLogoLinkedin size={22} className="text-gray-600 hover:text-orange-500 transition-colors duration-200"/></h2>
                            <h2 className=""><FaInstagramSquare size={22} className="text-gray-600 hover:text-orange-500 transition-colors duration-200"/></h2>
                            <h2 className=""><FiFacebook size={22} className="text-gray-600 hover:text-orange-500 transition-colors duration-200"/></h2>
                            <h2 className=""><TiSocialYoutube size={22} className="text-gray-600 hover:text-orange-500 transition-colors duration-200"/></h2>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-around w-full sm:w-[60%] gap-6 sm:gap-0'>
                        <div className='flex flex-col gap-y-2'>
                            <h1 className='text-sm sm:text-md font-bold text-gray-800'>Product</h1>
                            <p className='text-sm sm:text-sm text-gray-600 font-normal hover:text-gray-700 cursor-pointer'>HeadingCms</p>
                            <p className='text-sm sm:text-sm text-gray-600 font-normal'>Pricing</p>
                            <p className='text-sm sm:text-sm text-gray-600 font-normal'>Graphql</p>
                            <p className='text-sm sm:text-sm text-gray-600 font-normal'>Open Source</p>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <h1 className='text-sm sm:text-md font-bold text-gray-800'>Company</h1>
                            <p className='text-sm sm:text-sm text-gray-600 font-normal'>HeadingCms</p>
                            <p className='text-sm sm:text-sm text-gray-600 font-normal'>Pricing</p>
                            <p className='text-sm sm:text-sm text-gray-600 font-normal'>Graphql</p>
                            <p className='text-sm sm:text-sm text-gray-600 font-normal'>Open Source</p>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <h1 className='text-sm sm:text-md font-bold text-gray-800'>Partner with us</h1>
                            <p className='text-sm sm:text-sm text-gray-600 font-normal'>HeadingCms</p>
                            <p className='text-sm sm:text-sm text-gray-600 font-normal'>Pricing</p>
                            <p className='text-sm sm:text-sm text-gray-600 font-normal'>Graphql</p>
                            <p className='text-sm sm:text-sm text-gray-600 font-normal'>Open Source</p>
                        </div>
                    </div>
                </div>
              
            </div>
              <div className=' bg-[#F9FBFC] px-6 sm:px-10 md:px-16 lg:px-20 py-6 flex flex-col sm:flex-row justify-between items-center text-center gap-4 mt-8'>
                    <div><p className='text-sm sm:text-sm text-gray-600 font-normal'> &copy; 2025 HarisAhmad-webbytes</p></div>
                    <div className='flex flex-row gap-x-6'>
                        <p className='text-sm sm:text-sm text-gray-600 font-normal'>Privacy Policy </p>
                        <p className='text-sm sm:text-sm text-gray-600 font-normal'>Terms</p>
                        <p className='text-sm sm:text-sm text-gray-600 font-normal'>Code of conduct</p>
                    </div>
                </div>
        </>
    )
}
