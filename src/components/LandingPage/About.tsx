import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="md:py-20 py-10">
      <Container>
        {/* "About Me" Text */}

        {/* Content Section */}
        <div className="flex xl:flex-row flex-col justify-between items-center xl:relative">
          <div className="md:relative">
            <p className="font-bold xl:text-7xl md:text-4xl text-3xl text-center uppercase xl:absolute top-10 md:z-10 -right-[19rem] mb-5 xl:mb-0">
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
          <div className="space-y-5 justify-end xl:mt-32 mt-5 md:w-[570px]">
            <p className="md:text-lg">
              A passionate content creator known for my engaging and relatable
              content. With a talent for storytelling and a knack for connecting
              with my audience, I make videos and posts that inspire, entertain,
              and educate. My dedication to quality and authenticity has helped
              <br />
              me carve a unique space in the digital landscape.
            </p>
            <p className="md:text-lg">
              My dedication to delivering quality content shines
              <br /> through. With a deep understanding of my audience's
              <br /> interests, I combine creativity and humor in my videos.
            </p>
          </div>
        </div>
        <div className="flex justify-center xl:justify-start space-x-4 mt-10">
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
