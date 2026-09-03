import { ADDRESS_DISPLAY, BRAND_NAME, PHONE_DISPLAY, PHONE_LINK, QR_CODE_URL, WHATSAPP_URL } from "@/lib/brand";

type ContactIdentityProps = {
  locale: "it" | "en";
};

export function ContactIdentity({ locale }: ContactIdentityProps) {
  const isItalian = locale === "it";

  return (
    <div className="glass-panel tech-border rounded-3xl p-8">
      <p className="section-label">{isItalian ? "Contatto Diretto" : "Direct Contact"}</p>
      <h2 className="mt-5 text-3xl font-semibold text-white">
        {isItalian ? "Bartolomei Systems" : BRAND_NAME}
      </h2>
      <p className="mt-4 max-w-xl text-white/70">
        {isItalian
          ? "Bartolomei Systems progetta infrastrutture intelligenti per la casa, integrando automazione, energia, sicurezza ed elettronica su misura."
          : "Consulting, design, and system architecture for smart homes, energy intelligence, and integrated security."}
      </p>

      <div className="mt-8 grid gap-3 text-white/75">
        <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{ADDRESS_DISPLAY}</p>
        <a href={PHONE_LINK} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan/20 hover:text-cyan">
          {PHONE_DISPLAY}
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a href={WHATSAPP_URL} className="button-primary">
          {isItalian ? "Scrivi su WhatsApp" : "Contact on WhatsApp"}
        </a>
        <a href={PHONE_LINK} className="button-secondary">
          {isItalian ? "Chiama ora" : "Call now"}
        </a>
      </div>

      <div className="mt-8 inline-flex flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4">
        {/* The QR service returns a generated remote image that is intentionally not proxied by Next.js. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={QR_CODE_URL}
          alt={isItalian ? "QR code WhatsApp Bartolomei Systems" : "Bartolomei Systems WhatsApp QR code"}
          className="h-32 w-32 rounded-2xl bg-white p-2 sm:h-36 sm:w-36"
        />
        <p className="mt-3 max-w-[11rem] text-xs uppercase tracking-[0.22em] text-white/45">
          {isItalian ? "Scansiona per contattare Bartolomei Systems su WhatsApp" : "Scan to contact on WhatsApp"}
        </p>
      </div>
    </div>
  );
}
