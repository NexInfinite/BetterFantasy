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
        'f1-red': '#FF1801',
        'dark-text': '#170908',
        'light-text': '#BBE4E8',
        'loading-bg': '#D9D9D9'
      }
    },
  },
  plugins: [],
}