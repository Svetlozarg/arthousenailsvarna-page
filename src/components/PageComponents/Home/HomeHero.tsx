import Button from "@/components/MUIComponents/Button";
import { Stack, Typography } from "@mui/material";

const HomeHero = () => {
  return (
    <Stack
      width="100vw"
      height="100vh"
      sx={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url('https://ik.imagekit.io/obelussoft/Arthousenailsvarna/hero_93J8zaZzP.jpeg?updatedAt=1707491914595')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
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
        >
          ArtHouse Nails Varna
        </Typography>
        <Typography
          component="h2"
          variant="h1"
          color="common.white"
          textAlign="center"
        >
          Мястото, където ноктите стават изкуство
        </Typography>
        <Button message="Резервирай час" />
      </Stack>
    </Stack>
  );
};

export default HomeHero;
