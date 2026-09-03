import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { ContactIdentity } from "@/components/contact-identity";
import { PageHero } from "@/components/page-hero";
import { locales } from "@/lib/i18n";

const content = locales.en.contact;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
};

export default function ContactPageEn() {
  return (
    <>
      <PageHero {...content.hero} />
      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-8">
            <div className="glass-panel tech-border rounded-3xl p-8">
              <h2 className="text-3xl font-semibold text-white">{content.categoriesTitle}</h2>
              <div className="mt-6 grid gap-3 text-white/70">
                {content.categories.map((category) => (
                  <p key={category} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {category}
                  </p>
                ))}
              </div>
            </div>

            <ContactIdentity locale="en" />
          </div>

          <ContactForm content={content} locale="en" />
        </div>
      </section>
    </>
  );
}
