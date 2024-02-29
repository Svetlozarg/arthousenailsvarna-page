import { Stack, Typography } from "@mui/material";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  return (
    <Stack
      width="100vw"
      height="50vh"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: `linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
      }}
    >
      <Typography component="h2" variant="h2" color="white">
        {title}
      </Typography>
      {subtitle ? (
        <Typography component="p" variant="body1" color="white">
          Gallery
        </Typography>
      ) : null}
    </Stack>
  );
};

export default PageHeader;
