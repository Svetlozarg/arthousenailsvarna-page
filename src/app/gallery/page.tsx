import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import hero from "../../../public/hero.jpeg";
import img1 from "../../../public/assets/nails/img1.jpg";
import img2 from "../../../public/assets/nails/img2.jpg";
import img3 from "../../../public/assets/nails/img3.jpg";
import img4 from "../../../public/assets/nails/img4.jpg";
import img5 from "../../../public/assets/nails/img5.jpg";
import img6 from "../../../public/assets/nails/img6.jpg";
import img7 from "../../../public/assets/nails/img7.jpg";
import img8 from "../../../public/assets/nails/img8.jpg";
import img9 from "../../../public/assets/nails/img9.jpg";
import img10 from "../../../public/assets/nails/img10.jpg";
import img11 from "../../../public/assets/nails/img11.jpg";
import img12 from "../../../public/assets/nails/img12.jpg";
import img13 from "../../../public/assets/nails/img13.jpg";
import img14 from "../../../public/assets/nails/img14.jpg";
import img15 from "../../../public/assets/nails/img15.jpg";
import img16 from "../../../public/assets/nails/img16.jpg";
import img17 from "../../../public/assets/nails/img17.jpg";
import img18 from "../../../public/assets/nails/img18.jpg";
import img19 from "../../../public/assets/nails/img19.jpg";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Вижте нашите най-нови дизайни и се вдъхновете!",
};

const photos = [
  {
    src: img1.src,
  },
  {
    src: img2.src,
  },
  {
    src: img3.src,
  },
  {
    src: img4.src,
  },
  {
    src: img5.src,
  },
  {
    src: img6.src,
  },
  {
    src: img7.src,
  },
  {
    src: img8.src,
  },
  {
    src: img9.src,
  },
  {
    src: img10.src,
  },
  {
    src: img11.src,
  },
  {
    src: img12.src,
  },
  {
    src: img13.src,
  },
  {
    src: img14.src,
  },
  {
    src: img15.src,
  },
  {
    src: img16.src,
  },
  {
    src: img17.src,
  },
  {
    src: img18.src,
  },
  {
    src: img19.src,
  },
];

const GalleryPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <PageHeader title="Галерия" image={hero.src} />

      <Stack my={6}>
        <Typography component="h3" variant="h2" textAlign="center" pb={2}>
          Наши дизайни
        </Typography>

        <Stack p={5}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap={2}
          >
            {photos.map((photo, index) => {
              return (
                <Image
                  key={index}
                  src={photo.src}
                  alt={`${index}`}
                  width={400}
                  height={400}
                  style={{
                    width: "400px",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GalleryPage;
