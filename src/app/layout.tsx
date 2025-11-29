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
  description: "Empowering Organizations with Trusted Outsourced Solutions",
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
