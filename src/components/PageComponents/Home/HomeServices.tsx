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
    title: "Изкуство на ноктите",
    description:
      "Ние ще ви впечатлим с изискани и стилни дизайни за вашите ноктите.",
    icon: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/NailArt_AmirayAvo.png?updatedAt=1707560242892",
  },
  {
    title: "Допълнения",
    description:
      "Осигурете си моменти на релакс с нашите терапии и масажи, които ще ви освежат и подмладят.",
    icon: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/AddOns_vBqkeGgNv.png?updatedAt=1707560242910",
  },
  {
    title: "Третиране",
    description:
      "Ние ще погрижим за здравето на вашите нокти с индивидуално подбрани процедури и терапии.",
    icon: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Treatments_RP8Ogrneu.png?updatedAt=1707560242907",
  },
];

const HOME_SERVICES_SECOND_DATA = [
  {
    slogan: "Изкуство на пръстите",
    title: "Маникюр",
    description:
      "Позволете ни да ви поглезим с изискан маникюр, който ще придаде изтънчен завършек на визията ви. В нашето студио използваме само висококачествени продукти и иновативни техники, за да ви осигурим перфектен резултат.",
    image:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/04/gel_nail_manicure_stiletto_set_1296x728_header-1024x575.jpg",
  },
  {
    slogan: "Красота от глезена надолу",
    title: "Педикюр",
    description:
      "Отпуснете се и се насладете на релаксиращ педикюр, който ще освежи и подмлади вашите крака. Нашите специалисти ще се погрижат за всяка детайлна стъпка, осигурявайки ви усещане за комфорт и добре балансирана грижа.",
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
      >
        Какво ви очаква в нашия салон
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={4}
        flexWrap="wrap"
        gap={2}
      >
        {HOME_SERVICES_DATA.map((service, index) => (
          <Stack
            key={index}
            width="100%"
            maxWidth="300px"
            alignItems="center"
            gap={2}
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
            />

            <Stack
              width="100%"
              maxWidth="600px"
              gap={4}
              justifyContent="center"
              alignItems={index === 1 ? "flex-end" : "flex-start"}
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
