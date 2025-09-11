<script lang="ts">
  import { t } from '$lib/i18n';
  import FileText from 'lucide-svelte/icons/file-text';
  import Settings from 'lucide-svelte/icons/settings';
  import Wrench from 'lucide-svelte/icons/wrench';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import Code from 'lucide-svelte/icons/code';
  import Rocket from 'lucide-svelte/icons/rocket';
  function clean(s: string) {
    return (s ?? '').replace(/â€”/g, '-');
  }
  function shorten(s: string, maxSentences = 2) {
    const parts = (s ?? '').split(/[.!?]\s+/);
    const out = parts.slice(0, maxSentences).join('. ');
    return out.endsWith('.') ? out : out + (out ? '.' : '');
  }
</script>

<svelte:head>
  <title>{$t('about.title')} | Yntra</title>
  <meta name="description" content={$t('about.meta_description')} />
</svelte:head>

<!-- Hero -->
<section class="relative isolate min-h-[450px] flex items-center text-white overflow-hidden">
  <div class="absolute inset-[-35%] z-0 pointer-events-none bg-[linear-gradient(135deg,var(--primary)_0%,hsl(222,18%,22%)_38%,hsl(222,22%,12%)_68%,var(--primary)_100%)] bg-no-repeat [background-size:260%_260%] [will-change:background-position] animate-[diagonal-pan_48s_cubic-bezier(0.22,1,0.36,1)_infinite] motion-reduce:animate-none"></div>
  <div class="absolute inset-0 z-[1] pointer-events-none [background:linear-gradient(45deg,rgba(0,0,0,.08)_0%,transparent_50%,rgba(0,0,0,.08)_100%)]"></div>

  <div class="relative z-10 w-full max-w-[895px] mx-auto px-6 md:px-0 py-12 md:py-16">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">{clean($t('about.title'))}</h1>
    <p class="mt-4 text-white/80 max-w-2xl text-base">{shorten(clean($t('about.hero')), 2)}</p>
  </div>
  
</section>

<section class="py-12 md:py-16">
  <div class="max-w-[895px] mx-auto px-6 md:px-0 space-y-[45px]">
    <!-- What we do -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <FileText class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{clean($t('about.s1.title'))}</h2>
      </div>

      <p class="mt-4 text-slate-700 text-base">{shorten(clean($t('about.s1.intro')), 1)}</p>

      <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="font-semibold text-slate-900">{clean($t('about.s1.items.websites.title'))}</div>
          <p class="mt-1 text-slate-600">{clean($t('about.s1.items.websites.desc'))}</p>
        </div>
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="font-semibold text-slate-900">{clean($t('about.s1.items.apps.title'))}</div>
          <p class="mt-1 text-slate-600">{clean($t('about.s1.items.apps.desc'))}</p>
        </div>
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="font-semibold text-slate-900">{clean($t('about.s1.items.integrations.title'))}</div>
          <p class="mt-1 text-slate-600">{clean($t('about.s1.items.integrations.desc'))}</p>
        </div>
        <div class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
          <div class="font-semibold text-slate-900">{clean($t('about.s1.items.design.title'))}</div>
          <p class="mt-1 text-slate-600">{clean($t('about.s1.items.design.desc'))}</p>
        </div>
      </div>
    </div>

    <!-- How we build -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Code class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{clean($t('about.s2.title'))}</h2>
      </div>

      <ul class="mt-6 grid grid-cols-1 gap-3">
        {#each [0,1,2,3] as i}
          <li class="bg-white rounded-xl ring-1 ring-slate-200/70 p-4 md:p-5">
            <div class="flex items-start gap-3">
              <span class="relative shrink-0 self-center grid h-8 w-8 place-items-center">
                <span class="absolute h-8 w-8 rounded-full bg-[#EEF2FF]"></span>
                <span class="relative h-2 w-2 rounded-full bg-[var(--accent)]"></span>
              </span>
              <div class="text-slate-700">{clean($t(`about.s2.items.${i}`))}</div>
            </div>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Process -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Settings class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{clean($t('about.s3.title'))}</h2>
      </div>

      <div class="mt-6 grid gap-[20px]">
        {#each [0,1,2,3] as i}
          <div class="relative pl-8">
            <div class="absolute left-0 top-[-5px] bottom-[-5px] w-[20px] rounded-full border-l-[5px] [border-color:color-mix(in_oklab,var(--accent)_92%,white)]"></div>
            <div>
              <div class="font-semibold text-slate-900">{clean($t(`about.s3.steps.${i}.title`))}</div>
              <p class="mt-1 text-slate-600 text-base">{shorten(clean($t(`about.s3.steps.${i}.desc`)), 1)}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Tech & tools -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Wrench class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{clean($t('about.s4.title'))}</h2>
      </div>

      <div class="mt-6 rounded-xl bg-[#F6F8FF] border border-[#D4DFFF] px-4 py-3">
        <p class="text-slate-700 text-sm md:text-base">{shorten(clean($t('about.s4.text')), 2)}</p>
      </div>
    </div>

    <!-- CTA -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Rocket class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{clean($t('about.cta.title'))}</h2>
      </div>
      <p class="mt-4 text-slate-700 text-base">{shorten(clean($t('about.cta.desc')), 2)}</p>
      <div class="mt-6 flex flex-wrap gap-3">
        <button type="button" data-open-contact
          class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] shadow-sm transform transition-all duration-200 ease-out hover:scale-105 hover:shadow-md hover:brightness-110 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer s-y_bCXRrkrYfP"
        >
          <span class="text-white">{clean($t('about.cta.contact'))}</span>
          <ChevronRight class="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</section>







