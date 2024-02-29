"use client";
import { Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const HOME_SERVICES_DATA = [
  {
    title: "Грижа за ноктите",
    description:
      "Предлагаме професионална грижа за вашите нокти, гарантираща красота и здраве.",
    icon: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/NailCare_OnXxMr7I4.png?updatedAt=1707560242878",
  },
  {
    title: "Дизайн на нокти",
    description:
      "Нека ноктите ви бъдат израз на вашата индивидуалност с нашите уникални дизайни и техники.",
    icon: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/NailArt_AmirayAvo.png?updatedAt=1707560242892",
  },
  {
    title: "Допълнения",
    description:
      "Осигурете си моменти на релакс с нашите терапии и масажи, докато се наслаждавате с чаша ароматно кафе.",
    icon: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/AddOns_vBqkeGgNv.png?updatedAt=1707560242910",
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
    image:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/04/gel_nail_manicure_stiletto_set_1296x728_header-1024x575.jpg",
  },
  {
    slogan: "Релаксираща грижа за краката ви",
    title: "Педикюр",
    description:
      "Отпуснете се и се насладете на релаксиращ педикюр, който ще освежи и подмлади вашите крака. Ние ще се погрижим за всеки детайл, осигурявайки ви усещане за комфорт и добре балансирана грижа.",
    image:
      "https://thebeautyinstitute.edu/wp-content/uploads/2022/08/pedicure.jpg",
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
            flexWrap="wrap"
          >
            <Image
              src={service.image}
              alt="Image"
              width={600}
              height={400}
              style={{
                width: "100%",
                maxWidth: "600px",
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
