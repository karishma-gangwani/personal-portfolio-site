/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8fafc',   // Slate 50 (Very professional near-white)
          100: '#f1f5f9',  // Slate 100 (For light sections)
          200: '#e2e8f0',  // Slate 200 (For borders)
          600: '#475569',  // Slate 600 (For body text/subtitles)
          700: '#334155',  // Slate 700 (For primary buttons)
          900: '#0f172a',  // Slate 900 (Deep Navy for headlines)
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}