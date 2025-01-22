"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Saira } from "next/font/google";
const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});
const testimonials = [
  {
    name: "John Doe",
    title: "Content Creator",
    feedback:
      "Athwee's content is truly inspiring! Every post resonates with creativity and passion.",
    image: "/test.png",
  },
  {
    name: "Jane Smith",
    title: "Digital Marketer",
    feedback:
      "Athwee's strategies for going viral are unmatched. They’ve helped me grow my engagement tenfold!",
    image: "/test1.png",
  },
  {
    name: "Ali Khan",
    title: "Entrepreneur",
    feedback:
      "Athwee brings a fresh perspective to content creation. Their tips are practical and effective.",
    image: "/test2.png",
  },
  {
    name: "Ali Khan",
    title: "Entrepreneur",
    feedback:
      "Athwee brings a fresh perspective to content creation. Their tips are practical and effective.",
    image: "/test.png",
  },
  {
    name: "Ali Khan",
    title: "Entrepreneur",
    feedback:
      "Athwee brings a fresh perspective to content creation. Their tips are practical and effective.",
    image: "/test.png",
  },
];
const Testimonials = () => {
  return (
    <div className="pt-20 pb-36">
      <div className="text-white text-center mb-20">
        <p className=" text-4xl font-bold">Voices of Impact</p>
        <p className={`text-lg ${saira.className} mt-5`}>
          Hear What the World Says About Creative Brilliance
        </p>
      </div>
      <Swiper
        className="mt-10"
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          765: {
            slidesPerView: 1.9,
            spaceBetween: 50,
          },
          1000: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          },
        }}
        mousewheel={true}
        modules={[FreeMode, Mousewheel]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className={index === 0 ? "2xl:ml-[20rem] xl:ml-[5rem]" : ""}
          >
            <div className="bg-gray-300 rounded-xl shadow-lg p-6 flex flex-col items-center h-[350px]">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}`}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <div className="flex-grow flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-lg">{testimonial.title}</p>
                </div>
                <p className="mt-4 text-xl text-gray-700 overflow-hidden text-ellipsis">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
