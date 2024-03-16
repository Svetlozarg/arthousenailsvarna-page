import PageHeader from "@/components/SmallComponents/PageHeader";
import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Вижте нашите най-нови дизайни и се вдъхновете!",
};

const photos = [
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_0083_DgvYyildr.HEIC?updatedAt=1709220879288",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_9709_UKRgj7pJ-.JPG?updatedAt=1709220877447",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_0254_Wj3OvFeX1.JPG?updatedAt=1709220874076",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_0131_6b4Gtp5wVy.HEIC?updatedAt=1709220878992",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_6885_SmDcGGqjA.HEIC?updatedAt=1709220878445",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_7558_hjYx1V6QS.HEIC?updatedAt=1709220878345",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_8404_-zIbukI99.HEIC?updatedAt=1709220878282",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_6168_1YGzRGvz3.HEIC?updatedAt=1709220877457",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_5337_9o-dEFVDW.HEIC?updatedAt=1709220876251",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_5152_FbkEfIoTV.HEIC?updatedAt=1709220876028",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_3105_-_anE0U0I.HEIC?updatedAt=1709220875023",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_4852_J7SyPQaKm.HEIC?updatedAt=1709220874989",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_2839_CZJWwoJwF.HEIC?updatedAt=1709220874964",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_4879_WlWyBU0TyE.HEIC?updatedAt=1709220874980",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_4605_03Zsh8Yce.HEIC?updatedAt=1709220874728",
  },
  {
    src: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_0159_k3yh9lrAT.HEIC?updatedAt=1709220874365",
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
