"use client";
import React, { useEffect, useState } from "react";
import Video from "./Video";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { getVideos } from "@/sanity/schemas/utlis";
import { VideoType } from "@/utils/type";

const Videos = () => {
  const [videos, setVideos] = useState<VideoType[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideos = await getVideos();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);
  console.log(videos);
  return (
    <div>
      <div className="py-10 bg-[#2D261D]">
        <div className="text-center text-white">
          <p className="text-3xl font-bold">The perfect formula to go viral</p>
          <p className="mt-3">
            A content creator, I promote good things & spread positivity
          </p>
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
              {videos.map((video, index) => (
                <SwiperSlide
                  key={video._id}
                  className={index === 0 ? "ml-[18rem]" : ""}
                >
                  <Video
                    title={video.title}
                    thumbnail={video.thumbnailUrl}
                    views={video.views}
                    likes={video.likes}
                    videoUrl={video.videoUrl}
                    shares={video.shares}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="md:h-20 h-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
