import base from './sv.json';

export default {
  ...base,
  nav: {
    ...(base as any).nav,
    helpcenter: 'HjÃ¤lpcenter'
  },
  design: {
    title: 'Design',
    meta_description: 'Vi skapar tydliga, varumÃ¤rkesstarka upplevelser fÃ¶r webb och appar â€” frÃ¥n research till fÃ¤rdigt designsystem.',
    badge: 'Designexpertis',
    hero: 'MÃ¥nga Ã¥rs erfarenhet av UX/UI och varumÃ¤rkesdriven design fÃ¶r bÃ¥de webbplatser och affÃ¤rskritiska appar. Vi kombinerar research, tydliga flÃ¶den och konsekvent UI till lÃ¶sningar som konverterar bÃ¤ttre och kÃ¤nns rÃ¤tt i handen.',
    cta_primary: 'Prata design med oss',
    s1: {
      title: 'Vad vi designar',
      intro: 'FrÃ¥n marknadswebbplatser till produktgrÃ¤nssnitt och designÂ­system â€” vi levererar konsekvent, skalbar design som fungerar i verkligheten.',
      web: { title: 'Webbplatser', desc: 'Marknadsplatser, kampanjer och corporate-sajter som laddar snabbt och konverterar.' },
      apps: { title: 'System & appar', desc: 'Dashboards, interna verktyg och kundportaler med fokus pÃ¥ effektivitet och klarhet.' },
      brand: { title: 'VarumÃ¤rke & UI', desc: 'Visuell identitet, ton och UIâ€‘komponenter som stÃ¤rker helheten.' },
      systems: { title: 'Designsystem', desc: 'Tokens, komponentbibliotek och riktlinjer fÃ¶r tempo och kvalitet Ã¶ver tid.' }
    },
    s2: {
      title: 'VÃ¥ra principer',
      items: [
        'Klarhet fÃ¶rst â€” varje skÃ¤rm ska ha ett tydligt mÃ¥l',
        'Konsekvens och skalbarhet â€” samma mÃ¶nster, snabbare team',
        'Prestanda och kÃ¤nsla â€” snabba, lÃ¤ttnavigerade upplevelser',
        'TillgÃ¤nglighet (WCAG) â€” design fÃ¶r alla anvÃ¤ndare'
      ]
    },
    s3: {
      title: 'Designprocess i korthet',
      steps: [
        { title: 'Research & definition', desc: 'MÃ¥l, anvÃ¤ndare, marknad och krav. Vi ringar in problemen och mÃ¥tten pÃ¥ framgÃ¥ng.' },
        { title: 'Flows & wireframes', desc: 'Taskâ€‘flÃ¶den och lÃ¥gfidelity som lÃ¥ser upp tidiga beslut och feedback.' },
        { title: 'UI & prototyp', desc: 'Visuell utforskning, komponenter och interaktiv prototyp fÃ¶r snabb validering.' },
        { title: 'Designsystem & handover', desc: 'Tokens, riktlinjer, dokumentation och stÃ¶d vid implementering.' }
      ]
    },
    cta_title: 'Redo att hÃ¶ja er design?',
    cta_desc: 'BerÃ¤tta om mÃ¥lgruppen och utmaningen â€” vi fÃ¶reslÃ¥r en pragmatisk designplan som gÃ¥r att lansera.',
    tools_title: 'Verktyg & leverabler'
  },
  system: {
    title: 'Applikationer',
    meta_description: 'Vi designar och utvecklar applikationer fÃ¶r mobil, webb och fÃ¶retagssystem â€” skrÃ¤ddarsydda efter behov.',
    badge: 'Applikationer',
    hero: 'Vi bygger moderna applikationer: mobil (iOS/Android), webb och desktop. Robust kod, vass UX och integrationer som gÃ¶r jobbet.',
    cta_primary: 'Prata applikationer med oss',
    s1: {
      title: 'Vad vi bygger',
      intro: 'Mobila appar, webbappar och fÃ¶retagsapplikationer â€” frÃ¥n idÃ© till lansering och fÃ¶rvaltning.',
      internal: { title: 'Mobila applikationer', desc: 'iOS/Android med webâ€‘native wrappers (t.ex. Capacitor/Tauri) fÃ¶r offline, push och hÃ¶g prestanda.' },
      automation: { title: 'Webbapplikationer', desc: 'Portaler, dashboards, bokning, eâ€‘handel och realtidsflÃ¶den som skalar.' },
      enterprise: { title: 'FÃ¶retagsapplikationer', desc: 'Roller, behÃ¶righeter, SSO, revisionsspÃ¥r och robust drift (CI/CD + Ã¶vervakning).' },
      custom: { title: 'Integrationer & automation', desc: 'ERP/CRMâ€‘kopplingar, betalningar, dataflÃ¶den och bakgrundsjobb som effektiviserar.' }
    },
    s2: {
      title: 'VarfÃ¶r oss fÃ¶r applikationer',
      items: [
        'MÃ¥nga Ã¥rs erfarenhet av komplexa applikationer i produktion',
        'TillfÃ¶rlitlighet: test, loggning, Ã¶vervakning och driftrutiner',
        'SÃ¤kerhet och Ã¥tkomster frÃ¥n grunden (leastâ€‘privilege)',
        'Tydlig dokumentation och lÃ¥ngsiktig fÃ¶rvaltbarhet'
      ]
    },
    s3: {
      title: 'Leverans & teknik',
      stack_title: 'Teknikstack',
      stack_text: 'SvelteKit/Node fÃ¶r webb, webâ€‘native wrappers (t.ex. Capacitor/Tauri) fÃ¶r mobil/desktop. APIâ€‘fÃ¶rst, stark typning, CI/CD och molndrift â€” pragmatiskt val efter behov.',
      delivery_title: 'LeveranssÃ¤tt',
      delivery_text: 'Korta iterationer, demo varje vecka, fÃ¶rhandsmiljÃ¶er och transparens. Vi levererar vÃ¤rde tidigt och ofta.'
    },
    stats: {
      years: '10+ Ã¥r', years_label: 'Erfarenhet',
      projects: '100+', projects_label: 'Systemleveranser',
      uptime: '99.9%', uptime_label: 'Typisk drifttid'
    },
    cta_title: 'Redo att skapa nÃ¤sta system?',
    cta_desc: 'BerÃ¤tta om era processer och mÃ¥l â€” vi fÃ¶reslÃ¥r en lÃ¶sning som gÃ¥r att lansera och skala.'
  },
  process: {
    title: 'VÃ¥r process',
    subtitle: 'SÃ¥ tar vi er frÃ¥n idÃ© till lansering â€“ transparent, effektivt och med kvalitet i varje steg.',
    overview: {
      title: 'Ett fokus: resultat, utan onÃ¶dig friktion',
      text: 'Vi leder er frÃ¥n idÃ© till lansering genom en tydlig, transparent process som minimerar risk och maximerar tempo. Ni fÃ¥r synliga delresultat varje vecka, korta beslutscykler och ett team som tar ansvar fÃ¶r helheten â€“ design, utveckling, integrationer, test och handover.',
      points: [
        'Korta iterationer och demo varje vecka',
        'SpÃ¥rbar backlog och tydliga leverabler',
        'TillgÃ¤nglighet, prestanda och sÃ¤kerhet frÃ¥n start',
        'Handover och dokumentation fÃ¶r Ã¤gande Ã¶ver tid'
      ]
    },
    timeline_title: 'Steg fÃ¶r steg',
    durations: {
      discovery: 'Discovery',
      design: 'Design',
      build: 'Bygg',
      integrate: 'Integrera',
      test: 'Testa & optimera',
      launch: 'Lansera & stÃ¶d'
    },
    timeframes: {
      title: 'Typiska tidsramar',
      marketing_title: 'Marknadswebbplats',
      marketing_desc: '4â€“8 veckor â€“ beroende pÃ¥ antal sidor, innehÃ¥ll och integrationer.',
      product_title: 'System/app',
      product_desc: '6â€“12+ veckor â€“ styrt av komplexitet, datamodell och externa beroenden.'
    },
    collaboration: {
      title: 'Samarbete & kommunikation',
      items: [
        'VeckomÃ¶ten + demo/avstÃ¤mning',
        'Asynkrona uppdateringar och release notes',
        'En kontaktpunkt, snabb Ã¥terkoppling',
        'TillgÃ¥ng till backlog och issues'
      ]
    },
    quality: {
      title: 'Kvalitet & sÃ¤kerhet',
      items: [
        'Kodgranskning, CIâ€‘kontroller och staging',
        'TillgÃ¤nglighet (WCAG), prestanda och SEOâ€‘basics',
        'SÃ¤kra beroenden och uppdateringsrutiner',
        'Roller, Ã¥tkomster och backupâ€‘strategi'
      ]
    },
    details: {
      discovery: ['MÃ¥l & KPI:er', 'Sitemap/flows', 'Backlog/SoW', 'Plan & risker'],
      design: ['Wireframes', 'UIâ€‘mockups', 'Komponentbibliotek', 'Interaktiv prototyp'],
      build: ['FÃ¤rdiga vyer/komponenter', 'APIâ€‘integrationer', 'Release notes', 'Veckodemos'],
      integrate: ['Konfigurerade integrationer', 'Testdata & miljÃ¶er', 'Teknisk dokumentation'],
      test: ['Testlista & buggrÃ¤ttning', 'Lighthouse/a11yâ€‘rapporter'],
      launch: ['Driftâ€‘ & backupâ€‘rutiner', 'Slutdokumentation']
    },
    pricing: {
      title: 'Pris & upplÃ¤gg',
      fixed_title: 'Fast pris',
      fixed_desc: 'NÃ¤r scope Ã¤r vÃ¤ldefinierat. Offert med leverabler, milstolpar och tider.',
      tm_title: 'LÃ¶pande (T&M)',
      tm_desc: 'FÃ¶r iterativ utveckling. Veckovis rapportering och tydliga prioriteringar.'
    },
    cta: {
      title: 'Redo att bygga tillsammans?',
      desc: 'BerÃ¤tta om era mÃ¥l sÃ¥ fÃ¶reslÃ¥r vi en pragmatisk plan som balanserar tempo, kvalitet och budget â€“ och levererar.',
      contact: 'Kontakta oss'
    }
  },
  footer: {
    ...(base as any).footer,
    resource_links: [
      ...(((base as any).footer?.resource_links) ?? []),
      'AnvÃ¤ndarvillkor'
    ]
  },
  terms: {
    title: 'AnvÃ¤ndarvillkor',
    meta_description: 'Villkor som reglerar din anvÃ¤ndning av Yntras webbplats och tjÃ¤nster.',
    hero: 'LÃ¤s dessa villkor noggrant. Genom att besÃ¶ka webbplatsen eller anvÃ¤nda vÃ¥ra tjÃ¤nster godkÃ¤nner du dem.',
    last_updated_label: 'Senast uppdaterad',
    intro_card:
      'Dessa anvÃ¤ndarvillkor ("Villkor") styr din Ã¥tkomst till och anvÃ¤ndning av Yntras webbplats samt de tjÃ¤nster vi tillhandahÃ¥ller. Om du ingÃ¥r villkoren fÃ¶r ett fÃ¶retags rÃ¤kning intygar du att du har behÃ¶righet att binda fÃ¶retaget. Om du inte accepterar villkoren ska du inte anvÃ¤nda vÃ¥r webbplats eller vÃ¥ra tjÃ¤nster. Om ett separat, undertecknat kundavtal finns gÃ¤ller det i fÃ¶rsta hand vid konflikt mellan detta dokument och kundavtalet.',
    s1: {
      title: '1. GodkÃ¤nnande och Ã¤ndringar',
      acceptance: {
        title: 'GodkÃ¤nnande av villkoren',
        desc: 'Genom att anvÃ¤nda webbplatsen och tjÃ¤nsterna accepterar du dessa Villkor och vÃ¥r Integritetspolicy.'
      },
      changes: {
        title: 'Ã„ndringar av villkoren',
        desc: 'Vi kan uppdatera villkoren dÃ¥ och dÃ¥. Ã„ndringar gÃ¤ller frÃ¥n det att de publiceras. Om du har ett separat Kundavtal pÃ¥verkas detta inte utan skriftligt medgivande.'
      }
    },
    s2: {
      title: '2. TjÃ¤nster och anvÃ¤ndning',
      intro: 'Du Ã¥tar dig att anvÃ¤nda vÃ¥ra tjÃ¤nster lagligt och ansvarsfullt. SÃ¤rskilt Ã¥tar du dig att:',
      items: [
        'LÃ¤mna korrekta uppgifter och hÃ¥lla dem uppdaterade',
        'AnvÃ¤nda tjÃ¤nsterna endast fÃ¶r lagliga syften och i enlighet med dessa Villkor',
        'FÃ¶lja rimliga anvÃ¤ndningsgrÃ¤nser och instruktioner som vi tillhandahÃ¥ller',
        'Inte fÃ¶rsÃ¶ka stÃ¶ra, bakÃ¥tkompilera eller fÃ¥ obehÃ¶rig Ã¥tkomst till vÃ¥ra system'
      ]
    },
    s3: {
      title: '3. BestÃ¤llningar, avgifter och betalning',
      summary: 'Offerter, uppdragsbeskrivningar eller order anger omfattning, leverabler, tidslinjer och prissÃ¤ttning.',
      includes: 'Om inte annat avtalats i Kundavtal gÃ¤ller:',
      items: {
        quotes: 'Offerter/uppdrag: omfattning, antaganden, leverabler, viktiga datum, acceptanskriterier',
        invoicing: 'Fakturering: utfÃ¤rdas nÃ¤r milstolpar nÃ¥s eller mÃ¥nadsvis i efterskott',
        late: 'FÃ¶rsena betalningar: kan medfÃ¶ra rÃ¤nta och/eller pausat arbete efter fÃ¶regÃ¥ende avisering'
      }
    },
    s4: {
      title: '4. Immateriella rÃ¤ttigheter',
      text: 'Yntra behÃ¥ller Ã¤ganderÃ¤tten till fÃ¶rhandsmaterial, know-how och verktyg. Efter full betalning fÃ¥r du en global, icke-exklusiv licens att anvÃ¤nda leverabler fÃ¶r interna affÃ¤rssyften. Om Kundavtal uttryckligen anger Ã¶verlÃ¥telse av rÃ¤ttigheter gÃ¤ller detta fÃ¶re denna punkt. Tredjepartskomponenter omfattas av sina respektive licenser.'
    },
    s5: {
      title: '5. Sekretess och dataskydd',
      intro: 'Parterna kan utbyta konfidentiell information. Varje part Ã¥tar sig att:',
      items: [
        'AnvÃ¤nda den andra partens konfidentiella information endast fÃ¶r att fullgÃ¶ra Ã¥taganden enligt dessa Villkor',
        'Skydda sÃ¥dan information med rimlig aktsamhet och inte rÃ¶ja den fÃ¶r tredje part',
        'Skicka tillbaka eller radera konfidentiell information pÃ¥ begÃ¤ran, om inte lag krÃ¤ver bevarande',
        'Behandla personuppgifter i enlighet med tillÃ¤mplig dataskyddslagstiftning'
      ],
      contact_hint: 'FrÃ¥gor om datahantering? Kontakta oss pÃ¥'
    },
    s6: {
      title: '6. Godtagbar anvÃ¤ndning',
      text: 'Du fÃ¥r inte anvÃ¤nda webbplatsen eller tjÃ¤nsterna fÃ¶r att: ladda upp skadlig kod, gÃ¶ra intrÃ¥ng i immateriella rÃ¤ttigheter, krÃ¤nka integritet, trakassera eller skada andra, eller pÃ¥ annat sÃ¤tt Ã¤ventyra tjÃ¤nsternas integritet eller sÃ¤kerhet.'
    },
    s7: {
      title: '7. TredjepartstjÃ¤nster',
      text: 'VÃ¥ra leverabler kan integrera tredjepartstjÃ¤nster eller bibliotek. Vi ansvarar inte fÃ¶r tredjepartsinnehÃ¥ll, -policyer eller -prestanda. AnvÃ¤ndning av sÃ¥dana tjÃ¤nster sker enligt deras villkor.'
    },
    s8: {
      title: '8. Garantier och friskrivningar',
      text: 'Om inte annat uttryckligen anges i Kundavtal tillhandahÃ¥lls webbplats och tjÃ¤nster i befintligt skick (â€œas isâ€) och i mÃ¥n de finns tillgÃ¤ngliga (â€œas availableâ€). Vi friskriver oss frÃ¥n underfÃ¶rstÃ¥dda garantier, inklusive sÃ¤ljbarhet, lÃ¤mplighet fÃ¶r visst Ã¤ndamÃ¥l och icke-intrÃ¥ng.'
    },
    s9: {
      title: '9. Ansvar och uppsÃ¤gning',
      text: 'I den utstrÃ¤ckning lagen medger ansvarar Yntra inte fÃ¶r indirekta, tillfÃ¤lliga eller fÃ¶ljdskador. VÃ¥rt sammanlagda ansvar Ã¤r begrÃ¤nsat till de belopp du betalat fÃ¶r de tjÃ¤nster som gett upphov till kravet under de sex fÃ¶regÃ¥ende mÃ¥naderna, om inte annat avtalats i Kundavtal. Vi kan pausa eller avsluta Ã¥tkomst vid avtalsbrott. Du kan sÃ¤ga upp med skriftligt meddelande; arbete utfÃ¶rt och icke uppsÃ¤gningsbara Ã¥taganden ska ersÃ¤ttas. Om Kundavtal anger sÃ¤rskilda uppsÃ¤gningstider gÃ¤ller dessa i fÃ¶rsta hand.'
    },
    s10: {
      title: '10. TillÃ¤mplig lag och tvister',
      text: 'Dessa Villkor regleras av svensk lag och tillÃ¤mplig EU-lagstiftning, med undantag fÃ¶r lagvalsregler. Tvister ska i fÃ¶rsta hand lÃ¶sas genom fÃ¶rhandling; i andra hand prÃ¶vas de av behÃ¶rig domstol i Sverige, om inte annat framgÃ¥r av Kundavtal.'
    },
    cta: {
      title: 'FrÃ¥gor om dessa villkor?',
      desc: 'BehÃ¶ver du fÃ¶rtydliganden eller ett anpassat avtal? HÃ¶r av dig.',
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
        desc: 'Vi planerar, designar och utvecklar skrÃ¤ddarsydda webbplatser som laddar snabbt, konverterar bÃ¤ttre och Ã¤r enkla att fÃ¶rvalta. SÃ¶koptimerade, tillgÃ¤ngliga och byggda fÃ¶r tillvÃ¤xt och mÃ¤tbara resultat.',
        features: ['Responsiv design', 'SEO-optimerad', 'Snabb prestanda', 'CMS-integrering']
      },
      systems: {
        title: 'Systemappar',
        desc: 'Vi bygger system och verktyg som automatiserar processer, integrerar med dina befintliga plattformar och gÃ¶r data anvÃ¤ndbar i vardagen. Skalbart, sÃ¤kert och anpassat efter din verksamhet.',
        features: ['Anpassad utveckling', 'API-integrering', 'Molndistribution', 'Skalbar arkitektur']
      },
      uiux: {
        title: 'UI/UX-design',
        desc: 'Vi kombinerar research och design fÃ¶r att skapa tydliga flÃ¶den och ett varumÃ¤rkesstarkt UI. Prototyper testas tidigt, och designsystem ger hastighet, kvalitet och konsekvent upplevelse i alla kanaler.',
        features: ['AnvÃ¤ndarundersÃ¶kning', 'Prototypning', 'Designsystem', 'AnvÃ¤ndbarhetstester']
      },
      support: {
        title: 'LÃ¶pande support',
        desc: 'Vi Ã¶vervakar, uppdaterar och fÃ¶rbÃ¤ttrar kontinuerligt sÃ¥ att allt rullar. Proaktiv prestanda- och sÃ¤kerhetsoptimering, snabba Ã¥tgÃ¤rder vid incidenter och en partner som finns till hands nÃ¤r du behÃ¶ver det.',
        features: ['Ã–vervakning 24/7', 'Regelbundna uppdateringar', 'Prestandaoptimering', 'Teknisk support']
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
    meta_description: 'SÃ¥ behandlar Yntra dina personuppgifter: insamling, anvÃ¤ndning och skydd.',
    hero: 'SÃ¥ hÃ¤r behandlar vi dina personuppgifter nÃ¤r du besÃ¶ker vÃ¥r webbplats eller anvÃ¤nder vÃ¥ra tjÃ¤nster.',
    last_updated_label: 'Senast uppdaterad',
    intro_card: 'Vi vÃ¤rnar om din integritet och skyddar dina personuppgifter. Den hÃ¤r integritetspolicyn beskriver hur vi samlar in, anvÃ¤nder och skyddar din information nÃ¤r du besÃ¶ker vÃ¥r webbplats eller anvÃ¤nder vÃ¥ra tjÃ¤nster.',
    s1: {
      title: '1. Information vi samlar in',
      intro: 'Vi kan samla in fÃ¶ljande typer av uppgifter:',
      personal: {
        title: 'Personuppgifter',
        desc: 'Exempel: namn, eâ€‘postadress, telefonnummer och fÃ¶retagsuppgifter nÃ¤r du kontaktar oss eller begÃ¤r en tjÃ¤nst.'
      },
      technical: {
        title: 'Teknisk information',
        desc: 'Exempel: IPâ€‘adress, webblÃ¤sartyp, enhetsinformation samt anvÃ¤ndningsdata som samlas in automatiskt nÃ¤r du anvÃ¤nder vÃ¥r webbplats.'
      }
    },
    s2: {
      title: '2. Hur vi anvÃ¤nder uppgifterna',
      intro: 'Vi anvÃ¤nder uppgifterna fÃ¶r att:',
      items: [
        'TillhandahÃ¥lla, drifta och fÃ¶rbÃ¤ttra vÃ¥ra tjÃ¤nster',
        'Kommunicera med dig om fÃ¶rfrÃ¥gningar, projekt och support',
        'Analysera anvÃ¤ndningen av webbplatsen och fÃ¶rbÃ¤ttra upplevelsen',
        'Uppfylla rÃ¤ttsliga skyldigheter'
      ]
    },
    s3: {
      title: '3. Delning av uppgifter',
      dont_sell: 'Vi varken sÃ¤ljer, byter eller hyr ut dina personuppgifter.',
      only_share_with: 'Vi delar uppgifter endast med:',
      items: {
        providers: 'Betrodda leverantÃ¶rer som hjÃ¤lper oss att driva webbplatsen och leverera tjÃ¤nster.',
        legal: 'BehÃ¶riga myndigheter om det krÃ¤vs enligt lag eller fÃ¶r att skydda vÃ¥ra rÃ¤ttigheter.'
      }
    },
    s4: {
      title: '4. SÃ¤kerhet',
      text: 'Vi vidtar lÃ¤mpliga tekniska och organisatoriska Ã¥tgÃ¤rder fÃ¶r att skydda dina personuppgifter mot obehÃ¶rig Ã¥tkomst, Ã¤ndring, fÃ¶rlust eller radering.'
    },
    s5: {
      title: '5. Dina rÃ¤ttigheter',
      intro: 'Beroende pÃ¥ var du bor kan du ha rÃ¤tt att:',
      items: [
        'BegÃ¤ra tillgÃ¥ng till, rÃ¤ttelse av eller radering av dina personuppgifter',
        'InvÃ¤nda mot eller begrÃ¤nsa behandlingen',
        'BegÃ¤ra dataportabilitet',
        'Ã…terkalla samtycke nÃ¤r som helst'
      ],
      contact_hint: 'FÃ¶r att utÃ¶va dessa rÃ¤ttigheter kan du kontakta oss pÃ¥'
    },
    s6: {
      title: '6. Cookies',
      text: 'Denna webbplats anvÃ¤nder inte cookies eller liknande spÃ¥rningstekniker. Vi lagrar eller samlar inte in nÃ¥gon information om ditt besÃ¶k genom sÃ¥dana metoder.'
    },
    s7: {
      title: '7. Ã„ndringar i denna policy',
      text: 'Vi kan komma att uppdatera denna integritetspolicy frÃ¥n tid till annan. Den senaste versionen finns alltid publicerad pÃ¥ denna sida tillsammans med datum fÃ¶r senaste uppdatering. Om vi gÃ¶r vÃ¤sentliga Ã¤ndringar som pÃ¥verkar hur vi behandlar dina personuppgifter kommer vi att informera dig pÃ¥ ett tydligt sÃ¤tt, exempelvis via e-post eller pÃ¥ vÃ¥r webbplats.'
    },
    s8: {
      title: '8. Lagring av personuppgifter',
      text: 'Vi behÃ¥ller personuppgifter endast sÃ¥ lÃ¤nge det Ã¤r nÃ¶dvÃ¤ndigt fÃ¶r att uppfylla de syften som anges i denna integritetspolicy, om inte en lÃ¤ngre lagringsperiod krÃ¤vs eller tillÃ¥ts enligt lag.'
    },
    cta: {
      title: 'FrÃ¥gor om denna policy?',
      desc: 'Om du har frÃ¥gor om denna integritetspolicy, kontakta oss gÃ¤rna.',
      button: 'Kontakta oss'
    }
  },
  modal: {
    title: 'Kontakta oss',
    desc: 'Fyll i detaljerna sÃ¥ Ã¥terkommer vi snart.',
    company_label: 'FÃ¶retagsnamn',
    company_placeholder: 'Ex. Yntra AB',
    tel_label: 'Tel',
    tel_placeholder: 'Ex. +46 70 123 45 67',
    email_label: 'Eâ€‘post',
    email_placeholder: 'Ex. du@foretag.se',
    message_label: 'Meddelande',
    message_placeholder: 'BerÃ¤tta kort om ert behov eller projekt...',
    cancel: 'Avbryt',
    send: 'Skicka',
    privacy: 'Vi delar aldrig din information.',
    close: 'StÃ¤ng'
  },
  schedule: {
    title: 'Boka ett samtal',
    desc: 'VÃ¤lj en tid som passar dig. Vi ses online och gÃ¥r igenom behov och nÃ¤sta steg.',
    type_label: 'MÃ¶testyp',
    type_phone: 'Telefon',
    pick_time: 'VÃ¤lj dag och tid',
    timezone_prefix: 'Tider visas i',
    custom_label: 'Annanâ€¦',
    custom_pick_label: 'VÃ¤lj ett datum',
    no_slots: 'Inga tider tillgÃ¤ngliga den dagen',
    name_label: 'Namn',
    name_placeholder: 'Ex. Anna Andersson',
    email_label: 'Eâ€‘post',
    email_placeholder: 'Ex. du@foretag.se',
    company_label: 'FÃ¶retag',
    company_placeholder: 'Ex. Yntra AB',
    tel_label: 'Tel',
    tel_placeholder: 'Ex. +46 70 123 45 67',
    notes_label: 'Anteckningar (valfritt)',
    notes_placeholder: 'NÃ¥got sÃ¤rskilt du vill ta upp?',
    cancel: 'Avbryt',
    confirm: 'BekrÃ¤fta bokning',
    privacy: 'Vi skickar en bekrÃ¤ftelse och kalenderinbjudan.',
    close: 'StÃ¤ng',
    select_time_required: 'VÃ¤lj en tid, tack.',
    prev_day: 'FÃ¶regÃ¥ende dag',
    next_day: 'NÃ¤sta dag',
    calendar_open: 'Ã–ppna kalendern',
    clear_date: 'Rensa datum'
  },
  about: {
    title: 'Om oss',
    meta_description: 'Vi bygger skrÃ¤ddarsydda webbplatser, system och appar med ren, anpassad kod â€” inga mallar.',
    hero: 'Vi bygger skrÃ¤ddarsydda webbplatser och system/appar fÃ¶r fÃ¶retag. Oftast i Svelte, Tailwind och TypeScript â€” men gÃ¤rna i andra sprÃ¥k/stacks om du Ã¶nskar. Inga templates eller WordPress â€” bara ren, handskriven kod som passar ditt fÃ¶retag och skalar med dig.',
    s1: {
      title: 'Vad vi gÃ¶r',
      intro: 'FrÃ¥n marknadsplatser till affÃ¤rskritiska interna verktyg â€” vi designar, bygger och levererar snabba, robusta och lÃ¤ttskÃ¶tta lÃ¶sningar.',
      items: {
        websites: { title: 'Webbplatser', desc: 'Moderna, tillgÃ¤ngliga och snabba sajter som konverterar och Ã¤r enkla att fÃ¶rvalta.' },
        apps: { title: 'System & appar', desc: 'SkrÃ¤ddarsydda verktyg, dashboards, portaler och integrationer som effektiviserar arbetet.' },
        integrations: { title: 'Integrationer & automation', desc: 'API:er, datasync, jobb och flÃ¶den som tar bort manuella steg.' },
        design: { title: 'Design & UX', desc: 'AnvÃ¤ndarcentrerade grÃ¤nssnitt, designsystem och omtÃ¤nksamma mikrointeraktioner.' }
      }
    },
    s2: {
      title: 'Hur vi bygger',
      items: [
        'Endast skrÃ¤ddarsydd kod â€” aldrig mallar eller generiska CMSâ€‘teman',
        'SvelteKit + Tailwind + TypeScript som standard; andra stackar vid behov',
        'Stark grund: tillgÃ¤nglighet, prestanda, sÃ¤kerhet och tydlig arkitektur',
        'Test dÃ¤r det gÃ¶r mest nytta; CIâ€‘kontroller och fÃ¶rhandsgranskningar',
        'Ni Ã¤ger koden: handover, dokumentation och lÃ¥ngsiktig fÃ¶rvaltbarhet',
        'Transparens: korta iterationer, demoavstÃ¤mningar och asynkrona uppdateringar'
      ]
    },
    s3: {
      title: 'VÃ¥r process',
      steps: [
        { title: 'Discovery', desc: 'MÃ¥l, anvÃ¤ndare, begrÃ¤nsningar, mÃ¥tt pÃ¥ framgÃ¥ng â€” vi linjerar scope och antaganden.' },
        { title: 'Design', desc: 'FlÃ¶den, lÃ¥g-/hÃ¶gfidelity, designtokens och komponentbibliotek.' },
        { title: 'Bygg', desc: 'Iterativ leverans med CI, kodgranskningar och stagingâ€‘miljÃ¶er.' },
        { title: 'Integrera', desc: 'API:er, auth, betalningar, analys, innehÃ¥ll och automation.' },
        { title: 'Testa & optimera', desc: 'Funktion, prestanda och tillgÃ¤nglighet; profilering och finputs.' },
        { title: 'Lansera & stÃ¶d', desc: 'Utrullningsplan, Ã¶verlÃ¤mning, dokumentation och valfritt lÃ¶pande stÃ¶d.' }
      ]
    },
    s4: {
      title: 'Teknik & verktyg',
      text: 'Vi fÃ¶redrar SvelteKit, Tailwind CSS och TypeScript fÃ¶r tempo och fÃ¶rvaltbarhet, men levererar gÃ¤rna i React, Vue eller moderna servermiljÃ¶er om ni Ã¶nskar. Vi designar fÃ¶r Ã¤gande Ã¶ver tid: minimalt beroende, tydliga grÃ¤nser och infrastruktur som skalar.'
    },
    cta: {
      title: 'Redo att bygga tillsammans?',
      desc: 'BerÃ¤tta om dina mÃ¥l sÃ¥ fÃ¶reslÃ¥r vi en pragmatisk plan som balanserar tempo, kvalitet och budget â€” och levererar.',
      contact: 'Ta kontakt'
    }
  },
  help: {
    meta_title: 'HjÃ¤lpcenter â€” Yntra',
    meta_description: 'Hitta svar, guider och resurser fÃ¶r att komma igÃ¥ng och lyckas med Yntra.',
    title: 'HjÃ¤lpcenter',
    subtitle: 'Hitta snabba svar pÃ¥ vanliga frÃ¥gor, lÃ¤s guider och fÃ¥ stÃ¶d nÃ¤r du behÃ¶ver det.',
    search_open_aria: 'Ã–ppna sÃ¶k',
    search_input_aria: 'SÃ¶k i HjÃ¤lpcenter',
    search_placeholder: 'SÃ¶k i HjÃ¤lpcenterâ€¦',
    search_suggestions_aria: 'SÃ¶kfÃ¶rslag',
    categories: {
      title: 'Utforska kategorier',
      subtitle: 'Vi har samlat det viktigaste fÃ¶r att komma igÃ¥ng, fÃ¶rstÃ¥ priser och hur vi levererar.',
      more_help: 'BehÃ¶ver du mer hjÃ¤lp?'
    },
    groups: {
      getting_started: { title: 'Kom igÃ¥ng' },
      services_pricing: { title: 'TjÃ¤nster & priser' },
      project_delivery: { title: 'Projekt & leverans' },
      tech_hosting: { title: 'Teknik & hosting' },
      billing: { title: 'Fakturering' },
      contact: { title: 'Kontakt' }
    },
    articles: {
      'getting-started': { title: 'Hur kommer jag igÃ¥ng med ett projekt?', category: 'Kom igÃ¥ng' },
      pricing: { title: 'Vad kostar en webbplats?', category: 'TjÃ¤nster & priser' },
      process: { title: 'Hur ser processen ut frÃ¥n start till lansering?', category: 'Projekt & leverans' },
      tech: { title: 'Vilken stack och hosting anvÃ¤nder ni?', category: 'Teknik & hosting' },
      billing: { title: 'Hur fungerar fakturering och betalning?', category: 'Fakturering' },
      'contact-support': { title: 'Hur nÃ¥r jag supporten?', category: 'Kontakt' },
      requirements: { title: 'Vad behÃ¶ver vi frÃ¥n dig?', category: 'Kom igÃ¥ng' },
      scope: { title: 'Vad ingÃ¥r i paketen?', category: 'TjÃ¤nster & priser' },
      addons: { title: 'Tillval & efterkÃ¶p', category: 'TjÃ¤nster & priser' },
      quality: { title: 'Kvalitet & test', category: 'Projekt & leverans' },
      handover: { title: 'Lansering & Ã¶verlÃ¤mning', category: 'Projekt & leverans' },
      performance: { title: 'Prestanda & SEO', category: 'Teknik & hosting' },
      security: { title: 'SÃ¤kerhet & backup', category: 'Teknik & hosting' },
      payments: { title: 'BetalningssÃ¤tt', category: 'Fakturering' },
      terms: { title: 'Avtal & uppsÃ¤gning', category: 'Fakturering' },
      slas: { title: 'Svarstider (SLA)', category: 'Kontakt' },
      book: { title: 'Boka ett samtal', category: 'Kontakt' }
    },
    answers: {
      more_info: 'Mer information',
      fallback: 'Detaljer kommer snart.',
      'getting-started': {
        title: 'Projektstart & onboarding',
        paragraphs: [
          'BÃ¶rja med att beskriva mÃ¥l, mÃ¥lgrupp och viktigaste affÃ¤rskraven. Vi Ã¥terkommer med rekommenderad lÃ¶sning, tidslinje och kostnadsmodell.',
          'Vid start sÃ¤tter vi upp gemensam kanal (t.ex. Slack) och kÃ¶r en kickoff fÃ¶r att sÃ¤kerstÃ¤lla scope och prioriteringar.'
        ]
      },
      pricing: {
        title: 'Prismodeller',
        paragraphs: [
          'Fasta paket nÃ¤r leverabler Ã¤r tydliga; lÃ¶pande (T&M) fÃ¶r iterativ utveckling.',
          'Alla upplÃ¤gg inkluderar kvalitetssÃ¤kring, release-stÃ¶d och projektledning i rimlig omfattning.'
        ]
      },
      process: {
        title: 'Design- och utvecklingsprocess',
        paragraphs: [
          'Discovery â†’ Design â†’ Utveckling â†’ Test â†’ Lansering â†’ Support.',
          'Vi jobbar transparent med demoavstÃ¤mningar och korta iterationer fÃ¶r snabb feedback.'
        ]
      },
      requirements: {
        title: 'Vad behÃ¶ver vi frÃ¥n dig?',
        paragraphs: [
          'Material som logotyp, brandguidelines, befintligt innehÃ¥ll och eventuella referenser.',
          'TillgÃ¥ngar fÃ¶r integrationer (API-nycklar etc.) samt kontaktperson fÃ¶r snabba beslut.'
        ]
      },
      scope: {
        title: 'Vad ingÃ¥r i paketen?',
        paragraphs: [
          'Leverabler specificeras i offert/SoW: sidor, vyer, funktioner, integrationer och handover.',
          'UtÃ¶ver detta kan tillval lÃ¤ggas till vid behov.'
        ]
      },
      addons: {
        title: 'Tillval & efterkÃ¶p',
        paragraphs: [
          'Exempel: extra sprÃ¥k, fler sidmallar, growthâ€‘experiment, A/Bâ€‘test, utÃ¶kad SEO.',
          'Support- och fÃ¶rbÃ¤ttringspaket kan tecknas lÃ¶pande.'
        ]
      },
      quality: {
        title: 'Kvalitet & test',
        paragraphs: [
          'Vi kÃ¶r automatiserade och manuella tester samt prestandaâ€‘ och tillgÃ¤nglighetskontroller.',
          'Buggar som upptÃ¤cks inom Ã¶verenskommen period Ã¥tgÃ¤rdas utan extra kostnad.'
        ]
      },
      handover: {
        title: 'Lansering & Ã¶verlÃ¤mning',
        paragraphs: [
          'Releaseplan med rollbackâ€‘strategi, dokumentation och kunskapsÃ¶verfÃ¶ring ingÃ¥r.',
          'Vi erbjuder Ã¤ven postâ€‘launch uppfÃ¶ljning och mÃ¤tning.'
        ]
      },
      tech: {
        title: 'Stack & verktyg',
        paragraphs: [
          'Modern webbstack (t.ex. SvelteKit) med fokus pÃ¥ prestanda, sÃ¤kerhet och DX.',
          'Hosting vÃ¤ljs efter krav: edge/CDN eller containerbaserad miljÃ¶.'
        ]
      },
      performance: {
        title: 'Prestanda & SEO',
        paragraphs: [
          'Core Web Vitals, bildoptimering och caching Ã¤r standard.',
          'Teknisk SEO och strukturerad data implementeras vid relevant scope.'
        ]
      },
      security: {
        title: 'SÃ¤kerhet & backup',
        paragraphs: [
          'SÃ¤kra beroenden, skydd mot vanliga attacker, och rollbaserad Ã¥tkomst.',
          'Backupâ€‘ och Ã¥terstÃ¤llningsrutiner enligt Ã¶verenskomna RPO/RTO.'
        ]
      },
      billing: {
        title: 'Fakturaintervall',
        paragraphs: [
          'MÃ¥nadsvis i efterskott eller per milstolpe. 30 dagar netto som standard.',
          'Outnyttjad tid kan kvittas enligt avtal.'
        ]
      },
      payments: {
        title: 'BetalningssÃ¤tt',
        paragraphs: [
          'Bankgiro, kort eller internationell Ã¶verfÃ¶ring beroende pÃ¥ bolagstillhÃ¶righet.',
          'Fakturaspecifikation innehÃ¥ller tidsloggar och leverabler per period.'
        ]
      },
      terms: {
        title: 'Avtal & uppsÃ¤gning',
        paragraphs: [
          'Villkor och uppsÃ¤gningstid framgÃ¥r av Kundavtal/SoW.',
          'Arbete kan pausas vid sen betalning efter avisering enligt villkor.'
        ]
      },
      'contact-support': {
        title: 'Supportkanaler',
        paragraphs: [
          'Eâ€‘post till info@yntra.se fÃ¶r alla Ã¤renden. Dedikerad Slackâ€‘kanal fÃ¶r pÃ¥gÃ¥ende projekt.',
          'Akuta driftfrÃ¥gor prioriteras enligt Ã¶verenskommen SLA.'
        ]
      },
      slas: {
        title: 'Svarstider (SLA)',
        paragraphs: [
          'Vanliga Ã¤renden: svar inom 1 arbetsdag. Akuta Ã¤renden: omedelbar bekrÃ¤ftelse och Ã¥tgÃ¤rdsplan.',
          'TillgÃ¤nglighet och beredskap kan avtalas i supportpaket.'
        ]
      },
      book: {
        title: 'Boka ett samtal',
        paragraphs: [
          'VÃ¤lj en tid som passar. Vi gÃ¥r igenom behov, scope och nÃ¤sta steg.',
          'Bokningen genererar kalenderinbjudan och bekrÃ¤ftelse via eâ€‘post.'
        ]
      }
    },
    faq: {
      title: 'Vanliga frÃ¥gor',
      items: [
        { q: 'Hur snabbt fÃ¥r jag Ã¥terkoppling pÃ¥ nya fÃ¶rfrÃ¥gningar?', a: 'Vi Ã¥terkommer normalt inom 1 arbetsdag. BrÃ¥dskande Ã¤renden besvaras snabbare.' },
        { q: 'IngÃ¥r garanti och buggfix efter leverans?', a: 'Ja, inom en Ã¶verenskommen period Ã¥tgÃ¤rdar vi fel utan extra kostnad.' },
        { q: 'Kan ni arbeta med befintlig kodbas/design?', a: 'Absolut. Vi gÃ¶r en snabb teknisk/UXâ€‘genomlysning och rekommenderar bÃ¤sta vÃ¤gen framÃ¥t.' },
        { q: 'Hur hanterar ni Ã¤ndringsÃ¶nskemÃ¥l under projektets gÃ¥ng?', a: 'Vi prioriterar i backlog och estimerar pÃ¥verkan. Mindre justeringar ryms ofta inom sprint.' },
        { q: 'Erbjuder ni lÃ¶pande support efter lansering?', a: 'Ja, via flexibla supportpaket (SLA, fÃ¶rbÃ¤ttringar, Ã¶vervakning och incidenthantering).' }
      ]
    },
    cta: {
      title: 'Hittar du inte det du sÃ¶ker?',
      subtitle: 'VÃ¥rt team svarar gÃ¤rna pÃ¥ frÃ¥gor och guidar dig till rÃ¤tt lÃ¶sning.',
      contact: 'Kontakta oss',
      book_call: 'Boka ett samtal'
    },
    actions: {
      close: 'StÃ¤ng'
    }
  },
  trusted: {
    ...(base as any).trusted,
    title: 'Teknologier vi anvÃ¤nder',
    subtitle: 'Modern teknik som ger snabbare utveckling, hÃ¶gre prestanda och framtidssÃ¤kra lÃ¶sningar.'
  }
};