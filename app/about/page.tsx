import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { locales } from "@/lib/i18n";

const content = locales.it.about;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero {...content.hero} />

      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel tech-border rounded-3xl p-8">
            <SectionHeading
              eyebrow={content.profileEyebrow}
              title={content.profileTitle}
              description={content.profileDescription}
            />
          </div>
          <div className="grid gap-4">
            {content.metrics.map((metric) => (
              <div key={metric.label} className="glass-panel rounded-3xl p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-white/70">{metric.label}</p>
                <p className="mt-3 text-xl font-semibold text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
