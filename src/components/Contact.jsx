import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
    return (
        <>
            <div id="contact" className='bg-[#E3EFFD] min-h-screen flex flex-col md:flex-row justify-around items-start sm:items-center py-4 px-6 sm:px-10 md:px-16 lg:px-20'>
                <div className='flex flex-col max-w-xl space-y-3 sm:space-y-6'>
                    <h3 className='text-gray-700 text-sm sm:text-md md:text-lg font-semibold'>Contact Us</h3>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-gray-900'>Let's Talk For Your <br /> <span className='text-[#64A1FD]'>Next Projects</span></h1>
                    <p className='text-gray-600 text-sm md:text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio placeat hteo veto voluptate facilis.</p>
                    <div className='flex flex-row items-center gap-2'>
                        <h1 className="bg-blue-500 rounded-full p-2 flex items-center justify-center"><FaPhoneAlt className="w-6 h-6 text-black" /></h1>
                        <h2 className='text-gray-600 text-sm md:text-lg font-semibold'>+923441234567</h2>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <h1 className="bg-blue-500 rounded-full p-2 flex items-center justify-center"><MdEmail className="w-6 h-6 text-black" /></h1>
                        <h2 className='text-gray-600 text-sm md:text-lg font-semibold'>haris@gmail.com</h2>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <h1 className="bg-blue-500 rounded-full p-2 flex items-center justify-center"><FaPhoneAlt className="w-6 h-6 text-black" /></h1>
                        <h2 className='text-gray-600 text-sm md:text-lg font-semibold'>+923441234567</h2>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <h1 className="bg-blue-500 rounded-full p-2 flex items-center justify-center"><FaLocationDot className="w-6 h-6 text-black" /></h1>
                        <h2 className='text-gray-600 text-sm md:text-lg font-semibold'>Arbab road peshawar</h2>
                    </div>
                </div>
                <div className="w-full sm:max-w-5xl mt-4 sm:mt-0">
                    <form className="space-y-2">
                        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                            <div>
                                <label className="block  text-gray-700 font-medium mb-1">First Name</label>
                                <input type="text" placeholder="Enter your first name" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Last Name</label>
                                <input type="text" placeholder="Enter your last name" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Phone</label>
                                <input type="text" placeholder="Enter your phone num" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Email</label>
                                <input type="text" placeholder="Enter your email" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Country</label>
                                <input type="text" placeholder="Enter your country name" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Budget(USD)</label>
                                <input type="text" placeholder="Range " className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-400" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea rows="5" placeholder="Write your message..."
                                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-1 focus:ring-gray-400">
                            </textarea>
                        </div>
                        <div className="text-left">
                            <button type="submit" className="bg-blue-500 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
