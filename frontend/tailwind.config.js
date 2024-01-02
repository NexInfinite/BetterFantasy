/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      colors: {
        'main': '#FF1801',
        'dark-text': '#170908',
        'light-text': '#BBE4E8',
        'loading-bg': '#D9D9D9'
      },
      fontFamily: {
        "theme-regular": ["f1-regular", "monospace"],
        "theme-bold": ["f1-bold", "monospace"],
        "theme-wide": ["f1-wide", "monospace"]
      }
    },
  },
  plugins: [],
}