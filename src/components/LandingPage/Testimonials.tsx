"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, EffectCoverflow, Pagination} from "swiper/modules";
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
    name: " Mila Hossain",
    title: " Content Enthusiast",
    feedback:
      "A true inspiration for many! Athwee's content is not only entertaining but also deeply insightful. His passion and authenticity shine through every video, making his a role model for aspiring creators",
    image: "/test.png",
  },
  {
    name: "Zara Khan",
    title: " Marketing Specialist",
    feedback:
      "Every piece of Athwee's work reflects he creativity and dedication. He continues to set the bar higher, inspiring everyone around him",
    image: "/test1.png",
  },
  {
    name: " Rafiq Ahmed",
    title: "Loyal Follower",
    feedback:
      "Athwee has the rare ability to create content that resonates. His storytelling and genuine approach have made his a favorite in our family.",
    image: "/test2.png",
  },
  {
    name: "Hassan Rahman",
    title: "Media Consultant",
    feedback:
      "Athwee's inspiring journey and heartfelt content remind us of the power of positivity and determination. He is truly one of a kind.",
    image: "/test2.png",
  },
  {
    name: "",
    title: "",
    feedback: "",
    image: "/test2.png",
  },
];
const Testimonials = () => {
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
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className={index === 0 ? "2xl:ml-[20rem] xl:ml-[5rem]" : ""}
            >
              {index === testimonials.length - 1 ? (
                // For the last slide, render an empty slide
                <div className="h-[350px] bg-transparent"></div>
              ) : (
                // Normal slide content
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="bg-[#2E2E2E] rounded-xl shadow-lg p-6 flex flex-col items-center"
                  style={{ minHeight: "400px" }} // Set a consistent minimum height
                >
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <div className="flex-grow flex flex-col justify-between text-center w-full">
                    <div>
                      {/* Feedback Text with Styled Quotes */}
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
              )}
            </SwiperSlide>
          ))}
          <div className="h-16"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
