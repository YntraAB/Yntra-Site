<script lang="ts">
  import { onMount } from 'svelte';
  import { t, locale as i18nLocale } from '$lib/i18n';
  import { get } from 'svelte/store';
  import FileText from 'lucide-svelte/icons/file-text';
  import Settings from 'lucide-svelte/icons/settings';
  import Share2 from 'lucide-svelte/icons/share-2';
  import Shield from 'lucide-svelte/icons/shield';
  import ShieldCheck from 'lucide-svelte/icons/shield-check';
  import Cookie from 'lucide-svelte/icons/cookie';

  let lastUpdated = '';
  function toLocaleTag(code: string) {
    switch (code) {
      case 'sv': return 'sv-SE';
      case 'de': return 'de-DE';
      case 'fr': return 'fr-FR';
      case 'es': return 'es-ES';
      default: return 'sv-SE';
    }
  }
  function formatDate(d: Date, code: string) {
    try {
      return d.toLocaleDateString(toLocaleTag(code), { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return d.toISOString().slice(0, 10);
    }
  }
  onMount(() => {
    const setNow = (code?: string | null) => {
      const c = code ?? get(i18nLocale) ?? 'sv';
      lastUpdated = formatDate(new Date(), c);
    };
    setNow(get(i18nLocale));
    const unsub = i18nLocale.subscribe(setNow);
    return () => unsub();
  });
</script>

<svelte:head>
  <title>{$t('privacy.title')} | Yntra</title>
  <meta name="description" content={$t('privacy.meta_description')} />
</svelte:head>

<section class="relative isolate min-h-[450px] flex items-center text-white overflow-hidden">
  
  <div class="absolute inset-[-35%] z-0 pointer-events-none bg-[linear-gradient(135deg,var(--primary)_0%,hsl(222,18%,22%)_38%,hsl(222,22%,12%)_68%,var(--primary)_100%)] bg-no-repeat [background-size:260%_260%] [will-change:background-position] animate-[diagonal-pan_48s_cubic-bezier(0.22,1,0.36,1)_infinite] motion-reduce:animate-none"></div>
  
  <div class="absolute inset-0 z-[1] pointer-events-none [background:linear-gradient(45deg,rgba(0,0,0,.08)_0%,transparent_50%,rgba(0,0,0,.08)_100%)]"></div>

  <div class="relative z-10 w-full max-w-[895px] mx-auto px-6 md:px-0 py-12 md:py-16">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">{$t('privacy.title')}</h1>
    <p class="mt-4 text-white/80 max-w-2xl text-base md:text-lg">{$t('privacy.hero')}</p>
  </div>
</section>

<section class="py-12 md:py-16">
  <div class="max-w-[895px] mx-auto px-6 md:px-0 space-y-[45px]">
    
    <div class="-mt-2">
      <div class="inline-flex items-center gap-2 rounded-lg bg-white shadow-sm ring-1 ring-slate-200/70 px-3 py-1.5 text-xs text-slate-600">
        <span class="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"></span>
        <span>{$t('privacy.last_updated_label')}: {lastUpdated}</span>
      </div>
    </div>
    
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-8">
      <p class="text-slate-700 text-base md:text-lg leading-relaxed">{$t('privacy.intro_card')}</p>
    </div>

    
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <FileText class="h-5 w-5" aria-hidden="true" />
        </div>
<h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('privacy.s1.title')}</h2>
      </div>

      <p class="mt-4 text-slate-700 text-base md:text-lg">{$t('privacy.s1.intro')}</p>

      <div class="mt-6 grid gap-[20px]">
        
        <div class="relative pl-8">
          <div class="absolute left-0 top-[-5px] bottom-[-5px] w-[20px] rounded-full border-l-[5px] [border-color:color-mix(in_oklab,var(--accent)_92%,white)]"></div>
          <div>
            <div class="font-semibold text-slate-900">{$t('privacy.s1.personal.title')}</div>
            <p class="mt-1 text-slate-600 text-base md:text-lg">{$t('privacy.s1.personal.desc')}</p>
          </div>
        </div>

        
        <div class="relative pl-8">
          <div class="absolute left-0 top-[-5px] bottom-[-5px] w-[20px] rounded-full border-l-[5px] border-black/80"></div>
          <div>
            <div class="font-semibold text-slate-900">{$t('privacy.s1.technical.title')}</div>
            <p class="mt-1 text-slate-600 text-base md:text-lg">{$t('privacy.s1.technical.desc')}</p>
      </div>
    </div>
      </div>
    </div>

    
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Settings class="h-5 w-5" aria-hidden="true" />
        </div>
<h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('privacy.s2.title')}</h2>
      </div>

      <p class="mt-4 text-slate-700 text-base md:text-lg">{$t('privacy.s2.intro')}</p>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="flex items-start gap-3">
            <span class="relative shrink-0 self-center grid h-8 w-8 place-items-center">
              <span class="absolute h-8 w-8 rounded-full bg-[#EEF2FF]"></span>
              <span class="relative h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            </span>
            <div class="text-slate-700">{$t('privacy.s2.items.0')}</div>
          </div>
        </div>
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="flex items-start gap-3">
            <span class="relative shrink-0 self-center grid h-8 w-8 place-items-center">
              <span class="absolute h-8 w-8 rounded-full bg-[#EEF2FF]"></span>
              <span class="relative h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            </span>
            <div class="text-slate-700">{$t('privacy.s2.items.1')}</div>
          </div>
        </div>
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="flex items-start gap-3">
            <span class="relative shrink-0 self-center grid h-8 w-8 place-items-center">
              <span class="absolute h-8 w-8 rounded-full bg-[#EEF2FF]"></span>
              <span class="relative h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            </span>
            <div class="text-slate-700">{$t('privacy.s2.items.2')}</div>
          </div>
        </div>
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="flex items-start gap-3">
            <span class="relative shrink-0 self-center grid h-8 w-8 place-items-center">
              <span class="absolute h-8 w-8 rounded-full bg-[#EEF2FF]"></span>
              <span class="relative h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            </span>
            <div class="text-slate-700">{$t('privacy.s2.items.3')}</div>
      </div>
    </div>
      </div>
    </div>

    
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Share2 class="h-5 w-5" aria-hidden="true" />
        </div>
