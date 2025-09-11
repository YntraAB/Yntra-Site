import base from './es.json';

export default {
  ...base,
  nav: { ...(base as any).nav, helpcenter: 'Centro de ayuda' },
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
  },
  help: {
    meta_title: 'Centro de ayuda — Yntra',
    meta_description: 'Encuentra respuestas, guías y recursos para empezar y tener éxito con Yntra.',
    title: 'Centro de ayuda',
    subtitle: 'Encuentra respuestas rápidas a preguntas frecuentes, lee guías y obtén soporte cuando lo necesites.',
    search_open_aria: 'Abrir búsqueda',
    search_input_aria: 'Buscar en el Centro de ayuda',
    search_placeholder: 'Buscar en el Centro de ayuda…',
    search_suggestions_aria: 'Sugerencias de búsqueda',
    categories: {
      title: 'Explorar categorías',
      subtitle: 'Hemos agrupado lo esencial para ayudarte a empezar, entender los precios y cómo entregamos.',
      more_help: '¿Necesitas más ayuda?'
    },
    groups: {
      getting_started: { title: 'Primeros pasos' },
      services_pricing: { title: 'Servicios y precios' },
      project_delivery: { title: 'Proyecto y entrega' },
      tech_hosting: { title: 'Tecnología y hosting' },
      billing: { title: 'Facturación' },
      contact: { title: 'Contacto' }
    },
    articles: {
      'getting-started': { title: '¿Cómo empiezo un proyecto?', category: 'Primeros pasos' },
      pricing: { title: '¿Cuánto cuesta un sitio web?', category: 'Servicios y precios' },
      process: { title: '¿Cuál es el proceso de principio a fin?', category: 'Proyecto y entrega' },
      tech: { title: '¿Qué stack y hosting utilizáis?', category: 'Tecnología y hosting' },
      billing: { title: '¿Cómo funcionan la facturación y el pago?', category: 'Facturación' },
      'contact-support': { title: '¿Cómo contacto con soporte?', category: 'Contacto' },
      requirements: { title: '¿Qué necesitáis de nuestra parte?', category: 'Primeros pasos' },
      scope: { title: '¿Qué incluye cada paquete?', category: 'Servicios y precios' },
      addons: { title: 'Complementos y postventa', category: 'Servicios y precios' },
      quality: { title: 'Calidad y pruebas', category: 'Proyecto y entrega' },
      handover: { title: 'Lanzamiento y entrega', category: 'Proyecto y entrega' },
      performance: { title: 'Rendimiento y SEO', category: 'Tecnología y hosting' },
      security: { title: 'Seguridad y copias de seguridad', category: 'Tecnología y hosting' },
      payments: { title: 'Formas de pago', category: 'Facturación' },
      terms: { title: 'Contratos y rescisión', category: 'Facturación' },
      slas: { title: 'Tiempos de respuesta (SLA)', category: 'Contacto' },
      book: { title: 'Reservar una llamada', category: 'Contacto' }
    },
    answers: {
      more_info: 'Más información',
      fallback: 'Detalles próximamente.',
      'getting-started': {
        title: 'Inicio de proyecto y onboarding',
        paragraphs: [
          'Describe objetivos, público y requisitos clave del negocio. Te enviaremos la solución recomendada, cronograma y modelo de costes.',
          'Al empezar configuramos un canal compartido (p. ej., Slack) y alineamos alcance y prioridades.'
        ]
      },
      pricing: {
        title: 'Modelos de precios',
        paragraphs: [
          'Paquetes cerrados cuando los entregables están claros; tiempo y materiales para desarrollo iterativo.',
          'Todos los modelos incluyen QA, soporte de lanzamiento y gestión de proyecto en alcance razonable.'
        ]
      },
      process: {
        title: 'Proceso de diseño y desarrollo',
        paragraphs: [
          'Descubrimiento → Diseño → Desarrollo → Pruebas → Lanzamiento → Soporte.',
          'Trabajamos de forma transparente con demos periódicas e iteraciones cortas para feedback rápido.'
        ]
      },
      requirements: {
        title: 'Qué necesitamos de ti',
        paragraphs: [
          'Activos como logotipo, guías de marca, contenido existente y referencias.',
          'Accesos para integraciones (claves API, etc.) y una persona de contacto para decisiones rápidas.'
        ]
      },
      scope: {
        title: 'Qué incluye cada paquete',
        paragraphs: [
          'Los entregables se detallan en la propuesta/SoW: páginas, vistas, funciones, integraciones y handover.',
          'Se pueden añadir complementos según necesidad.'
        ]
      },
      addons: {
        title: 'Complementos y postventa',
        paragraphs: [
          'Ejemplos: idiomas extra, más plantillas de página, experimentos de growth, tests A/B, SEO ampliado.',
          'Se pueden contratar planes de soporte y mejora continua.'
        ]
      },
      quality: {
        title: 'Calidad y pruebas',
        paragraphs: [
          'Ejecutamos pruebas automatizadas y manuales, además de controles de rendimiento y accesibilidad.',
          'Los errores detectados dentro del periodo acordado se corrigen sin coste adicional.'
        ]
      },
      handover: {
        title: 'Lanzamiento y entrega',
        paragraphs: [
          'Plan de lanzamiento con estrategia de rollback, documentación y transferencia de conocimiento.',
          'También ofrecemos seguimiento y medición post‑lanzamiento.'
        ]
      },
      tech: {
        title: 'Stack y herramientas',
        paragraphs: [
          'Stack web moderno (p. ej., SvelteKit) con foco en rendimiento, seguridad y DX.',
          'El hosting se elige según requisitos: edge/CDN o entornos en contenedores.'
        ]
      },
      performance: {
        title: 'Rendimiento y SEO',
        paragraphs: [
          'Core Web Vitals, optimización de imágenes y caché por defecto.',
          'SEO técnico y datos estructurados cuando sea relevante.'
        ]
      },
      security: {
        title: 'Seguridad y backup',
        paragraphs: [
          'Dependencias seguras, protección contra ataques comunes y acceso basado en roles.',
          'Procedimientos de copia y restauración según RPO/RTO acordados.'
        ]
      },
      billing: {
        title: 'Frecuencia de facturación',
        paragraphs: [
          'Mensual a mes vencido o por hito. 30 días neto por defecto.',
          'El tiempo no utilizado puede compensarse según contrato.'
        ]
      },
      payments: {
        title: 'Formas de pago',
        paragraphs: [
          'Transferencia bancaria, tarjeta o transferencia internacional según la entidad.',
          'La factura incluye registro de horas y entregables por periodo.'
        ]
      },
      terms: {
        title: 'Contratos y rescisión',
        paragraphs: [
          'Plazos y condiciones constan en el Acuerdo de Cliente/SoW.',
          'El trabajo puede pausarse por impago tras aviso, según las condiciones.'
        ]
      },
      'contact-support': {
        title: 'Canales de soporte',
        paragraphs: [
          'Escríbenos a info@yntra.se para cualquier consulta. Para proyectos en curso usamos un canal de Slack dedicado.',
          'Las incidencias urgentes se priorizan según el SLA acordado.'
        ]
      },
      slas: {
        title: 'Tiempos de respuesta (SLA)',
        paragraphs: [
          'Consultas habituales: respuesta en 1 día laborable. Urgentes: acuse inmediato y plan de acción.',
          'La disponibilidad y guardias pueden incluirse en planes de soporte.'
        ]
      },
      book: {
        title: 'Reservar una llamada',
        paragraphs: [
          'Elige la hora que te convenga. Revisaremos necesidades, alcance y siguientes pasos.',
          'La reserva genera invitación de calendario y confirmación por correo.'
        ]
      }
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Qué tan rápido respondéis a nuevas consultas?', a: 'Normalmente en 1 día laborable. Las urgentes se atienden más rápido.' },
        { q: '¿Incluís garantía y corrección de errores tras la entrega?', a: 'Sí, dentro del periodo acordado corregimos sin coste adicional.' },
        { q: '¿Podéis trabajar con un código/diseño existente?', a: 'Claro. Hacemos una revisión técnica/UX rápida y recomendamos la mejor vía.' },
        { q: '¿Cómo gestionáis cambios durante el proyecto?', a: 'Priorizamos en backlog y estimamos impacto. Ajustes menores suelen entrar en sprint.' },
        { q: '¿Ofrecéis soporte continuo tras el lanzamiento?', a: 'Sí — planes flexibles (SLA, mejoras, monitorización e incidencias).' }
      ]
    },
    cta: {
      title: '¿No encuentras lo que buscas?',
      subtitle: 'Nuestro equipo responde encantado a tus dudas y te guía hacia la solución adecuada.',
      contact: 'Contáctanos',
      book_call: 'Reservar una llamada'
    },
    actions: {
      close: 'Cerrar'
    }
  }
};
