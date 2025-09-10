<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import X from 'lucide-svelte/icons/x';
  import Calendar from 'lucide-svelte/icons/calendar';
  import Globe from 'lucide-svelte/icons/globe';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import Video from 'lucide-svelte/icons/video';
  import Phone from 'lucide-svelte/icons/phone';
  import Send from 'lucide-svelte/icons/send';
  import Check from 'lucide-svelte/icons/check';
  import { fade, scale } from 'svelte/transition';
  import { browser } from '$app/environment';
  import { t, locale as i18nLocale } from '$lib/i18n';

  export let open = false;

  type MeetingType = 'meet' | 'zoom' | 'phone';

  const dispatch = createEventDispatcher<{
    submit: {
      length: number;
      type: MeetingType;
      timezone: string;
      dateISO: string;
      name: string;
      email: string;
      company?: string;
      tel?: string;
      notes?: string;
    };
    close: void;
  }>();

  let dialogEl: HTMLDivElement | null = null;
  let formEl: HTMLFormElement | null = null;

  let selectedLength = 30;
  let selectedType: MeetingType = 'meet';
  let tz = 'UTC';
  let days: Date[] = [];
  let selectedDayIndex = 0;
  let useCustomDate = false;
  let customDateStr: string = '';
  let customDay: Date | null = null;
  let customMin: string = '';
  let customInputEl: HTMLInputElement | null = null;
  let showCustomPopover = false;
  let viewYear = 0;
  let viewMonth = 0;
  let popoverEl: HTMLDivElement | null = null;
  let popoverTriggerEl: HTMLButtonElement | null = null;
  let slots: string[] = [];
  let selectedTime: string | null = null;

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

  function pad(n: number) { return n.toString().padStart(2, '0'); }

  function genDays(count = 7) {
    const out: Date[] = [];
    const base = new Date();
    for (let i = 0; i < count; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      d.setHours(0, 0, 0, 0);
      out.push(d);
    }
    return out;
  }

  function genSlots(day: Date, stepMin = 30) {
    const results: string[] = [];
    const startH = 9;
    const endH = 17;
    const endMinutes = endH * 60;
    for (let m = startH * 60; m < endMinutes; m += stepMin) {
      if (m + selectedLength <= endMinutes) {
        const hh = Math.floor(m / 60);
        const mm = m % 60;
        results.push(`${pad(hh)}:${pad(mm)}`);
      }
    }
    return results;
  }

  function buildDateISO(day: Date, timeHHMM: string) {
    const [hh, mm] = timeHHMM.split(':').map(Number);
    const d = new Date(day);
    d.setHours(hh, mm, 0, 0);
    return d.toISOString();
  }

  function formatDate(d: Date) {
    try {
      return new Intl.DateTimeFormat($i18nLocale ?? 'en', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(d);
    } catch (e) {
      return d.toDateString();
    }
  }

  function formatLocalYMD(d: Date) {
    const y = d.getFullYear();
    const m = pad(d.getMonth() + 1);
    const da = pad(d.getDate());
    return `${y}-${m}-${da}`;
  }

  function formatChipDate(d: Date) {
    try {
      return new Intl.DateTimeFormat($i18nLocale ?? 'en', { day: 'numeric', month: 'short' }).format(d);
    } catch {
      return d.getDate() + '/' + (d.getMonth() + 1);
    }
  }

  let weekdayLabels: string[] = [];
  $: {
    try {
      const baseMonday = new Date(2023, 0, 2);
      weekdayLabels = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(baseMonday);
        d.setDate(baseMonday.getDate() + i);
        return new Intl.DateTimeFormat($i18nLocale ?? 'en', { weekday: 'narrow' }).format(d);
      });
    } catch {
      weekdayLabels = ['M','T','W','T','F','S','S'];
    }
  }

  function openNativePicker() {
    customInputEl?.showPicker?.();
  }

  function minDateObj() {
    const [y, m, da] = customMin.split('-').map(Number);
    const dt = new Date();
    dt.setFullYear(y, (m - 1), da);
    dt.setHours(0, 0, 0, 0);
    return dt;
  }

  function stepCustom(delta: number) {
    const base = customDay ?? minDateObj();
    const next = new Date(base);
    next.setDate(base.getDate() + delta);
    if (next < minDateObj()) return;
    customDay = next;
    customDateStr = formatLocalYMD(next);
  }

  function formatMonthYear(y: number, m: number) {
    const d = new Date(y, m, 1);
    try {
      return new Intl.DateTimeFormat($i18nLocale ?? 'en', { month: 'long', year: 'numeric' }).format(d);
    } catch {
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
    }
  }

  function isSameDate(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  function startOfDay(d: Date) {
    const x = new Date(d);
    x.setHours(0,0,0,0);
    return x;
  }

  function getCalendarCells(y: number, m: number) {
    const first = new Date(y, m, 1);
    const last = new Date(y, m + 1, 0);
    const firstDow = (first.getDay() + 6) % 7;
    const daysInMonth = last.getDate();
    const cells: { date: Date; inMonth: boolean; disabled: boolean; today: boolean }[] = [];
    const min = minDateObj();

    for (let i = 0; i < firstDow; i++) {
      const d = new Date(y, m, 1 - (firstDow - i));
      const sd = startOfDay(d);
      cells.push({ date: d, inMonth: false, disabled: sd < min, today: isSameDate(sd, startOfDay(new Date())) });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const d = new Date(y, m, day);
      const sd = startOfDay(d);
      cells.push({ date: d, inMonth: true, disabled: sd < min, today: isSameDate(sd, startOfDay(new Date())) });
    }
    while (cells.length % 7 !== 0) {
      const lastCell = cells[cells.length - 1].date;
      const d = new Date(lastCell);
      d.setDate(d.getDate() + 1);
      const sd = startOfDay(d);
      cells.push({ date: d, inMonth: false, disabled: sd < min, today: isSameDate(sd, startOfDay(new Date())) });
    }
    while (cells.length < 42) {
      const lastCell = cells[cells.length - 1].date;
      const d = new Date(lastCell);
      d.setDate(d.getDate() + 1);
      const sd = startOfDay(d);
      cells.push({ date: d, inMonth: false, disabled: sd < min, today: isSameDate(sd, startOfDay(new Date())) });
    }
    return cells;
  }

  function openCustomPopover() {
    const base = customDay ?? minDateObj();
    viewYear = base.getFullYear();
    viewMonth = base.getMonth();
    showCustomPopover = true;
  }

  function changeMonth(delta: number) {
    const next = new Date(viewYear, viewMonth + delta, 1);
    const min = minDateObj();
    const beforeMin = next.getFullYear() < min.getFullYear() || (next.getFullYear() === min.getFullYear() && next.getMonth() < min.getMonth());
    if (beforeMin) return;
    viewYear = next.getFullYear();
    viewMonth = next.getMonth();
  }

  function refreshSlots() {
    const baseDay = useCustomDate ? customDay : days[selectedDayIndex];
    if (!baseDay) {
      slots = [];
      return;
    }
    slots = genSlots(baseDay);
    if (!slots.includes(selectedTime || '')) selectedTime = null;
  }

  function handleConfirm() {
    if (!formEl) return;
    if (!selectedTime) {
      alert($t('schedule.select_time_required'));
      return;
    }
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }
    const fd = new FormData(formEl);
    const baseDate = useCustomDate ? customDay : days[selectedDayIndex];
    if (!baseDate) return;
    const payload = {
      length: selectedLength,
      type: selectedType,
      timezone: tz,
      dateISO: buildDateISO(baseDate, selectedTime),
      name: (fd.get('name') as string) || '',
      email: (fd.get('email') as string) || '',
      company: (fd.get('company') as string) || undefined,
      tel: (fd.get('tel') as string) || undefined,
      notes: (fd.get('notes') as string) || undefined
    } as const;
    dispatch('submit', payload);
    close();
  }

  onMount(() => {
    const handler = (e: KeyboardEvent) => onKeydown(e);
    window.addEventListener('keydown', handler);
    const clickOutside = (e: MouseEvent) => {
      if (!showCustomPopover) return;
      const target = e.target as Node;
      if (popoverEl && popoverEl.contains(target)) return;
      if (popoverTriggerEl && popoverTriggerEl.contains(target)) return;
      showCustomPopover = false;
    };
    window.addEventListener('mousedown', clickOutside, true);
    if (browser) {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
      days = genDays(7);
      const d = new Date(days[days.length - 1]);
      d.setDate(d.getDate() + 1);
      customMin = formatLocalYMD(d);
      refreshSlots();
    }
    return () => {
      window.removeEventListener('keydown', handler);
      window.removeEventListener('mousedown', clickOutside, true);
    };
  });

  $: {
    if (browser) {
      document.body.style.overflow = open ? 'hidden' : '';
    }
  }

  $: if (browser) {
    selectedLength, selectedDayIndex, days, useCustomDate, customDay;
    refreshSlots();
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
      class="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white text-slate-900 shadow-2xl ring-1 ring-black/10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="schedule-modal-title"
      aria-describedby="schedule-modal-desc"
      tabindex="-1"
      in:scale={{ duration: 160, start: 0.98 }}
      out:scale={{ duration: 120, start: 0.98 }}
    >
      <div class="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(88,130,193,0.16),transparent_60%)]"></div>
      <div class="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(147,112,219,0.14),transparent_60%)]"></div>
      <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)]"></div>

      <button
        type="button"
        class="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(215,70%,56%)]/40"
        aria-label={$t('schedule.close')}
        onclick={() => close()}
      >
        <X class="w-5 h-5" aria-hidden="true" />
      </button>

      <div class="p-6 sm:p-8">
        <div class="mb-6 flex items-start gap-3">
          <div class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(215,70%,56%)] text-white shadow-sm"><Calendar class="w-5 h-5" aria-hidden="true"/></div>
          <div>
            <h3 id="schedule-modal-title" class="text-xl sm:text-2xl font-bold tracking-tight">{$t('schedule.title')}</h3>
            <p id="schedule-modal-desc" class="mt-1 text-slate-600">{$t('schedule.desc')}</p>
          </div>
        </div>

        <form bind:this={formEl} class="grid gap-6" onsubmit={(e) => e.preventDefault()} onkeydown={(e) => {
          const ke = e as KeyboardEvent;
          const target = ke.target as HTMLElement | null;
          if (ke.key === 'Enter' && target && target.tagName !== 'TEXTAREA') {
            e.preventDefault();
          }
        }}>
          <div class="grid grid-cols-1 gap-4">
            <div class="grid gap-2">
              <label class="text-sm font-medium text-slate-700">{$t('schedule.type_label')}</label>
              <div class="flex flex-wrap gap-2">
                <button type="button" class={`inline-flex items-center gap-2 rounded-xl border ${selectedType==='meet'?'border-[hsl(215,70%,56%)] bg-[hsl(215,70%,56%)]/10 text-[hsl(215,70%,30%)]':'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'} px-3 py-2 text-sm font-medium`} onclick={() => selectedType='meet'}>
                  <Video class="w-4 h-4" aria-hidden="true"/> Google Meet
                  {#if selectedType==='meet'}<Check class="w-4 h-4 text-[hsl(215,70%,40%)]" aria-hidden="true" />{/if}
                </button>
                <button type="button" class={`inline-flex items-center gap-2 rounded-xl border ${selectedType==='zoom'?'border-[hsl(215,70%,56%)] bg-[hsl(215,70%,56%)]/10 text-[hsl(215,70%,30%)]':'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'} px-3 py-2 text-sm font-medium`} onclick={() => selectedType='zoom'}>
                  <Video class="w-4 h-4" aria-hidden="true"/> Zoom
                  {#if selectedType==='zoom'}<Check class="w-4 h-4 text-[hsl(215,70%,40%)]" aria-hidden="true" />{/if}
                </button>
                <button type="button" class={`inline-flex items-center gap-2 rounded-xl border ${selectedType==='phone'?'border-[hsl(215,70%,56%)] bg-[hsl(215,70%,56%)]/10 text-[hsl(215,70%,30%)]':'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'} px-3 py-2 text-sm font-medium`} onclick={() => selectedType='phone'}>
                  <Phone class="w-4 h-4" aria-hidden="true"/> {$t('schedule.type_phone')}
                  {#if selectedType==='phone'}<Check class="w-4 h-4 text-[hsl(215,70%,40%)]" aria-hidden="true" />{/if}
                </button>
              </div>
            </div>
          </div>

          <div class="grid gap-3">
            <div class="flex items-center justify-between mb-1">
              <div class="text-sm font-medium text-slate-700">{$t('schedule.pick_time')}</div>
<div class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600 shadow-sm">
                <Globe class="w-3.5 h-3.5" aria-hidden="true" />
                <span>{$t('schedule.timezone_prefix')} {tz}</span>
              </div>
            </div>
            <div class="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {#each days as d, i}
                <button type="button" class={`shrink-0 inline-flex items-center gap-2 rounded-xl border ${(!useCustomDate && selectedDayIndex===i)?'border-[hsl(215,70%,56%)] bg-[hsl(215,70%,56%)]/10 text-[hsl(215,70%,30%)]':'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'} px-3 py-2 text-sm font-medium`} onclick={() => { useCustomDate = false; selectedDayIndex = i; }}>
                  {formatChipDate(d)}
                </button>
              {/each}
              <button type="button" class={`shrink-0 inline-flex items-center gap-2 rounded-xl border ${useCustomDate?'border-[hsl(215,70%,56%)] bg-[hsl(215,70%,56%)]/10 text-[hsl(215,70%,30%)]':'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'} px-3 py-2 text-sm font-medium`} onclick={() => { useCustomDate = true; selectedDayIndex = -1; selectedTime = null; }}>
                {$t('schedule.custom_label')}
              </button>
            </div>
            {#if useCustomDate}
              <div class="pt-1">
                <input
                  type="date"
                  bind:this={customInputEl}
                  bind:value={customDateStr}
                  min={customMin}
                  class="absolute h-0 w-0 opacity-0"
                  onchange={() => {
                    if (customDateStr) {
                      const [y, m, d] = customDateStr.split('-').map(Number);
                      const dt = new Date();
                      dt.setFullYear(y, (m - 1), d);
                      dt.setHours(0, 0, 0, 0);
                      customDay = dt;
                    } else {
                      customDay = null;
                    }
                  }}
                />

                <div class="flex flex-wrap items-center gap-2">
                  <button type="button" class="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(215,70%,56%)]/30 disabled:opacity-40" aria-label={$t('schedule.prev_day')} onclick={() => stepCustom(-1)} disabled={(customDay ?? minDateObj()) <= minDateObj()}>
                    <ChevronLeft class="w-5 h-5" aria-hidden="true" />
                  </button>

                  <div class="relative">
                    <button bind:this={popoverTriggerEl} type="button" class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(215,70%,56%)]/30 shadow-sm" aria-label={$t('schedule.calendar_open')} onclick={() => (showCustomPopover ? (showCustomPopover = false) : openCustomPopover())}>
                      <Calendar class="w-5 h-5" aria-hidden="true" />
                      <span class="text-sm font-medium">
                        {#if customDay}
                          {formatDate(customDay)}
                        {:else}
                          {$t('schedule.custom_pick_label')}
                        {/if}
                      </span>
                    </button>
                    {#if showCustomPopover}
                      <div bind:this={popoverEl} class="absolute z-50 mt-2 w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl ring-1 ring-black/5">
                        <div class="flex items-center justify-between px-1 pb-2">
                          <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-50" aria-label={$t('schedule.prev_day')} onclick={() => changeMonth(-1)}>
                            <ChevronLeft class="w-5 h-5 text-slate-700" aria-hidden="true"/>
                          </button>
                          <div class="text-sm font-semibold text-slate-800">{formatMonthYear(viewYear, viewMonth)}</div>
                          <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-50" aria-label={$t('schedule.next_day')} onclick={() => changeMonth(1)}>
                            <ChevronRight class="w-5 h-5 text-slate-700" aria-hidden="true"/>
                          </button>
                        </div>
                        <div class="grid grid-cols-7 gap-1 px-1 text-xs text-slate-500">
                          {#each weekdayLabels as wd}
                            <div class="h-6 w-8 grid place-items-center">{wd}</div>
                          {/each}
                        </div>
                        <div class="mt-1 grid grid-cols-7 gap-1 px-1">
                          {#each getCalendarCells(viewYear, viewMonth) as cell}
                            <button
                              type="button"
                              class={`h-9 w-8 rounded-lg text-sm grid place-items-center transition ${cell.disabled ? 'text-slate-300 cursor-not-allowed' : cell.inMonth ? 'text-slate-800 hover:bg-slate-100' : 'text-slate-400 hover:bg-slate-100'} ${customDay && isSameDate(cell.date, customDay) ? 'bg-[hsl(215,70%,56%)]/15 ring-1 ring-[hsl(215,70%,56%)]' : ''}`}
                              disabled={cell.disabled}
                              onclick={() => { customDay = startOfDay(cell.date); customDateStr = formatLocalYMD(customDay); selectedTime = null; showCustomPopover = false; }}
                            >
                              <span class={`leading-none ${cell.today ? 'relative after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[hsl(215,70%,56%)]' : ''}`}>{cell.date.getDate()}</span>
                            </button>
                          {/each}
                        </div>
                      </div>
                    {/if}
                  </div>

                  <button type="button" class="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(215,70%,56%)]/30" aria-label={$t('schedule.next_day')} onclick={() => stepCustom(1)}>
                    <ChevronRight class="w-5 h-5" aria-hidden="true" />
                  </button>

                  {#if customDay}
                    <button type="button" class="inline-flex items-center justify-center h-10 rounded-xl border border-slate-200 bg-white text-slate-700 px-3 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(215,70%,56%)]/30" onclick={() => { customDay = null; customDateStr=''; selectedTime = null; }}>
                      {$t('schedule.clear_date')}
                    </button>
                  {/if}
                </div>
              </div>
            {/if}
            {#if (!useCustomDate || (useCustomDate && customDay))}
              {#if slots.length}
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {#each slots as s}
                    <button type="button" class={`w-full rounded-xl border ${selectedTime===s?'border-[hsl(215,70%,56%)] bg-[hsl(215,70%,56%)]/10 text-[hsl(215,70%,30%)]':'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'} px-3 py-2 text-sm font-medium`} onclick={() => selectedTime = s}>
                      {s}
                    </button>
                  {/each}
                </div>
              {:else}
                <div class="text-sm text-slate-500">{$t('schedule.no_slots')}</div>
              {/if}
            {/if}
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="grid gap-2">
              <label for="name" class="text-sm font-medium text-slate-700">{$t('schedule.name_label')}</label>
              <input id="name" name="name" type="text" required placeholder={$t('schedule.name_placeholder')} class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[hsl(215,70%,56%)] focus:ring-2 focus:ring-[hsl(215,70%,56%)]/30" />
            </div>
            <div class="grid gap-2">
              <label for="email" class="text-sm font-medium text-slate-700">{$t('schedule.email_label')}</label>
              <input id="email" name="email" type="email" required placeholder={$t('schedule.email_placeholder')} class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[hsl(215,70%,56%)] focus:ring-2 focus:ring-[hsl(215,70%,56%)]/30" />
            </div>
            <div class="grid gap-2">
              <label for="company" class="text-sm font-medium text-slate-700">{$t('schedule.company_label')}</label>
              <input id="company" name="company" type="text" placeholder={$t('schedule.company_placeholder')} class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[hsl(215,70%,56%)] focus:ring-2 focus:ring-[hsl(215,70%,56%)]/30" />
            </div>
            <div class="grid gap-2">
              <label for="tel" class="text-sm font-medium text-slate-700">{$t('schedule.tel_label')}</label>
              <input id="tel" name="tel" type="tel" placeholder={$t('schedule.tel_placeholder')} class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[hsl(215,70%,56%)] focus:ring-2 focus:ring-[hsl(215,70%,56%)]/30" />
            </div>
          </div>
          <div class="grid gap-2">
            <label for="notes" class="text-sm font-medium text-slate-700">{$t('schedule.notes_label')}</label>
            <textarea id="notes" name="notes" rows="3" placeholder={$t('schedule.notes_placeholder')} class="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[hsl(215,70%,56%)] focus:ring-2 focus:ring-[hsl(215,70%,56%)]/30"></textarea>
          </div>

          <div class="mt-2 flex items-center justify-between gap-4">
            <p class="text-xs text-slate-500">{$t('schedule.privacy')}</p>
            <div class="flex items-center gap-2">
              <button type="button" class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(215,70%,56%)]/30" onclick={() => close()}>
                {$t('schedule.cancel')}
              </button>
              <button type="button" class="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[hsl(215,70%,56%)] to-[hsl(245,70%,62%)] shadow-sm transform transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-md hover:brightness-110 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(215,70%,56%)]/40" onclick={() => handleConfirm()}>
                <Send class="w-4 h-4" aria-hidden="true" /> {$t('schedule.confirm')}
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
