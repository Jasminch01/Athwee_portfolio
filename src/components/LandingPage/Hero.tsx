import React from "react";
import Container from "../Container";
import Image from "next/image";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className=" bg-[#1C1C1C]">
      <Container>
        <div className="flex flex-col md:flex-row pt-60 justify-between">
          <div className="">
            <div className="text-white text-xl flex items-center">
              <MdOutlineHorizontalRule className="text-[#F19934]" />{" "}
              <p className="font-semibold"> HELLO</p>
            </div>
            <p className="text-5xl font-bold text-white">
              I’m <span className="text-[#F19934]">Athwee </span>Marma
            </p>
            <p className="text-white">
              A content creator, I promote good things & spread <br /> positivity
            </p>
            <div>
              <button className="py-3 px-5 mt-5 bg-[#F19934] rounded hover:shadow-lg hover:text-black transition duration-300 font-medium text-white">
                Let's collaborate
              </button>
            </div>
            <div className="flex space-x-4 md:mt-60 mt-10">
              <FaInstagram className="text-white" />
              <FaFacebook className="text-white" />
              <FaXTwitter className="text-white" />
            </div>
          </div>
          <div className="">
            <Image
              alt="athwee-image"
              width={500}
              height={500}
              src={"/ath 1.png"}
            ></Image>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
