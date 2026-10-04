import type { PlatformKey } from './platforms';

export interface TrackCredit {
  name: string;
  roles: string[];
}

export interface TrackLink {
  platform: PlatformKey;
  url: string;
}

export interface Track {
  slug: string;
  title: string;
  releaseDate: string;
  /** Big pinned/scaling headline line (usually the track title or a lyric). */
  primaryWords: string[];
  /** Secondary line that fades in beneath the primary line as you scroll. */
  secondaryWords: string[];
  /** Songwriting credits, rendered one person per line. */
  credits: TrackCredit[];
  /** Optional promo/about copy shown beneath the credits. */
  description?: string;
  /** Per-platform URLs for this song, shown in the section's "Listen" popover. */
  links?: TrackLink[];
  /** Path to the track's audio file, served from public/audio/. Omit when no preview is available yet. */
  audioUrl?: string;
  /** Path to the track's cover art, served from public/art/. Omit when no art exists yet. */
  artworkUrl?: string;
  /** Key into the --color-* theme tokens defined in src/styles/global.css */
  accentColor: 'jeepney' | 'mango' | 'gold' | 'avocado' | 'teal' | 'walnut';
  /** Color for the secondary lyric line, kept distinct from `accentColor`. */
  secondaryAccentColor: 'jeepney' | 'mango' | 'gold' | 'avocado' | 'teal' | 'walnut';
  minSize: number;
  maxSize: number;
  secondaryMinOpacity: number;
}

