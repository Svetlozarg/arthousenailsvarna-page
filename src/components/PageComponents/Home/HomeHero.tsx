import Button from "@/components/MUIComponents/Button";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const HomeHero = () => {
  const router = useRouter();

  return (
    <Stack
      width="100vw"
      height="100vh"
      sx={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://ik.imagekit.io/obelussoft/Arthousenailsvarna/hero_93J8zaZzP.jpeg?updatedAt=1707491914595')",
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
          <Button
            message="Резервирай час"
            onClick={() => router.push("/contacts", { scroll: true })}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default HomeHero;
