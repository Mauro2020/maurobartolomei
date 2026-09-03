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
    context: string;
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
        { label: "Contatti", href: "/contact" },
      ],
    },
    footer: {
      eyebrow: "Bartolomei Systems",
      title: "Architetture locali, elettronica su misura, energia, reti e sicurezza progettate come un unico sistema.",
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
          "Consulenza specialistica per architetture locali, integrazioni avanzate, elettronica ESP32, energia, reti e sicurezza.",
      },
      heroBadge: "Architetture locali. ESP32. Energia. Reti. Sicurezza.",
      heroTitle: "Smart home progettate come infrastrutture intelligenti, non come semplici insiemi di dispositivi.",
      heroDescription:
        "Bartolomei Systems sviluppa architetture tecniche ad alta specializzazione: controllo locale, elettronica su misura, reti affidabili, energia, sicurezza e automazioni avanzate progettate come un unico sistema.",
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
          "Il valore nasce da più livelli che lavorano insieme: controllo locale, reti, hardware ESP32 personalizzato, monitoraggio energetico, sicurezza e integrazioni costruite sull’ambiente reale.",
        layers: [
          {
            title: "Controllo e integrazione",
            text: "Dati, interfacce e automazioni vengono coordinati localmente attraverso strumenti scelti in funzione del progetto.",
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
          "Dalle integrazioni locali all’elettronica, dall’energia alle reti e alla sicurezza, tutto parte da una direzione tecnica chiara.",
        primary: "Avvia il progetto",
        secondary: "Scopri i servizi",
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
          "Consulenza per architetture locali, automazioni evolute, reti, sicurezza, elettronica ESP32 e gestione intelligente dell’energia.",
      },
      hero: {
        eyebrow: "Servizi",
        title: "Dalla smart home avanzata all’integrazione tecnica su misura.",
        description:
          "Il lavoro unisce architettura di sistema, controllo locale, reti, sicurezza, elettronica ESP32, gestione energetica e integrazioni evolute tra impianti e dispositivi.",
        primaryCta: { label: "Parla del tuo progetto", href: "/contact" },
      },
    },
    homeAutomation: {
      seo: {
        title: "Domotica",
        description:
          "Progettazione tecnica di sistemi Home Assistant, automazioni locali, dashboard personalizzate, elettronica su misura e integrazioni affidabili.",
      },
      hero: {
        eyebrow: "Domotica",
        title: "Sistemi smart home con Home Assistant progettati per essere chiari, stabili e davvero utili.",
        description:
          "Bartolomei Systems progetta il livello tecnico della smart home: controllo locale, integrazioni affidabili, reti, dashboard, elettronica dedicata e automazioni evolute.",
        primaryCta: { label: "Progetta la tua smart home", href: "/contact" },
      },
      heading: "Cosa comprende",
      body: "La consulenza tecnica copre architettura Home Assistant, scelta delle integrazioni, logiche di automazione, dashboard operative, rete ed elettronica necessarie per mantenere il sistema stabile, leggibile ed estendibile nel tempo.",
      context: "Bartolomei Systems cura l’architettura tecnica dei sistemi: controllo locale, integrazioni affidabili, elettronica su misura e automazioni evolute. Quando il punto di partenza è l’abitazione nel suo insieme, il percorso può iniziare da ABEDOME, con un’analisi di energia, comfort, sicurezza e priorità progettuali.",
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
          "Archivio dei progetti Bartolomei Systems in preparazione.",
      },
      hero: {
        eyebrow: "Progetti",
        title: "I progetti saranno pubblicati quando potranno raccontare casi reali e documentati.",
        description:
          "Stiamo preparando una selezione essenziale di lavori reali, con contesto, obiettivi tecnici e risultati verificabili. Fino ad allora preferiamo non mostrare esempi generici.",
      },
    },
    blog: {
      seo: {
        title: "Blog",
        description:
          "Area editoriale Bartolomei Systems in preparazione.",
      },
      hero: {
        eyebrow: "Blog",
        title: "Approfondimenti tecnici, quando avranno qualcosa di concreto da aggiungere.",
        description:
          "L’area editoriale è in preparazione. Pubblicheremo contenuti curati su integrazioni, elettronica, energia, reti e sicurezza senza riempire il sito di articoli provvisori.",
      },
      articleLabel: "In preparazione",
      posts: [],
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
          title: "Architettura e integrazioni locali",
          description: "Progettazione del sistema di controllo, dei flussi dati e delle integrazioni locali, utilizzando Home Assistant quando è la piattaforma adatta al contesto.",
          icon: Home,
        },
        {
          title: "Automazioni Avanzate",
          description: "Logiche per presenza, clima, illuminazione, sicurezza e scenari domestici costruite per essere precise, utili e stabili nel tempo.",
          icon: LayoutDashboard,
        },
        {
          title: "Reti e affidabilità operativa",
          description: "Segmentazione, connettività, servizi locali e continuità progettati per mantenere integrazioni e automazioni stabili nel tempo.",
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
          title: "Sicurezza integrata",
          description: "Accessi, allarmi, videocontrollo, presenza e notifiche coordinati in flussi affidabili, comprensibili e verificabili.",
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
      portfolioProjects: [],
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
        { label: "Contact", href: "/contact" },
      ],
    },
    footer: {
      eyebrow: "Bartolomei Systems",
      title: "Local architectures, custom electronics, energy, networks, and security designed as one system.",
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
          "Specialist consulting for local architectures, advanced integrations, custom ESP32 electronics, energy, networks, and security.",
      },
      heroBadge: "Local architectures. ESP32. Energy. Networks. Security.",
      heroTitle: "Intelligent living systems for homes that feel a generation ahead.",
      heroDescription:
        "Bartolomei Systems develops highly specialized technical architectures: local control, custom electronics, dependable networks, energy, security, and advanced automation designed as one coherent system.",
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
          "The value comes from connecting local control, networking, embedded hardware, energy, security, and real-world integrations into one coherent system.",
        layers: [
          {
            title: "Control and integration",
            text: "Data, interfaces, and automation are coordinated locally through tools selected around the project.",
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
          "From local integrations and electronics to energy, networks, and security, the work begins with a clear technical direction.",
        primary: "Start your project",
        secondary: "Explore services",
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
          "Consulting for local architectures, advanced automation, networks, security, ESP32 electronics, and intelligent energy management.",
      },
      hero: {
        eyebrow: "Services",
        title: "From advanced smart homes to tailored technical integration.",
        description:
          "The work combines system architecture, local control, networking, security, ESP32 electronics, energy management, and dependable integration across plants and devices.",
        primaryCta: { label: "Discuss a project", href: "/contact" },
      },
    },
    homeAutomation: {
      seo: {
        title: "Home Automation",
        description:
          "Technical Home Assistant system design, local automation, custom dashboards, purpose-built electronics, and dependable smart-home integrations.",
      },
      hero: {
        eyebrow: "Home Automation",
        title: "Smart homes engineered to be calm, precise, and dependable.",
        description:
          "Bartolomei Systems designs the technical layer of the smart home: local control, reliable integrations, networks, dashboards, dedicated electronics, and advanced automation.",
        primaryCta: { label: "Plan your smart home", href: "/contact" },
      },
      heading: "What this includes",
      body: "Technical consulting covers Home Assistant architecture, integration choices, automation logic, operational dashboards, networking, and electronics required for a system that remains stable, readable, and extensible over time.",
      context: "Bartolomei Systems is responsible for the technical architecture: local control, dependable integrations, custom electronics, and advanced automation. When the starting point is the home as a whole, the journey can begin with ABEDOME through an analysis of energy, comfort, security, and project priorities.",
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
          "Bartolomei Systems project archive in preparation.",
      },
      hero: {
        eyebrow: "Projects",
        title: "Projects will be published when they can document real work.",
        description:
          "We are preparing a focused selection of real work with context, technical objectives, and verifiable outcomes. Until then, we prefer not to show generic examples.",
      },
    },
    blog: {
      seo: {
        title: "Blog",
        description:
          "Bartolomei Systems editorial area in preparation.",
      },
      hero: {
        eyebrow: "Blog",
        title: "Technical insight, when there is something concrete to add.",
        description:
          "The editorial area is in preparation. We will publish carefully developed material on integrations, electronics, energy, networks, and security without filling the site with provisional articles.",
      },
      articleLabel: "In preparation",
      posts: [],
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
          title: "Local architecture and integrations",
          description: "Design of control systems, data flows, and local integrations, using Home Assistant when it is the right platform for the context.",
          icon: Home,
        },
        {
          title: "Advanced Automations",
          description: "Presence, climate, lighting, security, and contextual workflows designed to feel invisible and precise.",
          icon: LayoutDashboard,
        },
        {
          title: "Networks and operational reliability",
          description: "Segmentation, connectivity, local services, and continuity designed to keep integrations and automation stable over time.",
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
          title: "Integrated security",
          description: "Access, alarms, video, presence, and notifications coordinated through dependable, understandable, and verifiable workflows.",
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
      portfolioProjects: [],
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
