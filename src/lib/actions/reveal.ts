export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur';

export type RevealOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  activeClass?: string; // when visible
  inactiveClass?: string; // initial class
  delay?: number; // ms
  variant?: RevealVariant;
  distance?: number; // px for translate
  scaleFrom?: number; // starting scale for 'scale'
  blurFrom?: number; // px for 'blur'
};

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -10% 0px',
    once = true,
    activeClass = 'in-view',
    inactiveClass = 'reveal',
    delay = 0,
    variant = 'up',
    distance = 14,
    scaleFrom = 0.98,
    blurFrom = 6
  } = options;

  let hasIntersected = false;

  // Ensure base class and delay are applied
  node.classList.add(inactiveClass);
  node.style.transitionDelay = `${delay}ms`;

  function applyVariant(v: RevealVariant) {
    let transform = '';
    let filter = 'none';
    switch (v) {
      case 'left':
        transform = `translateX(-${distance}px)`;
        break;
      case 'right':
        transform = `translateX(${distance}px)`;
        break;
      case 'down':
        transform = `translateY(-${Math.max(8, distance - 2)}px)`;
        break;
      case 'scale':
        transform = `scale(${scaleFrom})`;
        break;
      case 'blur':
        transform = `translateY(${Math.max(6, distance - 6)}px)`;
        filter = `blur(${blurFrom}px)`;
        break;
      case 'up':
      default:
        transform = `translateY(${Math.max(10, distance - 0)}px) scale(${scaleFrom})`;
        break;
    }
    node.style.setProperty('--reveal-transform', transform);
    node.style.setProperty('--reveal-filter', filter);
  }

  applyVariant(variant);

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add(activeClass);
          hasIntersected = true;
          if (once) observer.disconnect();
        } else if (!once) {
          node.classList.remove(activeClass);
        }
      }
    },
    { threshold, rootMargin }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
    update(newOpts: RevealOptions) {
      // Allow delay updates
      if (newOpts?.delay !== undefined) {
        node.style.transitionDelay = `${newOpts.delay}ms`;
      }
      if (newOpts?.variant) {
        applyVariant(newOpts.variant);
      }
      if (newOpts?.distance || newOpts?.scaleFrom || newOpts?.blurFrom) {
        applyVariant(newOpts.variant ?? variant);
      }
      // If toggling once->false after intersect, re-observe if needed
      if (!once && hasIntersected) {
        observer.observe(node);
      }
    }
  };
}
