import base from './sv.json';

export default {
  ...base,
  modal: {
    title: 'Kontakta oss',
    desc: 'Fyll i detaljerna så återkommer vi snart.',
    company_label: 'Företagsnamn',
    company_placeholder: 'Ex. Yntra AB',
    tel_label: 'Tel',
    tel_placeholder: 'Ex. +46 70 123 45 67',
    email_label: 'E‑post',
    email_placeholder: 'Ex. du@foretag.se',
    message_label: 'Meddelande',
    message_placeholder: 'Berätta kort om ert behov eller projekt...',
    cancel: 'Avbryt',
    send: 'Skicka',
    privacy: 'Vi delar aldrig din information.',
    close: 'Stäng'
  },
  schedule: {
    title: 'Boka ett samtal',
    desc: 'Välj en tid som passar dig. Vi ses online och går igenom behov och nästa steg.',
    type_label: 'Mötestyp',
    type_phone: 'Telefon',
    pick_time: 'Välj dag och tid',
    timezone_prefix: 'Tider visas i',
    custom_label: 'Annan…',
    custom_pick_label: 'Välj ett datum',
    no_slots: 'Inga tider tillgängliga den dagen',
    name_label: 'Namn',
    name_placeholder: 'Ex. Anna Andersson',
    email_label: 'E‑post',
    email_placeholder: 'Ex. du@foretag.se',
    company_label: 'Företag',
    company_placeholder: 'Ex. Yntra AB',
    tel_label: 'Tel',
    tel_placeholder: 'Ex. +46 70 123 45 67',
    notes_label: 'Anteckningar (valfritt)',
    notes_placeholder: 'Något särskilt du vill ta upp?',
    cancel: 'Avbryt',
    confirm: 'Bekräfta bokning',
    privacy: 'Vi skickar en bekräftelse och kalenderinbjudan.',
    close: 'Stäng',
    select_time_required: 'Välj en tid, tack.',
    prev_day: 'Föregående dag',
    next_day: 'Nästa dag',
    calendar_open: 'Öppna kalendern',
    clear_date: 'Rensa datum'
  },
  trusted: {
    ...(base as any).trusted,
    title: 'Framtidens digitala lösningar',
    subtitle: 'Företag från olika branscher väljer oss för att driva sin digitala utveckling.'
  }
};

