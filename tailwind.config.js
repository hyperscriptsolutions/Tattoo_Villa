/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf8eb',
          100: '#f5efcc',
          200: '#ebdca0',
          300: '#dfc46f',
          400: '#d2ab45',
          500: '#c59b27', // Signature Metallic Gold
          600: '#a37c1d',
          700: '#7f5d19',
          800: '#674a1a',
          900: '#563e1a',
        },
        charcoal: {
          950: '#070709',
          900: '#0c0c0e',
          850: '#121216',
          800: '#17171d',
          700: '#23232c',
          600: '#32323e',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient-dark': 'radial-gradient(circle at 50% 0%, rgba(197, 155, 39, 0.08) 0%, rgba(12, 12, 14, 0) 70%)',
        'gold-shimmer': 'linear-gradient(135deg, #c59b27 0%, #ecd083 50%, #b88a1c 100%)',
      }
    },
  },
  plugins: [],
}
