export default {
  id: 'nexusforge',
  order: 4,
  title: 'NexusForge',
  tagline: 'The intelligent archiver',
  lede: 'Create .nxs archives that are smaller, safer, and smarter than traditional formats. NexusForge analyses every file before compressing, applies smart lossless transforms, and packs everything with a modern, multi-threaded engine.',
  category: 'utilities',
  version: '1.1.0',
  released: '2026-06-19',
  size: '67.3 MB',
  downloadUrl: 'https://github.com/Nothing-Just-a-Code/NexusForge/releases/latest',
  docsUrl: 'https://njac.shop/products/nexusforge',
  featured: true,
  icon: '/images/icons/App Icon.png',
  screenshots: [
    {
      src: '/images/screenshots/nexusforge/logo.png',
      alt: '',}
  ],
  features: [
    {
      title: 'Content-Aware Compression',
      description: 'Classifies every file and applies reversible filters before compression. Text, code, audio, and executables get smart pre-filters. Up to 40% smaller archives on real-world data compared to plain ZIP or 7-Zip.',
    },
    {
      title: 'AES-256-GCM Authenticated Encryption',
      description: 'Every entry encrypted independently with unique salt and authentication tag. Tamper detection — if even a single byte is modified, extraction fails immediately. Wrong password gives clean error, not garbage data.',
    },
    {
      title: 'Self-Repair Records',
      description: 'Reed-Solomon error correction built in. Free: up to 5% redundancy survives minor damage. Pro: up to 100% redundancy — even if half the archive is destroyed, everything can be recovered.',
    },
    {
      title: 'Random Access in Solid Archives',
      description: 'Extract a single file from a massive solid forge without decompressing the whole thing. Not all archive apps can do this.',
    },
    {
      title: 'In-Place Rename',
      description: 'Change file names inside the forge without extracting or re-compressing it.',
    },
    {
      title: 'Extraction Cache',
      description: 'Open a file once, and it\'s available instantly the next time. Even encrypted files, after you enter the password once.',
    },
    {
      title: 'VirusTotal Integration',
      description: 'Right-click any file inside a forge to scan its hash against VirusTotal\'s database of 70+ antivirus engines. No extraction needed.',
    },
    {
      title: 'Split and Merge',
      description: 'Split large forges into smaller parts for sharing. Merge is free — anyone can reassemble. Split is Pro. Works with encrypted archives.',
    },
    {
      title: 'Modern Dark UI',
      description: 'Clean, professional interface with ribbon-style main window. Dedicated compression and extraction forms with per-file progress. Multi-instance extraction support.',
    },
    {
      title: 'Command-Line Interface (Pro)',
      description: 'Automate everything: create, list, extract, split, merge, repair. Modern colored console output with real-time progress bars and detailed statistics.',
    },
    {
      title: 'Streaming Architecture',
      description: 'Files flow to disk while verifying integrity. No full-file buffering. Encrypted files decrypted as they\'re read, not loaded into RAM. Handles files of any size without memory spikes.',
    },
    {
      title: 'The .nxs Format',
      description: 'Purpose-built 64-bit clean binary format. No 4 GB file-size wall. Per-entry xxHash3 verification. Extensible metadata fields for future enhancements.',
    },
  ],
  changelog: [
    {
      version: '1.1.0',
      date: '2026-06-19',
      title: 'Performance and usability improvements',
      downloadUrl: 'https://github.com/Nothing-Just-a-Code/NexusForge/releases/tag/1.1.0',
      added: [
        'Drag and drop files and folders in the files list panel when creating a new forge',
      ],
      improved: [
        'Compression speed improved for non password-protected forges',
      ],
      fixed: [],
    },
    {
      version: '1.0.0',
      date: '2026-05-25',
      title: 'Initial release',
      downloadUrl: 'https://github.com/Nothing-Just-a-Code/NexusForge/releases/tag/1.0.0',
      added: [
        'Content-aware compression with smart pre-filters for text, code, audio, and executables',
        'AES-256-GCM authenticated encryption with per-entry keys',
        'Self-repair records with Reed-Solomon error correction',
        'Random access in solid archives',
        'In-place rename without re-packing',
        'Extraction cache for instant re-access',
        'VirusTotal integration for scanning files inside archives',
        'Split and merge functionality',
        'Modern dark UI with ribbon-style interface',
        'Command-line interface for automation',
        'The .nxs archive format with 64-bit support',
      ],
      improved: [],
      fixed: [],
    },
  ],
};