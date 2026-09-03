import type { Metadata } from "next";

import { FeatureList } from "@/components/feature-list";
import { SectionHeading } from "@/components/section-heading";

const pageContent = {
  seo: {
    title: "JetGrid Vision",
    description:
      "JetGrid is the future-facing extension of Bartolomei Systems: from intelligent homes to distributed infrastructure where buildings, energy, and devices collaborate.",
  },
  hero: {
    eyebrow: "JetGrid Vision",
    title: "The home is only the beginning.",
    description:
      "With JetGrid, every system designed today can evolve into a distributed intelligent network, where buildings, energy, and devices collaborate at a broader level.",
    support:
      "From smart home to infrastructure: a natural evolution of the systems already being designed.",
    cta: "Explore the JetGrid vision",
  },
  nodeSection: {
    eyebrow: "Intelligent Node",
    title: "Every home can become a node",
    description:
      "The systems designed today are not only for local automation. When they are built with the right architecture, they can become the foundation of a wider distributed network able to coordinate data, energy, and decisions.",
    blocks: [
      {
        title: "Distributed processing",
        body:
          "System intelligence does not need to live in one place only. Multiple nodes can read context, react locally, and contribute to a wider coordinated behavior.",
      },
      {
        title: "Energy and data working together",
        body:
          "Production, consumption, storage, and operational signals become more valuable when they are interpreted as parts of one intelligent infrastructure.",
      },
      {
        title: "Connected buildings and devices",
        body:
          "Integration logic can extend beyond one residence, allowing buildings and devices to share status, priorities, and operational capabilities.",
      },
      {
        title: "Continuous system evolution",
        body:
          "A modular architecture allows the system to grow over time without losing clarity, technical coherence, or experience quality.",
      },
    ],
  },
  strategySection: {
    heading: "JetGrid is the natural evolution of the smart home.",
    body:
      "Not a separate pitch, but the logical continuation of what Bartolomei Systems already designs today: a distributed infrastructure where buildings, energy, and devices collaborate. In this view, the home becomes the first layer of a wider connected system.",
    features: [
      "Local control as the base layer of reliability",
      "Modular architectures designed to evolve over time",
      "Energy, automation, and system data working together",
      "Devices and nodes able to cooperate across a network",
      "A coherent technical direction from present systems to future infrastructure",
      "A natural bridge between intelligent homes and distributed infrastructure",
    ],
  },
  whyNow: {
    eyebrow: "Why It Matters Now",
    title: "Why it already matters today",
    description:
      "JetGrid is not a vision to postpone. It matters now, because the architectural choices made today determine how open, readable, and future-ready a system will remain tomorrow.",
    points: [
      "Well-structured systems are more durable and more future-ready.",
      "Local control and modular architecture are already the right foundation.",
      "Energy, automation, and connected devices are already converging.",
      "The home can become the first intelligent node of a wider network.",
    ],
  },
  boundary: {
    eyebrow: "Present And Direction",
    title: "Intelligent homes today. Broader infrastructure tomorrow.",
    description:
      "Bartolomei Systems designs intelligent residential systems today. JetGrid represents the broader direction those systems can evolve toward.",
    currentTitle: "What the studio designs today",
    currentBody:
      "Home Assistant architectures, custom ESP32 electronics, energy intelligence, integrated security, and local control built for real-world residential systems.",
    futureTitle: "What this direction points toward",
    futureBody:
      "A coordinated infrastructure where buildings, energy, data, and devices no longer remain isolated systems, but become parts of one distributed intelligence layer.",
  },
};

export const metadata: Metadata = {
  title: pageContent.seo.title,
  description: pageContent.seo.description,
};

export default function JetGridVisionPageEn() {
  return (
    <>
      <section className="section-space overflow-hidden">
        <div className="container-shell">
          <div className="surface-panel tech-border relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
            <div className="hero-grid absolute inset-0 opacity-25" />
            <div className="absolute -right-12 top-8 h-56 w-56 rounded-full bg-cyan/14 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-blue-500/8 blur-3xl" />

            <div className="relative max-w-4xl">
              <p className="section-label">{pageContent.hero.eyebrow}</p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                {pageContent.hero.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{pageContent.hero.description}</p>
              <p className="mt-5 max-w-3xl text-sm uppercase tracking-[0.24em] text-white/45">
                {pageContent.hero.support}
              </p>
              <div className="mt-8">
                <a href="#jetgrid-vision" className="button-primary">
                  {pageContent.hero.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            eyebrow={pageContent.nodeSection.eyebrow}
            title={pageContent.nodeSection.title}
            description={pageContent.nodeSection.description}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pageContent.nodeSection.blocks.map((block, index) => (
              <article key={block.title} className="surface-panel card-hover flex h-full flex-col rounded-[1.75rem] p-7">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-white">{block.title}</h2>
                <p className="mt-4 leading-8 text-white/70">{block.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="jetgrid-vision" className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="glass-panel tech-border rounded-3xl p-8">
            <p className="section-label">Strategic Direction</p>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
              {pageContent.strategySection.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{pageContent.strategySection.body}</p>
          </div>
          <FeatureList items={pageContent.strategySection.features} />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            eyebrow={pageContent.whyNow.eyebrow}
            title={pageContent.whyNow.title}
            description={pageContent.whyNow.description}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {pageContent.whyNow.points.map((point) => (
              <article key={point} className="surface-subtle rounded-[1.6rem] p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan shadow-[0_0_14px_rgba(52,217,255,0.8)]" />
                  <p className="leading-8 text-white/75">{point}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="final-cta-shell">
            <p className="section-label">{pageContent.boundary.eyebrow}</p>
            <h2 className="section-title mt-5 max-w-3xl">{pageContent.boundary.title}</h2>
            <p className="section-copy mt-6 max-w-2xl">{pageContent.boundary.description}</p>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article className="surface-subtle rounded-[1.7rem] p-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan">Today</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                  {pageContent.boundary.currentTitle}
                </h3>
                <p className="mt-4 leading-8 text-white/70">{pageContent.boundary.currentBody}</p>
              </article>
              <article className="surface-subtle rounded-[1.7rem] p-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan">JetGrid</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                  {pageContent.boundary.futureTitle}
                </h3>
                <p className="mt-4 leading-8 text-white/70">{pageContent.boundary.futureBody}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
