import base from './fr.json';

export default {
  ...base,
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

