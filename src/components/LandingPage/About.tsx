"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Saira } from "next/font/google";
import { getAboutContent } from "@/sanity/schemas/utlis";
const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

const About = () => {
  const [aboutContent, setAboutContent] = useState<string>("");

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const fetchedAbout = await getAboutContent();
        setAboutContent(fetchedAbout[0].description);
      } catch (error) {
        console.error("Error fetching about content:", error);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div className="md:pt-36 md:pb-20 py-10" id="about">
      <Container>
        {/* "About Me" Text */}

        {/* Content Section */}
        <div className="flex xl:flex-row flex-col justify-between items-center xl:relative">
          <div className="md:relative">
            <p
              data-aos="fade-right"
              data-aos-duration="500"
              className="font-bold xl:text-7xl md:text-4xl text-3xl text-center uppercase xl:absolute top-10 md:z-10 -right-[18rem] mb-5 xl:mb-0"
            >
             <span className="text-[#00C853]">Ab</span>out Me
            </p>
            <Image
              data-aos="fade-up"
              data-aos-duration="500"
              className="w-[600px]"
              alt="athwee-about-image"
              width={500}
              height={500}
              src="/ath1.png"
            />
          </div>
          <div
            className={`space-y-5 justify-end xl:mt-32 mt-5 md:w-[570px] ${saira.className}`}
          >
            <p
              className="md:text-lg font-saira text-justify"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {aboutContent.slice(0, 315)}
            </p>
            <p
              className="md:text-lg text-justify"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              {aboutContent.slice(315)}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center xl:justify-start space-x-4 mt-10">
          <Link href={"https://x.com/Athweemarma"}>
            <FaXTwitter className="text-lg hover:text-[#00C853] transition-colors" />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/athwee-marma-6017941b0/?originalSubdomain=bd"
            }
          >
            <FaLinkedin className="text-lg hover:text-[#00C853] transition-colors" />
          </Link>
          <Link href={"https://www.youtube.com/AthweeMarma"}>
            <FaYoutube className="text-2xl hover:text-[#00C853] transition-colors" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default About;
