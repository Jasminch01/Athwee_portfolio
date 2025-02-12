import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const brands = [
  {
    path: "/englishT.png",
    alt: "brand-logo",
  },
  {
    path: "/foodpanda-logo.png",
    alt: "brand-logo",
  },
  {
    path: "/englishT.png",
    alt: "brand-logo",
  },
  {
    path: "/foodpanda-logo.png",
    alt: "brand-logo",
  },
  {
    path: "/primary.png",
    alt: "brand-logo",
  },
  {
    path: "/dp-world.svg",
    alt: "brand-logo",
  },  {
    path: "/englishT.png",
    alt: "brand-logo",
  },
  {
    path: "/foodpanda-logo.png",
    alt: "brand-logo",
  },
  {
    path: "/primary.png",
    alt: "brand-logo",
  },
  {
    path: "/dp-world.svg",
    alt: "brand-logo",
  },  {
    path: "/englishT.png",
    alt: "brand-logo",
  },
  {
    path: "/foodpanda-logo.png",
    alt: "brand-logo",
  },
  {
    path: "/primary.png",
    alt: "brand-logo",
  },
  {
    path: "/dp-world.svg",
    alt: "brand-logo",
  },
];
const brands1 = [
  {
    path: "/englishT.png",
    alt: "brand-logo",
  },
  {
    path: "/foodpanda-logo.png",
    alt: "brand-logo",
  },
  {
    path: "/primary.png",
    alt: "brand-logo",
  },
  {
    path: "/dp-world.svg",
    alt: "brand-logo",
  },
  {
    path: "/englishT.png",
    alt: "brand-logo",
  },
  {
    path: "/foodpanda-logo.png",
    alt: "brand-logo",
  },
  {
    path: "/primary.png",
    alt: "brand-logo",
  },
  {
    path: "/dp-world.svg",
    alt: "brand-logo",
  },
  {
    path: "/englishT.png",
    alt: "brand-logo",
  },
  {
    path: "/foodpanda-logo.png",
    alt: "brand-logo",
  },
  {
    path: "/primary.png",
    alt: "brand-logo",
  },
  {
    path: "/dp-world.svg",
    alt: "brand-logo",
  },
];

const Brands = () => {
  return (
    <div>
      <div className="text-white text-center">
        <p
          className="text-3xl text-[#00C853]"
          data-aos="fade-down"
          data-aos-duration="300"
        >
          Collaborate with
        </p>
        <p
          className="text-5xl font-bold mt-5"
          data-aos="fade-down"
          data-aos-duration="300"
        >
          Some of the World’s Top Brands
        </p>
        <div className="py-20">
          <Marquee speed={30}>
            <div className="flex space-x-10 items-center">
              {brands.map((logo, idx) => (
                <div key={idx}>
                  <Image
                    src={logo.path}
                    alt={logo.alt}
                    width={100}
                    height={100}
                    className={`w-28 ${logo.path === '/foodpanda-logo.png' && 'w-52'}`}
                  />
                </div>
              ))}
            </div>
          </Marquee>
          <Marquee direction="right" speed={30}>
            <div className="flex space-x-10 items-center">
              {brands1.map((logo, idx) => (
                <div key={idx}>
                  <Image
                    className={`w-28 ${logo.path === '/foodpanda-logo.png' && 'w-52'}`}
                    src={logo.path}
                    alt={logo.alt}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Brands;
