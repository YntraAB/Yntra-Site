import base from './fr.json';

export default {
  ...base,
  nav: { ...(base as any).nav, helpcenter: 'Centre d’aide' },
  footer: {
    ...(base as any).footer,
    resource_links: [
      ...(((base as any).footer?.resource_links) ?? []),
      'Conditions d’utilisation'
    ]
  },
  design: {
    title: 'Design',
    meta_description: 'Nous concevons des expériences claires et cohérentes pour le web et les apps — de la recherche à un design system prêt pour la production.',
    badge: 'Expertise Design',
    hero: 'Des années d’expérience en UX/UI et design orienté marque pour des sites et des apps critiques. Nous allions recherche, flux clairs et UI cohérent pour des solutions qui convertissent mieux et sonnent juste.',
    cta_primary: 'Parler design avec nous',
    s1: {
      title: 'Ce que nous concevons',
      intro: 'Des sites marketing aux interfaces produit et design systems — nous livrons un design cohérent et scalable pour le réel.',
      web: { title: 'Sites web', desc: 'Marketing, campagne et corporate — rapides et performants.' },
      apps: { title: 'Systèmes & Apps', desc: 'Dashboards, outils internes et portails — clairs et efficaces.' },
      brand: { title: 'Marque & UI', desc: 'Identité visuelle, tonalité et composants qui renforcent l’ensemble.' },
      systems: { title: 'Design Systems', desc: 'Tokens, bibliothèques de composants et guidelines pour durer.' }
    },
    s2: {
      title: 'Nos principes',
      items: [
        'Clarté d’abord — chaque écran a un objectif clair',
        'Cohérence & échelle — des patterns partagés, des équipes plus rapides',
        'Performance & ressenti — des expériences rapides et fluides',
        'Accessibilité (WCAG) — concevoir pour tous'
      ]
    },
    s3: {
      title: 'Processus de design',
      steps: [
        { title: 'Recherche & définition', desc: 'Objectifs, utilisateurs, marché, contraintes. Nous cadrons problèmes et succès.' },
        { title: 'Flows & wireframes', desc: 'Parcours et low‑fi pour décider et itérer plus tôt.' },
        { title: 'UI & prototype', desc: 'Exploration visuelle, composants et prototype interactif pour valider.' },
        { title: 'Design system & handover', desc: 'Tokens, guidelines, documentation et support à l’implémentation.' }
      ]
    },
    cta_title: 'Prêts à élever votre design ?',
    cta_desc: 'Parlez‑nous de votre audience et de votre défi — nous proposerons un plan pragmatique, prêt à livrer.',
    tools_title: 'Outils & livrables'
  },
  system: {
    title: 'Applications',
    meta_description: 'Nous concevons et développons des applications pour mobile, web et entreprise — sur‑mesure.',
    badge: 'Applications',
    hero: 'Nous créons des applications modernes : mobile (iOS/Android), web et desktop. Code robuste, UX soignée et intégrations utiles.',
    cta_primary: 'Parler applications',
    s1: {
      title: 'Ce que nous construisons',
      intro: 'Apps mobiles, apps web et applications d’entreprise — de l’idée au lancement et à la maintenance.',
      internal: { title: 'Applications mobiles', desc: 'iOS/Android avec wrappers web‑natifs (p. ex. Capacitor/Tauri) pour l’offline, les push et la performance.' },
      automation: { title: 'Applications web', desc: 'Portails, dashboards, réservation, e‑commerce et temps réel à l’échelle.' },
      enterprise: { title: 'Applications entreprise', desc: 'RBAC, SSO, traçabilité, scalabilité et exploitation fiable (CI/CD + monitoring).' },
      custom: { title: 'Intégrations & automatisation', desc: 'Intégrations ERP/CRM, paiements, pipelines de données et jobs en arrière‑plan.' }
    },
    s2: {
      title: 'Pourquoi pour les applications',
      items: [
        'Des années d’expérience en applications complexes en production',
        'Fiabilité : tests, logs, monitoring et routines',
        'Sécurité et accès dès le départ (least‑privilege)',
        'Documentation claire et maintenabilité durable'
      ]
    },
    s3: {
      title: 'Livraison & techno',
      stack_title: 'Stack technique',
      stack_text: 'SvelteKit/Node pour le web ; wrappers web‑natifs (Capacitor/Tauri) pour mobile/desktop. API‑first, typage fort, CI/CD et cloud — choix pragmatiques.',
      delivery_title: 'Approche de delivery',
      delivery_text: 'Itérations courtes, démos hebdo, environnements de preview et transparence. Valeur livrée tôt et souvent.'
    },
    stats: {
      years: '10+ ans', years_label: 'Expérience',
      projects: '100+', projects_label: 'Projets livrés',
      uptime: '99.9%', uptime_label: 'Disponibilité typique'
    },
    cta_title: 'Prêts pour votre prochain système ?',
    cta_desc: 'Parlez‑nous de vos processus et objectifs — nous proposerons une solution prête à lancer et à scaler.'
  },
  process: {
    title: 'Notre processus',
    subtitle: 'De l’idée au lancement — transparent, efficace et de qualité à chaque étape.',
    overview: {
      title: 'Un seul objectif : des résultats sans friction',
      text: 'Nous vous accompagnons de l’idée au lancement avec un processus clair et transparent qui réduit les risques et maximise la vitesse. Avancées visibles chaque semaine, cycles de décision courts et une équipe responsable de bout en bout : design, développement, intégrations, tests et handover.',
      points: [
        'Itérations courtes avec démos hebdomadaires',
        'Backlog traçable et livrables clairs',
        'Accessibilité, performance et sécurité dès le premier jour',
        'Handover et documentation pour une propriété à long terme'
      ]
    },
    timeline_title: 'Étape par étape',
    durations: {
      discovery: 'Discovery',
      design: 'Design',
      build: 'Développer',
      integrate: 'Intégrer',
      test: 'Tester & optimiser',
      launch: 'Lancer & support'
    },
    timeframes: {
      title: 'Délais typiques',
      marketing_title: 'Site marketing',
      marketing_desc: '4–8 semaines — selon le nombre de pages, le contenu et les intégrations.',
      product_title: 'Système/app',
      product_desc: '6–12+ semaines — selon la complexité, le modèle de données et les dépendances externes.'
    },
    collaboration: {
      title: 'Collaboration & communication',
      items: [
        'Réunions hebdomadaires + démos',
        'Mises à jour asynchrones et notes de version',
        'Un point de contact, retours rapides',
        'Accès au backlog et aux issues'
      ]
    },
    quality: {
      title: 'Qualité & sécurité',
      items: [
        'Revue de code, vérifications CI et staging',
        'Accessibilité (WCAG), performance et SEO basique',
        'Dépendances sécurisées et routines de mise à jour',
        'Rôles, accès et stratégie de sauvegarde'
      ]
    },
    details: {
      discovery: ['Objectifs & KPIs', 'Sitemap/flows', 'Backlog/SoW', 'Plan & risques'],
      design: ['Wireframes', 'Maquettes UI', 'Bibliothèque de composants', 'Prototype interactif'],
      build: ['Vues/composants terminés', 'Intégrations d’API', 'Notes de version', 'Démos hebdomadaires'],
      integrate: ['Intégrations configurées', 'Données de test & environnements', 'Documentation technique'],
      test: ['Checklist & corrections de bugs', 'Rapports Lighthouse/a11y'],
      launch: ['Procédures d’exploitation & sauvegarde', 'Documentation finale']
    },
    pricing: {
      title: 'Tarification & engagement',
      fixed_title: 'Prix fixe',
      fixed_desc: 'Quand le périmètre est bien défini. Devis avec livrables, jalons et dates.',
      tm_title: 'Temps & Matériaux',
      tm_desc: 'Pour un développement itératif. Rapport hebdomadaire et priorités claires.'
    },
    cta: {
      title: 'Prêts à construire ensemble ?',
      desc: 'Parlez‑nous de vos objectifs. Nous proposerons un plan pragmatique qui équilibre vitesse, qualité et budget — et nous livrerons.',
      contact: 'Nous contacter'
    }
  },
  terms: {
    title: 'Conditions d’utilisation',
    meta_description: 'Conditions régissant votre utilisation du site web et des services de Yntra.',
    hero: 'Veuillez lire attentivement ces conditions. En visitant le site ou en utilisant nos services, vous les acceptez.',
    last_updated_label: 'Dernière mise à jour',
    intro_card:
      'Les présentes Conditions d’utilisation ("Conditions") régissent votre accès au site web de Yntra et l’utilisation des services que nous fournissons. Si vous acceptez ces Conditions au nom d’une entreprise, vous déclarez être habilité à engager ladite entreprise. Si vous n’acceptez pas les Conditions, n’utilisez pas notre site ni nos services. Si un accord client signé ("Accord Client") existe, il prévaut en cas de conflit avec les présentes Conditions.',
    s1: {
      title: '1. Acceptation et Modifications',
      acceptance: {
        title: 'Acceptation des Conditions',
        desc: 'En utilisant le site et les services, vous acceptez ces Conditions ainsi que notre Politique de confidentialité.'
      },
      changes: {
        title: 'Modifications des Conditions',
        desc: 'Nous pouvons mettre à jour ces Conditions de temps à autre. Les modifications prennent effet dès leur publication. Si vous disposez d’un Accord Client, celui-ci ne sera pas affecté sans un consentement écrit exprès.'
      }
    },
    s2: {
      title: '2. Services et Utilisation',
      intro: 'Vous vous engagez à utiliser nos services de manière légale et responsable. En particulier, vous vous engagez à :',
      items: [
        'Fournir des informations exactes et les maintenir à jour',
        'Utiliser les services uniquement à des fins légales et conformément aux présentes Conditions',
        'Respecter les limites d’utilisation raisonnables et les instructions que nous fournissons',
        'Ne pas tenter de perturber, de rétroconcevoir ou d’accéder sans autorisation à nos systèmes'
      ]
    },
    s3: {
      title: '3. Commandes, Frais et Paiement',
      summary: 'Les devis, cahiers des charges ou commandes définissent la portée, les livrables, les délais et la tarification.',
      includes: 'Sauf accord contraire dans un Accord Client :',
      items: {
        quotes: 'Devis/commandes : portée, hypothèses, livrables, dates clés, critères d’acceptation',
        invoicing: 'Facturation : émise lors de l’atteinte des jalons ou mensuellement à terme échu',
        late: 'Retards de paiement : peuvent entraîner des intérêts et/ou une suspension des travaux après notification préalable'
      }
    },
    s4: {
      title: '4. Propriété Intellectuelle',
      text: 'Yntra conserve la propriété des matériels préexistants, du savoir-faire et des outils. Après paiement intégral, vous recevez une licence mondiale et non exclusive pour utiliser les livrables à des fins internes. Si un Accord Client prévoit explicitement un transfert de droits, cet accord prévaut. Les composants tiers restent soumis à leurs licences respectives.'
    },
    s5: {
      title: '5. Confidentialité et Protection des Données',
      intro: 'Les parties peuvent échanger des informations confidentielles. Chaque partie s’engage à :',
      items: [
        'Utiliser les informations confidentielles de l’autre partie uniquement pour remplir les obligations prévues par les présentes Conditions',
        'Protéger ces informations avec une diligence raisonnable et ne pas les divulguer à des tiers',
        'Restituer ou supprimer les informations confidentielles sur demande, sauf si la loi impose leur conservation',
        'Traiter les données personnelles conformément à la législation applicable en matière de protection des données'
      ],
      contact_hint: 'Questions sur la gestion des données ? Contactez-nous à'
    },
    s6: {
      title: '6. Utilisation Acceptable',
      text: 'Vous ne pouvez pas utiliser le site ou les services pour : télécharger du code malveillant, enfreindre des droits de propriété intellectuelle, violer la vie privée, harceler ou nuire à autrui, ou compromettre de quelque manière que ce soit l’intégrité ou la sécurité des services.'
    },
    s7: {
      title: '7. Services Tiers',
      text: 'Nos livrables peuvent intégrer des services ou bibliothèques tiers. Nous ne sommes pas responsables du contenu, des politiques ou de la performance des tiers. L’utilisation de ces services est soumise à leurs propres conditions.'
    },
    s8: {
      title: '8. Garanties et Exclusions',
      text: 'Sauf disposition contraire expresse dans un Accord Client, le site et les services sont fournis "en l’état" et "selon disponibilité". Nous déclinons toute garantie implicite, y compris les garanties de qualité marchande, d’adéquation à un usage particulier et de non-contrefaçon.'
    },
    s9: {
      title: '9. Responsabilité et Résiliation',
      text: 'Dans la mesure permise par la loi, Yntra ne sera pas responsable des dommages indirects, accessoires ou consécutifs. Notre responsabilité totale est limitée aux montants que vous avez payés pour les services ayant donné lieu à la réclamation au cours des six (6) mois précédents, sauf disposition contraire dans un Accord Client. Nous pouvons suspendre ou résilier l’accès en cas de violation. Vous pouvez résilier par notification écrite ; les travaux effectués et les engagements non annulables doivent être payés. Si un Accord Client prévoit des délais de préavis spécifiques, ceux-ci prévalent.'
    },
    s10: {
      title: '10. Droit Applicable et Litiges',
      text: 'Les présentes Conditions sont régies par le droit suédois et le droit applicable de l’UE, à l’exclusion des règles de conflit de lois. Les litiges doivent d’abord être résolus par négociation ; à défaut, ils seront portés devant les tribunaux compétents en Suède, sauf disposition contraire dans un Accord Client.'
    },
    cta: {
      title: 'Des questions sur ces Conditions ?',
      desc: 'Vous avez besoin de précisions ou d’un accord personnalisé ? Contactez-nous.',
      button: 'Nous contacter'
    }
  },
  privacy: {
    title: 'Politique de confidentialité',
    meta_description: 'Comment Yntra collecte, utilise et protège vos données personnelles.',
    hero: 'Comment nous traitons vos données personnelles lorsque vous visitez notre site ou utilisez nos services.',
    last_updated_label: 'Dernière mise à jour',
    intro_card:
      'Nous accordons une grande importance à votre vie privée et protégeons vos données personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site web ou utilisez nos services.',
    s1: {
      title: '1. Données que nous collectons',
      intro: 'Nous pouvons collecter les types de données suivants :',
      personal: {
        title: 'Données personnelles',
        desc: 'Par exemple : nom, adresse e‑mail, numéro de téléphone et informations d’entreprise lorsque vous nous contactez ou demandez un service.'
      },
      technical: {
        title: 'Informations techniques',
        desc: 'Par exemple : adresse IP, type de navigateur, informations sur l’appareil et données d’utilisation collectées automatiquement lorsque vous interagissez avec notre site.'
      }
    },
    s2: {
      title: '2. Comment nous utilisons les données',
      intro: 'Nous utilisons les données pour :',
      items: [
        'Fournir, exploiter et améliorer nos services',
        'Communiquer avec vous au sujet des demandes, projets et du support',
        'Analyser l’utilisation du site et améliorer l’expérience',
        'Respecter nos obligations légales'
      ]
    },
    s3: {
      title: '3. Partage des données',
      dont_sell: 'Nous ne vendons, n’échangeons ni ne louons vos données personnelles.',
      only_share_with: 'Nous partageons des données uniquement avec :',
      items: {
        providers: 'Des prestataires de confiance nous aidant à exploiter le site et à fournir nos services.',
        legal: 'Les autorités compétentes si la loi l’exige ou pour protéger nos droits.'
      }
    },
    s4: {
      title: '4. Sécurité des données',
      text: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre l’accès non autorisé, la modification, la perte ou la suppression.'
    },
    s5: {
      title: '5. Vos droits',
      intro: 'Selon votre lieu de résidence, vous pouvez avoir le droit de :',
      items: [
        'Accéder à vos données personnelles, les corriger ou les supprimer',
        'Vous opposer au traitement ou le restreindre',
        'Demander la portabilité des données',
        'Retirer votre consentement à tout moment'
      ],
      contact_hint: 'Pour exercer ces droits, contactez‑nous à'
    },
    s6: {
      title: '6. Cookies',
      text: 'Ce site web n’utilise pas de cookies ni de technologies de suivi similaires. Nous ne stockons ni ne collectons aucune information concernant votre visite par de tels moyens.'
    },
    s7: {
      title: '7. Modifications de cette politique',
      text: 'Nous pouvons mettre à jour la présente Politique de confidentialité de temps à autre. La version la plus récente sera toujours publiée sur cette page, accompagnée de la date de la dernière mise à jour. Si nous apportons des modifications importantes concernant la manière dont nous traitons vos données personnelles, nous vous en informerons de façon claire, par exemple par e-mail ou sur notre site web.'
    },
    s8: {
      title: '8. Conservation des données',
      text: 'Nous conservons les données personnelles uniquement pendant la durée nécessaire à la réalisation des finalités décrites dans la présente Politique de confidentialité, sauf si une période de conservation plus longue est requise ou autorisée par la loi.'
    },
    cta: {
      title: 'Des questions au sujet de cette politique ?',
      desc: 'Si vous avez des questions concernant cette politique de confidentialité, n’hésitez pas à nous contacter.',
      button: 'Nous contacter'
    }
  },
  help: {
    meta_title: 'Centre d’aide — Yntra',
    meta_description: 'Trouvez des réponses, des guides et des ressources pour bien démarrer avec Yntra.',
    title: 'Centre d’aide',
    subtitle: 'Des réponses rapides aux questions fréquentes, des guides à lire et de l’assistance quand vous en avez besoin.',
    search_open_aria: 'Ouvrir la recherche',
    search_input_aria: 'Rechercher dans le Centre d’aide',
    search_placeholder: 'Rechercher dans le Centre d’aide…',
    search_suggestions_aria: 'Suggestions de recherche',
    categories: {
      title: 'Explorer les catégories',
      subtitle: 'L’essentiel regroupé pour démarrer, comprendre les tarifs et notre mode de livraison.',
      more_help: 'Besoin de plus d’aide ?'
    },
    groups: {
      getting_started: { title: 'Bien démarrer' },
      services_pricing: { title: 'Services & tarifs' },
      project_delivery: { title: 'Projet & livraison' },
      tech_hosting: { title: 'Technologie & hébergement' },
      billing: { title: 'Facturation' },
      contact: { title: 'Contact' }
    },
    articles: {
      'getting-started': { title: 'Comment démarrer un projet ?', category: 'Bien démarrer' },
      pricing: { title: 'Combien coûte un site web ?', category: 'Services & tarifs' },
      process: { title: 'Quel est le processus de bout en bout ?', category: 'Projet & livraison' },
      tech: { title: 'Quelle stack et quel hébergement utilisez-vous ?', category: 'Technologie & hébergement' },
      billing: { title: 'Comment fonctionnent la facturation et le paiement ?', category: 'Facturation' },
      'contact-support': { title: 'Comment contacter le support ?', category: 'Contact' },
      requirements: { title: 'De quoi avons‑nous besoin de votre part ?', category: 'Bien démarrer' },
      scope: { title: 'Que comprend chaque offre ?', category: 'Services & tarifs' },
      addons: { title: 'Options & post‑achat', category: 'Services & tarifs' },
      quality: { title: 'Qualité & tests', category: 'Projet & livraison' },
      handover: { title: 'Mise en ligne & passation', category: 'Projet & livraison' },
      performance: { title: 'Performance & SEO', category: 'Technologie & hébergement' },
      security: { title: 'Sécurité & sauvegarde', category: 'Technologie & hébergement' },
      payments: { title: 'Modes de paiement', category: 'Facturation' },
      terms: { title: 'Contrats & résiliation', category: 'Facturation' },
      slas: { title: 'Délais de réponse (SLA)', category: 'Contact' },
      book: { title: 'Planifier un appel', category: 'Contact' }
    },
    answers: {
      more_info: 'Plus d’informations',
      fallback: 'Détails à venir.',
      'getting-started': {
        title: 'Lancement de projet & onboarding',
        paragraphs: [
          'Décrivez vos objectifs, votre audience et les exigences clés. Nous reviendrons avec une solution recommandée, un calendrier et un modèle de tarification.',
          'Au démarrage, nous ouvrons un canal commun (ex. Slack) et alignons le périmètre et les priorités.'
        ]
      },
      pricing: {
        title: 'Modèles de tarification',
        paragraphs: [
          'Forfaits fixes quand les livrables sont clairs ; régie (T&M) pour un développement itératif.',
          'Tous les modèles incluent QA, support de mise en ligne et gestion de projet dans un périmètre raisonnable.'
        ]
      },
      process: {
        title: 'Processus de design & développement',
        paragraphs: [
          'Discovery → Design → Développement → Tests → Mise en ligne → Support.',
          'Travail transparent avec démos régulières et itérations courtes pour un feedback rapide.'
        ]
      },
      requirements: {
        title: 'Ce dont nous avons besoin',
        paragraphs: [
          'Assets (logo, guidelines), contenus existants et éventuelles références.',
          'Accès pour les intégrations (clés API, etc.) et un contact pour des décisions rapides.'
        ]
      },
      scope: {
        title: 'Ce que comprennent les offres',
        paragraphs: [
          'Livrables précisés dans le devis/SoW : pages, vues, fonctionnalités, intégrations et passation.',
          'Des options peuvent être ajoutées selon les besoins.'
        ]
      },
      addons: {
        title: 'Options & post‑achat',
        paragraphs: [
          'Exemples : langues supplémentaires, modèles de page, expériences growth, A/B tests, SEO étendu.',
          'Des offres de support et d’amélioration continue peuvent être souscrites.'
        ]
      },
      quality: {
        title: 'Qualité & tests',
        paragraphs: [
          'Tests automatisés et manuels, contrôles de performance et d’accessibilité.',
          'Les anomalies détectées dans la fenêtre convenue sont corrigées sans frais.'
        ]
      },
      handover: {
        title: 'Mise en ligne & passation',
        paragraphs: [
          'Plan de mise en ligne avec stratégie de rollback, documentation et transfert de connaissances.',
          'Suivi et mesure post‑lancement possibles.'
        ]
      },
      tech: {
        title: 'Stack & outils',
        paragraphs: [
          'Stack web moderne (ex. SvelteKit) orienté performance, sécurité et DX.',
          'Hébergement selon les besoins : edge/CDN ou environnements conteneurisés.'
        ]
      },
      performance: {
        title: 'Performance & SEO',
        paragraphs: [
          'Core Web Vitals, optimisation d’images et cache par défaut.',
          'SEO technique et données structurées lorsque pertinent.'
        ]
      },
      security: {
        title: 'Sécurité & sauvegarde',
        paragraphs: [
          'Dépendances sécurisées, protection contre les attaques courantes, accès basé sur les rôles.',
          'Procédures de sauvegarde et restauration selon RPO/RTO convenus.'
        ]
      },
      billing: {
        title: 'Rythme de facturation',
        paragraphs: [
          'Mensuel à terme échu ou par jalon. 30 jours nets par défaut.',
          'Le temps non utilisé peut être imputé selon l’accord.'
        ]
      },
      payments: {
        title: 'Modes de paiement',
        paragraphs: [
          'Virement, carte ou transfert international selon l’entité.',
          'La facture comprend les temps et livrables par période.'
        ]
      },
      terms: {
        title: 'Contrats & résiliation',
        paragraphs: [
          'Conditions et délais indiqués dans l’Accord Client/SoW.',
          'Le travail peut être suspendu en cas de retard de paiement après notification.'
        ]
      },
      'contact-support': {
        title: 'Canaux de support',
        paragraphs: [
          'Écrivez‑nous à info@yntra.se pour toute demande. Pour les projets en cours, nous utilisons un canal Slack dédié.',
          'Les incidents urgents sont priorisés conformément au SLA convenu.'
        ]
      },
      slas: {
        title: 'Délais de réponse (SLA)',
        paragraphs: [
          'Demandes standard : réponse sous 1 jour ouvré. Urgent : accusé immédiat et plan d’action.',
          'Disponibilité et astreintes possibles via des offres de support.'
        ]
      },
      book: {
        title: 'Planifier un appel',
        paragraphs: [
          'Choisissez un créneau adapté. Nous passerons en revue les besoins, le périmètre et les prochaines étapes.',
          'Vous recevez une invitation calendrier et une confirmation par e‑mail.'
        ]
      }
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        { q: 'À quelle vitesse répondez‑vous aux nouvelles demandes ?', a: 'Généralement sous 1 jour ouvré. Plus rapidement pour les urgences.' },
        { q: 'Incluez‑vous une garantie et des correctifs après la livraison ?', a: 'Oui — pendant la période convenue, nous corrigeons sans frais.' },
        { q: 'Pouvez‑vous travailler sur une base de code/design existante ?', a: 'Oui. Nous faisons une revue technique/UX et recommandons la meilleure voie.' },
        { q: 'Comment gérez‑vous les changements en cours de projet ?', a: 'Priorisation dans le backlog et estimation de l’impact. Les petits ajustements tiennent souvent dans un sprint.' },
        { q: 'Proposez‑vous un support continu après la mise en ligne ?', a: 'Oui — offres flexibles (SLA, améliorations, monitoring, incidents).' }
      ]
    },
    cta: {
      title: 'Vous ne trouvez pas ce que vous cherchez ?',
      subtitle: 'Notre équipe sera ravie de répondre à vos questions et de vous orienter vers la bonne solution.',
      contact: 'Nous contacter',
      book_call: 'Planifier un appel'
    },
    actions: {
      close: 'Fermer'
    }
  },
  modal: {
    title: 'Nous contacter',
    desc: 'Partagez quelques informations et nous vous répondrons rapidement.',
    company_label: 'Nom de l’entreprise',
    company_placeholder: 'Ex. Yntra AB',
    tel_label: 'Téléphone',
    tel_placeholder: 'Ex. +46 70 123 45 67',
    email_label: 'E‑mail',
    email_placeholder: 'Ex. vous@entreprise.com',
    message_label: 'Message',
    message_placeholder: 'Parlez‑nous de votre projet ou question…',
    cancel: 'Annuler',
    send: 'Envoyer',
    privacy: 'Nous ne partagerons jamais vos informations.',
    close: 'Fermer'
  },
  schedule: {
    title: 'Planifier un appel',
    desc: 'Choisissez un créneau qui vous convient. Nous échangerons en ligne sur vos besoins et les prochaines étapes.',
    length_label: 'Durée',
    min: 'min',
    type_label: 'Type de rendez‑vous',
    type_phone: 'Téléphone',
    pick_time: 'Choisir un jour et une heure',
    timezone_prefix: 'Heures affichées en',
    custom_label: 'Autre…',
    custom_pick_label: 'Choisir une date',
    no_slots: 'Aucun créneau disponible ce jour‑là',
    name_label: 'Nom',
    name_placeholder: 'Ex. Jane Doe',
    email_label: 'E‑mail',
    email_placeholder: 'Ex. vous@entreprise.com',
    company_label: 'Entreprise',
    company_placeholder: 'Ex. Yntra AB',
    tel_label: 'Téléphone',
    tel_placeholder: 'Ex. +46 70 123 45 67',
    notes_label: 'Notes (optionnel)',
    notes_placeholder: 'Souhaitez‑vous aborder un sujet précis ?',
    cancel: 'Annuler',
    confirm: 'Confirmer la réservation',
    privacy: 'Nous enverrons une confirmation et une invitation calendrier.',
    close: 'Fermer',
    select_time_required: 'Veuillez sélectionner un créneau horaire.',
    prev_day: 'Jour précédent',
    next_day: 'Jour suivant',
    calendar_open: 'Ouvrir le calendrier',
    clear_date: 'Effacer la date'
  }
};
