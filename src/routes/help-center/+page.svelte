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
  
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { t, locale as i18nLocale } from '$lib/i18n';
  import { get } from 'svelte/store';

  let query = $state('');
  // global contact modal handled in layout
  let activeKey = $state<string | null>(null);
  let searchInputEl: HTMLInputElement | null = null;

  function handleKey(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      if (activeKey) activeKey = null;
      else query = '';
    }
  }

  // Positioning for fixed search dropdown (escapes overflow clipping)
  let searchWrapEl = $state<HTMLDivElement | null>(null);
  let dropdownEl = $state<HTMLDivElement | null>(null);
  // Move dropdown node to <body> to avoid clipping; absolute positioned in page coords
  function toBody(node: HTMLElement) {
    if (typeof document === 'undefined') return {} as any;
    const parent = node.parentNode as Node | null;
    const next = node.nextSibling as Node | null;
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
    const _q = query; // trigger
    if (ddOpen) queueMicrotask(updateDropdownRect);
  });

  type Article = { title: string; key: string; category: string };

  // Group definitions (IDs used for i18n lookups)
  const groupDefs = [
    { id: 'getting_started', icon: LifeBuoy, color: 'bg-emerald-500/90', items: ['getting-started', 'process', 'requirements'] },
    { id: 'services_pricing', icon: FileText, color: 'bg-sky-500/90', items: ['pricing', 'scope', 'addons'] },
    { id: 'project_delivery', icon: Settings, color: 'bg-amber-500/90', items: ['process', 'quality', 'handover'] },
    { id: 'tech_hosting', icon: Settings, color: 'bg-indigo-500/90', items: ['tech', 'performance', 'security'] },
    { id: 'billing', icon: CreditCard, color: 'bg-rose-500/90', items: ['billing', 'payments', 'terms'] },
    { id: 'contact', icon: MessageCircle, color: 'bg-teal-500/90', items: ['contact-support', 'slas'] }
  ] as const;

  // Localized categories
  const categories = $derived(
    groupDefs.map((g) => ({
      key: $t(`help.groups.${g.id}.title`),
      icon: g.icon,
      color: g.color,
      items: g.items.map((it) => ({ title: $t(`help.articles.${it}.title`), key: it }))
    }))
  );

  // Build searchable article list from translation keys
  const articleIds = Array.from(new Set(groupDefs.flatMap((g) => g.items)));
  const articles = $derived<Article[]>(
    articleIds.map((k) => ({
      key: k,
      title: $t(`help.articles.${k}.title`),
      category: $t(`help.articles.${k}.category`)
    }))
  );

  const results = $derived(
    query.trim().length
      ? articles.filter((a) => (a.title + ' ' + a.category).toLowerCase().includes(query.toLowerCase()))
      : []
  );
  const ddOpen = $derived(results.length > 0);

  // Close search dropdown whenever the right-side sheet opens
  $effect(() => {
    if (activeKey) query = '';
  });

  // Close dropdown on outside click; allow scroll inside menu and keep open on page scroll
  function eventInside(el: HTMLElement | null, e: Event) {
    if (!el) return false;
    const target = e.target as Node | null;
    if (target && el.contains(target)) return true;
    const path = (e as any)?.composedPath?.();
    return Array.isArray(path) ? path.includes(el) : false;
  }
  function handleWindowClick(e: MouseEvent) {
    if (!ddOpen) return;
    if (eventInside(dropdownEl, e) || eventInside(searchWrapEl, e)) return;
    query = '';
  }

  // Localized answer content helpers
  function getParagraphs(key: string) {
    const out: string[] = [];
    const tr = get(t);
    for (let i = 0; i < 12; i++) {
      const msg = tr(`help.answers.${key}.paragraphs.${i}`);
      if (!msg || msg === `help.answers.${key}.paragraphs.${i}`) break;
      out.push(msg);
    }
    return out;
  }
  let answerParagraphs = $state<string[]>([]);
  const answerTitle = $derived(activeKey ? $t(`help.answers.${activeKey}.title`) : '');
  $effect(() => {
    const _l = $i18nLocale; // react to locale changes
    answerParagraphs = activeKey ? getParagraphs(activeKey) : [];
  });

  const faqIdx = [0, 1, 2, 3, 4];
</script>

<svelte:head>
  <title>{$t('help.meta_title')}</title>
  <meta name="description" content={$t('help.meta_description')} />
</svelte:head>

