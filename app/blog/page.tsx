import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { locales } from "@/lib/i18n";

const content = locales.it.blog;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
};

export default function BlogPage() {
  return (
    <>
      <PageHero {...content.hero} />

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {content.posts.map((post) => (
            <article key={post.title} className="glass-panel tech-border rounded-3xl p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan">{content.articleLabel}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-4 leading-7 text-white/70">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
