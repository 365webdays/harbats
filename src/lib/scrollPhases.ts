// Shared scroll-phase budget for the pinned `.hero` track sections, in vh of
// scrollable distance (must match the `.hero` height set in
// src/styles/global.css: 250 + 90 + 70 + 100 = 510vh).
//
// Used both by TrackSection.astro (to drive the headline-shrink / description
// fade-in animation) and MediaPlayer.astro (to compute where a track link
// should scroll to: the point where the headline has settled and the
// description is fully visible).
export const HEADLINE_PHASE_VH = 250;
export const DESCRIPTION_PHASE_VH = 90;
export const HOLD_PHASE_VH = 70;
export const TOTAL_SCROLLABLE_VH = HEADLINE_PHASE_VH + DESCRIPTION_PHASE_VH + HOLD_PHASE_VH;
export const HEADLINE_PHASE_END = HEADLINE_PHASE_VH / TOTAL_SCROLLABLE_VH;
export const DESCRIPTION_PHASE_END = (HEADLINE_PHASE_VH + DESCRIPTION_PHASE_VH) / TOTAL_SCROLLABLE_VH;

/**
 * Returns the page scrollY at which a `.hero` section's headline has
 * finished shrinking and its description has fully faded/risen in (the
 * start of the "hold" phase) — i.e. where the section reads as "settled".
 */
export function getSettledScrollTarget(
  heroTop: number,
  heroHeight: number,
  viewportHeight: number
): number {
  const scrollable = Math.max(heroHeight - viewportHeight, 0);
  return heroTop + scrollable * DESCRIPTION_PHASE_END;
}
