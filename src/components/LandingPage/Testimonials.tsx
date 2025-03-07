"use client";
import React, { use, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Saira } from "next/font/google";
import { getTestimonials } from "@/sanity/schemas/utlis";
import { Ttestimonial } from "@/utils/type";
const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Ttestimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const testimonials = await getTestimonials();
        setTestimonials([...testimonials]);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchTestimonials();
  }, []);
  return (
    <div className="pt-20 pb-36">
      <div className="text-white text-center mb-20">
        <p
          className=" text-4xl font-bold"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Voices of Impact
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          className={`text-lg ${saira.className} mt-5`}
        >
          Hear What the World Says About Creative Brilliance
        </p>
      </div>
      <div className="px-5 md:px-0">
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
          modules={[FreeMode, EffectCoverflow, Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className={index === 0 ? "2xl:ml-[20rem] xl:ml-[5rem]" : ""}
            >

              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="bg-[#2E2E2E] rounded-xl shadow-lg p-6 flex flex-col items-center"
                style={{ minHeight: "400px" }}
              >
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}`}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <div className="flex-grow flex flex-col justify-between text-center w-full">
                  <div>
                    {/* Feedback */}
                    <p
                      className={`mt-4 relative text-white ${saira.className}`}
                    >
                      <span className="text-[#00C853] text-4xl">&ldquo;</span>
                      {testimonial.feedback}
                      <span className="text-[#00C853] absolute -bottom-7 text-4xl">
                        &rdquo;
                      </span>
                    </p>

                    {/* Name and Title */}
                    <div className="text-white mt-4">
                      <h3 className="text-2xl font-bold text-[#00C853]">
                        {testimonial.name}
                      </h3>
                      <p className={`text-sm font-light ${saira.className}`}>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="h-[350px] bg-transparent"></div>
          </SwiperSlide>
          <div className="h-16"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
