<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Monitor from 'lucide-svelte/icons/monitor';
  import Smartphone from 'lucide-svelte/icons/smartphone';
  import Palette from 'lucide-svelte/icons/palette';
  import Headphones from 'lucide-svelte/icons/headphones';
  import Trophy from 'lucide-svelte/icons/trophy';
  import Globe from 'lucide-svelte/icons/globe';
  import Lightning from 'lucide-svelte/icons/zap';
  import TrendingUp from 'lucide-svelte/icons/trending-up';
  import Shield from 'lucide-svelte/icons/shield';
  import MailIcon from 'lucide-svelte/icons/mail';
  import CalendarIcon from 'lucide-svelte/icons/calendar';
  import ArrowRight from 'lucide-svelte/icons/arrow-right';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import Star from 'lucide-svelte/icons/star';
  import Quote from 'lucide-svelte/icons/quote';
  import { reveal } from '$lib/actions/reveal';
  import { t, locale as i18nLocale } from '$lib/i18n';
  import { fitLines } from '$lib/actions/fitLines';
  import ScheduleCallModal from '$lib/components/ScheduleCallModal.svelte';
  
  type ShowcaseType = 'website' | 'system';
  let currentShowcaseType = $state<ShowcaseType>('website');
  let currentSlideIndex = $state(0);
  
  let showSchedule = $state(false);
  const serviceKeys = ['websites','systems','uiux','support'] as const;
  const slides: Record<ShowcaseType, { title: string; subtitle: string; src: string; alt: string }[]> = {
    website: [
      {
        title: 'Modern E-commerce Platform',
        subtitle: 'High-converting online store',
        src: '/images/EcoSync.png',
        alt: 'Modern E-commerce Platform'
      },
      {
        title: 'Corporate Website',
        subtitle: 'Professional business presence',
        src: '/images/Stalker-one.png',
        alt: 'Corporate Website'
      }
    ],
    system: [
      {
        title: 'Omsorg',
        subtitle: 'Custom system app',
        src: '/images/Omsorg.png',
        alt: 'Omsorg'
      },
      {
        title: 'Avelonia',
        subtitle: 'Custom system app',
        src: '/images/Avelonia.png',
        alt: 'Avelonia'
      }
    ]
  };

  function toggleShowcase(type: ShowcaseType) {
    currentShowcaseType = type;
    currentSlideIndex = 0;
    restartAutoAdvance();
  }

  function setSlide(index: number) {
    currentSlideIndex = index;
    restartAutoAdvance();
  }

  function smoothScroll(e: MouseEvent, selector: string) {
    e.preventDefault();
    const el = document.querySelector(selector);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  let interval: ReturnType<typeof setInterval> | null = null;
  function startAutoAdvance() {
    stopAutoAdvance();
    interval = setInterval(() => {
      const len = slides[currentShowcaseType].length;
      currentSlideIndex = (currentSlideIndex + 1) % len;
    }, 5000);
  }
  function stopAutoAdvance() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }
  function restartAutoAdvance() {
    startAutoAdvance();
  }
  onMount(() => {
    startAutoAdvance();
  });
  onDestroy(() => stopAutoAdvance());

  let videoEl: HTMLVideoElement | null = null;

  function handleLoadedMetadata() {
    if (!videoEl) return;
    videoEl.playbackRate = 1;
    videoEl.play().catch(() => {});
  }

  function handleCanPlay() {
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl.playbackRate = 1;
      videoEl.play().catch(() => {});
    }
  }

  const companies = [
    { abbr: 'TC', name: 'Figma' },
    { abbr: 'IL', name: 'VSCode' },
    { abbr: 'GS', name: 'GitHub' },
    { abbr: 'NG', name: 'React' },
    { abbr: 'PS', name: 'Postgresql' },
    { abbr: 'DF', name: 'Bun' }
  ];

  type ShowcaseMedia = { src: string };
  const showcaseMedia: ShowcaseMedia[] = [
    { src: '/images/omsorgPreview.png' },
    { src: '/images/React Pro.png' },
    { src: '/images/Omsorg.png' },
    { src: '/images/React Pro.png' }
  ];

  const listItems: number[] = [0, 1, 2, 3]; 
  let selectedListIndex = $state(0);
  const selectedCardIndex = $derived(listItems[selectedListIndex]);
  function selectList(i: number) {
    selectedListIndex = i;
  }

  const servicesSvg = [
    { icon: Monitor, title: 'Websites', desc: 'Beautiful, responsive, conversion-focused websites that drive results and engage your audience.', features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'CMS Integration'] },
    { icon: Smartphone, title: 'System Apps', desc: 'Custom-built tools and applications to streamline business operations and boost productivity.', features: ['Custom Development', 'API Integration', 'Cloud Deployment', 'Scalable Architecture'] },
    { icon: Palette, title: 'UI/UX Design', desc: 'User-first interfaces that engage and delight, created with deep understanding of user behavior.', features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing'] },
    { icon: Headphones, title: 'Ongoing Support', desc: 'Comprehensive maintenance, scaling, and optimization to keep your digital assets performing at their best.', features: ['24/7 Monitoring', 'Regular Updates', 'Performance Optimization', 'Technical Support'] }
  ];

  const benefitsSvg = [
    { icon: Trophy, title: 'Only the Top 3% of designers & developers', text: 'Rigorous vetting ensures you work with exceptional talent who deliver outstanding results.' },
    { icon: Globe, title: 'Proven track record with global businesses', text: 'Successfully delivered 500+ projects from startups to Fortune 500 enterprises.' },
    { icon: Lightning, title: 'Tailored solutions, no cookie-cutter templates', text: 'Every project is custom-built to match your unique requirements and brand.' },
    { icon: TrendingUp, title: 'Scalable technology that grows with you', text: 'Future-proof architecture and clean code that adapts as you expand.' },
    { icon: Shield, title: 'Quality guarantee and ongoing support', text: 'Comprehensive testing, optimization, and continuous support for long-term success.' }
  ];

  const testimonials = [
    {
      initials: 'SC',
      author: 'Sarah Chen',
      role: 'CEO, TechVision Inc.',
      text:
        "Working with this team was transformational. They didn't just build our platform - they elevated our entire business. The results speak for themselves: 300% growth in just 6 months."
    },
    {
      initials: 'MR',
      author: 'Marcus Rodriguez',
      role: 'CTO, GlobalSoft Solutions',
      text:
        "The quality of code and attention to detail is extraordinary. They delivered a complex enterprise system that handles millions of transactions flawlessly. Best investment we've made."
    },
    {
      initials: 'ET',
      author: 'Emma Thompson',
      role: 'Founder, InnovateLab',
      text:
        'From concept to launch, they guided us every step of the way. Their expertise in both design and development is unmatched. Our customers love the new experience.'
    }
  ];
