import base from './en.json';

export default {
  ...base,
  terms: {
    title: 'Terms of Service',
    meta_description: 'Terms governing your use of Yntra’s website and services.',
    hero: 'Please read these terms carefully. By visiting the website or using our services you agree to them.',
    last_updated_label: 'Last updated',
    intro_card:
      'These Terms of Service ("Terms") govern your access to and use of Yntra’s website and the services we provide. If you are accepting the Terms on behalf of a company, you represent that you have the authority to bind that company. If you do not accept the Terms, do not use our website or services. If a separate signed customer agreement ("Customer Agreement") exists, that agreement shall prevail in the event of any conflict with these Terms.',
    s1: {
      title: '1. Acceptance and Changes',
      acceptance: {
        title: 'Acceptance of the Terms',
        desc: 'By using the website and services you accept these Terms and our Privacy Policy.'
      },
      changes: {
        title: 'Changes to the Terms',
        desc: 'We may update these Terms from time to time. Changes take effect when published. If you have a separate Customer Agreement, it will not be affected without express written consent.'
      }
    },
    s2: {
      title: '2. Services and Use',
      intro: 'You agree to use our services legally and responsibly. In particular, you agree to:',
      items: [
        'Provide accurate information and keep it up to date',
        'Use the services only for lawful purposes and in accordance with these Terms',
        'Follow reasonable usage limits and instructions we provide',
        'Not attempt to disrupt, reverse engineer, or gain unauthorized access to our systems'
      ]
    },
    s3: {
      title: '3. Orders, Fees, and Payment',
      summary: 'Quotes, statements of work, or orders define scope, deliverables, timelines, and pricing.',
      includes: 'Unless otherwise agreed in a Customer Agreement:',
      items: {
        quotes: 'Quotes/orders: scope, assumptions, deliverables, key dates, acceptance criteria',
        invoicing: 'Invoicing: issued when milestones are reached or monthly in arrears',
        late: 'Late payments: may incur interest and/or paused work after prior notice'
      }
    },
    s4: {
      title: '4. Intellectual Property',
      text: 'Yntra retains ownership of pre-existing materials, know-how, and tools. After full payment you receive a global, non-exclusive license to use deliverables for internal business purposes. If a Customer Agreement explicitly grants transfer of rights, that agreement prevails. Third-party components are subject to their respective licenses.'
    },
    s5: {
      title: '5. Confidentiality and Data Protection',
      intro: 'The parties may exchange confidential information. Each party agrees to:',
      items: [
        'Use the other party’s confidential information only to fulfill obligations under these Terms',
        'Protect such information with reasonable care and not disclose it to third parties',
        'Return or delete confidential information upon request, unless retention is legally required',
        'Process personal data in compliance with applicable data protection laws'
      ],
      contact_hint: 'Questions about data handling? Contact us at'
    },
    s6: {
      title: '6. Acceptable Use',
      text: 'You may not use the website or services to: upload malicious code, infringe intellectual property rights, violate privacy, harass or harm others, or otherwise compromise the integrity or security of the services.'
    },
    s7: {
      title: '7. Third-Party Services',
      text: 'Our deliverables may integrate third-party services or libraries. We are not responsible for third-party content, policies, or performance. Use of such services is subject to their own terms.'
    },
    s8: {
      title: '8. Warranties and Disclaimers',
      text: 'Unless expressly stated in a Customer Agreement, the website and services are provided “as is” and “as available”. We disclaim implied warranties, including merchantability, fitness for a particular purpose, and non-infringement.'
    },
    s9: {
      title: '9. Liability and Termination',
      text: 'To the extent permitted by law, Yntra shall not be liable for indirect, incidental, or consequential damages. Our total liability is limited to the amounts you have paid for the services giving rise to the claim during the preceding six (6) months, unless otherwise specified in a Customer Agreement. We may suspend or terminate access for breach. You may terminate with written notice; work performed and non-cancellable commitments must be paid. If a Customer Agreement specifies notice periods, those take precedence.'
    },
    s10: {
      title: '10. Governing Law and Disputes',
      text: 'These Terms are governed by Swedish law and applicable EU law, excluding conflict-of-law principles. Disputes shall first be resolved through negotiation; failing that, disputes will be settled by the competent courts in Sweden, unless otherwise stated in a Customer Agreement.'
    },
    cta: {
      title: 'Questions about these Terms?',
      desc: 'Need clarifications or a tailored agreement? Get in touch.',
      button: 'Contact us'
    }
  },
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
