import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import About from "@/components/LandingPage/About";
import Hero from "@/components/LandingPage/Hero";
import LatestVideos from "@/components/LandingPage/LatestVideos";
import MiniBanner from "@/components/LandingPage/MiniBanner";
import Social from "@/components/LandingPage/Social";
import Videos from "@/components/LandingPage/Videos";

export default function Home() {
  return (
    <div>
      <Appbar/>
      <Hero />
      <Videos />
      <Social />
      <LatestVideos />
      <About/>
      <MiniBanner/>
      <Footer/>
    </div>
  );
}
