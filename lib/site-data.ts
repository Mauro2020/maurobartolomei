import {
  BatteryCharging,
  Blocks,
  CircuitBoard,
  Cpu,
  Gauge,
  Home,
  LayoutDashboard,
  Orbit,
  Radar,
  Sparkles,
  SunMedium,
  Zap,
} from "lucide-react";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Home Automation", href: "/home-automation" },
  { label: "Custom Electronics", href: "/custom-electronics" },
  { label: "Energy Management", href: "/energy-management" },
  { label: "JetGrid Vision", href: "/jetgrid-vision" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Home Assistant Architecture",
    description:
      "Complete system design for reliable, private, and deeply integrated smart homes built around Home Assistant.",
    icon: Home,
  },
  {
    title: "Advanced Automations",
    description:
      "Presence, climate, lighting, security, and contextual workflows designed to feel invisible and precise.",
    icon: Zap,
  },
  {
    title: "Custom Dashboards",
    description:
      "Operator-grade Lovelace dashboards for tablets, wall panels, and mobile devices with clear UX and actionable data.",
    icon: LayoutDashboard,
  },
  {
    title: "ESP32 Electronics",
    description:
      "Purpose-built embedded devices, custom sensors, and automation hardware engineered around ESP32 platforms.",
    icon: Cpu,
  },
  {
    title: "Energy Intelligence",
    description:
      "Photovoltaic monitoring, storage logic, consumption tracking, and EV charging strategies tuned for efficiency.",
    icon: SunMedium,
  },
  {
    title: "JetGrid Vision",
    description:
      "Forward-looking infrastructure thinking for future-ready technology platforms, resilient networks, and smart grids.",
    icon: Orbit,
  },
];

export const focusAreas = [
  {
    title: "Smart Home and Home Automation",
    body: "Integrated residential systems that combine comfort, reliability, privacy, and measurable operational intelligence.",
    icon: Radar,
  },
  {
    title: "Future Technology through JetGrid",
    body: "A strategic direction for tomorrow’s infrastructure: energy-aware, distributed, and prepared for emerging automation layers.",
    icon: Sparkles,
  },
];

export const metrics = [
  { label: "Core platforms", value: "Home Assistant, ESPHome, MQTT" },
  { label: "Hardware expertise", value: "ESP32 boards, custom sensors, power interfaces" },
  { label: "Energy layer", value: "PV, EV, battery and load optimization" },
];

export const portfolioProjects = [
  {
    title: "Whole-Home Control System",
    category: "Home Automation",
    summary:
      "Unified lighting, HVAC, occupancy, alarm status, and media control in a Home Assistant deployment with resilient local integrations.",
  },
  {
    title: "Custom Energy Command Center",
    category: "Energy Management",
    summary:
      "Real-time dashboard for photovoltaic production, household loads, battery state, and EV charging priorities.",
  },
  {
    title: "ESP32 Sensor Network",
    category: "Custom Electronics",
    summary:
      "A bespoke network of low-power environmental sensors and relay modules designed for exact installation constraints.",
  },
  {
    title: "JetGrid Strategy Concept",
    category: "Future Technology",
    summary:
      "A concept framework for modular, data-driven infrastructure where buildings, vehicles, and energy systems coordinate intelligently.",
  },
];

export const blogPosts = [
  {
    title: "Why Local Smart Homes Still Matter",
    excerpt:
      "Privacy, latency, resilience, and long-term ownership remain the foundation of serious home automation design.",
  },
  {
    title: "Designing Dashboards People Actually Use",
    excerpt:
      "Good control surfaces reduce friction. Great ones make complex systems feel obvious.",
  },
  {
    title: "From Photovoltaics to EV Charging Logic",
    excerpt:
      "Energy automation becomes valuable when production, storage, and charging decisions work as one system.",
  },
];

export const differentiators = [
  {
    title: "Systems Thinking",
    description: "Hardware, software, networking, and user experience are designed together, not as separate layers.",
    icon: Blocks,
  },
  {
    title: "Custom Engineering",
    description: "When commercial products are limiting, custom ESP32 hardware fills the gap cleanly and predictably.",
    icon: CircuitBoard,
  },
  {
    title: "Operational Clarity",
    description: "Dashboards and monitoring are built for decision-making, not decoration.",
    icon: Gauge,
  },
  {
    title: "Energy Awareness",
    description: "Automation logic is shaped around load, generation, storage, and future electrification.",
    icon: BatteryCharging,
  },
];
