import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const generalSans = localFont({
  src: [
    {
      path: "../assets/fonts/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/GeneralSans-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/GeneralSans-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../assets/fonts/GeneralSans-Semibold.otf",
      weight: "500",
      style: "semibold",
    },
    {
      path: "../assets/fonts/GeneralSans-Medium.otf",
      weight: "600",
      style: "medium",
    },
  ],
  variable: "--font-generalSans",
});

export const metadata: Metadata = {
  title: "Athwee - Promote good things & spread positivity",
  description:
    "Explore Athwee Marma's portfolio featuring high-quality content creation, brand partnerships, and digital storytelling",

  keywords: [
    "Athwee Marma",
    "content creator",
    "social media influencer",
    "YouTube creator",
    "Facebook influencer",
    "video editing",
    "digital marketing",
    "brand collaborations",
    "athwee",
    "ath",
  ],
  authors: [{ name: "Athwee Marma", url: "https://www.athweemarma.com" }],
  openGraph: {
    title: "Athwee Marma | Content Creator & Influencer",
    description:
      "Explore Athwee Marma's portfolio featuring high-quality content creation, brand partnerships, and digital storytelling.",
    url: "https://www.athweemarma.com",
    type: "website",
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
        <link rel="icon" href="/favicon-athwee.png" sizes="any" />
        <meta name="description" content={`${metadata.description}`} />
        <meta name="keywords" content={`${metadata.keywords}`} />
      </head>
      <body className={`${generalSans.variable} font-generalSans antialiased`}>
        {children}
      </body>
    </html>
  );
}
