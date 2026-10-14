/**
 * Portfolio Configuration & Source of Truth for Ahmed Adam
 * AI Automation & Agentic AI Engineer
 *
 * All editable text, projects, services, skills, credentials, and settings
 * are centralized in this file. To modify site content or add new items,
 * update the corresponding object or array below.
 */

const PORTFOLIO_CONFIG = {
  // ------------------------------------------------------------------------
  // 1. Identity & Contact Information (Strictly from CV)
  // ------------------------------------------------------------------------
  profile: {
    fullName: "Ahmed Adam Abdelghani Hussien",
    displayName: "Ahmed Adam",
    title: "AI Automation & Agentic AI Engineer",
    location: "Egypt",
    phone: "+20 121 194 6704",
    phoneFormatted: "+20 121 194 6704",
    whatsappUrl: "https://wa.me/201211946704",
    email: "ahmed47p3@gmail.com",
    linkedinUrl: "https://linkedin.com/in/ahmedadamabdelghani",
    linkedinDisplay: "linkedin.com/in/ahmedadamabdelghani",
    statusBadge: "Available for freelance projects",
    photoPath: "assets/images/ahmed.jpg",
    cvPath: "assets/cv/Ahmed_Adam_CV.pdf"
  },

  // ------------------------------------------------------------------------
  // 2. Hero & Copywriting Statements
  // ------------------------------------------------------------------------
  hero: {
    greeting: "Hi, I'm Ahmed Adam",
    rolePrefix: "I build",
    typingRoles: [
      "AI Automations",
      "Agentic AI Workflows",
      "n8n Production Systems",
      "LLM Tool-Calling Agents"
    ],
    // General USP for businesses and organizations
    usp: "I help businesses and organizations eliminate repetitive manual work through reliable n8n workflows and AI agents that seamlessly connect the tools they already use.",
    // Alternative USP for Contact CTA
    contactUsp: "Let's turn your repetitive manual tasks into dependable, production-ready AI automations.",
    badgeTag: "n8n & Agentic AI"
  },

  // ------------------------------------------------------------------------
  // 3. Professional Summary & About (100–150 words)
  // ------------------------------------------------------------------------
  about: {
    storyParagraphs: [
      "I am an AI Automation and Agentic AI developer who builds resilient n8n workflows and LLM-powered agents that connect directly to everyday business tools through REST APIs, webhooks, Gmail, Google Sheets, and WhatsApp. I deliver freelance automations that eliminate time-consuming manual operations and keep business workflows running smoothly.",
      "My work centers on production reliability: every pipeline is engineered with strict validation steps, structured error handling, retries, and fallback paths. By pairing the OpenAI API with prompt engineering and structured JSON outputs, I ensure that AI-generated data flows predictably into downstream tools without breakages.",
      "Bilingual in Arabic and English, I am currently completing the 120-hour Digital Egypt Pioneers Initiative (DEPI) in AI & Automation while pursuing my Computer Science degree at Beni-Suef University. I approach every project with an engineering mindset built for long-term dependability."
    ],
    quickFacts: [
      { label: "Location", value: "Egypt", icon: "location" },
      { label: "Languages", value: "Arabic (Native) & English (Very Good)", icon: "language" },
      { label: "Education", value: "B.Sc. Computer Science (2024 – 2028)", icon: "education" },
      { label: "Focus Areas", value: "n8n, Agentic Workflows & LLMs", icon: "focus" }
    ]
  },

  // ------------------------------------------------------------------------
  // 4. Offered Services (6 Keyword-rich client-focused cards)
  // ------------------------------------------------------------------------
  services: [
    {
      id: "n8n-workflow-automation",
      title: "n8n Workflow Automation",
      description: "Connect your business applications end-to-end through REST APIs, webhooks, and OAuth-secured integrations with automated retries and robust error handling.",
      tags: ["n8n", "Webhooks", "REST APIs", "OAuth", "Data Sync"],
      icon: "workflow"
    },
    {
      id: "ai-agents-chatbots",
      title: "AI Agents & Chatbots",
      description: "Deploy tool-calling agents with conversational memory, bilingual Arabic/English responses, and seamless human-in-the-loop escalation paths.",
      tags: ["AI Agents", "Tool Calling", "Agent Memory", "Human-in-the-Loop"],
      icon: "bot"
    },
    {
      id: "whatsapp-telegram-automation",
      title: "WhatsApp & Telegram Automation",
      description: "Automate repetitive customer inquiries, lead capture, and operations tasks directly through WhatsApp and Telegram messaging interfaces.",
      tags: ["WhatsApp", "Telegram", "Customer Ops", "Messaging Bots"],
      icon: "message"
    },
    {
      id: "lead-qualification-crm",
      title: "Lead Qualification & CRM Automation",
      description: "Score inbound inquiries 1–10, categorize leads (Hot/Warm/Cold) with structured AI outputs, sync with CRM sheets, and trigger instant sales alerts.",
      tags: ["Lead Scoring", "CRM Automation", "Google Sheets", "Alerts"],
      icon: "funnel"
    },
    {
      id: "llm-openai-integration",
      title: "LLM & OpenAI API Integration",
      description: "Integrate LLMs into your operational workflows with prompt engineering, function calling, structured JSON output validation, and guardrails.",
      tags: ["OpenAI API", "Structured Outputs", "Function Calling", "Guardrails"],
      icon: "brain"
    },
    {
      id: "document-processing-rag-ocr",
      title: "Document Processing, RAG & OCR",
      description: "Extract, structure, and query information from documents using OCR pipelines, vector stores, embeddings, and retrieval-augmented generation (RAG).",
      tags: ["RAG", "Embeddings", "Vector Stores", "OCR", "LlamaParse"],
      icon: "document"
    }
  ],

  // ------------------------------------------------------------------------
  // 5. Technical Skills (Exact groupings from CV Section 3.3)
  // ------------------------------------------------------------------------
  skills: [
    {
      category: "AI & Automation",
      icon: "cpu",
      items: [
        "n8n",
        "AI Agents",
        "Workflow Automation",
        "Multi-Agent Systems",
        "Tool Calling",
        "Agent Memory",
        "Guardrails",
        "Human-in-the-Loop"
      ]
    },
    {
      category: "Generative AI",
      icon: "sparkles",
      items: [
        "OpenAI API",
        "LLM Integration",
        "Prompt Engineering",
        "Structured Outputs",
        "Function Calling",
        "RAG",
        "Embeddings",
        "Vector Stores",
        "Document Processing",
        "OCR"
      ]
    },
    {
      category: "APIs & Backend Integration",
      icon: "api",
      items: [
        "REST APIs",
        "Webhooks",
        "OAuth",
        "JSON",
        "API Authentication",
        "Google APIs"
      ]
    },
    {
      category: "Platforms & Integrations",
      icon: "layers",
      items: [
        "Google Sheets",
        "Google Drive",
        "Gmail",
        "Slack",
        "WhatsApp",
        "Microsoft 365 / Outlook",
        "LlamaParse"
      ]
    },
    {
      category: "Production & AI Reliability",
      icon: "shield",
      items: [
        "Error Handling",
        "Validation",
        "Retries",
        "Logging",
        "Monitoring",
        "Cost Optimization",
        "AI Evaluation",
        "Security",
        "Prompt Injection Defense"
      ]
    }
  ],
  softSkills: [
    "Problem-Solving",
    "Time Management",
    "Team Collaboration",
    "Analytical Thinking"
  ],

  // ------------------------------------------------------------------------
  // 6. Work Experience (Strictly from CV Section 3.4)
  // ------------------------------------------------------------------------
  experience: [
    {
      role: "Freelance AI Automation Developer",
      period: "Present",
      company: "Freelance / Client Projects",
      location: "Remote / Egypt",
      bullets: [
        "Build n8n workflow automations that connect client business tools through REST APIs, webhooks and OAuth-secured integrations.",
        "Develop WhatsApp automation and AI agent workflows that handle repetitive customer and operations tasks.",
        "Translate client requirements into automation designs with validation steps, error handling and fallback paths.",
        "Integrate LLMs through the OpenAI API using prompt engineering and structured outputs for reliable downstream processing."
      ]
    }
  ],

  // ------------------------------------------------------------------------
  // 7. Projects / Case Studies (All 2026, Section 3.5 & 6.4)
  // ------------------------------------------------------------------------
  projects: [
    {
      id: "telegram-support-agent",
      title: "Telegram AI Customer Support Agent",
      year: "2026",
      filterCategory: "Telegram",
      tags: ["n8n", "OpenAI API", "Google Sheets", "Gmail", "Telegram"],
      outcome: "Built an n8n tool-calling agent with memory that answers Telegram customers in Arabic and English from a Google Sheets FAQ, with automated human handoff.",
      previewImage: "assets/images/telegram-support-agent.jpg",
      problem: "Customer queries arrived around the clock in both Arabic and English, overwhelming manual response capacity and causing delays on critical customer complaints.",
      solution: "Engineered an autonomous n8n support agent powered by OpenAI with conversational memory and tool-calling capability to fetch real-time answers from a Google Sheets knowledge base.",
      workflowDiagram: [
        { label: "Telegram Trigger", type: "trigger" },
        { label: "Is Text Message?", type: "router" },
        { label: "Support AI Agent", type: "agent" },
        { label: "FAQ Sheet Tool", type: "tool" },
        { label: "Needs Human?", type: "router" },
        { label: "Alert Human (Gmail) / Reply (Telegram)", type: "action" }
      ],
      tools: ["n8n", "OpenAI API", "Google Sheets", "Gmail", "Telegram Bot API"],
      impact: "Provides 24/7 bilingual customer support directly in Telegram. Complaints and out-of-scope issues trigger immediate Gmail notifications to the owner for high-priority human resolution.",
      demoUrl: "",
      videoUrl: "",
      screenshots: ["assets/images/telegram-support-agent.jpg"]
    },
    {
      id: "lead-qualification-crm",
      title: "AI Lead Qualification & CRM Automation",
      year: "2026",
      filterCategory: "n8n",
      tags: ["n8n", "Webhooks", "OpenAI API", "Google Sheets", "Gmail", "Telegram"],
      outcome: "Designed a webhook workflow that scores leads 1–10 and labels them Hot/Warm/Cold using OpenAI with structured JSON output, logging to CRM and alerting sales.",
      previewImage: "assets/images/lead-qualification-crm.jpg",
      problem: "Inbound leads from web forms and landing pages sat unreviewed for hours, resulting in slow follow-ups and missed conversion windows for high-value prospects.",
      solution: "Built an instant webhook ingestion pipeline that normalizes lead data, prompts OpenAI to evaluate qualifications on a 1–10 scale using structured JSON output, logs to a CRM sheet, and routes priority notifications.",
      workflowDiagram: [
        { label: "Lead Webhook", type: "trigger" },
        { label: "Normalize Lead Data", type: "transform" },
        { label: "AI Lead Scoring (Structured Output)", type: "agent" },
        { label: "Save to Google Sheets CRM", type: "action" },
        { label: "Is Hot Lead?", type: "router" },
        { label: "Notify Sales (Gmail & Telegram)", type: "action" }
      ],
      tools: ["n8n", "Webhooks", "OpenAI API (JSON Schema)", "Google Sheets", "Gmail", "Telegram"],
      impact: "Eliminates manual lead scoring delays. Every lead is evaluated, categorized, and recorded in Google Sheets CRM, while Hot leads instantly trigger dual Gmail and Telegram alerts for swift closing.",
      demoUrl: "",
      videoUrl: "",
      screenshots: ["assets/images/lead-qualification-crm.jpg"]
    },
    {
      id: "appointment-booking-reminder",
      title: "Appointment Booking & Telegram Reminder System",
      year: "2026",
      filterCategory: "Telegram",
      tags: ["n8n", "Google Calendar", "Google Sheets", "Telegram", "Webhooks"],
      outcome: "Automated bookings end to end: webhook intake, Google Calendar event, Sheets log, owner alert, Telegram confirmation, and pre-appointment reminders.",
      previewImage: "assets/images/appointment-booking.jpg",
      problem: "Manual scheduling resulted in calendar synchronization delays, manual confirmation messages, and client no-shows caused by missing reminder follow-ups.",
      solution: "Created an automated intake and scheduling flow in n8n connecting webhooks to Google Calendar and Sheets, with JavaScript timezone validation and an n8n Wait node for automated reminder delivery.",
      workflowDiagram: [
        { label: "Booking Webhook", type: "trigger" },
        { label: "Prepare & Validate Date", type: "transform" },
        { label: "Create Calendar Event", type: "action" },
        { label: "Log Booking in Sheets", type: "action" },
        { label: "Notify Owner & Confirm (Telegram)", type: "action" },
        { label: "Wait Node → Send Reminder", type: "timer" }
      ],
      tools: ["n8n", "Google Calendar API", "Google Sheets", "Telegram Bot API", "JavaScript"],
      impact: "Runs the complete booking lifecycle hands-free. Clients and owners receive instant confirmations, bookings sync across Google Calendar and Sheets, and automated reminders drastically reduce no-shows.",
      demoUrl: "",
      videoUrl: "",
      screenshots: ["assets/images/appointment-booking.jpg"]
    },
    {
      id: "social-content-generator",
      title: "AI Bilingual Social Content Generator",
      year: "2026",
      filterCategory: "OpenAI",
      tags: ["n8n", "OpenAI API", "Google Sheets", "Gmail", "Telegram"],
      outcome: "Built a scheduled workflow that turns a Sheets topic queue into Arabic and English posts and hashtags using OpenAI, saving drafts and routing for approval.",
      previewImage: "assets/images/social-content-generator.jpg",
      problem: "Writing daily, high-quality social posts in both Arabic and English required hours of manual drafting, translation, and hashtag research each week.",
      solution: "Automated a scheduled n8n workflow that fetches pending topics from Google Sheets, generates bilingual posts, hashtags, and image prompts with OpenAI, and distributes drafts for human review.",
      workflowDiagram: [
        { label: "Every Weekday Schedule", type: "trigger" },
        { label: "Get Pending Topics", type: "tool" },
        { label: "AI Content Writer (OpenAI)", type: "agent" },
        { label: "Save Draft to Sheet", type: "action" },
        { label: "Email & Telegram for Approval", type: "action" }
      ],
      tools: ["n8n", "OpenAI API", "Google Sheets", "Gmail", "Telegram", "Structured Outputs"],
      impact: "Maintains a consistent, automated social media pipeline across two languages while preserving complete human-in-the-loop editorial control via email and Telegram approvals.",
      demoUrl: "",
      videoUrl: "",
      screenshots: ["assets/images/social-content-generator.jpg"]
    }
  ],

  // ------------------------------------------------------------------------
  // 8. Education (Academic Degrees)
  // ------------------------------------------------------------------------
  education: [
    {
      institution: "Beni-Suef University",
      degree: "Bachelor of Computer Science",
      period: "2024 – 2028",
      status: "In Progress",
      details: [
        "Core computer science curriculum covering algorithms, data structures, software engineering principles, and computational theory.",
        "Hands-on coursework in systems programming, database management, and object-oriented software design."
      ]
    }
  ],

  // ------------------------------------------------------------------------
  // 9. Courses & Certifications (Professional Specialized Programs)
  // ------------------------------------------------------------------------
  courses: [
    {
      program: "Digital Egypt Pioneers Initiative (DEPI) – AI & Automation / n8n",
      year: "2026",
      status: "In Progress",
      duration: "120-hour intensive program",
      topics: [
        "Generative AI and prompt engineering with structured outputs; AI agents with tools, memory and guardrails.",
        "n8n workflow automation and API integration; RAG and multi-agent orchestration; OCR and document processing.",
        "AI evaluation, security and production monitoring."
      ]
    },
    {
      program: "NTI: Summer Training Machine Learning",
      year: "2026",
      status: "Completed",
      duration: "16 Aug – 10 Sep 2026",
      topics: [
        "Hands-on machine learning training covering data preparation, supervised and unsupervised learning algorithms, and model evaluation metrics."
      ]
    }
  ],

  languages: [
    { language: "Arabic", level: "Native", description: "Mother tongue" },
    { language: "English", level: "Very Good", description: "Professional working proficiency" }
  ],

  // ------------------------------------------------------------------------
  // 10. Testimonials (Data-Driven)
  // Ships EMPTY: No fake reviews are fabricated.
  // When real client reviews are collected, add objects here in the format:
  // { name: "Client Name", role: "CEO at Company", text: "Quote...", project: "Project Name" }
  // The testimonials section automatically displays once this array has >= 1 item.
  // ------------------------------------------------------------------------
  testimonials: [],

  // ------------------------------------------------------------------------
  // 11. Form & Integration Settings (Real Email Delivery)
  // FormSubmit endpoint configured to deliver submissions directly to ahmed47p3@gmail.com.
  // ------------------------------------------------------------------------
  formEndpoint: "https://formsubmit.co/ajax/ahmed47p3@gmail.com"
};

// Export to global scope for client-side scripts
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
