"use client";
import { Link, Stack, Typography, useTheme } from "@mui/material";
import PushPinIcon from "@mui/icons-material/PushPin";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  const theme = useTheme();

  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent={{ xs: "flex-start", sm: "center" }}
        alignItems="flex-start"
        bgcolor="background.paper"
        gap={6}
        py={10}
        px={4}
        flexWrap={{ xs: "wrap", sm: "nowrap" }}
      >
        <Stack>
          <Typography component="h6" variant="h4" mb={4}>
            Запазете своя час
          </Typography>

          <Typography component="p" variant="body1" maxWidth="400px" mb={2}>
            Ако искате да си запазите час, моля свържете се с нас като ни се
            обадите или ни пишете в нашите социални мрежи!
          </Typography>

          <Stack direction="row" gap={1}>
            <LocalPhoneIcon sx={{ color: "primary.main" }} />
            <Typography
              component="p"
              variant="h3"
              maxWidth="400px"
              color="primary.main"
            >
              087 635 3458
            </Typography>
          </Stack>
        </Stack>

        <Stack>
          <Typography component="h6" variant="h4" mb={4}>
            Къде се намираме
          </Typography>

          <Stack gap={2}>
            <Stack direction="row" gap={1}>
              <PushPinIcon sx={{ color: "secondary.main" }} />
              <Typography>
                Чайка Център, ул. &quot;Никола И. Вапцаров&quot; 5, 9010 Варна
              </Typography>
            </Stack>
            <Stack direction="row" gap={1}>
              <LocalParkingIcon sx={{ color: "secondary.main" }} />
              <Typography>Подземен паркинг</Typography>
            </Stack>
            <Stack direction="row" gap={1}>
              <AccessTimeIcon sx={{ color: "secondary.main" }} />
              <Typography>Вторник - Събота: 09:30 ч. - 19:00 ч.</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Typography component="h6" variant="h4" mb={4}>
            Социални мрежи
          </Typography>
          <Stack gap={2}>
            <Link
              href="https://www.instagram.com/arthouse_nailsvarna/"
              target="_blank"
              style={{ color: "#000", textDecoration: "none" }}
              rel="noreferrer"
            >
              <Typography
                component="p"
                variant="body1"
                sx={{
                  transition: "150ms ease-in-out",
                  "&:hover": { color: "secondary.main" },
                }}
              >
                Instagram
              </Typography>
            </Link>
            <Link
              href="https://www.facebook.com/ArtHouseVarna"
              target="_blank"
              style={{ color: "#000", textDecoration: "none" }}
              rel="noreferrer"
            >
              <Typography
                component="p"
                variant="body1"
                sx={{
                  transition: "150ms ease-in-out",
                  "&:hover": { color: "secondary.main" },
                }}
              >
                Facebook
              </Typography>
            </Link>
            <Link
              href=""
              target="_blank"
              style={{ color: "#000", textDecoration: "none" }}
              rel="noreferrer"
            >
              <Typography
                component="p"
                variant="body1"
                sx={{
                  transition: "150ms ease-in-out",
                  "&:hover": { color: "secondary.main" },
                }}
              >
                TikTok
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        height="3rem"
        justifyContent="center"
        alignItems="center"
        bgcolor={theme.palette.grey[800]}
      >
        <Typography component="p" variant="body1" color="common.white">
          © 2024 ArtHouse Nails Varna. All Rights Reserved
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
