import '$lib/i18n';
import { waitLocale } from '$lib/i18n';

export const load = async () => {
  try {
    await waitLocale();
  } catch (_) {}
  return {};
};

