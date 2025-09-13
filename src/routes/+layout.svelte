<script lang="ts">
  import '../app.css';
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
  import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
  import ContactModal from '$lib/components/ContactModal.svelte';
  import { env as publicEnv } from '$env/dynamic/public';

  let { children } = $props();

  setupI18n();

  const navLinks = [
    { key: 'nav.services', href: '/#services' },
    { key: 'nav.why', href: '/#why-us' },
    { key: 'nav.testimonials', href: '/#testimonials' },
    { key: 'nav.contact', href: '/#contact' },
    { key: 'nav.helpcenter', href: '/help-center' }
  ];

  let mobileOpen = $state(false);
  let currentLocale = $state('sv');
  let globalContactOpen = $state(false);
  const SITE_URL = publicEnv.PUBLIC_SITE_URL || 'https://yntra.se';
  const META_TITLE = $derived(() => {
    const s = $t('meta.title') as unknown as string;
    if (!s || /\uFFFD/.test(s)) return 'Yntra – Design & Development Studio';
    return s;
  });
  const META_DESC = $derived(() => {
    const s = $t('meta.description') as unknown as string;
    if (!s || /\uFFFD/.test(s)) return 'We design and build high-performing websites, apps, and digital systems that help businesses scale faster and work smarter.';
    return s;
  });

  $effect(() => {
    const unsub = i18nLocale.subscribe((v) => (currentLocale = v ?? 'sv'));
    return () => unsub();
  });

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

  function onNavClick(e: MouseEvent, href: string) {
    if (!href.includes('#')) return;
    const selector = href.startsWith('/#') ? href.slice(1) : href;
    if (typeof window === 'undefined') return;
    if (window.location.pathname === '/') {
      smoothScroll(e, selector);
      return;
    }
    e.preventDefault();
    try { sessionStorage.setItem('scroll_target', selector); } catch {}
    goto('/', { noScroll: false });
  }

  function releaseMediaIn(el: HTMLElement | null) {
    if (!el) return;
    const vids = Array.from(el.querySelectorAll('video')) as HTMLVideoElement[];
    for (const v of vids) {
      try {
        v.pause();
        v.removeAttribute('src');
        Array.from(v.querySelectorAll('source')).forEach((s) => s.removeAttribute('src'));
        v.load();
      } catch {}
    }
    const auds = Array.from(el.querySelectorAll('audio')) as HTMLAudioElement[];
    for (const a of auds) {
      try {
        a.pause();
        a.removeAttribute('src');
        Array.from(a.querySelectorAll('source')).forEach((s) => s.removeAttribute('src'));
        a.load();
      } catch {}
    }
  }

  async function handleContactSubmit(e: CustomEvent<FormData>) {
    try {
      const fd = e.detail;
      const payload = {
        company: (fd.get('company') as string) || '',
        tel: (fd.get('tel') as string) || '',
        email: (fd.get('email') as string) || '',
        message: (fd.get('message') as string) || ''
      };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed to send');
      const j = await res.json().catch(() => ({}));
      if (!j?.ok) throw new Error(j?.error || 'Failed');
      alert('Tack! Vi har mottagit ditt meddelande.');
    } catch (err) {
      console.error(err);
      alert('Kunde inte skicka meddelandet. Försök igen eller maila contact@yntra.se.');
    }
  }

  if (typeof window !== 'undefined') {
    const BEFORE_GUARD_KEY = '__yntra_before_nav_unsub__';
    try { (window as any)[BEFORE_GUARD_KEY]?.(); } catch {}
    (window as any)[BEFORE_GUARD_KEY] = beforeNavigate(() => {
      const content = document.getElementById('content');
      releaseMediaIn(content);
    });
  }

  if (typeof window !== 'undefined') {
    const UNLOAD_GUARD_KEY = '__yntra_unload_cleanup__';
    try { (window as any)[UNLOAD_GUARD_KEY]?.(); } catch {}
    const unloadHandler = () => {
      try {
        const content = document.getElementById('content');
        releaseMediaIn(content as HTMLElement | null);
        if (!content) releaseMediaIn(document.body as unknown as HTMLElement);
      } catch {}
    };
    window.addEventListener('beforeunload', unloadHandler);
    window.addEventListener('pagehide', unloadHandler);
    (window as any)[UNLOAD_GUARD_KEY] = () => {
      try {
        window.removeEventListener('beforeunload', unloadHandler);
        window.removeEventListener('pagehide', unloadHandler);
      } catch {}
    };
  }

  let removeAfterNavigate: (() => void) | undefined;
  if (typeof window !== 'undefined') {
    const NAV_GUARD_KEY = '__yntra_after_nav_unsub__';
    try { (window as any)[NAV_GUARD_KEY]?.(); } catch {}
    removeAfterNavigate = (afterNavigate(({ to }) => {
      let target: string | null = null;
      try { target = sessionStorage.getItem('scroll_target'); } catch {}
      if (target) {
        try { sessionStorage.removeItem('scroll_target'); } catch {}
        window.scrollTo({ top: 0, behavior: 'auto' });
        requestAnimationFrame(() => {
          const el = document.querySelector(target!);
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          try {
            const url = new URL(window.location.href);
            url.hash = target!;
            history.replaceState(history.state, '', url);
          } catch {}
        });
        return;
      }
      if (to?.url.hash) {
        const el = document.querySelector(to.url.hash);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }) as unknown as (() => void) | undefined);
    (window as any)[NAV_GUARD_KEY] = removeAfterNavigate;
  }

  $effect(() => () => {
    try { removeAfterNavigate?.(); } catch {}
  });

  if (typeof document !== 'undefined') {
    const CLICK_GUARD_KEY = '__yntra_open_contact_handler__';
    const prev = (window as any)[CLICK_GUARD_KEY] as ((e: MouseEvent) => void) | undefined;
    if (prev) {
      try { document.removeEventListener('click', prev); } catch {}
    }
    const handler = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const el = t?.closest('[data-open-contact]') as HTMLElement | null;
      if (el) {
        e.preventDefault();
        globalContactOpen = true;
      }
    };
    (window as any)[CLICK_GUARD_KEY] = handler;
    document.addEventListener('click', handler);
    $effect(() => () => {
      try { document.removeEventListener('click', handler); } catch {}
      if ((window as any)[CLICK_GUARD_KEY] === handler) {
        (window as any)[CLICK_GUARD_KEY] = undefined;
      }
    });
  }
