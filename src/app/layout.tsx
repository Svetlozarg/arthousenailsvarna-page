import Footer from "@/components/Layout/Footer";
import Topbar from "@/components/Layout/Topbar";
import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arthouse Nails Varna",
  description: "Arthouse Nails Varna",
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
          <Topbar />
          {children}
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  );
}
