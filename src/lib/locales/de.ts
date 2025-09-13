import base from './de.json';

export default {
  ...base,
  nav: { ...(base as any).nav, helpcenter: 'Hilfe-Center' },
  footer: {
    ...(base as any).footer,
    resource_links: [
      ...(((base as any).footer?.resource_links) ?? []),
      'Nutzungsbedingungen'
    ]
  },
  design: {
    title: 'Design',
    meta_description: 'Wir gestalten klare, markenstarke Erlebnisse fÃ¼r Web und Apps â€” von Research bis zum produktionsreifen Designsystem.',
    badge: 'Designâ€‘Expertise',
    hero: 'Jahrelange Erfahrung in UX/UI und markenorientiertem Design fÃ¼r Websites und geschÃ¤ftskritische Apps. Wir kombinieren Research, klare Flows und konsistentes UI zu LÃ¶sungen, die besser konvertieren und sich richtig anfÃ¼hlen.',
    cta_primary: 'Ãœber Design sprechen',
    s1: {
      title: 'Was wir gestalten',
      intro: 'Von Marketingâ€‘Websites bis zu Produktâ€‘Interfaces und Designsystemen â€” wir liefern konsistentes, skalierbares Design fÃ¼r den Alltag.',
      web: { title: 'Websites', desc: 'Marketing, Kampagnen und Corporateâ€‘Sites, die schnell laden und konvertieren.' },
      apps: { title: 'Systeme & Apps', desc: 'Dashboards, interne Tools und Portale â€“ klar und effizient.' },
      brand: { title: 'Brand & UI', desc: 'Visuelle IdentitÃ¤t, TonalitÃ¤t und UIâ€‘Komponenten, die das Ganze stÃ¤rken.' },
      systems: { title: 'Designsysteme', desc: 'Tokens, Komponentenbibliotheken und Guidelines fÃ¼r Tempo und QualitÃ¤t.' }
    },
    s2: {
      title: 'Unsere Prinzipien',
      items: [
        'Klarheit zuerst â€” jedes Screen mit klarem Ziel',
        'Konsistenz & Skalierung â€” gemeinsame Muster, schnellere Teams',
        'Performance & GefÃ¼hl â€” schnelle, leicht navigierbare Erlebnisse',
        'Barrierefreiheit (WCAG) â€” Design fÃ¼r alle Nutzer'
      ]
    },
    s3: {
      title: 'Designprozess kurz & bÃ¼ndig',
      steps: [
        { title: 'Research & Definition', desc: 'Ziele, Nutzer, Markt und Rahmen. Wir definieren Problem und Erfolg.' },
        { title: 'Flows & Wireframes', desc: 'Taskâ€‘Flows und Lowâ€‘Fidelity fÃ¼r frÃ¼he Entscheidungen und Feedback.' },
        { title: 'UI & Prototyp', desc: 'Visuelle Exploration, Komponenten und interaktiver Prototyp zur Validierung.' },
        { title: 'Designsystem & Handover', desc: 'Tokens, Richtlinien, Doku und Support wÃ¤hrend der Implementierung.' }
      ]
    },
    cta_title: 'Bereit fÃ¼r besseres Design?',
    cta_desc: 'ErzÃ¤hlen Sie uns Zielgruppe und Herausforderung â€” wir schlagen einen pragmatischen, lauffÃ¤higen Plan vor.',
    tools_title: 'Tools & Deliverables'
  },
  system: {
    title: 'Applikationen',
    meta_description: 'Wir konzipieren und entwickeln Applikationen fÃ¼r Mobile, Web und Enterprise â€“ maÃŸgeschneidert.',
    badge: 'Applikationen',
    hero: 'Wir bauen moderne Applikationen: Mobile (iOS/Android), Web und Desktop. Robuster Code, starke UX und sinnvolle Integrationen.',
    cta_primary: 'Ãœber Applikationen sprechen',
    s1: {
      title: 'Was wir bauen',
      intro: 'Mobile Apps, Webâ€‘Apps und Enterpriseâ€‘Applikationen â€“ von der Idee bis zum Launch und Betrieb.',
      internal: { title: 'Mobile Applikationen', desc: 'iOS/Android mit Webâ€‘Nativeâ€‘Wrappers (z.â€¯B. Capacitor/Tauri) fÃ¼r Offline, Push und Performance.' },
      automation: { title: 'Webâ€‘Applikationen', desc: 'Portale, Dashboards, Buchung, Commerce und Echtzeitâ€‘Flows, die skalieren.' },
      enterprise: { title: 'Enterpriseâ€‘Applikationen', desc: 'RBAC, SSO, Auditâ€‘Trails, Skalierbarkeit und verlÃ¤sslicher Betrieb (CI/CD + Monitoring).' },
      custom: { title: 'Integrationen & Automatisierung', desc: 'ERP/CRMâ€‘Integrationen, Payments, Datenpipelines und Backgroundâ€‘Jobs.' }
    },
    s2: {
      title: 'Warum fÃ¼r Applikationen',
      items: [
        'LangjÃ¤hrige Erfahrung mit komplexen Applikationen in Produktion',
        'ZuverlÃ¤ssigkeit: Tests, Logging, Monitoring und Routinen',
        'Sicherheit und Zugriffe von Beginn an (Leastâ€‘Privilege)',
        'Klare Doku und nachhaltige Wartbarkeit'
      ]
    },
    s3: {
      title: 'Lieferung & Technik',
      stack_title: 'Technologieâ€‘Stack',
      stack_text: 'SvelteKit/Node fÃ¼rs Web; Webâ€‘Nativeâ€‘Wrappers (Capacitor/Tauri) fÃ¼r Mobile/Desktop. APIâ€‘First, starke Typisierung, CI/CD und Cloudâ€‘Ops â€“ pragmatisch passend.',
      delivery_title: 'Vorgehen',
      delivery_text: 'Kurze Iterationen, wÃ¶chentliche Demos, Previewâ€‘Umgebungen und Transparenz. FrÃ¼her und hÃ¤ufiger Mehrwert.'
    },
    stats: {
      years: '10+ Jahre', years_label: 'Erfahrung',
      projects: '100+', projects_label: 'Systeme geliefert',
      uptime: '99.9%', uptime_label: 'Typische VerfÃ¼gbarkeit'
    },
    cta_title: 'Bereit fÃ¼r Ihr nÃ¤chstes System?',
    cta_desc: 'Teilen Sie Prozesse und Ziele â€” wir schlagen eine LÃ¶sung vor, die startet und skaliert.'
  },
  process: {
    title: 'Unser Prozess',
    subtitle: 'Von der Idee bis zum Launch â€” transparent, effizient und mit QualitÃ¤t in jedem Schritt.',
    overview: {
      title: 'Ein Fokus: Ergebnisse ohne Reibung',
      text: 'Wir fÃ¼hren Sie mit einem klaren, transparenten Prozess von der Idee bis zum Launch â€“ mit minimalem Risiko und hohem Tempo. WÃ¶chentliche sichtbare Ergebnisse, kurze Entscheidungszyklen und ein Team, das Gesamtverantwortung trÃ¤gt: Design, Entwicklung, Integrationen, Tests und Handover.',
      points: [
        'Kurze Iterationen mit wÃ¶chentlichen Demos',
        'Nachvollziehbarer Backlog und klare Deliverables',
        'Barrierefreiheit, Performance und Sicherheit von Anfang an',
        'Handover und Dokumentation fÃ¼r langfristiges Ownership'
      ]
    },
    timeline_title: 'Schritt fÃ¼r Schritt',
    durations: {
      discovery: 'Discovery',
      design: 'Design',
      build: 'Entwickeln',
      integrate: 'Integrieren',
      test: 'Testen & Optimieren',
      launch: 'Launch & Support'
    },
    timeframes: {
      title: 'Typische Zeitrahmen',
      marketing_title: 'Marketingâ€‘Website',
      marketing_desc: '4â€“8 Wochen â€” abhÃ¤ngig von Seitenanzahl, Inhalten und Integrationen.',
      product_title: 'System/App',
      product_desc: '6â€“12+ Wochen â€” abhÃ¤ngig von KomplexitÃ¤t, Datenmodell und externen AbhÃ¤ngigkeiten.'
    },
    collaboration: {
      title: 'Zusammenarbeit & Kommunikation',
      items: [
        'WÃ¶chentliche Meetings + Demos',
        'Asynchrone Updates und Release Notes',
        'Ein Ansprechpartner, schnelles Feedback',
        'Zugriff auf Backlog und Issues'
      ]
    },
    quality: {
      title: 'QualitÃ¤t & Sicherheit',
      items: [
        'Codeâ€‘Reviews, CIâ€‘Checks und Staging',
        'Barrierefreiheit (WCAG), Performance und SEOâ€‘Basics',
        'Sichere AbhÃ¤ngigkeiten und Updateâ€‘Routinen',
        'Rollen, Zugriffe und Backupâ€‘Strategie'
      ]
    },
    details: {
      discovery: ['Ziele & KPIs', 'Sitemap/Flows', 'Backlog/SoW', 'Plan & Risiken'],
      design: ['Wireframes', 'UIâ€‘Mockups', 'Komponentenbibliothek', 'Interaktiver Prototyp'],
      build: ['Fertige Views/Komponenten', 'APIâ€‘Integrationen', 'Release Notes', 'WÃ¶chentliche Demos'],
      integrate: ['Konfigurierte Integrationen', 'Testdaten & Umgebungen', 'Technische Dokumentation'],
      test: ['Checkliste & Bugfixing', 'Lighthouse/A11yâ€‘Reports'],
      launch: ['Betriebsâ€‘ & Backupâ€‘Prozesse', 'Abschlussdokumentation']
    },
    pricing: {
      title: 'Preise & Vorgehen',
      fixed_title: 'Festpreis',
      fixed_desc: 'Wenn der Scope klar definiert ist. Angebot mit Deliverables, Meilensteinen und Terminen.',
      tm_title: 'Zeit & Material',
      tm_desc: 'FÃ¼r iterative Entwicklung. WÃ¶chentliche Reports und klare PrioritÃ¤ten.'
    },
    cta: {
      title: 'Bereit, gemeinsam zu bauen?',
      desc: 'ErzÃ¤hlen Sie uns Ihre Ziele. Wir schlagen einen pragmatischen Plan vor, der Tempo, QualitÃ¤t und Budget ausbalanciert â€” und liefern.',
      contact: 'Kontakt aufnehmen'
    }
  },
  terms: {
    title: 'Nutzungsbedingungen',
    meta_description: 'Bedingungen, die Ihre Nutzung der Website und Dienste von Yntra regeln.',
    hero: 'Bitte lesen Sie diese Bedingungen sorgfÃ¤ltig. Durch den Besuch der Website oder die Nutzung unserer Dienste stimmen Sie ihnen zu.',
    last_updated_label: 'Zuletzt aktualisiert',
    intro_card:
      'Diese Nutzungsbedingungen ("Bedingungen") regeln Ihren Zugriff auf die Website von Yntra und die von uns angebotenen Dienste. Wenn Sie die Bedingungen im Namen eines Unternehmens akzeptieren, versichern Sie, dass Sie befugt sind, dieses Unternehmen zu binden. Wenn Sie die Bedingungen nicht akzeptieren, nutzen Sie bitte weder unsere Website noch unsere Dienste. Besteht eine separate, unterzeichnete Kundenvereinbarung ("Kundenvertrag"), hat diese im Konfliktfall Vorrang vor diesen Bedingungen.',
    s1: {
      title: '1. Zustimmung und Ã„nderungen',
      acceptance: {
        title: 'Zustimmung zu den Bedingungen',
        desc: 'Durch die Nutzung der Website und der Dienste akzeptieren Sie diese Bedingungen sowie unsere Datenschutzrichtlinie.'
      },
      changes: {
        title: 'Ã„nderungen der Bedingungen',
        desc: 'Wir kÃ¶nnen diese Bedingungen von Zeit zu Zeit aktualisieren. Ã„nderungen treten mit ihrer VerÃ¶ffentlichung in Kraft. Wenn Sie einen Kundenvertrag haben, bleibt dieser unberÃ¼hrt, sofern keine ausdrÃ¼ckliche schriftliche Zustimmung vorliegt.'
      }
    },
    s2: {
      title: '2. Dienste und Nutzung',
      intro: 'Sie verpflichten sich, unsere Dienste rechtmÃ¤ÃŸig und verantwortungsbewusst zu nutzen. Insbesondere verpflichten Sie sich dazu:',
      items: [
        'Richtige Angaben zu machen und diese aktuell zu halten',
        'Die Dienste nur fÃ¼r rechtmÃ¤ÃŸige Zwecke und im Einklang mit diesen Bedingungen zu verwenden',
        'Angemessene Nutzungsgrenzen und unsere Anweisungen einzuhalten',
        'Nicht zu versuchen, unsere Systeme zu stÃ¶ren, zurÃ¼ckzuentwickeln oder sich unbefugten Zugang zu verschaffen'
      ]
    },
    s3: {
      title: '3. Bestellungen, GebÃ¼hren und Zahlungen',
      summary: 'Angebote, Leistungsbeschreibungen oder Bestellungen legen Umfang, LiefergegenstÃ¤nde, ZeitplÃ¤ne und Preise fest.',
      includes: 'Sofern im Kundenvertrag nicht anders vereinbart:',
      items: {
        quotes: 'Angebote/Bestellungen: Umfang, Annahmen, LiefergegenstÃ¤nde, wichtige Termine, Abnahmekriterien',
        invoicing: 'Rechnungsstellung: erfolgt bei Erreichen von Meilensteinen oder monatlich nachtrÃ¤glich',
        late: 'VerspÃ¤tete Zahlungen: kÃ¶nnen Zinsen und/oder eine Unterbrechung der Arbeiten nach vorheriger Mitteilung nach sich ziehen'
      }
    },
    s4: {
      title: '4. Geistiges Eigentum',
      text: 'Yntra behÃ¤lt das Eigentum an vorbestehendem Material, Know-how und Werkzeugen. Nach vollstÃ¤ndiger Zahlung erhalten Sie eine weltweite, nicht-exklusive Lizenz zur Nutzung der LiefergegenstÃ¤nde fÃ¼r interne GeschÃ¤ftszwecke. Wenn ein Kundenvertrag ausdrÃ¼cklich die Ãœbertragung von Rechten vorsieht, hat dieser Vorrang. Drittkomponenten unterliegen stets ihren jeweiligen Lizenzen.'
    },
    s5: {
      title: '5. Vertraulichkeit und Datenschutz',
      intro: 'Die Parteien kÃ¶nnen vertrauliche Informationen austauschen. Jede Partei verpflichtet sich dazu:',
      items: [
        'Die vertraulichen Informationen der anderen Partei nur zur ErfÃ¼llung der Verpflichtungen gemÃ¤ÃŸ diesen Bedingungen zu verwenden',
        'Solche Informationen mit angemessener Sorgfalt zu schÃ¼tzen und nicht an Dritte weiterzugeben',
        'Vertrauliche Informationen auf Anfrage zurÃ¼ckzugeben oder zu lÃ¶schen, es sei denn, die Aufbewahrung ist gesetzlich vorgeschrieben',
        'Personenbezogene Daten gemÃ¤ÃŸ den geltenden Datenschutzgesetzen zu verarbeiten'
      ],
      contact_hint: 'Fragen zur Datenverarbeitung? Kontaktieren Sie uns unter'
    },
    s6: {
      title: '6. ZulÃ¤ssige Nutzung',
      text: 'Sie dÃ¼rfen die Website oder Dienste nicht nutzen, um: schÃ¤dlichen Code hochzuladen, Rechte an geistigem Eigentum zu verletzen, die PrivatsphÃ¤re zu verletzen, andere zu belÃ¤stigen oder zu schÃ¤digen oder anderweitig die IntegritÃ¤t oder Sicherheit der Dienste zu gefÃ¤hrden.'
    },
    s7: {
      title: '7. Dienste Dritter',
      text: 'Unsere LiefergegenstÃ¤nde kÃ¶nnen Dienste oder Bibliotheken Dritter integrieren. Wir sind nicht verantwortlich fÃ¼r Inhalte, Richtlinien oder Leistungen Dritter. Die Nutzung solcher Dienste unterliegt deren eigenen Bedingungen.'
    },
    s8: {
      title: '8. GewÃ¤hrleistungen und HaftungsausschlÃ¼sse',
      text: 'Sofern im Kundenvertrag nicht ausdrÃ¼cklich anders angegeben, werden die Website und Dienste "wie besehen" und "wie verfÃ¼gbar" bereitgestellt. Wir schlieÃŸen stillschweigende GewÃ¤hrleistungen, einschlieÃŸlich der MarktgÃ¤ngigkeit, Eignung fÃ¼r einen bestimmten Zweck und Nichtverletzung von Rechten, aus.'
    },
    s9: {
      title: '9. Haftung und KÃ¼ndigung',
      text: 'Soweit gesetzlich zulÃ¤ssig, haftet Yntra nicht fÃ¼r indirekte, zufÃ¤llige oder FolgeschÃ¤den. Unsere Gesamthaftung ist auf die BetrÃ¤ge beschrÃ¤nkt, die Sie fÃ¼r die Dienste gezahlt haben, die den Anspruch begrÃ¼ndet haben, und zwar wÃ¤hrend der letzten sechs (6) Monate, sofern im Kundenvertrag nicht anders festgelegt. Wir kÃ¶nnen den Zugang bei Vertragsverletzungen aussetzen oder beenden. Sie kÃ¶nnen mit schriftlicher Mitteilung kÃ¼ndigen; bereits erbrachte Leistungen und nicht kÃ¼ndbare Verpflichtungen sind zu bezahlen. Wenn ein Kundenvertrag bestimmte KÃ¼ndigungsfristen vorsieht, haben diese Vorrang.'
    },
    s10: {
      title: '10. Anwendbares Recht und Streitigkeiten',
      text: 'Diese Bedingungen unterliegen schwedischem Recht und dem anwendbaren EU-Recht unter Ausschluss von Kollisionsnormen. Streitigkeiten sind zunÃ¤chst durch Verhandlungen beizulegen; andernfalls werden sie von den zustÃ¤ndigen Gerichten in Schweden entschieden, sofern im Kundenvertrag nichts anderes festgelegt ist.'
    },
    cta: {
      title: 'Fragen zu diesen Bedingungen?',
      desc: 'BenÃ¶tigen Sie Klarstellungen oder eine maÃŸgeschneiderte Vereinbarung? Kontaktieren Sie uns.',
      button: 'Kontakt aufnehmen'
    }
  },
  privacy: {
    title: 'DatenschutzerklÃ¤rung',
    meta_description: 'Wie Yntra Ihre personenbezogenen Daten erhebt, nutzt und schÃ¼tzt.',
    hero: 'Wie wir Ihre personenbezogenen Daten verarbeiten, wenn Sie unsere Website besuchen oder unsere Dienste nutzen.',
    last_updated_label: 'Zuletzt aktualisiert',
    intro_card:
      'Wir schÃ¤tzen Ihre PrivatsphÃ¤re und schÃ¼tzen Ihre personenbezogenen Daten. Diese DatenschutzerklÃ¤rung erlÃ¤utert, wie wir Ihre Informationen erfassen, verwenden und schÃ¼tzen, wenn Sie unsere Website besuchen oder unsere Dienste nutzen.',
    s1: {
      title: '1. Welche Daten wir erheben',
      intro: 'Wir kÃ¶nnen folgende Daten erheben:',
      personal: {
        title: 'Personenbezogene Daten',
        desc: 'Zum Beispiel Name, E-Mail-Adresse, Telefonnummer und Unternehmensangaben, wenn Sie uns kontaktieren oder eine Leistung anfordern.'
      },
      technical: {
        title: 'Technische Informationen',
        desc: 'Zum Beispiel IP-Adresse, Browsertyp, GerÃ¤teinformationen sowie Nutzungsdaten, die automatisch erfasst werden, wenn Sie unsere Website verwenden.'
      }
    },
    s2: {
      title: '2. Wie wir die Daten verwenden',
      intro: 'Wir verwenden die Daten, um:',
      items: [
        'Unsere Dienste bereitzustellen, zu betreiben und zu verbessern',
        'Mit Ihnen zu Anfragen, Projekten und Support zu kommunizieren',
        'Die Website-Nutzung zu analysieren und die Nutzererfahrung zu verbessern',
        'Gesetzlichen Verpflichtungen nachzukommen'
      ]
    },
    s3: {
      title: '3. Weitergabe von Daten',
      dont_sell: 'Wir verkaufen, tauschen oder vermieten Ihre personenbezogenen Daten nicht.',
      only_share_with: 'Wir geben Daten nur weiter an:',
      items: {
        providers: 'VertrauenswÃ¼rdige Dienstleister, die uns beim Betrieb der Website und der Erbringung von Leistungen unterstÃ¼tzen.',
        legal: 'BehÃ¶rden, wenn dies gesetzlich erforderlich ist oder um unsere Rechte zu schÃ¼tzen.'
      }
    },
    s4: {
      title: '4. Datensicherheit',
      text: 'Wir ergreifen geeignete technische und organisatorische MaÃŸnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Ã„nderung, Verlust oder LÃ¶schung zu schÃ¼tzen.'
    },
    s5: {
      title: '5. Ihre Rechte',
      intro: 'Je nach Wohnsitz haben Sie mÃ¶glicherweise folgende Rechte:',
      items: [
        'Zugriff auf Ihre personenbezogenen Daten zu erhalten, diese zu berichtigen oder zu lÃ¶schen',
        'Der Verarbeitung zu widersprechen oder sie einzuschrÃ¤nken',
        'DatenÃ¼bertragbarkeit zu verlangen',
        'Eine Einwilligung jederzeit zu widerrufen'
      ],
      contact_hint: 'Zur AusÃ¼bung dieser Rechte kontaktieren Sie uns unter'
    },
    s6: {
      title: '6. Cookies',
      text: 'Diese Website verwendet keine Cookies oder Ã¤hnliche Tracking-Technologien. Wir speichern oder sammeln keine Informationen Ã¼ber Ihren Besuch durch solche Methoden.'
    },
    s7: {
      title: '7. Ã„nderungen dieser Richtlinie',
      text: 'Wir kÃ¶nnen diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Die jeweils aktuelle Version wird stets auf dieser Seite zusammen mit dem Datum der letzten Aktualisierung verÃ¶ffentlicht. Sollten wir wesentliche Ã„nderungen vornehmen, die sich auf die Verarbeitung Ihrer personenbezogenen Daten auswirken, werden wir Sie in geeigneter Weise informieren, zum Beispiel per E-Mail oder auf unserer Website.'
    },
    s8: {
      title: '8. Aufbewahrung von Daten',
      text: 'Wir bewahren personenbezogene Daten nur so lange auf, wie es zur ErfÃ¼llung der in dieser DatenschutzerklÃ¤rung beschriebenen Zwecke erforderlich ist, es sei denn, eine lÃ¤ngere Aufbewahrungsfrist ist gesetzlich vorgeschrieben oder zulÃ¤ssig.'
    },
    cta: {
      title: 'Fragen zu dieser Richtlinie?',
      desc: 'Wenn Sie Fragen zu dieser DatenschutzerklÃ¤rung haben, kontaktieren Sie uns gerne.',
      button: 'Kontaktieren Sie uns'
    }
  },
  help: {
    meta_title: 'Hilfe-Center â€” Yntra',
    meta_description: 'Finden Sie Antworten, Anleitungen und Ressourcen, um mit Yntra erfolgreich zu starten.',
    title: 'Hilfe-Center',
    subtitle: 'Schnelle Antworten auf hÃ¤ufige Fragen, Anleitungen lesen und UnterstÃ¼tzung erhalten â€“ genau dann, wenn Sie sie brauchen.',
    search_open_aria: 'Suche Ã¶ffnen',
    search_input_aria: 'Im Hilfe-Center suchen',
    search_placeholder: 'Im Hilfe-Center suchenâ€¦',
    search_suggestions_aria: 'SuchvorschlÃ¤ge',
    categories: {
      title: 'Kategorien erkunden',
      subtitle: 'Die wichtigsten Themen gebÃ¼ndelt: Einstieg, Preise und unsere Lieferung.',
      more_help: 'Weitere Hilfe benÃ¶tigt?'
    },
    groups: {
      getting_started: { title: 'Erste Schritte' },
      services_pricing: { title: 'Leistungen & Preise' },
      project_delivery: { title: 'Projekt & Lieferung' },
      tech_hosting: { title: 'Technik & Hosting' },
      billing: { title: 'Abrechnung' },
      contact: { title: 'Kontakt' }
    },
    articles: {
      'getting-started': { title: 'Wie starte ich ein Projekt?', category: 'Erste Schritte' },
      pricing: { title: 'Was kostet eine Website?', category: 'Leistungen & Preise' },
      process: { title: 'Wie sieht der End-to-End-Prozess aus?', category: 'Projekt & Lieferung' },
      tech: { title: 'Welche Technik und welches Hosting nutzt ihr?', category: 'Technik & Hosting' },
      billing: { title: 'Wie funktionieren Abrechnung und Zahlung?', category: 'Abrechnung' },
      'contact-support': { title: 'Wie erreiche ich den Support?', category: 'Kontakt' },
      requirements: { title: 'Was benÃ¶tigt ihr von uns?', category: 'Erste Schritte' },
      scope: { title: 'Was ist in den Paketen enthalten?', category: 'Leistungen & Preise' },
      addons: { title: 'Add-ons & Nachkauf', category: 'Leistungen & Preise' },
      quality: { title: 'QualitÃ¤t & Tests', category: 'Projekt & Lieferung' },
      handover: { title: 'Launch & Ãœbergabe', category: 'Projekt & Lieferung' },
      performance: { title: 'Performance & SEO', category: 'Technik & Hosting' },
      security: { title: 'Sicherheit & Backups', category: 'Technik & Hosting' },
      payments: { title: 'Zahlungsarten', category: 'Abrechnung' },
      terms: { title: 'VertrÃ¤ge & KÃ¼ndigung', category: 'Abrechnung' },
      slas: { title: 'Reaktionszeiten (SLA)', category: 'Kontakt' },
      book: { title: 'Termin buchen', category: 'Kontakt' }
    },
    answers: {
      more_info: 'Mehr Informationen',
      fallback: 'Details folgen in KÃ¼rze.',
      'getting-started': {
        title: 'Projektstart & Onboarding',
        paragraphs: [
          'Beschreiben Sie Ziele, Zielgruppe und wichtigste GeschÃ¤ftsanforderungen. Wir melden uns mit empfohlener LÃ¶sung, Zeitplan und Preismodell.',
          'Zum Start richten wir einen gemeinsamen Kanal (z. B. Slack) ein und stimmen Scope und PrioritÃ¤ten ab.'
        ]
      },
      pricing: {
        title: 'Preismodelle',
        paragraphs: [
          'Fixe Pakete bei klaren Deliverables; Time & Material fÃ¼r iterative Entwicklung.',
          'Alle Modelle beinhalten QA, Releaseâ€‘Support und Projektleitung im angemessenen Umfang.'
        ]
      },
      process: {
        title: 'Designâ€‘ & Entwicklungsprozess',
        paragraphs: [
          'Discovery â†’ Design â†’ Entwicklung â†’ Test â†’ Launch â†’ Support.',
          'Transparente Arbeit mit Demos und kurzen Iterationen fÃ¼r schnelles Feedback.'
        ]
      },
      requirements: {
        title: 'Was wir von Ihnen benÃ¶tigen',
        paragraphs: [
          'Assets wie Logo, Brand-Guidelines, bestehende Inhalte und Referenzen.',
          'ZugÃ¤nge fÃ¼r Integrationen (APIâ€‘Keys etc.) und eine Kontaktperson fÃ¼r schnelle Entscheidungen.'
        ]
      },
      scope: {
        title: 'Inhalte der Pakete',
        paragraphs: [
          'Deliverables laut Angebot/SoW: Seiten, Views, Funktionen, Integrationen und Ãœbergabe.',
          'Addâ€‘ons kÃ¶nnen bei Bedarf ergÃ¤nzt werden.'
        ]
      },
      addons: {
        title: 'Add-ons & Nachkauf',
        paragraphs: [
          'Beispiele: zusÃ¤tzliche Sprachen, mehr Seitentemplates, Growthâ€‘Experimente, A/Bâ€‘Tests, erweiterte SEO.',
          'Laufende Supportâ€‘ und Verbesserungspakete sind mÃ¶glich.'
        ]
      },
      quality: {
        title: 'QualitÃ¤t & Tests',
        paragraphs: [
          'Automatisierte und manuelle Tests sowie Performanceâ€‘ und Accessibilityâ€‘Checks.',
          'Fehler im vereinbarten Zeitraum werden ohne Zusatzkosten behoben.'
        ]
      },
      handover: {
        title: 'Launch & Ãœbergabe',
        paragraphs: [
          'Releaseâ€‘Plan mit Rollbackâ€‘Strategie, Dokumentation und WissensÃ¼bergabe.',
          'Optional: Followâ€‘up und Messung nach dem Launch.'
        ]
      },
      tech: {
        title: 'Stack & Tools',
        paragraphs: [
          'Moderner Webâ€‘Stack (z. B. SvelteKit) mit Fokus auf Performance, Sicherheit und DX.',
          'Hosting je nach Anforderung: Edge/CDN oder containerisierte Umgebungen.'
        ]
      },
      performance: {
        title: 'Performance & SEO',
        paragraphs: [
          'Core Web Vitals, Bildoptimierung und Caching als Standard.',
          'Technische SEO und strukturierte Daten bei Bedarf.'
        ]
      },
      security: {
        title: 'Sicherheit & Backups',
        paragraphs: [
          'Sichere AbhÃ¤ngigkeiten, Schutz gegen gÃ¤ngige Angriffe, rollenbasierter Zugriff.',
          'Backupâ€‘ und Restoreâ€‘Prozesse gemÃ¤ÃŸ vereinbartem RPO/RTO.'
        ]
      },
      billing: {
        title: 'Abrechnungsrhythmus',
        paragraphs: [
          'Monatlich im Nachgang oder pro Meilenstein. Standard: 30 Tage netto.',
          'Nicht genutzte Zeit kann gemÃ¤ÃŸ Vereinbarung verrechnet werden.'
        ]
      },
      payments: {
        title: 'Zahlungsarten',
        paragraphs: [
          'Ãœberweisung, Karte oder internationale Zahlung â€“ abhÃ¤ngig von der Gesellschaft.',
          'Die Rechnung enthÃ¤lt Zeiten und Deliverables pro Zeitraum.'
        ]
      },
      terms: {
        title: 'VertrÃ¤ge & KÃ¼ndigung',
        paragraphs: [
          'Konditionen und KÃ¼ndigungsfristen stehen im Kundenvertrag/SoW.',
          'Arbeiten kÃ¶nnen bei Zahlungsverzug nach AnkÃ¼ndigung pausiert werden.'
        ]
      },
      'contact-support': {
        title: 'Supportâ€‘KanÃ¤le',
        paragraphs: [
          'Eâ€‘Mail an info@yntra.se fÃ¼r alle Anfragen. FÃ¼r laufende Projekte nutzen wir einen dedizierten Slackâ€‘Kanal.',
          'Dringende Incidents werden gemÃ¤ÃŸ vereinbartem SLA priorisiert.'
        ]
      },
      slas: {
        title: 'Reaktionszeiten (SLA)',
        paragraphs: [
          'Standardâ€‘Anfragen: Antwort binnen 1 Werktag. Dringend: sofortige BestÃ¤tigung und Aktionsplan.',
          'VerfÃ¼gbarkeit und Rufbereitschaft sind als Supportâ€‘Pakete mÃ¶glich.'
        ]
      },
      book: {
        title: 'Termin buchen',
        paragraphs: [
          'WÃ¤hlen Sie einen passenden Termin. Wir besprechen Bedarf, Scope und nÃ¤chste Schritte.',
          'Sie erhalten eine Kalendereinladung und BestÃ¤tigung per Eâ€‘Mail.'
        ]
      }
    },
    faq: {
      title: 'HÃ¤ufige Fragen',
      items: [
        { q: 'Wie schnell reagiert ihr auf neue Anfragen?', a: 'In der Regel innerhalb eines Werktags. Dringendes schneller.' },
        { q: 'Gibt es Garantie und Bugfixes nach der Lieferung?', a: 'Ja â€” im vereinbarten Zeitraum beheben wir Fehler ohne Mehrkosten.' },
        { q: 'Arbeitet ihr mit bestehendem Code/Design?', a: 'Ja. Wir prÃ¼fen Technik/UX und empfehlen den besten Weg.' },
        { q: 'Wie handhabt ihr Change Requests im Projekt?', a: 'Wir priorisieren im Backlog und schÃ¤tzen die Auswirkungen. Kleine Ã„nderungen passen oft in einen Sprint.' },
        { q: 'Bietet ihr laufenden Support nach dem Launch?', a: 'Ja â€” flexible Supportâ€‘Pakete (SLA, Verbesserungen, Monitoring, Incidents).' }
      ]
    },
    cta: {
      title: 'Nicht gefunden, wonach du suchst?',
      subtitle: 'Unser Team beantwortet gern Fragen und leitet dich zur passenden LÃ¶sung.',
      contact: 'Kontakt aufnehmen',
      book_call: 'Anruf planen'
    },
    actions: {
      close: 'SchlieÃŸen'
    }
  },
  modal: {
    title: 'Kontakt aufnehmen',
    desc: 'Geben Sie ein paar Details an, wir melden uns zeitnah.',
    company_label: 'Firmenname',
    company_placeholder: 'Z. B. Yntra AB',
    tel_label: 'Telefon',
    tel_placeholder: 'Z. B. +46 70 123 45 67',
    email_label: 'Eâ€‘Mail',
    email_placeholder: 'Z. B. sie@unternehmen.com',
    message_label: 'Nachricht',
    message_placeholder: 'ErzÃ¤hlen Sie uns von Ihrem Projekt oder Ihrer Frage...',
    cancel: 'Abbrechen',
    send: 'Senden',
    privacy: 'Wir geben Ihre Daten niemals weiter.',
    close: 'SchlieÃŸen'
  },
  schedule: {
    title: 'Termin buchen',
    desc: 'WÃ¤hlen Sie eine passende Zeit. Wir treffen uns online und besprechen Bedarf und nÃ¤chste Schritte.',
    length_label: 'Dauer',
    min: 'Min',
    type_label: 'Meetingâ€‘Typ',
    type_phone: 'Telefon',
    pick_time: 'Tag und Uhrzeit wÃ¤hlen',
    timezone_prefix: 'Zeiten in',
    custom_label: 'Anderesâ€¦',
    custom_pick_label: 'Datum wÃ¤hlen',
    no_slots: 'An diesem Tag sind keine Slots verfÃ¼gbar',
    name_label: 'Name',
    name_placeholder: 'z. B. Jane Doe',
    email_label: 'Eâ€‘Mail',
    email_placeholder: 'z. B. sie@unternehmen.com',
    company_label: 'Firma',
    company_placeholder: 'z. B. Yntra AB',
    tel_label: 'Telefon',
    tel_placeholder: 'Z. B. +46 70 123 45 67',
    notes_label: 'Notizen (optional)',
    notes_placeholder: 'Gibt es etwas Spezifisches?',
    cancel: 'Abbrechen',
    confirm: 'Buchung bestÃ¤tigen',
    privacy: 'Wir senden eine BestÃ¤tigung und Kalendereinladung.',
    close: 'SchlieÃŸen',
    select_time_required: 'Bitte wÃ¤hlen Sie einen Terminzeitpunkt.',
    prev_day: 'Vorheriger Tag',
    next_day: 'NÃ¤chster Tag',
    calendar_open: 'Kalender Ã¶ffnen',
    clear_date: 'Datum lÃ¶schen'
  }
};