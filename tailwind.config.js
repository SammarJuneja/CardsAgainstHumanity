/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      colors: {
        "app-bg": "#16181e",
        "log-tab": "#050811",
        "signup-button": "#1f2b49",
        "login-button": "#323746"
      }
    },
  },
  plugins: [],
}