// Ordered newest release first.
// TODO: swap placeholder secondary lines / descriptions for real content as
// it becomes available for each catalog track.
export const tracks: Track[] = [
  // Temporarily hidden until release.
  // {
  //   slug: 'sa-tuwing-gumagabi',
  //   title: 'Sa Tuwing Gumagabi',
  //   releaseDate: 'New Release',
  //   primaryWords: ['SA', 'TUWING', 'GUMAGABI'],
  //   secondaryWords: ['IKAW', 'ANG', 'NASA', 'ISIP'],
  //   credits: [
  //     { name: 'Bernie Asis', roles: ['Composer', 'Lyricist'] },
  //     { name: 'Michael Peralta', roles: ['Composer'] },
  //   ],
  //   // Not yet on streaming platforms — section renders a "Streaming soon" note.
  //   accentColor: 'mango',
  //   secondaryAccentColor: 'teal',
  //   minSize: 0.6,
  //   maxSize: 1,
  //   secondaryMinOpacity: 0.06,
  // },
  {
    slug: 'bumuhos-ka-ulan',
    title: 'Bumuhos Ka Ulan',
    releaseDate: 'Released June 21, 2025',
    primaryWords: ['BUMUHOS', 'KA', 'ULAN'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['LUNURIN', 'MO', 'ANG', 'LANGIT', 'AT', 'LUPA'],
    credits: [
      { name: 'Bernie Asis', roles: ['Composer', 'Lyricist'] },
      { name: 'Michael Peralta', roles: ['Composer'] },
    ],
    links: [
      { platform: 'spotify', url: 'https://open.spotify.com/track/1OcF4sALwRO02rsDmWWCGb' },
      { platform: 'appleMusic', url: 'https://music.apple.com/us/album/bumuhos-ka-ulan/1821773704?i=1821773705' },
      { platform: 'youtubeMusic', url: 'https://music.youtube.com/watch?v=JNtzvxh5PI4' },
      { platform: 'deezer', url: 'https://www.deezer.com/track/3422733681' },
    ],
    audioUrl: '/audio/bumuhos-ka-ulan.mp3',
    artworkUrl: '/art/thumb_buhos.jpg',
    accentColor: 'teal',
    secondaryAccentColor: 'gold',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'inaaliw',
    title: 'Inaaliw',
    releaseDate: 'Released January 15, 2025',
    primaryWords: ['INAALIW'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['ANG', 'SARILI', 'UPANG', 'HINDI', 'MABALIW'],
    credits: [
      { name: 'Bernie Asis', roles: ['Composer', 'Lyricist'] },
      { name: 'Michael Peralta', roles: ['Composer'] },
    ],
    links: [
      { platform: 'spotify', url: 'https://open.spotify.com/track/5cp7KcJdzmMFAdzaU45N71' },
      { platform: 'appleMusic', url: 'https://music.apple.com/us/album/inaaliw/1789214142?i=1789214143' },
      { platform: 'youtubeMusic', url: 'https://music.youtube.com/watch?v=V8Gy7G-vaUI' },
      { platform: 'deezer', url: 'https://www.deezer.com/track/3173124691' },
    ],
    audioUrl: '/audio/inaaliw.mp3',
    artworkUrl: '/art/thumb_0005_INAALIW.png',
    accentColor: 'gold',
    secondaryAccentColor: 'jeepney',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'reyna-ng-gabi',
    title: 'Reyna Ng Gabi',
    releaseDate: 'Released November 30, 2024',
    primaryWords: ['REYNA', 'NG', 'GABI'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['IBUHOS', 'ANG', 'TAMIS'],
    credits: [
      { name: 'Bernie Asis', roles: ['Composer', 'Lyricist'] },
      { name: 'Arnie Gonzales', roles: ['Composer'] },
    ],
    links: [
      { platform: 'spotify', url: 'https://open.spotify.com/track/1Wfv0Z0pQ3dk08Il2DGiky' },
      { platform: 'appleMusic', url: 'https://music.apple.com/us/album/reyna-ng-gabi/1780710231?i=1780710233' },
      { platform: 'youtubeMusic', url: 'https://music.youtube.com/watch?v=p0okHpd575g' },
      { platform: 'deezer', url: 'https://www.deezer.com/track/3098569161' },
    ],
    audioUrl: '/audio/reyna-ng-gabi.mp3',
    artworkUrl: '/art/thumb_0000_REYNA-NG-GABI.png',
    accentColor: 'jeepney',
    secondaryAccentColor: 'avocado',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'meryendabol',
    title: 'Meryendabol',
    releaseDate: 'Released October 30, 2024',
    primaryWords: ['MERYENDABOL'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['WOOP!', 'WOOP!'],
    credits: [
      { name: 'Bernie Asis', roles: ['Composer', 'Lyricist'] },
      { name: 'Michael Peralta', roles: ['Composer'] },
    ],
    links: [
      { platform: 'spotify', url: 'https://open.spotify.com/track/4ysTQKMzzReD9Bxc8r1Q2A' },
      { platform: 'appleMusic', url: 'https://music.apple.com/us/album/meryendabol/1775831744?i=1775831746' },
      { platform: 'youtubeMusic', url: 'https://music.youtube.com/watch?v=xYJkw8dKb9k' },
      { platform: 'deezer', url: 'https://www.deezer.com/track/3067105181' },
    ],
    audioUrl: '/audio/meryendabol.mp3',
    artworkUrl: '/art/thumb_0004_MERYENDABOL.png',
    accentColor: 'teal',
    secondaryAccentColor: 'jeepney',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'kumot',
    title: 'Kumot',
    releaseDate: 'Released September 19, 2024',
    primaryWords: ['KUMOT'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['SUMUKOB', 'KA', 'NA'],
    credits: [
      { name: 'Bernie Asis', roles: ['Composer', 'Lyricist'] },
      { name: 'Michael Peralta', roles: ['Composer'] },
    ],
    links: [
      { platform: 'spotify', url: 'https://open.spotify.com/track/78lYFfPn47pZdZ8c8oyVL4' },
      { platform: 'appleMusic', url: 'https://music.apple.com/us/album/kumot/1767677294?i=1767677295' },
      { platform: 'youtubeMusic', url: 'https://music.youtube.com/watch?v=TALatFQsZC4' },
      { platform: 'deezer', url: 'https://www.deezer.com/track/2988096161' },
    ],
    audioUrl: '/audio/kumot.mp3',
    artworkUrl: '/art/thumb_0003_KUMOT.png',
    accentColor: 'walnut',
    secondaryAccentColor: 'mango',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'hansolo',
    title: 'Hansolo',
    releaseDate: 'Released July 25, 2024',
    primaryWords: ['HANSOLO'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['MAHIRAP', 'MAGLARO', 'NG', 'MAG-ISA'],
    credits: [
      { name: 'Bernie Asis', roles: ['Composer', 'Lyricist'] },
      { name: 'Michael Peralta', roles: ['Composer'] },
    ],
    links: [
      { platform: 'spotify', url: 'https://open.spotify.com/track/7eHFr71XAHhe1KGqBUIGU3' },
      { platform: 'appleMusic', url: 'https://music.apple.com/us/album/hansolo/1757440598?i=1757440601' },
      { platform: 'youtubeMusic', url: 'https://music.youtube.com/watch?v=jxepM-Q13U0' },
      { platform: 'deezer', url: 'https://www.deezer.com/track/2891547342' },
    ],
    audioUrl: '/audio/hansolo.mp3',
    artworkUrl: '/art/thumb_0002_HANSOLO.png',
    accentColor: 'avocado',
    secondaryAccentColor: 'walnut',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
  {
    slug: 'pakipot',
    title: 'Pakipot',
    releaseDate: 'Released June 25, 2024',
    primaryWords: ['PAKIPOT'],
    // TODO: replace with a real lyric line from the track.
    secondaryWords: ['GUSTO', 'RIN', 'NAMAN'],
    credits: [
      { name: 'Bernie Asis', roles: ['Composer', 'Lyricist'] },
      { name: 'Jay-ar Acibar', roles: ['Composer'] },
    ],
    links: [
      { platform: 'spotify', url: 'https://open.spotify.com/track/7AIJIVUpFshjHlmGji6RjV' },
      { platform: 'appleMusic', url: 'https://music.apple.com/us/album/pakipot-radio-edit/1751516862?i=1751516867' },
      { platform: 'youtubeMusic', url: 'https://music.youtube.com/watch?v=KE1or8wvbOU' },
      { platform: 'deezer', url: 'https://www.deezer.com/track/2851641572' },
    ],
    audioUrl: '/audio/pakipot.mp3',
    artworkUrl: '/art/thumb_0001_PAKIPOT.png',
    accentColor: 'gold',
    secondaryAccentColor: 'teal',
    minSize: 0.6,
    maxSize: 1,
    secondaryMinOpacity: 0.06,
  },
];
