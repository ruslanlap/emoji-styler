# Emoji Styler Web Demo

Interactive web demo for the [emoji-styler](https://github.com/ruslanlap/emoji-styler) Python package.

## Features

- 💫 Interactive text styling with 5 emoji styles
- 🎨 Beautiful UI with Catppuccin Macchiato theme
- 📱 Responsive design (mobile & desktop)
- ⚡ Fast - built with Next.js 14
- 🚀 Deployed on Vercel

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository `ruslanlap/emoji-styler`
4. Set root directory to `web/`
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from web directory
cd web
vercel

# Follow prompts to deploy
```

### Environment Variables

No environment variables needed for this project.

### Custom Domain

1. Go to your project on Vercel
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

## Project Structure

```
web/
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page (landing + demo)
│   └── globals.css       # Global styles
├── components/           # React components
│   └── EmojiStylerDemo.tsx  # Interactive demo component
├── lib/                  # Utility functions
│   └── styles.ts         # TypeScript port of emoji-styler
├── public/               # Static assets
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.js    # Tailwind CSS config
└── next.config.js        # Next.js config
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: Catppuccin Macchiato
- **Deployment**: Vercel

## Syncing with Python Package

The TypeScript styling logic in `lib/styles.ts` mirrors the Python package in `emoji_styler/styles.py`. When adding new styles:

1. Add to Python package first
2. Port to TypeScript
3. Keep function names and behavior identical

## Contributing

See main [CONTRIBUTING.md](../CONTRIBUTING.md) in root directory.

## License

MIT - see [LICENSE](../LICENSE)
