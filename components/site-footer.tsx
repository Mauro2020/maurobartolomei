"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ADDRESS_DISPLAY, BRAND_NAME, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_URL } from "@/lib/brand";
import { getLocaleFromPath, getLocalizedPath, locales } from "@/lib/i18n";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const content = locales[locale];

  return (
    <footer className="relative border-t border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
      <div className="container-shell py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.7fr_0.8fr]">
          <div className="max-w-xl">
            <p className="section-label">{content.footer.eyebrow}</p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.24em] text-white/55">{BRAND_NAME}</p>
            <h2 className="mt-5 max-w-lg text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              {content.footer.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-white/70">{content.footer.description}</p>
            <Link href={getLocalizedPath(locale, "/contact")} className="button-primary mt-8">
              {content.footer.cta}
            </Link>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">{content.footer.navTitle}</p>
            <div className="mt-5 grid gap-3">
              {content.nav.items.slice(0, 7).map((item) => (
                <Link
                  key={item.href}
                  href={getLocalizedPath(locale, item.href)}
                  className="text-sm text-white/70 transition hover:text-cyan"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">{content.footer.contactTitle}</p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-white/70">
              <p>{BRAND_NAME}</p>
              <p>{ADDRESS_DISPLAY}</p>
              <p>
                <a href={PHONE_LINK} className="transition hover:text-cyan">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <a href={WHATSAPP_URL} className="transition hover:text-cyan">
                  WhatsApp
                </a>
              </p>
              <p>{content.footer.description}</p>
              <p>{locale === "it" ? "Consulenza, progettazione e architettura di sistema per smart home, energia e sicurezza integrata." : "Consulting, design, and system architecture across smart homes, energy, and integrated security."}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
