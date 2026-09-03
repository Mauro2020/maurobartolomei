import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { locales } from "@/lib/i18n";

const content = locales.it.blog;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  robots: { index: false, follow: false },
};

export default function BlogPage() {
  return (
    <>
      <PageHero {...content.hero} />

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="glass-panel tech-border max-w-3xl rounded-3xl p-7 sm:p-9">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan">Area in preparazione</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Nessun articolo provvisorio.</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/70">
              Quando questa sezione sarà pronta raccoglierà contenuti tecnici originali, verificati e utili. Nel frattempo puoi contattarci per approfondire un’esigenza concreta.
            </p>
            <Link href="/contact" className="button-primary mt-7">Contatta lo studio</Link>
          </div>
        </div>
      </section>
    </>
  );
}
