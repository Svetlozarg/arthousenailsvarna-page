"use client";
import { AppBar, Toolbar, IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGES_DATA = [
  {
    title: "Начало",
    link: "/",
  },
  {
    title: "Услуги",
    link: "/services",
  },
  {
    title: "Галерия",
    link: "/gallery",
  },
  {
    title: "За нас",
    link: "/about",
  },
  // {
  //   title: "Резервации",
  //   link: "/reservations",
  // },
  {
    title: "Контакти",
    link: "/contacts",
  },
  // {
  //   title: "ЧЗВ",
  //   link: "/faq",
  // },
];

const Topbar = () => {
  const pathname = usePathname();

  return (
    <AppBar
      position="absolute"
      sx={{ bgcolor: "transparent", boxShadow: "none", py: "10px" }}
    >
      <Stack px={2}>
        <Toolbar disableGutters>
          <Logo />
          <IconButton
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
            disableRipple
          >
            <MenuIcon />
          </IconButton>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            gap={2}
          >
            {PAGES_DATA.map((page, index) => (
              <Link key={index} href={page.link}>
                <Typography
                  component="p"
                  variant="h4"
                  fontWeight="600"
                  sx={{
                    my: 2,
                    color: "white",
                    borderBottom: "2px solid",
                    borderColor:
                      pathname === page.link ? "secondary.main" : "transparent",
                    cursor: "pointer",
                  }}
                >
                  {page.title}
                </Typography>
              </Link>
            ))}
          </Stack>

          <Stack
            direction="row"
            sx={{ display: { xs: "none", md: "flex" } }}
            gap={2}
          >
            <Link
              href="https://www.instagram.com/arthouse_nailsvarna/"
              target="_blank"
            >
              <InstagramIcon
                sx={{
                  color: "common.white",
                  fontSize: "2.5rem",
                  transition: "150ms ease-in-out",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              />
            </Link>
            <Link href="https://www.facebook.com/ArtHouseVarna" target="_blank">
              <FacebookIcon
                sx={{
                  color: "common.white",
                  fontSize: "2.5rem",
                  transition: "150ms ease-in-out",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              />
            </Link>
          </Stack>
        </Toolbar>
      </Stack>
    </AppBar>
  );
};
export default Topbar;
