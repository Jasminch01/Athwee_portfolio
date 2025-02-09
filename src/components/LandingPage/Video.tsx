import { VideoProps } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
  return (
    <div className="px-4 md:px-0">
      <div className="bg-white p-3 rounded-2xl shadow-lg">
        {/* Video Thumbnail */}
        <Link href={videoUrl} target="_blank">
          <div className="relative">
            <Image
              className=" w-full h-[23rem] rounded-2xl object-cover"
              src={thumbnail}
              width={500}
              height={400}
              alt={`${title} thumbnail`}
            />

            {/* Play Button */}
            <div className="absolute -bottom-5 right-4">
              <button className="size-16 bg-[#B9B7BB] text-black rounded-full flex justify-center items-center shadow-md">
              <FaPlay color="white"/>
              </button>
            </div>
          </div>
        </Link>

        {/* Stats Section */}
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
    </div>
  );
};

export default Video;
