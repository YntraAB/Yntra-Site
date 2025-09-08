import { browser } from '$app/environment';
import { init, register, locale as localeStore, t as tStore, waitLocale as waitLocaleFn } from 'svelte-i18n';

// Register locales (dynamic imports)
register('sv', () => import('./locales/sv.json'));
register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));
register('de', () => import('./locales/de.json'));
register('fr', () => import('./locales/fr.json'));

let initialized = false;

export function setupI18n() {
  if (initialized) return;
  initialized = true;

  const saved = browser ? localStorage.getItem('lang') : null;
  const supported = new Set(['sv','en','es','de','fr']);
  const normalized = saved && supported.has(saved) ? saved : 'sv';

  init({ fallbackLocale: 'en', initialLocale: normalized });

  // ensure client picks saved locale after hydration
  if (browser && saved && supported.has(saved)) {
    localeStore.set(saved);
  }
}

export const locale = localeStore;
export const t = tStore;
export const waitLocale = waitLocaleFn;

// Initialize immediately on module load so SSR has a locale before any $t usage
setupI18n();
