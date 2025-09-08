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
  import LinkIcon from 'lucide-svelte/icons/link';
  import Star from 'lucide-svelte/icons/star';
  import Quote from 'lucide-svelte/icons/quote';
  import { reveal } from '$lib/actions/reveal';
  import { t, locale as i18nLocale } from '$lib/i18n';
  const serviceKeys = ['websites','systems','uiux','support'] as const;
  import { fitLines } from '$lib/actions/fitLines';
  

  type ShowcaseType = 'website' | 'system';

  // State (Svelte 5 runes)
  let currentShowcaseType = $state<ShowcaseType>('website');
  let currentSlideIndex = $state(0);

  // Carousel data
  const slides: Record<ShowcaseType, { title: string; subtitle: string; src: string; alt: string }[]> = {
    website: [
      {
        title: 'Modern E-commerce Platform',
        subtitle: 'High-converting online store',
        src:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' font-family='Arial' font-size='18'%3EModern E-commerce Platform%3C/text%3E%3C/svg%3E",
        alt: 'Modern E-commerce Platform'
      },
      {
        title: 'Corporate Website',
        subtitle: 'Professional business presence',
        src:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e0e0e0'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' font-family='Arial' font-size='18'%3ECorporate Website%3C/text%3E%3C/svg%3E",
        alt: 'Corporate Website'
      }
    ],
    system: [
      {
        title: 'Analytics Dashboard',
        subtitle: 'Data-driven business insights',
        src:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23d0d0d0'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' font-family='Arial' font-size='18'%3EAnalytics Dashboard%3C/text%3E%3C/svg%3E",
        alt: 'Analytics Dashboard'
      },
      {
        title: 'Project Management System',
        subtitle: 'Streamlined team collaboration',
        src:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23c0c0c0'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' font-family='Arial' font-size='18'%3EProject Management System%3C/text%3E%3C/svg%3E",
        alt: 'Project Management System'
      }
    ]
  };

  // Actions
  function toggleShowcase(type: ShowcaseType) {
    currentShowcaseType = type;
    currentSlideIndex = 0;
  }

  function setSlide(index: number) {
    currentSlideIndex = index;
  }

  function smoothScroll(e: MouseEvent, selector: string) {
    e.preventDefault();
    const el = document.querySelector(selector);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Auto-advance carousel
  let interval: ReturnType<typeof setInterval> | null = null;
  onMount(() => {
    interval = setInterval(() => {
      const len = slides[currentShowcaseType].length;
      currentSlideIndex = (currentSlideIndex + 1) % len;
    }, 5000);
  });
  onDestroy(() => interval && clearInterval(interval));

  // Data sets for sections
  const companies = [
    { abbr: 'TC', name: 'TechCorp' },
    { abbr: 'IL', name: 'InnovateLab' },
    { abbr: 'GS', name: 'GlobalSoft' },
    { abbr: 'NG', name: 'NextGen' },
    { abbr: 'PS', name: 'ProSystems' },
    { abbr: 'DF', name: 'DigitalFirst' }
  ];

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
  <title>Yntra — Design & Development Studio</title>
  <meta
    name="description"
    content="Design and build high-performing websites, apps, and digital systems. We help businesses scale faster, look better, and work smarter."
  />
  <meta name="author" content="Yntra" />
  <meta
    name="keywords"
    content="hire developers, top designers, web development, app development, digital agency, custom software"
  />

  <meta property="og:title" content="Yntra — Design & Development Studio" />
  <meta
    property="og:description"
    content="We design and build high-performing websites, apps, and digital systems that help businesses scale faster, look better, and work smarter."
  />
  <meta property="og:type" content="website" />
</svelte:head>


<!-- Hero Section -->
<section id="home" class="relative isolate min-h-screen flex items-center text-white overflow-hidden">
  <!-- Overscan moving gradient as a child layer (no ::before) -->
  <div class="absolute inset-[-35%] z-0 pointer-events-none bg-[linear-gradient(135deg,var(--primary)_0%,hsl(222,18%,22%)_38%,hsl(222,22%,12%)_68%,var(--primary)_100%)] bg-no-repeat [background-size:260%_260%] [will-change:background-position] animate-[diagonal-pan_48s_cubic-bezier(0.22,1,0.36,1)_infinite] motion-reduce:animate-none"></div>
  <div class="absolute inset-0 z-[1] pointer-events-none [background:linear-gradient(45deg,rgba(0,0,0,.08)_0%,transparent_50%,rgba(0,0,0,.08)_100%)]"></div>
  
  <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-16">
      <!-- Left -->
      <div>
        <div class="inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-xl px-2 py-1 mb-8 shadow-sm">
          <span class="text-black/60 text-sm px-2">{$t('hero.looking_for')}</span>
          <button
            type="button"
            class={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ease-out ${
              currentShowcaseType === 'website' ? 'bg-[var(--accent)] text-white' : 'text-black hover:bg-white'
            }`}
            onclick={() => toggleShowcase('website')}
            aria-pressed={currentShowcaseType === 'website'}
          >
            <Monitor class="w-[18px] h-[18px] mr-1" aria-hidden="true" /> {$t('hero.btn.website')}
          </button>
          <button
            type="button"
            class={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ease-out ${
              currentShowcaseType === 'system' ? 'bg-[var(--accent)] text-white' : 'text-black hover:bg-white'
            }`}
            onclick={() => toggleShowcase('system')}
            aria-pressed={currentShowcaseType === 'system'}
          >
            <Smartphone class="w-[18px] h-[18px] mr-1" aria-hidden="true" /> {$t('hero.btn.system')}
          </button>
        </div>

        <h1 use:fitLines={{ lines: 2, min: 18, trigger: $i18nLocale }} class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          {$t('hero.title_prefix')}
          <span class="bg-gradient-to-r from-[hsl(215,24%,70%)] to-[hsl(215,36%,58%)] bg-clip-text text-transparent"> {$t('hero.title_highlight')}</span>
        </h1>
        <p class="text-lg text-white/80 max-w-xl mb-8">{$t('hero.subtitle')}</p>

        <a 
          href="#contact" 
          class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-[var(--accent)] text-white px-10 py-2.5 text-lg shadow-sm transform transition-all duration-200 ease-out hover:scale-105 hover:shadow-md hover:brightness-110 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50" 
          onclick={(e) => smoothScroll(e as MouseEvent, '#contact')}
        > 
          {$t('hero.cta_hire')} <ArrowRight class="w-4 h-4" aria-hidden="true" /> 
        </a> 
      </div>

      <!-- Right: Carousel -->
      <div class="relative h-96 rounded-2xl overflow-hidden bg-white/10 backdrop-blur shadow-xl ring-1 ring-white/10">
        {#each slides[currentShowcaseType] as s, i}
          <div
            class={`absolute inset-0 transition-transform duration-500 ${
              i === currentSlideIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
            aria-hidden={i !== currentSlideIndex}
          >
            <img src={s.src} alt={$t(`slides.${currentShowcaseType}.${i}.alt`)} class="w-full h-full object-cover" />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h3 class="text-lg font-semibold mb-1">{$t(`slides.${currentShowcaseType}.${i}.title`)}</h3>
              <p class="text-white/80 text-sm">{$t(`slides.${currentShowcaseType}.${i}.subtitle`)}</p>
            </div>
          </div>
        {/each}

        <div class="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
          {#each slides[currentShowcaseType] as _, i}
            <button
              type="button"
              class={`h-2 rounded-full bg-white/50 transition-all ${
                i === currentSlideIndex ? 'w-6 bg-[var(--accent)]' : 'w-2'
              }`}
            onclick={() => setSlide(i)}
            aria-label={$t('aria.go_to_slide') + ' ' + (i + 1)}
            ></button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Trusted By -->
<section class="py-24 bg-[linear-gradient(180deg,var(--background)_0%,var(--muted)_100%)]">
  <div class="max-w-[1400px] mx-auto px-6 md:px-8">
    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">{$t('trusted.title')}</h2>
    <p class="text-slate-600 text-center max-w-2xl mx-auto mb-12 text-[20px]">{$t('trusted.subtitle')}</p>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
      {#each companies as c, i}
        <div use:reveal={{ delay: i * 50 }} class="reveal bg-white rounded-lg hover:shadow-md transition p-6 text-center">
          <div class="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center font-bold text-white text-lg bg-gradient-to-br from-slate-800 to-slate-600">
            {c.abbr}
          </div>
          <p class="font-semibold text-slate-500">{c.name}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Services -->
<section id="services" class="py-24">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">{$t('services.title')}</h2>
    <p class="text-slate-600 text-center max-w-3xl mx-auto mb-16 text-[20px]">{$t('services.subtitle')}</p>

    <div class="flex flex-nowrap justify-center max-[1120px]:flex-wrap gap-6 md:gap-8 max-[1120px]:justify-center">
      {#each servicesSvg as s, i} 
        {@const IconComp = s.icon} 
        <div class="group w-[314px] h-[420px] box-border shrink-0">
          <div use:reveal={{ delay: i * 80 }} class="reveal bg-white rounded-lg p-7 w-full h-full transform-gpu will-change-transform transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-2xl border border-transparent group-hover:border-slate-200"> 
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] flex items-center justify-center mb-6 transform-gpu transition-all duration-200 ease-out group-hover:ring-4 ring-[hsl(215,70%,46%)]/30">
            <IconComp
              class="w-7 h-7 text-white transition-[width,height] duration-200 ease-out group-hover:w-8 group-hover:h-8"
              absoluteStrokeWidth
              style="shape-rendering:geometricPrecision; vector-effect: non-scaling-stroke"
              aria-hidden="true"
            />
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">{$t(`services.cards.${serviceKeys[i]}.title`)}</h3>
          <p class="text-slate-600 mb-4">{$t(`services.cards.${serviceKeys[i]}.desc`)}</p>
          <ul class="space-y-2">
            {#each [0,1,2,3] as fi}
              <li class="flex items-center text-sm text-slate-500">
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

<!-- Why Choose Us -->
<section id="why-us" class="py-24 bg-[linear-gradient(180deg,var(--background)_0%,var(--muted)_100%)]">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">{$t('why.title')}</h2>
    <p class="text-slate-600 text-center max-w-3xl mx-auto mb-16 text-[20px]">{$t('why.subtitle')}</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
      {#each benefitsSvg.slice(0, 4) as b, i}
        {@const BIcon = b.icon}
        <div class="group w-full">
          <div use:reveal={{ delay: i * 90 }} class="reveal bg-white rounded-lg p-7 overflow-hidden w-full h-full transform-gpu will-change-transform transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-2xl border border-transparent group-hover:border-slate-200">
          <div class="flex items-start gap-4">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center flex-shrink-0 transform-gpu transition-all duration-200 ease-out group-hover:ring-4 ring-[hsl(220,50%,32%)]/30">
              <BIcon
                class="w-7 h-7 text-white transition-[width,height] duration-200 ease-out group-hover:w-8 group-hover:h-8"
                absoluteStrokeWidth
                style="shape-rendering:geometricPrecision; vector-effect: non-scaling-stroke"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900 mb-1">{$t(`why.items.${i}.title`)}</h3>
              <p class="text-slate-600">{$t(`why.items.${i}.text`)}</p>
            </div>
          </div>
          </div>
        </div>
      {/each}

      <!-- Full width last card -->
      <div class="group md:col-span-2 w-full max-w-[640px] mx-auto">
        <div use:reveal={{ delay: 140 }} class="reveal bg-white rounded-lg p-7 overflow-hidden w-full h-full transform-gpu will-change-transform transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-2xl border border-transparent group-hover:border-slate-200">
          {#if benefitsSvg[4]}
            {@const LastIcon = benefitsSvg[4].icon}
            <div class="flex items-start gap-4">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center flex-shrink-0 transform-gpu transition-all duration-300 ease-out group-hover:ring-4 ring-[hsl(220,50%,32%)]/30">
                <LastIcon
                  class="w-7 h-7 text-white transition-[width,height] duration-200 ease-out group-hover:w-8 group-hover:h-8"
                  absoluteStrokeWidth
                  style="shape-rendering:geometricPrecision; vector-effect: non-scaling-stroke"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-1">{$t('why.items.4.title')}</h3>
                <p class="text-slate-600">{$t('why.items.4.text')}</p>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Showcase -->
<section class="py-24">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">{$t('showcase.title')}</h2>
    <p class="text-slate-600 text-center max-w-3xl mx-auto mb-16 text-[20px]">{$t('showcase.subtitle')}</p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Project card -->
        <div use:reveal={{ delay: 60, variant: 'up' }} class="reveal bg-white rounded-lg overflow-hidden transition hover:shadow-lg">
        <div class="relative h-96">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%23f0f0f0'/%3E%3Ctext x='250' y='200' text-anchor='middle' dy='.3em' font-family='Arial' font-size='20'%3EE-commerce Platform Revolution%3C/text%3E%3C/svg%3E"
            alt="E-commerce Platform Revolution"
            class="w-full h-full object-cover"
          />
          <span class="absolute top-4 right-4 bg-[var(--accent)] text-white text-xs font-semibold px-3 py-1 rounded-full">{$t('showcase.cards.1.tag')}</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-slate-900 mb-2">{$t('showcase.cards.1.title')}</h3>
          <p class="text-slate-600 mb-4">{$t('showcase.cards.1.desc')}</p>

          <div class="mb-4">
            <h4 class="font-semibold text-slate-900 mb-2">Key Results</h4>
            <ul class="space-y-2">
              <li class="flex items-center text-sm text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-3"></span> 340% conversion increase</li>
              <li class="flex items-center text-sm text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-3"></span> $2M revenue boost</li>
              <li class="flex items-center text-sm text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-3"></span> 50% faster load times</li>
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

          <button type="button" class="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 hover:bg-slate-50 transition px-4 py-3 font-semibold text-slate-800">
            View Case Study <LinkIcon class="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <!-- Project list -->
      <div class="space-y-4">
        <div use:reveal={{ delay: 120, variant: 'left' }} class="reveal cursor-pointer rounded-lg p-7 bg-gradient-to-r from-indigo-400 to-violet-400 text-white">
          <div class="flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <h3 class="font-bold">{$t('showcase.cards.1.title')}</h3>
                <span class="bg-white/20 text-xs px-2 py-0.5 rounded-full">{$t('showcase.cards.1.tag')}</span>
              </div>
              <p class="text-sm text-white/80">{$t('showcase.cards.1.desc')}</p>
            </div>
            <ArrowRight class="w-5 h-5" aria-hidden="true" />
          </div>
        </div>

        <div use:reveal={{ delay: 180, variant: 'right' }} class="reveal cursor-pointer rounded-lg p-7 bg-white transition hover:shadow-md">
          <div class="flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <h3 class="font-bold text-slate-900">{$t('showcase.cards.0.title')}</h3>
                <span class="bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded-full">{$t('showcase.cards.0.tag')}</span>
              </div>
              <p class="text-sm text-slate-600">{$t('showcase.cards.0.desc')}</p>
            </div>
            <ArrowRight class="w-5 h-5 text-slate-500" aria-hidden="true" />
          </div>
        </div>

        <div use:reveal={{ delay: 240, variant: 'left' }} class="reveal cursor-pointer rounded-lg p-7 bg-white transition hover:shadow-md">
          <div class="flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <h3 class="font-bold text-slate-900">{$t('showcase.cards.1.title')}</h3>
                <span class="bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded-full">{$t('showcase.cards.1.tag')}</span>
              </div>
              <p class="text-sm text-slate-600">{$t('showcase.cards.1.desc')}</p>
            </div>
            <ArrowRight class="w-5 h-5 text-slate-500" aria-hidden="true" />
          </div>
        </div>

        <div use:reveal={{ delay: 300, variant: 'right' }} class="reveal cursor-pointer rounded-lg p-7 bg-white transition hover:shadow-md">
          <div class="flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <h3 class="font-bold text-slate-900">{$t('showcase.cards.2.title')}</h3>
                <span class="bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded-full">{$t('showcase.cards.2.tag')}</span>
              </div>
              <p class="text-sm text-slate-600">{$t('showcase.cards.2.desc')}</p>
            </div>
            <ArrowRight class="w-5 h-5 text-slate-500" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section id="testimonials" class="relative isolate overflow-hidden py-24 text-white before:absolute before:inset-[-40%] before:z-[1] before:content-[''] before:pointer-events-none before:[mix-blend-mode:soft-light] before:bg-[radial-gradient(80%_60%_at_10%_0%,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_60%),radial-gradient(60%_50%_at_90%_100%,rgba(88,130,193,0.06)_0%,rgba(88,130,193,0)_60%)] before:bg-no-repeat before:[background-size:100%_100%] before:[will-change:transform] before:opacity-60 before:animate-[layer-float_18s_ease-in-out_infinite] after:absolute after:inset-[-10%] after:z-[2] after:content-[''] after:pointer-events-none after:bg-[linear-gradient(to_right,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0)_100%)] after:[mask-image:linear-gradient(120deg,transparent_35%,black_50%,transparent_65%)] after:[-webkit-mask-image:linear-gradient(120deg,transparent_35%,black_50%,transparent_65%)] after:[mix-blend-mode:overlay] after:opacity-30 after:animate-[sheen-sweep_6s_ease-in-out_infinite]">

  <!-- Overscan gradient layer to avoid edges while panning -->
  <div class="absolute inset-[-35%] z-0 pointer-events-none bg-[linear-gradient(135deg,var(--primary)_0%,hsl(222,18%,22%)_35%,hsl(222,22%,12%)_68%,var(--primary)_100%)] bg-no-repeat [background-size:260%_260%] [will-change:background-position] animate-[diagonal-pan_48s_cubic-bezier(0.22,1,0.36,1)_infinite] motion-reduce:animate-none"></div>
  
  <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">{$t('testimonials.title')}</h2>
    <p class="text-center text-white/80 max-w-3xl mx-auto mb-16 text-[20px]">{$t('testimonials.subtitle')}</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {#each testimonials as t, i}
        <div use:reveal={{ delay: i * 60, variant: 'blur', blurFrom: 6 }} class="reveal relative bg-white/10 backdrop-blur rounded-2xl p-6">
          <Quote class="absolute top-4 right-4 w-10 h-10 opacity-30" aria-hidden="true" />
          <div class="flex items-center gap-1 text-[var(--accent)] mb-3">
            {#each Array(5) as _}
              <Star class="w-4 h-4" aria-hidden="true" />
            {/each}
          </div>
          <p class="italic leading-relaxed mb-6">"{t.text}"</p>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center font-bold">{t.initials}</div>
            <div>
              <h4 class="font-bold text-white">{t.author}</h4>
              <p class="text-sm text-white/70">{t.role}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Final CTA -->
<section id="contact" class="py-24 bg-[var(--background)]">
  <div class="max-w-6xl mx-auto px-6">
    <div use:reveal={{ delay: 80, variant: 'scale', scaleFrom: 0.97 }} class="reveal relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 text-white bg-[linear-gradient(135deg,var(--primary)_0%,hsl(var(--cta1-h),var(--cta1-s),var(--cta1-l))_35%,hsl(var(--cta2-h),var(--cta2-s),var(--cta2-l))_65%,var(--primary)_100%)] animate-[cta-shift_60s_ease-in-out_infinite_alternate]">
      <!-- Subtle, static glows (further softened) -->
      <div class="absolute inset-0 z-[1] pointer-events-none [mix-blend-mode:soft-light] bg-[radial-gradient(60%_35%_at_20%_0%,rgba(255,255,255,0.02)_0%,transparent_60%),radial-gradient(50%_40%_at_80%_100%,rgba(88,130,193,0.05)_0%,transparent_60%)]"></div>
      
      <div class="relative z-10 text-center px-6 sm:px-10 md:px-16 py-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          {$t('cta.title_prefix')}
          <span class="bg-gradient-to-r from-[hsl(215,24%,70%)] to-[hsl(215,36%,58%)] bg-clip-text text-transparent">{$t('cta.title_highlight')}</span>
          {$t('cta.title_suffix')}
        </h2>
        <p class="text-lg text-white/80 max-w-3xl mx-auto">{$t('cta.subtitle')}</p>

        <div class="flex flex-wrap gap-4 justify-center mt-8">
          <a
          href="mailto:info@yntra.com"
          class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] shadow-sm transform transition-all duration-200 ease-out hover:scale-105 hover:shadow-md hover:brightness-110 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <MailIcon class="w-5 h-5" aria-hidden="true" /> {$t('cta.hire_us')} <ArrowRight class="w-5 h-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3 text-base font-semibold border border-white/20 bg-white/10 hover:bg-white/15 shadow-sm transform transition-all duration-200 ease-out hover:scale-105 hover:shadow-md hover:brightness-110 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <CalendarIcon class="w-5 h-5" aria-hidden="true" /> {$t('cta.schedule_call')}
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 pt-6 border-t border-white/10">
          <div class="text-center">
            <div class="text-2xl font-bold text-[var(--accent)] mb-1">100+</div>
            <div class="text-white/80">{$t('cta.stats.projects')}</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-[var(--accent)] mb-1">100%</div>
            <div class="text-white/80">{$t('cta.stats.satisfaction')}</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-[var(--accent)] mb-1">24/7</div>
            <div class="text-white/80">{$t('cta.stats.support')}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
