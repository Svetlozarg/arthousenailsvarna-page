"use client";
import { Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import image1 from "../../../../public/assets/home1.jpg";
import image2 from "../../../../public/assets/home2.jpg";
import image3 from "../../../../public/assets/home3.jpg";
import image4 from "../../../../public/assets/Nail-Care.png";
import image5 from "../../../../public/assets/Nail-Art.png";
import image6 from "../../../../public/assets/Add-Ons.png";

const HOME_SERVICES_DATA = [
  {
    title: "Грижа за ноктите",
    description:
      "Предлагаме професионална грижа за вашите нокти, гарантираща красота и здраве.",
    icon: image4.src,
  },
  {
    title: "Дизайн на нокти",
    description:
      "Нека ноктите ви бъдат израз на вашата индивидуалност с нашите уникални дизайни и техники.",
    icon: image5.src,
  },
  {
    title: "Допълнения",
    description:
      "Осигурете си моменти на релакс с нашите терапии и масажи, докато се наслаждавате с чаша ароматно кафе.",
    icon: image6.src,
  },
  {
    title: "Стерилизация",
    description:
      "Всички наши инструменти са стерилизирани и дезинфекцирани, за да ви осигурим максимална хигиена и безопасност.",
    icon: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Treatments_RP8Ogrneu.png?updatedAt=1707560242907",
  },
];

const HOME_SERVICES_SECOND_DATA = [
  {
    slogan: "Изискана грижа за ръцете ви",
    title: "Маникюр",
    description:
      "Предлагаме ви разнообразие от услуги, които ще ви помогнат да поддържате красиви и здрави нокти. Ние ви предлагаме най-подходящите техники и продукти, за да се насладите на перфектни резултати.",
    image: image1.src,
  },
  {
    slogan: "Релаксираща грижа за краката ви",
    title: "Педикюр",
    description:
      "Отпуснете се и се насладете на релаксиращ педикюр, който ще освежи и подмлади вашите крака. Ние ще се погрижим за всеки детайл, осигурявайки ви усещане за комфорт и добре балансирана грижа.",
    image: image2.src,
  },
  {
    slogan: "Изключително качество и стерилност",
    title: "Стерилна Среда",
    description:
      "В нашия салон отдаваме изключително значение на стерилността и хигиената. Нашата цел е да осигурим безопасна и здравословна среда за нашите клиенти. Следователно, извършваме редовни процедури за почистване и стерилизация на всички инструменти и работни повърхности. Вярваме, че само в чиста и стерилна среда може да се постигне най-доброто качество на услугите, като същевременно се гарантира безопасността и комфортът на нашите клиенти.",
    image: image3.src,
  },
];

const HomeServices = () => {
  const theme = useTheme();

  return (
    <Stack width="100vw" px={2} py={10}>
      <Typography
        component="h2"
        variant="h2"
        color="primary.main"
        sx={{
          width: "100%",
          maxWidth: "800px",
          borderBottom: `3px solid ${theme.palette.primary.main}`,
          pb: "1rem",
          m: "0 auto 4rem auto",
          textAlign: "center",
        }}
        data-aos="zoom-in"
      >
        Какво ви очаква в нашия салон
      </Typography>

      <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={2}>
        {HOME_SERVICES_DATA.map((service, index) => (
          <Stack
            key={index}
            width="100%"
            maxWidth="300px"
            alignItems="center"
            gap={2}
            data-aos="flip-left"
          >
            <Image
              src={service.icon}
              alt={`${service.title} icon`}
              width={100}
              height={100}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid",
                borderColor: theme.palette.secondary.main,
              }}
            />
            <Typography component="h3" variant="h3">
              {service.title}
            </Typography>
            <Typography component="p" variant="body1" textAlign="center">
              {service.description}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Stack
        width="100%"
        maxWidth="70vw"
        justifyContent="center"
        alignItems="center"
        m="4rem auto 0 auto"
      >
        {HOME_SERVICES_SECOND_DATA.map((service, index) => (
          <Stack
            key={index}
            direction="row"
            flexDirection={index === 1 ? "row-reverse" : "row"}
            justifyContent="center"
            alignItems="center"
            gap={6}
            my={4}
            flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
          >
            <Image
              src={service.image}
              alt="Image"
              width={600}
              height={400}
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "400px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              data-aos="flip-left"
            />

            <Stack
              width="100%"
              maxWidth="600px"
              gap={4}
              justifyContent="center"
              alignItems={index === 1 ? "flex-end" : "flex-start"}
              data-aos="fade"
            >
              <Typography
                component="p"
                variant="body1"
                color="secondary.main"
                fontWeight="bold"
              >
                {service.slogan}
              </Typography>
              <Typography component="h4" variant="h2" color="primary.main">
                {service.title}
              </Typography>
              <Typography
                component="p"
                variant="body1"
                textAlign={index === 1 ? "right" : "left"}
              >
                {service.description}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default HomeServices;
