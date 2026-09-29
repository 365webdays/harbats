import Lenis from 'lenis';

// NOTE: Lenis itself writes a small version/feature marker object to
// `window.lenis` (see its `dist/lenis.mjs`), so the actual instance is kept
// as module state here instead of on `window`, to avoid clobbering/clashing
// with that marker.
let instance: Lenis | null = null;
let initialized = false;

/**
 * Creates the site-wide Lenis instance (once), driving smooth, inertia-based
 * scrolling for regular wheel/trackpad input. Lenis still animates the real
 * native scroll position (position: sticky, IntersectionObserver, and
 * TrackSection's own scroll listener all keep working unmodified) — it just
 * eases the deltas rather than jumping instantly. No-ops under
 * `prefers-reduced-motion`.
 */
export function initLenis(): Lenis | null {
  if (initialized) return instance;
  initialized = true;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    instance = new Lenis({ autoRaf: true });
  }

  return instance;
}

export function getLenis(): Lenis | null {
  return instance;
}
