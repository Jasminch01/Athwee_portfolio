import { VideoProps } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div
      className="container mx-auto px-4 lg:px-16 2xl:px-32"
    >
      <div className="bg-white pb-32 md:w-[385px] rounded-lg relative mx-auto">
        {/* Video Thumbnail */}
        <Link href={videoUrl} target="_blank">
          <div className="relative">
            <Image
              className="w-full rounded-t-lg"
              src={thumbnail}
              width={500}
              height={441}
              alt={`${title} thumbnail`}
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex justify-center items-center">
              <button className="w-16 h-16 bg-white text-black rounded-full flex justify-center items-center shadow-lg transform transition-transform duration-300 hover:scale-105">
                ▶
              </button>
            </div>
          </div>
        </Link>

        {/* Stats Section */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <div className="flex space-x-3">
            <div className="bg-slate-200 text-black rounded-xl md:w-[6rem] md:h-16 w-[4rem] h-[4rem] flex items-center justify-center">
              <div>
                <p className="text-center text-sm 2xl:text-base">Views</p>
                <p className="text-center font-bold text-sm 2xl:text-lg">
                  {views}
                  {unitOfViews}
                </p>
              </div>
            </div>
            <div className="bg-slate-200 text-black rounded-xl md:w-[6rem] md:h-16 w-[4rem] h-[4rem] flex items-center justify-center">
              <div>
                <p className="text-center text-sm 2xl:text-base">Likes</p>
                <p className="text-center font-bold text-sm 2xl:text-lg">
                  {likes}
                  {unitOfLikes}
                </p>
              </div>
            </div>
            <div className="bg-slate-200 text-black rounded-xl md:w-[6rem] md:h-16 w-[4rem] h-[4rem] flex items-center justify-center">
              <div>
                <p className="text-center text-sm 2xl:text-base">Shares</p>
                <p className="text-center font-bold text-sm 2xl:text-lg">
                  {shares}
                  {unitOfShares}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
