import Button from "@/components/MUIComponents/Button";
import { Box, Stack, Typography } from "@mui/material";
import hero from "../../../../public/hero.jpeg";
import Link from "next/link";

const HomeHero = () => {
  return (
    <Stack
      width="100vw"
      height="100vh"
      sx={{
        background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('${hero.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <Stack
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        gap={6}
      >
        <Typography
          component="h1"
          variant="h3"
          textTransform="uppercase"
          color="primary.main"
          textAlign="center"
          data-aos="slide-down"
        >
          ArtHouse Nails Varna
        </Typography>
        <Typography
          component="h2"
          variant="h1"
          color="common.white"
          textAlign="center"
          data-aos="fade"
        >
          Мястото за вашия перфектен маникюр и педикюр
        </Typography>

        <Box data-aos="slide-up">
          <Link
            href="https://studio24.bg/art-house-nails-s9315?m&"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              message="Резервирай час"
              // onClick={() => router.push("/contacts", { scroll: true })}
            />
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

export default HomeHero;
