import base from './sv.json';

export default {
  ...base,
  nav: {
    ...(base as any).nav,
    helpcenter: 'Hjälpcenter'
  },
  design: {
    title: 'Design',
    meta_description: 'Vi skapar tydliga, varumärkesstarka upplevelser för webb och appar — från research till färdigt designsystem.',
    badge: 'Designexpertis',
    hero: 'Många års erfarenhet av UX/UI och varumärkesdriven design för både webbplatser och affärskritiska appar. Vi kombinerar research, tydliga flöden och konsekvent UI till lösningar som konverterar bättre och känns rätt i handen.',
    cta_primary: 'Prata design med oss',
    s1: {
      title: 'Vad vi designar',
      intro: 'Från marknadswebbplatser till produktgränssnitt och design­system — vi levererar konsekvent, skalbar design som fungerar i verkligheten.',
      web: { title: 'Webbplatser', desc: 'Marknadsplatser, kampanjer och corporate-sajter som laddar snabbt och konverterar.' },
      apps: { title: 'System & appar', desc: 'Dashboards, interna verktyg och kundportaler med fokus på effektivitet och klarhet.' },
      brand: { title: 'Varumärke & UI', desc: 'Visuell identitet, ton och UI‑komponenter som stärker helheten.' },
      systems: { title: 'Designsystem', desc: 'Tokens, komponentbibliotek och riktlinjer för tempo och kvalitet över tid.' }
    },
    s2: {
      title: 'Våra principer',
      items: [
        'Klarhet först — varje skärm ska ha ett tydligt mål',
        'Konsekvens och skalbarhet — samma mönster, snabbare team',
        'Prestanda och känsla — snabba, lättnavigerade upplevelser',
        'Tillgänglighet (WCAG) — design för alla användare'
      ]
    },
    s3: {
      title: 'Designprocess i korthet',
      steps: [
        { title: 'Research & definition', desc: 'Mål, användare, marknad och krav. Vi ringar in problemen och måtten på framgång.' },
        { title: 'Flows & wireframes', desc: 'Task‑flöden och lågfidelity som låser upp tidiga beslut och feedback.' },
        { title: 'UI & prototyp', desc: 'Visuell utforskning, komponenter och interaktiv prototyp för snabb validering.' },
        { title: 'Designsystem & handover', desc: 'Tokens, riktlinjer, dokumentation och stöd vid implementering.' }
      ]
    },
    cta_title: 'Redo att höja er design?',
    cta_desc: 'Berätta om målgruppen och utmaningen — vi föreslår en pragmatisk designplan som går att lansera.',
    tools_title: 'Verktyg & leverabler'
  },
  system: {
    title: 'Applikationer',
    meta_description: 'Vi designar och utvecklar applikationer för mobil, webb och företagssystem — skräddarsydda efter behov.',
    badge: 'Applikationer',
    hero: 'Vi bygger moderna applikationer: mobil (iOS/Android), webb och desktop. Robust kod, vass UX och integrationer som gör jobbet.',
    cta_primary: 'Prata applikationer med oss',
    s1: {
      title: 'Vad vi bygger',
      intro: 'Mobila appar, webbappar och företagsapplikationer — från idé till lansering och förvaltning.',
      internal: { title: 'Mobila applikationer', desc: 'iOS/Android med web‑native wrappers (t.ex. Capacitor/Tauri) för offline, push och hög prestanda.' },
      automation: { title: 'Webbapplikationer', desc: 'Portaler, dashboards, bokning, e‑handel och realtidsflöden som skalar.' },
      enterprise: { title: 'Företagsapplikationer', desc: 'Roller, behörigheter, SSO, revisionsspår och robust drift (CI/CD + övervakning).' },
      custom: { title: 'Integrationer & automation', desc: 'ERP/CRM‑kopplingar, betalningar, dataflöden och bakgrundsjobb som effektiviserar.' }
    },
    s2: {
      title: 'Varför oss för applikationer',
      items: [
        'Många års erfarenhet av komplexa applikationer i produktion',
        'Tillförlitlighet: test, loggning, övervakning och driftrutiner',
        'Säkerhet och åtkomster från grunden (least‑privilege)',
        'Tydlig dokumentation och långsiktig förvaltbarhet'
      ]
    },
    s3: {
      title: 'Leverans & teknik',
      stack_title: 'Teknikstack',
      stack_text: 'SvelteKit/Node för webb, web‑native wrappers (t.ex. Capacitor/Tauri) för mobil/desktop. API‑först, stark typning, CI/CD och molndrift — pragmatiskt val efter behov.',
      delivery_title: 'Leveranssätt',
      delivery_text: 'Korta iterationer, demo varje vecka, förhandsmiljöer och transparens. Vi levererar värde tidigt och ofta.'
    },
    stats: {
      years: '10+ år', years_label: 'Erfarenhet',
      projects: '100+', projects_label: 'Systemleveranser',
      uptime: '99.9%', uptime_label: 'Typisk drifttid'
    },
    cta_title: 'Redo att skapa nästa system?',
    cta_desc: 'Berätta om era processer och mål — vi föreslår en lösning som går att lansera och skala.'
  },
  process: {
    title: 'Vår process',
    subtitle: 'Så tar vi er från idé till lansering – transparent, effektivt och med kvalitet i varje steg.',
    overview: {
      title: 'Ett fokus: resultat, utan onödig friktion',
      text: 'Vi leder er från idé till lansering genom en tydlig, transparent process som minimerar risk och maximerar tempo. Ni får synliga delresultat varje vecka, korta beslutscykler och ett team som tar ansvar för helheten – design, utveckling, integrationer, test och handover.',
      points: [
        'Korta iterationer och demo varje vecka',
        'Spårbar backlog och tydliga leverabler',
        'Tillgänglighet, prestanda och säkerhet från start',
        'Handover och dokumentation för ägande över tid'
      ]
    },
    timeline_title: 'Steg för steg',
    durations: {
      discovery: 'Discovery',
      design: 'Design',
      build: 'Bygg',
      integrate: 'Integrera',
      test: 'Testa & optimera',
      launch: 'Lansera & stöd'
    },
    timeframes: {
      title: 'Typiska tidsramar',
      marketing_title: 'Marknadswebbplats',
      marketing_desc: '4–8 veckor – beroende på antal sidor, innehåll och integrationer.',
      product_title: 'System/app',
      product_desc: '6–12+ veckor – styrt av komplexitet, datamodell och externa beroenden.'
    },
    collaboration: {
      title: 'Samarbete & kommunikation',
      items: [
        'Veckomöten + demo/avstämning',
        'Asynkrona uppdateringar och release notes',
        'En kontaktpunkt, snabb återkoppling',
        'Tillgång till backlog och issues'
      ]
    },
    quality: {
      title: 'Kvalitet & säkerhet',
      items: [
        'Kodgranskning, CI‑kontroller och staging',
        'Tillgänglighet (WCAG), prestanda och SEO‑basics',
        'Säkra beroenden och uppdateringsrutiner',
        'Roller, åtkomster och backup‑strategi'
      ]
    },
    details: {
      discovery: ['Mål & KPI:er', 'Sitemap/flows', 'Backlog/SoW', 'Plan & risker'],
      design: ['Wireframes', 'UI‑mockups', 'Komponentbibliotek', 'Interaktiv prototyp'],
      build: ['Färdiga vyer/komponenter', 'API‑integrationer', 'Release notes', 'Veckodemos'],
      integrate: ['Konfigurerade integrationer', 'Testdata & miljöer', 'Teknisk dokumentation'],
      test: ['Testlista & buggrättning', 'Lighthouse/a11y‑rapporter'],
      launch: ['Drift‑ & backup‑rutiner', 'Slutdokumentation']
    },
    pricing: {
      title: 'Pris & upplägg',
      fixed_title: 'Fast pris',
      fixed_desc: 'När scope är väldefinierat. Offert med leverabler, milstolpar och tider.',
      tm_title: 'Löpande (T&M)',
      tm_desc: 'För iterativ utveckling. Veckovis rapportering och tydliga prioriteringar.'
    },
    cta: {
      title: 'Redo att bygga tillsammans?',
      desc: 'Berätta om era mål så föreslår vi en pragmatisk plan som balanserar tempo, kvalitet och budget – och levererar.',
      contact: 'Kontakta oss'
    }
  },
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
      text: 'Denna webbplats använder inte cookies eller liknande spårningstekniker. Vi lagrar eller samlar inte in någon information om ditt besök genom sådana metoder.'
    },
    s7: {
      title: '7. Ändringar i denna policy',
      text: 'Vi kan komma att uppdatera denna integritetspolicy från tid till annan. Den senaste versionen finns alltid publicerad på denna sida tillsammans med datum för senaste uppdatering. Om vi gör väsentliga ändringar som påverkar hur vi behandlar dina personuppgifter kommer vi att informera dig på ett tydligt sätt, exempelvis via e-post eller på vår webbplats.'
    },
    s8: {
      title: '8. Lagring av personuppgifter',
      text: 'Vi behåller personuppgifter endast så länge det är nödvändigt för att uppfylla de syften som anges i denna integritetspolicy, om inte en längre lagringsperiod krävs eller tillåts enligt lag.'
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
  about: {
    title: 'Om oss',
    meta_description: 'Vi bygger skräddarsydda webbplatser, system och appar med ren, anpassad kod — inga mallar.',
    hero: 'Vi bygger skräddarsydda webbplatser och system/appar för företag. Oftast i Svelte, Tailwind och TypeScript — men gärna i andra språk/stacks om du önskar. Inga templates eller WordPress — bara ren, handskriven kod som passar ditt företag och skalar med dig.',
    s1: {
      title: 'Vad vi gör',
      intro: 'Från marknadsplatser till affärskritiska interna verktyg — vi designar, bygger och levererar snabba, robusta och lättskötta lösningar.',
      items: {
        websites: { title: 'Webbplatser', desc: 'Moderna, tillgängliga och snabba sajter som konverterar och är enkla att förvalta.' },
        apps: { title: 'System & appar', desc: 'Skräddarsydda verktyg, dashboards, portaler och integrationer som effektiviserar arbetet.' },
        integrations: { title: 'Integrationer & automation', desc: 'API:er, datasync, jobb och flöden som tar bort manuella steg.' },
        design: { title: 'Design & UX', desc: 'Användarcentrerade gränssnitt, designsystem och omtänksamma mikrointeraktioner.' }
      }
    },
    s2: {
      title: 'Hur vi bygger',
      items: [
        'Endast skräddarsydd kod — aldrig mallar eller generiska CMS‑teman',
        'SvelteKit + Tailwind + TypeScript som standard; andra stackar vid behov',
        'Stark grund: tillgänglighet, prestanda, säkerhet och tydlig arkitektur',
        'Test där det gör mest nytta; CI‑kontroller och förhandsgranskningar',
        'Ni äger koden: handover, dokumentation och långsiktig förvaltbarhet',
        'Transparens: korta iterationer, demoavstämningar och asynkrona uppdateringar'
      ]
    },
    s3: {
      title: 'Vår process',
      steps: [
        { title: 'Discovery', desc: 'Mål, användare, begränsningar, mått på framgång — vi linjerar scope och antaganden.' },
        { title: 'Design', desc: 'Flöden, låg-/högfidelity, designtokens och komponentbibliotek.' },
        { title: 'Bygg', desc: 'Iterativ leverans med CI, kodgranskningar och staging‑miljöer.' },
        { title: 'Integrera', desc: 'API:er, auth, betalningar, analys, innehåll och automation.' },
        { title: 'Testa & optimera', desc: 'Funktion, prestanda och tillgänglighet; profilering och finputs.' },
        { title: 'Lansera & stöd', desc: 'Utrullningsplan, överlämning, dokumentation och valfritt löpande stöd.' }
      ]
    },
    s4: {
      title: 'Teknik & verktyg',
      text: 'Vi föredrar SvelteKit, Tailwind CSS och TypeScript för tempo och förvaltbarhet, men levererar gärna i React, Vue eller moderna servermiljöer om ni önskar. Vi designar för ägande över tid: minimalt beroende, tydliga gränser och infrastruktur som skalar.'
    },
    cta: {
      title: 'Redo att bygga tillsammans?',
      desc: 'Berätta om dina mål så föreslår vi en pragmatisk plan som balanserar tempo, kvalitet och budget — och levererar.',
      contact: 'Ta kontakt'
    }
  },
  help: {
    meta_title: 'Hjälpcenter — Yntra',
    meta_description: 'Hitta svar, guider och resurser för att komma igång och lyckas med Yntra.',
    title: 'Hjälpcenter',
    subtitle: 'Hitta snabba svar på vanliga frågor, läs guider och få stöd när du behöver det.',
    search_open_aria: 'Öppna sök',
    search_input_aria: 'Sök i Hjälpcenter',
    search_placeholder: 'Sök i Hjälpcenter…',
    search_suggestions_aria: 'Sökförslag',
    categories: {
      title: 'Utforska kategorier',
      subtitle: 'Vi har samlat det viktigaste för att komma igång, förstå priser och hur vi levererar.',
      more_help: 'Behöver du mer hjälp?'
    },
    groups: {
      getting_started: { title: 'Kom igång' },
      services_pricing: { title: 'Tjänster & priser' },
      project_delivery: { title: 'Projekt & leverans' },
      tech_hosting: { title: 'Teknik & hosting' },
      billing: { title: 'Fakturering' },
      contact: { title: 'Kontakt' }
    },
    articles: {
      'getting-started': { title: 'Hur kommer jag igång med ett projekt?', category: 'Kom igång' },
      pricing: { title: 'Vad kostar en webbplats?', category: 'Tjänster & priser' },
      process: { title: 'Hur ser processen ut från start till lansering?', category: 'Projekt & leverans' },
      tech: { title: 'Vilken stack och hosting använder ni?', category: 'Teknik & hosting' },
      billing: { title: 'Hur fungerar fakturering och betalning?', category: 'Fakturering' },
      'contact-support': { title: 'Hur når jag supporten?', category: 'Kontakt' },
      requirements: { title: 'Vad behöver vi från dig?', category: 'Kom igång' },
      scope: { title: 'Vad ingår i paketen?', category: 'Tjänster & priser' },
      addons: { title: 'Tillval & efterköp', category: 'Tjänster & priser' },
      quality: { title: 'Kvalitet & test', category: 'Projekt & leverans' },
      handover: { title: 'Lansering & överlämning', category: 'Projekt & leverans' },
      performance: { title: 'Prestanda & SEO', category: 'Teknik & hosting' },
      security: { title: 'Säkerhet & backup', category: 'Teknik & hosting' },
      payments: { title: 'Betalningssätt', category: 'Fakturering' },
      terms: { title: 'Avtal & uppsägning', category: 'Fakturering' },
      slas: { title: 'Svarstider (SLA)', category: 'Kontakt' },
      book: { title: 'Boka ett samtal', category: 'Kontakt' }
    },
    answers: {
      more_info: 'Mer information',
      fallback: 'Detaljer kommer snart.',
      'getting-started': {
        title: 'Projektstart & onboarding',
        paragraphs: [
          'Börja med att beskriva mål, målgrupp och viktigaste affärskraven. Vi återkommer med rekommenderad lösning, tidslinje och kostnadsmodell.',
          'Vid start sätter vi upp gemensam kanal (t.ex. Slack) och kör en kickoff för att säkerställa scope och prioriteringar.'
        ]
      },
      pricing: {
        title: 'Prismodeller',
        paragraphs: [
          'Fasta paket när leverabler är tydliga; löpande (T&M) för iterativ utveckling.',
          'Alla upplägg inkluderar kvalitetssäkring, release-stöd och projektledning i rimlig omfattning.'
        ]
      },
      process: {
        title: 'Design- och utvecklingsprocess',
        paragraphs: [
          'Discovery → Design → Utveckling → Test → Lansering → Support.',
          'Vi jobbar transparent med demoavstämningar och korta iterationer för snabb feedback.'
        ]
      },
      requirements: {
        title: 'Vad behöver vi från dig?',
        paragraphs: [
          'Material som logotyp, brandguidelines, befintligt innehåll och eventuella referenser.',
          'Tillgångar för integrationer (API-nycklar etc.) samt kontaktperson för snabba beslut.'
        ]
      },
      scope: {
        title: 'Vad ingår i paketen?',
        paragraphs: [
          'Leverabler specificeras i offert/SoW: sidor, vyer, funktioner, integrationer och handover.',
          'Utöver detta kan tillval läggas till vid behov.'
        ]
      },
      addons: {
        title: 'Tillval & efterköp',
        paragraphs: [
          'Exempel: extra språk, fler sidmallar, growth‑experiment, A/B‑test, utökad SEO.',
          'Support- och förbättringspaket kan tecknas löpande.'
        ]
      },
      quality: {
        title: 'Kvalitet & test',
        paragraphs: [
          'Vi kör automatiserade och manuella tester samt prestanda‑ och tillgänglighetskontroller.',
          'Buggar som upptäcks inom överenskommen period åtgärdas utan extra kostnad.'
        ]
      },
      handover: {
        title: 'Lansering & överlämning',
        paragraphs: [
          'Releaseplan med rollback‑strategi, dokumentation och kunskapsöverföring ingår.',
          'Vi erbjuder även post‑launch uppföljning och mätning.'
        ]
      },
      tech: {
        title: 'Stack & verktyg',
        paragraphs: [
          'Modern webbstack (t.ex. SvelteKit) med fokus på prestanda, säkerhet och DX.',
          'Hosting väljs efter krav: edge/CDN eller containerbaserad miljö.'
        ]
      },
      performance: {
        title: 'Prestanda & SEO',
        paragraphs: [
          'Core Web Vitals, bildoptimering och caching är standard.',
          'Teknisk SEO och strukturerad data implementeras vid relevant scope.'
        ]
      },
      security: {
        title: 'Säkerhet & backup',
        paragraphs: [
          'Säkra beroenden, skydd mot vanliga attacker, och rollbaserad åtkomst.',
          'Backup‑ och återställningsrutiner enligt överenskomna RPO/RTO.'
        ]
      },
      billing: {
        title: 'Fakturaintervall',
        paragraphs: [
          'Månadsvis i efterskott eller per milstolpe. 30 dagar netto som standard.',
          'Outnyttjad tid kan kvittas enligt avtal.'
        ]
      },
      payments: {
        title: 'Betalningssätt',
        paragraphs: [
          'Bankgiro, kort eller internationell överföring beroende på bolagstillhörighet.',
          'Fakturaspecifikation innehåller tidsloggar och leverabler per period.'
        ]
      },
      terms: {
        title: 'Avtal & uppsägning',
        paragraphs: [
          'Villkor och uppsägningstid framgår av Kundavtal/SoW.',
          'Arbete kan pausas vid sen betalning efter avisering enligt villkor.'
        ]
      },
      'contact-support': {
        title: 'Supportkanaler',
        paragraphs: [
          'E‑post till info@yntra.se för alla ärenden. Dedikerad Slack‑kanal för pågående projekt.',
          'Akuta driftfrågor prioriteras enligt överenskommen SLA.'
        ]
      },
      slas: {
        title: 'Svarstider (SLA)',
        paragraphs: [
          'Vanliga ärenden: svar inom 1 arbetsdag. Akuta ärenden: omedelbar bekräftelse och åtgärdsplan.',
          'Tillgänglighet och beredskap kan avtalas i supportpaket.'
        ]
      },
      book: {
        title: 'Boka ett samtal',
        paragraphs: [
          'Välj en tid som passar. Vi går igenom behov, scope och nästa steg.',
          'Bokningen genererar kalenderinbjudan och bekräftelse via e‑post.'
        ]
      }
    },
    faq: {
      title: 'Vanliga frågor',
      items: [
        { q: 'Hur snabbt får jag återkoppling på nya förfrågningar?', a: 'Vi återkommer normalt inom 1 arbetsdag. Brådskande ärenden besvaras snabbare.' },
        { q: 'Ingår garanti och buggfix efter leverans?', a: 'Ja, inom en överenskommen period åtgärdar vi fel utan extra kostnad.' },
        { q: 'Kan ni arbeta med befintlig kodbas/design?', a: 'Absolut. Vi gör en snabb teknisk/UX‑genomlysning och rekommenderar bästa vägen framåt.' },
        { q: 'Hur hanterar ni ändringsönskemål under projektets gång?', a: 'Vi prioriterar i backlog och estimerar påverkan. Mindre justeringar ryms ofta inom sprint.' },
        { q: 'Erbjuder ni löpande support efter lansering?', a: 'Ja, via flexibla supportpaket (SLA, förbättringar, övervakning och incidenthantering).' }
      ]
    },
    cta: {
      title: 'Hittar du inte det du söker?',
      subtitle: 'Vårt team svarar gärna på frågor och guidar dig till rätt lösning.',
      contact: 'Kontakta oss',
      book_call: 'Boka ett samtal'
    },
    actions: {
      close: 'Stäng'
    }
  },
  trusted: {
    ...(base as any).trusted,
    title: 'Teknologier vi använder',
    subtitle: 'Modern teknik som ger snabbare utveckling, högre prestanda och framtidssäkra lösningar.'
  }
};
