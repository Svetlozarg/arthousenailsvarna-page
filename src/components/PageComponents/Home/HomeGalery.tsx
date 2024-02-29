"use client";
import Button from "@/components/MUIComponents/Button";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const IMAGE_DATA = [
  {
    img: "https://images.squarespace-cdn.com/content/v1/5f834a0c50899866fcb93a61/1615140560683-E4XPHODZJSBUMYF1MSQA/image-asset.jpeg?format=500w",
    title: "Image",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5f834a0c50899866fcb93a61/1614045601785-56GNOQPPTZIQSL3YWJHA/image-asset.jpeg?format=500w",
    title: "Image",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5f834a0c50899866fcb93a61/1612664058252-8C0K9TASWKU4XAGGV3J4/image-asset.jpeg?format=500w",
    title: "Image",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5f834a0c50899866fcb93a61/1615140560683-E4XPHODZJSBUMYF1MSQA/image-asset.jpeg?format=500w",
    title: "Image",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5f834a0c50899866fcb93a61/1614045601785-56GNOQPPTZIQSL3YWJHA/image-asset.jpeg?format=500w",
    title: "Image",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5f834a0c50899866fcb93a61/1612664058252-8C0K9TASWKU4XAGGV3J4/image-asset.jpeg?format=500w",
    title: "Image",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5f834a0c50899866fcb93a61/1614045601785-56GNOQPPTZIQSL3YWJHA/image-asset.jpeg?format=500w",
    title: "Image",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5f834a0c50899866fcb93a61/1612664058252-8C0K9TASWKU4XAGGV3J4/image-asset.jpeg?format=500w",
    title: "Image",
  },
];

const HomeGalery = () => {
  const theme = useTheme();

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
      >
        {IMAGE_DATA.map((item, index) => (
          <Image
            key={index}
            src={item.img}
            alt={item.title}
            width={300}
            height={300}
            style={{ borderRadius: "10px" }}
            data-aos="flip-up"
          />
        ))}
      </Stack>

      <Box data-aos="slide-up">
        <Button message="Вижте още дизайни" sx={{ mt: "2rem" }} />
      </Box>
    </Stack>
  );
};

export default HomeGalery;
