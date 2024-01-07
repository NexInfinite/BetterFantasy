/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        "main": "var(--color-main)",
        "dark-text": "var(--color-dark-text)",
        "light-text": "var(--color-light-text)",
        "loading-bg": "var(--color-loading-bg)",
        "navbar-hover": "var(--color-navbar-hover)",
        "footer-main": "var(--color-footer-main)"
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