<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import Menu from 'lucide-svelte/icons/menu';
  import XIcon from 'lucide-svelte/icons/x';
  import Twitter from 'lucide-svelte/icons/twitter';
  import Github from 'lucide-svelte/icons/github';
  import Linkedin from 'lucide-svelte/icons/linkedin';
  import Mail from 'lucide-svelte/icons/mail';
  import Phone from 'lucide-svelte/icons/phone';
  import MapPin from 'lucide-svelte/icons/map-pin';
  import { setupI18n, t, locale as i18nLocale } from '$lib/i18n';
  import LanguageSelector from '$lib/components/LanguageSelector.svelte';

  let { children } = $props();

  setupI18n();

  const navLinks = [
    { key: 'nav.services', href: '#services' },
    { key: 'nav.why', href: '#why-us' },
    { key: 'nav.testimonials', href: '#testimonials' },
    { key: 'nav.contact', href: '#contact' }
  ];

  let mobileOpen = $state(false);
  let currentLocale = $state('sv');

  $effect(() => {
    const unsub = i18nLocale.subscribe((v) => (currentLocale = v ?? 'sv'));
    return () => unsub();
  });

  // Keep <html lang="..."> in sync for better hyphenation/accessibility
  $effect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', currentLocale || 'sv');
    }
  });

  function changeLang(e: Event) {
    const value = (e.target as HTMLSelectElement).value;
    i18nLocale.set(value);
    try { localStorage.setItem('lang', value); } catch {}
  }

  function smoothScroll(e: MouseEvent, selector: string) {
    e.preventDefault();
    const el = document.querySelector(selector);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Yntra — Design & Development Studio</title>
  <meta name="description" content="We design and build high-performing websites, apps, and digital systems that help businesses scale faster and work smarter." />
</svelte:head>

<!-- Site Header -->
<header class="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/60">
  <div class="max-w-7xl mx-auto px-6 md:px-8 h-16 grid grid-cols-3 items-center">
    <a href="/" class="flex items-center gap-2 text-slate-900 font-semibold tracking-tight justify-self-start">
      <img src={favicon} alt={$t('brand.logo_alt')} class="h-6 w-6" />
      <span>{$t('brand.name')}</span>
    </a>

    <nav class="hidden md:flex items-center gap-6 text-sm justify-self-center" aria-label="Primary">
      {#each navLinks as l}
        <a
          href={l.href}
          class="text-slate-600 hover:text-slate-900 transition-colors"
          onclick={(e) => smoothScroll(e, l.href)}
        >{$t(l.key)}</a>
      {/each}
    </nav>

    <div class="hidden md:flex justify-self-end items-center gap-3">
      <LanguageSelector variant="desktop" />
    </div>

    <div class="md:hidden justify-self-end flex items-center gap-2">
      <button
        type="button"
        class="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
        aria-label={$t('aria.toggle_menu')}
        aria-expanded={mobileOpen}
        onclick={() => (mobileOpen = !mobileOpen)}
      >
        {#if mobileOpen}
          <XIcon class="h-5 w-5" aria-hidden="true" />
        {:else}
          <Menu class="h-5 w-5" aria-hidden="true" />
        {/if}
      </button>
    </div>
  </div>

  {#if mobileOpen}
    <div class="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
      <nav class="max-w-7xl mx-auto px-6 md:px-8 py-4 grid gap-2" aria-label="Mobile">
        {#each navLinks as l}
          <a
            href={l.href}
            class="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
            onclick={(e) => { smoothScroll(e, l.href); mobileOpen = false; }}
          >{$t(l.key)}</a>
        {/each}
        <div class="mt-2">
          <LanguageSelector variant="mobile" />
        </div>
      </nav>
    </div>
  {/if}
</header>

<main id="content">{@render children?.()}</main>

<!-- Site Footer -->
<footer class="mt-24 border-t bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-8 py-14">
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-10">
      <!-- Brand + Tagline + Social -->
      <div class="lg:col-span-2">
        <div class="flex items-center gap-2 mb-4">
          <img src={favicon} alt={$t('brand.logo_alt')} class="h-6 w-6" />
          <span class="font-semibold text-slate-900">{$t('brand.name')}</span>
        </div>
        <p class="text-slate-600 max-w-md">{$t('meta.description')}</p>
        <div class="mt-6 flex items-center gap-3">
          <a href="https://x.com/yntra" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50">
            <Twitter class="h-5 w-5" aria-hidden="true" />
          </a>
          <a href="https://github.com/yntra" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50">
            <Github class="h-5 w-5" aria-hidden="true" />
          </a>
          <a href="https://linkedin.com/company/yntra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50">
            <Linkedin class="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <!-- Services -->
      <div>
        <h4 class="text-sm font-semibold text-slate-900 tracking-wide">{$t('footer.sections.services')}</h4>
        <ul class="mt-3 space-y-2 text-sm text-slate-600">
          <li><a href="#services" class="hover:text-slate-900" onclick={(e) => smoothScroll(e, '#services')}>{$t('footer.service_links.0')}</a></li>
          <li><a href="#services" class="hover:text-slate-900" onclick={(e) => smoothScroll(e, '#services')}>{$t('footer.service_links.1')}</a></li>
          <li><a href="#services" class="hover:text-slate-900" onclick={(e) => smoothScroll(e, '#services')}>{$t('footer.service_links.2')}</a></li>
          <li><a href="#services" class="hover:text-slate-900" onclick={(e) => smoothScroll(e, '#services')}>{$t('footer.service_links.3')}</a></li>
          <li><a href="#services" class="hover:text-slate-900" onclick={(e) => smoothScroll(e, '#services')}>{$t('footer.service_links.4')}</a></li>
          <li><a href="#services" class="hover:text-slate-900" onclick={(e) => smoothScroll(e, '#services')}>{$t('footer.service_links.5')}</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h4 class="text-sm font-semibold text-slate-900 tracking-wide">{$t('footer.sections.company')}</h4>
        <ul class="mt-3 space-y-2 text-sm text-slate-600">
          <li><a href="/" class="hover:text-slate-900">{$t('footer.company_links.0')}</a></li>
          <li><a href="/" class="hover:text-slate-900">{$t('footer.company_links.1')}</a></li>
          <li><a href="/" class="hover:text-slate-900">{$t('footer.company_links.2')}</a></li>
          <li><a href="/" class="hover:text-slate-900">{$t('footer.company_links.3')}</a></li>
          <li><a href="/" class="hover:text-slate-900">{$t('footer.company_links.4')}</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-sm font-semibold text-slate-900 tracking-wide">{$t('footer.sections.contact')}</h4>
        <ul class="mt-3 space-y-2 text-sm text-slate-600">
          <li>
            <a href="mailto:info@yntra.com" class="inline-flex items-center gap-2 hover:text-slate-900">
              <Mail class="h-4 w-4" aria-hidden="true" /> info@yntra.com
            </a>
          </li>
          <li>
            <a href="tel:+15551234567" class="inline-flex items-center gap-2 hover:text-slate-900">
              <Phone class="h-4 w-4" aria-hidden="true" /> +1 (555) 123-4567
            </a>
          </li>
          <li>
            <div class="inline-flex items-start gap-2">
              <MapPin class="h-4 w-4 mt-0.5" aria-hidden="true" />
              <address class="not-italic text-slate-600">
                {$t('footer.address.line1')}<br />
                {$t('footer.address.line2')}
              </address>
            </div>
          </li>
        </ul>
      </div>

      <!-- Resources -->
      <div>
        <h4 class="text-sm font-semibold text-slate-900 tracking-wide">{$t('footer.sections.resources')}</h4>
        <ul class="mt-3 space-y-2 text-sm text-slate-600">
          <li><a href="/" class="hover:text-slate-900">{$t('footer.resource_links.0')}</a></li>
          <li><a href="/" class="hover:text-slate-900">{$t('footer.resource_links.1')}</a></li>
          <li><a href="/privacy-policy" class="hover:text-slate-900">{$t('footer.resource_links.2')}</a></li>
          <li><a href="/terms-of-service" class="hover:text-slate-900">{$t('footer.resource_links.3')}</a></li>
        </ul>
      </div>
    </div>

    <div class="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-200 pt-6">
      <p class="text-sm text-slate-500">{$t('footer.copyright')}</p>
      <div class="text-xs text-slate-500">{$t('footer.built_with')}</div>
    </div>
  </div>
</footer>
