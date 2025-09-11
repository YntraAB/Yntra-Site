import base from './en.json';

export default {
  ...base,
  nav: {
    ...(base as any).nav,
    helpcenter: 'Help Center'
  },
  design: {
    title: 'Design',
    meta_description: 'We craft clear, brand‑strong experiences for web and apps — from research to a production‑ready design system.',
    badge: 'Design Expertise',
    hero: 'Years of experience in UX/UI and brand‑driven design for websites and mission‑critical apps. We combine research, clear flows, and consistent UI into solutions that convert better and feel right in hand.',
    cta_primary: 'Talk design with us',
    s1: {
      title: 'What we design',
      intro: 'From marketing sites to product interfaces and design systems — we deliver consistent, scalable design that works in the real world.',
      web: { title: 'Websites', desc: 'Marketing, campaign, and corporate sites that load fast and convert.' },
      apps: { title: 'Systems & Apps', desc: 'Dashboards, internal tools, and portals focused on clarity and efficiency.' },
      brand: { title: 'Brand & UI', desc: 'Visual identity, voice, and UI components that strengthen the whole.' },
      systems: { title: 'Design Systems', desc: 'Tokens, component libraries, and guidelines for speed and quality over time.' }
    },
    s2: {
      title: 'Our principles',
      items: [
        'Clarity first — every screen needs a clear goal',
        'Consistency and scale — shared patterns, faster teams',
        'Performance and feel — fast, easy‑to‑navigate experiences',
        'Accessibility (WCAG) — design for all users'
      ]
    },
    s3: {
      title: 'Design process at a glance',
      steps: [
        { title: 'Research & definition', desc: 'Goals, users, market, and constraints. We frame the problems and success metrics.' },
        { title: 'Flows & wireframes', desc: 'Task flows and low‑fidelity that unlock early decisions and feedback.' },
        { title: 'UI & prototype', desc: 'Visual exploration, components, and interactive prototype for fast validation.' },
        { title: 'Design system & handover', desc: 'Tokens, guidelines, documentation, and support during implementation.' }
      ]
    },
    cta_title: 'Ready to elevate your design?',
    cta_desc: 'Tell us about your audience and challenge — we’ll propose a pragmatic, launchable plan.',
    tools_title: 'Tools & deliverables'
  },
  system: {
    title: 'Applications',
    meta_description: 'We design and develop applications for mobile, web, and enterprise — tailored to your needs.',
    badge: 'Applications',
    hero: 'We build modern applications — mobile (iOS/Android), web, and desktop. Robust code, sharp UX, and integrations that matter.',
    cta_primary: 'Talk applications with us',
    s1: {
      title: 'What we build',
      intro: 'Mobile apps, web apps, and enterprise applications — from idea to launch and beyond.',
      internal: { title: 'Mobile applications', desc: 'iOS/Android with web‑native wrappers (e.g., Capacitor/Tauri) for offline, push, and performance.' },
      automation: { title: 'Web applications', desc: 'Portals, dashboards, booking, commerce, and real‑time data flows that scale.' },
      enterprise: { title: 'Enterprise applications', desc: 'RBAC, SSO, audit trails, scalability, and reliable operations (CI/CD + monitoring).' },
      custom: { title: 'Integrations & automation', desc: 'ERP/CRM integrations, payments, data pipelines, and background jobs.' }
    },
    s2: {
      title: 'Why choose us for applications',
      items: [
        'Many years shipping complex applications to production',
        'Reliability: testing, logging, monitoring, and routines',
        'Security and access from the start (least‑privilege)',
        'Clear docs and long‑term maintainability'
      ]
    },
    s3: {
      title: 'Delivery & tech',
      stack_title: 'Tech stack',
      stack_text: 'SvelteKit/Node for web; web‑native wrappers (Capacitor/Tauri) for mobile/desktop. API‑first, strong typing, CI/CD, and cloud ops — pragmatic choices for your context.',
      delivery_title: 'Delivery approach',
      delivery_text: 'Short iterations, weekly demos, preview environments, and transparency. We ship value early and often.'
    },
    stats: {
      years: '10+ yrs', years_label: 'Experience',
      projects: '100+', projects_label: 'System deliveries',
      uptime: '99.9%', uptime_label: 'Typical uptime'
    },
    cta_title: 'Ready to build your next system?',
    cta_desc: 'Tell us about your processes and goals — we’ll propose a solution that can launch and scale.'
  },
  process: {
    title: 'Our process',
    subtitle: 'From idea to launch — transparent, efficient, and quality at every step.',
    overview: {
      title: 'One focus: outcomes, without friction',
      text: 'We guide you from idea to launch through a clear, transparent process that reduces risk and maximizes speed. You get visible progress every week, short decision cycles, and a team owning the whole — design, development, integrations, testing, and handover.',
      points: [
        'Short iterations with weekly demos',
        'Traceable backlog and clear deliverables',
        'Accessibility, performance, and security from day one',
        'Handover and docs for long‑term ownership'
      ]
    },
    timeline_title: 'Step by step',
    durations: {
      discovery: 'Discovery',
      design: 'Design',
      build: 'Build',
      integrate: 'Integrate',
      test: 'Test & optimize',
      launch: 'Launch & support'
    },
    timeframes: {
      title: 'Typical timelines',
      marketing_title: 'Marketing website',
      marketing_desc: '4–8 weeks — depending on page count, content, and integrations.',
      product_title: 'System/app',
      product_desc: '6–12+ weeks — driven by complexity, data model, and external dependencies.'
    },
    details: {
      discovery: ['OKRs/KPIs', 'Sitemap/flows', 'Backlog/SoW', 'Plan & risks'],
      design: ['Wireframes', 'UI mockups', 'Component library', 'Interactive prototype'],
      build: ['Completed views/components', 'API integrations', 'Release notes', 'Weekly demos'],
      integrate: ['Configured integrations', 'Test data & environments', 'Technical documentation'],
      test: ['Checklist & bug fixing', 'Lighthouse/a11y reports'],
      launch: ['Ops & backup procedures', 'Final documentation']
    },
    collaboration: {
      title: 'Collaboration & communication',
      items: [
        'Weekly meetings + demo/check‑ins',
        'Async updates and release notes',
        'Single point of contact, fast feedback',
        'Access to backlog and issues'
      ]
    },
    quality: {
      title: 'Quality & security',
      items: [
        'Code review, CI checks, and staging',
        'Accessibility (WCAG), performance, and SEO basics',
        'Secure dependencies and update routines',
        'Roles, access, and backup strategy'
      ]
    },
    pricing: {
      title: 'Pricing & engagement',
      fixed_title: 'Fixed price',
      fixed_desc: 'When scope is well‑defined. Quote with deliverables, milestones, and dates.',
      tm_title: 'Time & Materials',
      tm_desc: 'For iterative development. Weekly reporting and clear priorities.'
    },
    cta: {
      title: 'Ready to build together?',
      desc: 'Tell us your goals. We’ll propose a pragmatic plan that balances speed, quality, and budget — and deliver.',
      contact: 'Contact us'
    }
  },
  footer: {
    ...(base as any).footer,
    resource_links: [
      ...(((base as any).footer?.resource_links) ?? []),
      'Terms of Service'
    ]
  },
  terms: {
    title: 'Terms of Service',
    meta_description: 'Terms governing your use of Yntra’s website and services.',
    hero: 'Please read these terms carefully. By visiting the website or using our services you agree to them.',
    last_updated_label: 'Last updated',
    intro_card:
      'These Terms of Service ("Terms") govern your access to and use of Yntra’s website and the services we provide. If you are accepting the Terms on behalf of a company, you represent that you have the authority to bind that company. If you do not accept the Terms, do not use our website or services. If a separate signed customer agreement ("Customer Agreement") exists, that agreement shall prevail in the event of any conflict with these Terms.',
    s1: {
      title: '1. Acceptance and Changes',
      acceptance: {
        title: 'Acceptance of the Terms',
        desc: 'By using the website and services you accept these Terms and our Privacy Policy.'
      },
      changes: {
        title: 'Changes to the Terms',
        desc: 'We may update these Terms from time to time. Changes take effect when published. If you have a separate Customer Agreement, it will not be affected without express written consent.'
      }
    },
    s2: {
      title: '2. Services and Use',
      intro: 'You agree to use our services legally and responsibly. In particular, you agree to:',
      items: [
        'Provide accurate information and keep it up to date',
        'Use the services only for lawful purposes and in accordance with these Terms',
        'Follow reasonable usage limits and instructions we provide',
        'Not attempt to disrupt, reverse engineer, or gain unauthorized access to our systems'
      ]
    },
    s3: {
      title: '3. Orders, Fees, and Payment',
      summary: 'Quotes, statements of work, or orders define scope, deliverables, timelines, and pricing.',
      includes: 'Unless otherwise agreed in a Customer Agreement:',
      items: {
        quotes: 'Quotes/orders: scope, assumptions, deliverables, key dates, acceptance criteria',
        invoicing: 'Invoicing: issued when milestones are reached or monthly in arrears',
        late: 'Late payments: may incur interest and/or paused work after prior notice'
      }
    },
    s4: {
      title: '4. Intellectual Property',
      text: 'Yntra retains ownership of pre-existing materials, know-how, and tools. After full payment you receive a global, non-exclusive license to use deliverables for internal business purposes. If a Customer Agreement explicitly grants transfer of rights, that agreement prevails. Third-party components are subject to their respective licenses.'
    },
    s5: {
      title: '5. Confidentiality and Data Protection',
      intro: 'The parties may exchange confidential information. Each party agrees to:',
      items: [
        'Use the other party’s confidential information only to fulfill obligations under these Terms',
        'Protect such information with reasonable care and not disclose it to third parties',
        'Return or delete confidential information upon request, unless retention is legally required',
        'Process personal data in compliance with applicable data protection laws'
      ],
      contact_hint: 'Questions about data handling? Contact us at'
    },
    s6: {
      title: '6. Acceptable Use',
      text: 'You may not use the website or services to: upload malicious code, infringe intellectual property rights, violate privacy, harass or harm others, or otherwise compromise the integrity or security of the services.'
    },
    s7: {
      title: '7. Third-Party Services',
      text: 'Our deliverables may integrate third-party services or libraries. We are not responsible for third-party content, policies, or performance. Use of such services is subject to their own terms.'
    },
    s8: {
      title: '8. Warranties and Disclaimers',
      text: 'Unless expressly stated in a Customer Agreement, the website and services are provided “as is” and “as available”. We disclaim implied warranties, including merchantability, fitness for a particular purpose, and non-infringement.'
    },
    s9: {
      title: '9. Liability and Termination',
      text: 'To the extent permitted by law, Yntra shall not be liable for indirect, incidental, or consequential damages. Our total liability is limited to the amounts you have paid for the services giving rise to the claim during the preceding six (6) months, unless otherwise specified in a Customer Agreement. We may suspend or terminate access for breach. You may terminate with written notice; work performed and non-cancellable commitments must be paid. If a Customer Agreement specifies notice periods, those take precedence.'
    },
    s10: {
      title: '10. Governing Law and Disputes',
      text: 'These Terms are governed by Swedish law and applicable EU law, excluding conflict-of-law principles. Disputes shall first be resolved through negotiation; failing that, disputes will be settled by the competent courts in Sweden, unless otherwise stated in a Customer Agreement.'
    },
    cta: {
      title: 'Questions about these Terms?',
      desc: 'Need clarifications or a tailored agreement? Get in touch.',
      button: 'Contact us'
    }
  },
  privacy: {
    title: 'Privacy Policy',
    meta_description: 'How Yntra handles your personal data: collection, use, and protection.',
    hero: 'How we handle your personal data when you visit our website or use our services.',
    last_updated_label: 'Last updated',
    intro_card: 'We value your privacy and protect your personal data. This policy explains how we collect, use, and safeguard your information when you visit our website or use our services.',
    s1: {
      title: '1. Information We Collect',
      intro: 'We may collect the following types of information:',
      personal: {
        title: 'Personal Information',
        desc: 'Such as your name, email address, phone number, and company details when you contact us or request a service.'
      },
      technical: {
        title: 'Technical Information',
        desc: 'Such as IP address, browser type, device information, and usage data collected automatically when you interact with our website.'
      }
    },
    s2: {
      title: '2. How We Use the Data',
      intro: 'We use the data to:',
      items: [
        'Provide, operate, and improve our services',
        'Communicate with you about inquiries, projects, and support',
        'Analyze site usage and improve the experience',
        'Comply with legal obligations'
      ]
    },
    s3: {
      title: '3. Sharing of Data',
      dont_sell: 'We do not sell, trade, or rent your personal data.',
      only_share_with: 'We share data only with:',
      items: {
        providers: 'Trusted service providers who assist in operating our website and delivering services.',
        legal: 'Legal authorities if required by law or to protect our rights.'
      }
    },
    s4: {
      title: '4. Data Security',
      text: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.'
    },
    s5: {
      title: '5. Your Rights',
      intro: 'Depending on your location, you may have the right to:',
      items: [
        'Access, correct, or delete your personal information',
        'Restrict or object to the processing of your data',
        'Request data portability',
        'Withdraw consent at any time'
      ],
      contact_hint: 'To exercise these rights, please contact us at'
    },
    s6: {
      title: '6. Cookies',
      text: 'Our website may use cookies and similar technologies to enhance your browsing experience. You can manage or disable cookies through your browser settings.'
    },
    s7: {
      title: '7. Changes to This Policy',
      text: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.'
    },
    cta: {
      title: 'Questions About This Policy?',
      desc: "If you have any questions about this Privacy Policy, please don't hesitate to contact us.",
      button: 'Contact Us'
    }
  },
  modal: {
    title: 'Contact us',
    desc: 'Share a few details and we’ll get back to you shortly.',
    company_label: 'Company name',
    company_placeholder: 'e.g. Yntra AB',
    tel_label: 'Tel',
    tel_placeholder: 'e.g. +46 70 123 45 67',
    email_label: 'Email',
    email_placeholder: 'e.g. you@company.com',
    message_label: 'Message',
    message_placeholder: 'Tell us about your project or question...',
    cancel: 'Cancel',
    send: 'Send',
    privacy: 'We’ll never share your info.',
    close: 'Close'
  },
  schedule: {
    title: 'Book a call',
    desc: 'Pick a time that works for you. We’ll meet online and discuss your needs and next steps.',
    length_label: 'Duration',
    min: 'min',
    type_label: 'Meeting type',
    type_phone: 'Phone',
    pick_time: 'Pick a day and time',
    timezone_prefix: 'Times shown in',
    custom_label: 'Custom…',
    custom_pick_label: 'Pick a date',
    no_slots: 'No available slots on this day',
    name_label: 'Name',
    name_placeholder: 'e.g. Jane Doe',
    email_label: 'Email',
    email_placeholder: 'e.g. you@company.com',
    company_label: 'Company',
    company_placeholder: 'e.g. Yntra AB',
    tel_label: 'Tel',
    tel_placeholder: 'e.g. +46 70 123 45 67',
    notes_label: 'Notes (optional)',
    notes_placeholder: 'Anything specific you’d like to cover?',
    cancel: 'Cancel',
    confirm: 'Confirm booking',
    privacy: 'We’ll send a confirmation and calendar invite.' ,
    close: 'Close',
    select_time_required: 'Please select a time slot.',
    prev_day: 'Previous day',
    next_day: 'Next day',
    calendar_open: 'Open calendar',
    clear_date: 'Clear date'
  },
  about: {
    title: 'About Us',
    meta_description: 'We build high‑performing websites, systems, and apps with clean custom code — no templates.',
    hero: 'We build custom websites and business systems/apps. Mostly in Svelte, Tailwind, and TypeScript — and happily in other stacks on request. No templates or WordPress — just clean, handcrafted code that fits your business and scales with you.',
    s1: {
      title: 'What we do',
      intro: 'From marketing sites to mission‑critical internal tools — we design, build, and ship fast, robust, and maintainable products.',
      items: {
        websites: { title: 'Websites', desc: 'Modern, accessible, fast websites that convert and are easy to manage.' },
        apps: { title: 'Systems & Apps', desc: 'Custom business tools, dashboards, portals, and integrations that streamline work.' },
        integrations: { title: 'Integrations & Automation', desc: 'APIs, data sync, background jobs, and workflows that remove manual steps.' },
        design: { title: 'Design & UX', desc: 'User‑first interfaces, design systems, and thoughtful micro‑interactions.' }
      }
    },
    s2: {
      title: 'How we build',
      items: [
        'Custom code only — never templates or generic CMS themes',
        'SvelteKit + Tailwind + TypeScript by default; other stacks on request',
        'Strong foundations: a11y, performance, security, and clean architecture',
        'End‑to‑end testing where it matters; CI checks and previews',
        'Own the code: handover, docs, and maintainability baked in',
        'Transparent collaboration: short iterations, demos, and async updates'
      ]
    },
    s3: {
      title: 'Our process',
      steps: [
        { title: 'Discovery', desc: 'Goals, users, constraints, success metrics — align on scope and assumptions.' },
        { title: 'Design', desc: 'Flows, low‑/high‑fidelity, design tokens, and component system.' },
        { title: 'Build', desc: 'Iterative delivery with CI, code reviews, and staging previews.' },
        { title: 'Integrate', desc: 'APIs, auth, payments, analytics, content, and automation.' },
        { title: 'Test & Optimize', desc: 'Functional, performance, and accessibility checks; profiling and polish.' },
        { title: 'Launch & Support', desc: 'Rollout plan, handover, docs, and optional ongoing support.' }
      ]
    },
    s4: {
      title: 'Tech & tools',
      text: 'We favor SvelteKit, Tailwind CSS, and TypeScript for speed and maintainability, but can deliver in React, Vue, or modern server runtimes if preferred. We design for long‑term ownership: minimal dependencies, clear boundaries, and infrastructure that scales.'
    },
    cta: {
      title: 'Ready to build together?',
      desc: 'Tell us about your goals. We’ll propose a pragmatic plan that balances speed, quality, and budget — and then ship it.',
      contact: 'Start a conversation'
    }
  },
  help: {
    meta_title: 'Help Center — Yntra',
    meta_description: 'Find answers, guides, and resources to get started and succeed with Yntra.',
    title: 'Help Center',
    subtitle: 'Find quick answers to common questions, read guides, and get support when you need it.',
    search_open_aria: 'Open search',
    search_input_aria: 'Search in Help Center',
    search_placeholder: 'Search the Help Center…',
    search_suggestions_aria: 'Search suggestions',
    categories: {
      title: 'Explore categories',
      subtitle: 'We’ve grouped the essentials to help you get started, understand pricing, and how we deliver.',
      more_help: 'Need more help?'
    },
    groups: {
      getting_started: { title: 'Getting started' },
      services_pricing: { title: 'Services & pricing' },
      project_delivery: { title: 'Project & delivery' },
      tech_hosting: { title: 'Tech & hosting' },
      billing: { title: 'Billing' },
      contact: { title: 'Contact' }
    },
    articles: {
      'getting-started': { title: 'How do I get started with a project?', category: 'Getting started' },
      pricing: { title: 'How much does a website cost?', category: 'Services & pricing' },
      process: { title: 'What does the end‑to‑end process look like?', category: 'Project & delivery' },
      tech: { title: 'What stack and hosting do you use?', category: 'Tech & hosting' },
      billing: { title: 'How does billing and payment work?', category: 'Billing' },
      'contact-support': { title: 'How do I reach support?', category: 'Contact' },
      requirements: { title: 'What do you need from us?', category: 'Getting started' },
      scope: { title: 'What’s included in the packages?', category: 'Services & pricing' },
      addons: { title: 'Add‑ons & post‑purchase', category: 'Services & pricing' },
      quality: { title: 'Quality & testing', category: 'Project & delivery' },
      handover: { title: 'Launch & handover', category: 'Project & delivery' },
      performance: { title: 'Performance & SEO', category: 'Tech & hosting' },
      security: { title: 'Security & backup', category: 'Tech & hosting' },
      payments: { title: 'Payment methods', category: 'Billing' },
      terms: { title: 'Contracts & termination', category: 'Billing' },
      slas: { title: 'Response times (SLA)', category: 'Contact' },
      book: { title: 'Book a call', category: 'Contact' }
    },
    answers: {
      more_info: 'More information',
      fallback: 'Details coming soon.',
      'getting-started': {
        title: 'Project kickoff & onboarding',
        paragraphs: [
          'Start by describing your goals, audience, and key business requirements. We’ll return with a recommended solution, timeline, and pricing model.',
          'At kickoff we set up a shared channel (e.g., Slack) and align scope and priorities.'
        ]
      },
      pricing: {
        title: 'Pricing models',
        paragraphs: [
          'Fixed packages when deliverables are clear; time & materials for iterative development.',
          'All models include QA, release support, and project management within a reasonable scope.'
        ]
      },
      process: {
        title: 'Design & development process',
        paragraphs: [
          'Discovery → Design → Development → Testing → Launch → Support.',
          'We work transparently with demo check‑ins and short iterations for fast feedback.'
        ]
      },
      requirements: {
        title: 'What we need from you',
        paragraphs: [
          'Assets like logo, brand guidelines, existing content, and any references.',
          'Access for integrations (API keys, etc.) and a contact for quick decisions.'
        ]
      },
      scope: {
        title: 'What’s included in the packages?',
        paragraphs: [
          'Deliverables are specified in the quote/SoW: pages, views, features, integrations, and handover.',
          'Add‑ons can be added as needed.'
        ]
      },
      addons: {
        title: 'Add‑ons & post‑purchase',
        paragraphs: [
          'Examples: extra languages, more page templates, growth experiments, A/B testing, extended SEO.',
          'Support and improvement plans can be subscribed to on an ongoing basis.'
        ]
      },
      quality: {
        title: 'Quality & testing',
        paragraphs: [
          'We run automated and manual tests plus performance and accessibility checks.',
          'Bugs found within the agreed window are fixed at no extra cost.'
        ]
      },
      handover: {
        title: 'Launch & handover',
        paragraphs: [
          'Release plan with rollback strategy, documentation, and knowledge transfer included.',
          'We also offer post‑launch follow‑up and measurement.'
        ]
      },
      tech: {
        title: 'Stack & tools',
        paragraphs: [
          'Modern web stack (e.g., SvelteKit) focused on performance, security, and DX.',
          'Hosting is chosen based on requirements: edge/CDN or containerized environments.'
        ]
      },
      performance: {
        title: 'Performance & SEO',
        paragraphs: [
          'Core Web Vitals, image optimization, and caching as standard.',
          'Technical SEO and structured data are implemented when relevant.'
        ]
      },
      security: {
        title: 'Security & backup',
        paragraphs: [
          'Secure dependencies, protection against common attacks, and role‑based access.',
          'Backup and restore procedures per agreed RPO/RTO.'
        ]
      },
      billing: {
        title: 'Billing cadence',
        paragraphs: [
          'Monthly in arrears or per milestone. 30 days net by default.',
          'Unused time may be credited according to the agreement.'
        ]
      },
      payments: {
        title: 'Payment methods',
        paragraphs: [
          'Bank transfer, card, or international wire depending on entity.',
          'Invoice specification includes time logs and deliverables per period.'
        ]
      },
      terms: {
        title: 'Contracts & termination',
        paragraphs: [
          'Terms and notice periods are stated in the Customer Agreement/SoW.',
          'Work may be paused for late payment after notice, in line with the terms.'
        ]
      },
      'contact-support': {
        title: 'Support channels',
        paragraphs: [
          'Email info@yntra.se for all requests. A dedicated Slack channel is used for ongoing projects.',
          'Urgent incidents are prioritized according to the agreed SLA.'
        ]
      },
      slas: {
        title: 'Response times (SLA)',
        paragraphs: [
          'Standard requests: reply within 1 business day. Urgent: immediate acknowledgment and action plan.',
          'Availability and on‑call can be included in support plans.'
        ]
      },
      book: {
        title: 'Book a call',
        paragraphs: [
          'Pick a time that suits you. We’ll review needs, scope, and next steps.',
          'The booking creates a calendar invite and confirmation by email.'
        ]
      }
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'How fast do you respond to new inquiries?', a: 'Typically within 1 business day. Urgent requests are handled faster.' },
        { q: 'Do you include warranty and bug fixes after delivery?', a: 'Yes — within the agreed window we fix issues at no extra cost.' },
        { q: 'Can you work with an existing codebase/design?', a: 'Absolutely. We do a quick technical/UX review and recommend the best path forward.' },
        { q: 'How do you handle change requests during a project?', a: 'We prioritize in the backlog and estimate impact. Smaller adjustments often fit into a sprint.' },
        { q: 'Do you offer ongoing support after launch?', a: 'Yes — flexible support plans (SLA, improvements, monitoring, and incident handling).' }
      ]
    },
    cta: {
      title: 'Can’t find what you’re looking for?',
      subtitle: 'Our team is happy to answer questions and guide you to the right solution.',
      contact: 'Contact us',
      book_call: 'Schedule a call'
    },
    actions: {
      close: 'Close'
    }
  }
};