</script>

<svelte:head>
  <title>Yntra – Webbplatser, Appar & Digitala System</title>
  <meta
    name="description"
    content="Yntra designar och bygger webbplatser, appar och digitala system som hjälper företag att växa snabbare och arbeta smartare. Kontakta oss."
  />
  <meta name="author" content="Yntra" />
  <link rel="canonical" href="https://yntra.se" />

  <meta property="og:title" content="Yntra – Webbplatser, Appar & Digitala System" />
  <meta
    property="og:description"
    content="Vi skapar högpresterande digitala lösningar – från webbplatser och appar till skräddarsydda system. Hjälper företag att skala snabbare och arbeta smartare."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yntra.se" />
  <meta property="og:image" content="https://yntra.se/og-image.jpg" />
  <meta property="og:locale" content="sv_SE" />
  <meta property="og:site_name" content="Yntra" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Yntra – Webbplatser, Appar & Digitala System" />
  <meta name="twitter:description" content="Vi skapar högpresterande digitala lösningar – från webbplatser och appar till skräddarsydda system." />
  <meta name="twitter:image" content="https://yntra.se/og-image.jpg" />
</svelte:head>

<section id="home" class="relative isolate min-h-[100svh] flex items-center text-white overflow-hidden">
  <video
    class="absolute inset-0 z-0 w-full h-full min-w-full min-h-full object-cover object-center pointer-events-none scale-[1.15] sm:scale-100 origin-center will-change-transform"
    src="/media/main.mp4?v=2"
    muted
    autoplay
    playsinline
    loop
    preload="auto"
    bind:this={videoEl}
    onloadedmetadata={handleLoadedMetadata}
    oncanplay={handleCanPlay}
  ></video>
  <div class="absolute inset-0 z-[1] pointer-events-none [background:linear-gradient(45deg,rgba(0,0,0,.08)_0%,transparent_50%,rgba(0,0,0,.08)_100%)]"></div>
  <div class="absolute inset-0 z-[1] pointer-events-none bg-black/50"></div>

  <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-16">
      <div>
        <div class="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 gap-y-1 bg-white/90 supports-[backdrop-filter]:bg-white/75 backdrop-blur rounded-lg sm:rounded-xl px-2 py-1.5 sm:py-1 mb-6 sm:mb-8 shadow-sm w-full sm:w-auto">
          <span class="text-black/60 text-xs sm:text-sm px-2 py-0.5">{$t('hero.looking_for')}</span>
          <button
            type="button"
            class={`inline-flex items-center whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-sm font-normal transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 cursor-pointer ${
              currentShowcaseType === 'website' ? 'bg-[var(--accent)] text-white' : 'text-black hover:bg-white'
            }`}
            onclick={() => toggleShowcase('website')}
            aria-pressed={currentShowcaseType === 'website'}
          >
            <Monitor class="w-4 h-4 sm:w-[18px] sm:h-[18px] mr-1" aria-hidden="true" /> {$t('hero.btn.website')}
          </button>
          <button
            type="button"
            class={`inline-flex items-center whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-sm font-normal transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 cursor-pointer ${
              currentShowcaseType === 'system' ? 'bg-[var(--accent)] text-white' : 'text-black hover:bg-white'
            }`}
            onclick={() => toggleShowcase('system')}
            aria-pressed={currentShowcaseType === 'system'}
          >
            <Smartphone class="w-4 h-4 sm:w-[18px] sm:h-[18px] mr-1" aria-hidden="true" /> {$t('hero.btn.system')}
          </button>
        </div>

        <h1 use:fitLines={{ lines: 2, min: 18, trigger: $i18nLocale }} class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          {$t('hero.title_prefix')}
          <span class="text-[var(--accent)]"> {$t('hero.title_highlight')}</span>
        </h1>
        <p class="mt-0.5 text-white/80 text-[17px] max-w-xl mb-8">{$t('hero.subtitle')}</p>

        <a 
          href="#contact" 
          class="inline-flex items-center gap-2 whitespace-nowrap rounded-lg px-5 py-2.5 text-[17px] font-medium text-white bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] shadow-sm transition-all duration-200 ease-out hover:shadow-md hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(215,70%,56%)]/40 cursor-pointer s-y_bCXRrkrYfP" 
          onclick={(e) => smoothScroll(e as MouseEvent, '#contact')}
        > 
          <MailIcon class="w-4 h-4 text-white" aria-hidden="true" />
          <span class="text-white">{$t('hero.cta_hire')}</span>
          <ChevronRight class="w-4 h-4 text-white" aria-hidden="true" />
        </a> 
      </div>

      <div class="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-white/10 backdrop-blur shadow-lg md:shadow-xl ring-1 ring-white/10">
        {#each slides[currentShowcaseType] as s, i}
          <div
            class={`absolute inset-0 transition-[transform,opacity] duration-500 ${
              i === currentSlideIndex ? 'translate-x-0 opacity-100 z-[1]' : 'translate-x-[110%] opacity-0 pointer-events-none'
            }`}
            aria-hidden={i !== currentSlideIndex}
          >
            <img
              src={s.src}
              alt={$t(`slides.${currentShowcaseType}.${i}.alt`)}
              loading={i === currentSlideIndex ? 'eager' : 'lazy'}
              decoding="async"
              sizes="(min-width: 768px) 50vw, 100vw"
              class={`absolute inset-0 w-full h-full object-cover origin-center scale-[1.3] sm:scale-[1.35] md:scale-[1.4] will-change-transform [backface-visibility:hidden] ${
                s.src.endsWith('Stalker-one.png') ? 'translate-y-[-2%]' : ''
              }`}
              style={`object-position: ${'50% 50%'}`}
            />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 text-white">
              <h3 class="text-lg font-semibold mb-1">{$t(`slides.${currentShowcaseType}.${i}.title`)}</h3>
              <p class="text-white/80 text-[17px]">{$t(`slides.${currentShowcaseType}.${i}.subtitle`)}</p>
            </div>
          </div>
        {/each}

        <div class="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2 z-[5]">
          {#each slides[currentShowcaseType] as _, i}
            <button
              type="button"
              class={`h-2 rounded-full transition-all transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:bg-[var(--accent)] focus-visible:text-white focus-visible:w-6 cursor-pointer ${
                i === currentSlideIndex ? 'w-6 bg-[var(--accent)] text-white' : 'w-2 bg-white/50'
              }`}
            onclick={() => setSlide(i)}
            aria-label={$t('aria.go_to_slide') + ' ' + (i + 1)}
            aria-pressed={i === currentSlideIndex}
            ></button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-12 md:py-16 bg-[linear-gradient(180deg,var(--background)_0%,var(--muted)_100%)]">
  <div class="max-w-[1400px] mx-auto px-6 md:px-8">
    <h2 class="text-[30px] font-semibold text-slate-900 text-center mb-4">{$t('trusted.title')}</h2>
    <p class="mt-0 text-slate-600 text-[17px] text-center max-w-2xl mx-auto mb-6">{$t('trusted.subtitle')}</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
      {#each companies as c, i}
        <div use:reveal={{ delay: i * 50 }} class="reveal bg-white rounded-md hover:shadow-sm transition p-3 sm:p-4 text-center">
          <div class="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center font-bold text-white text-sm sm:text-base bg-gradient-to-br from-slate-800 to-slate-600">
            {c.abbr}
          </div>
          <p class="font-medium text-slate-500 text-[17px]">{c.name}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="services" class="py-20">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <h2 class="text-[30px] font-semibold text-slate-900 text-center mb-4">{$t('services.title')}</h2>
    <p class="mt-0.5 text-slate-600 text-[17px] text-center max-w-3xl mx-auto mb-8">{$t('services.subtitle')}</p>
      <div class="flex flex-nowrap justify-center max-[1120px]:flex-wrap gap-6 md:gap-8 max-[1120px]:justify-center">
      {#each servicesSvg as s, i} 
        {@const IconComp = s.icon} 
        <div class="group w-[280px] h-[380px] box-border shrink-0">
           <div use:reveal={{ delay: i * 80 }} class="reveal bg-white rounded-md p-5 pb-10 w-full h-full transform-gpu will-change-transform transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-xl border border-transparent group-hover:border-slate-200"> 
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] flex items-center justify-center mb-5 transform-gpu transition-all duration-200 ease-out group-hover:ring-4 ring-[hsl(215,70%,46%)]/30">
            <IconComp
              class="w-6 h-6 text-white transition-[width,height] duration-200 ease-out group-hover:w-7 group-hover:h-7"
              absoluteStrokeWidth
              style="shape-rendering:geometricPrecision; vector-effect: non-scaling-stroke"
              aria-hidden="true"
            />
          </div>
          <h3 class="text-lg font-semibold text-slate-900 mb-1.5">{$t(`services.cards.${serviceKeys[i]}.title`)}</h3>
          <p class="text-slate-600 text-[17px] mb-3 line-clamp-3">{$t(`services.cards.${serviceKeys[i]}.desc`)}</p>
          <ul class="space-y-1.5 mb-6">
             {#each [0,1,2,3] as fi}
               <li class="flex items-center text-xs md:text-sm text-slate-500">
                 <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-3"></span>
                 {$t(`services.cards.${serviceKeys[i]}.features.${fi}`)}
               </li>
             {/each}
           </ul>
          </div> 
        </div> 
      {/each} 
    </div>
  </div>
</section>

<section class="py-8 md:py-12 bg-[var(--muted)]">
  <div class="max-w-6xl mx-auto px-6 md:px-8">
    <div use:reveal={{ delay: 60, variant: 'scale', scaleFrom: 0.98 }} class="reveal">
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:divide-x sm:divide-slate-200 gap-4 sm:gap-0">
        <div class="text-center sm:text-left sm:px-4">
          <div class="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">100+</div>
          <div class="mt-0.5 text-slate-600 text-[17px]">{$t('cta.stats.projects')}</div>
        </div>
        <div class="text-center sm:text-left sm:px-4">
          <div class="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">100%</div>
          <div class="mt-0.5 text-slate-600 text-[17px]">{$t('cta.stats.satisfaction')}</div>
        </div>
        <div class="text-center sm:text-left sm:px-4">
          <div class="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">24/7</div>
          <div class="mt-0.5 text-slate-600 text-[17px]">{$t('cta.stats.support')}</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="why-us" class="py-20 bg-[linear-gradient(180deg,var(--background)_0%,var(--muted)_100%)]">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <h2 class="text-[30px] font-semibold text-slate-900 text-center mb-4">{$t('why.title')}</h2>
    <p class="mt-0.5 text-slate-600 text-[17px] text-center max-w-3xl mx-auto mb-16">{$t('why.subtitle')}</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
      {#each benefitsSvg.slice(0, 4) as b, i}
        {@const BIcon = b.icon}
        <div class="group w-full">
          <div use:reveal={{ delay: i * 90 }} class="reveal bg-white rounded-md p-5 pb-6 overflow-hidden w-full h-full transform-gpu will-change-transform transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-xl border border-transparent group-hover:border-slate-200">
          <div class="flex items-start gap-3.5">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center flex-shrink-0 transform-gpu transition-all duration-200 ease-out group-hover:ring-4 ring-[hsl(220,50%,32%)]/30">
              <BIcon
                 class="w-6 h-6 text-white transition-[width,height] duration-200 ease-out group-hover:w-7 group-hover:h-7"
                 absoluteStrokeWidth
                 style="shape-rendering:geometricPrecision; vector-effect: non-scaling-stroke"
                 aria-hidden="true"
               />
            </div>
            <div>
              <h3 class="text-base font-semibold text-slate-900 mb-1">{$t(`why.items.${i}.title`)}</h3>
              <p class="text-slate-600 text-[17px]">{$t(`why.items.${i}.text`)}</p>
            </div>
          </div>
          </div>
        </div>
      {/each}

      <div class="group md:col-span-2 w-full max-w-[640px] mx-auto">
          <div use:reveal={{ delay: 140 }} class="reveal bg-white rounded-md p-5 pb-6 overflow-hidden w-full h-full transform-gpu will-change-transform transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-xl border border-transparent group-hover:border-slate-200">
            {#if benefitsSvg[4]}
              {@const LastIcon = benefitsSvg[4].icon}
            <div class="flex items-start gap-3.5">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center flex-shrink-0 transform-gpu transition-all duration-300 ease-out group-hover:ring-4 ring-[hsl(220,50%,32%)]/30">
                <LastIcon
                  class="w-6 h-6 text-white transition-[width,height] duration-200 ease-out group-hover:w-7 group-hover:h-7"
                  absoluteStrokeWidth
                  style="shape-rendering:geometricPrecision; vector-effect: non-scaling-stroke"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 class="text-base font-semibold text-slate-900 mb-1">{$t('why.items.4.title')}</h3>
                <p class="text-slate-600 text-[17px]">{$t('why.items.4.text')}</p>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-20">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <h2 class="text-[30px] font-semibold text-slate-900 text-center mb-4">{$t('showcase.title')}</h2>
    <p class="mt-0.5 text-slate-600 text-[17px] text-center max-w-3xl mx-auto mb-16">{$t('showcase.subtitle')}</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div use:reveal={{ delay: 60, variant: 'up' }} class="reveal group relative rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/70 shadow-sm overflow-hidden transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-2xl hover:border-slate-300">
        <div class="relative overflow-hidden h-[clamp(160px,35vw,280px)] md:h-[clamp(220px,30vw,340px)]">
          <img
            src={showcaseMedia[selectedCardIndex].src}
            alt={selectedCardIndex < 3 ? $t(`showcase.cards.${selectedCardIndex}.title`) : 'Custom Project'}
            class="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <span class="absolute top-4 right-4 bg-[var(--accent)] text-white text-xs font-semibold px-3 py-1 rounded-full">{selectedCardIndex < 3 ? $t(`showcase.cards.${selectedCardIndex}.tag`) : 'Custom'}</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-slate-900 mb-2">{selectedCardIndex < 3 ? $t(`showcase.cards.${selectedCardIndex}.title`) : 'Custom Project'}</h3>
          <p class="text-slate-600 text-[17px] mb-4">{selectedCardIndex < 3 ? $t(`showcase.cards.${selectedCardIndex}.desc`) : 'Your fourth showcase description goes here.'}</p>
          <div class="mb-4">
            <h4 class="font-semibold text-slate-900 mb-2">Key Results</h4>
            <ul class="space-y-2">
              <li class="flex items-center text-[17px] text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-3"></span> 340% conversion increase</li>
              <li class="flex items-center text-[17px] text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-3"></span> $2M revenue boost</li>
              <li class="flex items-center text-[17px] text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-3"></span> 50% faster load times</li>
            </ul>
          </div>
          <div class="mb-6">
            <h4 class="font-semibold text-slate-900 mb-2">Technologies</h4>
            <div class="flex flex-wrap gap-2 text-xs">
              <span class="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">React</span>
              <span class="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">Node.js</span>
              <span class="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">Stripe</span>
              <span class="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">Analytics</span>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        {#each listItems as cardIdx, li}
          <div
            class={`cursor-pointer rounded-lg p-7 transition-colors duration-300 ease-out focus-visible:outline-none ${
              li === selectedListIndex
                ? 'text-white bg-gradient-to-r from-indigo-400 to-violet-400 gradient-animated hover:brightness-110 ring-2 ring-indigo-300'
                : 'bg-white text-slate-900 hover:bg-slate-50 hover:shadow-md hover:ring-1 hover:ring-slate-200'
            }`}
            role="button"
            onclick={() => selectList(li)}
            aria-pressed={li === selectedListIndex}
            tabindex="0"
            onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') selectList(li); }}
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <h3 class="font-bold">{$t(`showcase.cards.${cardIdx}.title`)}</h3>
                  <span class={`${li === selectedListIndex ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'} text-xs px-2 py-0.5 rounded-full`}>{$t(`showcase.cards.${cardIdx}.tag`)}</span>
                </div>
                <p class="text-[17px] opacity-80">{$t(`showcase.cards.${cardIdx}.desc`)}</p>
              </div>
              <ArrowRight class={`w-5 h-5 ${li === selectedListIndex ? 'text-white' : 'text-slate-500'}`} aria-hidden="true" />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<section id="testimonials" class="py-20 bg-[linear-gradient(180deg,var(--background)_0%,var(--muted)_100%)]">
  <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
    <h2 class="text-[30px] font-semibold text-slate-900 text-center mb-4">{$t('testimonials.title')}</h2>
    <p class="mt-0.5 text-center text-slate-600 text-[17px] max-w-3xl mx-auto mb-7">{$t('testimonials.subtitle')}</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {#each testimonials as t, i}
        <div use:reveal={{ delay: i * 60, variant: 'blur', blurFrom: 6 }} class="reveal relative bg-white rounded-2xl p-4 md:p-5 shadow-sm ring-1 ring-black/5">
          <Quote class="absolute top-3 right-3 w-7 h-7 opacity-30" aria-hidden="true" />
          <div class="flex items-center gap-1 text-[var(--accent)] mb-1.5">
            {#each Array(5) as _}
              <Star class="w-3.5 h-3.5" aria-hidden="true" />
            {/each}
          </div>
          <p class="italic text-xs md:text-sm leading-relaxed mb-3">"{t.text}"</p>
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center font-medium text-white">{t.initials}</div>
            <div>
              <h4 class="font-medium text-slate-900 text-xs md:text-sm">{t.author}</h4>
              <p class="text-xs text-slate-500 md:text-sm">{t.role}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="contact" class="py-20 bg-[linear-gradient(180deg,var(--background)_0%,var(--muted)_100%)]">
  <div class="max-w-6xl mx-auto px-6">
    <div use:reveal={{ delay: 80, variant: 'scale', scaleFrom: 0.98 }} class="reveal text-center">
      <div class="mx-auto max-w-4xl px-6 md:px-8">
        <h2 class="text-[30px] text-slate-900 font-semibold leading-tight tracking-tight mb-3">
          {$t('cta.title_prefix')}
          <span class="text-[var(--accent)]">{$t('cta.title_highlight')}</span>
          {$t('cta.title_suffix')}
        </h2>
        <p class="mt-0.5 text-slate-600 text-[17px] max-w-3xl mx-auto">{$t('cta.subtitle')}</p>
        <div class="flex flex-wrap gap-3 md:gap-4 justify-center mt-6">
          <button
            type="button"
            class="inline-flex items-center gap-2 whitespace-nowrap rounded-lg px-5 py-2.5 text-[17px] font-medium text-white bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] shadow-sm transition-all duration-200 ease-out hover:shadow-md hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(215,70%,56%)]/40 cursor-pointer s-y_bCXRrkrYfP" 
            data-open-contact
          >
            <MailIcon class="w-4 h-4" aria-hidden="true" /> {$t('cta.hire_us')} <ChevronRight class="w-4 h-4" aria-hidden="true" />
          </button>
          <button type="button"
            class="inline-flex items-center gap-2 whitespace-nowrap rounded-lg px-5 py-2.5 text-[17px] font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 shadow-sm transition-all duration-200 ease-out hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 cursor-pointer"
            onclick={() => (showSchedule = true)}>
            <CalendarIcon class="w-4 h-4" aria-hidden="true" /> {$t('cta.schedule_call')}
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<ScheduleCallModal bind:open={showSchedule} on:submit={(e: CustomEvent<any>) => {
  console.log('schedule submitted', e.detail);
}} />

<style>
  .gradient-animated {
    background-size: 200% 200%;
    animation: gradient-pan 6s ease-in-out infinite;
  }
  @keyframes gradient-pan {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>