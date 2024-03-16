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
    "Салон за маникюр и педикюр Arthouse Nails Варна. Какво ви очаква в нашия салон? Предлагаме професионална грижа за вашите нокти, гарантираща красота и здраве. Нека ноктите ви бъдат израз на вашата индивидуалност с нашите уникални дизайни и техники.",
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
    <html lang="bg">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VVKQYPT6S6"
          defer
        ></Script>
        <Script id="google-analytics" defer>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-VVKQYPT6S6');
          `}
        </Script>
        <Script id="ld-json" type="application/ld+json" defer>
          {`"@context": "https://schema.org",
            "@type": "NailSalon",
            "name": "Art House Nails Varna",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ul. \"Nikola Y. Vaptzarov\" 5, Chayka Center",
              "addressLocality": "Varna",
              "postalCode": "9010",
              "addressRegion": "Varna",
              "addressCountry": "BG"
            },
            "url": "https://arthousenailsvarna.com",
            "telephone": "+359876353458",
            "priceRange": "0.50 лв - 90 лв",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.2137669",
              "longitude": "27.9310515"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:30",
                "closes": "19:00"
              }
            ],
            "image": [
              "https://ik.imagekit.io/obelussoft/Arthousenailsvarna/Image/IMG_0351_8SwThWCYK.png?updatedAt=1709223268165"
            ]
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
