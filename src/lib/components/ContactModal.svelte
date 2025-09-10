<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import X from 'lucide-svelte/icons/x';
  import Send from 'lucide-svelte/icons/send';
  import Building2 from 'lucide-svelte/icons/building-2';
  import Phone from 'lucide-svelte/icons/phone';
  import Mail from 'lucide-svelte/icons/mail';
  import MessageSquare from 'lucide-svelte/icons/message-square';
  import { fade, scale } from 'svelte/transition';
  import { browser } from '$app/environment';
  import { t } from '$lib/i18n';

  export let open = false;

  const dispatch = createEventDispatcher<{ close: void; submit: FormData }>();

  let dialogEl: HTMLDivElement | null = null;

  function close() {
    open = false;
    dispatch('close');
  }

  function onBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) close();
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
  }

  let formEl: HTMLFormElement | null = null;

  function handleSubmit(e: Event) {
    e.preventDefault();
  }

  function handleButtonClick() {
    if (!formEl) return;
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }
    const data = new FormData(formEl);
    dispatch('submit', data);
    close();
  }

  onMount(() => {
    const handler = (e: KeyboardEvent) => onKeydown(e);
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  $: {
    if (browser) {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  $: if (browser && open) {
    queueMicrotask(() => dialogEl?.focus());
  }
</script>

{#if open}
  <div
    class="fixed inset-0 z-[100] grid place-items-center bg-black/60 backdrop-blur-sm p-4"
    aria-hidden="true"
    tabindex="0"
    onclick={onBackdropClick}
    onkeydown={(e) => {
      if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar')) {
        e.preventDefault();
        close();
      }
    }}
    in:fade={{ duration: 120 }}
    out:fade={{ duration: 120 }}
  >
    <div
      bind:this={dialogEl}
      class="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white text-slate-900 shadow-2xl ring-1 ring-black/10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-desc"
      tabindex="-1"
      in:scale={{ duration: 160, start: 0.98 }}
      out:scale={{ duration: 120, end: 0.98 }}
    >
      <div class="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(88,130,193,0.18),transparent_60%)]"></div>
      <div class="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(147,112,219,0.16),transparent_60%)]"></div>
      <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)]"></div>
      <button
        type="button"
        class="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(215,70%,56%)]/40"
        aria-label={$t('modal.close')}
        onclick={close}
      >
        <X class="w-5 h-5" aria-hidden="true" />
      </button>

      <div class="p-6 sm:p-8">
        <div class="mb-6">
          <h3 id="contact-modal-title" class="text-xl sm:text-2xl font-bold tracking-tight">
            {$t('modal.title')}
          </h3>
          <p id="contact-modal-desc" class="mt-1 text-slate-600">{$t('modal.desc')}</p>
        </div>

        <form bind:this={formEl} class="grid gap-4" onsubmit={handleSubmit} onkeydown={(e) => {
          const ke = e as KeyboardEvent;
          const target = ke.target as HTMLElement | null;
          if (ke.key === 'Enter' && target && target.tagName !== 'TEXTAREA') {
            e.preventDefault();
          }
        }}>
          <div class="grid gap-2">
            <label for="company" class="text-sm font-medium text-slate-700">{$t('modal.company_label')}</label>
            <div class="relative">
              <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Building2 class="w-4 h-4" aria-hidden="true" />
              </span>
              <input
                id="company"
                name="company"
                type="text"
                required
                placeholder={$t('modal.company_placeholder')}
                class="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[hsl(215,70%,56%)] focus:ring-2 focus:ring-[hsl(215,70%,56%)]/30"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="grid gap-2">
              <label for="tel" class="text-sm font-medium text-slate-700">{$t('modal.tel_label')}</label>
              <div class="relative">
                <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Phone class="w-4 h-4" aria-hidden="true" />
                </span>
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  required
                  placeholder={$t('modal.tel_placeholder')}
                  class="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[hsl(215,70%,56%)] focus:ring-2 focus:ring-[hsl(215,70%,56%)]/30"
                />
              </div>
            </div>
            <div class="grid gap-2">
              <label for="email" class="text-sm font-medium text-slate-700">{$t('modal.email_label')}</label>
              <div class="relative">
                <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Mail class="w-4 h-4" aria-hidden="true" />
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={$t('modal.email_placeholder')}
                  class="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[hsl(215,70%,56%)] focus:ring-2 focus:ring-[hsl(215,70%,56%)]/30"
                />
              </div>
            </div>
          </div>

          <div class="grid gap-2">
            <label for="message" class="text-sm font-medium text-slate-700">{$t('modal.message_label')}</label>
            <div class="relative">
              <span class="pointer-events-none absolute left-3 top-3 text-slate-400">
                <MessageSquare class="w-4 h-4" aria-hidden="true" />
              </span>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder={$t('modal.message_placeholder')}
                class="w-full resize-y rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[hsl(215,70%,56%)] focus:ring-2 focus:ring-[hsl(215,70%,56%)]/30"
              ></textarea>
            </div>
          </div>

          <div class="mt-2 flex items-center justify-between gap-4">
            <p class="text-xs text-slate-500">{$t('modal.privacy')}</p>
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(215,70%,56%)]/30"
                onclick={close}
              >
                {$t('modal.cancel')}
              </button>
              <button
                type="button"
                class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] shadow-sm transform transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-md hover:brightness-110 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(215,70%,56%)]/40"
                onclick={handleButtonClick}
              >
                <Send class="w-4 h-4" aria-hidden="true" /> {$t('modal.send')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
{/if}

<style>
  @media (prefers-reduced-motion: reduce) {
    :global(html *) {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
</style>
