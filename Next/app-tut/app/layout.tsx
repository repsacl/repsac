import type { Metadata } from "next";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Testing Site",
  description: "Next testing site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
