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
    title: 'Términos del servicio',
    meta_description: 'Los términos y condiciones que rigen tu uso del sitio web y los servicios de Yntra.',
    hero: 'Lee atentamente estos términos. Al acceder a nuestro sitio web o utilizar nuestros servicios, aceptas quedar vinculado por ellos.',
    last_updated_label: 'Última actualización',
    intro_card:
      'Estos Términos del servicio ("Términos") regulan tu acceso y uso del sitio web de Yntra y de cualquier servicio que prestemos. Si aceptas estos Términos en nombre de una empresa u otra entidad jurídica, declaras que tienes autoridad para vincular a dicha entidad. Si no estás de acuerdo con estos Términos, no utilices nuestro sitio ni nuestros servicios.',
    s1: {
      title: '1. Aceptación y cambios',
      acceptance: {
        title: 'Aceptación de los términos',
        desc: 'Al acceder o utilizar el sitio y los servicios, aceptas estos Términos y nuestra Política de privacidad. Si existe un acuerdo firmado con Yntra, dicho acuerdo prevalecerá en caso de conflicto.'
      },
      changes: {
        title: 'Cambios en los términos',
        desc: 'Podemos actualizar estos Términos periódicamente. Los cambios materiales serán efectivos al publicarse. Tu uso continuado del sitio o de los servicios tras la entrada en vigor de los cambios implica la aceptación de los Términos actualizados.'
      }
    },
    s2: {
      title: '2. Servicios y uso',
      intro: 'Te comprometes a usar nuestros servicios de forma lícita y responsable. En particular, te comprometes a:',
      items: [
        'Proporcionar información veraz y mantener tus datos actualizados',
        'Utilizar los servicios solo para fines legales y conforme a estos Términos',
        'Cumplir los límites de uso razonables y las instrucciones que facilitemos',
        'No intentar interrumpir, realizar ingeniería inversa ni obtener acceso no autorizado a nuestros sistemas'
      ]
    },
    s3: {
      title: '3. Pedidos, tarifas y pagos',
      summary: 'Los presupuestos, declaraciones de trabajo (SOW) u órdenes describen el alcance, los entregables, los plazos y los precios.',
      includes: 'Salvo acuerdo escrito en contrario, la facturación y el pago incluyen:',
      items: {
        quotes: 'Presupuestos/SOW: alcance, supuestos, entregables, hitos y criterios de aceptación',
        invoicing: 'Facturación: emitida a medida que se cumplen hitos o mensualmente a mes vencido',
        late: 'Pagos atrasados: pueden devengar intereses y/o conllevar la suspensión del trabajo previo aviso'
      }
    },
    s4: {
      title: '4. Propiedad intelectual',
      text: 'Salvo que se acuerde lo contrario por escrito, conservamos la titularidad de nuestros materiales preexistentes, know-how y herramientas. Tras el pago íntegro, recibirás una licencia mundial y no exclusiva para usar los entregables en tus fines empresariales internos. Los componentes de terceros están sujetos a sus licencias.'
    },
    s5: {
      title: '5. Confidencialidad y protección de datos',
      intro: 'Ambas partes pueden intercambiar información confidencial. Cada parte se compromete a:',
      items: [
        'Usar la información confidencial de la otra parte solo para cumplir con estos Términos',
        'Proteger dicha información con la debida diligencia y no divulgarla a terceros',
        'Devolver o destruir la información confidencial cuando se solicite, salvo obligación legal de conservarla',
        'Tratar los datos personales según la normativa aplicable en materia de protección de datos'
      ],
      contact_hint: '¿Preguntas sobre el tratamiento de datos? Escríbenos a'
    },
    s6: {
      title: '6. Uso aceptable',
      text: 'No puedes usar el sitio o los servicios para: subir código malicioso, infringir derechos de propiedad intelectual, vulnerar la privacidad, acosar o dañar a terceros, o realizar cualquier actividad que comprometa la integridad o seguridad del servicio.'
    },
    s7: {
      title: '7. Servicios de terceros',
      text: 'Nuestros entregables pueden integrarse con servicios o bibliotecas de terceros. No controlamos ni respondemos por el contenido, las políticas o el rendimiento de terceros. El uso de servicios de terceros se rige por sus propios términos.'
    },
    s8: {
      title: '8. Garantías y exenciones de responsabilidad',
      text: 'Salvo que se indique expresamente en un acuerdo firmado, el sitio y los servicios se proporcionan “tal cual” y “según disponibilidad”. Rechazamos toda garantía implícita, incluidas las de comerciabilidad, idoneidad para un fin particular y no infracción.'
    },
    s9: {
      title: '9. Responsabilidad y terminación',
      text: 'En la máxima medida permitida por la ley, Yntra no será responsable de daños indirectos, incidentales, especiales o consecuentes. Nuestra responsabilidad total acumulada se limita a las cantidades pagadas por los servicios que dieron lugar a la reclamación en los 3 meses anteriores al hecho. Podemos suspender o terminar el acceso por incumplimiento. Puedes resolver por conveniencia con notificación escrita, sujeto al pago del trabajo realizado y compromisos no cancelables.'
    },
    s10: {
      title: '10. Ley aplicable y disputas',
      text: 'Estos Términos se rigen por las leyes de la jurisdicción donde se encuentra Yntra, excluyendo sus normas sobre conflictos de leyes. Las disputas se resolverán de buena fe; de lo contrario, podrán someterse a los tribunales competentes de dicha jurisdicción.'
    },
    cta: {
      title: '¿Preguntas sobre estos términos?',
      desc: 'Si algo no te queda claro o necesitas un acuerdo personalizado, ponte en contacto.',
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
