<script lang="ts">
  import { t } from '$lib/i18n';
  import Settings from 'lucide-svelte/icons/settings';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import Users from 'lucide-svelte/icons/users';
  import ClipboardList from 'lucide-svelte/icons/clipboard-list';
  import FileText from 'lucide-svelte/icons/file-text';
  import Calendar from 'lucide-svelte/icons/calendar';
  import Code2 from 'lucide-svelte/icons/code-2';
  import Wrench from 'lucide-svelte/icons/wrench';
  import CheckCircle2 from 'lucide-svelte/icons/check-circle-2';
  import MessageSquare from 'lucide-svelte/icons/message-square';
  import ShieldCheck from 'lucide-svelte/icons/shield-check';
  import GitBranch from 'lucide-svelte/icons/git-branch';
  import Palette from 'lucide-svelte/icons/palette';
</script>

<svelte:head>
  <title>{$t('process.title')} | Yntra</title>
  <meta name="description" content={$t('process.subtitle')} />
  <meta name="robots" content="index,follow" />
</svelte:head>

<!-- Hero -->
<section class="relative isolate min-h-[450px] flex items-center text-white overflow-hidden">
  <div class="absolute inset-[-35%] z-0 pointer-events-none bg-[linear-gradient(135deg,var(--primary)_0%,hsl(222,18%,22%)_38%,hsl(222,22%,12%)_68%,var(--primary)_100%)] bg-no-repeat [background-size:260%_260%] [will-change:background-position] animate-[diagonal-pan_48s_cubic-bezier(0.22,1,0.36,1)_infinite] motion-reduce:animate-none"></div>
  <div class="absolute inset-0 z-[1] pointer-events-none [background:linear-gradient(45deg,rgba(0,0,0,.08)_0%,transparent_50%,rgba(0,0,0,.08)_100%)]"></div>

  <div class="relative z-10 w-full max-w-[895px] mx-auto px-6 md:px-0 py-12 md:py-16">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">{$t('process.title')}</h1>
    <p class="mt-4 text-white/80 max-w-2xl text-base">{$t('process.subtitle')}</p>
  </div>
</section>

