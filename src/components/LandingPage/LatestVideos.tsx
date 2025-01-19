import React from "react";
import Container from "../Container";

const LatestVideos = () => {
  return (
    <div className="bg-[#1C1C1C]">
      <Container>
        <div className="py-20">
          <p className="font-bold text-3xl text-center text-white">
            Watch my latest videos
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="">
              <div className="">
                <iframe
                  className="rounded h-[300px]"
                  src="https://www.youtube.com/embed/huh3dq22eLs"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestVideos;
