import React from 'react'

export default function HeroSection() {
    return (

        <div className="flex flex-col md:flex-row items-center justify-around md:justify-between min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-r from-white via-blue-100 to-blue-200">
            <div className="flex flex-col space-y-4 max-w-sm md:max-w-md lg:max-w-xl text-center md:text-left mt-6 md:mt-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                    Hello, I’m <br /> <span className="text-red-500">Haris Ahmad</span>
                </h1>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 ">
                    I am a Software Engineering student passionate about web development and artificial intelligence.
                    I enjoy building responsive, creative websites with React.js and Tailwind CSS,
                    and I’m always learning new technologies to improve my skills and bring ideas to life.
                </p>
                <button className="bg-blue-500 text-white px-5 sm:px-6 py-2 sm:py-3 mx-auto md:mx-0 rounded-lg w-fit  hover:bg-blue-600 transition duration-200">
                    <a href="#contact">Say Hello</a>
                </button>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-8">
                    <div className="text-center bg-white shadow-md rounded-lg p-2 sm-p-3 w-32 sm:w-36 hover:shadow-xl transition">
                        <h1 className="text-xl sm:text-2xl font-bold text-blue-600">1 Y</h1>
                        <p className="text-gray-600 text-xs sm:text-sm">Experience</p>
                    </div>
                    <div className="text-center bg-white shadow-md rounded-lg p-2 sm-p-3 w-32 sm:w-36 hover:shadow-xl transition">
                        <h1 className="text-xl sm:text-2xl font-bold text-blue-600">5+</h1>
                        <p className="text-gray-600 text-xs sm:text-sm">Projects</p>
                    </div>
                    <div className="text-center bg-white shadow-md rounded-lg p-2 sm-p-3 w-32 sm:w-36 hover:shadow-xl transition">
                        <h1 className="text-xl sm:text-2xl font-bold text-blue-600">0</h1>
                        <p className="text-gray-600 text-xs sm:text-sm">Clients</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center md:justify-end">
                <img src="/images/Profile.JPG" alt="Haris Ahmad" className="max-w-xs md:max-w-md lg:w-xl rounded-full object-cover"/>
            </div>
        </div>

    )
}
