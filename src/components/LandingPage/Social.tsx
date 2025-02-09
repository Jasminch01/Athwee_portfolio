"use client";

import { useState, useEffect } from "react";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../Container";

export default function SocialSection() {
  const socialIcons = [
    "/twit.png",
    "/love.png",
    "/likr.png",
    "/insta.png",
    "/hah.png",
  ];

  const [floatingIcons, setFloatingIcons] = useState<
    { id: number; src: string; left: string }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIcon = socialIcons[Math.floor(Math.random() * socialIcons.length)];

      setFloatingIcons((prev) => [
        ...prev,
        {
          id: Date.now(),
          src: randomIcon,
          left: `${Math.random() * 80 + 10}%`,
        },
      ]);

      // Remove old icons after 3 seconds
      setTimeout(() => {
        setFloatingIcons((prev) => prev.slice(1));
      }, 1000);
    }, 400); // New icon every 700ms

    return () => clearInterval(interval);
  }, []);

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
                <button className="py-3 px-5 mt-10 hover:bg-[#00C853] rounded hover:shadow-lg text-black transition border border-black hover:border-[#00C853] duration-300 font-medium hover:text-white">
                  <Link href={"mailto:hello.athwee@gmail.com"}>
                    Let's Collaborate
                  </Link>
                </button>
                <div className="mt-5 flex items-center space-x-3">
                  <Link href={"https://www.tiktok.com/@athweemarma"}>
                    <AiOutlineTikTok className="text-xl" />
                  </Link>
                  <Link href={"https://x.com/Athweemarma"}>
                    <FaXTwitter className="text-lg cursor-pointer" />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/athwee-marma-6017941b0/?originalSubdomain=bd"
                    }
                  >
                    <FaLinkedin className="text-lg" />
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
              <Image
                src={"/light-bg.png"}
                width={500}
                height={500}
                alt="light"
              />

              {/* Floating Social Icons */}
              {floatingIcons.map((icon) => (
                <motion.div
                  key={icon.id}
                  initial={{ y: 0, opacity: 1, scale: 1 }}
                  animate={{ y: -150, opacity: 0, scale: 1.3 }}
                  transition={{ duration: 3, ease: "easeOut" }}
                  className="absolute"
                  style={{ left: icon.left }}
                >
                  <Image src={icon.src} width={50} height={50} alt="social" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
