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
