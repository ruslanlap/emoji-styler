"""
Different emoji styling functions.
Each function takes text and returns styled version with emojis.
"""

from typing import Callable, Dict


def cute_style(text: str) -> str:
    """Kawaii cute style with sparkles and hearts."""
    emojis = ["💖", "💫", "🌸", "💕", "🌟"]
    chars = list(text)

    styled_chars = []
    emoji_idx = 0

    for ch in chars:
        if ch == " ":
            styled_chars.append(" ")
        else:
            emoji = emojis[emoji_idx % len(emojis)]
            styled_chars.append(f"{emoji} {ch}")
            emoji_idx += 1

    result = " ".join(styled_chars)
    return f"✨ {result} ✨"


def hacker_style(text: str) -> str:
    """1337 hacker style with letter substitutions."""
    replacements = {
        'a': '4', 'A': '4',
        'e': '3', 'E': '3',
        'i': '1', 'I': '1',
        'o': '0', 'O': '0',
        's': '5', 'S': '5',
        't': '7', 'T': '7',
    }

    result = ""
    for ch in text:
        result += replacements.get(ch, ch)

    return f"⚡ {result} ⚡"


def neon_style(text: str) -> str:
    """Neon glow style with rainbow vibes."""
    chars = list(text)
    styled_chars = []

    for ch in chars:
        if ch == " ":
            styled_chars.append("🌟")
        else:
            styled_chars.append(ch.upper())

    result = " ".join(styled_chars)
    return f"🌈 {result} 🌈"


def cyberpunk_style(text: str) -> str:
    """Cyberpunk futuristic style with brackets."""
    chars = list(text)
    styled_chars = []

    for ch in chars:
        if ch == " ":
            styled_chars.append("⚡")
        else:
            styled_chars.append(f"⟨{ch.upper()}⟩")

    result = "".join(styled_chars)
    return f"⚡ {result} ⚡"


def minimal_style(text: str) -> str:
    """Clean minimal style with dots."""
    chars = list(text)
    styled_chars = []

    for ch in chars:
        if ch == " ":
            styled_chars.append(" ")
        else:
            styled_chars.append(ch)

    return "・".join(styled_chars)


# Registry of all available styles
STYLES: Dict[str, Callable[[str], str]] = {
    "cute": cute_style,
    "hacker": hacker_style,
    "neon": neon_style,
    "cyberpunk": cyberpunk_style,
    "minimal": minimal_style,
}
