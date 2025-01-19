import Container from "@/components/Container";
import About from "@/components/LandingPage/About";
import Hero from "@/components/LandingPage/Hero";
import LatestVideos from "@/components/LandingPage/LatestVideos";
import Social from "@/components/LandingPage/Social";
import Videos from "@/components/LandingPage/Videos";

export default function Home() {
  return (
    <div>
      <Hero />
      <Videos />
      <Social />
      <LatestVideos />
      <About/>
    </div>
  );
}
