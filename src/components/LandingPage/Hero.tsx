import React from "react";
import Container from "../Container";
import Image from "next/image";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Saira } from "next/font/google";
const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

const Hero = () => {
  return (
    <div className=" bg-[#1C1C1C]">
      <Container>
        <div className="flex flex-col lg:flex-row xl:pt-72 pt-32 justify-between lg:h-screen">
          <div className="mt-10">
            <div className="">
              <div
                data-aos="fade-down"
                data-aos-duration="500"
                className="text-white text-xl flex items-center mb-10"
              >
                <MdOutlineHorizontalRule className="text-[#F19934]" />{" "}
                <p className={`${saira.className} text-2xl`}> HELLO</p>
              </div>
              <p
                data-aos="fade-up-left"
                data-aos-duration="500"
                className="text-5xl md:text-6xl xl:w-[40rem] font-bold text-white"
              >
                I’m <span className="text-[#F19934]">Athwee </span>Marma
              </p>
              <p
                data-aos="fade-up-right"
                data-aos-duration="500"
                className={`text-white 2xl:w-[30rem] mt-3 ${saira.className}`}
              >
                A content creator, I promote good things & spread <br />
                positivity
              </p>
            </div>
            <div>
              <button
                data-aos="fade-up"
                data-aos-duration="500"
                className="py-3 px-5 mt-5 bg-[#F19934] rounded hover:shadow-lg hover:text-black transition duration-300 font-medium text-white"
              >
                Let's Collaborate
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="flex space-x-4 mt-10 2xl:py-[13rem] pb-[14rem]"
            >
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

          <div
            className="relative w-full mt-32 md:mt-0"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {/* Circle Background */}
            <div
              className="bg-[#b27f44] h-[200px] w-[250px] xl:h-[250px] xl:w-[400px] lg:h-[300px] lg:w-[350px] 2xl:w-[550px] 2xl:h-[300px] rounded-t-full absolute z-0 
               right-4 bottom-4 md:right-[5rem] md:bottom-10 blur-3xl overflow-hidden"
            ></div>

            {/* Image */}
            <div className="absolute bottom-0 right-0 z-10">
              <Image
                alt="athwee-image"
                width={700}
                height={700}
                className="transition-all duration-300 hover:grayscale md:w-[400px] lg:w-[500px] 2xl:w-[600rem]"
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
