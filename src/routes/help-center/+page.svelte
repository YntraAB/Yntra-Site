<script lang="ts">
  import Search from 'lucide-svelte/icons/search';
  import LifeBuoy from 'lucide-svelte/icons/life-buoy';
  import FileText from 'lucide-svelte/icons/file-text';
  import Settings from 'lucide-svelte/icons/settings';
  import CreditCard from 'lucide-svelte/icons/credit-card';
  import MessageCircle from 'lucide-svelte/icons/message-circle';
  import ArrowRight from 'lucide-svelte/icons/arrow-right';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import X from 'lucide-svelte/icons/x';
  import ContactModal from '$lib/components/ContactModal.svelte';
  import ScheduleCallModal from '$lib/components/ScheduleCallModal.svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  let query = $state('');
  let showContact = $state(false);
  let showSchedule = $state(false);
  let activeKey = $state<string | null>(null);
  let searchInputEl: HTMLInputElement | null = null;
  
  function handleKey(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      if (activeKey) activeKey = null;
      else query = '';
    }
  }

  // Positioning for fixed search dropdown (escapes overflow clipping)
  let searchWrapEl: HTMLDivElement | null = null;
  let dropdownEl: HTMLDivElement | null = null;
  // Move dropdown node to <body> to avoid clipping; absolute positioned in page coords
  function toBody(node: HTMLElement) {
    if (typeof document === 'undefined') return {} as any;
    const parent = node.parentNode as (Node | null);
    const next = node.nextSibling as (Node | null);
    document.body.appendChild(node);
    return {
      destroy() {
        if (parent) parent.insertBefore(node, next);
      }
    };
  }
  let ddTop = $state(0);
  let ddLeft = $state(0);
  let ddWidth = $state(0);

  function updateDropdownRect() {
    if (!searchWrapEl) return;
    const r = searchWrapEl.getBoundingClientRect();
    ddTop = Math.round(r.bottom + window.scrollY);
    ddLeft = Math.round(r.left + window.scrollX);
    ddWidth = Math.round(r.width);
  }

  // Recalculate position when results open or query changes
  $effect(() => {
    // reference to trigger re-run on query updates
    const _q = query;
    if (ddOpen) {
      queueMicrotask(updateDropdownRect);
    }
  });

  

  type Article = { title: string; key: string; category: string };
  const articles: Article[] = [
    { title: 'Hur kommer jag igång med ett projekt?', key: 'getting-started', category: 'Kom igång' },
    { title: 'Vad kostar en webbplats?', key: 'pricing', category: 'Tjänster & priser' },
    { title: 'Hur ser processen ut från start till lansering?', key: 'process', category: 'Projekt & leverans' },
    { title: 'Vilken stack och hosting använder ni?', key: 'tech', category: 'Teknik & hosting' },
    { title: 'Hur fungerar fakturering och betalning?', key: 'billing', category: 'Fakturering' },
    { title: 'Hur når jag supporten?', key: 'contact-support', category: 'Kontakt' },
    { title: 'Vad behöver vi från dig?', key: 'requirements', category: 'Kom igång' },
    { title: 'Vad ingår i paketen?', key: 'scope', category: 'Tjänster & priser' },
    { title: 'Tillval & efterköp', key: 'addons', category: 'Tjänster & priser' },
    { title: 'Kvalitet & test', key: 'quality', category: 'Projekt & leverans' },
    { title: 'Lansering & överlämning', key: 'handover', category: 'Projekt & leverans' },
    { title: 'Prestanda & SEO', key: 'performance', category: 'Teknik & hosting' },
    { title: 'Säkerhet & backup', key: 'security', category: 'Teknik & hosting' },
    { title: 'Betalningssätt', key: 'payments', category: 'Fakturering' },
    { title: 'Avtal & uppsägning', key: 'terms', category: 'Fakturering' },
    { title: 'Svarstider (SLA)', key: 'slas', category: 'Kontakt' },
    { title: 'Boka ett samtal', key: 'book', category: 'Kontakt' }
  ];

  const results = $derived(query.trim().length
    ? articles.filter(a => (a.title + ' ' + a.category).toLowerCase().includes(query.toLowerCase()))
    : []);
  const ddOpen = $derived(results.length > 0);

  // Close search dropdown whenever the right-side sheet opens
  $effect(() => {
    if (activeKey) {
      query = '';
    }
  });

  // Close dropdown on outside click; allow scroll inside menu and keep open on page scroll
  function eventInside(el: HTMLElement | null, e: Event) {
    if (!el) return false;
    const t = e.target as Node | null;
    if (t && el.contains(t)) return true;
    const path = (e as any)?.composedPath?.();
    return Array.isArray(path) ? path.includes(el) : false;
  }
  function handleWindowClick(e: MouseEvent) {
    if (!ddOpen) return;
    if (eventInside(dropdownEl, e) || eventInside(searchWrapEl, e)) return;
    query = '';
  }

  const categories = [
    { key: 'Kom igång', icon: LifeBuoy, color: 'bg-emerald-500/90', items: [
      { title: 'Projektstart & onboarding', key: 'getting-started' },
      { title: 'Tidslinjer & beroenden', key: 'process' },
      { title: 'Vad behöver vi från dig?', key: 'requirements' }
    ]},
    { key: 'Tjänster & priser', icon: FileText, color: 'bg-sky-500/90', items: [
      { title: 'Prismodeller', key: 'pricing' },
      { title: 'Vad ingår i paketen?', key: 'scope' },
      { title: 'Tillval & efterköp', key: 'addons' }
    ]},
    { key: 'Projekt & leverans', icon: Settings, color: 'bg-amber-500/90', items: [
      { title: 'Design- och utvecklingsprocess', key: 'process' },
      { title: 'Kvalitet & test', key: 'quality' },
      { title: 'Lansering & överlämning', key: 'handover' }
    ]},
    { key: 'Teknik & hosting', icon: Settings, color: 'bg-indigo-500/90', items: [
      { title: 'Stack & verktyg', key: 'tech' },
      { title: 'Prestanda & SEO', key: 'performance' },
      { title: 'Säkerhet & backup', key: 'security' }
    ]},
    { key: 'Fakturering', icon: CreditCard, color: 'bg-rose-500/90', items: [
      { title: 'Fakturaintervall', key: 'billing' },
      { title: 'Betalningssätt', key: 'payments' },
      { title: 'Avtal & uppsägning', key: 'terms' }
    ]},
    { key: 'Kontakt', icon: MessageCircle, color: 'bg-teal-500/90', items: [
      { title: 'Supportkanaler', key: 'contact-support' },
      { title: 'Svarstider', key: 'slas' },
      { title: 'Boka ett samtal', key: 'book' }
    ]}
  ];

  type Answer = { title: string; paragraphs: string[] };
  const answers: Record<string, Answer> = {
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
        'Exempel: extra språk, fler sidmallar, growth‑experiment, A/B-test, utökad SEO.',
        'Support- och förbättringspaket kan tecknas löpande.'
      ]
    },
    quality: {
      title: 'Kvalitet & test',
      paragraphs: [
        'Vi kör automatiserade och manuella tester samt prestanda- och tillgänglighetskontroller.',
        'Buggar som upptäcks inom överenskommen period åtgärdas utan extra kostnad.'
      ]
    },
    handover: {
      title: 'Lansering & överlämning',
      paragraphs: [
        'Releaseplan med rollback-strategi, dokumentation och kunskapsöverföring ingår.',
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
        'Backup- och återställningsrutiner enligt överenskomna RPO/RTO.'
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
  };
</script>

<svelte:head>
  <title>Hjälpcenter • Yntra</title>
  <meta name="description" content="Hitta svar, guider och resurser för att komma igång och lyckas med Yntra." />
</svelte:head>

<!-- Hero / Search -->
<section class="relative isolate min-h-[450px] flex items-center text-white overflow-hidden">
  <div class="absolute inset-[-20%] sm:inset-[-35%] z-0 pointer-events-none bg-[linear-gradient(135deg,var(--primary)_0%,hsl(222,18%,22%)_38%,hsl(222,22%,12%)_68%,var(--primary)_100%)] bg-no-repeat [background-size:220%_220%] sm:[background-size:260%_260%] [will-change:background-position] animate-[diagonal-pan_48s_cubic-bezier(0.22,1,0.36,1)_infinite] motion-reduce:animate-none"></div>
  <div class="absolute inset-0 z-[1] pointer-events-none [background:linear-gradient(45deg,rgba(0,0,0,.08)_0%,transparent_50%,rgba(0,0,0,.08)_100%)]"></div>

  <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-32 md:pb-40">
    <div class="max-w-2xl">
      <h1 class="text-4xl md:text-5xl font-semibold tracking-tight">Hjälpcenter</h1>
      <p class="mt-3 text-white/80 max-w-xl">Hitta snabba svar på vanliga frågor, läs guider och få stöd när du behöver det.</p>

      <div class="mt-8 relative z-20">
        <div
          class="group flex items-center gap-3 bg-white/95 supports-[backdrop-filter]:bg-white/85 backdrop-blur ring-1 ring-white/20 focus-within:ring-white rounded-xl px-4 py-3 text-slate-800 shadow-lg cursor-text focus:outline-none focus-visible:outline-none"
          bind:this={searchWrapEl}
          role="button"
          aria-label="Öppna sök"
          tabindex="0"
          onclick={() => { searchInputEl?.focus(); updateDropdownRect(); }}
          onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); searchInputEl?.focus(); updateDropdownRect(); } }}
        >
          <Search class="h-5 w-5 text-slate-500" aria-hidden="true" />
          <input
            type="search"
            class="hc-input w-full bg-transparent placeholder:text-slate-500 appearance-none border-0 focus:border-0 focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 shadow-none focus:shadow-none focus-visible:shadow-none"
            placeholder="Sök i Hjälpcenter…"
            bind:value={query}
            aria-label="Sök i Hjälpcenter"
            bind:this={searchInputEl}
            oninput={() => updateDropdownRect()}
            onfocus={() => updateDropdownRect()}
          />
          <kbd class="hidden md:block text-xs text-slate-500">Enter</kbd>
        </div>

        {#if results.length}
          <div use:toBody class="absolute z-[100] bg-white text-slate-900 rounded-2xl shadow-2xl ring-1 ring-black/10 overflow-hidden"
               style={`top:${ddTop}px;left:${ddLeft}px;width:${ddWidth}px`}
               bind:this={dropdownEl}
               role="listbox" aria-label="Sökförslag">
            <div class="hc-scroll max-h-60 md:max-h-64 overflow-y-auto overscroll-contain touch-pan-y pr-1">
              <ul class="divide-y divide-slate-100">
                {#each results as r}
                  <li>
                    <button type="button" class="w-full text-left flex items-center justify-between px-4 py-3 hover:bg-slate-50" onclick={() => { activeKey = r.key; }}>
                      <div>
                        <p class="font-medium">{r.title}</p>
                        <p class="text-sm text-slate-500">{r.category}</p>
                      </div>
                      <ArrowRight class="h-4 w-4 text-slate-400" aria-hidden="true" />
                    </button>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- Categories -->
<section class="py-16 md:py-20 bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <div class="mb-8 md:mb-12">
      <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">Utforska kategorier</h2>
      <p class="mt-2 text-slate-600">Vi har samlat det viktigaste för att komma igång, förstå priser och hur vi levererar.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {#each categories as c}
        <div class="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
          <div class="p-6">
            <div class="flex items-center gap-3">
              <div class={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${c.color} text-white`}>
                <svelte:component this={c.icon} class="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{c.key}</h3>
            </div>
            <ul class="mt-4 space-y-2">
              {#each c.items as it}
                <li>
                  <button type="button" class="group inline-flex items-center gap-2 text-slate-600 hover:text-slate-900" onclick={() => (activeKey = it.key)}>
                    <ChevronRight class="h-4 w-4 text-slate-400 group-hover:text-slate-700 transition-colors" aria-hidden="true" />
                    <span>{it.title}</span>
                  </button>
                </li>
              {/each}
            </ul>
          </div>
          <div class="px-6 py-4 border-t border-slate-100 bg-slate-50/60 rounded-b-2xl">
            <a href="#contact-support" class="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
              Behöver du mer hjälp?
              <ArrowRight class="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
  

  </section>

  <!-- Modern answer: Slide-in sheet -->
  <svelte:window onkeydown={handleKey} onresize={() => ddOpen && updateDropdownRect()} onclick={handleWindowClick} />
  {#if activeKey}
    <div class="fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px]" onclick={() => (activeKey = null)} in:fade={{ duration: 140 }} out:fade={{ duration: 120 }}></div>
    <aside
      class={`fixed right-0 top-0 z-50 h-dvh w-full max-w-xl md:max-w-[42rem] bg-white rounded-l-2xl shadow-2xl transition-transform duration-300 translate-x-0 overflow-y-auto`}
      onclick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sheet-title"
      in:fly={{ x: 480, duration: 260, easing: cubicOut }}
      out:fly={{ x: 480, duration: 220, easing: cubicOut }}
    >
      <div class="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-slate-200 bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur">
        <h3 id="sheet-title" class="text-lg font-semibold text-slate-900">{answers[activeKey]?.title ?? 'Mer information'}</h3>
        <button type="button" class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50" aria-label="Stäng" onclick={() => (activeKey = null)}>
          <X class="h-5 w-5 text-slate-700" aria-hidden="true" />
        </button>
      </div>
      <div class="p-5 space-y-4 text-slate-700">
        {#if answers[activeKey]}
          {#each answers[activeKey].paragraphs as p}
            <p>{p}</p>
          {/each}
        {:else}
          <p>Detaljer kommer snart.</p>
        {/if}
      </div>
    </aside>
  {/if}

<!-- FAQ -->
<section class="py-4 md:py-6 bg-white">
  <div class="max-w-4xl mx-auto px-6 md:px-0">
    <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">Vanliga frågor</h2>
    <div class="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <details class="group p-5" open>
        <summary class="flex cursor-pointer list-none items-center justify-between text-slate-900 font-medium">
          Hur snabbt får jag återkoppling på nya förfrågningar?
          <span class="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90">
            <ChevronRight class="h-4 w-4" aria-hidden="true" />
          </span>
        </summary>
        <div class="mt-2 text-slate-600">
          Vi återkommer normalt inom 1 arbetsdag. Brådskande ärenden besvaras snabbare.
        </div>
      </details>
      <details class="group p-5">
        <summary class="flex cursor-pointer list-none items-center justify-between text-slate-900 font-medium">
          Ingår garanti och buggfix efter leverans?
          <span class="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90">
            <ChevronRight class="h-4 w-4" aria-hidden="true" />
          </span>
        </summary>
        <div class="mt-2 text-slate-600">
          Ja, inom en överenskommen period åtgärdar vi fel utan extra kostnad.
        </div>
      </details>
      <details class="group p-5">
        <summary class="flex cursor-pointer list-none items-center justify-between text-slate-900 font-medium">
          Kan ni arbeta med befintlig kodbas/design?
          <span class="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90">
            <ChevronRight class="h-4 w-4" aria-hidden="true" />
          </span>
        </summary>
        <div class="mt-2 text-slate-600">
          Absolut. Vi gör snabb teknisk/UX‑genomlysning och rekommenderar bästa vägen framåt.
        </div>
      </details>
      <details class="group p-5">
        <summary class="flex cursor-pointer list-none items-center justify-between text-slate-900 font-medium">
          Hur hanterar ni ändringsönskemål under projektets gång?
          <span class="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90">
            <ChevronRight class="h-4 w-4" aria-hidden="true" />
          </span>
        </summary>
        <div class="mt-2 text-slate-600">
          Vi prioriterar i backlog och estimerar påverkan. Mindre justeringar ryms ofta inom sprint.
        </div>
      </details>
      <details class="group p-5">
        <summary class="flex cursor-pointer list-none items-center justify-between text-slate-900 font-medium">
          Erbjuder ni löpande support efter lansering?
          <span class="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90">
            <ChevronRight class="h-4 w-4" aria-hidden="true" />
          </span>
        </summary>
        <div class="mt-2 text-slate-600">
          Ja, via flexibla supportpaket (SLA, förbättringar, övervakning och incidenthantering).
        </div>
      </details>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-14 md:py-20 bg-slate-50">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">Hittar du inte det du söker?</h2>
        <p class="mt-2 text-slate-600">Vårt team svarar gärna på frågor och guidar dig till rätt lösning.</p>
      </div>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[var(--accent)] text-white shadow hover:opacity-90" onclick={() => (showContact = true)}>
          Kontakta oss
        </button>
        <button type="button" class="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 hover:bg-white shadow-sm" onclick={() => (showSchedule = true)}>
          Boka ett samtal
        </button>
      </div>
    </div>
  </div>

  {#if showContact}
    <ContactModal on:close={() => (showContact = false)} />
  {/if}
  {#if showSchedule}
    <ScheduleCallModal on:close={() => (showSchedule = false)} />
  {/if}
</section>

<style>
  /* No component-scoped styles needed; Tailwind utilities used */
  .hc-scroll { /* modern, subtle scrollbar styling */
    scrollbar-gutter: stable;
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: rgba(15,23,42,.28) transparent; /* thumb, track */
  }
  .hc-scroll::-webkit-scrollbar { width: 10px; }
  .hc-scroll::-webkit-scrollbar-track { background: transparent; }
  .hc-scroll::-webkit-scrollbar-thumb {
    background-color: rgba(15,23,42,.28);
    border-radius: 9999px;
    border: 3px solid transparent; /* padding around thumb */
    background-clip: content-box;
  }
  .hc-scroll:hover::-webkit-scrollbar-thumb { background-color: rgba(15,23,42,.38); }

  /* Kill default blue focus highlight/border on the search input (component-scoped) */
  input.hc-input { border: 0; outline: none; box-shadow: none; }
  input.hc-input:focus { border: 0; outline: none; box-shadow: none; }
  input.hc-input:focus-visible { border: 0; outline: none; box-shadow: none; }
  input.hc-input::-moz-focus-inner { border: 0; }
  input.hc-input::-webkit-search-decoration,
  input.hc-input::-webkit-search-cancel-button,
  input.hc-input::-webkit-search-results-button,
  input.hc-input::-webkit-search-results-decoration { display: none; }
</style>
