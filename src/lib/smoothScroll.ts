import { getLenis } from './lenis';

// Custom "braking" easing: decelerates hard near the end of the animation,
// rather than the gentler default easing Lenis/browsers use out of the box.
const BRAKE_EASE_POWER = 4;

function easeOutBrake(t: number): number {
  return 1 - Math.pow(1 - t, BRAKE_EASE_POWER);
}

/**
 * Scrolls the page to `targetY`, easing out hard ("braking") near the end.
 * Delegates to the site-wide Lenis instance (see Layout.astro) so the jump
 * runs through the same smooth, jank-free raf loop as regular wheel
 * scrolling. Falls back to a plain scroll if Lenis isn't active (e.g.
 * `prefers-reduced-motion`).
 */
export function smoothScrollTo(targetY: number): void {
  const lenis = getLenis();

  if (!lenis) {
    window.scrollTo(0, targetY);
    return;
  }

  const distance = Math.abs(targetY - lenis.animatedScroll);
  const duration = Math.min(1.6, Math.max(0.6, distance * 0.0004));

  lenis.scrollTo(targetY, { duration, easing: easeOutBrake });
}
