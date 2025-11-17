# Emoji Styler ✨

Transform boring text into fun emoji styles! Make your text stand out with kawaii, hacker, neon, cyberpunk, and minimal styles.

## Features

- 🎨 **5 unique styles**: cute, hacker, neon, cyberpunk, minimal
- 🐍 **Python API**: Use in your Python projects
- 💻 **CLI tool**: Style text from command line
- 🚀 **Lightweight**: Zero dependencies
- 🌐 **Web demo**: Try it online at [emoji-styler.vercel.app](https://emoji-styler.vercel.app) (coming soon)

## Installation

```bash
pip install emoji-styler
```

## Quick Start

### Command Line

```bash
# Default cute style
emoji-styler "Hello world"
# ✨ 💖 H 💫 e 🌸 l 💕 l 🌟 o   💖 w 💫 o 🌸 r 💕 l 🌟 d ✨

# Hacker style
emoji-styler "Hello world" --style hacker
# ⚡ H3ll0 w0rld ⚡

# Cyberpunk style
emoji-styler "PowerToys Run" --style cyberpunk
# ⚡ ⟨P⟩⟨O⟩⟨W⟩⟨E⟩⟨R⟩⟨T⟩⟨O⟩⟨Y⟩⟨S⟩⚡⟨R⟩⟨U⟩⟨N⟩ ⚡

# List all styles
emoji-styler --list-styles
```

### Python API

```python
from emoji_styler import style_text, get_available_styles

# Style some text
result = style_text("Hello", style="cute")
print(result)
# ✨ 💖 H 💫 e 🌸 l 💕 l 🌟 o ✨

# Get available styles
styles = get_available_styles()
print(styles)
# ['cute', 'hacker', 'neon', 'cyberpunk', 'minimal']

# Try different styles
for style in ['hacker', 'neon', 'minimal']:
    print(f"{style}: {style_text('Hello', style)}")
```

## Available Styles

### Cute (default)
Kawaii aesthetic with hearts and sparkles
```
Input:  Hello world
Output: ✨ 💖 H 💫 e 🌸 l 💕 l 🌟 o   💖 w 💫 o 🌸 r 💕 l 🌟 d ✨
```

### Hacker
1337 speak with letter substitutions
```
Input:  Hello world
Output: ⚡ H3ll0 w0rld ⚡
```

### Neon
Rainbow glow vibes with uppercase
```
Input:  Hello world
Output: 🌈 H E L L O 🌟 W O R L D 🌈
```

### Cyberpunk
Futuristic brackets and lightning
```
Input:  Hello world
Output: ⚡ ⟨H⟩⟨E⟩⟨L⟩⟨L⟩⟨O⟩⚡⟨W⟩⟨O⟩⟨R⟩⟨L⟩⟨D⟩ ⚡
```

### Minimal
Clean aesthetic with dots
```
Input:  Hello world
Output: H・e・l・l・o ・o・r・l・d
```

## Web Demo

Try it online: [emoji-styler.vercel.app](https://emoji-styler.vercel.app)

The web demo is built with Next.js and TypeScript, featuring:
- Interactive text styling
- Beautiful Catppuccin Macchiato theme
- Mobile-friendly responsive design
- Live examples and presets

See [web/README.md](web/README.md) for development details.

## Project Structure

```
emoji-styler/
├── emoji_styler/          # Python package
│   ├── __init__.py        # Package exports
│   ├── core.py            # Main style_text() function
│   ├── styles.py          # Style implementations
│   └── cli.py             # Command-line interface
├── tests/                 # Python tests
├── web/                   # Next.js web demo
│   ├── app/               # Next.js pages
│   ├── components/        # React components
│   ├── lib/               # TypeScript styles (ported from Python)
│   └── README.md          # Web demo docs
├── .github/
│   └── workflows/         # CI/CD pipelines
│       ├── publish.yml    # PyPI publishing
│       └── test.yml       # Automated testing
├── pyproject.toml         # Python package config
├── LICENSE                # MIT license
└── README.md              # This file
```

## Development

### Python Package

```bash
# Clone repository
git clone https://github.com/ruslanlap/emoji-styler.git
cd emoji-styler

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install in development mode
pip install -e ".[dev]"

# Run tests
pytest

# Run tests with coverage
pytest --cov=emoji_styler
```

### Web Demo

```bash
# Navigate to web directory
cd web

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

See [web/README.md](web/README.md) for deployment instructions.

## Publishing

### To PyPI

Publishing is automated via GitHub Actions. To release a new version:

```bash
# 1. Update version in pyproject.toml
# 2. Commit and push
git add pyproject.toml
git commit -m "Bump version to 0.2.0"
git push

# 3. Create and push tag
git tag v0.2.0
git push origin v0.2.0

# 4. GitHub Actions will automatically:
#    - Build package
#    - Create GitHub release
#    - Publish to PyPI
```

See [.github/RELEASE.md](.github/RELEASE.md) for detailed instructions.

### Web Demo to Vercel

```bash
cd web
vercel
# Follow prompts
```

Or connect your GitHub repo to Vercel dashboard for automatic deployments.

## Roadmap

- [x] Python package with CLI
- [x] Web demo with Next.js
- [x] Automated publishing to PyPI
- [ ] Telegram bot for styling messages
- [ ] VS Code extension
- [ ] More emoji styles (retro, space, nature)
- [ ] Custom style creator
- [ ] REST API endpoint

## Contributing

Contributions welcome! Feel free to:
- Suggest new styles
- Report bugs
- Submit pull requests

## License

MIT License - see [LICENSE](LICENSE) file for details

## Links

- 📦 [PyPI](https://pypi.org/project/emoji-styler/)
- 🐙 [GitHub](https://github.com/ruslanlap/emoji-styler)
- 🌐 [Web Demo](https://emoji-styler.vercel.app) (coming soon)
- 🤖 [Telegram Bot](https://t.me/emoji_styler_bot) (coming soon)

---

Made with 💖 by [Ruslan](https://github.com/ruslanlap)
