import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://celebratorynetwork.com"),
  title: {
    default: "Celebratory Network | Organization Development & Culture Consulting",
    template: "%s | Celebratory Network",
  },
  description:
    "Celebratory Network specializes in organization and leadership development, business transformation, family business consulting, and large group interventions led by Payal Gupta.",
  keywords: [
    "Organization Development",
    "OD Consulting",
    "Leadership Development",
    "Culture Transformation",
    "Family Business Consulting",
    "Diversity and Inclusion",
    "Large Group Interventions",
    "Celebratory Network",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Celebratory Network",
    images: [
      {
        url: "/home/hero-image-1.webp",
        width: 1200,
        height: 630,
        alt: "Celebratory Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
