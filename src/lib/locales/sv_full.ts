import base from './sv.json';

export default {
  ...base,
  footer: {
    ...(base as any).footer,
    resource_links: [
      ...(((base as any).footer?.resource_links) ?? []),
      'Användarvillkor'
    ]
  },
  terms: {
    title: 'Användarvillkor',
    meta_description: 'Villkor som reglerar din användning av Yntras webbplats och tjänster.',
    hero: 'Läs dessa villkor noggrant. Genom att besöka webbplatsen eller använda våra tjänster godkänner du dem.',
    last_updated_label: 'Senast uppdaterad',
    intro_card:
      'Dessa användarvillkor ("Villkor") styr din åtkomst till och användning av Yntras webbplats samt de tjänster vi tillhandahåller. Om du ingår villkoren för ett företags räkning intygar du att du har behörighet att binda företaget. Om du inte accepterar villkoren ska du inte använda vår webbplats eller våra tjänster. Om ett separat, undertecknat kundavtal finns gäller det i första hand vid konflikt mellan detta dokument och kundavtalet.',
    s1: {
      title: '1. Godkännande och ändringar',
      acceptance: {
        title: 'Godkännande av villkoren',
        desc: 'Genom att använda webbplatsen och tjänsterna accepterar du dessa Villkor och vår Integritetspolicy.'
      },
      changes: {
        title: 'Ändringar av villkoren',
        desc: 'Vi kan uppdatera villkoren då och då. Ändringar gäller från det att de publiceras. Om du har ett separat Kundavtal påverkas detta inte utan skriftligt medgivande.'
      }
    },
    s2: {
      title: '2. Tjänster och användning',
      intro: 'Du åtar dig att använda våra tjänster lagligt och ansvarsfullt. Särskilt åtar du dig att:',
      items: [
        'Lämna korrekta uppgifter och hålla dem uppdaterade',
        'Använda tjänsterna endast för lagliga syften och i enlighet med dessa Villkor',
        'Följa rimliga användningsgränser och instruktioner som vi tillhandahåller',
        'Inte försöka störa, bakåtkompilera eller få obehörig åtkomst till våra system'
      ]
    },
    s3: {
      title: '3. Beställningar, avgifter och betalning',
      summary: 'Offerter, uppdragsbeskrivningar eller order anger omfattning, leverabler, tidslinjer och prissättning.',
      includes: 'Om inte annat avtalats i Kundavtal gäller:',
      items: {
        quotes: 'Offerter/uppdrag: omfattning, antaganden, leverabler, viktiga datum, acceptanskriterier',
        invoicing: 'Fakturering: utfärdas när milstolpar nås eller månadsvis i efterskott',
        late: 'Försena betalningar: kan medföra ränta och/eller pausat arbete efter föregående avisering'
      }
    },
    s4: {
      title: '4. Immateriella rättigheter',
      text: 'Yntra behåller äganderätten till förhandsmaterial, know-how och verktyg. Efter full betalning får du en global, icke-exklusiv licens att använda leverabler för interna affärssyften. Om Kundavtal uttryckligen anger överlåtelse av rättigheter gäller detta före denna punkt. Tredjepartskomponenter omfattas av sina respektive licenser.'
    },
    s5: {
      title: '5. Sekretess och dataskydd',
      intro: 'Parterna kan utbyta konfidentiell information. Varje part åtar sig att:',
      items: [
        'Använda den andra partens konfidentiella information endast för att fullgöra åtaganden enligt dessa Villkor',
        'Skydda sådan information med rimlig aktsamhet och inte röja den för tredje part',
        'Skicka tillbaka eller radera konfidentiell information på begäran, om inte lag kräver bevarande',
        'Behandla personuppgifter i enlighet med tillämplig dataskyddslagstiftning'
      ],
      contact_hint: 'Frågor om datahantering? Kontakta oss på'
    },
    s6: {
      title: '6. Godtagbar användning',
      text: 'Du får inte använda webbplatsen eller tjänsterna för att: ladda upp skadlig kod, göra intrång i immateriella rättigheter, kränka integritet, trakassera eller skada andra, eller på annat sätt äventyra tjänsternas integritet eller säkerhet.'
    },
    s7: {
      title: '7. Tredjepartstjänster',
      text: 'Våra leverabler kan integrera tredjepartstjänster eller bibliotek. Vi ansvarar inte för tredjepartsinnehåll, -policyer eller -prestanda. Användning av sådana tjänster sker enligt deras villkor.'
    },
    s8: {
      title: '8. Garantier och friskrivningar',
      text: 'Om inte annat uttryckligen anges i Kundavtal tillhandahålls webbplats och tjänster i befintligt skick (“as is”) och i mån de finns tillgängliga (“as available”). Vi friskriver oss från underförstådda garantier, inklusive säljbarhet, lämplighet för visst ändamål och icke-intrång.'
    },
    s9: {
      title: '9. Ansvar och uppsägning',
      text: 'I den utsträckning lagen medger ansvarar Yntra inte för indirekta, tillfälliga eller följdskador. Vårt sammanlagda ansvar är begränsat till de belopp du betalat för de tjänster som gett upphov till kravet under de sex föregående månaderna, om inte annat avtalats i Kundavtal. Vi kan pausa eller avsluta åtkomst vid avtalsbrott. Du kan säga upp med skriftligt meddelande; arbete utfört och icke uppsägningsbara åtaganden ska ersättas. Om Kundavtal anger särskilda uppsägningstider gäller dessa i första hand.'
    },
    s10: {
      title: '10. Tillämplig lag och tvister',
      text: 'Dessa Villkor regleras av svensk lag och tillämplig EU-lagstiftning, med undantag för lagvalsregler. Tvister ska i första hand lösas genom förhandling; i andra hand prövas de av behörig domstol i Sverige, om inte annat framgår av Kundavtal.'
    },
    cta: {
      title: 'Frågor om dessa villkor?',
      desc: 'Behöver du förtydliganden eller ett anpassat avtal? Hör av dig.',
      button: 'Kontakta oss'
    }
  },
  meta: {
    title: 'Yntra \u2014 Design- och utvecklingsbyr\u00E5',
    description:
      'Vi designar och bygger h\u00F6gpresterande webbplatser, appar och digitala system som hj\u00E4lper f\u00F6retag att skala snabbare, se b\u00E4ttre ut och arbeta smartare.',
    keywords:
      'anst\u00E4ll utvecklare, b\u00E4sta designers, webbutveckling, apputveckling, digital byr\u00E5, skr\u00E4ddarsydd mjukvara'
  },
  nav: {
    services: 'Tj\u00E4nster',
    why: 'Varf\u00F6r vi',
    testimonials: 'Omd\u00F6men',
    contact: 'Kontakt'
  },
  hero: {
    looking_for: 'Jag letar efter',
    btn: { website: 'Webbplats', system: 'Systemapp' },
    title_prefix: 'Anlita de fr\u00E4msta 3 % av v\u00E4rldens',
    title_highlight: 'talanger',
    subtitle:
      'Vi designar och bygger h\u00F6gpresterande webbplatser, appar och digitala system som hj\u00E4lper f\u00F6retag att skala snabbare, se b\u00E4ttre ut och arbeta smartare.',
    cta_hire: 'Anlita oss'
  },
  slides: {
    website: [
      { title: 'Modern e-handelsplattform', subtitle: 'H\u00F6gkonverterande webbutik', alt: 'Modern e-handelsplattform' },
      { title: 'F\u00F6retagswebbplats', subtitle: 'Professionell aff\u00E4rsn\u00E4rvaro', alt: 'F\u00F6retagswebbplats' }
    ],
    system: [
      { title: 'Analysdashboard', subtitle: 'Datadrivna aff\u00E4rsinsikter', alt: 'Analysdashboard' },
      { title: 'Projektledningssystem', subtitle: 'Effektiviserat teamsamarbete', alt: 'Projektledningssystem' }
    ]
  },
  services: {
    title: 'Vad vi g\u00F6r',
    subtitle:
      'Omfattande digitala l\u00F6sningar anpassade efter dina aff\u00E4rsbehov \u2014 levererade av topptalang.',
    cards: {
      websites: {
        title: 'Webbplatser',
        desc: 'Vi planerar, designar och utvecklar skräddarsydda webbplatser som laddar snabbt, konverterar bättre och är enkla att förvalta. Sökoptimerade, tillgängliga och byggda för tillväxt och mätbara resultat.',
        features: ['Responsiv design', 'SEO-optimerad', 'Snabb prestanda', 'CMS-integrering']
      },
      systems: {
        title: 'Systemappar',
        desc: 'Vi bygger system och verktyg som automatiserar processer, integrerar med dina befintliga plattformar och gör data användbar i vardagen. Skalbart, säkert och anpassat efter din verksamhet.',
        features: ['Anpassad utveckling', 'API-integrering', 'Molndistribution', 'Skalbar arkitektur']
      },
      uiux: {
        title: 'UI/UX-design',
        desc: 'Vi kombinerar research och design för att skapa tydliga flöden och ett varumärkesstarkt UI. Prototyper testas tidigt, och designsystem ger hastighet, kvalitet och konsekvent upplevelse i alla kanaler.',
        features: ['Användarundersökning', 'Prototypning', 'Designsystem', 'Användbarhetstester']
      },
      support: {
        title: 'Löpande support',
        desc: 'Vi övervakar, uppdaterar och förbättrar kontinuerligt så att allt rullar. Proaktiv prestanda- och säkerhetsoptimering, snabba åtgärder vid incidenter och en partner som finns till hands när du behöver det.',
        features: ['Övervakning 24/7', 'Regelbundna uppdateringar', 'Prestandaoptimering', 'Teknisk support']
      }
    }
  },
  why: {
    title: 'Varf\u00F6r arbeta med oss?',
    subtitle:
      'Vi levererar resultat genom en kombination av ledande talang, bepr\u00F6vade processer och modern teknik.',
    items: [
      { title: 'Endast de fr\u00E4msta 3% av designers och utvecklare', text: 'Strikt urval s\u00E4kerst\u00E4ller att du arbetar med toppkompetens som levererar enast\u00E5ende resultat.' },
      { title: 'Bevisad erfarenhet med globala f\u00F6retag', text: 'Framg\u00E5ngsrikt levererat 500+ projekt \u2014 fr\u00E5n startups till stora organisationer.' },
      { title: 'Skr\u00E4ddarsydda l\u00F6sningar \u2014 inga mallar', text: 'Varje projekt byggs fr\u00E5n grunden f\u00F6r att passa dina unika behov och ditt varum\u00E4rke.' },
      { title: 'Skalbar teknik som v\u00E4xer med dig', text: 'Framtidss\u00E4ker arkitektur och ren kod som anpassas n\u00E4r du expanderar.' },
      { title: 'Kvalitetsgaranti och l\u00F6pande support', text: 'Omfattande testning, optimering och kontinuerligt st\u00F6d f\u00F6r l\u00E5ngsiktig framg\u00E5ng.' }
    ]
  },
  showcase: {
    title: 'Se v\u00E5rt arbete i praktiken',
    subtitle:
      'Riktiga projekt, verkliga resultat. Uppt\u00E4ck hur vi har hj\u00E4lpt f\u00F6retag att transformera sin digitala n\u00E4rvaro.',
    cards: [
      { title: 'Enterprise-analysdashboard', tag: 'Systemapp', desc: 'Realtidsplattform f\u00F6r aff\u00E4rsintelligens som bearbetar 10M+ datapunkter dagligen.' },
      { title: 'F\u00F6rvandling av f\u00F6retagswebbplats', tag: 'Webbplats', desc: 'Modern n\u00E4rvaro som st\u00E4rkte varum\u00E4rket och gav 500% fler kvalificerade leads.' },
      { title: 'Projektledningssvit', tag: 'Systemapp', desc: 'Omfattande system som effektiviserade arbetsfl\u00F6den f\u00F6r team i flera l\u00E4nder.' }
    ]
  },
  testimonials: {
    title: 'Vad v\u00E5ra kunder s\u00E4ger',
    subtitle: 'H\u00F6r vad branschledare s\u00E4ger om att samarbeta med oss.'
  },
  cta: {
    title_prefix: 'Redo att anlita',
    title_highlight: 'v\u00E4rldsklass',
    title_suffix: 'designers och utvecklare?',
    subtitle:
      'G\u00E5 med i framg\u00E5ngsrika f\u00F6retag som har transformerat sin digitala n\u00E4rvaro med v\u00E5r expertis. L\u00E5t oss diskutera ditt projekt.',
    hire_us: 'Anlita oss',
    schedule_call: 'Boka ett samtal',
    stats: { projects: 'Genomf\u00F6rda projekt', satisfaction: 'Kundn\u00F6jdhet', support: 'Support tillg\u00E4nglig' }
  },
  privacy: {
    title: 'Integritetspolicy',
    meta_description: 'Så behandlar Yntra dina personuppgifter: insamling, användning och skydd.',
    hero: 'Så här behandlar vi dina personuppgifter när du besöker vår webbplats eller använder våra tjänster.',
    last_updated_label: 'Senast uppdaterad',
    intro_card: 'Vi värnar om din integritet och skyddar dina personuppgifter. Den här integritetspolicyn beskriver hur vi samlar in, använder och skyddar din information när du besöker vår webbplats eller använder våra tjänster.',
    s1: {
      title: '1. Information vi samlar in',
      intro: 'Vi kan samla in följande typer av uppgifter:',
      personal: {
        title: 'Personuppgifter',
        desc: 'Exempel: namn, e‑postadress, telefonnummer och företagsuppgifter när du kontaktar oss eller begär en tjänst.'
      },
      technical: {
        title: 'Teknisk information',
        desc: 'Exempel: IP‑adress, webbläsartyp, enhetsinformation samt användningsdata som samlas in automatiskt när du använder vår webbplats.'
      }
    },
    s2: {
      title: '2. Hur vi använder uppgifterna',
      intro: 'Vi använder uppgifterna för att:',
      items: [
        'Tillhandahålla, drifta och förbättra våra tjänster',
        'Kommunicera med dig om förfrågningar, projekt och support',
        'Analysera användningen av webbplatsen och förbättra upplevelsen',
        'Uppfylla rättsliga skyldigheter'
      ]
    },
    s3: {
      title: '3. Delning av uppgifter',
      dont_sell: 'Vi varken säljer, byter eller hyr ut dina personuppgifter.',
      only_share_with: 'Vi delar uppgifter endast med:',
      items: {
        providers: 'Betrodda leverantörer som hjälper oss att driva webbplatsen och leverera tjänster.',
        legal: 'Behöriga myndigheter om det krävs enligt lag eller för att skydda våra rättigheter.'
      }
    },
    s4: {
      title: '4. Säkerhet',
      text: 'Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, ändring, förlust eller radering.'
    },
    s5: {
      title: '5. Dina rättigheter',
      intro: 'Beroende på var du bor kan du ha rätt att:',
      items: [
        'Begära tillgång till, rättelse av eller radering av dina personuppgifter',
        'Invända mot eller begränsa behandlingen',
        'Begära dataportabilitet',
        'Återkalla samtycke när som helst'
      ],
      contact_hint: 'För att utöva dessa rättigheter kan du kontakta oss på'
    },
    s6: {
      title: '6. Cookies',
      text: 'Vi använder cookies och liknande tekniker för att förbättra din upplevelse. Du kan hantera eller inaktivera cookies i din webbläsares inställningar.'
    },
    s7: {
      title: '7. Ändringar i denna policy',
      text: 'Vi kan uppdatera denna integritetspolicy. Vi publicerar alltid ändringar på denna sida och anger uppdaterat datum.'
    },
    cta: {
      title: 'Frågor om denna policy?',
      desc: 'Om du har frågor om denna integritetspolicy, kontakta oss gärna.',
      button: 'Kontakta oss'
    }
  },
  modal: {
    title: 'Kontakta oss',
    desc: 'Fyll i detaljerna så återkommer vi snart.',
    company_label: 'Företagsnamn',
    company_placeholder: 'Ex. Yntra AB',
    tel_label: 'Tel',
    tel_placeholder: 'Ex. +46 70 123 45 67',
    email_label: 'E‑post',
    email_placeholder: 'Ex. du@foretag.se',
    message_label: 'Meddelande',
    message_placeholder: 'Berätta kort om ert behov eller projekt...',
    cancel: 'Avbryt',
    send: 'Skicka',
    privacy: 'Vi delar aldrig din information.',
    close: 'Stäng'
  },
  schedule: {
    title: 'Boka ett samtal',
    desc: 'Välj en tid som passar dig. Vi ses online och går igenom behov och nästa steg.',
    type_label: 'Mötestyp',
    type_phone: 'Telefon',
    pick_time: 'Välj dag och tid',
    timezone_prefix: 'Tider visas i',
    custom_label: 'Annan…',
    custom_pick_label: 'Välj ett datum',
    no_slots: 'Inga tider tillgängliga den dagen',
    name_label: 'Namn',
    name_placeholder: 'Ex. Anna Andersson',
    email_label: 'E‑post',
    email_placeholder: 'Ex. du@foretag.se',
    company_label: 'Företag',
    company_placeholder: 'Ex. Yntra AB',
    tel_label: 'Tel',
    tel_placeholder: 'Ex. +46 70 123 45 67',
    notes_label: 'Anteckningar (valfritt)',
    notes_placeholder: 'Något särskilt du vill ta upp?',
    cancel: 'Avbryt',
    confirm: 'Bekräfta bokning',
    privacy: 'Vi skickar en bekräftelse och kalenderinbjudan.',
    close: 'Stäng',
    select_time_required: 'Välj en tid, tack.',
    prev_day: 'Föregående dag',
    next_day: 'Nästa dag',
    calendar_open: 'Öppna kalendern',
    clear_date: 'Rensa datum'
  },
  trusted: {
    ...(base as any).trusted,
    title: 'Framtidens digitala lösningar',
    subtitle: 'Företag från olika branscher väljer oss för att driva sin digitala utveckling.'
  }
};
