import base from './fr.json';

export default {
  ...base,
  footer: {
    ...(base as any).footer,
    resource_links: [
      ...(((base as any).footer?.resource_links) ?? []),
      'Conditions d’utilisation'
    ]
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
      text: 'Notre site utilise des cookies et des technologies similaires pour améliorer votre expérience de navigation. Vous pouvez gérer ou désactiver les cookies dans les paramètres de votre navigateur.'
    },
    s7: {
      title: '7. Modifications de cette politique',
      text: 'Nous pouvons mettre à jour cette politique de confidentialité. Toute modification sera publiée sur cette page avec une date mise à jour.'
    },
    cta: {
      title: 'Des questions au sujet de cette politique ?',
      desc: 'Si vous avez des questions concernant cette politique de confidentialité, n’hésitez pas à nous contacter.',
      button: 'Nous contacter'
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
