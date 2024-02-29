"use client";
import Button from "@/components/MUIComponents/Button";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const IMAGE_DATA = [
  {
    img: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_0254_Wj3OvFeX1.JPG?updatedAt=1709220874076",
    title: "Image",
  },
  {
    img: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_0083_DgvYyildr.HEIC?updatedAt=1709220879288",
    title: "Image",
  },
  {
    img: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_0144_gxD6d7js5.HEIC?updatedAt=1709220879610",
    title: "Image",
  },
  {
    img: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_9709_UKRgj7pJ-.JPG?updatedAt=1709220877447",
    title: "Image",
  },
];

const HomeGalery = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Stack
      width="100%"
      justifyContent="center"
      alignItems="center"
      py={8}
      sx={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.squarespace-cdn.com/content/v1/62e6c7b70731e15cb02e68de/1660253804440-KZP04KWFFS4DCCBM8SQI/IMG_0122.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Typography
        component="h4"
        variant="h4"
        color="common.white"
        mb={2}
        data-aos="zoom-in"
      >
        Ние сме тук, за да ви помогнем да изберете най-добрия дизайн за вас
      </Typography>
      <Typography
        component="h2"
        variant="h2"
        color="common.white"
        sx={{
          width: "100%",
          maxWidth: "800px",
          borderBottom: `3px solid ${theme.palette.common.white}`,
          pb: "1rem",
          m: "0 auto 4rem auto",
          textAlign: "center",
        }}
        mb={6}
        data-aos="zoom-in"
      >
        Разгледайте за повече вдъхновение
      </Typography>

      <Stack
        width="100%"
        maxWidth="1400px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        py={4}
      >
        {IMAGE_DATA.map((item, index) => (
          <Image
            key={index}
            src={item.img}
            alt={item.title}
            width={300}
            height={300}
            style={{
              borderRadius: "10px",
              width: "300px",
              height: "300px",
              objectFit: "cover",
            }}
            data-aos="flip-up"
          />
        ))}
      </Stack>

      <Box>
        <Button
          message="Вижте още дизайни"
          sx={{ mt: "2rem" }}
          onClick={() => router.push("/gallery", { scroll: true })}
        />
      </Box>
    </Stack>
  );
};

export default HomeGalery;
