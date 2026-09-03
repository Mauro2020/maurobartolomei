import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { BRAND_NAME } from "@/lib/brand";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${BRAND_NAME} | Smart Home, Energia e Sistemi Intelligenti`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Bartolomei Systems progetta architetture Home Assistant, elettronica ESP32 personalizzata, intelligenza energetica e sistemi intelligenti per la casa.",
  keywords: [
    "Home Assistant consultant",
    "home automation",
    "ESP32 hardware",
    "smart energy management",
    "JetGrid",
    "photovoltaic monitoring",
  ],
  openGraph: {
    title: BRAND_NAME,
    description:
      "Smart home infrastructure, elettronica personalizzata, intelligenza energetica e visione tecnologica orientata al futuro.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="font-[var(--font-body)]">
        <div className="min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
