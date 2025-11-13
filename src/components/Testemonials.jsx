import React from 'react'

export const Testemonials = () => {
    const testimonials = [
        {
            name: "Laal khan",
            role: "Product Manager at cloudbreeze",
            image: "https://randomuser.me/api/portraits/men/79.jpg",
            text: "Working with this team was an absolute pleasure. They delivered the project on time and exceeded expectations with their attention to detail!",
        },
        {
            name: "Waqas jan",
            role: "CEO at cloudbreeze",
            image: "https://randomuser.me/api/portraits/men/89.jpg",
            text: "Their professionalism and expertise truly stand out. I highly recommend them for anyone looking for top-notch web development services.",
        },
        {
            name: "Bilal khan",
            role: "Marketing Head at cloudbreeze",
            image: "https://randomuser.me/api/portraits/men/98.jpg",
            text: "A fantastic experience from start to finish! The team understood our vision perfectly and brought it to life beautifully.",
        },
    ];

    return (
        <>
            <section className="bg-[#E3EFFD] min-h-screen py-16 px-6 md:px-20">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Hear from some of our happy clients who trusted us with their projects.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                                    <p className="text-gray-500 text-sm">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"{t.text}"</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

