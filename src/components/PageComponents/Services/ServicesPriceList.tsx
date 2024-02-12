"use client";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import ServicesPriceListItem from "./ServicesPriceListItem";

const PRICE_LIST_DATA = [
  {
    sectionTitle: "Маникюр",
    services: [
      {
        title: "Класически маникюр без лак",
        subtitle: "30 минути",
        price: "25",
      },
      {
        title: "Маникюр с гел лак",
        subtitle: "90 минути",
        price: "40",
      },
      {
        title: "Маникюр с обикновен лак",
        subtitle: "45 минути",
        price: "30",
      },
      {
        title: "Мъжки маникюр",
        subtitle: "30 минути",
        price: "25",
      },
      {
        title: "Укрепване на един нокът",
        subtitle: "5 минути",
        price: "2",
      },
      {
        title: "Гел на естествен къси нокти",
        subtitle: "2 часа",
        price: "50",
      },
      {
        title: "Гел на естествен дълги нокти",
        subtitle: "2 часа",
        price: "60",
      },
      {
        title: "Френски маникюр и омбре",
        subtitle: "15 минути",
        price: "5",
      },
      {
        title: "Дизайнерска декорация",
        subtitle: "15 минути",
        price: "5",
      },
      {
        title: "Малки декорации",
        subtitle: "10 минути",
        price: "0,50 - 2",
      },
      {
        title: "Премахване на гел лак",
        subtitle: "10 минути",
        price: "5",
      },
      {
        title: "Спа терапия маникюр",
        subtitle: "10 минути",
        price: "5",
      },
    ],
  },
  {
    sectionTitle: "Педикюр",
    services: [
      {
        title: "Класически педикюр без лак",
        subtitle: "45 минути",
        price: "35",
      },
      {
        title: "Педикюр с гел лак",
        subtitle: "90 минути",
        price: "50",
      },
      {
        title: "Педикюр с обикновен лак",
        subtitle: "60 минути",
        price: "40",
      },
      {
        title: "Бърз педикюр",
        subtitle: "50 минути",
        price: "40",
      },
      {
        title: "Мъжки педикюр",
        subtitle: "50 минути",
        price: "40",
      },
      {
        title: "Спа терапия педикюр",
        subtitle: "10 минути",
        price: "5",
      },
    ],
  },
  {
    sectionTitle: "Ноктопластика",
    services: [
      {
        title: "Изграждане на къси нокти",
        subtitle: "2 часа",
        price: "80",
      },
      {
        title: "Изграждане на дълги нокти",
        subtitle: "3 часа",
        price: "90",
      },
      {
        title: "Поддръжка на изградени нокти",
        subtitle: "2 часа",
        price: "65",
      },
      {
        title: "Изграждане на един нокът",
        subtitle: "5 минути",
        price: "5",
      },
      {
        title: "Премахване на ноктопластика",
        subtitle: "15 минути",
        price: "10",
      },
    ],
  },
  {
    sectionTitle: "Промо Пакети",
    services: [
      {
        title: "Пакет маникюр и педикюр с гел лак",
        subtitle: "3 часа",
        price: "80",
      },
      {
        title: "Спа терапия 3+1",
        subtitle: "10 минути",
        price: "15",
      },
    ],
  },
];

const ServicesPriceList = () => {
  const theme = useTheme();

  return (
    <Grid width="100%" maxWidth="90rem" container spacing={10} py={10} px={10}>
      {PRICE_LIST_DATA.map((section, index) => (
        <Grid item key={index} xs={12} sm={6}>
          <Typography
            component="h2"
            variant="h2"
            mb={3}
            color="primary.main"
            sx={{
              width: "100%",
              maxWidth: "20rem",
              borderBottom: `3px solid ${theme.palette.primary.main}`,
              pb: 2,
            }}
          >
            {section.sectionTitle}
          </Typography>
          <Stack gap={3}>
            {section.services.map((service, index) => (
              <ServicesPriceListItem
                key={index}
                title={service.title}
                subtitle={service.subtitle}
                price={service.price}
              />
            ))}
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicesPriceList;
