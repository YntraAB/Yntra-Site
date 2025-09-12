<script lang="ts">
  import { t } from '$lib/i18n';
  import { onDestroy } from 'svelte';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import Server from 'lucide-svelte/icons/server';
  import Workflow from 'lucide-svelte/icons/workflow';
  import Building2 from 'lucide-svelte/icons/building-2';
  import Settings from 'lucide-svelte/icons/settings';
  import ShieldCheck from 'lucide-svelte/icons/shield-check';
  import Gauge from 'lucide-svelte/icons/gauge';
  import Boxes from 'lucide-svelte/icons/boxes';
  import Code2 from 'lucide-svelte/icons/code-2';
  import Zap from 'lucide-svelte/icons/zap';
  let bgVideo: HTMLVideoElement | null = null;
  onDestroy(() => {
    if (bgVideo) {
      try { bgVideo.pause(); bgVideo.removeAttribute('src'); bgVideo.load(); } catch {}
    }
  });
</script>

<svelte:head>
  <title>{$t('system.title')} | Yntra</title>
  <meta name="description" content={$t('system.meta_description')} />
</svelte:head>

<!-- Hero (same layout as /design) -->
<section class="relative isolate min-h-[520px] flex items-center text-white overflow-hidden">
  <div class="absolute inset-0 -z-10">
    <video bind:this={bgVideo} class="h-full w-full object-cover object-[center_85%] md:object-[center_75%] opacity-70" autoplay muted loop playsinline preload="metadata">
      <source src="/media/system.mp4" type="video/mp4" />
      <source src="https://videos.pexels.com/video-files/5561370/5561370-uhd_2560_1440_24fps.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,.15)_0%,rgba(0,0,0,.3)_60%,rgba(0,0,0,.15)_100%)]"></div>
  </div>
  <div class="relative z-10 w-full max-w-[895px] mx-auto px-6 md:px-0 py-16 md:py-20">
    <div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
      <Server class="h-4 w-4" aria-hidden="true" /> <span>{$t('system.badge')}</span>
    </div>
    <h1 class="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">{$t('system.title')}</h1>
    <p class="mt-4 text-white/85 text-[17px] max-w-2xl">{$t('system.hero')}</p>
    <div class="mt-6 flex gap-3">
      <button type="button" data-open-contact class="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] shadow-sm transform transition hover:scale-105 hover:shadow-md active:scale-100">
        <span>{$t('system.cta_primary')}</span>
        <ChevronRight class="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  </div>
</section>

<section class="py-14 md:py-20">
  <div class="max-w-[895px] mx-auto px-6 md:px-0 space-y-10 md:space-y-14">
    <!-- What we build -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Boxes class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-[30px] font-bold text-slate-900">{$t('system.s1.title')}</h2>
      </div>
      <p class="mt-4 text-slate-700 text-[17px]">{$t('system.s1.intro')}</p>
      <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#each ['internal','automation','enterprise','custom'] as key}
          <div class="rounded-xl ring-1 ring-slate-200/70 p-5">
            <div class="inline-flex items-center gap-2 font-semibold text-slate-900">
              {#if key==='internal'}<Workflow class="h-4 w-4" aria-hidden="true" />{/if}
              {#if key==='automation'}<Zap class="h-4 w-4" aria-hidden="true" />{/if}
              {#if key==='enterprise'}<Building2 class="h-4 w-4" aria-hidden="true" />{/if}
              {#if key==='custom'}<Settings class="h-4 w-4" aria-hidden="true" />{/if}
              {$t(`system.s1.${key}.title`)}</div>
            <p class="mt-1 text-slate-600 text-[17px]">{$t(`system.s1.${key}.desc`)}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Why us for systems -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <ShieldCheck class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-[30px] font-bold text-slate-900">{$t('system.s2.title')}</h2>
      </div>
      <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
        {#each [0,1,2,3] as i}
          <li class="inline-flex items-start gap-2 text-[17px]"><ShieldCheck class="h-5 w-5 text-[var(--accent)] mt-0.5" /> {$t(`system.s2.items.${i}`)}</li>
        {/each}
      </ul>
    </div>

    <!-- Delivery & stack -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Code2 class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-[30px] font-bold text-slate-900">{$t('system.s3.title')}</h2>
      </div>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
        <div class="rounded-xl ring-1 ring-slate-200/70 p-4 bg-slate-50/60">
          <div class="font-semibold text-slate-900">{$t('system.s3.stack_title')}</div>
          <p class="mt-1 text-[17px]">{$t('system.s3.stack_text')}</p>
        </div>
        <div class="rounded-xl ring-1 ring-slate-200/70 p-4 bg-slate-50/60">
          <div class="font-semibold text-slate-900">{$t('system.s3.delivery_title')}</div>
          <p class="mt-1 text-[17px]">{$t('system.s3.delivery_text')}</p>
        </div>
      </div>
      <div class="mt-4 grid grid-cols-3 gap-3 text-center">
        <div class="rounded-xl border border-slate-200 p-4">
          <div class="text-2xl font-bold text-slate-900">{$t('system.stats.years')}</div>
          <div class="text-xs text-slate-600">{$t('system.stats.years_label')}</div>
        </div>
        <div class="rounded-xl border border-slate-200 p-4">
          <div class="text-2xl font-bold text-slate-900">{$t('system.stats.projects')}</div>
          <div class="text-xs text-slate-600">{$t('system.stats.projects_label')}</div>
        </div>
        <div class="rounded-xl border border-slate-200 p-4">
          <div class="text-2xl font-bold text-slate-900">{$t('system.stats.uptime')}</div>
          <div class="text-xs text-slate-600">{$t('system.stats.uptime_label')}</div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Gauge class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-[30px] font-bold text-slate-900">{$t('system.cta_title')}</h2>
      </div>
      <p class="mt-4 text-slate-700 text-[17px]">{$t('system.cta_desc')}</p>
      <div class="mt-6 flex flex-wrap gap-3">
        <button type="button" data-open-contact
          class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] shadow-sm transform transition hover:scale-105 hover:shadow-md active:scale-100">
          <span class="text-white">{$t('system.cta_primary')}</span>
          <ChevronRight class="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</section>
