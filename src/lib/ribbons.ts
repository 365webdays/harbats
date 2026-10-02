// Geometry for the decorative retro ribbons (RetroRibbons.astro), drawn in a
// 512x1024 viewBox. The ribbons form one tall, endlessly repeating band: a
// single 1024-unit-tall motif (top fold -> S-curve -> sweep back right) that
// tiles seamlessly vertically, so it can be slid upward as the page scrolls.
// Every band is a filled, tapering shape built around a Catmull-Rom
// centerline, interpolated between an outer (coral) and inner (navy) key
// polyline so the bands always stay parallel, including while swaying.

type Point = [number, number];

export const RIBBON_VIEWBOX = { width: 512, height: 1024 };

/** Vertical repeat distance of the motif, in viewBox units. */
export const RIBBON_PERIOD = 1024;

export const RIBBON_BANDS = ['coral', 'peach', 'mustard', 'teal', 'navy'] as const;

// Outer / inner centerline key points for one period (same count,
// index-matched): descent -> fold tip -> fold back -> long S-curve left ->
// sweep right -> heading back down-left into the next period.
const OUTER: Point[] = [
  [322, 0], [285, 130], [222, 318], [282, 262], [232, 430],
  [168, 620], [178, 790], [300, 870], [380, 930],
];
const INNER: Point[] = [
  [376, 0], [334, 90], [300, 192], [378, 118], [334, 320],
  [284, 490], [296, 610], [420, 690], [470, 800],
];

// Band thickness at each key point (thin through the fold, thick through
// the sweeping curves).
const WIDTHS = [6, 5, 5, 7, 12, 22, 34, 34, 14];

// Per-key-point sway strength (the fold and S-curve move most).
const SWAY_WEIGHTS = [0.5, 0.7, 0.9, 0.9, 1, 1, 0.8, 0.6, 0.5];

const SWAY_AMPLITUDE = 14;
const SAMPLES_PER_SEGMENT = 10;

// Periods drawn (in local, pre-translation coordinates). The band is slid up
// by 0..1 period, so this covers the 0..1024 viewport at any offset.
const FIRST_PERIOD = -1;
const LAST_PERIOD = 2;

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function catmullRom(p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point {
  const t2 = t * t;
  const t3 = t2 * t;
  const f = (a: number, b: number, c: number, d: number) =>
    0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
  return [f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])];
}

const round = (n: number) => Math.round(n * 10) / 10;

/**
 * Builds the SVG `d` for a band. `bandIndex` runs 0 (outer, coral) to 4
 * (inner, navy); `phase` is the band's current sway phase in radians (0 =
 * resting shape).
 */
export function buildRibbonPath(bandIndex: number, phase: number): string {
  const t = bandIndex / (RIBBON_BANDS.length - 1);
  const widthScale = lerp(1.1, 0.95, t);

  const period: { point: Point; width: number }[] = OUTER.map((outer, i) => {
    const inner = INNER[i];
    const wave = Math.sin(phase + i * 0.8) - Math.sin(i * 0.8);
    const offset = wave * SWAY_AMPLITUDE * SWAY_WEIGHTS[i];
    return {
      point: [lerp(outer[0], inner[0], t) + offset, lerp(outer[1], inner[1], t) + offset * 0.4],
      width: WIDTHS[i] * widthScale,
    };
  });

  // Tile the period vertically, plus one guide point either side so the
  // spline's end tangents match the neighbouring (undrawn) periods.
  const keys: { point: Point; width: number }[] = [];
  for (let k = FIRST_PERIOD - 1; k <= LAST_PERIOD + 1; k++) {
    for (const { point, width } of period) {
      keys.push({ point: [point[0], point[1] + k * RIBBON_PERIOD], width });
    }
  }
  const start = period.length - 1;
  const end = keys.length - period.length;

  const center: Point[] = [];
  const widths: number[] = [];
  for (let i = start; i < end; i++) {
    for (let s = 0; s < SAMPLES_PER_SEGMENT; s++) {
      const u = s / SAMPLES_PER_SEGMENT;
      center.push(catmullRom(keys[i - 1].point, keys[i].point, keys[i + 1].point, keys[i + 2].point, u));
      widths.push(lerp(keys[i].width, keys[i + 1].width, u));
    }
  }
  center.push(keys[end].point);
  widths.push(keys[end].width);

  const left: string[] = [];
  const right: string[] = [];
  for (let i = 0; i < center.length; i++) {
    const prev = center[Math.max(i - 1, 0)];
    const next = center[Math.min(i + 1, center.length - 1)];
    const dx = next[0] - prev[0];
    const dy = next[1] - prev[1];
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    const half = widths[i] / 2;
    const [x, y] = center[i];
    left.push(`${round(x + nx * half)},${round(y + ny * half)}`);
    right.push(`${round(x - nx * half)},${round(y - ny * half)}`);
  }

  return `M${left.join('L')}L${right.reverse().join('L')}Z`;
}
