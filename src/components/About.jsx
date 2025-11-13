import React from 'react'

export const About = () => {
    return (
        <>
            <div className="flex flex-col justify-around h-screen bg-white px-6 sm:px-10 md:px-16 lg:px-20">
                {/* Top Section */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10 w-full">
                    <div className="flex justify-center sm:justify-start w-full sm:w-1/2">
                        <img src="/images/Profile.JPG" alt="Haris Ahmad"
                            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-col justify-center space-y-3 w-full sm:w-1/2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wide font-bold text-gray-900 leading-tight">
                            Developer with a creative <br /> professional <span className="text-orange-500">Approach</span>
                        </h1>
                        <p className="text-gray-700 max-w-md leading-relaxed text-sm md:text-base">
                            I am Haris Ahmad, a passionate software engineering student with a strong
                            interest in web development and artificial intelligence. I enjoy creating
                            user-friendly, modern web applications and continuously learning new
                            technologies.
                        </p>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-2 mt-2 text-sm">
                            <div>
                                <p className="font-semibold text-gray-700">Name:</p>
                                <p className="text-gray-600">Haris Ahmad</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700">Phone:</p>
                                <p className="text-gray-600">+92 300 1234567</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700">Email:</p>
                                <p className="text-gray-600">harisahmad@example.com</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700">Website:</p>
                                <p className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                                    www.harisahmad.dev
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Bottom Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-10 w-full">
                    <div className="flex flex-col justify-center space-y-2 w-full sm:w-1/2">
                        <h2 className="text-sm font-semibold tracking-widest text-orange-500 uppercase">
                            I'm Expert On
                        </h2>
                        <h1 className="text-xl sm:text-2xl md:text-3xl tracking-wide font-bold text-gray-900 leading-tight">
                            Come Together and <br /> <span className="text-orange-500">Let's Work</span>
                        </h1>
                        <p className="text-gray-700 max-w-md leading-relaxed text-sm md:text-base">
                            I specialize in front-end development using React and Tailwind CSS.
                            I love building visually appealing, responsive websites that provide smooth user experiences.
                        </p>
                        <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition-all duration-300 font-semibold tracking-wide text-sm w-fit">
                            Hire Me
                        </button>
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col justify-center space-y-1">
                        <label htmlFor="file" className="block text-gray-700 font-semibold text-sm"> React </label>
                        <progress id="file" value="32" max="100" className="w-2/4 h-1 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-orange-500 rounded-full">
                            32%
                        </progress>
                        <p className="text-gray-600 text-xs">32% completed</p>
                    </div>
                </div>

            </div>

        </>
    )
}
