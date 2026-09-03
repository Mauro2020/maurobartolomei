import type { Metadata } from "next";

import { FeatureList } from "@/components/feature-list";
import { PageHero } from "@/components/page-hero";
import { ABEDOME_URL } from "@/lib/brand";
import { locales } from "@/lib/i18n";

const content = locales.en.homeAutomation;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
};

export default function HomeAutomationPageEn() {
  return (
    <>
      <PageHero {...content.hero} />
      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="glass-panel tech-border rounded-3xl p-8">
              <h2 className="text-3xl font-semibold text-white">{content.heading}</h2>
              <p className="mt-4 text-lg leading-8 text-white/70">{content.body}</p>
            </div>
            <FeatureList items={content.features} />
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-cyan/15 bg-white/[0.025] p-6 sm:p-8">
            <p className="max-w-4xl text-base leading-8 text-white/75">{content.context}</p>
            <a
              href={ABEDOME_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex font-medium text-cyan transition hover:text-white"
            >
              Discover ABEDOME ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
