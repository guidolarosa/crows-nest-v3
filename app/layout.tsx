import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Default theme
import '@splidejs/react-splide/css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crows Nest",
  description: "Color Grading studio from Buenos Aires, Argentina.",
};

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-black`}
      >
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
