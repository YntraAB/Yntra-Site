import base from './es.json';

export default {
  ...base,
  footer: {
    ...(base as any).footer,
    resource_links: [
      ...(((base as any).footer?.resource_links) ?? []),
      'Términos del servicio'
    ]
  },
  terms: {
    title: 'Términos de Servicio',
    meta_description: 'Términos que regulan el uso de la página web y los servicios de Yntra.',
    hero: 'Por favor, lee estos términos con atención. Al visitar el sitio web o utilizar nuestros servicios aceptas estos términos.',
    last_updated_label: 'Última actualización',
    intro_card:
      'Estos Términos de Servicio ("Términos") regulan tu acceso y uso del sitio web de Yntra y de los servicios que proporcionamos. Si aceptas los Términos en nombre de una empresa, declaras que tienes la autoridad para obligar a dicha empresa. Si no aceptas los Términos, no utilices nuestro sitio web ni nuestros servicios. Si existe un acuerdo de cliente firmado ("Acuerdo de Cliente"), este prevalecerá en caso de conflicto con los presentes Términos.',
    s1: {
      title: '1. Aceptación y Cambios',
      acceptance: {
        title: 'Aceptación de los Términos',
        desc: 'Al utilizar el sitio web y los servicios aceptas estos Términos y nuestra Política de Privacidad.'
      },
      changes: {
        title: 'Cambios en los Términos',
        desc: 'Podemos actualizar estos Términos de vez en cuando. Los cambios entran en vigor cuando se publican. Si tienes un Acuerdo de Cliente, este no se verá afectado sin consentimiento expreso por escrito.'
      }
    },
    s2: {
      title: '2. Servicios y Uso',
      intro: 'Te comprometes a utilizar nuestros servicios de manera legal y responsable. En particular, te comprometes a:',
      items: [
        'Proporcionar información precisa y mantenerla actualizada',
        'Utilizar los servicios solo para fines legales y de conformidad con estos Términos',
        'Cumplir con límites de uso razonables e instrucciones que proporcionemos',
        'No intentar interrumpir, realizar ingeniería inversa ni obtener acceso no autorizado a nuestros sistemas'
      ]
    },
    s3: {
      title: '3. Pedidos, Tarifas y Pago',
      summary: 'Los presupuestos, descripciones de trabajo u órdenes definen el alcance, entregables, plazos y precios.',
      includes: 'A menos que se acuerde lo contrario en un Acuerdo de Cliente:',
      items: {
        quotes: 'Presupuestos/órdenes: alcance, supuestos, entregables, fechas clave, criterios de aceptación',
        invoicing: 'Facturación: emitida cuando se alcancen hitos o mensualmente a mes vencido',
        late: 'Pagos atrasados: pueden generar intereses y/o la suspensión del trabajo previa notificación'
      }
    },
    s4: {
      title: '4. Propiedad Intelectual',
      text: 'Yntra conserva la propiedad de materiales preexistentes, conocimientos y herramientas. Tras el pago completo recibirás una licencia mundial, no exclusiva, para usar los entregables con fines comerciales internos. Si un Acuerdo de Cliente concede expresamente la transferencia de derechos, dicho acuerdo prevalecerá. Los componentes de terceros están sujetos a sus respectivas licencias.'
    },
    s5: {
      title: '5. Confidencialidad y Protección de Datos',
      intro: 'Las partes pueden intercambiar información confidencial. Cada parte se compromete a:',
      items: [
        'Usar la información confidencial de la otra parte únicamente para cumplir con las obligaciones según estos Términos',
        'Proteger dicha información con un cuidado razonable y no divulgarla a terceros',
        'Devolver o eliminar la información confidencial a petición, salvo que la retención sea requerida por ley',
        'Tratar los datos personales en cumplimiento de la legislación aplicable en materia de protección de datos'
      ],
      contact_hint: '¿Preguntas sobre el manejo de datos? Contáctanos en'
    },
    s6: {
      title: '6. Uso Aceptable',
      text: 'No puedes utilizar el sitio web ni los servicios para: subir código malicioso, infringir derechos de propiedad intelectual, violar la privacidad, acosar o dañar a otros, o de otro modo comprometer la integridad o seguridad de los servicios.'
    },
    s7: {
      title: '7. Servicios de Terceros',
      text: 'Nuestros entregables pueden integrar servicios o bibliotecas de terceros. No somos responsables del contenido, políticas o rendimiento de terceros. El uso de dichos servicios está sujeto a sus propios términos.'
    },
    s8: {
      title: '8. Garantías y Exenciones de Responsabilidad',
      text: 'Salvo que se indique expresamente en un Acuerdo de Cliente, el sitio web y los servicios se proporcionan “tal cual” y “según disponibilidad”. Renunciamos a las garantías implícitas, incluidas la comerciabilidad, la idoneidad para un fin determinado y la no infracción.'
    },
    s9: {
      title: '9. Responsabilidad y Terminación',
      text: 'En la medida en que lo permita la ley, Yntra no será responsable de daños indirectos, incidentales o consecuentes. Nuestra responsabilidad total se limita a las cantidades que hayas pagado por los servicios que dieron lugar a la reclamación durante los seis (6) meses anteriores, salvo que se especifique lo contrario en un Acuerdo de Cliente. Podemos suspender o cancelar el acceso por incumplimiento. Puedes rescindir con notificación por escrito; el trabajo realizado y los compromisos no cancelables deben pagarse. Si un Acuerdo de Cliente establece plazos de notificación específicos, estos prevalecerán.'
    },
    s10: {
      title: '10. Ley Aplicable y Disputas',
      text: 'Estos Términos se rigen por la legislación sueca y la legislación aplicable de la UE, excluyendo las normas de conflicto de leyes. Las disputas se resolverán primero mediante negociación; en su defecto, se resolverán ante los tribunales competentes en Suecia, salvo que un Acuerdo de Cliente disponga lo contrario.'
    },
    cta: {
      title: '¿Preguntas sobre estos Términos?',
      desc: '¿Necesitas aclaraciones o un acuerdo personalizado? Ponte en contacto con nosotros.',
      button: 'Contáctanos'
    }
  },
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
