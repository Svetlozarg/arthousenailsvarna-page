"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const HomeWorkingHours = () => {
  return (
    <Stack justifyContent="center" alignItems="center" py={10}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <Stack gap={2}>
          <Typography component="p" variant="h4" color="secondary.main">
            Свежи, Блестящи, Ярки
          </Typography>
          <Typography
            width="100%"
            maxWidth="600px"
            component="h4"
            variant="h2"
            color="primary.main"
          >
            Направете деня си блестящ с лъскавите си нокти
          </Typography>
        </Stack>

        <Image
          src="https://ik.imagekit.io/obelussoft/Arthousenailsvarna/NailPolish_Jk2Huh3iqo.png?updatedAt=1707566182705"
          alt="nail polish image"
          width={500}
          height={500}
          style={{ width: "500px", height: "auto" }}
        />
      </Stack>

      <Stack
        width="100%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={4}
        mt={10}
      >
        <iframe
          style={{ width: "600px", height: "400px", borderRadius: "10px" }}
          frameBorder="0"
          src='https://www.google.com/maps/embed/v1/place?q=ulitsa+"Nikola+Y.+Vaptzarov"+5,+9010+Varna,+Bulgaria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
        />
        <Stack
          width="100%"
          maxWidth="500px"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Typography component="p" variant="h4" color="secondary.main">
            Вторник - Събота
          </Typography>
          <Typography component="h4" variant="h2" color="primary.main">
            09:30 ч. - 19:00 ч.
          </Typography>

          <Typography component="p" variant="h4" color="secondary.main" mt={4}>
            Неделя - Понеделник
          </Typography>
          <Typography component="h4" variant="h2" color="primary.main">
            Почивен ден
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomeWorkingHours;
