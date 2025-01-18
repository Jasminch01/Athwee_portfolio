"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Appbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`md:absolute fixed top-0 w-full mx-auto pt-10 ${
        isScrolled && "bg-[#1C1C1C] py-5"
      }`}
    >
      <Container>
        <div className="">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold uppercase text-white">
                Ath<span className=" text-[#F19934]">wee.</span>{" "}
              </p>
            </div>
            <div className="space-x-5 text-white hidden md:block">
              <Link href={"#feature"}>Social</Link>
              <Link href={"#feature"}>Videos</Link>
              <Link href={"#about"}>About</Link>
              <Link href={"#contact"}>Let's connect</Link>
            </div>
            {!isOpen ? (
              <CgMenuRight
                className="text-white md:hidden"
                size={30}
                onClick={() => setIsOpen(true)}
              />
            ) : (
              <IoClose
                className="text-white md:hidden"
                size={30}
                onClick={() => setIsOpen(false)}
              />
            )}
          </div>
          <div>
            {isOpen && (
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className={`fixed inset-x-0 md:hidden top-[70px] bg-[#1C1C1C] z-20 py-5 transform transition-transform duration-700 ease-in-out ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
                }`}
              >
                <div className="flex justify-end mr-6 flex-col space-y-5">
                  <nav className="space-y-5 flex flex-col text-right text-white">
                    <Link href={"#feature"}>Social</Link>
                    <Link href={"#feature"}>Videos</Link>
                    <Link href={"#about"}>About</Link>
                    <Link href={"#contact"}>let's connect</Link>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Appbar;
