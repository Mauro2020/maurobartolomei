import type { Route } from "next";
import { Home, LayoutDashboard, Cpu, Orbit } from "lucide-react";

export type Locale = "it" | "en";
export const appPaths = [
  "/",
  "/about",
  "/services",
  "/home-automation",
  "/custom-electronics",
  "/energy-management",
  "/jetgrid-vision",
  "/projects",
  "/blog",
  "/contact",
] as const;

export type AppPath = (typeof appPaths)[number];
type LocalizedPath<P extends AppPath> = P extends "/" ? "/" | "/en" : P | `/en${P}`;

type HeroLink = {
  label: string;
  href: AppPath;
};

type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: HeroLink;
  secondaryCta?: HeroLink;
};

type PageSeo = {
  title: string;
  description: string;
};

type LocaleSiteContent = {
  nav: {
    items: Array<{ label: string; href: AppPath }>;
    languageLabel: string;
  };
  footer: {
    eyebrow: string;
    title: string;
    navTitle: string;
    contactTitle: string;
    location: string;
    description: string;
    cta: string;
  };
  home: {
    seo: PageSeo;
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
    primaryCta: string;
    secondaryCta: string;
    startupMetrics: Array<{ value: string; label: string }>;
    systemBadges: {
      privateInfrastructure: string;
      premiumSystems: string;
      signalTitle: string;
      signalItems: string[];
      jetgridChip: string;
    };
    platform: {
      eyebrow: string;
      title: string;
      description: string;
      layers: Array<{ title: string; text: string; icon: typeof LayoutDashboard }>;
    };
    experience: {
      eyebrow: string;
      title: string;
      description: string;
      blocks: Array<{ title: string; body: string; icon: typeof Home }>;
    };
    capabilities: {
      eyebrow: string;
      title: string;
      description: string;
    };
    work: {
      eyebrow: string;
      title: string;
      description: string;
    };
    finalCta: {
      eyebrow: string;
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
    consultingModel: {
      eyebrow: string;
      title: string;
      link: string;
    };
    focusAreas: Array<{ title: string; body: string; icon: typeof Home }>;
  };
  about: {
    seo: PageSeo;
    hero: HeroContent;
    profileEyebrow: string;
    profileTitle: string;
    profileDescription: string;
    metrics: Array<{ label: string; value: string }>;
  };
  services: {
    seo: PageSeo;
    hero: HeroContent;
  };
  homeAutomation: {
    seo: PageSeo;
    hero: HeroContent;
    heading: string;
    body: string;
    features: string[];
  };
  customElectronics: {
    seo: PageSeo;
    hero: HeroContent;
    heading: string;
    body: string;
    features: string[];
  };
  energyManagement: {
    seo: PageSeo;
    hero: HeroContent;
    heading: string;
    body: string;
    features: string[];
  };
  jetgridVision: {
    seo: PageSeo;
    hero: HeroContent;
    heading: string;
    body: string;
    features: string[];
  };
  projects: {
    seo: PageSeo;
    hero: HeroContent;
  };
  blog: {
    seo: PageSeo;
    hero: HeroContent;
    articleLabel: string;
    posts: Array<{ title: string; excerpt: string }>;
  };
  contact: {
    seo: PageSeo;
    hero: HeroContent;
    categoriesTitle: string;
    categories: string[];
    formTitle: string;
    formDescription: string;
    fields: {
      name: string;
      email: string;
      projectType: string;
      message: string;
      submit: string;
    };
  };
  shared: {
    services: Array<{ title: string; description: string; icon: typeof Home }>;
    differentiators: Array<{ title: string; description: string; icon: typeof Home }>;
    portfolioProjects: Array<{ title: string; category: string; summary: string }>;
  };
};

export const locales: Record<Locale, LocaleSiteContent> = {
  it: {
    nav: {
      languageLabel: "Lingua",
      items: [
        { label: "Home", href: "/" },
        { label: "Studio", href: "/about" },
        { label: "Servizi", href: "/services" },
        { label: "Domotica", href: "/home-automation" },
        { label: "Elettronica ESP32", href: "/custom-electronics" },
        { label: "Gestione Energia", href: "/energy-management" },
        { label: "Visione JetGrid", href: "/jetgrid-vision" },
        { label: "Progetti", href: "/projects" },
        { label: "Blog", href: "/blog" },
        { label: "Contatti", href: "/contact" },
      ],
    },
    footer: {
      eyebrow: "Bartolomei Systems",
      title: "Architetture smart home con Home Assistant, elettronica ESP32 su misura e intelligenza energetica progettate come veri sistemi.",
      navTitle: "Navigazione",
      contactTitle: "Contatti",
      location: "Via Flavio Ottaviani, Foligno",
      description: "Consulenza e progettazione per smart home, energia, sicurezza integrata ed elettronica personalizzata.",
      cta: "Richiedi una consulenza",
    },
    home: {
      seo: {
        title: "Home",
        description:
          "Consulenza specialistica per sistemi smart home con Home Assistant, elettronica ESP32 personalizzata, monitoraggio energia e integrazioni avanzate.",
      },
      heroBadge: "Smart Home. Energia. JetGrid.",
      heroTitle: "Smart home progettate come infrastrutture intelligenti, non come semplici insiemi di dispositivi.",
      heroDescription:
        "Home Assistant coordina il sistema, l’elettronica ESP32 personalizzata estende ciò che il mercato standard non copre, l’energia viene letta e automatizzata con criterio, mentre JetGrid definisce una visione coerente verso ciò che viene dopo.",
      primaryCta: "Prenota una consulenza",
      secondaryCta: "Scopri i servizi",
      startupMetrics: [
        { value: "Architettura locale", label: "Sistemi pensati per privacy, continuità e affidabilità" },
        { value: "Nativo ESP32", label: "Elettronica personalizzata costruita su esigenze installative reali" },
        { value: "Logica energetica", label: "Fotovoltaico, EV, batterie e carichi orchestrati insieme" },
      ],
      systemBadges: {
        privateInfrastructure: "Infrastruttura privata",
        premiumSystems: "Sistemi premium",
        signalTitle: "Segnali di sistema",
        signalItems: ["Scene luci", "Logica presenza", "Ottimizzazione FV", "Ricarica EV"],
        jetgridChip: "JetGrid collega i sistemi di oggi alle infrastrutture di domani.",
      },
      platform: {
        eyebrow: "Piattaforma",
        title: "Competenze tecniche integrate, non semplice installazione di dispositivi.",
        description:
          "Il valore nasce da quattro aree che lavorano insieme: Home Assistant come piattaforma centrale, hardware ESP32 personalizzato, monitoraggio e automazione energetica, integrazioni avanzate costruite sull’ambiente reale.",
        layers: [
          {
            title: "Livello Controllo",
            text: "Home Assistant diventa il centro operativo della casa: dashboard chiare, automazioni robuste e integrazioni progettate per durare.",
            icon: LayoutDashboard,
          },
          {
            title: "Livello Hardware",
            text: "Schede ESP32, sensori e moduli personalizzati per coprire esigenze installative che i prodotti standard non risolvono bene.",
            icon: Cpu,
          },
          {
            title: "Livello Energia",
            text: "Produzione fotovoltaica, consumi, accumulo e ricarica EV letti e automatizzati come un unico sistema energetico.",
            icon: Orbit,
          },
        ],
      },
      experience: {
        eyebrow: "Esperienza",
        title: "La disciplina estetica di una startup premium applicata all’automazione reale.",
        description:
          "Il sito deve trasmettere fiducia tecnica a colpo d’occhio. Lo stesso principio guida i sistemi progettati: meno distrazioni, gerarchie più forti, informazioni più chiare.",
        blocks: [
          {
            title: "Progettato come un prodotto di fascia alta",
            body: "L’esperienza utente riduce l’attrito. Le interfacce sono essenziali, leggibili e costruite attorno alle azioni che contano.",
            icon: Home,
          },
          {
            title: "Ingegnerizzato per essere affidabile",
            body: "Le automazioni sono osservabili, robuste e pensate per funzionare bene anche nel tempo.",
            icon: LayoutDashboard,
          },
          {
            title: "Pronto per la prossima ondata infrastrutturale",
            body: "JetGrid estende il lavoro oltre la singola abitazione verso reti energetiche e sistemi connessi di nuova generazione.",
            icon: Orbit,
          },
        ],
      },
      capabilities: {
        eyebrow: "Competenze",
        title: "Esperienza concreta tra software, elettronica ed energia.",
        description: "Ogni servizio è costruito per rendere chiaro il valore tecnico e pratico dell’intervento per la casa e per il cliente.",
      },
      work: {
        eyebrow: "Lavori Selezionati",
        title: "Progetti rappresentativi tra automazione, elettronica e sistemi futuri.",
        description:
          "I progetti selezionati riflettono attività in cui qualità d’integrazione e profondità tecnica contano più della semplice comodità del prodotto commerciale.",
      },
      finalCta: {
        eyebrow: "Inizia il prossimo progetto",
        title: "Costruisci un ambiente intelligente che oggi sia premium e domani sia già pronto.",
        description:
          "Da sistemi Home Assistant di alto livello fino a concetti orientati a JetGrid, tutto parte da una direzione tecnica chiara.",
        primary: "Avvia il progetto",
        secondary: "Vedi i progetti",
      },
      consultingModel: {
        eyebrow: "Metodo di consulenza",
        title: "Strategia, architettura e guida all’esecuzione.",
        link: "Scopri come funziona il lavoro",
      },
      focusAreas: [
        {
          title: "Smart Home e domotica",
          body: "Sistemi residenziali integrati che uniscono comfort, affidabilità, privacy e intelligenza operativa misurabile.",
          icon: Home,
        },
        {
          title: "Tecnologie future attraverso JetGrid",
          body: "Una direzione strategica per infrastrutture di domani: distribuite, sensibili all’energia e pronte ai nuovi livelli di automazione.",
          icon: Orbit,
        },
      ],
    },
    about: {
      seo: {
        title: "Studio",
        description:
          "Scopri Bartolomei Systems: uno studio tecnologico specializzato in architetture Home Assistant, elettronica ESP32, intelligenza energetica e integrazione di sistemi intelligenti per la casa.",
      },
      hero: {
        eyebrow: "Lo Studio",
        title: "Bartolomei Systems progetta sistemi intelligenti con una logica da vera infrastruttura tecnologica.",
        description:
          "Lo studio opera con un approccio architetturale: Home Assistant come livello di orchestrazione, elettronica ESP32 su misura, energia, sicurezza e dispositivi integrati in un sistema coerente, leggibile e progettato per evolvere nel tempo.",
      },
      profileEyebrow: "Approccio",
      profileTitle: "Una consulenza tecnica premium, costruita su integrazione, metodo e visione di lungo periodo.",
      profileDescription:
        "Bartolomei Systems unisce architettura software, elettronica personalizzata, intelligenza energetica e coordinamento dei sistemi di sicurezza in un'unica pratica progettuale. Il risultato non è una semplice somma di dispositivi, ma un'infrastruttura domestica più solida, più chiara da gestire e più pronta a crescere con nuove esigenze, nuovi spazi e nuove integrazioni.",
      metrics: [
        { label: "Architettura di controllo", value: "Home Assistant, ESPHome, MQTT" },
        { label: "Elettronica e integrazione", value: "ESP32, sensori personalizzati, interfacce dedicate" },
        { label: "Energia e sistemi connessi", value: "Fotovoltaico, EV, batterie, sicurezza e ottimizzazione" },
      ],
    },
    services: {
      seo: {
        title: "Servizi",
        description:
          "Servizi di consulenza per Home Assistant, automazioni evolute, elettronica ESP32 personalizzata, monitoraggio energia e integrazioni smart home avanzate.",
      },
      hero: {
        eyebrow: "Servizi",
        title: "Dalla smart home avanzata all’integrazione tecnica su misura.",
        description:
          "Il lavoro parte da quattro aree chiave: sistemi Home Assistant ben progettati, elettronica ESP32 personalizzata, gestione energetica intelligente e integrazioni evolute tra i dispositivi della casa.",
        primaryCta: { label: "Parla del tuo progetto", href: "/contact" },
      },
    },
    homeAutomation: {
      seo: {
        title: "Domotica",
        description:
          "Progettazione di sistemi smart home con Home Assistant, automazioni avanzate, dashboard personalizzate e integrazioni affidabili.",
      },
      hero: {
        eyebrow: "Domotica",
        title: "Sistemi smart home con Home Assistant progettati per essere chiari, stabili e davvero utili.",
        description:
          "Home Assistant è il cuore della smart home: coordina dispositivi, sensori, dashboard e automazioni in un sistema coerente, locale e pensato per funzionare bene ogni giorno.",
        primaryCta: { label: "Progetta la tua smart home", href: "/contact" },
      },
      heading: "Cosa comprende",
      body: "La consulenza copre l’intero sistema smart home: architettura Home Assistant, scelta delle integrazioni, logiche di automazione, dashboard operative e struttura tecnica necessaria per mantenere l’impianto stabile e leggibile nel tempo.",
      features: [
        "Architettura Home Assistant locale e affidabile",
        "Automazioni avanzate per luci, clima, presenza e sicurezza",
        "Flussi di sicurezza e notifiche realmente utili",
        "Dashboard Home Assistant per tablet, mobile e pannelli a parete",
        "Integrazioni avanzate tra dispositivi, bus, sensori e servizi",
        "Strategia tecnica orientata a privacy, affidabilità e manutenzione",
      ],
    },
    customElectronics: {
      seo: {
        title: "Elettronica ESP32",
        description:
          "Elettronica ESP32 personalizzata, sensori e hardware integrato per smart home, automazioni dedicate e integrazioni speciali.",
      },
      hero: {
        eyebrow: "Elettronica Personalizzata",
        title: "Hardware ESP32 progettato sul lavoro da fare, non su un catalogo.",
        description:
          "Quando i dispositivi standard non bastano, l’elettronica ESP32 personalizzata permette di creare sensori, moduli e interfacce costruiti sulle esigenze reali dell’impianto.",
        primaryCta: { label: "Parla dei requisiti hardware", href: "/contact" },
      },
      heading: "Sistemi integrati per automazioni personalizzate",
      body: "Questa area copre soluzioni ESP32 su misura per controllo, comunicazione e interfacciamento con impianti e sensori, così da gestire casi reali che i prodotti commerciali non coprono bene.",
      features: [
        "Schede di controllo e moduli sensore basati su ESP32",
        "Hardware personalizzato per esigenze installative e ambientali specifiche",
        "Sensori ambientali, relè, ingressi e logiche locali",
        "Integrazione con Home Assistant, MQTT, ESPHome e sistemi esistenti",
        "Consulenza dal prototipo alla messa in opera",
        "Hardware adattato a vincoli reali di alimentazione e contenimento",
      ],
    },
    energyManagement: {
      seo: {
        title: "Gestione Energia",
        description:
          "Monitoraggio energia, fotovoltaico, integrazione EV e automazione dei consumi per abitazioni intelligenti.",
      },
      hero: {
        eyebrow: "Gestione Energia",
        title: "Monitorare l’energia è utile. Automatizzarla bene fa la differenza.",
        description:
          "Produzione fotovoltaica, consumi, batterie e ricarica EV possono essere letti e coordinati in tempo reale per migliorare controllo, efficienza e qualità delle automazioni domestiche.",
        primaryCta: { label: "Ottimizza il tuo sistema energetico", href: "/contact" },
      },
      heading: "Monitoraggio più controllo",
      body: "L’obiettivo non è mostrare numeri su una dashboard, ma usare quei dati per costruire logiche utili: priorità dei carichi, automazioni sul fotovoltaico, strategie di accumulo e integrazione con la ricarica EV.",
      features: [
        "Monitoraggio di produzione fotovoltaica, consumi e scambi energetici",
        "Visibilità su batterie, accumulo e stato dei carichi",
        "Logiche di ricarica EV basate su produzione e disponibilità energetica",
        "Dashboard energia e KPI in Home Assistant",
        "Automazioni per priorità dei carichi e fasce di utilizzo",
        "Base tecnica per una gestione energetica più evoluta e integrata",
      ],
    },
    jetgridVision: {
      seo: {
        title: "Visione JetGrid",
        description:
          "JetGrid esplora il futuro delle infrastrutture connesse, delle reti energetiche intelligenti e dei sistemi distribuiti.",
      },
      hero: {
        eyebrow: "Visione JetGrid",
        title: "Una cornice orientata al futuro per infrastrutture intelligenti.",
        description:
          "JetGrid rappresenta il lato più visionario della pratica: uno spazio concettuale in cui edifici smart, sistemi energetici, dispositivi connessi e mobilità possono evolvere verso un modello più integrato.",
        primaryCta: { label: "Parliamo di JetGrid", href: "/contact" },
      },
      heading: "Oltre l’installazione di oggi",
      body: "JetGrid estende la prospettiva della consulenza verso sistemi futuri: sensibili all’energia, distribuiti, modulari e progettati per coordinarsi oltre il singolo edificio o la singola categoria di dispositivi.",
      features: [
        "Strategia e concept design per infrastrutture future",
        "Visione distribuita tra energia e automazione",
        "Interoperabilità tra edifici, veicoli e dispositivi",
        "Sistemi connessi e consapevoli dei dati",
        "Direzione tecnica di lungo periodo",
        "Un ponte tra smart home e infrastrutture di nuova generazione",
      ],
    },
    projects: {
      seo: {
        title: "Progetti",
        description:
          "Portfolio di progetti tra smart home, elettronica personalizzata, gestione energia e concept JetGrid.",
      },
      hero: {
        eyebrow: "Progetti",
        title: "Esempi di progetto e direzioni applicative selezionate.",
        description:
          "Questi progetti raccontano l’ampiezza del lavoro: abitazioni integrate, elettronica dedicata, intelligenza energetica e sistemi orientati al futuro.",
      },
    },
    blog: {
      seo: {
        title: "Blog",
        description:
          "Approfondimenti su Home Assistant, smart home, dispositivi ESP32, gestione energia e visione JetGrid.",
      },
      hero: {
        eyebrow: "Blog",
        title: "Note tecniche, riflessioni progettuali e approfondimenti di sistema.",
        description:
          "Questa sezione è pensata come base editoriale per futuri contenuti su architetture di automazione, elettronica personalizzata, energia intelligente e visione JetGrid.",
      },
      articleLabel: "Bozza articolo",
      posts: [
        {
          title: "Perché le smart home locali contano ancora",
          excerpt: "Privacy, latenza, resilienza e controllo nel tempo restano alla base di un’automazione domestica seria.",
        },
        {
          title: "Come progettare dashboard che le persone usano davvero",
          excerpt: "Una buona interfaccia riduce attrito. Una grande interfaccia rende ovvio un sistema complesso.",
        },
        {
          title: "Dal fotovoltaico alla logica di ricarica EV",
          excerpt: "L’automazione energetica diventa preziosa quando produzione, accumulo e ricarica lavorano come un unico sistema.",
        },
      ],
    },
    contact: {
      seo: {
        title: "Contatti",
        description:
          "Contatta Bartolomei Systems per architetture Home Assistant, elettronica ESP32 personalizzata, intelligenza energetica e sicurezza integrata.",
      },
      hero: {
        eyebrow: "Contatti",
        title: "Parliamo del tuo progetto.",
        description:
          "Bartolomei Systems progetta infrastrutture intelligenti per la casa, integrando automazione, energia, sicurezza ed elettronica su misura. La consulenza parte da esigenze reali, vincoli tecnici e architettura del sistema.",
      },
      categoriesTitle: "Tipologie di progetto",
      categories: [
        "Architettura Home Assistant, dashboard e automazioni evolute",
        "Elettronica ESP32 personalizzata, sensori e moduli dedicati",
        "Monitoraggio energia, fotovoltaico, batterie e integrazione EV",
        "Integrazioni avanzate tra dispositivi, impianti e logiche smart home",
        "Sicurezza integrata, videocitofonia e coordinamento degli accessi",
      ],
      formTitle: "Avvia la consulenza",
      formDescription: "Condividi il contesto del progetto: architettura del sistema, integrazioni desiderate, fattibilità tecnica e obiettivi tra smart home, energia e sicurezza integrata.",
      fields: {
        name: "Nome",
        email: "Email",
        projectType: "Tipo di progetto",
        message: "Raccontami il progetto",
        submit: "Invia richiesta",
      },
    },
    shared: {
      services: [
        {
          title: "Architettura Home Assistant",
          description: "Progettazione completa di sistemi smart home con Home Assistant: architettura solida, integrazioni affidabili e controllo centralizzato della casa.",
          icon: Home,
        },
        {
          title: "Automazioni Avanzate",
          description: "Logiche per presenza, clima, illuminazione, sicurezza e scenari domestici costruite per essere precise, utili e stabili nel tempo.",
          icon: LayoutDashboard,
        },
        {
          title: "Dashboard Personalizzate",
          description: "Dashboard Home Assistant per tablet, pannelli a parete e mobile con interfacce chiare, leggibili e orientate all’uso quotidiano.",
          icon: LayoutDashboard,
        },
        {
          title: "Elettronica ESP32",
          description: "Dispositivi integrati, sensori personalizzati e hardware di automazione progettati attorno a ESP32 per esigenze che il catalogo non copre.",
          icon: Cpu,
        },
        {
          title: "Intelligenza Energetica",
          description: "Monitoraggio fotovoltaico, lettura dei consumi, logiche di accumulo e strategie EV per trasformare i dati energetici in automazione utile.",
          icon: Orbit,
        },
        {
          title: "Visione JetGrid",
          description: "Riflessione tecnologica orientata al futuro per piattaforme resilienti, reti intelligenti e infrastrutture connesse.",
          icon: Orbit,
        },
      ],
      differentiators: [
        {
          title: "Pensiero Sistemico",
          description: "Home Assistant, hardware, rete, sensori e logiche energetiche vengono progettati come un unico sistema coerente.",
          icon: Home,
        },
        {
          title: "Ingegneria Personalizzata",
          description: "Quando i prodotti standard non bastano, l’elettronica ESP32 personalizzata risolve esigenze specifiche in modo pulito e prevedibile.",
          icon: Cpu,
        },
        {
          title: "Chiarezza Operativa",
          description: "Dashboard, monitoraggio e controlli sono costruiti per aiutare davvero l’uso quotidiano e la lettura del sistema.",
          icon: LayoutDashboard,
        },
        {
          title: "Sensibilità Energetica",
          description: "Le automazioni tengono conto di consumi, produzione, accumulo e carichi per migliorare efficienza e controllo della casa.",
          icon: Orbit,
        },
      ],
      portfolioProjects: [
        {
          title: "Sistema di Controllo Domestico Integrato",
          category: "Domotica",
          summary:
            "Architettura Home Assistant locale per coordinare illuminazione, clima, presenza, sicurezza e media come un unico sistema di controllo integrato.",
        },
        {
          title: "Centro di Comando Energetico Personalizzato",
          category: "Gestione Energia",
          summary:
            "Monitoraggio energetico in tempo reale con fotovoltaico, batterie, carichi prioritari e logiche di ricarica EV costruite sul profilo reale dell'abitazione.",
        },
        {
          title: "Rete di Sensori ESP32",
          category: "Elettronica Personalizzata",
          summary:
            "Rete di sensori e moduli ESP32 personalizzati per ambienti complessi, integrazioni non standard e raccolta dati distribuita con controllo locale.",
        },
        {
          title: "Concept Strategico JetGrid",
          category: "Tecnologia Futura",
          summary:
            "Una direzione progettuale che estende la logica della smart home verso infrastrutture connesse, energia distribuita e coordinamento intelligente tra sistemi.",
        },
      ],
    },
  },
  en: {
    nav: {
      languageLabel: "Language",
      items: [
        { label: "Home", href: "/" },
        { label: "Studio", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Home Automation", href: "/home-automation" },
        { label: "Custom Electronics", href: "/custom-electronics" },
        { label: "Energy Management", href: "/energy-management" },
        { label: "JetGrid Vision", href: "/jetgrid-vision" },
        { label: "Projects", href: "/projects" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    footer: {
      eyebrow: "Bartolomei Systems",
      title: "Advanced smart-home architecture, custom electronics, and future-oriented infrastructure.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      location: "Via Flavio Ottaviani, Foligno",
      description: "Consulting and system design across smart homes, energy intelligence, integrated security, and custom electronics.",
      cta: "Request a consultation",
    },
    home: {
      seo: {
        title: "Home",
        description:
          "Consulting for Home Assistant, advanced home automation, custom ESP32 hardware, intelligent energy management, and JetGrid vision.",
      },
      heroBadge: "Smart Home. Energy. JetGrid.",
      heroTitle: "Intelligent living systems for homes that feel a generation ahead.",
      heroDescription:
        "Premium consulting for Home Assistant, custom ESP32 hardware, advanced automation, and energy systems shaped with the visual precision of a product launch and the rigor of real engineering.",
      primaryCta: "Book a consultation",
      secondaryCta: "Explore services",
      startupMetrics: [
        { value: "Local-first", label: "Architecture designed for privacy and resilience" },
        { value: "ESP32-native", label: "Custom electronics built around exact project needs" },
        { value: "Energy-aware", label: "Solar, EV, battery, and load orchestration" },
      ],
      systemBadges: {
        privateInfrastructure: "Private infrastructure",
        premiumSystems: "Premium systems",
        signalTitle: "System signal",
        signalItems: ["Lighting scenes", "Presence logic", "PV optimization", "EV routing"],
        jetgridChip: "JetGrid connects today’s home systems to tomorrow’s infrastructure.",
      },
      platform: {
        eyebrow: "Platform",
        title: "A multi-layer technology practice, not a simple installation service.",
        description:
          "The value comes from connecting interface design, embedded hardware, and energy logic into one coherent operating system for the home.",
        layers: [
          {
            title: "Control Layer",
            text: "Home Assistant dashboards and automation logic designed like a premium software product.",
            icon: LayoutDashboard,
          },
          {
            title: "Hardware Layer",
            text: "Custom ESP32 boards, sensors, and control interfaces when standard products are not enough.",
            icon: Cpu,
          },
          {
            title: "Energy Layer",
            text: "Photovoltaic production, flexible loads, EV charging, and storage optimized as one system.",
            icon: Orbit,
          },
        ],
      },
      experience: {
        eyebrow: "Experience",
        title: "The aesthetic discipline of a premium startup applied to real-world automation.",
        description:
          "The site should communicate technical confidence immediately. That same principle shapes the systems themselves: fewer distractions, stronger priorities, and cleaner information hierarchy.",
        blocks: [
          {
            title: "Designed like a flagship product",
            body: "The user experience is stripped of friction. Interfaces are minimal, legible, and built around high-value actions.",
            icon: Home,
          },
          {
            title: "Engineered for operational trust",
            body: "Automations are structured to be observable, reliable, and maintainable under real conditions.",
            icon: LayoutDashboard,
          },
          {
            title: "Ready for the next infrastructure wave",
            body: "JetGrid extends the work beyond the home into future connected systems and energy-aware networks.",
            icon: Orbit,
          },
        ],
      },
      capabilities: {
        eyebrow: "Capabilities",
        title: "Consulting built across software, electronics, and energy systems.",
        description: "The service set remains broad, but the presentation is sharper and more product-led.",
      },
      work: {
        eyebrow: "Selected Work",
        title: "Representative projects across automation, electronics, and future systems.",
        description:
          "The portfolio reflects projects where integration quality and technical depth matter more than off-the-shelf convenience.",
      },
      finalCta: {
        eyebrow: "Start the next build",
        title: "Build a smart environment that feels premium now and future-ready later.",
        description:
          "From flagship Home Assistant systems to JetGrid-oriented infrastructure ideas, the work begins with a clear technical direction.",
        primary: "Start your project",
        secondary: "View portfolio",
      },
      consultingModel: {
        eyebrow: "Consulting model",
        title: "Strategy, architecture, and execution guidance.",
        link: "Learn how the practice works",
      },
      focusAreas: [
        {
          title: "Smart Home and Home Automation",
          body: "Integrated residential systems that combine comfort, reliability, privacy, and measurable operational intelligence.",
          icon: Home,
        },
        {
          title: "Future Technology through JetGrid",
          body: "A strategic direction for tomorrow’s infrastructure: distributed, energy-aware, and prepared for new automation layers.",
          icon: Orbit,
        },
      ],
    },
    about: {
      seo: {
        title: "About",
        description:
          "Learn about Bartolomei Systems: a premium technology studio focused on Home Assistant architecture, custom ESP32 electronics, energy intelligence, and intelligent residential systems.",
      },
      hero: {
        eyebrow: "About",
        title: "Bartolomei Systems designs intelligent systems with the logic of real technology infrastructure.",
        description:
          "The studio works with an architectural mindset: Home Assistant as the orchestration layer, custom ESP32 electronics, energy intelligence, security coordination, and connected devices shaped into one coherent system designed to evolve over time.",
      },
      profileEyebrow: "Approach",
      profileTitle: "Premium technical consulting built on integration, systems thinking, and long-term direction.",
      profileDescription:
        "Bartolomei Systems combines software architecture, custom electronics, energy intelligence, and security integration into one design practice. The result is not a collection of products, but a more dependable residential infrastructure that remains clear to operate and ready to grow with future needs.",
      metrics: [
        { label: "Control architecture", value: "Home Assistant, ESPHome, MQTT" },
        { label: "Electronics and integration", value: "ESP32 boards, custom sensors, dedicated interfaces" },
        { label: "Energy and connected systems", value: "PV, EV, batteries, security, and optimization" },
      ],
    },
    services: {
      seo: {
        title: "Services",
        description:
          "Consulting services for Home Assistant design, advanced automation, ESP32 hardware, energy monitoring, and JetGrid strategy.",
      },
      hero: {
        eyebrow: "Services",
        title: "From smart homes to future infrastructure.",
        description:
          "Two main domains define the work: premium smart-home systems and forward-looking technology strategy through JetGrid.",
        primaryCta: { label: "Discuss a project", href: "/contact" },
      },
    },
    homeAutomation: {
      seo: {
        title: "Home Automation",
        description:
          "Premium Home Assistant system design, advanced automations, and custom dashboards for advanced smart homes.",
      },
      hero: {
        eyebrow: "Home Automation",
        title: "Smart homes engineered to be calm, precise, and dependable.",
        description:
          "The objective is a house that responds intelligently without becoming noisy or fragile. Home Assistant is used as the orchestration layer for a system designed around real daily behavior.",
        primaryCta: { label: "Plan your smart home", href: "/contact" },
      },
      heading: "What this includes",
      body: "Smart-home consulting covers the complete system lifecycle: architecture, device selection, dashboard design, automation logic, and the operational layer required to keep the installation stable over time.",
      features: [
        "Home Assistant architecture and local-first integrations",
        "Advanced lighting, climate, and presence automations",
        "Security workflows and actionable notifications",
        "Tablet, mobile, and wall-mounted dashboard design",
        "Reliable networking and device planning",
        "Privacy-conscious system strategy",
      ],
    },
    customElectronics: {
      seo: {
        title: "Custom Electronics",
        description:
          "Custom ESP32 electronics, sensors, and embedded hardware for specialized smart home and IoT automation use cases.",
      },
      hero: {
        eyebrow: "Custom Electronics",
        title: "ESP32 hardware designed around the job, not the catalog.",
        description:
          "Some projects require something more exact than a standard module. Custom electronics make it possible to fit the installation physically, electrically, and functionally.",
        primaryCta: { label: "Discuss hardware requirements", href: "/contact" },
      },
      heading: "Embedded systems for custom automation",
      body: "This area covers bespoke ESP32 solutions for sensing, control, and communication, allowing automation systems to reach physical environments and edge cases that packaged products do not handle well.",
      features: [
        "ESP32-based control boards and sensor modules",
        "Custom automation hardware for uncommon installation needs",
        "Environmental sensing, relays, and edge logic",
        "Integration with Home Assistant, MQTT, and ESPHome",
        "Prototype-to-deployment consulting",
        "Hardware tailored to real enclosure and power constraints",
      ],
    },
    energyManagement: {
      seo: {
        title: "Energy Management",
        description:
          "Photovoltaic monitoring, EV integration, and energy-aware automation for intelligent homes and electrified systems.",
      },
      hero: {
        eyebrow: "Energy Management",
        title: "Energy systems become valuable when they are orchestrated, not just observed.",
        description:
          "Production, storage, and consumption can be connected into one decision layer. The result is better visibility, smarter automation, and a stronger foundation for future electrification.",
        primaryCta: { label: "Optimize your energy system", href: "/contact" },
      },
      heading: "Monitoring plus control",
      body: "The goal is not only to visualize data. It is to build logic around photovoltaic generation, batteries, flexible loads, and EV charging so the entire environment reacts intelligently.",
      features: [
        "Photovoltaic production and household consumption monitoring",
        "Battery and storage visibility",
        "EV charging logic based on load and generation",
        "Home Assistant energy dashboards",
        "Priority rules for appliances and managed loads",
        "Technical foundations for more advanced energy infrastructure",
      ],
    },
    jetgridVision: {
      seo: {
        title: "JetGrid Vision",
        description:
          "JetGrid explores the future of connected infrastructure, intelligent energy networks, and distributed systems.",
      },
      hero: {
        eyebrow: "JetGrid Vision",
        title: "A forward-looking framework for intelligent infrastructure.",
        description:
          "JetGrid represents the future-facing side of the practice: a concept space where smart buildings, energy systems, connected devices, and mobility can evolve toward a more integrated model.",
        primaryCta: { label: "Talk about JetGrid", href: "/contact" },
      },
      heading: "Beyond today’s installation scope",
      body: "JetGrid extends the consulting perspective into future systems: energy-aware, distributed, modular, and designed to coordinate across more than a single building or device category.",
      features: [
        "Future infrastructure strategy and concept design",
        "Distributed energy and automation thinking",
        "Interoperability between buildings, vehicles, and devices",
        "Connected systems with data-aware behavior",
        "Long-horizon technical direction",
        "A bridge between smart homes and next-generation infrastructure",
      ],
    },
    projects: {
      seo: {
        title: "Projects",
        description:
          "Portfolio of smart home, custom electronics, energy management, and JetGrid concept projects.",
      },
      hero: {
        eyebrow: "Projects",
        title: "Selected project directions and implementation examples.",
        description:
          "These project narratives communicate the range of work: integrated homes, embedded hardware, energy intelligence, and future systems.",
      },
    },
    blog: {
      seo: {
        title: "Blog",
        description:
          "Insights on Home Assistant, smart homes, ESP32 devices, energy management, and JetGrid future technology thinking.",
      },
      hero: {
        eyebrow: "Blog",
        title: "Technical notes, project thinking, and system design insights.",
        description:
          "This section is structured as a content base for future articles on automation architecture, custom electronics, energy intelligence, and JetGrid concepts.",
      },
      articleLabel: "Article Draft",
      posts: [
        {
          title: "Why Local Smart Homes Still Matter",
          excerpt: "Privacy, latency, resilience, and long-term ownership remain the foundation of serious home automation design.",
        },
        {
          title: "Designing Dashboards People Actually Use",
          excerpt: "Good control surfaces reduce friction. Great ones make complex systems feel obvious.",
        },
        {
          title: "From Photovoltaics to EV Charging Logic",
          excerpt: "Energy automation becomes valuable when production, storage, and charging decisions work as one system.",
        },
      ],
    },
    contact: {
      seo: {
        title: "Contact",
        description:
          "Get in touch with Bartolomei Systems about Home Assistant architecture, custom ESP32 hardware, energy intelligence, integrated security, or JetGrid vision.",
      },
      hero: {
        eyebrow: "Contact",
        title: "Every project starts with a clear technical consultation.",
        description:
          "Bartolomei Systems supports consulting, design, and system architecture across smart homes, energy, and integrated security. The conversation starts with goals, constraints, and technical feasibility.",
      },
      categoriesTitle: "Project categories",
      categories: [
        "Home Assistant system design and advanced automations",
        "Custom ESP32 electronics and dedicated sensors",
        "Photovoltaic systems, energy dashboards, and EV integration",
        "Integrated security, access coordination, and system strategy",
      ],
      formTitle: "Inquiry form",
      formDescription: "Describe the project scope, technical constraints, and the system architecture you want to explore.",
      fields: {
        name: "Name",
        email: "Email",
        projectType: "Project type",
        message: "Tell me about your project",
        submit: "Send inquiry",
      },
    },
    shared: {
      services: [
        {
          title: "Home Assistant Architecture",
          description: "Complete system design for reliable, private, and deeply integrated smart homes built around Home Assistant.",
          icon: Home,
        },
        {
          title: "Advanced Automations",
          description: "Presence, climate, lighting, security, and contextual workflows designed to feel invisible and precise.",
          icon: LayoutDashboard,
        },
        {
          title: "Custom Dashboards",
          description: "Operator-grade dashboards for tablets, wall panels, and mobile devices with clear UX and actionable data.",
          icon: LayoutDashboard,
        },
        {
          title: "ESP32 Electronics",
          description: "Purpose-built embedded devices, custom sensors, and automation hardware engineered around ESP32 platforms.",
          icon: Cpu,
        },
        {
          title: "Energy Intelligence",
          description: "Photovoltaic monitoring, storage logic, consumption tracking, and EV charging strategies tuned for efficiency.",
          icon: Orbit,
        },
        {
          title: "JetGrid Vision",
          description: "Forward-looking technology thinking for resilient platforms, intelligent networks, and connected infrastructure.",
          icon: Orbit,
        },
      ],
      differentiators: [
        {
          title: "Systems Thinking",
          description: "Hardware, software, networking, and user experience are designed together, not as separate layers.",
          icon: Home,
        },
        {
          title: "Custom Engineering",
          description: "When commercial products are limiting, custom ESP32 hardware closes the gap cleanly and predictably.",
          icon: Cpu,
        },
        {
          title: "Operational Clarity",
          description: "Dashboards and monitoring are built for decision-making, not decoration.",
          icon: LayoutDashboard,
        },
        {
          title: "Energy Awareness",
          description: "Automation logic is shaped around loads, generation, storage, and future electrification.",
          icon: Orbit,
        },
      ],
      portfolioProjects: [
        {
          title: "Whole-Home Control System",
          category: "Home Automation",
          summary:
            "Local Home Assistant architecture coordinating lighting, climate, occupancy, security, and media as one integrated control system.",
        },
        {
          title: "Custom Energy Command Center",
          category: "Energy Management",
          summary:
            "Real-time energy monitoring with solar production, battery state, household loads, and EV charging logic shaped around the home's actual usage profile.",
        },
        {
          title: "ESP32 Sensor Network",
          category: "Custom Electronics",
          summary:
            "A custom ESP32 sensor and relay network for complex environments, non-standard integrations, and distributed data collection with local control.",
        },
        {
          title: "JetGrid Strategy Concept",
          category: "Future Technology",
          summary:
            "A strategic direction that extends smart-home thinking toward connected infrastructure, distributed energy, and coordinated intelligence across systems.",
        },
      ],
    },
  },
};

export function isAppPath(path: string): path is AppPath {
  return appPaths.includes(path as AppPath);
}

export function getLocalizedPath<P extends AppPath>(locale: Locale, path: P): Route<LocalizedPath<P>> {
  if (locale === "it") {
    return path as Route<LocalizedPath<P>>;
  }

  return (path === "/" ? "/en" : `/en${path}`) as Route<LocalizedPath<P>>;
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "it";
}

export function stripLocalePrefix(pathname: string): AppPath {
  const normalized =
    pathname === "/en" ? "/" : pathname.startsWith("/en/") ? pathname.slice(3) : pathname;

  return isAppPath(normalized) ? normalized : "/";
}
