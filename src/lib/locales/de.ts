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
  process: {
    title: 'Unser Prozess',
    subtitle: 'Von der Idee bis zum Launch — transparent, effizient und mit Qualität in jedem Schritt.',
    overview: {
      title: 'Ein Fokus: Ergebnisse ohne Reibung',
      text: 'Wir führen Sie mit einem klaren, transparenten Prozess von der Idee bis zum Launch – mit minimalem Risiko und hohem Tempo. Wöchentliche sichtbare Ergebnisse, kurze Entscheidungszyklen und ein Team, das Gesamtverantwortung trägt: Design, Entwicklung, Integrationen, Tests und Handover.',
      points: [
        'Kurze Iterationen mit wöchentlichen Demos',
        'Nachvollziehbarer Backlog und klare Deliverables',
        'Barrierefreiheit, Performance und Sicherheit von Anfang an',
        'Handover und Dokumentation für langfristiges Ownership'
      ]
    },
    timeline_title: 'Schritt für Schritt',
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
      marketing_title: 'Marketing‑Website',
      marketing_desc: '4–8 Wochen — abhängig von Seitenanzahl, Inhalten und Integrationen.',
      product_title: 'System/App',
      product_desc: '6–12+ Wochen — abhängig von Komplexität, Datenmodell und externen Abhängigkeiten.'
    },
    collaboration: {
      title: 'Zusammenarbeit & Kommunikation',
      items: [
        'Wöchentliche Meetings + Demos',
        'Asynchrone Updates und Release Notes',
        'Ein Ansprechpartner, schnelles Feedback',
        'Zugriff auf Backlog und Issues'
      ]
    },
    quality: {
      title: 'Qualität & Sicherheit',
      items: [
        'Code‑Reviews, CI‑Checks und Staging',
        'Barrierefreiheit (WCAG), Performance und SEO‑Basics',
        'Sichere Abhängigkeiten und Update‑Routinen',
        'Rollen, Zugriffe und Backup‑Strategie'
      ]
    },
    details: {
      discovery: ['Ziele & KPIs', 'Sitemap/Flows', 'Backlog/SoW', 'Plan & Risiken'],
      design: ['Wireframes', 'UI‑Mockups', 'Komponentenbibliothek', 'Interaktiver Prototyp'],
      build: ['Fertige Views/Komponenten', 'API‑Integrationen', 'Release Notes', 'Wöchentliche Demos'],
      integrate: ['Konfigurierte Integrationen', 'Testdaten & Umgebungen', 'Technische Dokumentation'],
      test: ['Checkliste & Bugfixing', 'Lighthouse/A11y‑Reports'],
      launch: ['Betriebs‑ & Backup‑Prozesse', 'Abschlussdokumentation']
    },
    pricing: {
      title: 'Preise & Vorgehen',
      fixed_title: 'Festpreis',
      fixed_desc: 'Wenn der Scope klar definiert ist. Angebot mit Deliverables, Meilensteinen und Terminen.',
      tm_title: 'Zeit & Material',
      tm_desc: 'Für iterative Entwicklung. Wöchentliche Reports und klare Prioritäten.'
    },
    cta: {
      title: 'Bereit, gemeinsam zu bauen?',
      desc: 'Erzählen Sie uns Ihre Ziele. Wir schlagen einen pragmatischen Plan vor, der Tempo, Qualität und Budget ausbalanciert — und liefern.',
      contact: 'Kontakt aufnehmen'
    }
  },
  terms: {
    title: 'Nutzungsbedingungen',
    meta_description: 'Bedingungen, die Ihre Nutzung der Website und Dienste von Yntra regeln.',
    hero: 'Bitte lesen Sie diese Bedingungen sorgfältig. Durch den Besuch der Website oder die Nutzung unserer Dienste stimmen Sie ihnen zu.',
    last_updated_label: 'Zuletzt aktualisiert',
    intro_card:
      'Diese Nutzungsbedingungen ("Bedingungen") regeln Ihren Zugriff auf die Website von Yntra und die von uns angebotenen Dienste. Wenn Sie die Bedingungen im Namen eines Unternehmens akzeptieren, versichern Sie, dass Sie befugt sind, dieses Unternehmen zu binden. Wenn Sie die Bedingungen nicht akzeptieren, nutzen Sie bitte weder unsere Website noch unsere Dienste. Besteht eine separate, unterzeichnete Kundenvereinbarung ("Kundenvertrag"), hat diese im Konfliktfall Vorrang vor diesen Bedingungen.',
    s1: {
      title: '1. Zustimmung und Änderungen',
      acceptance: {
        title: 'Zustimmung zu den Bedingungen',
        desc: 'Durch die Nutzung der Website und der Dienste akzeptieren Sie diese Bedingungen sowie unsere Datenschutzrichtlinie.'
      },
      changes: {
        title: 'Änderungen der Bedingungen',
        desc: 'Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Änderungen treten mit ihrer Veröffentlichung in Kraft. Wenn Sie einen Kundenvertrag haben, bleibt dieser unberührt, sofern keine ausdrückliche schriftliche Zustimmung vorliegt.'
      }
    },
    s2: {
      title: '2. Dienste und Nutzung',
      intro: 'Sie verpflichten sich, unsere Dienste rechtmäßig und verantwortungsbewusst zu nutzen. Insbesondere verpflichten Sie sich dazu:',
      items: [
        'Richtige Angaben zu machen und diese aktuell zu halten',
        'Die Dienste nur für rechtmäßige Zwecke und im Einklang mit diesen Bedingungen zu verwenden',
        'Angemessene Nutzungsgrenzen und unsere Anweisungen einzuhalten',
        'Nicht zu versuchen, unsere Systeme zu stören, zurückzuentwickeln oder sich unbefugten Zugang zu verschaffen'
      ]
    },
    s3: {
      title: '3. Bestellungen, Gebühren und Zahlungen',
      summary: 'Angebote, Leistungsbeschreibungen oder Bestellungen legen Umfang, Liefergegenstände, Zeitpläne und Preise fest.',
      includes: 'Sofern im Kundenvertrag nicht anders vereinbart:',
      items: {
        quotes: 'Angebote/Bestellungen: Umfang, Annahmen, Liefergegenstände, wichtige Termine, Abnahmekriterien',
        invoicing: 'Rechnungsstellung: erfolgt bei Erreichen von Meilensteinen oder monatlich nachträglich',
        late: 'Verspätete Zahlungen: können Zinsen und/oder eine Unterbrechung der Arbeiten nach vorheriger Mitteilung nach sich ziehen'
      }
    },
    s4: {
      title: '4. Geistiges Eigentum',
      text: 'Yntra behält das Eigentum an vorbestehendem Material, Know-how und Werkzeugen. Nach vollständiger Zahlung erhalten Sie eine weltweite, nicht-exklusive Lizenz zur Nutzung der Liefergegenstände für interne Geschäftszwecke. Wenn ein Kundenvertrag ausdrücklich die Übertragung von Rechten vorsieht, hat dieser Vorrang. Drittkomponenten unterliegen stets ihren jeweiligen Lizenzen.'
    },
    s5: {
      title: '5. Vertraulichkeit und Datenschutz',
      intro: 'Die Parteien können vertrauliche Informationen austauschen. Jede Partei verpflichtet sich dazu:',
      items: [
        'Die vertraulichen Informationen der anderen Partei nur zur Erfüllung der Verpflichtungen gemäß diesen Bedingungen zu verwenden',
        'Solche Informationen mit angemessener Sorgfalt zu schützen und nicht an Dritte weiterzugeben',
        'Vertrauliche Informationen auf Anfrage zurückzugeben oder zu löschen, es sei denn, die Aufbewahrung ist gesetzlich vorgeschrieben',
        'Personenbezogene Daten gemäß den geltenden Datenschutzgesetzen zu verarbeiten'
      ],
      contact_hint: 'Fragen zur Datenverarbeitung? Kontaktieren Sie uns unter'
    },
    s6: {
      title: '6. Zulässige Nutzung',
      text: 'Sie dürfen die Website oder Dienste nicht nutzen, um: schädlichen Code hochzuladen, Rechte an geistigem Eigentum zu verletzen, die Privatsphäre zu verletzen, andere zu belästigen oder zu schädigen oder anderweitig die Integrität oder Sicherheit der Dienste zu gefährden.'
    },
    s7: {
      title: '7. Dienste Dritter',
      text: 'Unsere Liefergegenstände können Dienste oder Bibliotheken Dritter integrieren. Wir sind nicht verantwortlich für Inhalte, Richtlinien oder Leistungen Dritter. Die Nutzung solcher Dienste unterliegt deren eigenen Bedingungen.'
    },
    s8: {
      title: '8. Gewährleistungen und Haftungsausschlüsse',
      text: 'Sofern im Kundenvertrag nicht ausdrücklich anders angegeben, werden die Website und Dienste "wie besehen" und "wie verfügbar" bereitgestellt. Wir schließen stillschweigende Gewährleistungen, einschließlich der Marktgängigkeit, Eignung für einen bestimmten Zweck und Nichtverletzung von Rechten, aus.'
    },
    s9: {
      title: '9. Haftung und Kündigung',
      text: 'Soweit gesetzlich zulässig, haftet Yntra nicht für indirekte, zufällige oder Folgeschäden. Unsere Gesamthaftung ist auf die Beträge beschränkt, die Sie für die Dienste gezahlt haben, die den Anspruch begründet haben, und zwar während der letzten sechs (6) Monate, sofern im Kundenvertrag nicht anders festgelegt. Wir können den Zugang bei Vertragsverletzungen aussetzen oder beenden. Sie können mit schriftlicher Mitteilung kündigen; bereits erbrachte Leistungen und nicht kündbare Verpflichtungen sind zu bezahlen. Wenn ein Kundenvertrag bestimmte Kündigungsfristen vorsieht, haben diese Vorrang.'
    },
    s10: {
      title: '10. Anwendbares Recht und Streitigkeiten',
      text: 'Diese Bedingungen unterliegen schwedischem Recht und dem anwendbaren EU-Recht unter Ausschluss von Kollisionsnormen. Streitigkeiten sind zunächst durch Verhandlungen beizulegen; andernfalls werden sie von den zuständigen Gerichten in Schweden entschieden, sofern im Kundenvertrag nichts anderes festgelegt ist.'
    },
    cta: {
      title: 'Fragen zu diesen Bedingungen?',
      desc: 'Benötigen Sie Klarstellungen oder eine maßgeschneiderte Vereinbarung? Kontaktieren Sie uns.',
      button: 'Kontakt aufnehmen'
    }
  },
  privacy: {
    title: 'Datenschutzerklärung',
    meta_description: 'Wie Yntra Ihre personenbezogenen Daten erhebt, nutzt und schützt.',
    hero: 'Wie wir Ihre personenbezogenen Daten verarbeiten, wenn Sie unsere Website besuchen oder unsere Dienste nutzen.',
    last_updated_label: 'Zuletzt aktualisiert',
    intro_card:
      'Wir schätzen Ihre Privatsphäre und schützen Ihre personenbezogenen Daten. Diese Datenschutzerklärung erläutert, wie wir Ihre Informationen erfassen, verwenden und schützen, wenn Sie unsere Website besuchen oder unsere Dienste nutzen.',
    s1: {
      title: '1. Welche Daten wir erheben',
      intro: 'Wir können folgende Daten erheben:',
      personal: {
        title: 'Personenbezogene Daten',
        desc: 'Zum Beispiel Name, E-Mail-Adresse, Telefonnummer und Unternehmensangaben, wenn Sie uns kontaktieren oder eine Leistung anfordern.'
      },
      technical: {
        title: 'Technische Informationen',
        desc: 'Zum Beispiel IP-Adresse, Browsertyp, Geräteinformationen sowie Nutzungsdaten, die automatisch erfasst werden, wenn Sie unsere Website verwenden.'
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
        providers: 'Vertrauenswürdige Dienstleister, die uns beim Betrieb der Website und der Erbringung von Leistungen unterstützen.',
        legal: 'Behörden, wenn dies gesetzlich erforderlich ist oder um unsere Rechte zu schützen.'
      }
    },
    s4: {
      title: '4. Datensicherheit',
      text: 'Wir ergreifen geeignete technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Änderung, Verlust oder Löschung zu schützen.'
    },
    s5: {
      title: '5. Ihre Rechte',
      intro: 'Je nach Wohnsitz haben Sie möglicherweise folgende Rechte:',
      items: [
        'Zugriff auf Ihre personenbezogenen Daten zu erhalten, diese zu berichtigen oder zu löschen',
        'Der Verarbeitung zu widersprechen oder sie einzuschränken',
        'Datenübertragbarkeit zu verlangen',
        'Eine Einwilligung jederzeit zu widerrufen'
      ],
      contact_hint: 'Zur Ausübung dieser Rechte kontaktieren Sie uns unter'
    },
    s6: {
      title: '6. Cookies',
      text: 'Unsere Website verwendet Cookies und ähnliche Technologien, um Ihr Nutzungserlebnis zu verbessern. Sie können Cookies in den Browser-Einstellungen verwalten oder deaktivieren.'
    },
    s7: {
      title: '7. Änderungen dieser Richtlinie',
      text: 'Wir können diese Datenschutzerklärung aktualisieren. Änderungen veröffentlichen wir auf dieser Seite und versehen sie mit einem aktualisierten Datum.'
    },
    cta: {
      title: 'Fragen zu dieser Richtlinie?',
      desc: 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns gerne.',
      button: 'Kontaktieren Sie uns'
    }
  },
  help: {
    meta_title: 'Hilfe-Center — Yntra',
    meta_description: 'Finden Sie Antworten, Anleitungen und Ressourcen, um mit Yntra erfolgreich zu starten.',
    title: 'Hilfe-Center',
    subtitle: 'Schnelle Antworten auf häufige Fragen, Anleitungen lesen und Unterstützung erhalten – genau dann, wenn Sie sie brauchen.',
    search_open_aria: 'Suche öffnen',
    search_input_aria: 'Im Hilfe-Center suchen',
    search_placeholder: 'Im Hilfe-Center suchen…',
    search_suggestions_aria: 'Suchvorschläge',
    categories: {
      title: 'Kategorien erkunden',
      subtitle: 'Die wichtigsten Themen gebündelt: Einstieg, Preise und unsere Lieferung.',
      more_help: 'Weitere Hilfe benötigt?'
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
      requirements: { title: 'Was benötigt ihr von uns?', category: 'Erste Schritte' },
      scope: { title: 'Was ist in den Paketen enthalten?', category: 'Leistungen & Preise' },
      addons: { title: 'Add-ons & Nachkauf', category: 'Leistungen & Preise' },
      quality: { title: 'Qualität & Tests', category: 'Projekt & Lieferung' },
      handover: { title: 'Launch & Übergabe', category: 'Projekt & Lieferung' },
      performance: { title: 'Performance & SEO', category: 'Technik & Hosting' },
      security: { title: 'Sicherheit & Backups', category: 'Technik & Hosting' },
      payments: { title: 'Zahlungsarten', category: 'Abrechnung' },
      terms: { title: 'Verträge & Kündigung', category: 'Abrechnung' },
      slas: { title: 'Reaktionszeiten (SLA)', category: 'Kontakt' },
      book: { title: 'Termin buchen', category: 'Kontakt' }
    },
    answers: {
      more_info: 'Mehr Informationen',
      fallback: 'Details folgen in Kürze.',
      'getting-started': {
        title: 'Projektstart & Onboarding',
        paragraphs: [
          'Beschreiben Sie Ziele, Zielgruppe und wichtigste Geschäftsanforderungen. Wir melden uns mit empfohlener Lösung, Zeitplan und Preismodell.',
          'Zum Start richten wir einen gemeinsamen Kanal (z. B. Slack) ein und stimmen Scope und Prioritäten ab.'
        ]
      },
      pricing: {
        title: 'Preismodelle',
        paragraphs: [
          'Fixe Pakete bei klaren Deliverables; Time & Material für iterative Entwicklung.',
          'Alle Modelle beinhalten QA, Release‑Support und Projektleitung im angemessenen Umfang.'
        ]
      },
      process: {
        title: 'Design‑ & Entwicklungsprozess',
        paragraphs: [
          'Discovery → Design → Entwicklung → Test → Launch → Support.',
          'Transparente Arbeit mit Demos und kurzen Iterationen für schnelles Feedback.'
        ]
      },
      requirements: {
        title: 'Was wir von Ihnen benötigen',
        paragraphs: [
          'Assets wie Logo, Brand-Guidelines, bestehende Inhalte und Referenzen.',
          'Zugänge für Integrationen (API‑Keys etc.) und eine Kontaktperson für schnelle Entscheidungen.'
        ]
      },
      scope: {
        title: 'Inhalte der Pakete',
        paragraphs: [
          'Deliverables laut Angebot/SoW: Seiten, Views, Funktionen, Integrationen und Übergabe.',
          'Add‑ons können bei Bedarf ergänzt werden.'
        ]
      },
      addons: {
        title: 'Add-ons & Nachkauf',
        paragraphs: [
          'Beispiele: zusätzliche Sprachen, mehr Seitentemplates, Growth‑Experimente, A/B‑Tests, erweiterte SEO.',
          'Laufende Support‑ und Verbesserungspakete sind möglich.'
        ]
      },
      quality: {
        title: 'Qualität & Tests',
        paragraphs: [
          'Automatisierte und manuelle Tests sowie Performance‑ und Accessibility‑Checks.',
          'Fehler im vereinbarten Zeitraum werden ohne Zusatzkosten behoben.'
        ]
      },
      handover: {
        title: 'Launch & Übergabe',
        paragraphs: [
          'Release‑Plan mit Rollback‑Strategie, Dokumentation und Wissensübergabe.',
          'Optional: Follow‑up und Messung nach dem Launch.'
        ]
      },
      tech: {
        title: 'Stack & Tools',
        paragraphs: [
          'Moderner Web‑Stack (z. B. SvelteKit) mit Fokus auf Performance, Sicherheit und DX.',
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
          'Sichere Abhängigkeiten, Schutz gegen gängige Angriffe, rollenbasierter Zugriff.',
          'Backup‑ und Restore‑Prozesse gemäß vereinbartem RPO/RTO.'
        ]
      },
      billing: {
        title: 'Abrechnungsrhythmus',
        paragraphs: [
          'Monatlich im Nachgang oder pro Meilenstein. Standard: 30 Tage netto.',
          'Nicht genutzte Zeit kann gemäß Vereinbarung verrechnet werden.'
        ]
      },
      payments: {
        title: 'Zahlungsarten',
        paragraphs: [
          'Überweisung, Karte oder internationale Zahlung – abhängig von der Gesellschaft.',
          'Die Rechnung enthält Zeiten und Deliverables pro Zeitraum.'
        ]
      },
      terms: {
        title: 'Verträge & Kündigung',
        paragraphs: [
          'Konditionen und Kündigungsfristen stehen im Kundenvertrag/SoW.',
          'Arbeiten können bei Zahlungsverzug nach Ankündigung pausiert werden.'
        ]
      },
      'contact-support': {
        title: 'Support‑Kanäle',
        paragraphs: [
          'E‑Mail an info@yntra.se für alle Anfragen. Für laufende Projekte nutzen wir einen dedizierten Slack‑Kanal.',
          'Dringende Incidents werden gemäß vereinbartem SLA priorisiert.'
        ]
      },
      slas: {
        title: 'Reaktionszeiten (SLA)',
        paragraphs: [
          'Standard‑Anfragen: Antwort binnen 1 Werktag. Dringend: sofortige Bestätigung und Aktionsplan.',
          'Verfügbarkeit und Rufbereitschaft sind als Support‑Pakete möglich.'
        ]
      },
      book: {
        title: 'Termin buchen',
        paragraphs: [
          'Wählen Sie einen passenden Termin. Wir besprechen Bedarf, Scope und nächste Schritte.',
          'Sie erhalten eine Kalendereinladung und Bestätigung per E‑Mail.'
        ]
      }
    },
    faq: {
      title: 'Häufige Fragen',
      items: [
        { q: 'Wie schnell reagiert ihr auf neue Anfragen?', a: 'In der Regel innerhalb eines Werktags. Dringendes schneller.' },
        { q: 'Gibt es Garantie und Bugfixes nach der Lieferung?', a: 'Ja — im vereinbarten Zeitraum beheben wir Fehler ohne Mehrkosten.' },
        { q: 'Arbeitet ihr mit bestehendem Code/Design?', a: 'Ja. Wir prüfen Technik/UX und empfehlen den besten Weg.' },
        { q: 'Wie handhabt ihr Change Requests im Projekt?', a: 'Wir priorisieren im Backlog und schätzen die Auswirkungen. Kleine Änderungen passen oft in einen Sprint.' },
        { q: 'Bietet ihr laufenden Support nach dem Launch?', a: 'Ja — flexible Support‑Pakete (SLA, Verbesserungen, Monitoring, Incidents).' }
      ]
    },
    cta: {
      title: 'Nicht gefunden, wonach du suchst?',
      subtitle: 'Unser Team beantwortet gern Fragen und leitet dich zur passenden Lösung.',
      contact: 'Kontakt aufnehmen',
      book_call: 'Anruf planen'
    },
    actions: {
      close: 'Schließen'
    }
  },
  modal: {
    title: 'Kontakt aufnehmen',
    desc: 'Geben Sie ein paar Details an, wir melden uns zeitnah.',
    company_label: 'Firmenname',
    company_placeholder: 'Z. B. Yntra AB',
    tel_label: 'Telefon',
    tel_placeholder: 'Z. B. +46 70 123 45 67',
    email_label: 'E‑Mail',
    email_placeholder: 'Z. B. sie@unternehmen.com',
    message_label: 'Nachricht',
    message_placeholder: 'Erzählen Sie uns von Ihrem Projekt oder Ihrer Frage...',
    cancel: 'Abbrechen',
    send: 'Senden',
    privacy: 'Wir geben Ihre Daten niemals weiter.',
    close: 'Schließen'
  },
  schedule: {
    title: 'Termin buchen',
    desc: 'Wählen Sie eine passende Zeit. Wir treffen uns online und besprechen Bedarf und nächste Schritte.',
    length_label: 'Dauer',
    min: 'Min',
    type_label: 'Meeting‑Typ',
    type_phone: 'Telefon',
    pick_time: 'Tag und Uhrzeit wählen',
    timezone_prefix: 'Zeiten in',
    custom_label: 'Anderes…',
    custom_pick_label: 'Datum wählen',
    no_slots: 'An diesem Tag sind keine Slots verfügbar',
    name_label: 'Name',
    name_placeholder: 'z. B. Jane Doe',
    email_label: 'E‑Mail',
    email_placeholder: 'z. B. sie@unternehmen.com',
    company_label: 'Firma',
    company_placeholder: 'z. B. Yntra AB',
    tel_label: 'Telefon',
    tel_placeholder: 'Z. B. +46 70 123 45 67',
    notes_label: 'Notizen (optional)',
    notes_placeholder: 'Gibt es etwas Spezifisches?',
    cancel: 'Abbrechen',
    confirm: 'Buchung bestätigen',
    privacy: 'Wir senden eine Bestätigung und Kalendereinladung.',
    close: 'Schließen',
    select_time_required: 'Bitte wählen Sie einen Terminzeitpunkt.',
    prev_day: 'Vorheriger Tag',
    next_day: 'Nächster Tag',
    calendar_open: 'Kalender öffnen',
    clear_date: 'Datum löschen'
  }
};
