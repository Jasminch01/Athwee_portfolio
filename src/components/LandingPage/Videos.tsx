"use client";
import React, { useEffect, useState } from "react";
import Video from "./Video";
import { getVideos } from "@/sanity/schemas/utlis";
import { VideoType } from "@/utils/type";
import { Saira } from "next/font/google";
import Container from "../Container";
const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

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

  return (
    <div>
      <div className="pt-10 pb-20 bg-[#2D261D]">
        <Container>
          <div className="text-center text-white">
            <p className="text-3xl font-bold">
              The Perfect Formula to Go Viral
            </p>
            <p className={`mt-3 ${saira.className}`}>
              Unlock the Secrets to Captivating Content and Skyrocketing
              Engagement!
            </p>

            {/* Prevents Overflow & Adds Responsive Wrapping */}
            <div className="mt-10 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-3">
              {videos.map((video, index) => (
                <Video
                  key={index} // Always include a key when mapping
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
      </div>
    </div>
  );
};

export default Videos;
