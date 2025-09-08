import { browser } from '$app/environment';
import { init, register, locale as localeStore, t as tStore } from 'svelte-i18n';

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
  const initial = saved || 'sv';

  init({ fallbackLocale: 'en', initialLocale: initial });

  // ensure client picks saved locale after hydration
  if (browser && saved) {
    localeStore.set(saved);
  }
}

export const locale = localeStore;
export const t = tStore;

// Initialize immediately on module load so SSR has a locale before any $t usage
setupI18n();
