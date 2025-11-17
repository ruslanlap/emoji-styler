/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#24273a',
        surface: '#363a4f',
        overlay: '#494d64',
        text: '#cad3f5',
        subtext: '#b8c0e0',
        blue: '#8aadf4',
        lavender: '#b7bdf8',
        pink: '#f5bde6',
        mauve: '#c6a0f6',
        red: '#ed8796',
        peach: '#f5a97f',
        yellow: '#eed49f',
        green: '#a6da95',
        teal: '#8bd5ca',
        sky: '#91d7e3',
      },
    },
  },
  plugins: [],
}
