"use client";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function SocialSection() {
  return (
    <div id="social">
      <Container>
        <div className="pb-20">
          <div className="flex md:flex-row flex-col-reverse justify-between">
            {/* Left Content */}
            <div className="flex items-center justify-center">
              <div data-aos="fade-up" data-aos-duration="500">
                <p className="font-bold md:text-5xl text-3xl">
                  EXPLORE <br /> YOUR SOCIALS
                </p>
                <p className="mt-5">Let me help you succeed on social media</p>
                <div className="mt-10 flex items-center space-x-[1.4rem]">
                  <Link href={"https://www.tiktok.com/@athweemarma"} target="_blank">
                    <AiOutlineTikTok className="text-3xl hover:text-[#00C853] transform" />
                  </Link>
                  <Link href={"https://x.com/Athweemarma"} target="_blank">
                    <FaXTwitter className="text-3xl hover:text-[#00C853] transform cursor-pointer" />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/athwee-marma-6017941b0/?originalSubdomain=bd"
                    }
                    target="_blank"
                  >
                    <FaLinkedin className="text-3xl hover:text-[#00C853] transform" />
                  </Link>

                  <Link href={"https://www.instagram.com/athwee_marma/#"} target="_blank">
                    <FaInstagram className="cursor-pointer hover:text-[#00C853] text-3xl" />
                  </Link>
                  <Link href={"https://www.facebook.com/marmaathwee"} target="_blank">
                    <FaFacebook className="cursor-pointer hover:text-[#00C853] text-3xl" />
                  </Link>
                  <Link href={"https://www.youtube.com/AthweeMarma"} target="_blank">
                    <FaYoutube className="text-4xl hover:text-[#00C853]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Image with Floating Icons */}
            <div
              className="relative flex items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <Image src={"/light.png"} width={500} height={500} alt="light" />
              <div className="absolute bottom-24">
                <DotLottieReact
                  src="https://lottie.host/e70702ff-e172-440c-b0f6-35e7b35f5d90/Dm5dRTlvU4.lottie"
                  loop
                  autoplay
                  speed={0.5}
                  className="2xl:w-[600px]"
                />
              </div>
              
              <div className="absolute lg:right-20 md:top-[18rem] top-52 right-10">
                <Image src={'/social-Growth.png'} width={150} height={180} alt="growth-image" className="lg:w-[180px]"/>
              </div> 
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
