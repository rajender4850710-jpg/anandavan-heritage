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
import Footer from "../components/landing/Footer";

const IMAGES = {
  hero: "/__generating__/img_9857c34cd6eb.png",
  altar: "/__generating__/img_0dfc39f88958.png",
  guest: "/__generating__/img_d363ea36d675.png",
  hall: "/__generating__/img_7337f7c491ec.png",
  mission: "/__generating__/img_aec15429dfba.png",
  architecture: "/__generating__/img_f19d5db0403b.png",
  donor: "/__generating__/img_8354bf8fd76c.png",
};

export default function Home() {
  return (
    <div className="font-body">
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <AboutSection architectureImage={IMAGES.architecture} />
      <section id="temple" />
      <AltarSection altarImage={IMAGES.altar} />
      <FacilitiesSection guestImage={IMAGES.guest} hallImage={IMAGES.hall} />
      <MissionSection missionImage={IMAGES.mission} />
      <SponsorSection donorImage={IMAGES.donor} />
      <DiasporaSection />
      <ContactSection />
      <Footer />
    </div>
  );
}