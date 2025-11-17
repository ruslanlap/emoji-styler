"""Tests for emoji styling functions."""

import pytest
from emoji_styler import style_text, get_available_styles
from emoji_styler.styles import (
    cute_style,
    hacker_style,
    neon_style,
    cyberpunk_style,
    minimal_style,
)


class TestStyleText:
    """Tests for the main style_text function."""

    def test_style_text_cute(self):
        """Test cute style application."""
        result = style_text("Hi", "cute")
        assert "✨" in result
        assert "💖" in result or "💫" in result

    def test_style_text_hacker(self):
        """Test hacker style application."""
        result = style_text("Hello", "hacker")
        assert "⚡" in result
        assert "3" in result  # 'e' -> '3'
        assert "0" in result  # 'o' -> '0'

    def test_style_text_neon(self):
        """Test neon style application."""
        result = style_text("Hi", "neon")
        assert "🌈" in result
        assert "H" in result
        assert "I" in result

    def test_style_text_cyberpunk(self):
        """Test cyberpunk style application."""
        result = style_text("Hi", "cyberpunk")
        assert "⚡" in result
        assert "⟨" in result
        assert "⟩" in result

    def test_style_text_minimal(self):
        """Test minimal style application."""
        result = style_text("Hi", "minimal")
        assert "・" in result
        assert "H" in result
        assert "i" in result

    def test_style_text_invalid_style(self):
        """Test that invalid style raises ValueError."""
        with pytest.raises(ValueError, match="Unknown style"):
            style_text("Hello", "invalid_style")

    def test_style_text_default(self):
        """Test default style (cute) when no style specified."""
        result = style_text("Hi")
        assert "✨" in result


class TestIndividualStyles:
    """Tests for individual style functions."""

    def test_cute_style_empty(self):
        """Test cute style with empty string."""
        result = cute_style("")
        assert result == "✨  ✨"

    def test_hacker_style_no_replacements(self):
        """Test hacker style with characters that don't get replaced."""
        result = hacker_style("xyz")
        assert "xyz" in result
        assert "⚡" in result

    def test_hacker_style_case_insensitive(self):
        """Test hacker style handles both cases."""
        result_lower = hacker_style("elite")
        result_upper = hacker_style("ELITE")
        assert "3" in result_lower  # e -> 3
        assert "3" in result_upper  # E -> 3

    def test_neon_style_spaces(self):
        """Test neon style replaces spaces with stars."""
        result = neon_style("a b")
        assert "🌟" in result

    def test_cyberpunk_style_uppercase(self):
        """Test cyberpunk converts to uppercase."""
        result = cyberpunk_style("hello")
        assert "⟨H⟩" in result
        assert "⟨E⟩" in result

    def test_minimal_style_preserves_spaces(self):
        """Test minimal style preserves spaces."""
        result = minimal_style("a b")
        assert " " in result
        assert "・" in result


class TestAvailableStyles:
    """Tests for style enumeration."""

    def test_get_available_styles(self):
        """Test getting list of available styles."""
        styles = get_available_styles()
        assert isinstance(styles, list)
        assert len(styles) == 5
        assert "cute" in styles
        assert "hacker" in styles
        assert "neon" in styles
        assert "cyberpunk" in styles
        assert "minimal" in styles

    def test_all_styles_work(self):
        """Test that all available styles can be applied."""
        test_text = "Hello"
        for style in get_available_styles():
            result = style_text(test_text, style)
            assert result != test_text  # Should be modified
            assert len(result) > 0  # Should not be empty
