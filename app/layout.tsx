import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import type { ReactNode } from "react";

import { BRAND_NAME, SITE_URL } from "@/lib/brand";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} | Smart Home, Energia e Sistemi Intelligenti`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Bartolomei Systems progetta architetture Home Assistant, integrazioni locali, elettronica ESP32, reti, sicurezza e sistemi energetici evoluti.",
  keywords: [
    "Home Assistant consultant",
    "home automation",
    "ESP32 hardware",
    "smart energy management",
    "ABEDOME",
    "JetGrid",
    "photovoltaic monitoring",
  ],
  openGraph: {
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: BRAND_NAME,
    description:
      "Smart home infrastructure, elettronica personalizzata, intelligenza energetica e visione tecnologica orientata al futuro.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-bartolomei-locale") === "en" ? "en" : "it";

  return (
    <html lang={locale} className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="font-[var(--font-body)]">
        <Script
          id="umami-analytics"
          src="https://analytics.casaos.it/script.js"
          data-website-id="dcfb642a-1f2d-4ef9-8acb-76d0b5786a4d"
          data-domains="bartolomeisystems.com"
          strategy="afterInteractive"
        />
        <div className="min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
