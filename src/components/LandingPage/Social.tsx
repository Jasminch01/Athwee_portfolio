import React from "react";
import Container from "../Container";
import Image from "next/image";

const Social = () => {
  return (
    <div>
      <Container>
        <div className="pb-20">
          <div className="flex md:flex-row flex-col-reverse justify-between">
            <div
              className="
            flex items-center justify-center"
            >
              <div className="">
                <p className="font-bold md:text-5xl text-3xl">
                  EXPLODE <br /> YOUR SOCIALS
                </p>
                <p>Let me help you succeed on social media</p>
                <button className="py-3 px-5 mt-5 hover:bg-[#F19934] rounded hover:shadow-lg text-black transition border border-black hover:border-[#F19934] duration-300 font-medium hover:text-white">
                  Lets Collaborate
                </button>
              </div>
            </div>
            <div>
              <Image
                src={"/light.png"}
                width={500}
                height={500}
                alt="light"
              ></Image>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Social;
