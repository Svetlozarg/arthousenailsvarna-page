import { Stack, Typography, useTheme } from "@mui/material";
// import Image from "next/image";

const AboutHero = () => {
  const theme = useTheme();

  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={6}
        flexWrap="wrap"
        py={6}
      >
        <Stack width="100%" maxWidth="1200px" data-aos="fade" gap={2}>
          <Typography component="h4" variant="h5" color="primary.main">
            ARTHOUSE NAILS VARNA
          </Typography>
          <Typography component="h2" variant="h2" my={4}>
            Каква е нашата цел?
          </Typography>
          <Typography component="p" variant="body1">
            <span style={{ color: theme.palette.secondary.main }}>
              В нашия салон
            </span>{" "}
            за красота се стремим да предложим на нашите клиенти не само
            качествени услуги за грижа за ноктите, но и уникално преживяване,
            което да ги освободи от стреса на ежедневието.
          </Typography>
          <Typography component="p" variant="body1" my={1}>
            <span style={{ color: theme.palette.secondary.main }}>
              Нашата цел
            </span>{" "}
            е да създадем пространство, в което всеки човек се чувства
            приветстван и специален, а грижата за ноктите става не просто
            процедура, а удоволствие.
          </Typography>
          <Typography component="p" variant="body1">
            <span style={{ color: theme.palette.secondary.main }}>Вярваме</span>{" "}
            , че красотата е израз на уникалността на всеки, затова се стремим
            да ви помогнем да откриете вашата индивидуалност чрез красив и
            поддържан маникюр. Нашият екип от професионалисти се грижи за
            най-малките детайли, за да ви осигури перфектни резултати и
            незабравимо преживяване при всяко посещение в нашия салон.
          </Typography>
        </Stack>

        {/* <Image
          src="https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_0351_8SwThWCYK.png?updatedAt=1709223268165"
          alt="Image that shows who we are"
          width="500"
          height="400"
          style={{
            borderRadius: 10,
            width: "100%",
            maxWidth: "450px",
            height: "500px",
            objectFit: "cover",
            objectPosition: "center",
          }}
          data-aos="flip-left"
        /> */}
      </Stack>

      <Stack
        width="100%"
        justifyContent="center"
        alignItems="center"
        py={20}
        sx={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_0351_8SwThWCYK.png?updatedAt=1709223268165')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: 10,
          mt: 6,
          px: 1,
        }}
        data-aos="fade"
      >
        <Typography component="h4" variant="h2" color="primary.main" mb={4}>
          Нашата мисия
        </Typography>
        <Typography
          width="100%"
          maxWidth="1400px"
          component="p"
          variant="h4"
          fontWeight="normal"
          color="common.white"
          textAlign="center"
          lineHeight="2"
        >
          Нашата мисия е да вдъхновяваме и обогатяваме животите на нашите
          клиенти, като им предоставяме иновативни услуги и персонализирано
          внимание към техните нужди. Вярваме в силата на красотата за
          подчертаване на самочувствието и усещането за благополучие, което е
          ключът към нашата дългосрочна цел - да създадем общество, в което
          всеки се чувства уверен и прекрасен.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AboutHero;
