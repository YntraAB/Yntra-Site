import base from './de.json';

export default {
  ...base,
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
    type_label: 'Meeting-Typ',
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
    tel_placeholder: 'z. B. +46 70 123 45 67',
    notes_label: 'Notizen (optional)',
    notes_placeholder: 'Gibt es etwas Spezifisches?',
    cancel: 'Abbrechen',
    confirm: 'Buchung bestätigen',
    privacy: 'Wir senden eine Bestätigung und Kalendereinladung.',
    close: 'Schließen',
    select_time_required: 'Bitte wählen Sie einen Terminzeitpunkt.'
  }
};
