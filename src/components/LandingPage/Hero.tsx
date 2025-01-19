import React from "react";
import Container from "../Container";
import Image from "next/image";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" bg-[#1C1C1C]">
      <Container>
        <div className="flex flex-col md:flex-row md:pt-72 pt-32 justify-between">
          <div className="">
            <div className="text-white text-xl flex items-center">
              <MdOutlineHorizontalRule className="text-[#F19934]" />{" "}
              <p className="font-semibold"> HELLO</p>
            </div>
            <p className="text-5xl font-bold text-white">
              I’m <span className="text-[#F19934]">Athwee </span>Marma
            </p>
            <p className="text-white md:w-[30rem]">
              A content creator, I promote good things & spread
              positivity
            </p>
            <div>
              <button className="py-3 px-5 mt-5 bg-[#F19934] rounded hover:shadow-lg hover:text-black transition duration-300 font-medium text-white">
                Let's collaborate
              </button>
            </div>
            <div className="flex space-x-4 mt-10 md:py-20 pb-[14rem]">
              <Link href={"https://www.instagram.com/athwee_marma/#"}>
                <FaInstagram className="text-white  cursor-pointer" />
              </Link>
              <Link href={"https://www.facebook.com/marmaathwee"}>
                <FaFacebook className="text-white  cursor-pointer" />
              </Link>
              <Link href={"https://x.com/Athweemarma"}>
                <FaXTwitter className="text-white  cursor-pointer" />
              </Link>
              {/* <Link href={"https://www.youtube.com/AthweeMarma"}>
                <FaYoutube className="text-white  cursor-pointer" />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/athwee-marma-6017941b0/?originalSubdomain=bd"
                }
              >
                <FaLinkedin className="text-white  cursor-pointer" />
              </Link> */}
            </div>
          </div>
          <div className="relative w-full h-auto mt-32 md:mt-0">
            {/* Circle Background */}
            <div
              className="bg-[#b27f44] h-[200px] w-[250px] md:h-[300px] md:w-[400px] rounded-t-full absolute z-0 
               right-4 bottom-4 md:right-16 md:bottom-10 blur-3xl overflow-hidden"
            ></div>

            {/* Image */}
            <div className="absolute bottom-0 right-0 z-10">
              <Image
                alt="athwee-image"
                width={500}
                height={500}
                className="transition-all duration-300 hover:grayscale"
                src="/ath.png"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
