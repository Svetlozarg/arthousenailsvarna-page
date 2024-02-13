"use client";
import { Stack, Typography, useTheme } from "@mui/material";
import PageHeader from "@/components/SmallComponents/PageHeader";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import PushPinIcon from "@mui/icons-material/PushPin";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Link from "next/link";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

const CONTACTS_DATA = [
  {
    title: "Instagram",
    description: "arthouse_nailsvarna",
    icon: <InstagramIcon sx={{ color: "secondary.main", fontSize: "4rem" }} />,
    link: "https://www.instagram.com/arthouse_nailsvarna/",
  },
  {
    title: "Facebook",
    description: "ArtHouseVarna",
    icon: <FacebookIcon sx={{ color: "secondary.main", fontSize: "4rem" }} />,
    link: "https://www.facebook.com/ArtHouseVarna",
  },
  {
    title: "Телефон",
    description: "087 635 3458",
    icon: <LocalPhoneIcon sx={{ color: "secondary.main", fontSize: "4rem" }} />,
    link: "tel:0876353458",
  },
];

const ContactsPage = () => {
  const theme = useTheme();

  return (
    <Stack justifyContent="center" alignItems="center">
      <PageHeader
        title="Свържете се с нас"
        image="https://ik.imagekit.io/obelussoft/Arthousenailsvarna/hero_93J8zaZzP.jpeg?updatedAt=1707491914595"
      />

      <Stack justifyContent="center" alignItems="center" px={2} py={8} mb={6}>
        <Typography component="h3" variant="h4" textAlign="center" mb={4}>
          Ако имате въпроси, не се колебайте да се свържете с нас. Ние сме тук,
          за да ви помогнем!
        </Typography>
        <Typography component="h3" variant="h4" textAlign="center" mb={6}>
          Ако искате да си запазите час, моля свържете се с нас като ни се
          обадите или ни пишете в нашите социални мрежи!
        </Typography>

        <Typography
          component="h2"
          variant="h2"
          color="primary.main"
          sx={{
            width: "100%",
            maxWidth: "800px",
            borderBottom: `3px solid ${theme.palette.primary.main}`,
            pb: "1rem",
            m: "0 auto 3rem auto",
            textAlign: "center",
          }}
        >
          Нашите социални мрежи
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={4}
          flexWrap="wrap"
        >
          {CONTACTS_DATA.map((contact, index) => (
            <Stack
              key={index}
              justifyContent="center"
              alignItems="center"
              padding={4}
              gap={1}
              sx={{
                width: "300px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
              }}
            >
              {contact.icon}
              <Stack justifyContent="center" alignItems="center" gap={1}>
                <Typography component="p" variant="h4" fontWeight="normal">
                  {contact.title}
                </Typography>
                <Link href={contact.link} target="_blank">
                  <Typography
                    component="p"
                    variant="h3"
                    sx={{
                      transition: "150ms ease-in-out",
                      "&:hover": {
                        color: theme.palette.secondary.main,
                      },
                    }}
                  >
                    {contact.description}
                  </Typography>
                </Link>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack justifyContent="center" alignItems="center">
        <Typography
          component="h2"
          variant="h2"
          color="primary.main"
          sx={{
            width: "100%",
            maxWidth: "800px",
            borderBottom: `3px solid ${theme.palette.primary.main}`,
            pb: "1rem",
            m: "0 auto 3rem auto",
            textAlign: "center",
          }}
        >
          Къде се намираме
        </Typography>

        <Stack gap={2}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={1}
            px={2}
          >
            <PushPinIcon sx={{ color: "secondary.main" }} />
            <Typography>
              Чайка Център, ул. &quot;Никола И. Вапцаров&quot; 5, 9010 Варна
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={1}
            px={2}
          >
            <LocalParkingIcon sx={{ color: "secondary.main" }} />
            <Typography>
              Чайка Център има безплатен паркинг за всички клиенти на салона до
              1 час
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            mb={4}
            gap={1}
            px={2}
          >
            <AccessTimeIcon sx={{ color: "secondary.main" }} />
            <Typography>Вторник - Събота: 09:30 ч. - 19:00 ч.</Typography>
          </Stack>

          <iframe
            style={{ width: "100vw", height: "400px" }}
            frameBorder="0"
            src='https://www.google.com/maps/embed/v1/place?q=ulitsa+"Nikola+Y.+Vaptzarov"+5,+9010+Varna,+Bulgaria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactsPage;
