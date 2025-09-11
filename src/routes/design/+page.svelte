<script lang="ts">
  import { t } from '$lib/i18n';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import Palette from 'lucide-svelte/icons/palette';
  import Monitor from 'lucide-svelte/icons/monitor';
  import Smartphone from 'lucide-svelte/icons/smartphone';
  import LayoutGrid from 'lucide-svelte/icons/layout-grid';
  import Layers from 'lucide-svelte/icons/layers';
  import CheckCircle2 from 'lucide-svelte/icons/check-circle-2';
  import Sparkles from 'lucide-svelte/icons/sparkles';
</script>

<svelte:head>
  <title>{$t('design.title')} | Yntra</title>
  <meta name="description" content={$t('design.meta_description')} />
</svelte:head>

<!-- Hero with video background -->
<section class="relative isolate min-h-[520px] flex items-center text-white overflow-hidden">
  <div class="absolute inset-0 -z-10">
    <video class="h-full w-full object-cover object-[center_85%] md:object-[center_75%] opacity-70" autoplay muted loop playsinline preload="metadata">
      <source src="/media/UI.mp4" type="video/mp4" />
      <!-- Fallback if local file missing -->
      <source src="https://videos.pexels.com/video-files/3048485/3048485-uhd_2560_1440_30fps.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,.15)_0%,rgba(0,0,0,.3)_60%,rgba(0,0,0,.15)_100%)]"></div>
  </div>
  <div class="relative z-10 w-full max-w-[895px] mx-auto px-6 md:px-0 py-16 md:py-20">
    <div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
      <Palette class="h-4 w-4" aria-hidden="true" /> <span>{$t('design.badge')}</span>
    </div>
    <h1 class="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">{$t('design.title')}</h1>
    <p class="mt-4 text-white/85 text-[17px] max-w-2xl">{$t('design.hero')}</p>
    <div class="mt-6 flex gap-3">
      <button type="button" data-open-contact class="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] shadow-sm transform transition hover:scale-105 hover:shadow-md active:scale-100">
        <span>{$t('design.cta_primary')}</span>
        <ChevronRight class="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  </div>
</section>

<section class="py-14 md:py-20">
  <div class="max-w-[895px] mx-auto px-6 md:px-0 space-y-10 md:space-y-14">
    <!-- What we design -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <LayoutGrid class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-[30px] font-bold text-slate-900">{$t('design.s1.title')}</h2>
      </div>
      <p class="mt-4 text-slate-700 text-[17px]">{$t('design.s1.intro')}</p>
      <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="rounded-xl ring-1 ring-slate-200/70 p-5">
          <div class="inline-flex items-center gap-2 font-semibold text-slate-900"><Monitor class="h-4 w-4" /> {$t('design.s1.web.title')}</div>
          <p class="mt-1 text-slate-600 text-[17px]">{$t('design.s1.web.desc')}</p>
        </div>
        <div class="rounded-xl ring-1 ring-slate-200/70 p-5">
          <div class="inline-flex items-center gap-2 font-semibold text-slate-900"><Smartphone class="h-4 w-4" /> {$t('design.s1.apps.title')}</div>
          <p class="mt-1 text-slate-600 text-[17px]">{$t('design.s1.apps.desc')}</p>
        </div>
        <div class="rounded-xl ring-1 ring-slate-200/70 p-5">
          <div class="inline-flex items-center gap-2 font-semibold text-slate-900"><Palette class="h-4 w-4" /> {$t('design.s1.brand.title')}</div>
          <p class="mt-1 text-slate-600 text-[17px]">{$t('design.s1.brand.desc')}</p>
        </div>
        <div class="rounded-xl ring-1 ring-slate-200/70 p-5">
          <div class="inline-flex items-center gap-2 font-semibold text-slate-900"><Layers class="h-4 w-4" /> {$t('design.s1.systems.title')}</div>
          <p class="mt-1 text-slate-600 text-[17px]">{$t('design.s1.systems.desc')}</p>
        </div>
      </div>
    </div>

    <!-- Principles -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Sparkles class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-[30px] font-bold text-slate-900">{$t('design.s2.title')}</h2>
      </div>
      <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
        {#each [0,1,2,3] as i}
          <li class="inline-flex items-start gap-2 text-[17px]"><CheckCircle2 class="h-5 w-5 text-[var(--accent)] mt-0.5" /> {$t(`design.s2.items.${i}`)}</li>
        {/each}
      </ul>
    </div>

    <!-- Process (design-focused) -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Layers class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-[30px] font-bold text-slate-900">{$t('design.s3.title')}</h2>
      </div>
      <div class="mt-6 grid gap-3">
        {#each [0,1,2,3] as i}
          <div class="rounded-xl ring-1 ring-slate-200/70 p-4">
            <div class="font-semibold text-slate-900">{$t(`design.s3.steps.${i}.title`)}</div>
            <p class="mt-1 text-slate-600 text-[17px]">{$t(`design.s3.steps.${i}.desc`)}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- CTA -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <ChevronRight class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-[30px] font-bold text-slate-900">{$t('design.cta_title')}</h2>
      </div>
      <p class="mt-4 text-slate-700 text-[17px]">{$t('design.cta_desc')}</p>
      <div class="mt-6 flex flex-wrap gap-3">
        <button type="button" data-open-contact
          class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] shadow-sm transform transition hover:scale-105 hover:shadow-md active:scale-100">
          <span class="text-white">{$t('design.cta_primary')}</span>
          <ChevronRight class="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</section>
