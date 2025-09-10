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
    meta_description: 'Les conditions qui régissent votre utilisation du site et des services de Yntra.',
    hero: 'Veuillez lire attentivement ces conditions. En accédant à notre site ou en utilisant nos services, vous acceptez d’être lié par celles‑ci.',
    last_updated_label: 'Dernière mise à jour',
    intro_card:
      'Les présentes Conditions d’utilisation (les « Conditions ») régissent votre accès au site de Yntra et l’utilisation de nos services. Si vous acceptez ces Conditions au nom d’une société ou d’une autre entité juridique, vous déclarez être habilité à engager cette entité. Si vous n’êtes pas d’accord, n’utilisez pas notre site ni nos services.',
    s1: {
      title: '1. Acceptation et modifications',
      acceptance: {
        title: 'Acceptation des Conditions',
        desc: 'En accédant au site ou en utilisant les services, vous acceptez les présentes Conditions et notre Politique de confidentialité. En cas de conflit, un contrat signé avec Yntra prévaut.'
      },
      changes: {
        title: 'Modifications des Conditions',
        desc: 'Nous pouvons mettre à jour les Conditions à l’occasion. Les changements matériels prennent effet à leur publication. L’utilisation continue du site ou des services après l’entrée en vigueur vaut acceptation des Conditions mises à jour.'
      }
    },
    s2: {
      title: '2. Services et utilisation',
      intro: 'Vous vous engagez à utiliser nos services de manière licite et responsable. En particulier, vous vous engagez à :',
      items: [
        'Fournir des informations exactes et maintenir vos données à jour',
        'Utiliser les services uniquement à des fins licites et conformément aux présentes Conditions',
        'Respecter des limites d’usage raisonnables et nos consignes',
        'Ne pas tenter de perturber, d’effectuer de l’ingénierie inverse ni d’accéder sans autorisation à nos systèmes'
      ]
    },
    s3: {
      title: '3. Commandes, frais et paiement',
      summary: 'Les devis, cahiers des charges (SOW) ou bons de commande définissent le périmètre, les livrables, les délais et la tarification.',
      includes: 'Sauf accord écrit contraire, la facturation et le paiement comprennent :',
      items: {
        quotes: 'Devis/SOW : périmètre, hypothèses, livrables, jalons, critères d’acceptation',
        invoicing: 'Facturation : émise au fil des jalons atteints ou mensuellement à terme échu',
        late: 'Retards de paiement : peuvent entraîner des intérêts et/ou la suspension des travaux après préavis'
      }
    },
    s4: {
      title: '4. Propriété intellectuelle',
      text: 'Sauf stipulation contraire dans un contrat signé, nous conservons la propriété de nos éléments préexistants, de notre savoir‑faire et de nos outils. Après règlement intégral, vous recevez une licence mondiale, non exclusive, pour utiliser les livrables à des fins internes. Les composants tiers restent soumis à leurs licences.'
    },
    s5: {
      title: '5. Confidentialité et protection des données',
      intro: 'Les parties peuvent échanger des informations confidentielles. Chaque partie s’engage à :',
      items: [
        'N’utiliser les informations confidentielles de l’autre partie que pour l’exécution des présentes Conditions',
        'Protéger ces informations avec une diligence raisonnable et ne pas les divulguer à des tiers',
        'Restituer ou détruire les informations confidentielles sur demande, sauf obligation légale de conservation',
        'Traiter les données personnelles conformément aux lois applicables en matière de protection des données'
      ],
      contact_hint: 'Des questions sur le traitement des données ? Contactez‑nous à'
    },
    s6: {
      title: '6. Utilisation acceptable',
      text: 'Vous ne pouvez pas utiliser le site ou les services pour : téléverser du code malveillant, porter atteinte aux droits de propriété intellectuelle, violer la vie privée, harceler ou nuire à autrui, ou compromettre l’intégrité ou la sécurité du service.'
    },
    s7: {
      title: '7. Services tiers',
      text: 'Nos livrables peuvent s’intégrer à des services ou bibliothèques tiers. Nous ne contrôlons pas et ne sommes pas responsables du contenu, des politiques ou des performances des tiers. L’usage de services tiers est régi par leurs conditions.'
    },
    s8: {
      title: '8. Garanties et exclusions',
      text: 'Sauf stipulation expresse dans un contrat signé, le site et les services sont fournis « en l’état » et « selon disponibilité ». Nous déclinons toute garantie implicite, y compris de qualité marchande, d’adéquation à un usage particulier et d’absence de contrefaçon.'
    },
    s9: {
      title: '9. Responsabilité et résiliation',
      text: 'Dans la mesure permise par la loi, Yntra n’est pas responsable des dommages indirects, accessoires, spéciaux ou consécutifs. Notre responsabilité globale est limitée aux montants payés pour les services à l’origine de la réclamation au cours des 3 mois précédents. Nous pouvons suspendre ou résilier l’accès en cas de manquement. Vous pouvez résilier pour convenance avec un préavis écrit, sous réserve du paiement des travaux réalisés et des engagements non annulables.'
    },
    s10: {
      title: '10. Droit applicable et litiges',
      text: 'Les présentes Conditions sont régies par le droit suédois et le droit de l’UE applicable, à l’exclusion des règles de conflit de lois. Les litiges seront d’abord réglés à l’amiable ; à défaut, ils seront portés devant les tribunaux compétents en Suède.'
    },
    cta: {
      title: 'Des questions sur ces conditions ?',
      desc: 'Besoin de précisions ou d’un accord personnalisé ? Écrivez‑nous.',
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
