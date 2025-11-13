import React from 'react'

const skills = [
    {
        title: 'html5',
        logo: '/images/html5-original.svg',
        td: 'uppercase'
    },
    {
        title: 'css3',
        logo: '/images/css-original.svg',
        td: 'uppercase'
    },
    {
        title: 'bootstrap',
        logo: '/images/bootstrap.svg',
        td: 'capitalize'
    },
    {
        title: 'tailwind',
        logo: '/images/tailwind-original.svg',
        td: 'capitalize'
    },
    {
        title: 'javascript',
        logo: '/images/javascript-original.svg',
        td: 'uppercase'
    },
     {
        title: 'react',
        logo: '/images/react-original.svg',
        td: 'capitalize'
    },
    {
        title: 'nodejs',
        logo: '/images/nodejs-original.svg',
        td: 'capitalize'
    },
    {
        title: 'github',
        logo: '/images/github-original.svg',
        td: 'capitalize'
    },
]

export default function SkillSection() {
    return (
        <>
            <div className="min-h-screen bg-[#E3EFFD]  flex flex-col items-center justify-center px-6 py-10">
                <h1 className="text-3xl sm:text-4xl text-gray-900 font-medium mb-4 text-center">
                    My Web Development Skills
                </h1>
                <p className="max-w-2xl text-xs sm:text-sm font-normal text-center text-[#717171] mb-10">
                    I’m passionate about building modern, responsive, and interactive
                    websites using the latest web technologies. Below are some of the
                    tools and languages I work with.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center w-full max-w-5xl">
                    {
                        skills?.map((skill, index) => {
                            return (
                                <div key={index} className="flex flex-col items-center bg-[#E3EFFD] shadow-lg shadow-gray-400 hover:-translate-y-1  p-5 w-32 sm:w-36 transition duration-300">
                                    <img src={`${skill?.logo}`} alt={skill.title} className="w-16 sm:w-20 mb-3 " />
                                    <p className={`text-gray-900 text-sm font-semibold ${skill?.td}`}>{skill?.title}</p>
                                </div>
                            )
                        })
                    }


                </div>
            </div>

        </>
    )
}
