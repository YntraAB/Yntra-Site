import base from './en.json';

export default {
  ...base,
  privacy: {
    title: 'Privacy Policy',
    meta_description: 'How Yntra handles your personal data: collection, use, and protection.',
    hero: 'How we handle your personal data when you visit our website or use our services.',
    last_updated_label: 'Last updated',
    intro_card: 'We value your privacy and protect your personal data. This policy explains how we collect, use, and safeguard your information when you visit our website or use our services.',
    s1: {
      title: '1. Information We Collect',
      intro: 'We may collect the following types of information:',
      personal: {
        title: 'Personal Information',
        desc: 'Such as your name, email address, phone number, and company details when you contact us or request a service.'
      },
      technical: {
        title: 'Technical Information',
        desc: 'Such as IP address, browser type, device information, and usage data collected automatically when you interact with our website.'
      }
    },
    s2: {
      title: '2. How We Use the Data',
      intro: 'We use the data to:',
      items: [
        'Provide, operate, and improve our services',
        'Communicate with you about inquiries, projects, and support',
        'Analyze site usage and improve the experience',
        'Comply with legal obligations'
      ]
    },
    s3: {
      title: '3. Sharing of Data',
      dont_sell: 'We do not sell, trade, or rent your personal data.',
      only_share_with: 'We share data only with:',
      items: {
        providers: 'Trusted service providers who assist in operating our website and delivering services.',
        legal: 'Legal authorities if required by law or to protect our rights.'
      }
    },
    s4: {
      title: '4. Data Security',
      text: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.'
    },
    s5: {
      title: '5. Your Rights',
      intro: 'Depending on your location, you may have the right to:',
      items: [
        'Access, correct, or delete your personal information',
        'Restrict or object to the processing of your data',
        'Request data portability',
        'Withdraw consent at any time'
      ],
      contact_hint: 'To exercise these rights, please contact us at'
    },
    s6: {
      title: '6. Cookies',
      text: 'Our website may use cookies and similar technologies to enhance your browsing experience. You can manage or disable cookies through your browser settings.'
    },
    s7: {
      title: '7. Changes to This Policy',
      text: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.'
    },
    cta: {
      title: 'Questions About This Policy?',
      desc: "If you have any questions about this Privacy Policy, please don't hesitate to contact us.",
      button: 'Contact Us'
    }
  },
  modal: {
    title: 'Contact us',
    desc: 'Share a few details and we’ll get back to you shortly.',
    company_label: 'Company name',
    company_placeholder: 'e.g. Yntra AB',
    tel_label: 'Tel',
    tel_placeholder: 'e.g. +46 70 123 45 67',
    email_label: 'Email',
    email_placeholder: 'e.g. you@company.com',
    message_label: 'Message',
    message_placeholder: 'Tell us about your project or question...',
    cancel: 'Cancel',
    send: 'Send',
    privacy: 'We’ll never share your info.',
    close: 'Close'
  },
  schedule: {
    title: 'Book a call',
    desc: 'Pick a time that works for you. We’ll meet online and discuss your needs and next steps.',
    length_label: 'Duration',
    min: 'min',
    type_label: 'Meeting type',
    type_phone: 'Phone',
    pick_time: 'Pick a day and time',
    timezone_prefix: 'Times shown in',
    custom_label: 'Custom…',
    custom_pick_label: 'Pick a date',
    no_slots: 'No available slots on this day',
    name_label: 'Name',
    name_placeholder: 'e.g. Jane Doe',
    email_label: 'Email',
    email_placeholder: 'e.g. you@company.com',
    company_label: 'Company',
    company_placeholder: 'e.g. Yntra AB',
    tel_label: 'Tel',
    tel_placeholder: 'e.g. +46 70 123 45 67',
    notes_label: 'Notes (optional)',
    notes_placeholder: 'Anything specific you’d like to cover?',
    cancel: 'Cancel',
    confirm: 'Confirm booking',
    privacy: 'We’ll send a confirmation and calendar invite.' ,
    close: 'Close',
    select_time_required: 'Please select a time slot.',
    prev_day: 'Previous day',
    next_day: 'Next day',
    calendar_open: 'Open calendar',
    clear_date: 'Clear date'
  }
};
