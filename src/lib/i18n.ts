import { browser } from '$app/environment';
import { init, register, locale as localeStore, t as tStore, waitLocale as waitLocaleFn } from 'svelte-i18n';

register('sv', () => import('./locales/sv_full'));
register('en', () => import('./locales/en'));
register('es', () => import('./locales/es'));
register('de', () => import('./locales/de'));
register('fr', () => import('./locales/fr'));

let initialized = false;

export function setupI18n() {
  if (initialized) return;
  initialized = true;

  const saved = browser ? localStorage.getItem('lang') : null;
  const supported = new Set(['sv','en','es','de','fr']);
  const normalized = saved && supported.has(saved) ? saved : 'sv';

  init({ fallbackLocale: 'en', initialLocale: normalized });

  if (browser && saved && supported.has(saved)) {
    localeStore.set(saved);
  }
}

export const locale = localeStore;
export const t = tStore;
export const waitLocale = waitLocaleFn;

setupI18n();
