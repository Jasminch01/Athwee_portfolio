import { VideoProps } from "@/utils/type";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Video: React.FC<VideoProps> = ({
  title,
  thumbnail,
  views,
  likes,
  shares,
  videoUrl,
  unitOfLikes,
  unitOfShares,
  unitOfViews,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getYouTubeShortsVideoId = (url: string) => {
    // Extract the video ID from the Shorts URL
    const shortsRegex = /https:\/\/www\.youtube\.com\/shorts\/([^?&]+)/;
    const match = url.match(shortsRegex);
    return match ? match[1] : null;
  };
  return (
    <div className="px-4 md:px-0">
      <div className="bg-white p-3 rounded-2xl shadow-lg">
        {/* Video Thumbnail */}
        <div onClick={openModal} className="cursor-pointer">
          <div className="relative">
            <Image
              className="w-full 2xl:h-[23rem] xl:h-[18rem] lg:h-[15rem] md:h-[20rem] h-[20rem] rounded-2xl object-cover"
              src={thumbnail}
              width={500}
              height={400}
              alt={`${title} thumbnail`}
            />

            {/* Play Button */}
            <div className="absolute -bottom-5 right-4">
              <button className="size-16 hover:scale-105 transform transition-transform duration-200 bg-[#B9B7BB] text-black rounded-full flex justify-center items-center shadow-md">
                <FaPlay color="white" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-10 text-center">
          <div className="bg-gray-100 text-black rounded-lg p-2">
            <p className="text-xs font-semibold">Views</p>
            <p className="text-sm font-bold">
              {views}
              {unitOfViews}
            </p>
          </div>
          <div className="bg-gray-100 text-black rounded-lg p-2">
            <p className="text-xs font-semibold">Likes</p>
            <p className="text-sm font-bold">
              {likes}
              {unitOfLikes}
            </p>
          </div>
          <div className="bg-gray-100 text-black rounded-lg p-2">
            <p className="text-xs font-semibold">Share</p>
            <p className="text-sm font-bold">
              {shares}
              {unitOfShares}
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal} // Close modal
        >
          <div
            className="overflow-hidden w-full max-w-[360px] mx-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-8 border-[#00C853] rounded-lg">
              <div className="relative lg:aspect-[9/16] aspect-[11/16] w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeShortsVideoId(videoUrl)}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Video;
