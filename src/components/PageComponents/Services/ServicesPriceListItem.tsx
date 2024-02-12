"use client";
import { Box, Stack, Typography, useTheme } from "@mui/material";

interface ServicesPriceListItemProps {
  title: string;
  subtitle: string;
  price: string;
}

const ServicesPriceListItem: React.FC<ServicesPriceListItemProps> = ({
  title,
  subtitle,
  price,
}) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack>
        <Typography component="p" variant="h4">
          {title}
        </Typography>
        <Typography
          component="p"
          variant="h5"
          color={theme.palette.grey[800]}
          fontWeight="normal"
          fontStyle="italic"
        >
          {subtitle}
        </Typography>
      </Stack>
      <Box
        sx={{
          width: "100%",
          height: "3px",
          backgroundImage:
            "radial-gradient(circle closest-side, #878889 1px, transparent 1px)",
          backgroundPosition: "center center",
          backgroundSize: "5px 2px",
          backgroundRepeat: "repeat-x",
        }}
      ></Box>
      <Typography
        width="100%"
        maxWidth="120px"
        component="p"
        variant="h3"
        color="secondary.main"
      >
        {price} лв.
      </Typography>
    </Stack>
  );
};

export default ServicesPriceListItem;
