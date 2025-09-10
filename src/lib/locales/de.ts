import base from './de.json';

export default {
  ...base,
  footer: {
    ...(base as any).footer,
    resource_links: [
      ...(((base as any).footer?.resource_links) ?? []),
      'Nutzungsbedingungen'
    ]
  },
  terms: {
    title: 'Nutzungsbedingungen',
    meta_description: 'Die Bedingungen, die Ihre Nutzung der Website und Dienste von Yntra regeln.',
    hero: 'Bitte lesen Sie diese Bedingungen sorgfältig. Durch den Zugriff auf unsere Website oder die Nutzung unserer Dienste erklären Sie sich damit einverstanden, an sie gebunden zu sein.',
    last_updated_label: 'Zuletzt aktualisiert',
    intro_card:
      'Diese Nutzungsbedingungen ("Bedingungen") regeln Ihren Zugriff auf die Website von Yntra sowie die Nutzung unserer Dienste. Wenn Sie diese Bedingungen im Namen eines Unternehmens oder einer juristischen Person akzeptieren, versichern Sie, hierzu bevollmächtigt zu sein. Wenn Sie nicht einverstanden sind, nutzen Sie unsere Website oder Dienste nicht.',
    s1: {
      title: '1. Zustimmung und Änderungen',
      acceptance: {
        title: 'Zustimmung zu den Bedingungen',
        desc: 'Durch Zugriff auf die Website oder Nutzung der Dienste stimmen Sie diesen Bedingungen und unserer Datenschutzerklärung zu. Besteht ein gesonderter, unterzeichneter Vertrag mit Yntra, geht dieser im Konfliktfall vor.'
      },
      changes: {
        title: 'Änderungen der Bedingungen',
        desc: 'Wir können diese Bedingungen gelegentlich aktualisieren. Wesentliche Änderungen treten mit Veröffentlichung in Kraft. Ihre fortgesetzte Nutzung nach Inkrafttreten gilt als Zustimmung zu den aktualisierten Bedingungen.'
      }
    },
    s2: {
      title: '2. Leistungen und Nutzung',
      intro: 'Sie verpflichten sich, unsere Dienste rechtmäßig und verantwortungsvoll zu nutzen. Insbesondere verpflichten Sie sich,',
      items: [
        'korrekte Angaben zu machen und Ihre Daten aktuell zu halten',
        'die Dienste nur zu rechtmäßigen Zwecken und gemäß diesen Bedingungen zu verwenden',
        'zumutbare Nutzungslimits und unsere Anweisungen einzuhalten',
        'nicht zu versuchen, unsere Systeme zu stören, zu reverse‑engineeren oder unbefugten Zugriff zu erlangen'
      ]
    },
    s3: {
      title: '3. Bestellungen, Gebühren und Zahlung',
      summary: 'Angebote, Leistungsbeschreibungen (SOW) oder Bestellungen definieren Umfang, Deliverables, Zeitpläne und Preise.',
      includes: 'Sofern nicht anders schriftlich vereinbart, umfassen Abrechnung und Zahlung:',
      items: {
        quotes: 'Angebote/SOW: Umfang, Annahmen, Deliverables, Meilensteine, Abnahmekriterien',
        invoicing: 'Abrechnung: erfolgt nach Erreichen von Meilensteinen oder monatlich nachträglich',
        late: 'Zahlungsverzug: kann Zinsen nach sich ziehen und/oder nach vorheriger Ankündigung zur Arbeitspause führen'
      }
    },
    s4: {
      title: '4. Geistiges Eigentum',
      text: 'Sofern nicht anders in einem unterzeichneten Vertrag geregelt, behalten wir Rechte an vorbestehenden Materialien, Know‑how und Tools. Nach vollständiger Zahlung erhalten Sie eine weltweite, nicht‑exklusive Lizenz zur Nutzung der Deliverables für interne Geschäftszwecke. Komponenten Dritter unterliegen deren Lizenzbedingungen.'
    },
    s5: {
      title: '5. Vertraulichkeit und Datenschutz',
      intro: 'Beide Parteien können vertrauliche Informationen austauschen. Jede Partei verpflichtet sich,',
      items: [
        'vertrauliche Informationen der anderen Partei nur zur Vertragserfüllung zu verwenden',
        'diese Informationen mit angemessener Sorgfalt zu schützen und nicht an Dritte weiterzugeben',
        'vertrauliche Informationen auf Anfrage zurückzugeben oder zu löschen, sofern keine gesetzliche Aufbewahrungspflicht besteht',
        'personenbezogene Daten gemäß anwendbarem Datenschutzrecht zu verarbeiten'
      ],
      contact_hint: 'Fragen zum Umgang mit Daten? Kontaktieren Sie uns unter'
    },
    s6: {
      title: '6. Zulässige Nutzung',
      text: 'Sie dürfen die Website oder Dienste nicht verwenden, um: schädlichen Code hochzuladen, Rechte an geistigem Eigentum zu verletzen, die Privatsphäre zu beeinträchtigen, andere zu belästigen oder zu schädigen oder die Integrität bzw. Sicherheit des Dienstes zu gefährden.'
    },
    s7: {
      title: '7. Dienste Dritter',
      text: 'Unsere Deliverables können sich mit Diensten oder Bibliotheken Dritter integrieren. Wir kontrollieren diese nicht und haften nicht für Inhalte, Richtlinien oder Leistung Dritter. Deren Nutzung unterliegt den jeweiligen Nutzungsbedingungen.'
    },
    s8: {
      title: '8. Gewährleistung und Haftungsausschluss',
      text: 'Sofern nicht ausdrücklich in einem unterzeichneten Vertrag geregelt, werden Website und Dienste „wie besehen“ und „wie verfügbar“ bereitgestellt. Wir lehnen alle stillschweigenden Gewährleistungen ab, einschließlich Marktgängigkeit, Eignung für einen bestimmten Zweck und Nichtverletzung.'
    },
    s9: {
      title: '9. Haftung und Kündigung',
      text: 'Soweit gesetzlich zulässig, haftet Yntra nicht für indirekte, beiläufige, spezielle oder Folgeschäden. Unsere Gesamthaftung ist auf die Beträge beschränkt, die Sie für die Leistungen gezahlt haben, die den Anspruch innerhalb der vorangegangenen 3 Monate begründen. Wir können bei Verstoß den Zugang aussetzen oder kündigen. Sie können mit schriftlicher Mitteilung kündigen; geleistete Arbeit und nicht stornierbare Verpflichtungen sind zu vergüten.'
    },
    s10: {
      title: '10. Anwendbares Recht und Streitigkeiten',
      text: 'Diese Bedingungen unterliegen den Gesetzen der Gerichtsbarkeit, in der Yntra ansässig ist, unter Ausschluss von Kollisionsnormen. Streitigkeiten werden zunächst gütlich geklärt; andernfalls sind die zuständigen Gerichte dieser Gerichtsbarkeit angerufen.'
    },
    cta: {
      title: 'Fragen zu diesen Bedingungen?',
      desc: 'Unklarheiten oder Bedarf an einem individuellen Vertrag? Melden Sie sich gern.',
      button: 'Kontaktieren Sie uns'
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
