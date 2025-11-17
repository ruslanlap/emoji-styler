import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emoji Styler - Transform Text into Fun Emoji Styles",
  description: "Turn boring text into fun emoji styles! Try cute, hacker, neon, cyberpunk, and minimal styles. Free online tool powered by Python package.",
  keywords: ["emoji", "text styling", "emoji generator", "text decorator", "fun text"],
  authors: [{ name: "Ruslan" }],
  openGraph: {
    title: "Emoji Styler",
    description: "Transform boring text into fun emoji styles",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
