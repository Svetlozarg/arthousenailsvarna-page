import ServicesPriceList from "@/components/PageComponents/Services/ServicesPriceList";
import InstagramGiftCardsSection from "@/components/SmallComponents/InstagramGiftCardsSection";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import hero from "../../../public/hero.jpeg";

export const metadata: Metadata = {
  title: "Services",
};

const ServicesPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center" overflow="hidden">
      <PageHeader title="Услуги" image={hero.src} />

      <Stack
        width="100vw"
        height="100%"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundImage:
            "url('https://ik.imagekit.io/obelussoft/Arthousenailsvarna/tra-bg_mS1yAIMzu.png?updatedAt=1707765165141')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <ServicesPriceList />
      </Stack>

      <InstagramGiftCardsSection />
    </Stack>
  );
};

export default ServicesPage;
