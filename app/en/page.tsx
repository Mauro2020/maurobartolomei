import type { Metadata } from "next";

import { HomePage } from "@/components/home-page";
import { locales } from "@/lib/i18n";

const content = locales.en.home;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
};

export default function EnglishPage() {
  return <HomePage locale="en" />;
}
