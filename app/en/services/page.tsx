import type { Metadata } from "next";
import { Camera, DoorOpen, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { locales } from "@/lib/i18n";

const content = locales.en.services;
const services = locales.en.shared.services;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
};

export default function ServicesPageEn() {
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
            eyebrow="Integrated Security"
            title="Intelligent security"
            description="Security is approached as an integrated smart-home architecture rather than a disconnected set of devices: video, access control, notifications, and automations designed to work as one system."
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-base leading-8 text-white/75">
              The goal is to design a residential security system that can interpret events, verify
              context, and trigger intelligent responses. In this model, IP cameras, video
              doorbells, access control, and professional platforms such as Dahua become part of a
              broader ecosystem orchestrated through Home Assistant.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <article className="surface-panel rounded-[1.75rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/15 bg-cyan/10 text-cyan">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">IP surveillance</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                IP cameras and professional systems, including Dahua solutions, are designed as part
                of the security infrastructure, with video events and verification logic connected to
                the rest of the home.
              </p>
            </article>

            <article className="surface-panel rounded-[1.75rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/15 bg-cyan/10 text-cyan">
                <DoorOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">Video doorbells and access control</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Video doorbells, gates, entry points, and access logic can be integrated into the
                smart-home system to manage entry, notifications, presence verification, and opening
                workflows in a coherent way.
              </p>
            </article>

            <article className="surface-panel rounded-[1.75rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/15 bg-cyan/10 text-cyan">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">Security automations with Home Assistant</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Home Assistant coordinates notifications, presence states, alarms, lighting, closures,
                and security scenarios, turning events into intelligent and verifiable actions.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-cyan">Real-world examples</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">
                <h4 className="text-lg font-semibold text-white">Unexpected entry scenario</h4>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  If the video doorbell detects activity outside expected time windows or while the
                  residents are away, Home Assistant can send a snapshot notification, trigger
                  exterior lighting, and log the event as a security anomaly.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">
                <h4 className="text-lg font-semibold text-white">Perimeter and presence coordination</h4>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  If an IP camera detects movement while the house is in away mode, the system can
                  verify access status, trigger a deterrence sequence, and notify the homeowner only
                  when the context genuinely requires it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
