import type { Metadata } from "next";

import { FeatureList } from "@/components/feature-list";
import { PageHero } from "@/components/page-hero";
import { locales } from "@/lib/i18n";

const content = locales.it.homeAutomation;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
};

export default function HomeAutomationPage() {
  return (
    <>
      <PageHero {...content.hero} />

      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="glass-panel tech-border rounded-3xl p-8">
            <h2 className="text-3xl font-semibold text-white">{content.heading}</h2>
            <p className="mt-4 text-lg leading-8 text-white/70">{content.body}</p>
          </div>
          <FeatureList items={content.features} />
        </div>
      </section>
    </>
  );
}
