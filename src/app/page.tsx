"use client";
import { Stack } from "@mui/material";
import HomeGalery from "@/components/PageComponents/Home/HomeGalery";
import HomeHero from "@/components/PageComponents/Home/HomeHero";
import HomeServices from "@/components/PageComponents/Home/HomeServices";
import HomeWorkingHours from "@/components/PageComponents/Home/HomeWorkingHours";
import InstagramGiftCardsSection from "@/components/SmallComponents/InstagramGiftCardsSection";

const HomePage = () => {
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
