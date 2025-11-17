"""
Command-line interface for emoji-styler.
"""

import argparse
import sys

from emoji_styler.core import get_available_styles, style_text


def main():
    """Main CLI entry point."""
    parser = argparse.ArgumentParser(
        description="Transform boring text into fun emoji styles",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  emoji-styler "Hello world"
  emoji-styler "Hello world" --style hacker
  emoji-styler "PowerToys Run" --style cyberpunk
  emoji-styler --list-styles
        """,
    )

    parser.add_argument("text", nargs="?", help="Text to style")

    parser.add_argument(
        "-s",
        "--style",
        default="cute",
        choices=get_available_styles(),
        help="Style to apply (default: cute)",
    )

    parser.add_argument(
        "-l", "--list-styles", action="store_true", help="List all available styles"
    )

    parser.add_argument("-v", "--version", action="version", version="%(prog)s 0.0.1")

    args = parser.parse_args()

    if args.list_styles:
        print("Available styles:")
        for style_name in get_available_styles():
            print(f"  - {style_name}")
        return 0

    if not args.text:
        parser.print_help()
        return 1

    try:
        result = style_text(args.text, args.style)
        print(result)
        return 0
    except ValueError as e:
        print(f"Error: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
