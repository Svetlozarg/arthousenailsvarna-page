"use client";
import { AppBar, Toolbar, Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer from "./Drawer";
import HomeIcon from "@mui/icons-material/Home";
import BrushIcon from "@mui/icons-material/Brush";
import CollectionsIcon from "@mui/icons-material/Collections";
import GroupsIcon from "@mui/icons-material/Groups";
import ContactsIcon from "@mui/icons-material/Contacts";

export const PAGES_DATA = [
  {
    title: "Начало",
    link: "/",
    icon: <HomeIcon sx={{ color: "secondary.main" }} />,
  },
  {
    title: "Услуги",
    link: "/services",
    icon: <BrushIcon sx={{ color: "secondary.main" }} />,
  },
  {
    title: "Галерия",
    link: "/gallery",
    icon: <CollectionsIcon sx={{ color: "secondary.main" }} />,
  },
  {
    title: "За нас",
    link: "/about",
    icon: <GroupsIcon sx={{ color: "secondary.main" }} />,
  },
  // {
  //   title: "Резервации",
  //   link: "/reservations",
  // },
  {
    title: "Контакти",
    link: "/contacts",
    icon: <ContactsIcon sx={{ color: "secondary.main" }} />,
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
          <Drawer />

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
