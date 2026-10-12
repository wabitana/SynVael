export const siteConfig = {
  name: "SynVael",
  fullName: "SynVael Technologies",
  aiDivision: "SynVael AI",
  tagline: "AI & Software Development | Leading Technology Partner",
  email: "info@synvael.com",
  phone: "+251 942497990",
  address: "Addis Ababa, Ethiopia",
  social: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/company/synvael",
  },
} as const;

export const navLinks = [
  { href: "/products", label: "AI Products" },
  { href: "/services", label: "Services" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const aboutLinks = [
  { href: "/about", label: "About SynVael" },
  { href: "/team", label: "SynVael Team" },
] as const;

export const navSecondary = [
  { href: "/start-a-project", label: "Start a Project" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
] as const;

export const synVaelProducts = [
  {
    id: "holopresence",
    name: "SynVael HoloPresence™",
    badge: "Flagship Hologram",
    category: "AI Digital Human Interactive Hologram",
    description: "Photorealistic 3D volumetric avatars with sub-180ms voice latency, real-time gaze tracking, and deployment on holographic glass kiosks and spatial web canvases.",
    features: [
      "Photorealistic 3D holographic rendering & shader projection",
      "Real-time voice cloning & expressive multimodal synthesis",
      "Spatial gaze tracking, posture & emotion recognition",
    ],
    metric: "180ms Latency",
    href: "/products#holopresence",
  },
  {
    id: "execuos",
    name: "SynVael ExecuOS™",
    badge: "Autonomous Enterprise",
    category: "AI Business OS: Custom AI CEO & CTO Agents",
    description: "Run your company with intelligent autonomy. Deploys custom executive agents (AI CEO, AI CTO) with Interactive Digital Human Hologram personas for live briefings.",
    features: [
      "Autonomous AI CEO for market forecasting & capital allocation",
      "Autonomous AI CTO for architecture audits & security governance",
      "Interactive Digital Human Hologram persona projection",
    ],
    metric: "96% Autonomy",
    href: "/products#execuos",
  },
  {
    id: "vaultmodel",
    name: "SynVael VaultModel™",
    badge: "Zero Data Leakage",
    category: "Custom Private AI Model Building & Training",
    description: "Enterprise foundry for proprietary foundation models and specialized LLMs. Air-gapped on-premise GPU hosting with 100% data sovereignty.",
    features: [
      "Proprietary data fine-tuning & domain loss calibration",
      "Guaranteed zero data leakage to external APIs",
      "Complete model weights and IP ownership handoff",
    ],
    metric: "100% Sovereignty",
    href: "/products#vaultmodel",
  },
  {
    id: "agentforge",
    name: "SynVael AgentForge™",
    badge: "Agentic AI",
    category: "Autonomous Multi-Agent Swarms & Workflow Builder",
    description: "Cooperating multi-agent swarms that plan, call tools, query databases, and execute complex business workflows with self-healing execution loops.",
    features: [
      "Hierarchical swarm coordination & agent delegation",
      "Secure autonomous tool calling across databases & APIs",
      "Deterministic human-in-the-loop safety guardrails",
    ],
    metric: "10x Throughput",
    href: "/products#agentforge",
  },
  {
    id: "synchat",
    name: "SynVael SynChat Enterprise™",
    badge: "Cognitive Chatbot",
    category: "Custom AI Chatbots & Omnichannel Voicebots",
    description: "Enterprise cognitive chatbots and voice assistants fine-tuned on your internal knowledge base with hybrid vector RAG and omnichannel integration.",
    features: [
      "Omnichannel connectivity: Web, WhatsApp, iOS, Android, Voice",
      "Multi-turn conversational memory & dynamic grounding",
      "Instantaneous response with sub-second retrieval latency",
    ],
    metric: "99.4% Accuracy",
    href: "/products#synchat",
  },
  {
    id: "devengine",
    name: "SynVael DevEngine™",
    badge: "Custom Software",
    category: "Websites, Mobile Apps & Enterprise Systems",
    description: "Bespoke custom software engineering for high-conversion websites, modern SaaS applications, native iOS/Android mobile apps, and distributed cloud backends.",
    features: [
      "Custom responsive websites & enterprise web applications",
      "Native iOS & Android mobile app development",
      "Distributed microservices & high-concurrency cloud systems",
    ],
    metric: "100% Custom",
    href: "/services",
  },
] as const;
