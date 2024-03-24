import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import hero from "../../../public/hero.jpeg";
import image from "../../../public/assets/loyalty.jpg";

export const metadata: Metadata = {
  title: "Loyalty Program",
  description:
    "В преследване на нашата мисия да ви осигурим най-добрата грижа за ноктите, ние създадохме програма за лоялност, която ви награждава за вашето доверие и постоянство. Всеки път, когато посещавате нашия салон, вие сте една крачка по-близо до намалението. Всяко шесто посещение ви носи 25% отстъпка за процедура маникюр или педикюр. услуги.Всичко, което трябва да направите, е да поискате карта за лоялност в нашето студио и да започнете да събирате точки.",
};

const LoyaltyPage = () => {
  return (
    <Stack>
      <PageHeader title="Програма за лоялност" image={hero.src} />

      <Stack width="100%" maxWidth="1200px" gap={2} px={2} py={10} m="0 auto">
        <Typography
          component="h2"
          variant="h2"
          color="primary.main"
          sx={{
            width: "100%",
            maxWidth: "800px",
            borderColor: "primary.main",
            pb: "1rem",
            m: "0 auto 4rem auto",
            textAlign: "center",
          }}
          data-aos="zoom-in"
        >
          Какво представлява нашата програма?
        </Typography>
        <Typography>
          В преследване на нашата мисия да ви осигурим най-добрата грижа за
          ноктите, ние създадохме програма за лоялност, която ви награждава за
          вашето доверие и постоянство.
        </Typography>
        <Typography>
          Всеки път, когато посещавате нашия салон, вие сте една крачка по-близо
          до намалението. Всяко шесто посещение ви носи 25% отстъпка за
          процедура маникюр или педикюр. услуги.
        </Typography>
        <Typography>
          Всичко, което трябва да направите, е да поискате карта за лоялност в
          нашето студио и да започнете да събирате точки.
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={4}
          mt={10}
        >
          <Image
            src={image}
            alt="Image that shows who we are"
            width="500"
            height="300"
            style={{
              borderRadius: 10,
              width: "100%",
              maxWidth: "1000px",
              height: "600px",
              objectFit: "cover",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoyaltyPage;
