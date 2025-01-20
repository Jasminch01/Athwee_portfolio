import Image from "next/image";
import React from "react";

const Video = () => {
  return (
    <div>
      <div className="bg-white pb-32 rounded-lg relative">
        <Image
          className="w-full"
          src={"/video_thumb.png"}
          width={385}
          height={441}
          alt="video-thumbnail"
        />
        {/* Play Button */}
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="w-16 h-16 bg-white text-black rounded-full flex justify-center items-center shadow-lg">
            ▶
          </button>
        </div>
        {/* Stats Section */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <div className="flex flex-col md:flex-row space-x-10">
            <div className="bg-slate-200 text-black rounded-xl px-5 py-2 text-center">
              <p>Views</p>
              <p>222k</p>
            </div>
            <div className="bg-slate-200 text-black rounded-xl px-6 py-2 text-center">
              <p>Like</p>
              <p>24k</p>
            </div>
            <div className="bg-slate-200 text-black rounded-xl px-5 py-2 text-center">
              <p>Shares</p>
              <p>2k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
