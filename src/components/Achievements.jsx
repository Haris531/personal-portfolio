import React from 'react'
import { FaCertificate } from 'react-icons/fa'

export default function Achievements() {
    const achievements = [
        {
            title: "Frontend Development with React",
            issuer: "Coursera",
            date: "June 2024",
            link: "https://coursera.org/verify/example",
        },
        {
            title: "Frontend Development with React",
            issuer: "Coursera",
            date: "June 2024",
            link: "https://coursera.org/verify/example",
        },
        {
            title: "Frontend Development with React",
            issuer: "Coursera",
            date: "June 2024",
            link: "https://coursera.org/verify/example",
        },
    ]
    return (
        <>
            <section className="bg-[#E3EFFD] min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 py-20 flex flex-col items-center">
                <div className="w-full max-w-6xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
                        Certifications & Achievements
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
                        {achievements.map((item, i) => (
                            <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-center">
                                <FaCertificate size={48} className="text-blue-500 mx-auto mb-4" />
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 mt-2">{item.issuer}</p>
                                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                                    View Certificate →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