</script>

<svelte:head>
  <link rel="icon" type="image/png" href="/images/YntraBLACK_LOGO.png" />
  <link rel="apple-touch-icon" href="/images/YntraBLACK_LOGO.png" />

  <title>{META_TITLE()}</title>
  <meta name="description" content={META_DESC()} />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#0f172a" />

  {#if typeof window === 'undefined'}
    <link rel="canonical" href={`${SITE_URL}/`} />
  {:else}
    {@const _canon = `${SITE_URL}${location.pathname}${location.search}`}
    <link rel="canonical" href={_canon} />
  {/if}

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Yntra" />
  <meta property="og:title" content={META_TITLE()} />
  <meta property="og:description" content={META_DESC()} />
  {#if typeof window === 'undefined'}
    <meta property="og:url" content={`${SITE_URL}/`} />
  {:else}
    <meta property="og:url" content={`${SITE_URL}${location.pathname}${location.search}`} />
  {/if}
  <meta property="og:image" content={`${SITE_URL}/images/YntraBLACK_LOGO.png`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@yntraAB" />
  <meta name="twitter:title" content={META_TITLE()} />
  <meta name="twitter:description" content={META_DESC()} />
  <meta name="twitter:image" content={`${SITE_URL}/images/YntraBLACK_LOGO.png`} />

  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Yntra',
      url: SITE_URL,
      logo: `${SITE_URL}/images/YntraBLACK_LOGO.png`,
      sameAs: [
        'https://x.com/yntraAB',
        'https://github.com/yntraAB',
        'https://linkedin.com/company/yntraAB'
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'info@yntra.se',
          telephone: '+46 76 102 33 00',
          areaServed: 'SE'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'SE',
        addressRegion: 'Gävleborg',
        addressLocality: 'Delsbo',
        postalCode: '824 71',
        streetAddress: 'Edevägen 5'
      }
    })}
  </script>
</svelte:head>

