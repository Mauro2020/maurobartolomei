import type { Metadata } from "next";
import { Camera, DoorOpen, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { locales } from "@/lib/i18n";

const content = locales.it.services;
const services = locales.it.shared.services;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero {...content.hero} />

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Sicurezza Integrata"
            title="Sicurezza intelligente"
            description="La sicurezza non viene trattata come un insieme di dispositivi separati, ma come un’architettura integrata nella smart home: video, accessi, notifiche ed automazioni coordinati in modo coerente."
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-base leading-8 text-white/75">
              L’obiettivo è costruire un sistema di sicurezza domestica capace di leggere eventi,
              verificare contesti e attivare risposte intelligenti. In questo scenario, telecamere
              IP, videocitofonia, controllo accessi e piattaforme professionali come Dahua entrano
              in un ecosistema più ampio, coordinato da un livello di controllo locale.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <article className="surface-panel rounded-[1.75rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/15 bg-cyan/10 text-cyan">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">Videosorveglianza IP</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Telecamere IP e sistemi professionali, incluse soluzioni Dahua, vengono integrati
                come parte dell’infrastruttura di sicurezza, con eventi video e verifiche contestuali
                collegati al resto della casa.
              </p>
            </article>

            <article className="surface-panel rounded-[1.75rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/15 bg-cyan/10 text-cyan">
                <DoorOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">Videocitofonia e controllo accessi</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Videocitofoni, cancelli, portoni e varchi di accesso possono essere integrati nel
                sistema smart home per gestire ingressi, notifiche, verifica presenza e logiche di
                apertura in modo più coerente.
              </p>
            </article>

            <article className="surface-panel rounded-[1.75rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/15 bg-cyan/10 text-cyan">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">Automazioni e flussi di sicurezza</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Il livello di controllo coordina notifiche, presenza, allarmi, luci, chiusure e
                scenari di sicurezza, trasformando gli eventi in azioni intelligenti e verificabili.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-cyan">Scenari applicativi</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">
                <h4 className="text-lg font-semibold text-white">Scenario ingresso non previsto</h4>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Se il videocitofono rileva un evento fuori fascia oraria o in assenza dei
                  residenti, il sistema di controllo può inviare una notifica con snapshot, attivare luci
                  esterne e registrare l’evento come anomalia di sicurezza.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">
                <h4 className="text-lg font-semibold text-white">Perimetro e presenza coordinati</h4>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Se una telecamera IP rileva movimento mentre la casa è in modalità assente, il
                  sistema può verificare stato accessi, attivare una sequenza di deterrenza e
                  notificare il proprietario solo quando il contesto lo richiede davvero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
