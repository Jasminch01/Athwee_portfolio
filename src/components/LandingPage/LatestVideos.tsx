"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Testimonials from "./Testimonials";
import LatestVideosCard from "./LatestVideosCard";
import { getLatestVideos } from "@/sanity/schemas/utlis";
import { VideoType } from "@/utils/type";

const LatestVideos = () => {
  const [videos, setVideos] = useState<VideoType[]>([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideos = await getLatestVideos();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="bg-[#1C1C1C]" id="videos">
      <Container>
        <div className="py-20">
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="500"
              className="font-bold text-3xl text-center text-white"
            >
              Watch My Latest Videos
            </p>
          </div>
          <div
            className="flex md:flex-row flex-col md:space-x-5 space-y-10 md:space-y-0 mt-20"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {videos.map((video, idx) => (
              <LatestVideosCard
                key={idx} // Always include a key when mapping
                title={video.title}
                thumbnail={video.thumbnailUrl}
                views={video.views}
                unitOfViews={video.unitOfViews}
                likes={video.likes}
                unitOfLikes={video.unitOfLikes}
                videoUrl={video.videoUrl}
                shares={video.shares}
                unitOfShares={video.unitOfShares}
              />
            ))}
          </div>
        </div>
      </Container>
      <Testimonials />
    </div>
  );
};

export default LatestVideos;
