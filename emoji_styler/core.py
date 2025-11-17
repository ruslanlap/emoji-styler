"""
Core functionality for emoji styling.
"""

from typing import List

from emoji_styler.styles import STYLES


def style_text(text: str, style: str = "cute") -> str:
    """
    Apply emoji styling to text.

    Args:
        text: Input text to style
        style: Style name (cute, hacker, neon, cyberpunk, minimal)

    Returns:
        Styled text with emojis

    Raises:
        ValueError: If style is not recognized

    Examples:
        >>> style_text("Hello", "cute")
        '✨ 💖 H 💫 e 🌸 l 💕 l 🌟 o ✨'

        >>> style_text("Hello", "hacker")
        '⚡ H3ll0 ⚡'
    """
    if style not in STYLES:
        available = ", ".join(STYLES.keys())
        raise ValueError(f"Unknown style '{style}'. Available: {available}")

    style_func = STYLES[style]
    return style_func(text)


def get_available_styles() -> List[str]:
    """
    Get list of available style names.

    Returns:
        List of style names
    """
    return list(STYLES.keys())
