import Link from "next/link";
import React from "react";
import Container from "./Container";

const Appbar = () => {
  return (
    <div className="absolute top-0 w-full mx-auto mt-10">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">Athwee</p>
          </div>
          <div className="space-x-5">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/feature"}>FeatureExplode</Link>
            <Link href={"/contact"}>let's connect</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Appbar;
