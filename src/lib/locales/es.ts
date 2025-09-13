import base from './es.json';

export default {
  ...base,
  nav: { ...(base as any).nav, helpcenter: 'Centro de ayuda' },
  footer: {
    ...(base as any).footer,
    resource_links: [
      ...(((base as any).footer?.resource_links) ?? []),
      'TÃ©rminos del servicio'
    ]
  },
  design: {
    title: 'DiseÃ±o',
    meta_description: 'Creamos experiencias claras y coherentes para web y apps â€” desde la investigaciÃ³n hasta un sistema de diseÃ±o listo para producciÃ³n.',
    badge: 'Experiencia en diseÃ±o',
    hero: 'AÃ±os de experiencia en UX/UI y diseÃ±o orientado a marca para sitios web y apps crÃ­ticas. Combinamos investigaciÃ³n, flujos claros y UI consistente en soluciones que convierten mejor y se sienten naturales.',
    cta_primary: 'Hablemos de diseÃ±o',
    s1: {
      title: 'QuÃ© diseÃ±amos',
      intro: 'De sitios de marketing a interfaces de producto y sistemas de diseÃ±o â€” entregamos diseÃ±o consistente y escalable que funciona en la prÃ¡ctica.',
      web: { title: 'Sitios web', desc: 'Marketing, campaÃ±as y corporativos que cargan rÃ¡pido y convierten.' },
      apps: { title: 'Sistemas y Apps', desc: 'Dashboards, herramientas internas y portales enfocados en claridad y eficiencia.' },
      brand: { title: 'Marca y UI', desc: 'Identidad visual, voz y componentes que fortalecen la experiencia.' },
      systems: { title: 'Sistemas de diseÃ±o', desc: 'Tokens, librerÃ­as de componentes y guÃ­as para escalar con calidad.' }
    },
    s2: {
      title: 'Nuestros principios',
      items: [
        'Claridad primero â€” cada pantalla con un objetivo claro',
        'Consistencia y escala â€” patrones compartidos, equipos mÃ¡s rÃ¡pidos',
        'Rendimiento y sensaciÃ³n â€” experiencias rÃ¡pidas y fÃ¡ciles de navegar',
        'Accesibilidad (WCAG) â€” diseÃ±o para todos'
      ]
    },
    s3: {
      title: 'Proceso de diseÃ±o',
      steps: [
        { title: 'Research y definiciÃ³n', desc: 'Objetivos, usuarios, mercado y restricciones. Definimos problemas y mÃ©tricas.' },
        { title: 'Flows y wireframes', desc: 'Flujos de tareas y baja fidelidad para decisiones y feedback tempranos.' },
        { title: 'UI y prototipo', desc: 'ExploraciÃ³n visual, componentes y prototipo interactivo para validar.' },
        { title: 'Design system y handover', desc: 'Tokens, guÃ­as, documentaciÃ³n y soporte durante implementaciÃ³n.' }
      ]
    },
    cta_title: 'Â¿Listos para elevar su diseÃ±o?',
    cta_desc: 'CuÃ©ntanos tu audiencia y reto â€” propondremos un plan pragmÃ¡tico y lanzable.',
    tools_title: 'Herramientas y entregables'
  },
  system: {
    title: 'Aplicaciones',
    meta_description: 'DiseÃ±amos y desarrollamos aplicaciones para mÃ³vil, web y empresa â€” a medida.',
    badge: 'Aplicaciones',
    hero: 'Creamos aplicaciones modernas: mÃ³vil (iOS/Android), web y desktop. CÃ³digo robusto, excelente UX e integraciones que importan.',
    cta_primary: 'Hablemos de aplicaciones',
    s1: {
      title: 'QuÃ© construimos',
      intro: 'Apps mÃ³viles, web apps y aplicaciones enterprise â€” desde la idea hasta el lanzamiento y mÃ¡s allÃ¡.',
      internal: { title: 'Aplicaciones mÃ³viles', desc: 'iOS/Android con wrappers webâ€‘native (p.ej. Capacitor/Tauri) para offline, push y rendimiento.' },
      automation: { title: 'Aplicaciones web', desc: 'Portales, dashboards, reservas, comercio y flujos en tiempo real que escalan.' },
      enterprise: { title: 'Aplicaciones enterprise', desc: 'RBAC, SSO, auditorÃ­a, escalabilidad y operaciÃ³n fiable (CI/CD + monitorizaciÃ³n).' },
      custom: { title: 'Integraciones y automatizaciÃ³n', desc: 'Integraciones ERP/CRM, pagos, pipelines de datos y jobs en background.' }
    },
    s2: {
      title: 'Por quÃ© para aplicaciones',
      items: [
        'AÃ±os entregando aplicaciones complejas en producciÃ³n',
        'Fiabilidad: test, logging, monitorizaciÃ³n y rutinas',
        'Seguridad y accesos desde el inicio (leastâ€‘privilege)',
        'DocumentaciÃ³n clara y mantenibilidad a largo plazo'
      ]
    },
    s3: {
      title: 'Entrega y tecnologÃ­a',
      stack_title: 'Stack tecnolÃ³gico',
      stack_text: 'SvelteKit/Node para web; wrappers webâ€‘native (Capacitor/Tauri) para mÃ³vil/desktop. APIâ€‘first, tipado fuerte, CI/CD y cloud â€” decisiones pragmÃ¡ticas.',
      delivery_title: 'Forma de entrega',
      delivery_text: 'Iteraciones cortas, demos semanales, entornos de preview y transparencia. Entregamos valor pronto y a menudo.'
    },
    stats: {
      years: '10+ aÃ±os', years_label: 'Experiencia',
      projects: '100+', projects_label: 'Entregas',
      uptime: '99.9%', uptime_label: 'Uptime tÃ­pico'
    },
    cta_title: 'Â¿Listos para su prÃ³ximo sistema?',
    cta_desc: 'CuÃ©ntanos procesos y objetivos â€” propondremos una soluciÃ³n lista para lanzar y escalar.'
  },
  process: {
    title: 'Nuestro proceso',
    subtitle: 'De la idea al lanzamiento â€” transparente, eficiente y con calidad en cada paso.',
    overview: {
      title: 'Un enfoque: resultados, sin fricciÃ³n',
      text: 'Os guiamos desde la idea hasta el lanzamiento con un proceso claro y transparente que reduce riesgos y maximiza la velocidad. RecibirÃ¡s avances visibles cada semana, ciclos de decisiÃ³n cortos y un equipo que se responsabiliza de todo: diseÃ±o, desarrollo, integraciones, pruebas y handover.',
      points: [
        'Iteraciones cortas con demos semanales',
        'Backlog trazable y entregables claros',
        'Accesibilidad, rendimiento y seguridad desde el primer dÃ­a',
        'Handover y documentaciÃ³n para la propiedad a largo plazo'
      ]
    },
    timeline_title: 'Paso a paso',
    durations: {
      discovery: 'Discovery',
      design: 'DiseÃ±o',
      build: 'Desarrollar',
      integrate: 'Integrar',
      test: 'Probar y optimizar',
      launch: 'Lanzar y soporte'
    },
    timeframes: {
      title: 'Tiempos tÃ­picos',
      marketing_title: 'Sitio de marketing',
      marketing_desc: '4â€“8 semanas â€” segÃºn nÃºmero de pÃ¡ginas, contenido e integraciones.',
      product_title: 'Sistema/app',
      product_desc: '6â€“12+ semanas â€” segÃºn complejidad, modelo de datos y dependencias externas.'
    },
    collaboration: {
      title: 'ColaboraciÃ³n y comunicaciÃ³n',
      items: [
        'Reuniones semanales + demos',
        'Actualizaciones asÃ­ncronas y notas de versiÃ³n',
        'Un punto de contacto, feedback rÃ¡pido',
        'Acceso al backlog y a issues'
      ]
    },
    quality: {
      title: 'Calidad y seguridad',
      items: [
        'RevisiÃ³n de cÃ³digo, checks de CI y staging',
        'Accesibilidad (WCAG), rendimiento y SEO bÃ¡sico',
        'Dependencias seguras y rutinas de actualizaciÃ³n',
        'Roles, accesos y estrategia de backup'
      ]
    },
    details: {
      discovery: ['OKRs/KPIs', 'Mapa del sitio/flows', 'Backlog/SoW', 'Plan y riesgos'],
      design: ['Wireframes', 'Mockups de UI', 'LibrerÃ­a de componentes', 'Prototipo interactivo'],
      build: ['Vistas/componentes completados', 'Integraciones de API', 'Notas de versiÃ³n', 'Demos semanales'],
      integrate: ['Integraciones configuradas', 'Datos de prueba y entornos', 'DocumentaciÃ³n tÃ©cnica'],
      test: ['Checklist y correcciÃ³n de bugs', 'Informes Lighthouse/a11y'],
      launch: ['Procedimientos de operaciÃ³n y backups', 'DocumentaciÃ³n final']
    },
    pricing: {
      title: 'Precios y modalidad',
      fixed_title: 'Precio fijo',
      fixed_desc: 'Cuando el alcance estÃ¡ bien definido. Propuesta con entregables, hitos y fechas.',
      tm_title: 'Tiempo y Materiales',
      tm_desc: 'Para desarrollo iterativo. Reporte semanal y prioridades claras.'
    },
    cta: {
      title: 'Â¿Listos para construir juntos?',
      desc: 'CuÃ©ntanos tus objetivos. Propondremos un plan pragmÃ¡tico que equilibre velocidad, calidad y presupuesto â€” y lo entregaremos.',
      contact: 'ContÃ¡ctanos'
    }
  },
  terms: {
    title: 'TÃ©rminos de Servicio',
    meta_description: 'TÃ©rminos que regulan el uso de la pÃ¡gina web y los servicios de Yntra.',
    hero: 'Por favor, lee estos tÃ©rminos con atenciÃ³n. Al visitar el sitio web o utilizar nuestros servicios aceptas estos tÃ©rminos.',
    last_updated_label: 'Ãšltima actualizaciÃ³n',
    intro_card:
      'Estos TÃ©rminos de Servicio ("TÃ©rminos") regulan tu acceso y uso del sitio web de Yntra y de los servicios que proporcionamos. Si aceptas los TÃ©rminos en nombre de una empresa, declaras que tienes la autoridad para obligar a dicha empresa. Si no aceptas los TÃ©rminos, no utilices nuestro sitio web ni nuestros servicios. Si existe un acuerdo de cliente firmado ("Acuerdo de Cliente"), este prevalecerÃ¡ en caso de conflicto con los presentes TÃ©rminos.',
    s1: {
      title: '1. AceptaciÃ³n y Cambios',
      acceptance: {
        title: 'AceptaciÃ³n de los TÃ©rminos',
        desc: 'Al utilizar el sitio web y los servicios aceptas estos TÃ©rminos y nuestra PolÃ­tica de Privacidad.'
      },
      changes: {
        title: 'Cambios en los TÃ©rminos',
        desc: 'Podemos actualizar estos TÃ©rminos de vez en cuando. Los cambios entran en vigor cuando se publican. Si tienes un Acuerdo de Cliente, este no se verÃ¡ afectado sin consentimiento expreso por escrito.'
      }
    },
    s2: {
      title: '2. Servicios y Uso',
      intro: 'Te comprometes a utilizar nuestros servicios de manera legal y responsable. En particular, te comprometes a:',
      items: [
        'Proporcionar informaciÃ³n precisa y mantenerla actualizada',
        'Utilizar los servicios solo para fines legales y de conformidad con estos TÃ©rminos',
        'Cumplir con lÃ­mites de uso razonables e instrucciones que proporcionemos',
        'No intentar interrumpir, realizar ingenierÃ­a inversa ni obtener acceso no autorizado a nuestros sistemas'
      ]
    },
    s3: {
      title: '3. Pedidos, Tarifas y Pago',
      summary: 'Los presupuestos, descripciones de trabajo u Ã³rdenes definen el alcance, entregables, plazos y precios.',
      includes: 'A menos que se acuerde lo contrario en un Acuerdo de Cliente:',
      items: {
        quotes: 'Presupuestos/Ã³rdenes: alcance, supuestos, entregables, fechas clave, criterios de aceptaciÃ³n',
        invoicing: 'FacturaciÃ³n: emitida cuando se alcancen hitos o mensualmente a mes vencido',
        late: 'Pagos atrasados: pueden generar intereses y/o la suspensiÃ³n del trabajo previa notificaciÃ³n'
      }
    },
    s4: {
      title: '4. Propiedad Intelectual',
      text: 'Yntra conserva la propiedad de materiales preexistentes, conocimientos y herramientas. Tras el pago completo recibirÃ¡s una licencia mundial, no exclusiva, para usar los entregables con fines comerciales internos. Si un Acuerdo de Cliente concede expresamente la transferencia de derechos, dicho acuerdo prevalecerÃ¡. Los componentes de terceros estÃ¡n sujetos a sus respectivas licencias.'
    },
    s5: {
      title: '5. Confidencialidad y ProtecciÃ³n de Datos',
      intro: 'Las partes pueden intercambiar informaciÃ³n confidencial. Cada parte se compromete a:',
      items: [
        'Usar la informaciÃ³n confidencial de la otra parte Ãºnicamente para cumplir con las obligaciones segÃºn estos TÃ©rminos',
        'Proteger dicha informaciÃ³n con un cuidado razonable y no divulgarla a terceros',
        'Devolver o eliminar la informaciÃ³n confidencial a peticiÃ³n, salvo que la retenciÃ³n sea requerida por ley',
        'Tratar los datos personales en cumplimiento de la legislaciÃ³n aplicable en materia de protecciÃ³n de datos'
      ],
      contact_hint: 'Â¿Preguntas sobre el manejo de datos? ContÃ¡ctanos en'
    },
    s6: {
      title: '6. Uso Aceptable',
      text: 'No puedes utilizar el sitio web ni los servicios para: subir cÃ³digo malicioso, infringir derechos de propiedad intelectual, violar la privacidad, acosar o daÃ±ar a otros, o de otro modo comprometer la integridad o seguridad de los servicios.'
    },
    s7: {
      title: '7. Servicios de Terceros',
      text: 'Nuestros entregables pueden integrar servicios o bibliotecas de terceros. No somos responsables del contenido, polÃ­ticas o rendimiento de terceros. El uso de dichos servicios estÃ¡ sujeto a sus propios tÃ©rminos.'
    },
    s8: {
      title: '8. GarantÃ­as y Exenciones de Responsabilidad',
      text: 'Salvo que se indique expresamente en un Acuerdo de Cliente, el sitio web y los servicios se proporcionan â€œtal cualâ€ y â€œsegÃºn disponibilidadâ€. Renunciamos a las garantÃ­as implÃ­citas, incluidas la comerciabilidad, la idoneidad para un fin determinado y la no infracciÃ³n.'
    },
    s9: {
      title: '9. Responsabilidad y TerminaciÃ³n',
      text: 'En la medida en que lo permita la ley, Yntra no serÃ¡ responsable de daÃ±os indirectos, incidentales o consecuentes. Nuestra responsabilidad total se limita a las cantidades que hayas pagado por los servicios que dieron lugar a la reclamaciÃ³n durante los seis (6) meses anteriores, salvo que se especifique lo contrario en un Acuerdo de Cliente. Podemos suspender o cancelar el acceso por incumplimiento. Puedes rescindir con notificaciÃ³n por escrito; el trabajo realizado y los compromisos no cancelables deben pagarse. Si un Acuerdo de Cliente establece plazos de notificaciÃ³n especÃ­ficos, estos prevalecerÃ¡n.'
    },
    s10: {
      title: '10. Ley Aplicable y Disputas',
      text: 'Estos TÃ©rminos se rigen por la legislaciÃ³n sueca y la legislaciÃ³n aplicable de la UE, excluyendo las normas de conflicto de leyes. Las disputas se resolverÃ¡n primero mediante negociaciÃ³n; en su defecto, se resolverÃ¡n ante los tribunales competentes en Suecia, salvo que un Acuerdo de Cliente disponga lo contrario.'
    },
    cta: {
      title: 'Â¿Preguntas sobre estos TÃ©rminos?',
      desc: 'Â¿Necesitas aclaraciones o un acuerdo personalizado? Ponte en contacto con nosotros.',
      button: 'ContÃ¡ctanos'
    }
  },
  privacy: {
    title: 'PolÃ­tica de Privacidad',
    meta_description: 'CÃ³mo Yntra recopila, usa y protege tus datos personales.',
    hero: 'CÃ³mo tratamos tus datos personales cuando visitas nuestro sitio web o utilizas nuestros servicios.',
    last_updated_label: 'Ãšltima actualizaciÃ³n',
    intro_card:
      'Valoramos tu privacidad y protegemos tus datos personales. Esta polÃ­tica explica cÃ³mo recopilamos, usamos y protegemos tu informaciÃ³n cuando visitas nuestro sitio web o utilizas nuestros servicios.',
    s1: {
      title: '1. InformaciÃ³n que recopilamos',
      intro: 'Podemos recopilar los siguientes tipos de datos:',
      personal: {
        title: 'InformaciÃ³n personal',
        desc: 'Por ejemplo: nombre, correo electrÃ³nico, nÃºmero de telÃ©fono y datos de la empresa cuando nos contactas o solicitas un servicio.'
      },
      technical: {
        title: 'InformaciÃ³n tÃ©cnica',
        desc: 'Por ejemplo: direcciÃ³n IP, tipo de navegador, informaciÃ³n del dispositivo y datos de uso recopilados automÃ¡ticamente cuando interactÃºas con nuestro sitio web.'
      }
    },
    s2: {
      title: '2. CÃ³mo usamos los datos',
      intro: 'Usamos los datos para:',
      items: [
        'Proporcionar, operar y mejorar nuestros servicios',
        'Comunicarnos contigo sobre consultas, proyectos y soporte',
        'Analizar el uso del sitio y mejorar la experiencia',
        'Cumplir con obligaciones legales'
      ]
    },
    s3: {
      title: '3. Compartir informaciÃ³n',
      dont_sell: 'No vendemos, comerciamos ni alquilamos tus datos personales.',
      only_share_with: 'Compartimos informaciÃ³n Ãºnicamente con:',
      items: {
        providers: 'Proveedores de confianza que nos ayudan a operar el sitio y prestar servicios.',
        legal: 'Autoridades competentes si la ley lo exige o para proteger nuestros derechos.'
      }
    },
    s4: {
      title: '4. Seguridad de los datos',
      text: 'Aplicamos medidas tÃ©cnicas y organizativas apropiadas para proteger tus datos personales contra el acceso no autorizado, la alteraciÃ³n, la pÃ©rdida o la eliminaciÃ³n.'
    },
    s5: {
      title: '5. Tus derechos',
      intro: 'SegÃºn tu ubicaciÃ³n, puedes tener derecho a:',
      items: [
        'Acceder, corregir o eliminar tus datos personales',
        'Oponerte o restringir el tratamiento',
        'Solicitar la portabilidad de los datos',
        'Retirar el consentimiento en cualquier momento'
      ],
      contact_hint: 'Para ejercer estos derechos, contÃ¡ctanos en'
    },
    s6: {
      title: '6. Cookies',
      text: 'Este sitio web no utiliza cookies ni tecnologÃ­as de seguimiento similares. No almacenamos ni recopilamos ninguna informaciÃ³n sobre su visita mediante dichos mÃ©todos.'
    },
    s7: {
      title: '7. Cambios en esta polÃ­tica',
      text: 'Podemos actualizar esta PolÃ­tica de Privacidad de vez en cuando. La versiÃ³n mÃ¡s reciente siempre se publicarÃ¡ en esta pÃ¡gina junto con la fecha de la Ãºltima actualizaciÃ³n. Si realizamos cambios significativos que afecten el tratamiento de sus datos personales, le informaremos de manera clara, por ejemplo, por correo electrÃ³nico o en nuestro sitio web.'
    },
    s8: {
      title: '8. ConservaciÃ³n de datos',
      text: 'Conservamos los datos personales Ãºnicamente durante el tiempo necesario para cumplir con los fines establecidos en esta PolÃ­tica de Privacidad, salvo que la ley exija o permita un perÃ­odo de conservaciÃ³n mÃ¡s largo.'
    },
    cta: {
      title: 'Â¿Preguntas sobre esta polÃ­tica?',
      desc: 'Si tienes preguntas sobre esta polÃ­tica de privacidad, no dudes en contactarnos.',
      button: 'ContÃ¡ctanos'
    }
  },
  modal: {
    title: 'ContÃ¡ctanos',
    desc: 'CuÃ©ntanos algunos detalles y te responderemos pronto.',
    company_label: 'Nombre de la empresa',
    company_placeholder: 'Ej. Yntra AB',
    tel_label: 'TelÃ©fono',
    tel_placeholder: 'Ej. +46 70 123 45 67',
    email_label: 'Correo electrÃ³nico',
    email_placeholder: 'Ej. tu@empresa.com',
    message_label: 'Mensaje',
    message_placeholder: 'CuÃ©ntanos sobre tu proyecto o consulta...',
    cancel: 'Cancelar',
    send: 'Enviar',
    privacy: 'Nunca compartiremos tu informaciÃ³n.',
    close: 'Cerrar'
  },
  schedule: {
    title: 'Agendar una llamada',
    desc: 'Elige un horario que te funcione. Nos reunimos online para hablar de tus necesidades y prÃ³ximos pasos.',
    length_label: 'DuraciÃ³n',
    min: 'min',
    type_label: 'Tipo de reuniÃ³n',
    type_phone: 'TelÃ©fono',
    pick_time: 'Elige dÃ­a y hora',
    timezone_prefix: 'Horarios mostrados en',
    custom_label: 'Otroâ€¦',
    custom_pick_label: 'Elige una fecha',
    no_slots: 'No hay horarios disponibles ese dÃ­a',
    name_label: 'Nombre',
    name_placeholder: 'Ej. Jane Doe',
    email_label: 'Correo electrÃ³nico',
    email_placeholder: 'Ej. tu@empresa.com',
    company_label: 'Empresa',
    company_placeholder: 'Ej. Yntra AB',
    tel_label: 'TelÃ©fono',
    tel_placeholder: 'Ej. +46 70 123 45 67',
    notes_label: 'Notas (opcional)',
    notes_placeholder: 'Â¿Algo especÃ­fico que quieras tratar?',
    cancel: 'Cancelar',
    confirm: 'Confirmar reserva',
    privacy: 'Te enviaremos confirmaciÃ³n e invitaciÃ³n de calendario.',
    close: 'Cerrar',
    select_time_required: 'Selecciona un horario, por favor.',
    prev_day: 'DÃ­a anterior',
    next_day: 'DÃ­a siguiente',
    calendar_open: 'Abrir calendario',
    clear_date: 'Borrar fecha'
  },
  help: {
    meta_title: 'Centro de ayuda â€” Yntra',
    meta_description: 'Encuentra respuestas, guÃ­as y recursos para empezar y tener Ã©xito con Yntra.',
    title: 'Centro de ayuda',
    subtitle: 'Encuentra respuestas rÃ¡pidas a preguntas frecuentes, lee guÃ­as y obtÃ©n soporte cuando lo necesites.',
    search_open_aria: 'Abrir bÃºsqueda',
    search_input_aria: 'Buscar en el Centro de ayuda',
    search_placeholder: 'Buscar en el Centro de ayudaâ€¦',
    search_suggestions_aria: 'Sugerencias de bÃºsqueda',
    categories: {
      title: 'Explorar categorÃ­as',
      subtitle: 'Hemos agrupado lo esencial para ayudarte a empezar, entender los precios y cÃ³mo entregamos.',
      more_help: 'Â¿Necesitas mÃ¡s ayuda?'
    },
    groups: {
      getting_started: { title: 'Primeros pasos' },
      services_pricing: { title: 'Servicios y precios' },
      project_delivery: { title: 'Proyecto y entrega' },
      tech_hosting: { title: 'TecnologÃ­a y hosting' },
      billing: { title: 'FacturaciÃ³n' },
      contact: { title: 'Contacto' }
    },
    articles: {
      'getting-started': { title: 'Â¿CÃ³mo empiezo un proyecto?', category: 'Primeros pasos' },
      pricing: { title: 'Â¿CuÃ¡nto cuesta un sitio web?', category: 'Servicios y precios' },
      process: { title: 'Â¿CuÃ¡l es el proceso de principio a fin?', category: 'Proyecto y entrega' },
      tech: { title: 'Â¿QuÃ© stack y hosting utilizÃ¡is?', category: 'TecnologÃ­a y hosting' },
      billing: { title: 'Â¿CÃ³mo funcionan la facturaciÃ³n y el pago?', category: 'FacturaciÃ³n' },
      'contact-support': { title: 'Â¿CÃ³mo contacto con soporte?', category: 'Contacto' },
      requirements: { title: 'Â¿QuÃ© necesitÃ¡is de nuestra parte?', category: 'Primeros pasos' },
      scope: { title: 'Â¿QuÃ© incluye cada paquete?', category: 'Servicios y precios' },
      addons: { title: 'Complementos y postventa', category: 'Servicios y precios' },
      quality: { title: 'Calidad y pruebas', category: 'Proyecto y entrega' },
      handover: { title: 'Lanzamiento y entrega', category: 'Proyecto y entrega' },
      performance: { title: 'Rendimiento y SEO', category: 'TecnologÃ­a y hosting' },
      security: { title: 'Seguridad y copias de seguridad', category: 'TecnologÃ­a y hosting' },
      payments: { title: 'Formas de pago', category: 'FacturaciÃ³n' },
      terms: { title: 'Contratos y rescisiÃ³n', category: 'FacturaciÃ³n' },
      slas: { title: 'Tiempos de respuesta (SLA)', category: 'Contacto' },
      book: { title: 'Reservar una llamada', category: 'Contacto' }
    },
    answers: {
      more_info: 'MÃ¡s informaciÃ³n',
      fallback: 'Detalles prÃ³ximamente.',
      'getting-started': {
        title: 'Inicio de proyecto y onboarding',
        paragraphs: [
          'Describe objetivos, pÃºblico y requisitos clave del negocio. Te enviaremos la soluciÃ³n recomendada, cronograma y modelo de costes.',
          'Al empezar configuramos un canal compartido (p. ej., Slack) y alineamos alcance y prioridades.'
        ]
      },
      pricing: {
        title: 'Modelos de precios',
        paragraphs: [
          'Paquetes cerrados cuando los entregables estÃ¡n claros; tiempo y materiales para desarrollo iterativo.',
          'Todos los modelos incluyen QA, soporte de lanzamiento y gestiÃ³n de proyecto en alcance razonable.'
        ]
      },
      process: {
        title: 'Proceso de diseÃ±o y desarrollo',
        paragraphs: [
          'Descubrimiento â†’ DiseÃ±o â†’ Desarrollo â†’ Pruebas â†’ Lanzamiento â†’ Soporte.',
          'Trabajamos de forma transparente con demos periÃ³dicas e iteraciones cortas para feedback rÃ¡pido.'
        ]
      },
      requirements: {
        title: 'QuÃ© necesitamos de ti',
        paragraphs: [
          'Activos como logotipo, guÃ­as de marca, contenido existente y referencias.',
          'Accesos para integraciones (claves API, etc.) y una persona de contacto para decisiones rÃ¡pidas.'
        ]
      },
      scope: {
        title: 'QuÃ© incluye cada paquete',
        paragraphs: [
          'Los entregables se detallan en la propuesta/SoW: pÃ¡ginas, vistas, funciones, integraciones y handover.',
          'Se pueden aÃ±adir complementos segÃºn necesidad.'
        ]
      },
      addons: {
        title: 'Complementos y postventa',
        paragraphs: [
          'Ejemplos: idiomas extra, mÃ¡s plantillas de pÃ¡gina, experimentos de growth, tests A/B, SEO ampliado.',
          'Se pueden contratar planes de soporte y mejora continua.'
        ]
      },
      quality: {
        title: 'Calidad y pruebas',
        paragraphs: [
          'Ejecutamos pruebas automatizadas y manuales, ademÃ¡s de controles de rendimiento y accesibilidad.',
          'Los errores detectados dentro del periodo acordado se corrigen sin coste adicional.'
        ]
      },
      handover: {
        title: 'Lanzamiento y entrega',
        paragraphs: [
          'Plan de lanzamiento con estrategia de rollback, documentaciÃ³n y transferencia de conocimiento.',
          'TambiÃ©n ofrecemos seguimiento y mediciÃ³n postâ€‘lanzamiento.'
        ]
      },
      tech: {
        title: 'Stack y herramientas',
        paragraphs: [
          'Stack web moderno (p. ej., SvelteKit) con foco en rendimiento, seguridad y DX.',
          'El hosting se elige segÃºn requisitos: edge/CDN o entornos en contenedores.'
        ]
      },
      performance: {
        title: 'Rendimiento y SEO',
        paragraphs: [
          'Core Web Vitals, optimizaciÃ³n de imÃ¡genes y cachÃ© por defecto.',
          'SEO tÃ©cnico y datos estructurados cuando sea relevante.'
        ]
      },
      security: {
        title: 'Seguridad y backup',
        paragraphs: [
          'Dependencias seguras, protecciÃ³n contra ataques comunes y acceso basado en roles.',
          'Procedimientos de copia y restauraciÃ³n segÃºn RPO/RTO acordados.'
        ]
      },
      billing: {
        title: 'Frecuencia de facturaciÃ³n',
        paragraphs: [
          'Mensual a mes vencido o por hito. 30 dÃ­as neto por defecto.',
          'El tiempo no utilizado puede compensarse segÃºn contrato.'
        ]
      },
      payments: {
        title: 'Formas de pago',
        paragraphs: [
          'Transferencia bancaria, tarjeta o transferencia internacional segÃºn la entidad.',
          'La factura incluye registro de horas y entregables por periodo.'
        ]
      },
      terms: {
        title: 'Contratos y rescisiÃ³n',
        paragraphs: [
          'Plazos y condiciones constan en el Acuerdo de Cliente/SoW.',
          'El trabajo puede pausarse por impago tras aviso, segÃºn las condiciones.'
        ]
      },
      'contact-support': {
        title: 'Canales de soporte',
        paragraphs: [
          'EscrÃ­benos a info@yntra.se para cualquier consulta. Para proyectos en curso usamos un canal de Slack dedicado.',
          'Las incidencias urgentes se priorizan segÃºn el SLA acordado.'
        ]
      },
      slas: {
        title: 'Tiempos de respuesta (SLA)',
        paragraphs: [
          'Consultas habituales: respuesta en 1 dÃ­a laborable. Urgentes: acuse inmediato y plan de acciÃ³n.',
          'La disponibilidad y guardias pueden incluirse en planes de soporte.'
        ]
      },
      book: {
        title: 'Reservar una llamada',
        paragraphs: [
          'Elige la hora que te convenga. Revisaremos necesidades, alcance y siguientes pasos.',
          'La reserva genera invitaciÃ³n de calendario y confirmaciÃ³n por correo.'
        ]
      }
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: 'Â¿QuÃ© tan rÃ¡pido respondÃ©is a nuevas consultas?', a: 'Normalmente en 1 dÃ­a laborable. Las urgentes se atienden mÃ¡s rÃ¡pido.' },
        { q: 'Â¿IncluÃ­s garantÃ­a y correcciÃ³n de errores tras la entrega?', a: 'SÃ­, dentro del periodo acordado corregimos sin coste adicional.' },
        { q: 'Â¿PodÃ©is trabajar con un cÃ³digo/diseÃ±o existente?', a: 'Claro. Hacemos una revisiÃ³n tÃ©cnica/UX rÃ¡pida y recomendamos la mejor vÃ­a.' },
        { q: 'Â¿CÃ³mo gestionÃ¡is cambios durante el proyecto?', a: 'Priorizamos en backlog y estimamos impacto. Ajustes menores suelen entrar en sprint.' },
        { q: 'Â¿OfrecÃ©is soporte continuo tras el lanzamiento?', a: 'SÃ­ â€” planes flexibles (SLA, mejoras, monitorizaciÃ³n e incidencias).' }
      ]
    },
    cta: {
      title: 'Â¿No encuentras lo que buscas?',
      subtitle: 'Nuestro equipo responde encantado a tus dudas y te guÃ­a hacia la soluciÃ³n adecuada.',
      contact: 'ContÃ¡ctanos',
      book_call: 'Reservar una llamada'
    },
    actions: {
      close: 'Cerrar'
    }
  }
};