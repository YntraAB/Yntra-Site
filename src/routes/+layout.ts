// Ensure i18n is initialized and messages are loaded
import '$lib/i18n';
import { waitLocale } from '$lib/i18n';

export const load = async () => {
  // Wait until the current locale has loaded its messages
  try {
    await waitLocale();
  } catch (_) {
    // ignore; UI can still render with fallback
  }
  return {};
};

