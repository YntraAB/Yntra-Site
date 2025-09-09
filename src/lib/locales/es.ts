import base from './es.json';

export default {
  ...base,
  modal: {
    title: 'Contáctanos',
    desc: 'Cuéntanos algunos detalles y te responderemos pronto.',
    company_label: 'Nombre de la empresa',
    company_placeholder: 'Ej. Yntra AB',
    tel_label: 'Teléfono',
    tel_placeholder: 'Ej. +46 70 123 45 67',
    email_label: 'Correo electrónico',
    email_placeholder: 'Ej. tu@empresa.com',
    message_label: 'Mensaje',
    message_placeholder: 'Cuéntanos sobre tu proyecto o pregunta...',
    cancel: 'Cancelar',
    send: 'Enviar',
    privacy: 'Nunca compartiremos tu información.',
    close: 'Cerrar'
  },
  schedule: {
    title: 'Agendar una llamada',
    desc: 'Elige un horario que te funcione. Nos reunimos online para hablar de tus necesidades y próximos pasos.',
    length_label: 'Duración',
    min: 'min',
    type_label: 'Tipo de reunión',
    type_phone: 'Teléfono',
    pick_time: 'Elige día y hora',
    timezone_prefix: 'Horarios mostrados en',
    custom_label: 'Otro…',
    custom_pick_label: 'Elige una fecha',
    no_slots: 'No hay horarios disponibles ese día',
    name_label: 'Nombre',
    name_placeholder: 'Ej. Jane Doe',
    email_label: 'Correo electrónico',
    email_placeholder: 'Ej. tu@empresa.com',
    company_label: 'Empresa',
    company_placeholder: 'Ej. Yntra AB',
    tel_label: 'Teléfono',
    tel_placeholder: 'Ej. +46 70 123 45 67',
    notes_label: 'Notas (opcional)',
    notes_placeholder: '¿Algo específico que quieras tratar?',
    cancel: 'Cancelar',
    confirm: 'Confirmar reserva',
    privacy: 'Te enviaremos confirmación e invitación de calendario.',
    close: 'Cerrar',
    select_time_required: 'Selecciona un horario, por favor.'
  }
};
