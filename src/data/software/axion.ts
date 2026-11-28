export default {
  id: 'axion',
  order: 5,
  title: 'Axion Downloads Organizer',
  tagline: 'Automatically organize your Downloads folder in real time',
  lede: 'A lightweight Windows utility that silently monitors downloads and instantly sorts files into a structured folder hierarchy. Install it once and enjoy a permanently organized Downloads folder without changing your workflow.',
  category: 'utilities',
  version: '1.0.0',
  released: '2026-06-03',
  size: '65.9 MB',
  downloadUrl: 'https://github.com/Nothing-Just-a-Code/Axion-Downloads-Organizer/releases/latest',
  featured: true,
  screenshots: [
    {
      src: '/images/screenshots/axion/logo.png',
      alt: '',
    }
  ],
  features: [
    {
      title: 'Real-Time Organization',
      description: 'Continuously monitors your Downloads folder. Detects completed downloads and renamed files. Automatically creates missing folders. Runs silently in the background.',
    },
    {
      title: 'Intelligent Categorization',
      description: 'Automatically sorts files into logical categories: Images, Audio, Videos, Documents, Source Code, Archives, Applications, Databases, Fonts, 3D Models, and many more.',
    },
    {
      title: 'Smart Image Detection',
      description: 'Goes beyond simple file extensions. Small PNG and ICO files (≤256×256 pixels) are automatically detected as application icons. Larger images become wallpapers. Dimension analysis runs before normal rules.',
    },
    {
      title: 'Fully Customizable Rules',
      description: 'Every rule customizable through a simple JSON configuration file. Add new rules, disable existing ones, reorder, change destinations, create custom categories. Rules processed top to bottom, first match wins.',
    },
    {
      title: 'Safe File Handling',
      description: 'Ignores incomplete downloads and temporary browser files. Avoids moving files still being written. Handles duplicate filenames safely with multiple conflict resolution modes: Rename, Overwrite, or Skip.',
    },
    {
      title: 'System Tray Integration',
      description: 'Runs quietly in the notification area. Starts automatically with Windows. Minimal CPU usage and memory consumption. Install it once and forget it exists.',
    },
    {
      title: '100% Local Operation',
      description: 'No cloud services, no user accounts, no telemetry, no analytics, no tracking, no data collection. Your files never leave your computer.',
    },
    {
      title: 'Structured Folder Hierarchy',
      description: 'Ships with a comprehensive default structure: Pictures (Wallpapers, App Icons, GIFs, Vector, Raw, Screenshots), Audio, Videos, Documents, MS Office, Codes (by language), Applications, Archives, and MySQL.',
    },
    {
      title: 'Hundreds of File Extensions',
      description: 'Supports common formats out of the box: PNG, JPG, MP3, MP4, PDF, ZIP, RAR, and programming languages including Python, JavaScript, C#, Java, Go, Rust, and more.',
    },
    {
      title: 'Optimized for Background Operation',
      description: 'Lightweight memory usage, low CPU consumption, fast rule evaluation. Handles large download bursts reliably. Designed for long-term background operation.',
    },
  ],
  changelog: [
    {
      version: '1.0.0',
      date: '2026-06-03',
      title: 'Initial release',
      downloadUrl: 'https://github.com/Nothing-Just-a-Code/Axion-Downloads-Organizer/releases/tag/1.0.0',
      added: [
        'Real-time Downloads folder monitoring',
        'Intelligent file categorization with 10+ categories',
        'Smart image detection based on dimensions',
        'JSON-based customizable rule engine',
        'Safe file handling with conflict resolution',
        'System tray integration with auto-start',
        'Comprehensive default folder structure',
        'Support for hundreds of file extensions',
        '100% local operation with zero telemetry',
      ],
      improved: [],
      fixed: [],
    },
  ],
};