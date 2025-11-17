"use client";

import { useState } from "react";
import { styleText, getAllStyles, type StyleName } from "@/lib/styles";

const EXAMPLES = [
  "Hello world",
  "PowerToys Run",
  "EasyEnv makes dev environments easy",
  "Emoji Styler is awesome",
];

export default function EmojiStylerDemo() {
  const [inputText, setInputText] = useState("Hello world");
  const [selectedStyle, setSelectedStyle] = useState<StyleName>("cute");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const styles = getAllStyles();

  const handleGenerate = () => {
    if (!inputText.trim()) {
      setResult("");
      return;
    }
    const styled = styleText(inputText, selectedStyle);
    setResult(styled);
  };

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExampleClick = (example: string) => {
    setInputText(example);
    const styled = styleText(example, selectedStyle);
    setResult(styled);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Style Selector */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-subtext">
          Choose Style
        </label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {styles.map((style) => (
            <button
              key={style.name}
              onClick={() => setSelectedStyle(style.name)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedStyle === style.name
                  ? "border-blue bg-surface shadow-lg scale-105"
                  : "border-overlay bg-background hover:border-lavender"
              }`}
            >
              <div className="text-3xl mb-1">{style.emoji}</div>
              <div className="text-sm font-medium text-text">
                {style.displayName}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-subtext">
          Your Text
        </label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to style..."
          className="w-full h-24 px-4 py-3 bg-surface border-2 border-overlay rounded-lg text-text placeholder-subtext/50 focus:border-blue focus:outline-none resize-none"
        />
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        disabled={!inputText.trim()}
        className="w-full py-3 px-6 bg-blue hover:bg-lavender disabled:bg-overlay disabled:cursor-not-allowed text-background font-medium rounded-lg transition-colors"
      >
        Generate ✨
      </button>

      {/* Result Area */}
      {result && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-subtext">
              Result
            </label>
            <button
              onClick={handleCopy}
              className="text-sm px-3 py-1 bg-surface hover:bg-overlay border border-overlay rounded text-text transition-colors"
            >
              {copied ? "Copied! ✓" : "Copy"}
            </button>
          </div>
          <div className="p-4 bg-surface border-2 border-overlay rounded-lg text-text break-words">
            {result}
          </div>
        </div>
      )}

      {/* Examples */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-subtext">
          Try Examples
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {EXAMPLES.map((example, idx) => (
            <button
              key={idx}
              onClick={() => handleExampleClick(example)}
              className="px-4 py-2 text-sm bg-surface hover:bg-overlay border border-overlay rounded text-text text-left transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
