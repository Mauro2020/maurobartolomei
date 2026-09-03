"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { getLocaleFromPath, getLocalizedPath, type AppPath } from "@/lib/i18n";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: AppPath };
  secondaryCta?: { label: string; href: AppPath };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  return (
    <section className="section-space overflow-hidden">
      <div className="container-shell">
        <div className="surface-panel tech-border relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="hero-grid absolute inset-0 opacity-25" />
          <div className="absolute -right-12 top-8 h-56 w-56 rounded-full bg-cyan/14 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-blue-500/8 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="section-label">{eyebrow}</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{description}</p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {primaryCta ? (
                  <Link
                    href={getLocalizedPath(locale, primaryCta.href)}
                    className="button-primary"
                  >
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
                {secondaryCta ? (
                  <Link
                    href={getLocalizedPath(locale, secondaryCta.href)}
                    className="button-secondary"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
