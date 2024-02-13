import { Stack, Typography } from "@mui/material";
import Button from "../MUIComponents/Button";
import Link from "next/link";

const InstagramGiftCardsSection = () => {
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
          backgroundImage:
            "url('https://ik.imagekit.io/obelussoft/Arthousenailsvarna/pb_4-1_-xttQq4rM.jpg?updatedAt=1707823386357')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "400px",
          borderTopRightRadius: { xs: 0, md: 10 },
          borderBottomRightRadius: { xs: 0, md: 10 },
        }}
        gap={4}
        p={{ xs: 10, md: 4 }}
      >
        <Typography component="h4" variant="h3" textAlign="center">
          Последвайте ни в Instagram
        </Typography>
        <Link
          href="https://www.instagram.com/arthouse_nailsvarna/"
          target="_blank"
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
          backgroundImage:
            "url('https://ik.imagekit.io/obelussoft/Arthousenailsvarna/pb_4-2_UD-2oa8MKZ.jpg?updatedAt=1707823386329')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "450px",
          borderTopLeftRadius: { xs: 0, md: 10 },
          borderBottomLeftRadius: { xs: 0, md: 10 },
        }}
        p={{ xs: 10, md: 4 }}
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
          Всяко 6-то посещение ви носи 50% отстъпка за процедура маникюр или
          педикюр.
        </Typography>

        <Button message="Научете Повече" />
      </Stack>
    </Stack>
  );
};

export default InstagramGiftCardsSection;
