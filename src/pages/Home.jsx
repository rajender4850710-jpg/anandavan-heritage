import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import AltarSection from "../components/landing/AltarSection";
import FacilitiesSection from "../components/landing/FacilitiesSection";
import MissionSection from "../components/landing/MissionSection";
import SponsorSection from "../components/landing/SponsorSection";
import DiasporaSection from "../components/landing/DiasporaSection";
import ContactSection from "../components/landing/ContactSection";
import VideoSection from "../components/landing/VideoSection";
import Footer from "../components/landing/Footer";

const IMAGES = {
  hero: "https://media.base44.com/images/public/69cfc5bde36fddfa4d6802bb/5eb3be22f_generated_02106d8a.png",
  altar: "https://media.base44.com/images/public/69cfc5bde36fddfa4d6802bb/070230808_generated_3d83f4d7.png",
  guest: "https://media.base44.com/images/public/69cfc5bde36fddfa4d6802bb/787fa8e14_generated_cdeccf3d.png",
  hall: "https://media.base44.com/images/public/69cfc5bde36fddfa4d6802bb/0397291cd_generated_5f8e8d75.png",
  mission: "https://media.base44.com/images/public/69cfc5bde36fddfa4d6802bb/504934a1f_generated_5eb3331b.png",
  architecture: "https://media.base44.com/images/public/69cfc5bde36fddfa4d6802bb/6231826e0_generated_5a5c1a51.png",
  donor: "https://media.base44.com/images/public/69cfc5bde36fddfa4d6802bb/18fe31258_generated_101e0ec2.png",
};

const CYPRUS_BG = "https://media.base44.com/images/public/69cfc5bde36fddfa4d6802bb/c96c2f896_generated_image.png";

export default function Home() {
  return (
    <div className="font-body relative">
      {/* Cyprus island watermark background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${CYPRUS_BG})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "80%",
          opacity: 0.06,
        }}
      />
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <AboutSection architectureImage={IMAGES.architecture} />
      <section id="temple" />
      <AltarSection altarImage={IMAGES.altar} />
      <FacilitiesSection guestImage={IMAGES.guest} hallImage={IMAGES.hall} />
      <MissionSection missionImage={IMAGES.mission} />
      <SponsorSection donorImage={IMAGES.donor} />
      <VideoSection />
      <DiasporaSection />
      <ContactSection />
      <Footer />
    </div>
  );
}