import Footer from "@/components/Layout/Footer";
import Topbar from "@/components/Layout/Topbar";
import AOS from "@/components/SmallComponents/AOS";
import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Arthouse Nails Varna",
    template: "%s - Arthouse Nails Varna",
  },
  description: "Arthouse Nails Varna",
  twitter: {
    card: "summary_large_image",
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
    "гел",
    "лак",
    "квартал",
    "чайка",
    "център",
    "салони",
  ],
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://arthousenailsvarna.com/",
  },
  category: "nails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
