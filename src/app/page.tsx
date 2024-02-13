"use client";
import { Stack } from "@mui/material";
import HomeGalery from "@/components/PageComponents/Home/HomeGalery";
import HomeHero from "@/components/PageComponents/Home/HomeHero";
import HomeServices from "@/components/PageComponents/Home/HomeServices";
import HomeWorkingHours from "@/components/PageComponents/Home/HomeWorkingHours";
import InstagramGiftCardsSection from "@/components/SmallComponents/InstagramGiftCardsSection";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Stack>
      <HomeHero />
      <HomeServices />
      <HomeGalery />
      <HomeWorkingHours />
      <InstagramGiftCardsSection />
    </Stack>
  );
};

export default HomePage;
