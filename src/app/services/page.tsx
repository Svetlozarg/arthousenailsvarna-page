"use client";
import ServicesPriceList from "@/components/PageComponents/Services/ServicesPriceList";
import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack } from "@mui/material";

const ServicesPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center" overflow="hidden">
      <PageHeader
        title="Услуги"
        image="https://ik.imagekit.io/obelussoft/Arthousenailsvarna/hero_93J8zaZzP.jpeg?updatedAt=1707491914595"
      />

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
    </Stack>
  );
};

export default ServicesPage;
