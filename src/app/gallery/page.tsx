import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import React from "react";
import PhotoAlbum from "react-photo-album";

const photos = [
  {
    src: "https://i.pinimg.com/564x/10/54/79/105479c1d7a44ea2a36934842dc7b225.jpg",
    width: 300,
    height: 300,
  },
  {
    src: "https://i.pinimg.com/564x/c9/be/d8/c9bed8e809ef2105cd20f1c6b2f2a0ba.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "https://i.pinimg.com/564x/46/10/2e/46102ee00cd5fbe9dc85b973e00129e3.jpg",
    width: 400,
    height: 500,
  },
  {
    src: "https://i.pinimg.com/564x/98/9c/4e/989c4e298fbd7036ff777cfe3fccc19e.jpg",
    width: 350,
    height: 300,
  },
  {
    src: "https://i.pinimg.com/564x/10/54/79/105479c1d7a44ea2a36934842dc7b225.jpg",
    width: 100,
    height: 100,
  },
  {
    src: "https://i.pinimg.com/564x/c9/be/d8/c9bed8e809ef2105cd20f1c6b2f2a0ba.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "https://i.pinimg.com/564x/46/10/2e/46102ee00cd5fbe9dc85b973e00129e3.jpg",
    width: 400,
    height: 500,
  },
  {
    src: "https://i.pinimg.com/564x/98/9c/4e/989c4e298fbd7036ff777cfe3fccc19e.jpg",
    width: 350,
    height: 300,
  },
  {
    src: "https://i.pinimg.com/564x/10/54/79/105479c1d7a44ea2a36934842dc7b225.jpg",
    width: 300,
    height: 300,
  },
  {
    src: "https://i.pinimg.com/564x/c9/be/d8/c9bed8e809ef2105cd20f1c6b2f2a0ba.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "https://i.pinimg.com/564x/46/10/2e/46102ee00cd5fbe9dc85b973e00129e3.jpg",
    width: 200,
    height: 300,
  },
  {
    src: "https://i.pinimg.com/564x/98/9c/4e/989c4e298fbd7036ff777cfe3fccc19e.jpg",
    width: 350,
    height: 300,
  },
  {
    src: "https://i.pinimg.com/564x/10/54/79/105479c1d7a44ea2a36934842dc7b225.jpg",
    width: 250,
    height: 200,
  },
  {
    src: "https://i.pinimg.com/564x/c9/be/d8/c9bed8e809ef2105cd20f1c6b2f2a0ba.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "https://i.pinimg.com/564x/46/10/2e/46102ee00cd5fbe9dc85b973e00129e3.jpg",
    width: 350,
    height: 300,
  },
  {
    src: "https://i.pinimg.com/564x/98/9c/4e/989c4e298fbd7036ff777cfe3fccc19e.jpg",
    width: 350,
    height: 300,
  },
];

const GalleryPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <PageHeader
        title="Галерия"
        image="https://ik.imagekit.io/obelussoft/Arthousenailsvarna/hero_93J8zaZzP.jpeg?updatedAt=1707491914595"
      />

      <Stack my={6}>
        <Typography component="h3" variant="h2" textAlign="center" pb={2}>
          Спрете времето. Останете красиви
        </Typography>

        <Stack p={5}>
          <PhotoAlbum
            layout="columns"
            spacing={10}
            padding={0}
            columns={4}
            photos={photos}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GalleryPage;
