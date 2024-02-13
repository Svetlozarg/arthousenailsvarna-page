import { Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const AboutTeam = () => {
  const theme = useTheme();

  return (
    <Stack my={12}>
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
        Нашият Екип
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={4}
        flexWrap="wrap"
      >
        <Image
          src="https://ik.imagekit.io/obelussoft/Arthousenailsvarna/plamena_0PaRXLzPK.jpg?updatedAt=1707821536077"
          alt="Nail artists image"
          width={500}
          height={400}
          style={{
            borderTopLeftRadius: "45%",
            borderTopRightRadius: "45%",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            width: "100%",
            maxWidth: "350px",
            height: "auto",
            objectFit: "cover",
            border: `3px solid ${theme.palette.secondary.main}`,
          }}
        />

        <Stack width="100%" maxWidth="800px" gap={2}>
          <Typography component="h3" variant="h3" color="secondary.main">
            Пламена
          </Typography>

          <Typography component="p" variant="body1" color="text.primary">
            Пламена е изявен специалист по маникюр и педикюр.
          </Typography>
          <Typography component="p" variant="body1" color="text.primary">
            За нея, маникюрът и дизайнът на ноктите са повече от просто професия
            - те са истинска страст. През последните години тя се е посветила на
            постоянно усъвършенстване в областта на маникюра, с фокус върху
            техники като френски маникюр, гел лак и други.
          </Typography>
          <Typography component="p" variant="body1" color="text.primary">
            С непрекъснато усъвършенстване и вдъхновяващи идеи, тя усъвършенства
            индивидуални дизайни, които отразяват уникалността на всеки клиент.
          </Typography>
          <Typography component="p" variant="body1" color="text.primary">
            Нейното майсторство се проявява в гамата от услуги, която предлага -
            от класически маникюр до изкуствени нокти, винаги в крак с
            последните модни тенденции.
          </Typography>
          <Typography component="p" variant="body1" color="text.primary">
            Запалена за съвършенство, тя не пропуска възможност да се обучава и
            да участва в семинари, за да развие своите умения и да предлага
            най-доброто на клиентите си.
          </Typography>
          <Typography component="p" variant="body1" color="text.primary">
            Нейният ангажимент към професията е ясно видим във всеки дизайн,
            който тя създава, и в удовлетворението на всеки клиент.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutTeam;
