import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";

const geistSans = localFont({
  src: "../lib/assets/fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});
const PPEditorialNew = localFont({
  src: "../lib/assets/fonts/PPEditorialNew-UltralightItalic.woff",
  variable: "--font-pp-editorial-new",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Oncrest Limited",
  description: "Empowering Organizations with Trusted Outsourced Solutions.",
  openGraph: {
    title: "Oncrest Limited",
    description: "Empowering Organizations with Trusted Outsourced Solutions.",
    url: `https://www.oncrestltd.com`,
    type: "website",
    siteName: "Oncrest Limited",
    images: [
      {
        url: "https://res.cloudinary.com/dsh0agz09/image/upload/v1764589715/oncrest_opengraph_horizontal_ffbbzt.svg",
        secureUrl:
          "https://res.cloudinary.com/dsh0agz09/image/upload/v1764589715/oncrest_opengraph_horizontal_ffbbzt.svg",
        width: 533,
        height: 186,
        alt: `Empowering Organizations with Trusted Outsourced Solutions.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@oncrest",
    title: "Oncrest Limited",
    description: "Empowering Organizations with Trusted Outsourced Solutions.",
    creator: "@oncrest",
    images: {
      url: "https://res.cloudinary.com/dsh0agz09/image/upload/v1764589716/oncrest_opengraph_nbixqe.svg",
      alt: `Empowering Organizations with Trusted Outsourced Solutions.`,
    },
  },
  applicationName: "Oncrest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${PPEditorialNew.variable} antialiased scroll-smooth`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