<h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('privacy.s3.title')}</h2>
      </div>

      <div class="mt-6 rounded-xl bg-[#F6F8FF] border border-[#D4DFFF] px-4 py-3">
        <p class="text-slate-900 font-semibold">{$t('privacy.s3.dont_sell')}</p>
        <p class="text-slate-600 mt-1">{$t('privacy.s3.only_share_with')}</p>
      </div>

      <div class="mt-4 grid grid-cols-1 gap-3">
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="flex items-start gap-3">
            <span class="shrink-0 self-center h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            <div class="text-slate-700">{$t('privacy.s3.items.providers')}</div>
          </div>
        </div>
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="flex items-start gap-3">
            <span class="shrink-0 self-center h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            <div class="text-slate-700">{$t('privacy.s3.items.legal')}</div>
      </div>
    </div>
      </div>
    </div>

    
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Shield class="h-5 w-5" aria-hidden="true" />
        </div>
<h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('privacy.s4.title')}</h2>
      </div>

      <div class="mt-6 rounded-xl bg-[#F6F8FF] border border-[#D4DFFF] px-4 py-3">
        <p class="text-slate-700 text-sm md:text-base">{$t('privacy.s4.text')}</p>
      </div>
    </div>

    
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <ShieldCheck class="h-5 w-5" aria-hidden="true" />
        </div>
<h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('privacy.s5.title')}</h2>
      </div>

      <p class="mt-4 text-slate-700 text-base md:text-lg">{$t('privacy.s5.intro')}</p>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="flex items-start gap-3">
            <span class="relative shrink-0 self-center grid h-8 w-8 place-items-center">
              <span class="absolute h-8 w-8 rounded-full bg-[#EEF2FF]"></span>
              <span class="relative h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            </span>
            <div class="text-slate-700 font-medium">{$t('privacy.s5.items.0')}</div>
          </div>
        </div>
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="flex items-start gap-3">
            <span class="relative shrink-0 self-center grid h-8 w-8 place-items-center">
              <span class="absolute h-8 w-8 rounded-full bg-[#EEF2FF]"></span>
              <span class="relative h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            </span>
            <div class="text-slate-700 font-medium">{$t('privacy.s5.items.1')}</div>
          </div>
        </div>
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="flex items-start gap-3">
            <span class="relative shrink-0 self-center grid h-8 w-8 place-items-center">
              <span class="absolute h-8 w-8 rounded-full bg-[#EEF2FF]"></span>
              <span class="relative h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            </span>
            <div class="text-slate-700 font-medium">{$t('privacy.s5.items.2')}</div>
          </div>
        </div>
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="flex items-start gap-3">
            <span class="relative shrink-0 self-center grid h-8 w-8 place-items-center">
              <span class="absolute h-8 w-8 rounded-full bg-[#EEF2FF]"></span>
              <span class="relative h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            </span>
            <div class="text-slate-700 font-medium">{$t('privacy.s5.items.3')}</div>
          </div>
        </div>
      </div>

      <div class="mt-6 rounded-xl bg-[#F6F8FF] border border-[#D4DFFF] px-4 py-3">
        <p class="text-slate-700 text-sm md:text-base">{$t('privacy.s5.contact_hint')} <a style="color:#4C79FF" class="underline decoration-slate-300 hover:decoration-slate-500" href="mailto:info@yntra.se">info@yntra.se</a>.</p>
      </div>
    </div>

    
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Cookie class="h-5 w-5" aria-hidden="true" />
        </div>
<h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('privacy.s6.title')}</h2>
      </div>

      <div class="mt-6 rounded-xl bg-[#F6F8FF] border border-[#D4DFFF] px-4 py-3">
        <p class="text-slate-700 text-sm md:text-base">{$t('privacy.s6.text')}</p>
      </div>
    </div>

    
    <div class="rounded-2xl p-6 md:p-10 bg-gradient-to-br from-[hsl(222,22%,16%)] to-[hsl(222,22%,10%)] text-white ring-1 ring-white/10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-white/10 text-white grid place-items-center ring-1 ring-white/20">
          <FileText class="h-5 w-5" aria-hidden="true" />
        </div>
<h2 class="text-2xl sm:text-3xl font-bold">{$t('privacy.s7.title')}</h2>
      </div>
      <p class="mt-4 text-white/90 text-base md:text-lg">{$t('privacy.s7.text')}</p>
    </div>

    
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-8 md:p-10 text-center">
      <h3 class="text-xl md:text-2xl font-semibold text-slate-900">{$t('privacy.cta.title')}</h3>
      <p class="mt-2 text-slate-500">{$t('privacy.cta.desc')}</p>
      <div class="mt-6">
        <a href="/#contact" class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-[var(--accent)] text-white px-6 py-2.5 text-base shadow-sm transform transition-all duration-200 ease-out hover:scale-105 hover:shadow-md hover:brightness-110 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
          {$t('privacy.cta.button')}
        </a>
      </div>
    </div>
  </div>
</section>