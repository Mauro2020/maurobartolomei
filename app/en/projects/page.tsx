import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { locales } from "@/lib/i18n";

const content = locales.en.projects;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  robots: { index: false, follow: false },
};

export default function ProjectsPageEn() {
  return (
    <>
      <PageHero {...content.hero} />
      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="glass-panel tech-border max-w-3xl rounded-3xl p-7 sm:p-9">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan">Archive in preparation</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Only real projects, when they are ready.</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/70">
              The future selection will present documented cases without sensitive data, explaining the problem, technical architecture, and outcome. You can contact us now to discuss your project.
            </p>
            <Link href="/en/contact" className="button-primary mt-7">Discuss your project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
