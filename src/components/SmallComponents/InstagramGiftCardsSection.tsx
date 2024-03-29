"use client";
import { Stack, Typography } from "@mui/material";
import Button from "../MUIComponents/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import image1 from "../../../public/assets/instaBanner.jpg";
import image2 from "../../../public/assets/loyaltyBanner.jpg";

const InstagramGiftCardsSection = () => {
  const router = useRouter();

  return (
    <Stack
      width="100%"
      justifyContent="center"
      alignItems="center"
      mt={10}
      direction={{ xs: "column", md: "row" }}
      gap={{ xs: 1, md: 2 }}
    >
      <Stack
        width="100%"
        justifyContent="center"
        alignItems="center"
        flex={1}
        sx={{
          backgroundImage: `url('${image1.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "400px",
          borderTopRightRadius: { xs: 0, md: 10 },
          borderBottomRightRadius: { xs: 0, md: 10 },
        }}
        gap={4}
        p={{ xs: 10, md: 4 }}
        // data-aos="fade-right"
      >
        <Typography component="h4" variant="h3" textAlign="center">
          Последвайте ни в Instagram
        </Typography>
        <Link
          href="https://www.instagram.com/arthouse_nailsvarna/"
          target="_blank"
          rel="noreferrer"
        >
          <Typography component="p" variant="h2" textAlign="center">
            @arthouse_nailsvarna
          </Typography>
        </Link>
      </Stack>
      <Stack
        width="100%"
        justifyContent="center"
        alignItems="center"
        flex={1}
        sx={{
          backgroundImage: `url('${image2.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "450px",
          borderTopLeftRadius: { xs: 0, md: 10 },
          borderBottomLeftRadius: { xs: 0, md: 10 },
        }}
        p={{ xs: 10, md: 4 }}
        // data-aos="fade-left"
      >
        <Typography
          component="h4"
          variant="h1"
          color="common.white"
          textAlign="center"
        >
          Програма за лоялност
        </Typography>

        <Typography
          component="p"
          variant="h3"
          mt={4}
          mb={1}
          color="common.white"
          textAlign="center"
        >
          Събирайте точки при всяко посещение.
        </Typography>

        <Typography
          component="p"
          variant="h3"
          mb={4}
          color="common.white"
          textAlign="center"
        >
          Всяко 6-то посещение ви носи 25% отстъпка за процедура маникюр или
          педикюр.
        </Typography>

        <Button
          message="Научете Повече"
          onClick={() => router.push("/loyalty", { scroll: true })}
        />
      </Stack>
    </Stack>
  );
};

export default InstagramGiftCardsSection;
