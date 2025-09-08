<script lang="ts">
  import Globe from 'lucide-svelte/icons/globe';
  import ChevronDown from 'lucide-svelte/icons/chevron-down';
  import Check from 'lucide-svelte/icons/check';
  import { t, locale as i18nLocale } from 'svelte-i18n';

  let { variant = 'desktop' } = $props<{ variant?: 'desktop' | 'mobile' }>();

  const codes = ['sv', 'en', 'es', 'de', 'fr'] as const;

  let open = $state(false);
  let focusedIndex = $state<number>(-1);
  let buttonEl = $state<HTMLButtonElement | null>(null);
  let listEl = $state<HTMLUListElement | null>(null);

  function toggle() {
    open = !open;
    if (open) requestAnimationFrame(() => focusCurrent());
  }

  function focusCurrent() {
    const idx = Math.max(0, codes.indexOf(($i18nLocale as any) || 'sv'));
    focusedIndex = idx;
    const el = listEl?.querySelectorAll('[role="option"]')[idx] as HTMLElement | undefined;
    el?.focus();
  }

  function select(code: (typeof codes)[number]) {
    i18nLocale.set(code);
    try { localStorage.setItem('lang', code); } catch {}
    open = false;
    buttonEl?.focus();
  }

  function onButtonKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open = true;
      requestAnimationFrame(() => focusCurrent());
    }
  }

  function onListKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault();
      open = false;
      buttonEl?.focus();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusedIndex = (focusedIndex + 1) % codes.length;
      (listEl?.querySelectorAll('[role="option"]')[focusedIndex] as HTMLElement | undefined)?.focus();
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusedIndex = (focusedIndex - 1 + codes.length) % codes.length;
      (listEl?.querySelectorAll('[role="option"]')[focusedIndex] as HTMLElement | undefined)?.focus();
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const code = codes[focusedIndex] ?? codes[0];
      select(code);
    }
  }

  function onDocClick(e: MouseEvent) {
    const target = e.target as Node;
    const root = (buttonEl?.parentElement) as HTMLElement | null;
    if (!root) return;
    if (!root.contains(target)) open = false;
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('click', onDocClick);
    $effect(() => () => document.removeEventListener('click', onDocClick));
  }

  const baseBtn = 'inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 shadow-sm';
  const btnSize = variant === 'mobile' ? 'w-full justify-between px-3 py-2 text-base' : 'px-2 py-1 text-sm';
  const menuPos = variant === 'mobile' ? 'w-full left-0 right-0 mt-2' : 'w-56 right-0 mt-2';
</script>

<div class="relative" aria-label={$t('lang.label')}>
  <button bind:this={buttonEl}
    type="button"
    class={`${baseBtn} ${btnSize}`}
    aria-haspopup="listbox"
    aria-expanded={open}
    onclick={toggle}
    onkeydown={onButtonKeydown}
  >
    <span class="inline-flex items-center gap-2">
      <Globe class="h-4 w-4 text-slate-600" aria-hidden="true" />
      <span class="font-medium">{$t(`lang.options.${$i18nLocale || 'sv'}`)}</span>
    </span>
    <ChevronDown class="h-4 w-4 text-slate-600" aria-hidden="true" />
  </button>

  {#if open}
    <ul bind:this={listEl}
      role="listbox"
      tabindex="-1"
      onkeydown={onListKeydown}
      class={`absolute z-50 ${menuPos} bg-white border border-slate-200 rounded-md shadow-lg p-1`}
    >
      {#each codes as code, i}
        <li
          role="option"
          tabindex="0"
          aria-selected={code === $i18nLocale}
          class="flex items-center justify-between gap-2 px-2 py-2 rounded-md cursor-pointer hover:bg-slate-50 focus:bg-slate-50"
          onclick={() => select(code)}
          onkeydown={(e) => { const k = e.key; if (k === 'Enter' || k === ' ') { e.preventDefault(); select(code); } }}
        >
          <div class="flex items-center gap-2">
            <span class="inline-flex h-5 w-8 items-center justify-center text-xs font-semibold rounded bg-slate-100 text-slate-700">
              {code.toUpperCase()}
            </span>
            <span>{$t(`lang.options.${code}`)}</span>
          </div>
          {#if code === $i18nLocale}
            <Check class="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>
