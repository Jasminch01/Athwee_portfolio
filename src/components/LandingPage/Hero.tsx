import React from "react";
import Container from "../Container";

const Hero = () => {
  return (
    <div className="h-[60vh]">
      <div className="bg-yellow-500 size-[10rem] blur-3xl">

      </div>
      <Container>
        <div className="flex items-center pt-32">
          <div className="space-y-5">
            <p className="text-5xl font-semibold">
              Hi <br /> I AM Athwee
            </p>
            <p>Content Creator | Storyteller | Social Media Influencer</p>

            <button className="py-3 px-5 bg-yellow-300 rounded-full">
              Let's collaborate
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
