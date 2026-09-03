"use client";

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BRAND_MARK, BRAND_NAME } from "@/lib/brand";
import { getLocaleFromPath, getLocalizedPath, locales, stripLocalePrefix } from "@/lib/i18n";

export function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const basePath = stripLocalePrefix(pathname);
  const content = locales[locale];
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(7,16,29,0.72)] backdrop-blur-2xl">
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-5">
          <Link
            href={getLocalizedPath(locale, "/")}
            className="group flex items-center gap-4 rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 transition hover:border-cyan/20 hover:bg-white/[0.045]"
          >
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-cyan/15 bg-[linear-gradient(180deg,rgba(52,217,255,0.14),rgba(255,255,255,0.04))] text-sm font-semibold text-white">
              <span className="relative z-10 tracking-[0.18em]">{BRAND_MARK}</span>
              <div className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-cyan/20" />
            </div>
            <div>
              <p className="font-semibold tracking-[0.22em] text-white">{BRAND_NAME.toUpperCase()}</p>
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/50">
                {locale === "it" ? "Studio di infrastrutture intelligenti" : "Smart Systems Studio"}
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-3 xl:flex">
            <nav className="flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1.5">
              {content.nav.items.map((item) => {
                const localizedHref = getLocalizedPath(locale, item.href);

                return (
                  <Link
                    key={item.href}
                    href={localizedHref}
                    className={clsx(
                      "rounded-full px-4 py-2 text-sm transition",
                      pathname === localizedHref
                        ? "bg-white text-black shadow-[0_8px_20px_rgba(255,255,255,0.08)]"
                        : "text-white/70 hover:bg-white/[0.05] hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center rounded-full border border-white/8 bg-white/[0.03] p-1.5">
              <Link
                href={getLocalizedPath("it", basePath)}
                className={clsx(
                  "rounded-full px-3 py-2 text-xs font-medium tracking-[0.18em] transition",
                  locale === "it" ? "bg-cyan text-black" : "text-white/70 hover:text-white",
                )}
              >
                IT
              </Link>
              <Link
                href={getLocalizedPath("en", basePath)}
                className={clsx(
                  "rounded-full px-3 py-2 text-xs font-medium tracking-[0.18em] transition",
                  locale === "en" ? "bg-cyan text-black" : "text-white/70 hover:text-white",
                )}
              >
                EN
              </Link>
            </div>
          </div>

          <button
            type="button"
            aria-label={open ? (locale === "it" ? "Chiudi menu" : "Close menu") : locale === "it" ? "Apri menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-white transition hover:border-cyan/20 hover:text-cyan xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={clsx(
            "overflow-hidden transition-[max-height,opacity,margin] duration-300 xl:hidden",
            open ? "mt-4 max-h-[720px] opacity-100" : "mt-0 max-h-0 opacity-0",
          )}
        >
          <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-4">
            <nav className="grid gap-2">
              {content.nav.items.map((item) => {
                const localizedHref = getLocalizedPath(locale, item.href);

                return (
                  <Link
                    key={item.href}
                    href={localizedHref}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "rounded-2xl px-4 py-3 text-sm transition",
                      pathname === localizedHref
                        ? "bg-white text-black"
                        : "text-white/70 hover:bg-white/[0.05] hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/8 bg-black/10 p-2">
              <span className="px-3 text-[11px] uppercase tracking-[0.28em] text-white/50">
                {content.nav.languageLabel}
              </span>
              <div className="flex items-center gap-1">
                <Link
                  href={getLocalizedPath("it", basePath)}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "rounded-full px-3 py-2 text-xs font-medium tracking-[0.18em] transition",
                    locale === "it" ? "bg-cyan text-black" : "text-white/70 hover:text-white",
                  )}
                >
                  IT
                </Link>
                <Link
                  href={getLocalizedPath("en", basePath)}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "rounded-full px-3 py-2 text-xs font-medium tracking-[0.18em] transition",
                    locale === "en" ? "bg-cyan text-black" : "text-white/70 hover:text-white",
                  )}
                >
                  EN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
