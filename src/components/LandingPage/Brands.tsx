"use client";
import { getBrands } from "@/sanity/schemas/utlis";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

// Define the type for a brand object
type Brand = {
  brand: string;
  brandImage: string;
};

const Brands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideos = await getBrands();
        setBrands(fetchedVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);
  console.log(brands);
  return (
    <div className="">
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
          {/* First Marquee */}
          <Marquee speed={30}>
            <div className="flex space-x-10 items-center">
              {brands.sort(() => Math.random() - 0.7).map((logo, idx) => (
                <div key={idx}>
                  <Image
                    src={logo.brandImage}
                    alt={"brand-colaborator"}
                    width={100}
                    height={100}
                    className={`w-28 ${logo.brand.toLowerCase() === "foodpanda" && "w-52"}`}
                  />
                </div>
              ))}
            </div>
          </Marquee>

          {/* Second Marquee */}
          <Marquee direction="right" speed={30}>
            <div className="flex space-x-10 items-center">
              {brands.map((logo, idx) => (
                <div key={idx}>
                  <Image
                    className={`w-28 ${logo.brand.toLowerCase() === "foodpanda" && "w-52"}`}
                    src={logo.brandImage}
                    alt={"brand-colaborator"}
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
