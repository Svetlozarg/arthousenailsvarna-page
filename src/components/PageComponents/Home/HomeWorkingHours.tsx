"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const HomeWorkingHours = () => {
  return (
    <Stack justifyContent="center" alignItems="center" py={10} px={2}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={4}
        flexWrap="wrap"
      >
        <Stack gap={2} data-aos="fade">
          <Typography
            width="100%"
            maxWidth="600px"
            component="h3"
            variant="h3"
            color="primary.main"
          >
            Създайте перфектен маникюр, който говори за вашата уникалност и
            стил!
          </Typography>
        </Stack>

        <Image
          src="https://ik.imagekit.io/obelussoft/Arthousenailsvarna/NailPolish_Jk2Huh3iqo.png?updatedAt=1707566182705"
          alt="nail polish image"
          width={500}
          height={500}
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            objectFit: "cover",
          }}
          data-aos="flip-left"
        />
      </Stack>

      <Stack
        width="100%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={4}
        mt={10}
        flexWrap="wrap"
      >
        <object
          title="Art House Nails Location"
          data="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%92%D0%B0%D1%80%D0%BD%D0%B0%20%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80%20%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8,%20ul.%20%22Nikola%20Y.%20Vaptzarov%22%205,%209002%20Varna+(Art%20House%20Nails)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ width: "600px", height: "400px", borderRadius: "10px" }}
        >
          <embed
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%92%D0%B0%D1%80%D0%BD%D0%B0%20%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80%20%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8,%20ul.%20%22Nikola%20Y.%20Vaptzarov%22%205,%209002%20Varna+(Art%20House%20Nails)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ width: "600px", height: "400px", borderRadius: "10px" }}
          ></embed>
          Error: Embedded data could not be displayed.
        </object>
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
          <Typography component="p" variant="h2" color="primary.main">
            09:30 ч. - 19:00 ч.
          </Typography>

          <Typography component="p" variant="h4" color="secondary.main" mt={4}>
            Неделя - Понеделник
          </Typography>
          <Typography component="p" variant="h2" color="primary.main">
            Почивен ден
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomeWorkingHours;
