import EmojiStylerDemo from "@/components/EmojiStylerDemo";
import { getAllStyles } from "@/lib/styles";

export default function Home() {
  const styles = getAllStyles();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-overlay">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">✨</span>
              <h1 className="text-2xl font-bold text-text">Emoji Styler</h1>
            </div>
            <a
              href="https://github.com/ruslanlap/emoji-styler"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-surface hover:bg-overlay border border-overlay rounded text-text transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
          Transform Boring Text into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink via-mauve to-blue">
            Fun Emoji Styles
          </span>
        </h2>
        <p className="text-lg text-subtext max-w-2xl mx-auto mb-8">
          Make your text stand out with kawaii, hacker, neon, cyberpunk, and
          minimal styles. Free, fast, and fun!
        </p>
      </section>

      {/* Demo Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <EmojiStylerDemo />
      </section>

      {/* Styles Showcase */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-text mb-6 text-center">
          Available Styles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {styles.map((style) => (
            <div
              key={style.name}
              className="p-6 bg-surface border border-overlay rounded-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{style.emoji}</span>
                <h4 className="text-xl font-semibold text-text">
                  {style.displayName}
                </h4>
              </div>
              <p className="text-subtext text-sm mb-4">{style.description}</p>
              <div className="space-y-2">
                <div className="text-xs text-subtext">Example:</div>
                <div className="p-3 bg-background rounded border border-overlay text-text break-words">
                  {style.fn("Hello world")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Python Package Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-overlay">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-text mb-3">
            Python Package Available
          </h3>
          <p className="text-subtext">
            Use emoji-styler in your Python projects and CLI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Installation */}
          <div className="p-6 bg-surface border border-overlay rounded-lg">
            <h4 className="text-lg font-semibold text-text mb-3">
              Installation
            </h4>
            <pre className="p-3 bg-background rounded text-green text-sm overflow-x-auto">
              pip install emoji-styler
            </pre>
          </div>

          {/* CLI Usage */}
          <div className="p-6 bg-surface border border-overlay rounded-lg">
            <h4 className="text-lg font-semibold text-text mb-3">CLI Usage</h4>
            <pre className="p-3 bg-background rounded text-blue text-sm overflow-x-auto">
              emoji-styler "Hello" --style cute
            </pre>
          </div>

          {/* Python API */}
          <div className="p-6 bg-surface border border-overlay rounded-lg md:col-span-2">
            <h4 className="text-lg font-semibold text-text mb-3">
              Python API
            </h4>
            <pre className="p-3 bg-background rounded text-text text-sm overflow-x-auto">
              {`from emoji_styler import style_text

result = style_text("Hello", style="cute")
print(result)  # ✨ 💖 H 💫 e 🌸 l 💕 l 🌟 o ✨`}
            </pre>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://github.com/ruslanlap/emoji-styler"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue hover:bg-lavender text-background font-medium rounded-lg transition-colors"
          >
            View on GitHub
          </a>
          <a
            href="https://pypi.org/project/emoji-styler/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-surface hover:bg-overlay border border-overlay text-text font-medium rounded-lg transition-colors"
          >
            View on PyPI
          </a>
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-overlay">
        <h3 className="text-2xl font-bold text-text mb-6 text-center">
          Coming Soon
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-surface border border-overlay rounded-lg text-center">
            <div className="text-3xl mb-2">🤖</div>
            <div className="text-text font-medium">Telegram Bot</div>
            <div className="text-sm text-subtext">
              Style your messages on the go
            </div>
          </div>
          <div className="p-4 bg-surface border border-overlay rounded-lg text-center">
            <div className="text-3xl mb-2">💻</div>
            <div className="text-text font-medium">VS Code Extension</div>
            <div className="text-sm text-subtext">
              Style text in your editor
            </div>
          </div>
          <div className="p-4 bg-surface border border-overlay rounded-lg text-center">
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-text font-medium">More Styles</div>
            <div className="text-sm text-subtext">
              Retro, space, nature & more
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-overlay mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-subtext text-sm">
          <p>
            Made with 💖 by{" "}
            <a
              href="https://github.com/ruslanlap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline"
            >
              Ruslan
            </a>
          </p>
          <p className="mt-2">
            Open source under MIT License •{" "}
            <a
              href="https://github.com/ruslanlap/emoji-styler/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline"
            >
              Suggest a feature
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
