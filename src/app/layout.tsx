import Footer from "@/components/Layout/Footer";
import Topbar from "@/components/Layout/Topbar";
import AOS from "@/components/SmallComponents/AOS";
import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Arthouse Nails Varna - Салон за маникюр и педикюр",
    template: "%s - Arthouse Nails Varna",
  },
  description:
    "Салон за маникюр и педикюр Arthouse Nails Varna. Какво ви очаква в нашия салон? Предлагаме професионална грижа за вашите нокти, гарантираща красота и здраве. Нека ноктите ви бъдат израз на вашата индивидуалност с нашите уникални дизайни и техники. Осигурете си моменти на релакс с нашите терапии и масажи, докато се наслаждавате с чаша ароматно кафе. Всички наши инструменти са стерилизирани и дезинфекцирани, за да ви осигурим максимална хигиена и безопасност.",
  category: "Салон за маникюр и педикюр",
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://arthousenailsvarna.com/",
    images: [
      {
        url: "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_0351_8SwThWCYK.png",
      },
    ],
  },
  keywords: [
    "nails",
    "varna",
    "art",
    "house",
    "nail",
    "salon",
    "spa",
    "manicure",
    "pedicure",
    "beauty",
    "treatment",
    "care",
    "nailart",
    "naildesign",
    "nailcare",
    "nailpolish",
    "nailstyle",
    "nailartist",
    "маникюр",
    "педикюр",
    "грижа",
    "красота",
    "салон",
    "спа",
    "варна",
    "арт",
    "хаус",
    "нокти",
    "ноктопластика",
    "ноктополиране",
    "ноктите",
    "нокът",
    "гел",
    "лак",
    "квартал",
    "чайка",
    "център",
    "салони",
    "изграждане",
    "къси",
    "дълги",
    "поддръжка",
    "сваляне",
    "мъжки",
    "женски",
    "бърз",
    "френски",
    "декорации",
    "декорация",
    "дизайнерски",
    "терапия",
    "укрепване",
    "омбре",
    "улица",
    "никола",
    "вапцаров",
    "бизнес",
    "сграда",
  ],
  twitter: {
    title: "Arthouse Nails Varna",
    site: "@arthousenailsvarna",
    description: "Салон за маникюр и педикюр Arthouse Nails Varna",
    images:
      "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_0351_8SwThWCYK.png",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VVKQYPT6S6"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-VVKQYPT6S6');
          `}
        </Script>
      </head>
      <ThemeRegistry>
        <body style={{ overflowX: "hidden" }}>
          <AOS>
            <Topbar />
            {children}
            <Footer />
          </AOS>
        </body>
      </ThemeRegistry>
    </html>
  );
}