<header class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/60">
  <div class="max-w-7xl mx-auto px-6 md:px-8 h-16 grid grid-cols-3 items-center">
    <a href="/" class="flex items-center text-slate-900 font-semibold tracking-tight justify-self-start">
      <img src="/images/YntraBLACK_LOGO.png" alt={$t('brand.logo_alt')} class="h-6 w-auto" style="height:24px;width:auto" />
    </a>

    <nav class="hidden md:flex items-center gap-6 text-sm justify-self-center" aria-label="Primary">
      {#each navLinks as l}
        <a
          href={l.href}
          class="text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
          onclick={(e) => onNavClick(e, l.href)}
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
            onclick={(e) => { onNavClick(e, l.href); mobileOpen = false; }}
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

<ContactModal bind:open={globalContactOpen} on:close={() => (globalContactOpen = false)} on:submit={handleContactSubmit} />

<footer class="relative border-t border-slate-300 bg-white text-slate-700">
  <div class="relative max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-8 md:pt-16 md:pb-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
      <div class="lg:col-span-5">
        <div class="flex items-center mb-4">
          <img src="/images/YntraBLACK_LOGO.png" alt={$t('brand.logo_alt')} class="h-6 w-auto" style="height:24px;width:auto" />
        </div>
        <p class="text-slate-600 max-w-md leading-relaxed text-[17px]">{$t('meta.description')}</p>
        <div class="mt-6 flex items-center gap-2">
          <a href="https://x.com/yntraAB" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" class="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:ring-slate-300 transition-transform duration-200 hover:-translate-y-0.5">
            <Twitter class="h-5 w-5" aria-hidden="true" />
          </a>
          <a href="https://github.com/yntraAB" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:ring-slate-300 transition-transform duration-200 hover:-translate-y-0.5">
            <Github class="h-5 w-5" aria-hidden="true" />
          </a>
          <a href="https://linkedin.com/company/yntraAB" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:ring-slate-300 transition-transform duration-200 hover:-translate-y-0.5">
            <Linkedin class="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <h4 class="text-[11px] font-semibold uppercase tracking-wider text-slate-900/80">{$t('footer.sections.services')}</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/design" class="hover:text-slate-900 hover:underline underline-offset-4 decoration-slate-300 transition-colors">{$t('footer.service_links.0')}</a></li>
            <li><a href="/system" class="hover:text-slate-900 hover:underline underline-offset-4 decoration-slate-300 transition-colors">{$t('footer.service_links.1')}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-[11px] font-semibold uppercase tracking-wider text-slate-900/80">{$t('footer.sections.company')}</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/about" class="hover:text-slate-900 hover:underline underline-offset-4 decoration-slate-300 transition-colors">{$t('footer.company_links.0')}</a></li>
            <li><a href="/process" class="hover:text-slate-900 hover:underline underline-offset-4 decoration-slate-300 transition-colors">{$t('footer.company_links.1')}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-[11px] font-semibold uppercase tracking-wider text-slate-900/80">{$t('footer.sections.resources')}</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/help-center" class="hover:text-slate-900 hover:underline underline-offset-4 decoration-slate-300 transition-colors">{$t('footer.resource_links.0')}</a></li>
            <li><a href="/privacy-policy" class="hover:text-slate-900 hover:underline underline-offset-4 decoration-slate-300 transition-colors">{$t('footer.resource_links.1')}</a></li>
            <li><a href="/terms-of-service" class="hover:text-slate-900 hover:underline underline-offset-4 decoration-slate-300 transition-colors">{$t('footer.resource_links.2')}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-[11px] font-semibold uppercase tracking-wider text-slate-900/80">{$t('footer.sections.contact')}</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a href="mailto:info@yntra.se" class="inline-flex items-center gap-2 hover:text-slate-900 transition-colors">
                <Mail class="h-4 w-4" aria-hidden="true" /> info@yntra.se
              </a>
            </li>
            <li>
              <a href="tel:+46761023300" class="inline-flex items-center gap-2 hover:text-slate-900 transition-colors">
                <Phone class="h-4 w-4" aria-hidden="true" /> +46 76 102 33 00
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
      </div>
    </div>

    <div class="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p class="text-xs text-slate-500/90">{$t('footer.copyright')}</p>
      <div class="text-xs text-slate-500/90">{$t('footer.built_with')}</div>
    </div>
  </div>
</footer>
