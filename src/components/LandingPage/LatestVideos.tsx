import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "./Testimonials";

const LatestVideos = () => {
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
            <div className="bg-[#2E2E2E] pb-10 rounded relative">
              <Link href={"https://www.youtube.com/watch?v=SVXtyh8M_8w&t=1s"}>
                <div className="rounded relative">
                  {/* Image */}
                  <Image
                    src={"/latest_thumb.png"}
                    width={500}
                    height={500}
                    alt="video-thumb"
                    className="rounded w-full"
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex justify-center items-center">
                    <button className="w-16 h-16 bg-white text-black rounded-full flex justify-center items-center shadow-lg transform transition-transform duration-300 hover:scale-105 z-10">
                      ▶
                    </button>
                  </div>
                </div>
              </Link>

              {/* Caption */}
              <div className="text-center mt-10">
                <p className="text-white">
                  Mro Community Lifestyle Documentary
                </p>
              </div>
            </div>
            <div className="bg-[#2E2E2E] pb-10 rounded relative">
              <Link href={"https://www.youtube.com/watch?v=2Mjt_ZJPiPI"}>
                <div className="rounded relative">
                  {/* Image */}
                  <Image
                    src={"/latest_thumb2.png"}
                    width={500}
                    height={500}
                    alt="video-thumb"
                    className="rounded w-full"
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex justify-center items-center">
                    <button className="w-16 h-16 bg-white text-black rounded-full flex justify-center items-center shadow-lg transform transition-transform duration-300 hover:scale-105 z-10">
                      ▶
                    </button>
                  </div>
                </div>
              </Link>

              {/* Caption */}
              <div className="text-center mt-10">
                <p className="text-white">What I Envision for My People</p>
              </div>
            </div>
            <div className="bg-[#2E2E2E] pb-10 rounded relative">
              <Link href={"https://www.youtube.com/watch?v=sbbXuBz9-DU"}>
                <div className="rounded relative">
                  {/* Image */}
                  <Image
                    src={"/latest_thumb3.png"}
                    width={500}
                    height={500}
                    alt="video-thumb"
                    className="rounded w-full"
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex justify-center items-center">
                    <button className="w-16 h-16 bg-white text-black rounded-full flex justify-center items-center shadow-lg transform transition-transform duration-300 hover:scale-105 z-10">
                      ▶
                    </button>
                  </div>
                </div>
              </Link>
              {/* Caption */}
              <div className="text-center mt-10">
                <p className="text-white">
                  I Raised 2.5 Lakhs and Helped 300 Families
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Testimonials />
    </div>
  );
};

export default LatestVideos;
