import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../Container";
import Brands from "./Brands";

const MiniBanner = () => {
  return (
    <div className="bg-[#1C1C1C] relative z-10">
      {/* Top Section */}
      <div className="py-32 md:h-[70rem]">
        <Brands />
      </div>

      {/* Bottom Section */}
      <div className="bg-footer-bg rounded-t-[4rem] md:h-[20rem] h-[20rem] relative">
        <Container>
          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-center absolute bottom-20 inset-x-0 mx-auto max-w-[1280px] px-6 mb-3 space-y-4 md:space-y-0">
            {/* Logo Section */}
            <div>
              <Link
                href={"/"}
                className="text-2xl font-bold uppercase text-white"
              >
                Ath<span className="text-[#00C853]">wee.</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 md:space-x-8 text-white text-sm md:text-base">
              <Link
                href={"#social"}
                className="hover:text-[#00C853] transition-colors"
              >
                Social
              </Link>
              <Link
                href={"#videos"}
                className="hover:text-[#00C853] transition-colors"
              >
                Videos
              </Link>
              <Link href={"#about"} className="hover:text-[#00C853] transition-colors">
                About
              </Link>
              <Link
                href={"mailto:hello.athwee@gmail.com"}
                className="hover:text-[#00C853] transition-colors"
                target="_blank"
              >
                Let's connect
              </Link>
            </div>
          </div>

          {/* Horizontal Line and Copyright Section */}
          <div className="absolute inset-x-0 bottom-10 mx-auto max-w-[1280px] px-6">
            {/* Horizontal Line */}
            <hr className="border-t border-white" />

            {/* Copyright Text */}
            <p className="text-center text-white text-xs md:text-sm mt-3">
              &copy; {new Date().getFullYear()} Athwee. All rights reserved.
            </p>
          </div>
        </Container>
      </div>

      {/* Image Positioned in the Middle */}
      <div className="absolute md:top-[50rem] top-[50rem] left-1/2 transform -translate-x-1/2 ">
        <div
          data-aos="fade-up"
          className="relative bg-mini-banner flex items-end justify-end bg-cover bg-center md:w-[45rem] xl:w-[70rem] md:h-[25rem] w-[20rem] h-[13rem] rounded-3xl"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>
          <div className="flex justify-end md:mr-20 md:mb-16 mb-10 items-center">
            <div className="pr-5 z-10">
              <p className="text-white text-xl md:text-5xl font-bold text-right">
                Now Accessible To You
              </p>
              <div className="flex justify-end">
                <Link href={"mailto:hello.athwee@gmail.com"}>
                  <button className="md:py-3 py-2 text-center px-3 md:px-5 md:mt-5 mt-2 bg-[#00C853] rounded hover:shadow-lg text-white transition duration-300 hover:text-black text-sm font-bold">
                    Let's Work Together
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniBanner;
