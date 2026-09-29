export interface Track {
  slug: string;
  title: string;
  releaseDate: string;
  /** Big pinned/scaling headline line (usually the track title or a lyric). */
  primaryWords: string[];
  /** Secondary line that fades in beneath the primary line as you scroll. */
  secondaryWords: string[];
  description: string;
  listenUrl: string;
  /** Path to the track's audio file, served from public/audio/. Omit when no preview is available yet. */
  audioUrl?: string;
  /** Key into the --color-* theme tokens defined in src/styles/global.css */
  accentColor: 'jeepney' | 'mango' | 'gold' | 'avocado' | 'teal' | 'walnut';
  /** Color for the secondary lyric line, kept distinct from `accentColor`. */
  secondaryAccentColor: 'jeepney' | 'mango' | 'gold' | 'avocado' | 'teal' | 'walnut';
  minSize: number;
  maxSize: number;
  secondaryMinOpacity: number;
}

// Ordered newest release first.
// TODO: swap placeholder secondary lines / descriptions / listenUrl for real
// content as it becomes available for each catalog track.
export const tracks: Track[] = [
  {
    slug: 'sa-tuwing-gumagabi',
    title: 'Sa Tuwing Gumagabi',
    releaseDate: 'New Release',
    primaryWords: ['SA', 'TUWING', 'GUMAGABI'],
    secondaryWords: ['IKAW', 'ANG', 'NASA', 'ISIP'],
    // TODO: replace with final promo copy for the release.
    description:
      "Harbats' newest single, \"Sa Tuwing Gumagabi,\" is out now — a night-drenched track about the thoughts that keep coming back once the lights go down. It's the band's own take on the Manila sound, built for late drives and longer thoughts.",
    listenUrl: '#',
    accentColor: 'mango',
    secondaryAccentColor: 'teal',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'bumuhos-ka-ulan',
    title: 'Bumuhos Ka Ulan',
    releaseDate: 'Released 06/21/2025',
    primaryWords: ['BUMUHOS', 'KA', 'ULAN'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['LUNURIN', 'MO', 'ANG', 'lANGIT', 'AT', 'LUPA'],
    // TODO: replace with real track description.
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, written here as a stand-in until the real description for this track is ready.',
    listenUrl: '#',
    audioUrl: '/audio/bumuhos-ka-ulan.mp3',
    accentColor: 'teal',
    secondaryAccentColor: 'gold',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'inaaliw',
    title: 'Inaaliw',
    releaseDate: 'Released 01/15/2025',
    primaryWords: ['INAALIW'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['ANG', 'SARILI', 'UPANG', 'HINDI', 'MABALIW'],
    // TODO: replace with real track description.
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, written here as a stand-in until the real description for this track is ready.',
    listenUrl: '#',
    audioUrl: '/audio/inaaliw.mp3',
    accentColor: 'gold',
    secondaryAccentColor: 'jeepney',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'reyna-ng-gabi',
    title: 'Reyna Ng Gabi',
    releaseDate: 'Released 11/30/2024',
    primaryWords: ['REYNA', 'NG', 'GABI'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['PLACEHOLDER', 'LYRIC', 'LINE'],
    // TODO: replace with real track description.
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore, written here as a stand-in until the real description for this track is ready.',
    listenUrl: '#',
    audioUrl: '/audio/reyna-ng-gabi.mp3',
    accentColor: 'jeepney',
    secondaryAccentColor: 'avocado',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'meryendabol',
    title: 'Meryendabol',
    releaseDate: 'Released 10/30/2024',
    primaryWords: ['MERYENDABOL'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['WOOP!', 'WOOP!'],
    // TODO: replace with real track description.
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia, written here as a stand-in until the real description for this track is ready.',
    listenUrl: '#',
    audioUrl: '/audio/meryendabol.mp3',
    accentColor: 'teal',
    secondaryAccentColor: 'jeepney',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'kumot',
    title: 'Kumot',
    releaseDate: 'Released 09/19/2024',
    primaryWords: ['KUMOT'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['PLACEHOLDER', 'LYRIC', 'LINE'],
    // TODO: replace with real track description.
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem, written here as a stand-in until the real description for this track is ready.',
    listenUrl: '#',
    audioUrl: '/audio/kumot.mp3',
    accentColor: 'walnut',
    secondaryAccentColor: 'mango',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'hansolo',
    title: 'Hansolo',
    releaseDate: 'Released 07/25/2024',
    primaryWords: ['HANSOLO'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['MAHIRAP', 'MAGLARO', 'NG', 'MAG-ISA'],
    // TODO: replace with real track description.
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit, written here as a stand-in until the real description for this track is ready.',
    listenUrl: '#',
    audioUrl: '/audio/hansolo.mp3',
    accentColor: 'avocado',
    secondaryAccentColor: 'walnut',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'pakipot',
    title: 'Pakipot',
    releaseDate: 'Released 06/25/2024',
    primaryWords: ['PAKIPOT'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['GUSTO', 'RIN', 'NAMAN'],
    // TODO: replace with real track description.
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus, Harbats' debut single and the track that started it all — written here as a stand-in until the real description is ready.",
    listenUrl: '#',
    audioUrl: '/audio/pakipot.mp3',
    accentColor: 'gold',
    secondaryAccentColor: 'teal',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
];
