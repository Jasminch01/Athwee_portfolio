import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../Container";
import Brands from "./Brands";

const MiniBanner = () => {
  return (
    <div className="bg-[#1C1C1C] relative z-10">
      {/* Top Section */}
      <div className="py-20 md:h-[60rem]">
        <Brands />
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-t from-[#232323] to-[#cb9d69] to-85% rounded-t-[4rem] md:h-[20rem] h-[15rem] relative">
        <Container>
          <div className="">
            <Link
              href={"/"}
              className="text-2xl font-bold uppercase text-white absolute bottom-10"
            >
              Ath<span className=" text-[#F19934]">wee.</span>{" "}
            </Link>
          </div>
        </Container>
      </div>

      {/* Image Positioned in the Middle */}
      <div className="absolute md:top-[40rem] top-[37rem] left-1/2 transform -translate-x-1/2 ">
        <div className="bg-mini-banner flex items-end justify-end bg-cover bg-center md:w-[45rem] xl:w-[70rem] md:h-[25rem] w-[20rem] h-[13rem] rounded-3xl">
          <div className="flex justify-end md:mr-20 md:mb-16 mb-10 items-center">
            <div className="pr-5">
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
