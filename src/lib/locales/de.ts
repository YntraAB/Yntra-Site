import base from './de.json';

export default {
  ...base,
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

