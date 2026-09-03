import type { Metadata } from "next";

import { FeatureList } from "@/components/feature-list";
import { SectionHeading } from "@/components/section-heading";

const pageContent = {
  seo: {
    title: "Visione JetGrid",
    description:
      "JetGrid rappresenta l'estensione futura del lavoro di Bartolomei Systems: dalla smart home a infrastrutture intelligenti distribuite, connesse e coordinate.",
  },
  hero: {
    eyebrow: "Visione JetGrid",
    title: "La tua casa è solo l'inizio.",
    description:
      "Con JetGrid, ogni sistema progettato può evolvere in una rete intelligente distribuita, dove edifici, energia e dispositivi collaborano in modo più ampio.",
    support:
      "Dalla smart home all'infrastruttura: un'evoluzione naturale dei sistemi che già progettiamo.",
    cta: "Scopri la visione JetGrid",
  },
  nodeSection: {
    eyebrow: "Nodo Intelligente",
    title: "Ogni casa può diventare un nodo",
    description:
      "I sistemi progettati oggi non servono solo ad automatizzare localmente la casa. Se costruiti con una buona architettura, possono diventare la base di una rete più ampia, capace di coordinare dati, energia e decisioni distribuite.",
    blocks: [
      {
        title: "Elaborazione distribuita",
        body:
          "Le decisioni non devono risiedere in un solo punto: più nodi possono leggere contesto, reagire localmente e contribuire a un comportamento di sistema più ampio.",
      },
      {
        title: "Energia e dati coordinati",
        body:
          "Produzione, consumi, accumulo e segnali operativi acquistano più valore quando vengono letti come parti di una stessa infrastruttura intelligente.",
      },
      {
        title: "Edifici e dispositivi interconnessi",
        body:
          "La logica di integrazione può estendersi oltre la singola abitazione, con edifici e dispositivi che condividono stato, priorità e capacità operative.",
      },
      {
        title: "Evoluzione continua del sistema",
        body:
          "Un'architettura modulare permette al sistema di crescere nel tempo senza perdere leggibilità, coerenza tecnica e qualità d'uso.",
      },
    ],
  },
  strategySection: {
    heading: "JetGrid è l'evoluzione naturale della smart home.",
    body:
      "Non un progetto separato, ma la continuazione logica di ciò che Bartolomei Systems progetta già oggi: un'infrastruttura distribuita in cui edifici, energia e dispositivi collaborano tra loro. La smart home diventa così il primo livello di un sistema più esteso, connesso e consapevole.",
    features: [
      "Controllo locale come base di affidabilità",
      "Architetture modulari pronte a crescere nel tempo",
      "Coordinamento tra energia, automazione e dati di sistema",
      "Dispositivi e nodi capaci di collaborare in rete",
      "Una direzione tecnica coerente tra presente e futuro",
      "Un ponte naturale tra casa intelligente e infrastruttura distribuita",
    ],
  },
  whyNow: {
    eyebrow: "Perché Conta Ora",
    title: "Perché conta già oggi",
    description:
      "JetGrid non è una visione da rimandare. Conta adesso, perché le scelte progettuali fatte oggi determinano quanto un sistema resterà aperto, leggibile e pronto a evolvere domani.",
    points: [
      "I sistemi progettati con una buona struttura sono più solidi e più pronti al futuro.",
      "Controllo locale e architettura modulare sono già oggi la base corretta.",
      "Energia, automazione e dispositivi connessi stanno già convergendo nello stesso spazio tecnico.",
      "La casa può diventare il primo nodo intelligente di una rete più ampia.",
    ],
  },
  boundary: {
    eyebrow: "Presente E Direzione",
    title: "Oggi sistemi intelligenti per la casa. Domani infrastrutture più ampie.",
    description:
      "Bartolomei Systems progetta oggi sistemi intelligenti per la casa. JetGrid rappresenta la direzione futura in cui questi sistemi possono evolvere.",
    currentTitle: "Cosa facciamo oggi",
    currentBody:
      "Architetture Home Assistant, elettronica ESP32 su misura, energia intelligente, sicurezza integrata e controllo locale costruiti per casi reali.",
    futureTitle: "Dove porta questa visione",
    futureBody:
      "Una rete di sistemi coordinati in cui edifici, energia, dati e dispositivi non restano isolati, ma diventano parti di una stessa infrastruttura distribuita.",
  },
};

export const metadata: Metadata = {
  title: pageContent.seo.title,
  description: pageContent.seo.description,
};

export default function JetGridVisionPage() {
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
                <a href="#visione-jetgrid" className="button-primary">
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

      <section id="visione-jetgrid" className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="glass-panel tech-border rounded-3xl p-8">
            <p className="section-label">Direzione Strategica</p>
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
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan">Presente</p>
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
