import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  ChevronDown,
  ChevronRight,
  Cpu,
  House,
  LayoutDashboard,
  ShieldCheck,
  type LucideIcon,
  SunMedium,
  Zap,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ABEDOME_CHECKUP_URL, ABEDOME_URL } from "@/lib/brand";
import { getLocalizedPath, locales, type AppPath, type Locale } from "@/lib/i18n";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const content = locales[locale].home;
  const shared = locales[locale].shared;
  const isItalian = locale === "it";
  type DeepSection = {
    eyebrow: string;
    title: string;
    description: string;
    features: string[];
    href: AppPath;
    cta: string;
    icon: LucideIcon;
  };

  const valueProps = isItalian
    ? [
        {
          title: "Architettura prima della piattaforma",
          description:
            "Controllo locale, dati, reti e integrazioni vengono progettati come un sistema stabile prima di scegliere i singoli strumenti.",
        },
        {
          title: "ESP32 dove il mercato standard non arriva",
          description:
            "Sensori, moduli e interfacce su misura per risolvere esigenze fisiche, elettriche o logiche specifiche della casa.",
        },
        {
          title: "Energia letta e automatizzata con criterio",
          description:
            "Fotovoltaico, batterie, EV e carichi coordinati per migliorare controllo, efficienza e qualità dell’esperienza domestica.",
        },
      ]
    : [
        {
          title: "Architecture before platforms",
          description:
            "Local control, data, networks, and integrations are designed as a stable system before individual tools are selected.",
        },
        {
          title: "ESP32 where standard products fall short",
          description:
            "Custom sensors, modules, and interfaces designed around the physical, electrical, or logical requirements of the project.",
        },
        {
          title: "Energy systems monitored and automated with intent",
          description:
            "Photovoltaics, batteries, EV charging, and loads coordinated to improve visibility, efficiency, and day-to-day system quality.",
        },
      ];

  const deepSections: DeepSection[] = isItalian
    ? [
        {
          eyebrow: "Architettura di sistema",
          title: "Un sistema affidabile nasce dall’architettura, non dalla piattaforma.",
          description:
            "Controllo locale, rete, dati, integrazioni e interfacce vengono progettati prima della scelta dei singoli componenti. Home Assistant è uno degli strumenti disponibili quando risponde davvero al contesto.",
          features: [
            "Architettura locale, flussi dei dati e priorità operative",
            "Integrazioni affidabili tra impianti, dispositivi e interfacce",
            "Automazioni evolute per comfort, energia e sicurezza",
          ],
          href: "/home-automation",
          cta: "Approfondisci domotica e integrazioni",
          icon: House,
        },
        {
          eyebrow: "ESP32",
          title: "Quando serve precisione tecnica, l’hardware viene costruito su misura.",
          description:
            "ESP32 permette di realizzare elettronica dedicata per sensori, controlli, relè e interfacce speciali, integrata nei sistemi esistenti in modo pulito e professionale.",
          features: [
            "Schede e moduli per esigenze installative specifiche",
            "Sensori personalizzati, IO dedicati e logiche locali",
            "Interfacciamento con sistemi esistenti e reti locali",
          ],
          href: "/custom-electronics",
          cta: "Scopri l’elettronica personalizzata",
          icon: Cpu,
        },
        {
          eyebrow: "Intelligenza Energetica",
          title: "I dati energetici hanno valore solo quando guidano decisioni e automazioni.",
          description:
            "Produzione fotovoltaica, consumi, accumulo e ricarica EV diventano una vera infrastruttura intelligente quando vengono letti, visualizzati e orchestrati come un unico sistema.",
          features: [
            "Monitoraggio energia e KPI in dashboard dedicate",
            "Automazioni per fotovoltaico, batterie e priorità dei carichi",
            "Logiche di ricarica EV basate sulla disponibilità reale",
          ],
          href: "/energy-management",
          cta: "Approfondisci la gestione energia",
          icon: SunMedium,
        },
        {
          eyebrow: "Reti e sicurezza",
          title: "Affidabilità e sicurezza dipendono anche dall’infrastruttura che non si vede.",
          description:
            "Segmentazione di rete, continuità dei servizi, accessi e flussi di sicurezza vengono coordinati con la stessa attenzione riservata alle automazioni e alle interfacce.",
          features: [
            "Reti locali progettate per stabilità e manutenzione",
            "Integrazione tra accessi, allarmi, videocontrollo e notifiche",
            "Separazione dei servizi e continuità operativa",
          ],
          href: "/services",
          cta: "Esplora i servizi tecnici",
          icon: ShieldCheck,
        },
      ]
    : [
        {
          eyebrow: "System Architecture",
          title: "A dependable system starts with architecture, not a platform.",
          description:
            "Local control, networking, data, integrations, and interfaces are designed before individual components are chosen. Home Assistant is one of the available tools when it fits the context.",
          features: [
            "Local architecture, data flows, and operational priorities",
            "Dependable integration across plants, devices, and interfaces",
            "Advanced automation for comfort, energy, and security",
          ],
          href: "/home-automation",
          cta: "Explore automation and integrations",
          icon: House,
        },
        {
          eyebrow: "ESP32 Custom",
          title: "When technical precision matters, the hardware is built around the project.",
          description:
            "ESP32 makes it possible to create dedicated electronics for sensing, control, relays, and special interfaces, integrated cleanly into existing systems.",
          features: [
            "Boards and modules for exact installation constraints",
            "Custom sensors, dedicated IO, and edge logic",
            "Integration with existing systems and local networks",
          ],
          href: "/custom-electronics",
          cta: "See custom electronics",
          icon: Cpu,
        },
        {
          eyebrow: "Energy Intelligence",
          title: "Energy data becomes valuable when it drives decisions and automation.",
          description:
            "Photovoltaic production, consumption, storage, and EV charging become a real intelligent infrastructure when they are monitored, visualized, and orchestrated as one system.",
          features: [
            "Energy monitoring and KPIs in dedicated dashboards",
            "Automation for solar, batteries, and load priorities",
            "EV charging logic based on real-time availability",
          ],
          href: "/energy-management",
          cta: "Explore energy intelligence",
          icon: SunMedium,
        },
        {
          eyebrow: "Networks and Security",
          title: "Reliability and security also depend on the infrastructure users never see.",
          description:
            "Network segmentation, service continuity, access control, and security flows are coordinated with the same care applied to automation and interfaces.",
          features: [
            "Local networks designed for stability and maintenance",
            "Integration across access, alarms, video, and notifications",
            "Service separation and operational continuity",
          ],
          href: "/services",
          cta: "Explore technical services",
          icon: ShieldCheck,
        },
      ];

  const heroStats = isItalian
    ? [
        { label: "Architettura", value: "Controllo locale / dati / integrazioni" },
        { label: "Hardware", value: "ESP32 personalizzato / sensori / interfacce" },
        { label: "Sistemi", value: "Energia / reti / sicurezza / automazioni" },
      ]
    : [
        { label: "Architecture", value: "Local control / data / integrations" },
        { label: "Hardware", value: "Custom ESP32 / sensors / interfaces" },
        { label: "Systems", value: "Energy / networks / security / automation" },
      ];

  const servicePreview = shared.services.slice(0, 5);
  const architectureLayers = isItalian
    ? [
        {
          title: "Interfacce utente",
          text: "App, dashboard e notifiche",
        },
        {
          title: "Automazioni intelligenti",
          text: "Presenza, scenari, ottimizzazione",
        },
        {
          title: "Controllo e integrazione",
          text: "Orchestrazione locale e interoperabilità",
        },
        {
          title: "Elettronica personalizzata",
          text: "ESP32, moduli dedicati, sensori personalizzati",
        },
        {
          title: "Sensori e dispositivi",
          text: "Luci, accessi, clima, sicurezza",
        },
        {
          title: "Sistema energetico",
          text: "Fotovoltaico, batterie, ricarica EV",
        },
        {
          title: "Visione futura",
          text: "JetGrid",
        },
      ]
    : [
        {
          title: "User interfaces",
          text: "Apps, dashboards, notifications",
        },
        {
          title: "Intelligent automations",
          text: "Presence, scenarios, optimization",
        },
        {
          title: "Control and integration",
          text: "Local orchestration and interoperability",
        },
        {
          title: "Custom electronics",
          text: "ESP32, dedicated modules, custom sensors",
        },
        {
          title: "Sensors and devices",
          text: "Lighting, access, climate, security",
        },
        {
          title: "Energy system",
          text: "Photovoltaics, batteries, EV charging",
        },
        {
          title: "Future vision",
          text: "JetGrid",
        },
      ];
  const intelligentSystemBlocks = isItalian
    ? [
        {
          eyebrow: "01",
          title: "Sensori e dati",
          text: "La smart home inizia dalla lettura dell’ambiente: temperatura, presenza, umidità, consumi, stati dei dispositivi e segnali provenienti dagli impianti diventano dati utili e leggibili.",
          icon: House,
        },
        {
          eyebrow: "02",
          title: "Orchestrazione locale",
          text: "Il livello di controllo coordina integrazioni, regole, scenari e interfacce in un’architettura locale, leggibile e affidabile.",
          icon: LayoutDashboard,
        },
        {
          eyebrow: "03",
          title: "Elettronica su misura",
          text: "L’hardware ESP32 personalizzato permette di costruire sensori, moduli e interfacce dedicate quando serve una precisione che i dispositivi standard non offrono.",
          icon: Cpu,
        },
        {
          eyebrow: "04",
          title: "Energia intelligente",
          text: "Fotovoltaico, batterie, ricarica EV e ottimizzazione dei carichi vengono integrati come un sistema energetico connesso, capace di reagire in tempo reale.",
          icon: BatteryCharging,
        },
      ]
    : [
        {
          eyebrow: "01",
          title: "Sensors and data",
          text: "The smart home starts with environmental awareness: temperature, presence, humidity, energy use, device states, and plant signals become readable and useful data.",
          icon: House,
        },
        {
          eyebrow: "02",
          title: "Local orchestration",
          text: "The control layer coordinates integrations, rules, scenes, and interfaces within a local, readable, and dependable architecture.",
          icon: LayoutDashboard,
        },
        {
          eyebrow: "03",
          title: "Custom electronics",
          text: "Custom ESP32 hardware makes it possible to build dedicated sensors, modules, and interfaces when standard devices do not offer the required precision.",
          icon: Cpu,
        },
        {
          eyebrow: "04",
          title: "Energy intelligence",
          text: "Photovoltaics, batteries, EV charging, and load optimization are integrated as one connected energy system able to react in real time.",
          icon: BatteryCharging,
        },
      ];
  const technologyStrip = isItalian
    ? ["Controllo locale", "Home Assistant", "ESP32", "MQTT", "Reti e sicurezza", "Sistemi energetici"]
    : ["Local control", "Home Assistant", "ESP32", "MQTT", "Networks and security", "Energy systems"];
  const consultingScenarios = isItalian
    ? [
        {
          title: "Energia domestica da coordinare",
          description:
            "Abitazioni con fotovoltaico, batterie e ricarica EV richiedono una logica di sistema capace di leggere disponibilità, priorità e consumo reale.",
        },
        {
          title: "Molti impianti, una sola architettura",
          description:
            "Luci, clima, sicurezza, accessi e media danno valore solo quando vengono integrati in un controllo centrale coerente, non gestiti come isole separate.",
        },
        {
          title: "Case ampie, presenza e controllo centralizzato",
          description:
            "Nelle abitazioni più articolate servono scenari affidabili, logiche di presenza precise e interfacce chiare per mantenere controllo, comfort e semplicità d'uso.",
        },
        {
          title: "Installazioni non standard",
          description:
            "Quando i prodotti commerciali non coprono il caso reale, l'elettronica ESP32 personalizzata permette di costruire sensori, moduli e interfacce su misura.",
        },
      ]
    : [
        {
          title: "Residential energy systems that need coordination",
          description:
            "Homes with solar, storage, and EV charging need a system logic able to interpret availability, priorities, and real consumption.",
        },
        {
          title: "Many subsystems, one architecture",
          description:
            "Lighting, climate, security, access, and media create value only when they are integrated into one coherent control architecture, not managed as separate islands.",
        },
        {
          title: "Larger homes where presence logic matters",
          description:
            "In more complex residences, reliable scenarios, precise presence logic, and clear interfaces are essential to preserve control, comfort, and ease of use.",
        },
        {
          title: "Non-standard installations",
          description:
            "When commercial devices do not fit the real requirement, custom ESP32 electronics make it possible to build the needed sensors, modules, and interfaces.",
        },
      ];
  const designMethodSteps = isItalian
    ? [
        {
          step: "01",
          title: "Analisi tecnica dell'abitazione",
          description:
            "Rilievo di impianti, abitudini, vincoli e obiettivi per capire dove il sistema può creare valore reale e quali integrazioni hanno davvero senso.",
        },
        {
          step: "02",
          title: "Architettura del sistema",
          description:
            "Definizione del modello di controllo, dei livelli di integrazione, della struttura dei dati, delle interfacce operative e della logica complessiva del sistema.",
        },
        {
          step: "03",
          title: "Integrazione hardware e software",
          description:
            "Dispositivi, reti, bus e componenti ESP32 vengono uniti in un'architettura leggibile, locale e stabile, senza dipendenze inutili o soluzioni improvvisate.",
        },
        {
          step: "04",
          title: "Automazioni e ottimizzazione",
          description:
            "Le automazioni nascono da presenza, energia, comfort e sicurezza per trasformare i dati in comportamento utile, misurabile e affidabile nel tempo.",
        },
        {
          step: "05",
          title: "Evoluzione nel tempo",
          description:
            "Il progetto resta aperto alla crescita: nuovi ambienti, nuove esigenze energetiche e nuove integrazioni possono essere aggiunti senza perdere coerenza architetturale.",
        },
      ]
    : [
        {
          step: "01",
          title: "Technical analysis of the home",
          description:
            "The process starts from plants, constraints, objectives, and priorities to understand where an intelligent system can create real value.",
        },
        {
          step: "02",
          title: "System architecture",
          description:
            "The control structure is defined across integration layers, key components, data flows, and operational interfaces.",
        },
        {
          step: "03",
          title: "Hardware and software integration",
          description:
            "Devices, buses, network services, and any ESP32 electronics are connected into a readable, stable, and coherent ecosystem.",
        },
        {
          step: "04",
          title: "Automation and optimization",
          description:
            "The logic is built around presence, energy, comfort, and security so that data becomes useful system behavior.",
        },
        {
          step: "05",
          title: "Evolution over time",
          description:
            "The system is designed to grow with new integrations, new spaces, new energy requirements, and future complexity.",
        },
      ];
  const faqs = isItalian
    ? [
        {
          question: "Serve rifare l'impianto elettrico?",
          answer:
            "Non necessariamente. In molti casi si lavora integrando l'impianto esistente e intervenendo solo dove ha senso dal punto di vista tecnico o funzionale. La valutazione corretta dipende sempre dall'architettura della casa, dai sistemi già presenti e dal livello di integrazione richiesto.",
        },
        {
          question: "Perché privilegiare un’architettura locale e aperta?",
          answer:
            "Perché offre più controllo, continuità e libertà di integrazione. Quando è adatto al progetto, Home Assistant può essere uno degli strumenti usati per unificare ecosistemi diversi senza legare l’intero sistema alle scelte di un solo produttore.",
        },
        {
          question: "Il sistema funziona anche senza internet?",
          answer:
            "Sì, l'architettura viene privilegiata in modalità locale proprio per garantire continuità operativa, bassa latenza e maggiore affidabilità. Alcune integrazioni cloud possono avere limiti senza connessione, ma il cuore del sistema può restare pienamente operativo.",
        },
        {
          question: "Cosa succede se voglio espandere il sistema?",
          answer:
            "Un progetto ben impostato nasce già con questa prospettiva. Nuovi ambienti, nuovi dispositivi, integrazioni energetiche o livelli di sicurezza aggiuntivi possono essere inseriti mantenendo coerenza architetturale e continuità d'uso.",
        },
        {
          question: "È sempre necessario hardware personalizzato?",
          answer:
            "No. L'hardware personalizzato viene introdotto solo quando porta un vantaggio reale: coprire un'esigenza non standard, migliorare l'integrazione con impianti esistenti o ottenere una precisione che il catalogo commerciale non offre.",
        },
      ]
    : [
        {
          question: "Is a full electrical rework required?",
          answer:
            "Not necessarily. In many cases the existing electrical system can be integrated, with targeted intervention only where it makes technical or functional sense. The right answer depends on the architecture of the home, the systems already in place, and the requested integration level.",
        },
        {
          question: "Why prioritize a local and open architecture?",
          answer:
            "Because it provides more control, continuity, and integration freedom. When it fits the project, Home Assistant can be one of the tools used to unify different ecosystems without tying the entire system to one vendor's decisions.",
        },
        {
          question: "Does the system still work without internet?",
          answer:
            "Yes. The architecture is designed around local operation to preserve continuity, low latency, and reliability. Some cloud-based integrations may be limited without connectivity, but the core system can remain fully operational.",
        },
        {
          question: "What happens if I want to expand the system later?",
          answer:
            "A well-designed project already anticipates that scenario. New spaces, new devices, energy integrations, or additional security layers can be added while keeping the architecture coherent and the user experience consistent.",
        },
        {
          question: "Is custom hardware always necessary?",
          answer:
            "No. Custom hardware is introduced only when it creates real value: handling a non-standard requirement, improving integration with existing systems, or delivering a level of precision that catalog products do not provide.",
        },
      ];
  const finalCtaContent = isItalian
    ? {
        eyebrow: "Consulenza",
        title: "Ogni progetto inizia da una valutazione tecnica, non dalla scelta di un prodotto.",
        description:
          "La consulenza iniziale serve a definire l'architettura del sistema, il livello di integrazione possibile e la direzione progettuale più adatta alla casa. L'obiettivo non è assemblare dispositivi standard, ma progettare una soluzione coerente, affidabile e costruita sul contesto reale.",
        support:
          "Prima consulenza per architettura, integrazioni, fattibilità e strategia del sistema.",
        primary: "Richiedi una consulenza",
        secondary: "Scopri i servizi",
      }
    : {
        eyebrow: content.finalCta.eyebrow,
        title: content.finalCta.title,
        description: content.finalCta.description,
        support: "Initial consultation covering architecture, integrations, feasibility, and system strategy.",
        primary: content.finalCta.primary,
        secondary: "Explore services",
      };
  const residentialPath = isItalian
    ? {
        eyebrow: "Percorso residenziale · ABEDOME",
        title: "Hai una casa da progettare o migliorare?",
        description:
          "Per chi sta costruendo, ristrutturando o vuole mettere ordine tra energia, comfort, domotica e sicurezza, ABEDOME offre un primo percorso di analisi pensato per leggere la casa come un unico sistema.",
        primary: "Scopri ABEDOME",
        secondary: "Fai il check-up gratuito",
      }
    : {
        eyebrow: "Residential journey · ABEDOME",
        title: "Are you designing or improving a home?",
        description:
          "For people who are building, renovating, or want to bring clarity to energy, comfort, home automation, and security, ABEDOME offers an initial analysis designed to understand the home as one integrated system.",
        primary: "Discover ABEDOME",
        secondary: "Start the free check-up",
      };

  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-10 sm:pb-14 sm:pt-16 lg:pb-16 lg:pt-20">
        <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_20%_15%,rgba(52,217,255,0.14),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.08),transparent_16%)]" />
        <div className="container-shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
            <Reveal className="max-w-2xl lg:max-w-[41rem]">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-cyan">
                <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_rgba(52,217,255,0.85)]" />
                {content.heroBadge}
              </div>
              <h1 className="mt-6 max-w-3xl text-[1.98rem] font-semibold leading-[1.18] tracking-[-0.042em] text-white sm:text-[2.62rem] sm:leading-[1.14] lg:text-[2.95rem] lg:leading-[1.12]">
                {content.heroTitle}
              </h1>
              <p className="mt-6 max-w-[39rem] text-[1.02rem] leading-8 text-white/70 lg:text-[1.12rem] lg:leading-9">
                {content.heroDescription}
              </p>
              <p className="mt-5 max-w-2xl text-sm uppercase tracking-[0.28em] text-white/50">
                {isItalian
                  ? "Domotica evoluta, sistemi energetici intelligenti e integrazioni ad alta affidabilità."
                  : "Advanced smart-home systems, intelligent energy, and high-reliability integrations."}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href={getLocalizedPath(locale, "/contact")} className="button-primary">
                  {content.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={getLocalizedPath(locale, "/services")} className="button-secondary">
                  {content.secondaryCta}
                </Link>
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-white/40 sm:text-[0.78rem]">
                {isItalian
                  ? "Controllo locale · Hardware ESP32 · Energia · Reti · Sicurezza"
                  : "Local control · ESP32 hardware · Energy · Networks · Security"}
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="surface-subtle flex h-full flex-col rounded-2xl px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">{stat.label}</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-white/90">{stat.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100} className="relative">
              <div className="hero-visual tech-frame relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
                <div className="network-field" aria-hidden="true">
                  <span className="network-line network-line--a" style={{ ["--line-rotate" as string]: "12deg" }} />
                  <span className="network-line network-line--b" style={{ ["--line-rotate" as string]: "-18deg" }} />
                  <span className="network-line network-line--c" style={{ ["--line-rotate" as string]: "8deg" }} />
                  <span className="network-line network-line--d" style={{ ["--line-rotate" as string]: "-12deg" }} />
                  <span className="network-line network-line--e" style={{ ["--line-rotate" as string]: "-6deg" }} />
                  <span className="network-node network-node--1" />
                  <span className="network-node network-node--2" />
                  <span className="network-node network-node--3" />
                  <span className="network-node network-node--4" />
                  <span className="network-node network-node--5" />
                  <span className="network-node network-node--6" />
                  <span className="network-node network-node--7" />
                  <span className="network-node network-node--8" />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(52,217,255,0.12),transparent_28%)]" />
                <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
                <div className="orbital-ring h-[360px] w-[360px]" />
                <div className="orbital-ring h-[240px] w-[240px]" style={{ animationDuration: "18s" }} />
                <div className="absolute left-[18%] top-[14%] h-28 w-28 rounded-full bg-cyan/10 blur-3xl" />

                <div className="relative flex min-h-[460px] flex-col justify-between sm:min-h-[510px] lg:min-h-[540px]">
                  <div className="flex items-start justify-between">
                    <div className="surface-subtle rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/70">
                      {isItalian ? "Sistemi tecnologici evoluti" : "Deep Tech Systems"}
                    </div>
                    <div className="surface-subtle rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-cyan">
                      JetGrid
                    </div>
                  </div>

                  <div className="relative flex flex-1 items-center justify-center py-8">
                    <div className="absolute h-[150px] w-[150px] rounded-full border border-cyan/28 bg-cyan/10 blur-2xl" />
                    <div className="hero-cluster">
                      <div className="hero-cluster__ring hero-cluster__ring--3" />
                      <div className="hero-cluster__ring hero-cluster__ring--2" />
                      <div className="hero-cluster__ring hero-cluster__ring--1" />

                      <div className="hero-pill hero-pill--a">
                        <p className="hero-pill__label">Home Assistant</p>
                        <p className="hero-pill__text">
                          {isItalian ? "Orchestrazione locale" : "Local orchestration"}
                        </p>
                      </div>

                      <div className="hero-pill hero-pill--b">
                        <p className="hero-pill__label">ESP32</p>
                        <p className="hero-pill__text">
                          {isItalian ? "Integrazione su misura" : "Custom integration"}
                        </p>
                      </div>

                      <div className="hero-pill hero-pill--c">
                        <p className="hero-pill__label">{isItalian ? "Energia" : "Energy"}</p>
                        <p className="hero-pill__text">
                          {isItalian ? "Logica intelligente" : "Intelligent logic"}
                        </p>
                      </div>

                      <div className="hero-cluster__core">
                        <p className="text-[11px] uppercase tracking-[0.34em] text-cyan">
                          {isItalian ? "Nucleo del sistema" : "Smart Home Core"}
                        </p>
                        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                          {isItalian ? "Infrastruttura connessa" : "Connected infrastructure"}
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-white/72">
                          {isItalian
                            ? "Controllo, hardware, energia e interfacce progettati come un unico sistema coerente."
                            : "Control, hardware, energy, and interfaces designed as one coherent system."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hero-chip absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-1/2 sm:right-auto sm:w-[52%] sm:-translate-x-1/2">
                    <Zap className="h-4 w-4 text-cyan" />
                    <span>{content.systemBadges.jetgridChip}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container-shell">
          <Reveal>
            <div className="tech-strip">
              <p className="tech-strip__title">
                {isItalian ? "Tecnologie e integrazioni" : "Technologies and integrations"}
              </p>
              <div className="tech-strip__items">
                {technologyStrip.map((item) => (
                  <span key={item} className="tech-strip__badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow={isItalian ? "Cosa Faccio" : "What I Do"}
              title={
                isItalian
                  ? "Progetto sistemi domestici intelligenti con un approccio da studio tecnologico."
                  : "I design intelligent residential systems with the mindset of a technology studio."
              }
              description={
                isItalian
                  ? "Il lavoro unisce strategia tecnica, integrazione di sistemi, hardware dedicato e qualità dell’esperienza. L’obiettivo non è aggiungere complessità, ma trasformarla in un’infrastruttura chiara, elegante e affidabile."
                  : "The work combines technical strategy, system integration, dedicated hardware, and experience quality. The goal is not to add complexity, but to shape it into an elegant, dependable infrastructure."
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {valueProps.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="surface-panel card-hover flex h-full flex-col rounded-[1.75rem] p-7">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-cyan">
                    {index === 0 ? "01" : index === 1 ? "02" : "03"}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-4 max-w-sm leading-8 text-white/70">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow={isItalian ? "Servizi Chiave" : "Core Services"}
              title={
                isItalian
                  ? "Competenze verticali, presentate come un ecosistema coerente."
                  : "Specialized capabilities presented as one coherent ecosystem."
              }
              description={
                isItalian
                  ? "Ogni servizio ha una funzione precisa, ma il valore reale emerge quando software, elettronica, energia e integrazioni vengono progettati come un unico insieme."
                  : "Each service has a clear role, but the real value appears when software, electronics, energy, and integrations are designed as one system."
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {servicePreview.map((service, index) => (
              <Reveal key={service.title} delay={index * 70}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow={isItalian ? "Architettura" : "Architecture"}
              title={
                isItalian
                  ? "Architettura di una smart home evoluta"
                  : "Architecture of an advanced smart home"
              }
              description={
                isItalian
                  ? "Una casa intelligente non è un insieme di dispositivi: è un sistema integrato dove sensori, energia, automazioni ed elettronica lavorano insieme come una vera infrastruttura tecnologica."
                  : "An intelligent home is not a collection of devices: it is an integrated system where sensors, energy, automation, and electronics operate together as a real technology infrastructure."
              }
            />
          </Reveal>
          <Reveal delay={90} className="mt-12">
            <div className="stack-shell">
              <div className="stack-rail" />
              <div className="mb-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.32em] text-cyan">
                    {isItalian ? "Stack tecnologico" : "Technology Stack"}
                  </p>
                  <h3 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {isItalian
                      ? "Una stack tecnologica pensata come infrastruttura."
                      : "A technology stack designed as infrastructure."}
                  </h3>
                </div>
                <p className="max-w-2xl text-sm leading-8 text-white/70">
                  {isItalian
                    ? "Ogni livello ha una funzione chiara e si collega agli altri come in una moderna architettura di sistema: dati, controllo, hardware, dispositivi, energia e visione futura."
                    : "Each level has a clear role and connects to the others like a modern system architecture: data, control, hardware, devices, energy, and future vision."}
                </p>
              </div>

              <div className="stack-grid">
                {architectureLayers.map((layer, index) => (
                  <div
                    key={layer.title}
                    className="stack-layer"
                    style={{ ["--stack-offset" as string]: `${index * 10}px` }}
                  >
                    <div className="stack-layer__inner">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h4 className="stack-layer__title mt-2">{layer.title}</h4>
                        <p className="stack-layer__text mt-2">{layer.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow={isItalian ? "Sistema Intelligente" : "Intelligent System"}
              title={
                isItalian
                  ? "Il sistema intelligente dietro ogni smart home"
                  : "The intelligent system behind every smart home"
              }
              description={
                isItalian
                  ? "Una smart home evoluta funziona come un’infrastruttura tecnologica: livelli diversi raccolgono dati, prendono decisioni, eseguono azioni e ottimizzano energia, comfort e controllo."
                  : "An advanced smart home operates like a technology infrastructure: different layers collect data, make decisions, execute actions, and optimize energy, comfort, and control."
              }
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="system-grid">
              {intelligentSystemBlocks.map((block) => (
                <article key={block.title} className="system-node">
                  <div className="system-node__inner">
                    <div className="flex items-center justify-between gap-4">
                      <p className="system-node__eyebrow">{block.eyebrow}</p>
                      <block.icon className="h-5 w-5 text-cyan" />
                    </div>
                    <h3 className="system-node__title">{block.title}</h3>
                    <p className="system-node__text">{block.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="system-transition">
              {isItalian
                ? "Quando questi livelli vengono progettati con coerenza, la smart home smette di essere un insieme di dispositivi e diventa una vera infrastruttura intelligente. È da questa idea che nasce la direzione futura espressa da JetGrid."
                : "When these layers are designed coherently, the smart home stops being a group of devices and becomes a true intelligent infrastructure. That is the idea that extends naturally into the future direction expressed by JetGrid."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell space-y-20">
          {deepSections.map((section, index) => (
            <Reveal key={section.title}>
              <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
                <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <p className="section-label">{section.eyebrow}</p>
                  <h2 className="section-title mt-5 max-w-2xl">{section.title}</h2>
                  <p className="section-copy mt-6 max-w-2xl">{section.description}</p>
                  <div className="mt-7 grid gap-3">
                    {section.features.map((feature) => (
                      <div
                        key={feature}
                        className="inline-flex w-full items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white/80"
                      >
                        <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_14px_rgba(52,217,255,0.8)]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href={getLocalizedPath(locale, section.href)} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan">
                    {section.cta}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  <div className="feature-stage">
                    <div className="feature-stage__glow" />
                    <div className="surface-panel rounded-[2rem] p-7">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] uppercase tracking-[0.32em] text-cyan">{section.eyebrow}</p>
                        <section.icon className="h-5 w-5 text-cyan" />
                      </div>
                      <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                          <p className="text-xs uppercase tracking-[0.26em] text-white/50">
                            {isItalian ? "Infrastruttura" : "Infrastructure"}
                          </p>
                          <h3 className="mt-4 text-xl font-semibold text-white">
                            {index === 0
                              ? isItalian
                                ? "Centro di controllo"
                                : "Control Core"
                              : index === 1
                                ? isItalian
                                  ? "Livello dispositivi"
                                  : "Device Layer"
                                : index === 2
                                  ? isItalian
                                    ? "Livello energetico"
                                    : "Energy Layer"
                                  : isItalian
                                    ? "Reti e sicurezza"
                                    : "Networks and Security"}
                          </h3>
                        </div>
                        <div className="rounded-[1.5rem] border border-cyan/15 bg-cyan/[0.08] p-5">
                          <p className="text-xs uppercase tracking-[0.26em] text-cyan">
                            {isItalian ? "Risultato" : "Outcome"}
                          </p>
                          <p className="mt-4 text-sm leading-7 text-white/80">
                            {index === 0
                              ? isItalian
                                ? "Più controllo, meno attrito, integrazioni più stabili."
                                : "More control, less friction, more stable integrations."
                              : index === 1
                                ? isItalian
                                  ? "Hardware preciso dove il mercato resta generico."
                                  : "Precise hardware where the market stays generic."
                                : index === 2
                                  ? isItalian
                                    ? "Dati energetici tradotti in logiche operative utili."
                                    : "Energy data translated into useful operational logic."
                                  : isItalian
                                    ? "Servizi più stabili, protetti e semplici da mantenere."
                                    : "More stable, protected, and maintainable services."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow={isItalian ? "Quando Serve" : "When It Matters"}
              title={
                isItalian
                  ? "Quando una smart home progettata fa davvero la differenza"
                  : "When a properly designed smart home makes a real difference"
              }
              description={
                isItalian
                  ? "Il valore di questo tipo di consulenza emerge quando la casa smette di essere un insieme di prodotti e diventa un sistema tecnico da orchestrare con metodo."
                  : "The value of this kind of consulting appears when the home stops being a set of products and becomes a technical system that must be orchestrated with intent."
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {consultingScenarios.map((scenario, index) => (
              <Reveal key={scenario.title} delay={index * 70}>
                <article className="surface-panel card-hover flex h-full flex-col rounded-[1.75rem] p-7">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{scenario.title}</h3>
                  <p className="mt-4 leading-8 text-white/70">{scenario.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow={isItalian ? "Metodo" : "Method"}
              title={
                isItalian ? "Il metodo di progettazione" : "The design methodology"
              }
              description={
                isItalian
                  ? "Ogni progetto segue un processo tecnico preciso: dalla lettura dell'abitazione alla definizione dell'architettura, fino all'integrazione e all'evoluzione del sistema nel tempo."
                  : "Each engagement starts from a clear technical process: analysis, architecture, integration, and optimization, with a long-term view that allows the system to evolve."
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            <Reveal delay={60}>
              <div className="surface-panel rounded-[2rem] p-8">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan">
                  {isItalian ? "Approccio" : "Approach"}
                </p>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  {isItalian
                    ? "Uno studio tecnico serio definisce prima il sistema, poi seleziona la tecnologia."
                    : "A systems studio works on architecture first, then on technology."}
                </h3>
                <p className="mt-5 max-w-md leading-8 text-white/70">
                  {isItalian
                    ? "Questo metodo riduce scelte sbagliate, evita automazioni fragili e consente di costruire una smart home leggibile, estendibile e tecnicamente coerente anche quando aumenta di complessità."
                    : "This approach reduces wrong decisions, avoids fragile automations, and creates a smart home that remains readable, extensible, and solid as complexity increases."}
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4">
              {designMethodSteps.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <article className="surface-subtle rounded-[1.6rem] p-6">
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.26em] text-cyan">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-white">{item.title}</h3>
                        <p className="mt-3 leading-8 text-white/70">{item.description}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow={isItalian ? "Domande Frequenti" : "FAQ"}
              title={
                isItalian ? "Domande frequenti" : "Frequently asked questions"
              }
              description={
                isItalian
                  ? "Le decisioni giuste si prendono chiarendo prima vincoli tecnici, affidabilità locale, possibilità di espansione e reale livello di personalizzazione necessario."
                  : "A serious consulting process clarifies structural decisions first: electrical constraints, local reliability, scalability, and the actual level of customization required."
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 60}>
                <details className="faq-item group" {...(index === 0 ? { open: true } : {})}>
                  <summary className="faq-item__summary">
                    <span className="faq-item__question">{faq.question}</span>
                    <span className="faq-item__icon">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </summary>
                  <div className="faq-item__content">
                    <p className="faq-item__answer">{faq.answer}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <Reveal>
            <div className="final-cta-shell">
              <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(52,217,255,0.18),transparent_60%)]" />
              <p className="section-label relative">{finalCtaContent.eyebrow}</p>
              <h2 className="section-title relative mt-5 max-w-3xl">{finalCtaContent.title}</h2>
              <p className="section-copy relative mt-6 max-w-[42rem]">{finalCtaContent.description}</p>
              <p className="relative mt-4 max-w-[40rem] text-sm leading-7 text-white/55">{finalCtaContent.support}</p>
              <div className="relative mt-9 flex flex-wrap gap-4">
                <Link href={getLocalizedPath(locale, "/contact")} className="button-primary">
                  {finalCtaContent.primary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={getLocalizedPath(locale, "/services")} className="button-secondary">
                  {finalCtaContent.secondary}
                </Link>
              </div>
              <div className="relative mt-10 rounded-[1.75rem] border border-cyan/18 bg-black/15 p-6 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.3em] text-cyan">{residentialPath.eyebrow}</p>
                <h3 className="mt-4 max-w-2xl text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                  {residentialPath.title}
                </h3>
                <p className="mt-4 max-w-[46rem] leading-8 text-white/70">{residentialPath.description}</p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <a href={ABEDOME_URL} target="_blank" rel="noreferrer" className="button-primary">
                    {residentialPath.primary}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={ABEDOME_CHECKUP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary"
                  >
                    {residentialPath.secondary}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
