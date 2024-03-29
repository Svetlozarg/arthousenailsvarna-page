import { Stack, Typography } from "@mui/material";
import PageHeader from "@/components/SmallComponents/PageHeader";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import PushPinIcon from "@mui/icons-material/PushPin";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Link from "next/link";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import "aos/dist/aos.css";
import { Metadata } from "next";
import hero from "../../../public/assets/card.jpg";
import Button from "@/components/MUIComponents/Button";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "Ако имате въпроси, не се колебайте да се свържете с нас. Ние сме тук, за да ви помогнем!Ако искате да си запазите час, моля свържете се с нас като ни се обадите или ни пишете в нашите социални мрежи!",
};

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
  return (
    <Stack justifyContent="center" alignItems="center">
      <PageHeader title="Свържете се с нас" image={hero.src} />

      <Stack justifyContent="center" alignItems="center" px={2} py={8} mb={6}>
        <Typography
          component="h3"
          variant="h4"
          textAlign="center"
          mb={4}
          data-aos="fade"
        >
          Ако имате въпроси, не се колебайте да се свържете с нас като ни се
          обадите или ни пишете в нашите социални мрежи. Ние сме тук, за да ви
          помогнем!
        </Typography>
        <Typography
          component="h3"
          variant="h4"
          textAlign="center"
          mb={6}
          data-aos="fade"
        >
          За онлайн резервации, моля посетете нашата платформа тук:
        </Typography>

        <Link
          href="https://studio24.bg/art-house-nails-s9315?m&"
          target="_blank"
          rel="noreferrer"
          style={{ marginBottom: "2rem" }}
        >
          <Button message="Резервирай час" />
        </Link>

        <Typography
          component="h2"
          variant="h2"
          color="primary.main"
          sx={{
            width: "100%",
            maxWidth: "800px",
            borderBottom: `3px solid`,
            borderColor: "primary.main",
            pb: "1rem",
            m: "0 auto 3rem auto",
            textAlign: "center",
          }}
          data-aos="zoom-in"
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
              data-aos="flip-left"
            >
              {contact.icon}
              <Stack justifyContent="center" alignItems="center" gap={1}>
                <Typography component="p" variant="h4" fontWeight="normal">
                  {contact.title}
                </Typography>
                <Link href={contact.link} target="_blank" rel="noreferrer">
                  <Typography
                    component="p"
                    variant="h3"
                    sx={{
                      transition: "150ms ease-in-out",
                      "&:hover": {
                        color: "secondary.main",
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
            borderBottom: `3px solid`,
            borderColor: "primary.main",
            pb: "1rem",
            m: "0 auto 3rem auto",
            textAlign: "center",
          }}
          data-aos="zoom-in"
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
            <Typography>Подземен паркинг</Typography>
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
          <object
            title="Art House Nails Location"
            data="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%92%D0%B0%D1%80%D0%BD%D0%B0%20%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80%20%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8,%20ul.%20%22Nikola%20Y.%20Vaptzarov%22%205,%209002%20Varna+(Art%20House%20Nails)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ width: "100vw", height: "400px" }}
          >
            <embed
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%92%D0%B0%D1%80%D0%BD%D0%B0%20%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80%20%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8,%20ul.%20%22Nikola%20Y.%20Vaptzarov%22%205,%209002%20Varna+(Art%20House%20Nails)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              style={{ width: "100vw", height: "400px" }}
            ></embed>
            Error: Embedded data could not be displayed.
          </object>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactsPage;
