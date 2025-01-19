import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="py-20">
      <Container>
        {/* "About Me" Text */}

        {/* Content Section */}
        <div className="flex justify-between items-center relative">
          <div className="relative">
            <p className="font-bold text-7xl uppercase absolute top-10 z-10 -right-[19rem]">
              About Me
            </p>
            <Image
              className="w-[600px]"
              alt="athwee-about-image"
              width={500}
              height={500}
              src="/athwee_image.png"
            />
          </div>
          <div className="space-y-5 justify-end mt-32 w-[570px]">
            <p className="text-xl">
              A passionate content creator known for my engaging and relatable
              content. With a talent for storytelling and a knack for connecting
              with my audience, I make videos and posts that inspire, entertain,
              and educate. My dedication to quality and authenticity has helped
              <br />
              me carve a unique space in the digital landscape.
            </p>
            <p className="text-xl">
              My dedication to delivering quality content shines
              <br /> through. With a deep understanding of my audience's
              <br /> interests, I combine creativity and humor in my videos.
            </p>
          </div>
        </div>
        <div className="flex space-x-4 mt-10">
          <Link href={"https://x.com/Athweemarma"}>
            <FaXTwitter className="  cursor-pointer" />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/athwee-marma-6017941b0/?originalSubdomain=bd"
            }
          >
            <FaLinkedin className=" cursor-pointer" />
          </Link>
          <Link href={"https://www.youtube.com/AthweeMarma"}>
            <FaYoutube className="  cursor-pointer" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default About;
