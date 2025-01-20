"use client";
import React from "react";
import Video from "./Video";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
const Videos = () => {
  return (
    <div>
      <div className="py-10 bg-[#2D261D]">
        <div className="text-center text-white">
          <p className="text-3xl font-bold">The perfect formula to go viral</p>
          <p className="mt-3">A content creator, I promote good things & spread positivity</p>
          <div className="mt-16">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                765: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1000: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              pagination={{
                clickable: true,
                renderBullet: (index, className) =>
                  `<span class="${className} custom-bullet"></span>`,
              }}
              freeMode={true}
              modules={[FreeMode, Pagination]}
              allowTouchMove={true}
            >
              <SwiperSlide className="ml-[18rem]">
                <Video />
              </SwiperSlide>
              <SwiperSlide>
                <Video />
              </SwiperSlide>
              <SwiperSlide>
                <Video />
              </SwiperSlide>
              <SwiperSlide>
                <Video />
              </SwiperSlide>
              <SwiperSlide>
                <Video />
              </SwiperSlide>
              <SwiperSlide>
                <Video />
              </SwiperSlide>
              <div className="md:h-20 h-10"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
