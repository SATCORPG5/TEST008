/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-void': '#0B0C10',
        'indigo-atmosphere': '#1F2833',
        'cyan-structure': '#66FCF1',
        'violet-intelligence': '#C5C6C7',
        'gold-signal': '#FFD700'
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
