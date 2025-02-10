"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className={`md:absolute fixed  z-50 top-0 w-full mx-auto pt-10 ${
        isScrolled && "bg-[#1C1C1C] py-5"
      }`}
    >
      <Container>
        <div className="">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href={"/"}
                className="text-2xl font-bold uppercase text-white"
              >
                Ath<span className=" text-[#00C853]">wee.</span>{" "}
              </Link>
            </div>
            <div className="space-x-5 text-white hidden md:block">
              <Link
                href={"#social"}
                className="hover:text-[#00C853] transition uppercase"
              >
                Social
              </Link>
              <Link
                href={"#videos"}
                className="hover:text-[#00C853] transition uppercase"
              >
                Videos
              </Link>
              <Link
                href={"#about"}
                className="hover:text-[#00C853] transition uppercase"
              >
                About
              </Link>
              <Link
                href={"mailto:hello.athwee@gmail.com"}
                className="hover:text-[#00C853] transition uppercase"
              >
                Let's connect
              </Link>
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
                data-aos="fade-right"
                data-aos-duration="500"
                className={`fixed inset-x-0 md:hidden top-[70px] bg-[#1C1C1C] h-full z-50 py-5 transform transition-transform duration-700 ease-in-out ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
                }`}
              >
                <div className="flex-col space-y-5 mt-36">
                  <nav className="space-y-5 flex flex-col text-center text-white">
                    <Link
                      href={"#social"}
                      className="hover:text-[#00C853] transition text-2xl uppercase"
                      onClick={() => setIsOpen(false)}
                    >
                      Social
                    </Link>
                    <Link
                      href={"#videos"}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-[#00C853] transition text-2xl uppercase"
                    >
                      Videos
                    </Link>
                    <Link
                      href={"#about"}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-[#00C853] transition text-2xl uppercase"
                    >
                      About
                    </Link>
                    <Link
                      href={"mailto:hello.athwee@gmail.com"}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-[#00C853] transition text-2xl uppercase"
                    >
                      let's connect
                    </Link>
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