<!-- Content -->
<section class="py-14 md:py-20">
  <div class="max-w-[895px] mx-auto px-6 md:px-0 space-y-10 md:space-y-14">
    <!-- Overview -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Users class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('process.overview.title')}</h2>
      </div>
      <p class="mt-4 text-slate-700 text-base">{$t('process.overview.text')}</p>
      <div class="mt-6 rounded-xl bg-[#F6F8FF] border border-[#D4DFFF] px-4 py-3">
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
          {#each [0,1,2,3] as i}
            <li class="inline-flex items-center gap-2"><CheckCircle2 class="h-4 w-4 text-[var(--accent)]" />{$t(`process.overview.points.${i}`)}</li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Timeline -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Settings class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('process.timeline_title')}</h2>
      </div>

      <div class="mt-6 space-y-6">
        <!-- Discovery -->
        <div class="relative pl-8">
          <div class="absolute left-0 top-[-5px] bottom-[-5px] w-[20px] rounded-full border-l-[5px] [border-color:color-mix(in_oklab,var(--accent)_92%,white)]"></div>
          <div class="flex items-start gap-3">
            <ClipboardList class="h-5 w-5 text-[var(--accent)] mt-0.5" aria-hidden="true" />
            <div>
              <div class="font-semibold text-slate-900">{$t('process.durations.discovery')}</div>
              <p class="mt-1 text-slate-600">{$t('about.s3.steps.0.desc')}</p>
              <ul class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                {#each [0,1,2,3] as i}
                  <li class="inline-flex items-center gap-2"><FileText class="h-4 w-4" />{$t(`process.details.discovery.${i}`)}</li>
                {/each}
              </ul>
            </div>
          </div>
        </div>

        <!-- Design -->
        <div class="relative pl-8">
          <div class="absolute left-0 top-[-5px] bottom-[-5px] w-[20px] rounded-full border-l-[5px] [border-color:color-mix(in_oklab,var(--accent)_92%,white)]"></div>
          <div class="flex items-start gap-3">
            <Palette class="h-5 w-5 text-[var(--accent)] mt-0.5" aria-hidden="true" />
            <div>
              <div class="font-semibold text-slate-900">{$t('process.durations.design')}</div>
              <p class="mt-1 text-slate-600">{$t('about.s3.steps.1.desc')}</p>
              <ul class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                {#each [0,1,2,3] as i}
                  <li class="inline-flex items-center gap-2"><FileText class="h-4 w-4" />{$t(`process.details.design.${i}`)}</li>
                {/each}
              </ul>
            </div>
          </div>
        </div>

        <!-- Build -->
        <div class="relative pl-8">
          <div class="absolute left-0 top-[-5px] bottom-[-5px] w-[20px] rounded-full border-l-[5px] [border-color:color-mix(in_oklab,var(--accent)_92%,white)]"></div>
          <div class="flex items-start gap-3">
            <Code2 class="h-5 w-5 text-[var(--accent)] mt-0.5" aria-hidden="true" />
            <div>
              <div class="font-semibold text-slate-900">{$t('process.durations.build')}</div>
              <p class="mt-1 text-slate-600">{$t('about.s3.steps.2.desc')}</p>
              <ul class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                {#each [0,1,2,3] as i}
                  <li class="inline-flex items-center gap-2">
                    {#if i === 0}<GitBranch class="h-4 w-4" />{/if}
                    {#if i === 1}<Wrench class="h-4 w-4" />{/if}
                    {#if i === 2}<FileText class="h-4 w-4" />{/if}
                    {#if i === 3}<Calendar class="h-4 w-4" />{/if}
                    {$t(`process.details.build.${i}`)}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>

        <!-- Integrate -->
        <div class="relative pl-8">
          <div class="absolute left-0 top-[-5px] bottom-[-5px] w-[20px] rounded-full border-l-[5px] [border-color:color-mix(in_oklab,var(--accent)_92%,white)]"></div>
          <div class="flex items-start gap-3">
            <Wrench class="h-5 w-5 text-[var(--accent)] mt-0.5" aria-hidden="true" />
            <div>
              <div class="font-semibold text-slate-900">{$t('process.durations.integrate')}</div>
              <p class="mt-1 text-slate-600">{$t('about.s3.steps.3.desc')}</p>
              <ul class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                {#each [0,1,2] as i}
                  <li class="inline-flex items-center gap-2"><FileText class="h-4 w-4" />{$t(`process.details.integrate.${i}`)}</li>
                {/each}
              </ul>
            </div>
          </div>
        </div>

        <!-- Test & optimize -->
        <div class="relative pl-8">
          <div class="absolute left-0 top-[-5px] bottom-[-5px] w-[20px] rounded-full border-l-[5px] [border-color:color-mix(in_oklab,var(--accent)_92%,white)]"></div>
          <div class="flex items-start gap-3">
            <ShieldCheck class="h-5 w-5 text-[var(--accent)] mt-0.5" aria-hidden="true" />
            <div>
              <div class="font-semibold text-slate-900">{$t('process.durations.test')}</div>
              <p class="mt-1 text-slate-600">{$t('about.s3.steps.4.desc')}</p>
              <ul class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                {#each [0,1] as i}
                  <li class="inline-flex items-center gap-2"><CheckCircle2 class="h-4 w-4" />{$t(`process.details.test.${i}`)}</li>
                {/each}
              </ul>
            </div>
          </div>
        </div>

        <!-- Launch & support -->
        <div class="relative pl-8">
          <div class="absolute left-0 top-[-5px] bottom-[-5px] w-[20px] rounded-full border-l-[5px] [border-color:color-mix(in_oklab,var(--accent)_92%,white)]"></div>
          <div class="flex items-start gap-3">
            <Calendar class="h-5 w-5 text-[var(--accent)] mt-0.5" aria-hidden="true" />
            <div>
              <div class="font-semibold text-slate-900">{$t('process.durations.launch')}</div>
              <p class="mt-1 text-slate-600">{$t('about.s3.steps.5.desc')}</p>
              <ul class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                {#each [0,1] as i}
                  <li class="inline-flex items-center gap-2"><FileText class="h-4 w-4" />{$t(`process.details.launch.${i}`)}</li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Timeframes -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <Calendar class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('process.timeframes.title')}</h2>
      </div>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="rounded-xl ring-1 ring-slate-200/70 p-5 bg-slate-50/60">
          <div class="text-sm text-slate-500">{$t('process.timeframes.marketing_title')}</div>
          <p class="mt-1 text-slate-600 text-sm">{$t('process.timeframes.marketing_desc')}</p>
        </div>
        <div class="rounded-xl ring-1 ring-slate-200/70 p-5 bg-slate-50/60">
          <div class="text-sm text-slate-500">{$t('process.timeframes.product_title')}</div>
          <p class="mt-1 text-slate-600 text-sm">{$t('process.timeframes.product_desc')}</p>
        </div>
      </div>
    </div>

    <!-- Collaboration -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <MessageSquare class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('process.collaboration.title')}</h2>
      </div>
      <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
        {#each [0,1,2,3] as i}
          <li class="inline-flex items-center gap-2"><CheckCircle2 class="h-4 w-4 text-[var(--accent)]" />{$t(`process.collaboration.items.${i}`)}</li>
        {/each}
      </ul>
    </div>

    <!-- Quality -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <ShieldCheck class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('process.quality.title')}</h2>
      </div>
      <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
        {#each [0,1,2,3] as i}
          <li class="inline-flex items-center gap-2"><CheckCircle2 class="h-4 w-4 text-[var(--accent)]" />{$t(`process.quality.items.${i}`)}</li>
        {/each}
      </ul>
    </div>

    <!-- Pricing -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <FileText class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('process.pricing.title')}</h2>
      </div>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="rounded-xl ring-1 ring-slate-200/70 p-5 bg-slate-50/60">
          <div class="text-slate-900 font-semibold">{$t('process.pricing.fixed_title')}</div>
          <p class="mt-1 text-slate-600 text-sm">{$t('process.pricing.fixed_desc')}</p>
        </div>
        <div class="rounded-xl ring-1 ring-slate-200/70 p-5 bg-slate-50/60">
          <div class="text-slate-900 font-semibold">{$t('process.pricing.tm_title')}</div>
          <p class="mt-1 text-slate-600 text-sm">{$t('process.pricing.tm_desc')}</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/70 p-6 md:p-10">
      <div class="flex items-start gap-4">
        <div class="shrink-0 h-10 w-10 rounded-xl bg-[color-mix(in_oklab,var(--accent)_16%,white)] text-[var(--accent)] grid place-items-center ring-1 ring-slate-200/70">
          <ChevronRight class="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">{$t('process.cta.title')}</h2>
      </div>
      <p class="mt-4 text-slate-700 text-base">{$t('process.cta.desc')}</p>
      <div class="mt-6 flex flex-wrap gap-3">
        <button type="button" data-open-contact
          class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] shadow-sm transform transition-all duration-200 ease-out hover:scale-105 hover:shadow-md hover:brightness-110 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer">
          <span class="text-white">{$t('process.cta.contact')}</span>
          <ChevronRight class="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</section>
