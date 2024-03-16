import AboutHero from "@/components/PageComponents/About/AboutHero";
import AboutTeam from "@/components/PageComponents/About/AboutTeam";
import InstagramGiftCardsSection from "@/components/SmallComponents/InstagramGiftCardsSection";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Каква е нашата цел? В нашия салон за красота се стремим да предложим на нашите клиенти не само качествени услуги за грижа за ноктите, но и уникално преживяване, което да ги освободи от стреса на ежедневието. Нашата цел е да създадем пространство, в което всеки човек се чувства приветстван и специален, а грижата за ноктите става не просто процедура, а удоволствие.",
};

const AboutPage = () => {
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
