import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules"; 
import "swiper/css";

export const Testimonials = () => {
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
    <section className="bg-[#E3EFFD] min-h-screen py-4 sm:py-16 px-6 md:px-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Hear from some of our happy clients who trusted us with their projects.
        </p>
      </div>

      <div className="py-4  relative">
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#E3EFFD] to-transparent pointer-events-none z-10" />
        {/* Right gradient */}
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#E3EFFD] to-transparent pointer-events-none z-10" />
        <Swiper modules={[ Autoplay ]}  spaceBetween={30} slidesPerView={1}
          autoplay={{ delay: 1000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-5">
                <div className="flex items-center mb-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover mr-4"/>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                    <p className="text-gray-500 text-sm line-clamp-1">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic line-clamp-3">"{t.text}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
