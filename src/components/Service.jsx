import React from 'react'

export default function Service() {
    const servicecard = [
        { id: 1, heading: "UI/UX Design", paragraph: "Lorem ipsum, dolor consectetur adipisicing elit. Minus dolorem, quam necessitatibus." },
        { id: 2, heading: "Web Development", paragraph: "Lorem ipsum, dolor consectetur adipisicing elit. Minus dolorem, quam necessitatibus." },
        { id: 3, heading: "App Development", paragraph: "Lorem ipsum, dolor consectetur adipisicing elit. Minus dolorem, quam necessitatibus." },
        { id: 3, heading: "App Development", paragraph: "Lorem ipsum, dolor consectetur adipisicing elit. Minus dolorem, quam necessitatibus." },


    ]
    return (
        <>
            <div className='flex flex-col justify-around min-h-screen py-4 px-6 sm:px-10 md:px-16 lg:px-20 bg-white '>
                <div className=''>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-gray-900 mb-8'><span className='text-orange-400'>Services</span> I Provide</h1>
                    <div className='flex flex-col md:flex-row gap-8'>
                        {servicecard.map((data) => (
                            <div key={data.id} className='bg-gray-200 shadow-md hover:shadow-xl rounded-2xl p-6 w-full sm:w-80 transition duration-300 flex flex-col'>
                                <img src="/logos/ux-logo.jpg" alt="" className="w-16 h-16 mb-4 rounded-full object-cover" />
                                <h1 className='text-lg md:text-xl font-semibold text-gray-800 mb-2'>{data.heading}</h1>
                                <p className='text-gray-600 text-xs md:text-sm font-semibold mb-4'>{data.paragraph}</p>
                                <a href="" className="text-blue-600 font-medium hover:underline">Learn more</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
