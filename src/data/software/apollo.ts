export default {
  id: 'apollo',
  order: 2,
  title: 'Apollo',
  tagline: 'Modern high-fidelity music player for Windows',
  lede: 'A local-first, audiophile-grade music player built for Windows. Designed for users who care about audio fidelity and want a modern, responsive interface without sacrificing control over their library.',
  category: 'media',
  version: '1.0.0',
  released: '2026-11-18',
  size: '45 MB',
  downloadUrl: 'https://github.com/Nothing-Just-a-Code/Apollo/releases/latest',
  featured: true,
  screenshots: [
    {
      src: '/images/screenshots/apollo/695004006-223d1922-a919-4deb-90d3-6f086465dd2f.png',
      alt: 'Home dashboard showing recently played tracks and library statistics',
    },
    {
      src: '/images/screenshots/apollo/695005658-aeb50606-684a-4640-b9d4-4f093af2a1a5.png',
      alt: 'Music library with real-time audio visualizer',
    },
    {
      src: '/images/screenshots/apollo/695008668-85ec9fad-623f-4562-bf09-e39a565a5c22.png',
      alt: 'Now playing view with word-by-word synced lyrics',
    },
    {
      src: '/images/screenshots/apollo/695009559-23916cc5-82d5-45f1-aebf-7cf7a07bcc89.png',
      alt: 'Studio-grade DSP settings with 10-band parametric EQ',
    },
  ],
  features: [
    {
      title: 'Bit-Perfect Audio',
      description: 'WASAPI Exclusive Mode bypasses the Windows mixer for unaltered, bit-perfect playback. Your original masters stay intact.',
    },
    {
      title: 'Studio-Grade DSP',
      description: '10-band parametric equalizer, compressor, limiter, reverb, and saturation—all adjustable in real-time with zero clicks.',
    },
    {
      title: 'Smart Volume Normalization',
      description: 'ReplayGain automatically normalizes volume across your entire library. No more manual adjustments between tracks.',
    },
    {
      title: 'Seamless Playback',
      description: 'Gapless playback and crossfade for continuous albums and playlists. Music flows without interruption.',
    },
    {
      title: 'Real-Time Visualizer',
      description: 'Genuine FFT-driven water-wave visualizer that reacts to actual audio data. See your music come alive.',
    },
    {
      title: 'Dynamic UI',
      description: 'Frosted-glass interface that extracts dominant colors from your album art. Every album gets its own visual identity.',
    },
    {
      title: 'Synced Lyrics',
      description: 'Auto-fetches word-by-word synced lyrics with smooth, cinematic scrolling. Sing along in real-time.',
    },
    {
      title: 'Instant Search',
      description: 'SQLite-backed database handles 100,000+ tracks without lag. Find any song in milliseconds.',
    },
    {
      title: 'Auto-Sync Library',
      description: 'Monitors your music folders and updates instantly when you rename or delete files in Windows.',
    },
    {
      title: 'Media Keys Support',
      description: 'Full System Media Transport Controls (SMTC). Control playback from your keyboard or lock screen.',
    },
  ],
  changelog: [
    {
      version: '1.0.1',
      date: '2026-11-18',
      title: 'Bug fixes and stability improvements',
      downloadUrl: 'https://github.com/Nothing-Just-a-Code/Apollo/releases/download/1.0.1/Apollo.Setup.exe',
      added: [],
      improved: [],
      fixed: [
        'Song playback issue where next track started randomly instead of actual next song',
        'Pause button not changing to Play when song ended',
        'Various known bugs resolved',
      ],
    },
    {
      version: '1.0.0',
      date: '2026-11-04',
      title: 'Initial release',
      downloadUrl: 'https://github.com/Nothing-Just-a-Code/Apollo/releases/download/1.0.0/Apollo.Setup.exe',
      added: [
        'WASAPI Exclusive Mode for bit-perfect audio',
        '10-band parametric EQ with real-time adjustment',
        'ReplayGain volume normalization',
        'Gapless playback and crossfade',
        'FFT-driven audio visualizer',
        'Dynamic glass UI with color extraction',
        'Synced lyrics with cinematic scrolling',
        'SQLite-backed library (100K+ track capacity)',
        'Auto-sync for music folders',
        'System media transport controls',
        'Smart file association',
      ],
      improved: [],
      fixed: [],
    },
  ],
};