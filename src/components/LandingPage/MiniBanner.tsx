import Image from "next/image";
import React from "react";

const MiniBanner = () => {
  return (
    <div className="bg-[#1C1C1C] relative z-10">
      {/* Top Section */}
      <div className="md:h-[30rem] h-[10rem]"></div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-t from-[#232323] to-[#cb9d69] to-85% rounded-t-[4rem] md:h-[20rem] h-[10rem]"></div>

      {/* Image Positioned in the Middle */}
      <div className="absolute md:top-[15rem] top-20 left-1/2 transform -translate-x-1/2 ">
        <div className="bg-mini-banner flex items-end justify-end bg-cover bg-center md:w-[45rem] xl:w-[70rem] md:h-[25rem] w-[20rem] h-[10rem] rounded-3xl">
          <div className="flex justify-end md:mr-20 md:mb-16 mb-3 items-center">
            <div>
              <p className="text-white text-xl md:text-5xl font-bold text-right">
                Now Accessible To You
              </p>
              <div className="flex justify-end">
                <button className="md:py-3 py-2 text-center px-3 text-sm md:px-5 md:mt-5 hover:bg-[#F19934] rounded hover:shadow-lg text-black transition border bg-white duration-300 hover:text-white">
                  Lets Work Together
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniBanner;
