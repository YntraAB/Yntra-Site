import base from './fr.json';

export default {
  ...base,
  nav: { ...(base as any).nav, helpcenter: 'Centre dâ€™aide' },
  footer: {
    ...(base as any).footer,
    resource_links: [
      ...(((base as any).footer?.resource_links) ?? []),
      'Conditions dâ€™utilisation'
    ]
  },
  design: {
    title: 'Design',
    meta_description: 'Nous concevons des expÃ©riences claires et cohÃ©rentes pour le web et les apps â€” de la recherche Ã  un design system prÃªt pour la production.',
    badge: 'Expertise Design',
    hero: 'Des annÃ©es dâ€™expÃ©rience en UX/UI et design orientÃ© marque pour des sites et des apps critiques. Nous allions recherche, flux clairs et UI cohÃ©rent pour des solutions qui convertissent mieux et sonnent juste.',
    cta_primary: 'Parler design avec nous',
    s1: {
      title: 'Ce que nous concevons',
      intro: 'Des sites marketing aux interfaces produit et design systems â€” nous livrons un design cohÃ©rent et scalable pour le rÃ©el.',
      web: { title: 'Sites web', desc: 'Marketing, campagne et corporate â€” rapides et performants.' },
      apps: { title: 'SystÃ¨mes & Apps', desc: 'Dashboards, outils internes et portails â€” clairs et efficaces.' },
      brand: { title: 'Marque & UI', desc: 'IdentitÃ© visuelle, tonalitÃ© et composants qui renforcent lâ€™ensemble.' },
      systems: { title: 'Design Systems', desc: 'Tokens, bibliothÃ¨ques de composants et guidelines pour durer.' }
    },
    s2: {
      title: 'Nos principes',
      items: [
        'ClartÃ© dâ€™abord â€” chaque Ã©cran a un objectif clair',
        'CohÃ©rence & Ã©chelle â€” des patterns partagÃ©s, des Ã©quipes plus rapides',
        'Performance & ressenti â€” des expÃ©riences rapides et fluides',
        'AccessibilitÃ© (WCAG) â€” concevoir pour tous'
      ]
    },
    s3: {
      title: 'Processus de design',
      steps: [
        { title: 'Recherche & dÃ©finition', desc: 'Objectifs, utilisateurs, marchÃ©, contraintes. Nous cadrons problÃ¨mes et succÃ¨s.' },
        { title: 'Flows & wireframes', desc: 'Parcours et lowâ€‘fi pour dÃ©cider et itÃ©rer plus tÃ´t.' },
        { title: 'UI & prototype', desc: 'Exploration visuelle, composants et prototype interactif pour valider.' },
        { title: 'Design system & handover', desc: 'Tokens, guidelines, documentation et support Ã  lâ€™implÃ©mentation.' }
      ]
    },
    cta_title: 'PrÃªts Ã  Ã©lever votre design ?',
    cta_desc: 'Parlezâ€‘nous de votre audience et de votre dÃ©fi â€” nous proposerons un plan pragmatique, prÃªt Ã  livrer.',
    tools_title: 'Outils & livrables'
  },
  system: {
    title: 'Applications',
    meta_description: 'Nous concevons et dÃ©veloppons des applications pour mobile, web et entreprise â€” surâ€‘mesure.',
    badge: 'Applications',
    hero: 'Nous crÃ©ons des applications modernes : mobile (iOS/Android), web et desktop. Code robuste, UX soignÃ©e et intÃ©grations utiles.',
    cta_primary: 'Parler applications',
    s1: {
      title: 'Ce que nous construisons',
      intro: 'Apps mobiles, apps web et applications dâ€™entreprise â€” de lâ€™idÃ©e au lancement et Ã  la maintenance.',
      internal: { title: 'Applications mobiles', desc: 'iOS/Android avec wrappers webâ€‘natifs (p. ex. Capacitor/Tauri) pour lâ€™offline, les push et la performance.' },
      automation: { title: 'Applications web', desc: 'Portails, dashboards, rÃ©servation, eâ€‘commerce et temps rÃ©el Ã  lâ€™Ã©chelle.' },
      enterprise: { title: 'Applications entreprise', desc: 'RBAC, SSO, traÃ§abilitÃ©, scalabilitÃ© et exploitation fiable (CI/CD + monitoring).' },
      custom: { title: 'IntÃ©grations & automatisation', desc: 'IntÃ©grations ERP/CRM, paiements, pipelines de donnÃ©es et jobs en arriÃ¨reâ€‘plan.' }
    },
    s2: {
      title: 'Pourquoi pour les applications',
      items: [
        'Des annÃ©es dâ€™expÃ©rience en applications complexes en production',
        'FiabilitÃ© : tests, logs, monitoring et routines',
        'SÃ©curitÃ© et accÃ¨s dÃ¨s le dÃ©part (leastâ€‘privilege)',
        'Documentation claire et maintenabilitÃ© durable'
      ]
    },
    s3: {
      title: 'Livraison & techno',
      stack_title: 'Stack technique',
      stack_text: 'SvelteKit/Node pour le web ; wrappers webâ€‘natifs (Capacitor/Tauri) pour mobile/desktop. APIâ€‘first, typage fort, CI/CD et cloud â€” choix pragmatiques.',
      delivery_title: 'Approche de delivery',
      delivery_text: 'ItÃ©rations courtes, dÃ©mos hebdo, environnements de preview et transparence. Valeur livrÃ©e tÃ´t et souvent.'
    },
    stats: {
      years: '10+ ans', years_label: 'ExpÃ©rience',
      projects: '100+', projects_label: 'Projets livrÃ©s',
      uptime: '99.9%', uptime_label: 'DisponibilitÃ© typique'
    },
    cta_title: 'PrÃªts pour votre prochain systÃ¨me ?',
    cta_desc: 'Parlezâ€‘nous de vos processus et objectifs â€” nous proposerons une solution prÃªte Ã  lancer et Ã  scaler.'
  },
  process: {
    title: 'Notre processus',
    subtitle: 'De lâ€™idÃ©e au lancement â€” transparent, efficace et de qualitÃ© Ã  chaque Ã©tape.',
    overview: {
      title: 'Un seul objectif : des rÃ©sultats sans friction',
      text: 'Nous vous accompagnons de lâ€™idÃ©e au lancement avec un processus clair et transparent qui rÃ©duit les risques et maximise la vitesse. AvancÃ©es visibles chaque semaine, cycles de dÃ©cision courts et une Ã©quipe responsable de bout en bout : design, dÃ©veloppement, intÃ©grations, tests et handover.',
      points: [
        'ItÃ©rations courtes avec dÃ©mos hebdomadaires',
        'Backlog traÃ§able et livrables clairs',
        'AccessibilitÃ©, performance et sÃ©curitÃ© dÃ¨s le premier jour',
        'Handover et documentation pour une propriÃ©tÃ© Ã  long terme'
      ]
    },
    timeline_title: 'Ã‰tape par Ã©tape',
    durations: {
      discovery: 'Discovery',
      design: 'Design',
      build: 'DÃ©velopper',
      integrate: 'IntÃ©grer',
      test: 'Tester & optimiser',
      launch: 'Lancer & support'
    },
    timeframes: {
      title: 'DÃ©lais typiques',
      marketing_title: 'Site marketing',
      marketing_desc: '4â€“8 semaines â€” selon le nombre de pages, le contenu et les intÃ©grations.',
      product_title: 'SystÃ¨me/app',
      product_desc: '6â€“12+ semaines â€” selon la complexitÃ©, le modÃ¨le de donnÃ©es et les dÃ©pendances externes.'
    },
    collaboration: {
      title: 'Collaboration & communication',
      items: [
        'RÃ©unions hebdomadaires + dÃ©mos',
        'Mises Ã  jour asynchrones et notes de version',
        'Un point de contact, retours rapides',
        'AccÃ¨s au backlog et aux issues'
      ]
    },
    quality: {
      title: 'QualitÃ© & sÃ©curitÃ©',
      items: [
        'Revue de code, vÃ©rifications CI et staging',
        'AccessibilitÃ© (WCAG), performance et SEO basique',
        'DÃ©pendances sÃ©curisÃ©es et routines de mise Ã  jour',
        'RÃ´les, accÃ¨s et stratÃ©gie de sauvegarde'
      ]
    },
    details: {
      discovery: ['Objectifs & KPIs', 'Sitemap/flows', 'Backlog/SoW', 'Plan & risques'],
      design: ['Wireframes', 'Maquettes UI', 'BibliothÃ¨que de composants', 'Prototype interactif'],
      build: ['Vues/composants terminÃ©s', 'IntÃ©grations dâ€™API', 'Notes de version', 'DÃ©mos hebdomadaires'],
      integrate: ['IntÃ©grations configurÃ©es', 'DonnÃ©es de test & environnements', 'Documentation technique'],
      test: ['Checklist & corrections de bugs', 'Rapports Lighthouse/a11y'],
      launch: ['ProcÃ©dures dâ€™exploitation & sauvegarde', 'Documentation finale']
    },
    pricing: {
      title: 'Tarification & engagement',
      fixed_title: 'Prix fixe',
      fixed_desc: 'Quand le pÃ©rimÃ¨tre est bien dÃ©fini. Devis avec livrables, jalons et dates.',
      tm_title: 'Temps & MatÃ©riaux',
      tm_desc: 'Pour un dÃ©veloppement itÃ©ratif. Rapport hebdomadaire et prioritÃ©s claires.'
    },
    cta: {
      title: 'PrÃªts Ã  construire ensemble ?',
      desc: 'Parlezâ€‘nous de vos objectifs. Nous proposerons un plan pragmatique qui Ã©quilibre vitesse, qualitÃ© et budget â€” et nous livrerons.',
      contact: 'Nous contacter'
    }
  },
  terms: {
    title: 'Conditions dâ€™utilisation',
    meta_description: 'Conditions rÃ©gissant votre utilisation du site web et des services de Yntra.',
    hero: 'Veuillez lire attentivement ces conditions. En visitant le site ou en utilisant nos services, vous les acceptez.',
    last_updated_label: 'DerniÃ¨re mise Ã  jour',
    intro_card:
      'Les prÃ©sentes Conditions dâ€™utilisation ("Conditions") rÃ©gissent votre accÃ¨s au site web de Yntra et lâ€™utilisation des services que nous fournissons. Si vous acceptez ces Conditions au nom dâ€™une entreprise, vous dÃ©clarez Ãªtre habilitÃ© Ã  engager ladite entreprise. Si vous nâ€™acceptez pas les Conditions, nâ€™utilisez pas notre site ni nos services. Si un accord client signÃ© ("Accord Client") existe, il prÃ©vaut en cas de conflit avec les prÃ©sentes Conditions.',
    s1: {
      title: '1. Acceptation et Modifications',
      acceptance: {
        title: 'Acceptation des Conditions',
        desc: 'En utilisant le site et les services, vous acceptez ces Conditions ainsi que notre Politique de confidentialitÃ©.'
      },
      changes: {
        title: 'Modifications des Conditions',
        desc: 'Nous pouvons mettre Ã  jour ces Conditions de temps Ã  autre. Les modifications prennent effet dÃ¨s leur publication. Si vous disposez dâ€™un Accord Client, celui-ci ne sera pas affectÃ© sans un consentement Ã©crit exprÃ¨s.'
      }
    },
    s2: {
      title: '2. Services et Utilisation',
      intro: 'Vous vous engagez Ã  utiliser nos services de maniÃ¨re lÃ©gale et responsable. En particulier, vous vous engagez Ã  :',
      items: [
        'Fournir des informations exactes et les maintenir Ã  jour',
        'Utiliser les services uniquement Ã  des fins lÃ©gales et conformÃ©ment aux prÃ©sentes Conditions',
        'Respecter les limites dâ€™utilisation raisonnables et les instructions que nous fournissons',
        'Ne pas tenter de perturber, de rÃ©troconcevoir ou dâ€™accÃ©der sans autorisation Ã  nos systÃ¨mes'
      ]
    },
    s3: {
      title: '3. Commandes, Frais et Paiement',
      summary: 'Les devis, cahiers des charges ou commandes dÃ©finissent la portÃ©e, les livrables, les dÃ©lais et la tarification.',
      includes: 'Sauf accord contraire dans un Accord Client :',
      items: {
        quotes: 'Devis/commandes : portÃ©e, hypothÃ¨ses, livrables, dates clÃ©s, critÃ¨res dâ€™acceptation',
        invoicing: 'Facturation : Ã©mise lors de lâ€™atteinte des jalons ou mensuellement Ã  terme Ã©chu',
        late: 'Retards de paiement : peuvent entraÃ®ner des intÃ©rÃªts et/ou une suspension des travaux aprÃ¨s notification prÃ©alable'
      }
    },
    s4: {
      title: '4. PropriÃ©tÃ© Intellectuelle',
      text: 'Yntra conserve la propriÃ©tÃ© des matÃ©riels prÃ©existants, du savoir-faire et des outils. AprÃ¨s paiement intÃ©gral, vous recevez une licence mondiale et non exclusive pour utiliser les livrables Ã  des fins internes. Si un Accord Client prÃ©voit explicitement un transfert de droits, cet accord prÃ©vaut. Les composants tiers restent soumis Ã  leurs licences respectives.'
    },
    s5: {
      title: '5. ConfidentialitÃ© et Protection des DonnÃ©es',
      intro: 'Les parties peuvent Ã©changer des informations confidentielles. Chaque partie sâ€™engage Ã  :',
      items: [
        'Utiliser les informations confidentielles de lâ€™autre partie uniquement pour remplir les obligations prÃ©vues par les prÃ©sentes Conditions',
        'ProtÃ©ger ces informations avec une diligence raisonnable et ne pas les divulguer Ã  des tiers',
        'Restituer ou supprimer les informations confidentielles sur demande, sauf si la loi impose leur conservation',
        'Traiter les donnÃ©es personnelles conformÃ©ment Ã  la lÃ©gislation applicable en matiÃ¨re de protection des donnÃ©es'
      ],
      contact_hint: 'Questions sur la gestion des donnÃ©es ? Contactez-nous Ã '
    },
    s6: {
      title: '6. Utilisation Acceptable',
      text: 'Vous ne pouvez pas utiliser le site ou les services pour : tÃ©lÃ©charger du code malveillant, enfreindre des droits de propriÃ©tÃ© intellectuelle, violer la vie privÃ©e, harceler ou nuire Ã  autrui, ou compromettre de quelque maniÃ¨re que ce soit lâ€™intÃ©gritÃ© ou la sÃ©curitÃ© des services.'
    },
    s7: {
      title: '7. Services Tiers',
      text: 'Nos livrables peuvent intÃ©grer des services ou bibliothÃ¨ques tiers. Nous ne sommes pas responsables du contenu, des politiques ou de la performance des tiers. Lâ€™utilisation de ces services est soumise Ã  leurs propres conditions.'
    },
    s8: {
      title: '8. Garanties et Exclusions',
      text: 'Sauf disposition contraire expresse dans un Accord Client, le site et les services sont fournis "en lâ€™Ã©tat" et "selon disponibilitÃ©". Nous dÃ©clinons toute garantie implicite, y compris les garanties de qualitÃ© marchande, dâ€™adÃ©quation Ã  un usage particulier et de non-contrefaÃ§on.'
    },
    s9: {
      title: '9. ResponsabilitÃ© et RÃ©siliation',
      text: 'Dans la mesure permise par la loi, Yntra ne sera pas responsable des dommages indirects, accessoires ou consÃ©cutifs. Notre responsabilitÃ© totale est limitÃ©e aux montants que vous avez payÃ©s pour les services ayant donnÃ© lieu Ã  la rÃ©clamation au cours des six (6) mois prÃ©cÃ©dents, sauf disposition contraire dans un Accord Client. Nous pouvons suspendre ou rÃ©silier lâ€™accÃ¨s en cas de violation. Vous pouvez rÃ©silier par notification Ã©crite ; les travaux effectuÃ©s et les engagements non annulables doivent Ãªtre payÃ©s. Si un Accord Client prÃ©voit des dÃ©lais de prÃ©avis spÃ©cifiques, ceux-ci prÃ©valent.'
    },
    s10: {
      title: '10. Droit Applicable et Litiges',
      text: 'Les prÃ©sentes Conditions sont rÃ©gies par le droit suÃ©dois et le droit applicable de lâ€™UE, Ã  lâ€™exclusion des rÃ¨gles de conflit de lois. Les litiges doivent dâ€™abord Ãªtre rÃ©solus par nÃ©gociation ; Ã  dÃ©faut, ils seront portÃ©s devant les tribunaux compÃ©tents en SuÃ¨de, sauf disposition contraire dans un Accord Client.'
    },
    cta: {
      title: 'Des questions sur ces Conditions ?',
      desc: 'Vous avez besoin de prÃ©cisions ou dâ€™un accord personnalisÃ© ? Contactez-nous.',
      button: 'Nous contacter'
    }
  },
  privacy: {
    title: 'Politique de confidentialitÃ©',
    meta_description: 'Comment Yntra collecte, utilise et protÃ¨ge vos donnÃ©es personnelles.',
    hero: 'Comment nous traitons vos donnÃ©es personnelles lorsque vous visitez notre site ou utilisez nos services.',
    last_updated_label: 'DerniÃ¨re mise Ã  jour',
    intro_card:
      'Nous accordons une grande importance Ã  votre vie privÃ©e et protÃ©geons vos donnÃ©es personnelles. Cette politique explique comment nous collectons, utilisons et protÃ©geons vos informations lorsque vous visitez notre site web ou utilisez nos services.',
    s1: {
      title: '1. DonnÃ©es que nous collectons',
      intro: 'Nous pouvons collecter les types de donnÃ©es suivants :',
      personal: {
        title: 'DonnÃ©es personnelles',
        desc: 'Par exemple : nom, adresse eâ€‘mail, numÃ©ro de tÃ©lÃ©phone et informations dâ€™entreprise lorsque vous nous contactez ou demandez un service.'
      },
      technical: {
        title: 'Informations techniques',
        desc: 'Par exemple : adresse IP, type de navigateur, informations sur lâ€™appareil et donnÃ©es dâ€™utilisation collectÃ©es automatiquement lorsque vous interagissez avec notre site.'
      }
    },
    s2: {
      title: '2. Comment nous utilisons les donnÃ©es',
      intro: 'Nous utilisons les donnÃ©es pour :',
      items: [
        'Fournir, exploiter et amÃ©liorer nos services',
        'Communiquer avec vous au sujet des demandes, projets et du support',
        'Analyser lâ€™utilisation du site et amÃ©liorer lâ€™expÃ©rience',
        'Respecter nos obligations lÃ©gales'
      ]
    },
    s3: {
      title: '3. Partage des donnÃ©es',
      dont_sell: 'Nous ne vendons, nâ€™Ã©changeons ni ne louons vos donnÃ©es personnelles.',
      only_share_with: 'Nous partageons des donnÃ©es uniquement avec :',
      items: {
        providers: 'Des prestataires de confiance nous aidant Ã  exploiter le site et Ã  fournir nos services.',
        legal: 'Les autoritÃ©s compÃ©tentes si la loi lâ€™exige ou pour protÃ©ger nos droits.'
      }
    },
    s4: {
      title: '4. SÃ©curitÃ© des donnÃ©es',
      text: 'Nous mettons en Å“uvre des mesures techniques et organisationnelles appropriÃ©es pour protÃ©ger vos donnÃ©es personnelles contre lâ€™accÃ¨s non autorisÃ©, la modification, la perte ou la suppression.'
    },
    s5: {
      title: '5. Vos droits',
      intro: 'Selon votre lieu de rÃ©sidence, vous pouvez avoir le droit de :',
      items: [
        'AccÃ©der Ã  vos donnÃ©es personnelles, les corriger ou les supprimer',
        'Vous opposer au traitement ou le restreindre',
        'Demander la portabilitÃ© des donnÃ©es',
        'Retirer votre consentement Ã  tout moment'
      ],
      contact_hint: 'Pour exercer ces droits, contactezâ€‘nous Ã '
    },
    s6: {
      title: '6. Cookies',
      text: 'Ce site web nâ€™utilise pas de cookies ni de technologies de suivi similaires. Nous ne stockons ni ne collectons aucune information concernant votre visite par de tels moyens.'
    },
    s7: {
      title: '7. Modifications de cette politique',
      text: 'Nous pouvons mettre Ã  jour la prÃ©sente Politique de confidentialitÃ© de temps Ã  autre. La version la plus rÃ©cente sera toujours publiÃ©e sur cette page, accompagnÃ©e de la date de la derniÃ¨re mise Ã  jour. Si nous apportons des modifications importantes concernant la maniÃ¨re dont nous traitons vos donnÃ©es personnelles, nous vous en informerons de faÃ§on claire, par exemple par e-mail ou sur notre site web.'
    },
    s8: {
      title: '8. Conservation des donnÃ©es',
      text: 'Nous conservons les donnÃ©es personnelles uniquement pendant la durÃ©e nÃ©cessaire Ã  la rÃ©alisation des finalitÃ©s dÃ©crites dans la prÃ©sente Politique de confidentialitÃ©, sauf si une pÃ©riode de conservation plus longue est requise ou autorisÃ©e par la loi.'
    },
    cta: {
      title: 'Des questions au sujet de cette politique ?',
      desc: 'Si vous avez des questions concernant cette politique de confidentialitÃ©, nâ€™hÃ©sitez pas Ã  nous contacter.',
      button: 'Nous contacter'
    }
  },
  help: {
    meta_title: 'Centre dâ€™aide â€” Yntra',
    meta_description: 'Trouvez des rÃ©ponses, des guides et des ressources pour bien dÃ©marrer avec Yntra.',
    title: 'Centre dâ€™aide',
    subtitle: 'Des rÃ©ponses rapides aux questions frÃ©quentes, des guides Ã  lire et de lâ€™assistance quand vous en avez besoin.',
    search_open_aria: 'Ouvrir la recherche',
    search_input_aria: 'Rechercher dans le Centre dâ€™aide',
    search_placeholder: 'Rechercher dans le Centre dâ€™aideâ€¦',
    search_suggestions_aria: 'Suggestions de recherche',
    categories: {
      title: 'Explorer les catÃ©gories',
      subtitle: 'Lâ€™essentiel regroupÃ© pour dÃ©marrer, comprendre les tarifs et notre mode de livraison.',
      more_help: 'Besoin de plus dâ€™aide ?'
    },
    groups: {
      getting_started: { title: 'Bien dÃ©marrer' },
      services_pricing: { title: 'Services & tarifs' },
      project_delivery: { title: 'Projet & livraison' },
      tech_hosting: { title: 'Technologie & hÃ©bergement' },
      billing: { title: 'Facturation' },
      contact: { title: 'Contact' }
    },
    articles: {
      'getting-started': { title: 'Comment dÃ©marrer un projet ?', category: 'Bien dÃ©marrer' },
      pricing: { title: 'Combien coÃ»te un site web ?', category: 'Services & tarifs' },
      process: { title: 'Quel est le processus de bout en bout ?', category: 'Projet & livraison' },
      tech: { title: 'Quelle stack et quel hÃ©bergement utilisez-vous ?', category: 'Technologie & hÃ©bergement' },
      billing: { title: 'Comment fonctionnent la facturation et le paiement ?', category: 'Facturation' },
      'contact-support': { title: 'Comment contacter le support ?', category: 'Contact' },
      requirements: { title: 'De quoi avonsâ€‘nous besoin de votre part ?', category: 'Bien dÃ©marrer' },
      scope: { title: 'Que comprend chaque offre ?', category: 'Services & tarifs' },
      addons: { title: 'Options & postâ€‘achat', category: 'Services & tarifs' },
      quality: { title: 'QualitÃ© & tests', category: 'Projet & livraison' },
      handover: { title: 'Mise en ligne & passation', category: 'Projet & livraison' },
      performance: { title: 'Performance & SEO', category: 'Technologie & hÃ©bergement' },
      security: { title: 'SÃ©curitÃ© & sauvegarde', category: 'Technologie & hÃ©bergement' },
      payments: { title: 'Modes de paiement', category: 'Facturation' },
      terms: { title: 'Contrats & rÃ©siliation', category: 'Facturation' },
      slas: { title: 'DÃ©lais de rÃ©ponse (SLA)', category: 'Contact' },
      book: { title: 'Planifier un appel', category: 'Contact' }
    },
    answers: {
      more_info: 'Plus dâ€™informations',
      fallback: 'DÃ©tails Ã  venir.',
      'getting-started': {
        title: 'Lancement de projet & onboarding',
        paragraphs: [
          'DÃ©crivez vos objectifs, votre audience et les exigences clÃ©s. Nous reviendrons avec une solution recommandÃ©e, un calendrier et un modÃ¨le de tarification.',
          'Au dÃ©marrage, nous ouvrons un canal commun (ex. Slack) et alignons le pÃ©rimÃ¨tre et les prioritÃ©s.'
        ]
      },
      pricing: {
        title: 'ModÃ¨les de tarification',
        paragraphs: [
          'Forfaits fixes quand les livrables sont clairs ; rÃ©gie (T&M) pour un dÃ©veloppement itÃ©ratif.',
          'Tous les modÃ¨les incluent QA, support de mise en ligne et gestion de projet dans un pÃ©rimÃ¨tre raisonnable.'
        ]
      },
      process: {
        title: 'Processus de design & dÃ©veloppement',
        paragraphs: [
          'Discovery â†’ Design â†’ DÃ©veloppement â†’ Tests â†’ Mise en ligne â†’ Support.',
          'Travail transparent avec dÃ©mos rÃ©guliÃ¨res et itÃ©rations courtes pour un feedback rapide.'
        ]
      },
      requirements: {
        title: 'Ce dont nous avons besoin',
        paragraphs: [
          'Assets (logo, guidelines), contenus existants et Ã©ventuelles rÃ©fÃ©rences.',
          'AccÃ¨s pour les intÃ©grations (clÃ©s API, etc.) et un contact pour des dÃ©cisions rapides.'
        ]
      },
      scope: {
        title: 'Ce que comprennent les offres',
        paragraphs: [
          'Livrables prÃ©cisÃ©s dans le devis/SoW : pages, vues, fonctionnalitÃ©s, intÃ©grations et passation.',
          'Des options peuvent Ãªtre ajoutÃ©es selon les besoins.'
        ]
      },
      addons: {
        title: 'Options & postâ€‘achat',
        paragraphs: [
          'Exemples : langues supplÃ©mentaires, modÃ¨les de page, expÃ©riences growth, A/B tests, SEO Ã©tendu.',
          'Des offres de support et dâ€™amÃ©lioration continue peuvent Ãªtre souscrites.'
        ]
      },
      quality: {
        title: 'QualitÃ© & tests',
        paragraphs: [
          'Tests automatisÃ©s et manuels, contrÃ´les de performance et dâ€™accessibilitÃ©.',
          'Les anomalies dÃ©tectÃ©es dans la fenÃªtre convenue sont corrigÃ©es sans frais.'
        ]
      },
      handover: {
        title: 'Mise en ligne & passation',
        paragraphs: [
          'Plan de mise en ligne avec stratÃ©gie de rollback, documentation et transfert de connaissances.',
          'Suivi et mesure postâ€‘lancement possibles.'
        ]
      },
      tech: {
        title: 'Stack & outils',
        paragraphs: [
          'Stack web moderne (ex. SvelteKit) orientÃ© performance, sÃ©curitÃ© et DX.',
          'HÃ©bergement selon les besoins : edge/CDN ou environnements conteneurisÃ©s.'
        ]
      },
      performance: {
        title: 'Performance & SEO',
        paragraphs: [
          'Core Web Vitals, optimisation dâ€™images et cache par dÃ©faut.',
          'SEO technique et donnÃ©es structurÃ©es lorsque pertinent.'
        ]
      },
      security: {
        title: 'SÃ©curitÃ© & sauvegarde',
        paragraphs: [
          'DÃ©pendances sÃ©curisÃ©es, protection contre les attaques courantes, accÃ¨s basÃ© sur les rÃ´les.',
          'ProcÃ©dures de sauvegarde et restauration selon RPO/RTO convenus.'
        ]
      },
      billing: {
        title: 'Rythme de facturation',
        paragraphs: [
          'Mensuel Ã  terme Ã©chu ou par jalon. 30 jours nets par dÃ©faut.',
          'Le temps non utilisÃ© peut Ãªtre imputÃ© selon lâ€™accord.'
        ]
      },
      payments: {
        title: 'Modes de paiement',
        paragraphs: [
          'Virement, carte ou transfert international selon lâ€™entitÃ©.',
          'La facture comprend les temps et livrables par pÃ©riode.'
        ]
      },
      terms: {
        title: 'Contrats & rÃ©siliation',
        paragraphs: [
          'Conditions et dÃ©lais indiquÃ©s dans lâ€™Accord Client/SoW.',
          'Le travail peut Ãªtre suspendu en cas de retard de paiement aprÃ¨s notification.'
        ]
      },
      'contact-support': {
        title: 'Canaux de support',
        paragraphs: [
          'Ã‰crivezâ€‘nous Ã  info@yntra.se pour toute demande. Pour les projets en cours, nous utilisons un canal Slack dÃ©diÃ©.',
          'Les incidents urgents sont priorisÃ©s conformÃ©ment au SLA convenu.'
        ]
      },
      slas: {
        title: 'DÃ©lais de rÃ©ponse (SLA)',
        paragraphs: [
          'Demandes standard : rÃ©ponse sous 1 jour ouvrÃ©. Urgent : accusÃ© immÃ©diat et plan dâ€™action.',
          'DisponibilitÃ© et astreintes possibles via des offres de support.'
        ]
      },
      book: {
        title: 'Planifier un appel',
        paragraphs: [
          'Choisissez un crÃ©neau adaptÃ©. Nous passerons en revue les besoins, le pÃ©rimÃ¨tre et les prochaines Ã©tapes.',
          'Vous recevez une invitation calendrier et une confirmation par eâ€‘mail.'
        ]
      }
    },
    faq: {
      title: 'Questions frÃ©quentes',
      items: [
        { q: 'Ã€ quelle vitesse rÃ©pondezâ€‘vous aux nouvelles demandes ?', a: 'GÃ©nÃ©ralement sous 1 jour ouvrÃ©. Plus rapidement pour les urgences.' },
        { q: 'Incluezâ€‘vous une garantie et des correctifs aprÃ¨s la livraison ?', a: 'Oui â€” pendant la pÃ©riode convenue, nous corrigeons sans frais.' },
        { q: 'Pouvezâ€‘vous travailler sur une base de code/design existante ?', a: 'Oui. Nous faisons une revue technique/UX et recommandons la meilleure voie.' },
        { q: 'Comment gÃ©rezâ€‘vous les changements en cours de projet ?', a: 'Priorisation dans le backlog et estimation de lâ€™impact. Les petits ajustements tiennent souvent dans un sprint.' },
        { q: 'Proposezâ€‘vous un support continu aprÃ¨s la mise en ligne ?', a: 'Oui â€” offres flexibles (SLA, amÃ©liorations, monitoring, incidents).' }
      ]
    },
    cta: {
      title: 'Vous ne trouvez pas ce que vous cherchez ?',
      subtitle: 'Notre Ã©quipe sera ravie de rÃ©pondre Ã  vos questions et de vous orienter vers la bonne solution.',
      contact: 'Nous contacter',
      book_call: 'Planifier un appel'
    },
    actions: {
      close: 'Fermer'
    }
  },
  modal: {
    title: 'Nous contacter',
    desc: 'Partagez quelques informations et nous vous rÃ©pondrons rapidement.',
    company_label: 'Nom de lâ€™entreprise',
    company_placeholder: 'Ex. Yntra AB',
    tel_label: 'TÃ©lÃ©phone',
    tel_placeholder: 'Ex. +46 70 123 45 67',
    email_label: 'Eâ€‘mail',
    email_placeholder: 'Ex. vous@entreprise.com',
    message_label: 'Message',
    message_placeholder: 'Parlezâ€‘nous de votre projet ou questionâ€¦',
    cancel: 'Annuler',
    send: 'Envoyer',
    privacy: 'Nous ne partagerons jamais vos informations.',
    close: 'Fermer'
  },
  schedule: {
    title: 'Planifier un appel',
    desc: 'Choisissez un crÃ©neau qui vous convient. Nous Ã©changerons en ligne sur vos besoins et les prochaines Ã©tapes.',
    length_label: 'DurÃ©e',
    min: 'min',
    type_label: 'Type de rendezâ€‘vous',
    type_phone: 'TÃ©lÃ©phone',
    pick_time: 'Choisir un jour et une heure',
    timezone_prefix: 'Heures affichÃ©es en',
    custom_label: 'Autreâ€¦',
    custom_pick_label: 'Choisir une date',
    no_slots: 'Aucun crÃ©neau disponible ce jourâ€‘lÃ ',
    name_label: 'Nom',
    name_placeholder: 'Ex. Jane Doe',
    email_label: 'Eâ€‘mail',
    email_placeholder: 'Ex. vous@entreprise.com',
    company_label: 'Entreprise',
    company_placeholder: 'Ex. Yntra AB',
    tel_label: 'TÃ©lÃ©phone',
    tel_placeholder: 'Ex. +46 70 123 45 67',
    notes_label: 'Notes (optionnel)',
    notes_placeholder: 'Souhaitezâ€‘vous aborder un sujet prÃ©cis ?',
    cancel: 'Annuler',
    confirm: 'Confirmer la rÃ©servation',
    privacy: 'Nous enverrons une confirmation et une invitation calendrier.',
    close: 'Fermer',
    select_time_required: 'Veuillez sÃ©lectionner un crÃ©neau horaire.',
    prev_day: 'Jour prÃ©cÃ©dent',
    next_day: 'Jour suivant',
    calendar_open: 'Ouvrir le calendrier',
    clear_date: 'Effacer la date'
  }
};