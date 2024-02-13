"use client";
import AboutHero from "@/components/PageComponents/About/AboutHero";
import AboutTeam from "@/components/PageComponents/About/AboutTeam";
import InstagramGiftCardsSection from "@/components/SmallComponents/InstagramGiftCardsSection";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Stack overflow="hidden">
      <PageHeader
        title="За Нас"
        image="https://ik.imagekit.io/obelussoft/Arthousenailsvarna/hero_93J8zaZzP.jpeg?updatedAt=1707491914595"
      />

      <Stack p={4}>
        <AboutHero />
        <AboutTeam />

        <InstagramGiftCardsSection />
      </Stack>
    </Stack>
  );
};

export default AboutPage;
