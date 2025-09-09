import base from './es.json';

export default {
  ...base,
  privacy: {
    title: 'Política de Privacidad',
    meta_description: 'Cómo Yntra recopila, usa y protege tus datos personales.',
    hero: 'Cómo tratamos tus datos personales cuando visitas nuestro sitio web o utilizas nuestros servicios.',
    last_updated_label: 'Última actualización',
    intro_card:
      'Valoramos tu privacidad y protegemos tus datos personales. Esta política explica cómo recopilamos, usamos y protegemos tu información cuando visitas nuestro sitio web o utilizas nuestros servicios.',
    s1: {
      title: '1. Información que recopilamos',
      intro: 'Podemos recopilar los siguientes tipos de datos:',
      personal: {
        title: 'Información personal',
        desc: 'Por ejemplo: nombre, correo electrónico, número de teléfono y datos de la empresa cuando nos contactas o solicitas un servicio.'
      },
      technical: {
        title: 'Información técnica',
        desc: 'Por ejemplo: dirección IP, tipo de navegador, información del dispositivo y datos de uso recopilados automáticamente cuando interactúas con nuestro sitio web.'
      }
    },
    s2: {
      title: '2. Cómo usamos los datos',
      intro: 'Usamos los datos para:',
      items: [
        'Proporcionar, operar y mejorar nuestros servicios',
        'Comunicarnos contigo sobre consultas, proyectos y soporte',
        'Analizar el uso del sitio y mejorar la experiencia',
        'Cumplir con obligaciones legales'
      ]
    },
    s3: {
      title: '3. Compartir información',
      dont_sell: 'No vendemos, comerciamos ni alquilamos tus datos personales.',
      only_share_with: 'Compartimos información únicamente con:',
      items: {
        providers: 'Proveedores de confianza que nos ayudan a operar el sitio y prestar servicios.',
        legal: 'Autoridades competentes si la ley lo exige o para proteger nuestros derechos.'
      }
    },
    s4: {
      title: '4. Seguridad de los datos',
      text: 'Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra el acceso no autorizado, la alteración, la pérdida o la eliminación.'
    },
    s5: {
      title: '5. Tus derechos',
      intro: 'Según tu ubicación, puedes tener derecho a:',
      items: [
        'Acceder, corregir o eliminar tus datos personales',
        'Oponerte o restringir el tratamiento',
        'Solicitar la portabilidad de los datos',
        'Retirar el consentimiento en cualquier momento'
      ],
      contact_hint: 'Para ejercer estos derechos, contáctanos en'
    },
    s6: {
      title: '6. Cookies',
      text: 'Nuestro sitio utiliza cookies y tecnologías similares para mejorar tu experiencia. Puedes gestionar o desactivar las cookies en la configuración del navegador.'
    },
    s7: {
      title: '7. Cambios en esta política',
      text: 'Podemos actualizar esta política de privacidad. Publicaremos los cambios en esta página con la fecha actualizada.'
    },
    cta: {
      title: '¿Preguntas sobre esta política?',
      desc: 'Si tienes preguntas sobre esta política de privacidad, no dudes en contactarnos.',
      button: 'Contáctanos'
    }
  },
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
    message_placeholder: 'Cuéntanos sobre tu proyecto o consulta...',
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
    select_time_required: 'Selecciona un horario, por favor.',
    prev_day: 'Día anterior',
    next_day: 'Día siguiente',
    calendar_open: 'Abrir calendario',
    clear_date: 'Borrar fecha'
  }
};