<!-- Hero / Search -->
<section class="relative isolate min-h-[450px] flex items-center text-white overflow-hidden">
  <div class="absolute inset-[-20%] sm:inset-[-35%] z-0 pointer-events-none bg-[linear-gradient(135deg,var(--primary)_0%,hsl(222,18%,22%)_38%,hsl(222,22%,12%)_68%,var(--primary)_100%)] bg-no-repeat [background-size:220%_220%] sm:[background-size:260%_260%] [will-change:background-position] animate-[diagonal-pan_48s_cubic-bezier(0.22,1,0.36,1)_infinite] motion-reduce:animate-none"></div>
  <div class="absolute inset-0 z-[1] pointer-events-none [background:linear-gradient(45deg,rgba(0,0,0,.08)_0%,transparent_50%,rgba(0,0,0,.08)_100%)]"></div>

  <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-32 md:pb-40">
    <div class="max-w-2xl">
      <h1 class="text-4xl md:text-5xl font-semibold tracking-tight">{$t('help.title')}</h1>
      <p class="mt-3 text-white/80 max-w-xl">{$t('help.subtitle')}</p>

      <div class="mt-8 relative z-20">
        <div
          class="group flex items-center gap-3 bg-white/95 supports-[backdrop-filter]:bg-white/85 backdrop-blur ring-1 ring-white/20 focus-within:ring-white rounded-xl px-4 py-3 text-slate-800 shadow-lg cursor-text focus:outline-none focus-visible:outline-none"
          bind:this={searchWrapEl}
          role="button"
          aria-label={$t('help.search_open_aria')}
          tabindex="0"
          onclick={() => { searchInputEl?.focus(); updateDropdownRect(); }}
          onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); searchInputEl?.focus(); updateDropdownRect(); } }}
        >
          <Search class="h-5 w-5 text-slate-500" aria-hidden="true" />
          <input
            type="search"
            class="hc-input w-full bg-transparent placeholder:text-slate-500 appearance-none border-0 focus:border-0 focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 shadow-none focus:shadow-none focus-visible:shadow-none"
            placeholder={$t('help.search_placeholder')}
            bind:value={query}
            aria-label={$t('help.search_input_aria')}
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
               role="listbox" aria-label={$t('help.search_suggestions_aria')}>
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
      <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">{$t('help.categories.title')}</h2>
      <p class="mt-1 text-slate-600">{$t('help.categories.subtitle')}</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {#each categories as c}
        <div class="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
          <div class="p-6">
            <div class="flex items-center gap-3">
              <div class={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${c.color} text-white`}>
                <c.icon class="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{c.key}</h3>
            </div>
            <ul class="mt-4 space-y-2">
              {#each c.items as it}
                <li>
                  <button type="button" class="group inline-flex items-center gap-2 text-slate-600 hover:text-slate-900" onclick={() => (activeKey = it.key)}>
                    <ChevronRight class="h-4 w-4 text-slate-400 group-hover:text-slate-700 transition-colors" aria-hidden="true" />
                    <span class="text-[16px]">{it.title}</span>
                  </button>
                </li>
              {/each}
            </ul>
          </div>
          <div class="px-6 py-4 border-t border-slate-100 bg-slate-50/60 rounded-b-2xl">
            <a href="#contact-support" class="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
              {$t('help.categories.more_help')}
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
    <div class="fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px]" role="button" tabindex="0" aria-label="Close" onclick={() => (activeKey = null)} onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar' || e.key === 'Escape') { e.preventDefault(); activeKey = null; } }} in:fade={{ duration: 140 }} out:fade={{ duration: 120 }}></div>
    <div
      class={`fixed right-0 top-0 z-50 h-dvh w-full max-w-xl md:max-w-[42rem] bg-white rounded-l-2xl shadow-2xl transition-transform duration-300 translate-x-0 overflow-y-auto`}
      onclick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sheet-title"
      tabindex="-1"
      in:fly={{ x: 480, duration: 260, easing: cubicOut }}
      out:fly={{ x: 480, duration: 220, easing: cubicOut }}
    >
      <div class="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-slate-200 bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur">
        <h3 id="sheet-title" class="text-lg font-semibold text-slate-900">{answerTitle || $t('help.answers.more_info')}</h3>
        <button type="button" class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50" aria-label={$t('help.actions.close')} onclick={() => (activeKey = null)}>
          <X class="h-5 w-5 text-slate-700" aria-hidden="true" />
        </button>
      </div>
      <div class="p-5 space-y-4 text-slate-700">
        {#if activeKey}
          {#each answerParagraphs as p}
            <p>{p}</p>
          {/each}
        {:else}
          <p>{$t('help.answers.fallback')}</p>
        {/if}
      </div>
    </div>
  {/if}

<!-- FAQ -->
<section class="py-4 md:py-6 bg-white">
  <div class="max-w-4xl mx-auto px-6 md:px-0">
    <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">{$t('help.faq.title')}</h2>
    <div class="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
      {#each faqIdx as i, idx}
        <details class="group p-5" open={idx === 0}>
          <summary class="flex cursor-pointer list-none items-center justify-between text-slate-900 font-medium">
            {$t(`help.faq.items.${i}.q`)}
            <span class="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90">
              <ChevronRight class="h-4 w-4" aria-hidden="true" />
            </span>
          </summary>
          <div class="mt-1 text-slate-600">{$t(`help.faq.items.${i}.a`)}</div>
        </details>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-10 md:py-14 bg-slate-50">
  <div class="max-w-4xl mx-auto px-6 md:px-0">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
      <div>
        <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">{$t('help.cta.title')}</h2>
        <p class="mt-1 text-slate-600">{$t('help.cta.subtitle')}</p>
      </div>
      <div class="flex items-center justify-center md:justify-end flex-wrap gap-2 md:gap-3">
        <button type="button" class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] shadow-sm transform transition-all duration-200 ease-out hover:scale-105 hover:shadow-md hover:brightness-110 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer s-y_bCXRrkrYfP" data-open-contact>
          <span class="text-white">{$t('help.cta.contact')}</span>
          <ChevronRight class="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>

  
</section>

<style>
  /* ensure dropdown scrollbars behave */
  .hc-scroll { -webkit-overflow-scrolling: touch; }
</style>














