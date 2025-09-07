type Options = {
  lines?: number;
  min?: number; // minimum font-size in px
  max?: number; // maximum font-size in px (defaults to computed)
  trigger?: unknown; // any reactive value to retrigger measurement
};

export function fitLines(node: HTMLElement, options: Options = {}) {
  let { lines = 2, min, max } = options;

  const measureAndFit = () => {
    const computed = getComputedStyle(node);
    const currentComputedSize = parseFloat(computed.fontSize) || 32;
    const maxPx = max ?? currentComputedSize;
    const minPx = Math.max(10, min ?? Math.round(maxPx * 0.6));

    // Start from the largest size to allow growth when text gets shorter
    node.style.fontSize = maxPx + 'px';

    const fitsAtCurrent = () => {
      const cs = getComputedStyle(node);
      const lh = parseFloat(cs.lineHeight) || (parseFloat(cs.fontSize) * 1.25);
      const allowed = lh * lines + 0.5; // small fudge factor
      const h = node.scrollHeight;
      return h <= allowed + 1; // allow 1px rounding
    };

    if (fitsAtCurrent()) return; // already fits in desired lines

    // Binary search the font size
    let low = minPx;
    let high = maxPx;
    let best = low;
    for (let i = 0; i < 20 && high - low > 0.25; i++) {
      const mid = (low + high) / 2;
      node.style.fontSize = mid + 'px';
      if (fitsAtCurrent()) {
        best = mid;
        low = mid; // try larger
      } else {
        high = mid; // need smaller
      }
    }
    node.style.fontSize = Math.max(minPx, Math.min(best, maxPx)).toFixed(2) + 'px';
  };

  const rafFit = () => requestAnimationFrame(measureAndFit);

  const ro = new ResizeObserver(() => rafFit());
  ro.observe(node);

  const mo = new MutationObserver(() => rafFit());
  mo.observe(node, { childList: true, characterData: true, subtree: true });

  // initial
  rafFit();

  return {
    update(newOptions: Options) {
      lines = newOptions?.lines ?? lines;
      min = newOptions?.min ?? min;
      max = newOptions?.max ?? max;
      rafFit();
    },
    destroy() {
      ro.disconnect();
      mo.disconnect();
    }
  };
}

