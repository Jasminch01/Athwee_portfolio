import { VideoProps } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const LatestVideosCard: React.FC<VideoProps> = ({
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
  // Helper function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  };

  return (
    <>
      {/* Video Card */}
      <div className="bg-[#2E2E2E] pb-6 rounded-lg relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Video Thumbnail */}
        <div onClick={openModal} className="cursor-pointer">
          <div className="rounded-t-lg relative">
            {/* Image */}
            <Image
              src={thumbnail}
              width={500}
              height={500}
              alt="video-thumb"
              className="rounded-t-lg w-[32rem] h-auto object-cover"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 hover:bg-opacity-10 transition-all duration-300">
              <button className="w-16 h-16 bg-white text-black rounded-full flex justify-center items-center shadow-lg transform transition-transform duration-300 hover:scale-105 z-10">
                <FaPlay color="black" />
              </button>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-4 px-4">
          <p className="text-white text-lg font-semibold">{title}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 px-4">
          {/* Views */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">Views</p>
            <p className="text-white font-bold">
              {views} {unitOfViews}
            </p>
          </div>

          {/* Likes */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">Likes</p>
            <p className="text-white font-bold">
              {likes} {unitOfLikes}
            </p>
          </div>

          {/* Shares */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">Shares</p>
            <p className="text-white font-bold">
              {shares} {unitOfShares}
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-black rounded-lg overflow-hidden w-full max-w-4xl mx-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition-colors duration-200"
            >
              &times;
            </button>
            <div className="border-8 border-[#00C853]">
              {/* Video */}
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoUrl)}?autoplay=1`}
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
    </>
  );
};

export default LatestVideosCard;
